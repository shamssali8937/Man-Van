import { Resend } from "resend";
import { siteConfig } from "@/content/site";
import { env } from "@/lib/env";
import type { QuoteFormValues } from "@/lib/validations/quote";

/**
 * HTML escaping utility to prevent XSS / HTML injection in email templates.
 */
export function escapeHtml(unsafe: string): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Strips Carriage Return and Line Feed to prevent SMTP / Email Header Injection.
 */
export function sanitizeHeader(input: string): string {
  if (!input) return "";
  return input.replace(/[\r\n]/g, "").trim();
}

/**
 * Lazy / singleton Resend client initialization.
 */
let resendClient: Resend | null = null;
function getResendClient(): Resend | null {
  if (!resendClient && env.RESEND_API_KEY) {
    resendClient = new Resend(env.RESEND_API_KEY);
  }
  return resendClient;
}

/**
 * Dispatches notification email to the business and an auto-confirmation to the customer.
 * Uses plain, responsive HTML templates with 100% escaped user inputs.
 * Never outputs customer personal data to server logs.
 */
export async function sendQuoteEmail(
  data: QuoteFormValues,
): Promise<{ success: boolean; error?: string }> {
  const client = getResendClient();

  if (!client) {
    // In mock / test environments without Resend API key
    return { success: true };
  }

  const cleanEmail = sanitizeHeader(data.email);
  const cleanFrom = sanitizeHeader(env.QUOTE_FROM_EMAIL);
  const cleanTo = sanitizeHeader(env.QUOTE_TO_EMAIL);
  const cleanService = sanitizeHeader(data.serviceType);
  const cleanPickup = sanitizeHeader(data.pickupPostcode);
  const cleanDelivery = sanitizeHeader(data.deliveryPostcode);

  const referenceCode = `AB-UK-${Date.now().toString().slice(-6)}`;

  // 1. Business Notification Email Template
  const businessHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="utf-8"><title>New Quote Request</title></head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #03234C; background-color: #F6F4EE; padding: 20px;">
      <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 2px solid #03234C; border-collapse: collapse;">
        <tr style="background-color: #03234C; color: #ffffff;">
          <td style="padding: 16px 20px;">
            <h1 style="margin: 0; font-size: 20px; text-transform: uppercase;">AB Removals &bull; New Quote Request</h1>
            <p style="margin: 4px 0 0; font-size: 12px; color: #DA985B; font-family: monospace;">WAYBILL REF: ${referenceCode}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <h2 style="font-size: 16px; border-bottom: 2px solid #DC0109; padding-bottom: 6px; margin-top: 0;">1. Route &amp; Transit Details</h2>
            <p><strong>Selected Vehicle:</strong> <span style="font-weight: bold; color: #DC0109;">${escapeHtml(data.vanType || "3.5T Luton Box Van with Tail Lift")}</span></p>
            ${data.additionalVanDetails ? `<p><strong>Additional Vehicles:</strong> <span style="font-weight: bold; color: #03234C; background: #FAF9F5; padding: 2px 6px; border: 1px solid #ccc;">${escapeHtml(data.additionalVanDetails)}</span></p>` : ""}
            <p><strong>Service Requested:</strong> ${escapeHtml(cleanService)}</p>
            <p><strong>Estimated Move Date:</strong> ${escapeHtml(data.moveDate)}</p>
            <p><strong>Collection Postcode:</strong> <span style="font-family: monospace; font-weight: bold; background: #FAF9F5; padding: 2px 6px; border: 1px solid #ccc;">${escapeHtml(cleanPickup)}</span></p>
            <p><strong>Delivery Postcode:</strong> <span style="font-family: monospace; font-weight: bold; background: #FAF9F5; padding: 2px 6px; border: 1px solid #ccc;">${escapeHtml(cleanDelivery)}</span></p>
            ${data.additionalStops ? `<p><strong>Additional Via Stops:</strong> <span style="font-family: monospace; background: #fff3cd; padding: 3px 6px; border: 1px solid #ffeeba;">${escapeHtml(data.additionalStops)}</span></p>` : ""}
            <p><strong>Crew Configuration:</strong> ${escapeHtml(data.helpers)}</p>
            <p><strong>Property Type:</strong> ${escapeHtml(data.propertyType)}</p>
            <p><strong>Access / Parking Notes:</strong> ${data.accessNotes ? escapeHtml(data.accessNotes) : "None noted"}</p>

            <h2 style="font-size: 16px; border-bottom: 2px solid #DC0109; padding-bottom: 6px; margin-top: 24px;">2. Cargo Load Estimation</h2>
            <p><strong>Estimated Volume:</strong> ${data.plannerSummary ? `${data.plannerSummary.totalVolumeM3} m³ (~${data.plannerSummary.vanFillPercentage}% Luton Van Fill)` : "Manual quotation / Not calculated in planner"}</p>
            <p><strong>Suggested Crew:</strong> ${data.plannerSummary?.suggestedHelpers ? escapeHtml(data.plannerSummary.suggestedHelpers) : "Standard"}</p>
            <p><strong>Inventory Items:</strong><br />${data.plannerSummary?.summaryText ? escapeHtml(data.plannerSummary.summaryText) : "None specified via interactive planner"}</p>

            <h2 style="font-size: 16px; border-bottom: 2px solid #DC0109; padding-bottom: 6px; margin-top: 24px;">3. Customer Contact Details</h2>
            <p><strong>Full Name:</strong> ${escapeHtml(data.fullName)}</p>
            <p><strong>Phone:</strong> <a href="tel:${escapeHtml(data.phone)}" style="color: #03234C; font-weight: bold;">${escapeHtml(data.phone)}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(cleanEmail)}" style="color: #03234C;">${escapeHtml(cleanEmail)}</a></p>
            <p><strong>Special Notes:</strong> ${data.notes ? escapeHtml(data.notes) : "None provided"}</p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="font-size: 11px; color: #777;">Direct Haulage &bull; AB Removals UK Logistics Network &bull; £50,000 Goods in Transit</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // 2. Customer Auto-Confirmation Email Template
  const customerHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="utf-8"><title>Quote Request Received</title></head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #03234C; background-color: #F6F4EE; padding: 20px;">
      <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 2px solid #03234C; border-collapse: collapse;">
        <tr style="background-color: #03234C; color: #ffffff;">
          <td style="padding: 16px 20px;">
            <h1 style="margin: 0; font-size: 18px; text-transform: uppercase;">AB Removals &bull; Quote Request Received</h1>
            <p style="margin: 4px 0 0; font-size: 12px; color: #DA985B; font-family: monospace;">REFERENCE: ${referenceCode}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <p>Hello <strong>${escapeHtml(data.fullName)}</strong>,</p>
            <p>Thank you for requesting a quotation with <strong>${siteConfig.name}</strong>. We have received your journey details and our dispatch team is now calculating your fixed, transparent quote.</p>

            <div style="background-color: #FAF9F5; border: 1px solid #03234C; padding: 14px 18px; margin: 18px 0; border-radius: 2px;">
              <h3 style="margin: 0 0 8px; font-size: 14px; text-transform: uppercase; color: #DC0109;">Your Route Summary</h3>
              <p style="margin: 4px 0;"><strong>Vehicle Allocated:</strong> ${escapeHtml(data.vanType || "3.5T Luton Box Van with Tail Lift")}</p>
              ${data.additionalVanDetails ? `<p style="margin: 4px 0;"><strong>Additional Vehicles:</strong> ${escapeHtml(data.additionalVanDetails)}</p>` : ""}
              <p style="margin: 4px 0;"><strong>Collection:</strong> ${escapeHtml(cleanPickup)}</p>
              <p style="margin: 4px 0;"><strong>Destination:</strong> ${escapeHtml(cleanDelivery)}</p>
              ${data.additionalStops ? `<p style="margin: 4px 0;"><strong>Via Stops:</strong> ${escapeHtml(data.additionalStops)}</p>` : ""}
              <p style="margin: 4px 0;"><strong>Move Date:</strong> ${escapeHtml(data.moveDate)}</p>
              <p style="margin: 4px 0;"><strong>Service:</strong> ${escapeHtml(cleanService)}</p>
            </div>

            <h3 style="font-size: 14px; text-transform: uppercase;">What Happens Next?</h3>
            <ol style="padding-left: 20px; font-size: 13px; color: #333;">
              <li>Our fleet coordinator reviews your route and allocates a dedicated 3.5t Luton box van.</li>
              <li>We calculate your fixed price with zero hidden stairs charges or mileage surcharges.</li>
              <li>We will contact you directly on <strong>${escapeHtml(data.phone)}</strong> within 30 minutes with your quote.</li>
            </ol>

            <div style="margin-top: 24px; padding: 12px; background-color: #03234C; color: #ffffff; text-align: center;">
              <p style="margin: 0; font-size: 13px;">Need urgent dispatch or have special access questions?</p>
              <p style="margin: 4px 0 0; font-size: 15px; font-weight: bold;"><a href="${siteConfig.telHref}" style="color: #DA985B; text-decoration: none;">Call 07405 328 674</a></p>
            </div>

            <p style="font-size: 11px; color: #777; margin-top: 20px; text-align: center;">
              AB Removals &bull; Unit 4, Gateway Business Park, London E16 1EA &bull; EA Licence CBDU489120
            </p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    // 1. Send to Business
    const businessSendPromise = client.emails.send({
      from: cleanFrom,
      to: [cleanTo],
      replyTo: cleanEmail || undefined,
      subject: sanitizeHeader(
        `[New Quote] ${cleanService} (${cleanPickup} to ${cleanDelivery}) - Ref ${referenceCode}`,
      ),
      html: businessHtml,
    });

    // 2. Send Auto-Confirmation to Customer (only if email provided)
    const promises: Promise<unknown>[] = [businessSendPromise];
    if (cleanEmail) {
      promises.push(
        client.emails.send({
          from: cleanFrom,
          to: [cleanEmail],
          replyTo: cleanTo,
          subject: sanitizeHeader(
            `Your Moving Quote Request Confirmation - AB Removals (${referenceCode})`,
          ),
          html: customerHtml,
        }),
      );
    }

    // Execute email dispatches
    const [businessResult, customerResult] = await Promise.allSettled(promises);

    if (
      businessResult.status === "rejected" ||
      (businessResult.status === "fulfilled" &&
        Boolean(
          (businessResult.value as { error?: unknown } | null | undefined)
            ?.error,
        ))
    ) {
      // Return generic failure without leaking email address or internals
      return {
        success: false,
        error: "Failed to dispatch notification email.",
      };
    }

    if (
      customerResult &&
      (customerResult.status === "rejected" ||
        (customerResult.status === "fulfilled" &&
          Boolean(
            (customerResult.value as { error?: unknown } | null | undefined)
              ?.error,
          )))
    ) {
      // Customer send failed (e.g. invalid recipient domain), but business notification succeeded
      // We still treat as successful quote logging
      return { success: true };
    }

    return { success: true };
  } catch (_error) {
    // Security: Do NOT log customer details in error output
    return {
      success: false,
      error: "An unexpected error occurred during email transmission.",
    };
  }
}
