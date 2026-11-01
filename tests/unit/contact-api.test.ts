import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/contact/route";
import { resetRateLimitStore } from "@/lib/security/rate-limit";

vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ id: "mock-id" }),
    },
  })),
}));

describe("POST /api/contact Route Handler Security & Validation", () => {
  const getValidPayload = () => ({
    fullName: "Jane Doe",
    email: "jane.doe@example.co.uk",
    phone: "07123 456 789",
    subject: "Removals enquiry for Bristol",
    message:
      "Hello, looking to book a Luton van for a 2-bedroom flat move next month.",
    honeypot: "",
  });

  beforeEach(() => {
    vi.restoreAllMocks();
    resetRateLimitStore();
  });

  it("successfully handles valid contact submissions with 200 OK", async () => {
    const payload = getValidPayload();
    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "198.51.100.1",
      },
      body: JSON.stringify(payload),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.message).toContain("Thank you");
  });

  it("returns 400 Bad Request when required fields are missing or invalid", async () => {
    const invalidPayload = {
      fullName: "", // invalid: empty
      email: "not-an-email", // invalid: malformed
      phone: "123", // invalid: too short
      subject: "",
      message: "Short",
    };

    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "198.51.100.2",
      },
      body: JSON.stringify(invalidPayload),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const data = await res.json();
    expect(data.error).toBeDefined();
  });

  it("silently traps bot honeypot submission without error", async () => {
    const payload = {
      ...getValidPayload(),
      honeypot: "I am a spam bot",
    };

    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "198.51.100.3",
      },
      body: JSON.stringify(payload),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
  });

  it("enforces rate limit of 5 requests per 10 minutes", async () => {
    const testIp = "198.51.100.44";

    for (let i = 0; i < 5; i++) {
      const req = new NextRequest("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-forwarded-for": testIp,
        },
        body: JSON.stringify(getValidPayload()),
      });
      const res = await POST(req);
      expect(res.status).toBe(200);
    }

    // 6th request from the same IP must be rejected with 429 Too Many Requests
    const reqBlocked = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": testIp,
      },
      body: JSON.stringify(getValidPayload()),
    });
    const resBlocked = await POST(reqBlocked);
    expect(resBlocked.status).toBe(429);

    const data = await resBlocked.json();
    expect(data.error).toContain("Too many requests");
    expect(resBlocked.headers.get("Retry-After")).toBeDefined();
  });

  it("returns 413 Payload Too Large when payload exceeds 64 KB", async () => {
    const hugeMessage = "A".repeat(70 * 1024);
    const payload = {
      ...getValidPayload(),
      message: hugeMessage,
    };
    const bodyStr = JSON.stringify(payload);

    const req = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": String(bodyStr.length),
        "x-forwarded-for": "198.51.100.5",
      },
      body: bodyStr,
    });

    const res = await POST(req);
    expect(res.status).toBe(413);

    const data = await res.json();
    expect(data.error).toContain("exceeds maximum allowed size");
  });
});
