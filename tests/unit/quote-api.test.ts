import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/quote/route";
import * as emailModule from "@/lib/email/send-quote";
import { resetRateLimitStore } from "@/lib/security/rate-limit";
import * as turnstileModule from "@/lib/security/turnstile";

describe("POST /api/quote Route Handler Security & Validation", () => {
  const getFutureDateISO = (daysAhead: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    return d.toISOString().split("T")[0];
  };

  const getValidPayload = () => ({
    serviceType: "house-removals",
    moveDate: getFutureDateISO(14),
    pickupPostcode: "SW1A 1AA",
    deliveryPostcode: "M1 1AE",
    helpers: "2_helpers",
    propertyType: "terraced",
    accessNotes: "2nd floor flat, lift available",
    fullName: "Arthur Dent",
    phone: "07405 328 674",
    email: "arthur@example.co.uk",
    notes: "Careful with the tea set",
    consent: true,
    honeypot: "",
    turnstileToken: "valid-turnstile-token",
    plannerSummary: {
      items: [
        { id: "double-bed", name: "Double Bed", quantity: 1, volumeM3: 1.8 },
      ],
      totalVolumeM3: 1.8,
      vanFillPercentage: 10,
      suggestedHelpers: "Driver + 1 Helper",
      summaryText: "1x Double Bed",
    },
  });

  beforeEach(() => {
    vi.restoreAllMocks();
    resetRateLimitStore();
    // Default mock for sendQuoteEmail: resolves success
    vi.spyOn(emailModule, "sendQuoteEmail").mockResolvedValue({
      success: true,
    });
    // Default mock for verifyTurnstileToken: resolves true
    vi.spyOn(turnstileModule, "verifyTurnstileToken").mockResolvedValue(true);
  });

  it("1. Successfully processes and dispatches a valid quote submission", async () => {
    const payload = getValidPayload();
    const req = new NextRequest("http://localhost:3000/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.50",
      },
      body: JSON.stringify(payload),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.message).toContain("successfully");

    // Verify email service was invoked
    expect(emailModule.sendQuoteEmail).toHaveBeenCalledTimes(1);
  });

  it("2. Returns 400 Bad Request with field errors on invalid submission data", async () => {
    const invalidPayload = {
      ...getValidPayload(),
      moveDate: "2020-01-01", // Past date
      accessNotes: "x".repeat(1500), // Exceeds 1000 limit
      notes: "y".repeat(2500), // Exceeds 2000 limit
    };

    const req = new NextRequest("http://localhost:3000/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.51",
      },
      body: JSON.stringify(invalidPayload),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const json = await res.json();
    expect(json.error).toBe("Invalid submission data.");
    expect(json.details).toBeDefined();
    expect(json.details.moveDate).toBeDefined();
    expect(json.details.accessNotes).toBeDefined();
    expect(json.details.notes).toBeDefined();

    // Verify email service was NOT invoked
    expect(emailModule.sendQuoteEmail).not.toHaveBeenCalled();
  });

  it("2b. Successfully processes quote submission when optional fields are blank but contact is provided", async () => {
    const blankPayload = {
      pickupPostcode: "",
      deliveryPostcode: "",
      fullName: "",
      phone: "07405 328 674",
      email: "",
      moveDate: "",
      notes: "",
    };

    const req = new NextRequest("http://localhost:3000/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.55",
      },
      body: JSON.stringify(blankPayload),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json.success).toBe(true);
    expect(emailModule.sendQuoteEmail).toHaveBeenCalled();
  });

  it("2c. Returns 400 Bad Request when both phone and email are missing", async () => {
    const noContactPayload = {
      pickupPostcode: "SW1",
      deliveryPostcode: "M1",
      fullName: "Jane",
      phone: "",
      email: "",
    };

    const req = new NextRequest("http://localhost:3000/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.56",
      },
      body: JSON.stringify(noContactPayload),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const json = await res.json();
    expect(json.error).toBe("Invalid submission data.");
    expect(json.details.phone).toBeDefined();
    expect(json.details.email).toBeDefined();
    expect(emailModule.sendQuoteEmail).not.toHaveBeenCalled();
  });

  it("3. Honeypot trap: silently returns 200 without sending email if honeypot is filled", async () => {
    const honeypotPayload = {
      ...getValidPayload(),
      honeypot: "https://spambot-link.com", // Bot filled honeypot
    };

    const req = new NextRequest("http://localhost:3000/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.52",
      },
      body: JSON.stringify(honeypotPayload),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json.success).toBe(true);

    // Critical: No email should ever be sent for honeypot traps
    expect(emailModule.sendQuoteEmail).not.toHaveBeenCalled();
  });

  it("4. Enforces per-IP rate limit (max 5 requests per 10 mins) and returns 429 on 6th request", async () => {
    const ip = "192.168.1.99";

    // First 5 requests should succeed
    for (let i = 0; i < 5; i++) {
      const req = new NextRequest("http://localhost:3000/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-forwarded-for": ip,
        },
        body: JSON.stringify(getValidPayload()),
      });

      const res = await POST(req);
      expect(res.status).toBe(200);
    }

    // 6th request from the same IP must be rejected with 429
    const reqBlocked = new NextRequest("http://localhost:3000/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": ip,
      },
      body: JSON.stringify(getValidPayload()),
    });

    const resBlocked = await POST(reqBlocked);
    expect(resBlocked.status).toBe(429);

    const jsonBlocked = await resBlocked.json();
    expect(jsonBlocked.error).toContain("Too many requests");
  });

  it("5. Returns 400 Bad Request when Turnstile verification fails", async () => {
    vi.spyOn(turnstileModule, "verifyTurnstileToken").mockResolvedValue(false);

    const payload = {
      ...getValidPayload(),
      turnstileToken: "bad-bot-token",
    };

    const req = new NextRequest("http://localhost:3000/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.55",
      },
      body: JSON.stringify(payload),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const json = await res.json();
    expect(json.error).toContain("Bot verification challenge failed");
    expect(emailModule.sendQuoteEmail).not.toHaveBeenCalled();
  });

  it("6. Rejects payloads exceeding maximum allowable body size with 413", async () => {
    // 70 KB payload exceeds 64 KB limit
    const largePadding = "x".repeat(70 * 1024);
    const oversizedPayload = {
      ...getValidPayload(),
      notes: largePadding,
    };

    const req = new NextRequest("http://localhost:3000/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "content-length": String(75 * 1024),
        "x-forwarded-for": "192.168.1.56",
      },
      body: JSON.stringify(oversizedPayload),
    });

    const res = await POST(req);
    expect(res.status).toBe(413);

    const json = await res.json();
    expect(json.error).toContain("Payload too large");
  });
});
