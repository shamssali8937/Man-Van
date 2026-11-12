import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { env } from "@/lib/env";
import { checkRateLimit } from "@/lib/security/rate-limit";
import {
  escapeHtml,
  sanitizeHeader,
  sanitizeText,
} from "@/lib/security/sanitize";
import { contactFormSchema } from "@/lib/validations/contact";

const MAX_BODY_BYTES = 64 * 1024; // 64 KB limit

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // 1. IP extraction and Rate Limiting (5 requests per 10 minutes)
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    const rateLimitResult = await checkRateLimit(ip);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        {
          status: 429,
          headers: {
            "Retry-After": "60",
          },
        },
      );
    }

    // 2. Body size limit enforcement
    const contentLength = req.headers.get("content-length");
    if (contentLength && Number.parseInt(contentLength, 10) > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: "Payload exceeds maximum allowed size." },
        { status: 413 },
      );
    }

    const rawText = await req.text();
    if (rawText.length > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: "Payload exceeds maximum allowed size." },
        { status: 413 },
      );
    }

    // 3. Safe JSON parsing
    let rawBody: unknown;
    try {
      rawBody = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload." },
        { status: 400 },
      );
    }

    // 4. Validate with Contact Zod schema
    const parsed = contactFormSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed. Please verify your form inputs." },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // 5. Honeypot check (silently succeed without sending emails)
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Your message has been received.",
      });
    }

    // 6. Sanitise all text inputs
    const cleanName = sanitizeText(data.fullName || "Website Visitor");
    const cleanEmail = sanitizeHeader((data.email || "").trim());
    const cleanPhone = sanitizeText(data.phone || "Not provided");
    const cleanSubject = sanitizeHeader(
      data.subject || "Website Removals Enquiry",
    );
    const cleanMessage = sanitizeText(
      data.message || "No message body provided",
    );

    // 7. Dispatch notification email to business via Resend
    if (env.RESEND_API_KEY) {
      try {
        const resend = new Resend(env.RESEND_API_KEY);
        const emailHtml = `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #0B2152; border-bottom: 2px solid #E31B23; padding-bottom: 8px;">
    New Website Enquiry
  </h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
    <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${escapeHtml(cleanName)}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${escapeHtml(cleanEmail)}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: bold;">Telephone:</td><td>${escapeHtml(cleanPhone)}</td></tr>
    <tr><td style="padding: 8px 0; font-weight: bold;">Subject:</td><td>${escapeHtml(cleanSubject)}</td></tr>
  </table>
  <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #0B2152; border-radius: 4px;">
    <strong>Message:</strong><br/>
    <p style="white-space: pre-wrap; margin-top: 8px;">${escapeHtml(cleanMessage)}</p>
  </div>
  <p style="font-size: 11px; color: #888; margin-top: 25px;">
    Sent via AB Removals Secure Contact Form • Zero PII logged to server.
  </p>
</body>
</html>`;

        const sendResult = await resend.emails.send({
          from: env.QUOTE_FROM_EMAIL || "AB Removals <onboarding@resend.dev>",
          to: [env.QUOTE_TO_EMAIL || "infoabremovalsmanvan@gmail.com"],
          subject: `Enquiry: ${cleanSubject}`,
          html: emailHtml,
        });

        if (sendResult.error) {
          console.error(
            "Failed to dispatch contact notification email:",
            sendResult.error,
          );
        }
      } catch (emailError) {
        // Never log PII, log generic internal status
        console.error(
          "Failed to dispatch contact notification email:",
          emailError instanceof Error ? emailError.message : "unknown",
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for getting in touch. Our team will respond shortly.",
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred. Please try again or call us directly.",
      },
      { status: 500 },
    );
  }
}
