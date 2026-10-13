import { type NextRequest, NextResponse } from "next/server";
import { sendQuoteEmail } from "@/lib/email/send-quote";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { sanitizeObject } from "@/lib/security/sanitize";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { quoteFormSchema } from "@/lib/validations/quote";

// Maximum allowable request payload size: 64 KB
const MAX_BODY_SIZE_BYTES = 64 * 1024;

export async function POST(request: NextRequest) {
  try {
    // 1. Enforce payload size limit from Content-Length header if present
    const contentLength = request.headers.get("content-length");
    if (
      contentLength &&
      Number.parseInt(contentLength, 10) > MAX_BODY_SIZE_BYTES
    ) {
      return NextResponse.json(
        { error: "Payload too large. Request body exceeds allowable size." },
        { status: 413 },
      );
    }

    // 2. Read and enforce raw text body size limit
    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_SIZE_BYTES) {
      return NextResponse.json(
        { error: "Payload too large. Request body exceeds allowable size." },
        { status: 413 },
      );
    }

    // 3. Safe JSON parsing
    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch (_err) {
      return NextResponse.json(
        { error: "Invalid JSON format in request body." },
        { status: 400 },
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Request payload must be a JSON object." },
        { status: 400 },
      );
    }

    // 4. Client IP resolution & Sliding-window Rate Limiting (5 requests per 10 mins)
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = await checkRateLimit(clientIp);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error:
            "Too many requests from this address. Please wait a few moments or call 07405 328 674.",
        },
        { status: 429 },
      );
    }

    // 5. Sanitise input strings recursively (strip HTML tags & script characters)
    const sanitizedBody = sanitizeObject(body as Record<string, unknown>);

    // 6. Honeypot Anti-Spam Check: silently return HTTP 200 without sending email if filled
    if (
      sanitizedBody.honeypot &&
      typeof sanitizedBody.honeypot === "string" &&
      sanitizedBody.honeypot.trim().length > 0
    ) {
      return NextResponse.json(
        {
          success: true,
          message: "Quote request received successfully.",
        },
        { status: 200 },
      );
    }

    // 7. Validate with shared Zod schema
    const validationResult = quoteFormSchema.safeParse(sanitizedBody);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid submission data.",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = validationResult.data;

    // 8. Server-side Cloudflare Turnstile token verification
    if (data.turnstileToken) {
      const isTurnstileValid = await verifyTurnstileToken(
        data.turnstileToken,
        clientIp,
      );
      if (!isTurnstileValid) {
        return NextResponse.json(
          {
            error:
              "Bot verification challenge failed. Please refresh the page.",
          },
          { status: 400 },
        );
      }
    }

    // 9. Send notification email to the business & auto-confirmation to the customer via Resend
    const emailResult = await sendQuoteEmail(data);
    if (!emailResult.success) {
      return NextResponse.json(
        {
          error:
            "Unable to dispatch quote request automatically. Please telephone our team directly on 07405 328 674.",
          phone: "07405 328 674",
        },
        { status: 500 },
      );
    }

    // 10. Success Response (Never leak internal details or server state)
    return NextResponse.json(
      {
        success: true,
        message:
          "Quote request received successfully. Our dispatch team will contact you within 30 minutes.",
      },
      { status: 200 },
    );
  } catch (_err) {
    // Security: Never leak stack traces, internal errors, or customer PII in response or console
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while processing your request. Please contact 07405 328 674.",
        phone: "07405 328 674",
      },
      { status: 500 },
    );
  }
}
