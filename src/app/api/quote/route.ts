import { type NextRequest, NextResponse } from "next/server";
import { sendQuoteEmail } from "@/lib/email/send-quote";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { sanitizeObject } from "@/lib/security/sanitize";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { quoteFormSchema } from "@/lib/validations/quote";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    // 1. Rate limiting check
    const rateLimitResult = await checkRateLimit(ip);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }

    // 2. Parse request body
    const body = await request.json();
    const sanitizedBody = sanitizeObject(body);

    // 3. Server-side Zod validation
    const validationResult = quoteFormSchema.safeParse(sanitizedBody);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid submission data",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = validationResult.data;

    // 4. Cloudflare Turnstile verification
    if (data.turnstileToken) {
      const isTokenValid = await verifyTurnstileToken(data.turnstileToken, ip);
      if (!isTokenValid) {
        return NextResponse.json(
          { error: "Bot verification failed. Please refresh and try again." },
          { status: 400 },
        );
      }
    }

    // 5. Send notification email
    const emailResult = await sendQuoteEmail(data);
    if (!emailResult.success) {
      return NextResponse.json(
        {
          error:
            "Failed to dispatch enquiry. Please contact us by phone on 07405 328 674.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Quote request received successfully. We will be in touch shortly.",
    });
  } catch (_error) {
    // Security: Do not leak exception details or user data in server logs
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 },
    );
  }
}
