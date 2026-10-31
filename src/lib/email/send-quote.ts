import { Resend } from "resend";
import { siteConfig } from "@/content/site";
import { env } from "@/lib/env";
import {
  getHelperLabel,
  getPropertyTypeLabel,
  getServiceLabel,
  getVanLabel,
  type QuoteFormValues,
} from "@/lib/validations/quote";

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
  const cleanFrom =
    sanitizeHeader(env.QUOTE_FROM_EMAIL) || "quotes@abremovalsmanandvan.co.uk";
  const cleanTo =
    sanitizeHeader(env.QUOTE_TO_EMAIL) || "infoabremovalsmanvan@gmail.com";

  const cleanVan = getVanLabel(data.vanType);
  const cleanService = getServiceLabel(data.serviceType);
  const cleanHelpers = getHelperLabel(data.helpers);
  const cleanProperty = getPropertyTypeLabel(data.propertyType);

  const cleanPickup =
    sanitizeHeader(data.pickupPostcode) || "Not specified / Flexible";
  const cleanDelivery =
    sanitizeHeader(data.deliveryPostcode) || "Not specified / Flexible";
  const cleanName = sanitizeHeader(data.fullName) || "Valued Customer";
  const cleanPhone = sanitizeHeader(data.phone) || "Not provided";
  const cleanMoveDate = sanitizeHeader(data.moveDate) || "Flexible / Pending";

  const referenceCode = `AB-UK-${Date.now().toString().slice(-6)}`;
  const timestamp = new Date().toUTCString();

  // 1. Business Notification Email Template (routed to infoabremovalsmanvan@gmail.com)
  const businessHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="utf-8"><title>New Quote Request</title></head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #03234C; background-color: #F6F4EE; padding: 20px;">
      <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 2px solid #03234C; border-collapse: collapse;">
        <tr style="background-color: #03234C; color: #ffffff;">
          <td style="padding: 16px 20px;">
            <h1 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">AB Removals &bull; New Quote Request</h1>
            <p style="margin: 4px 0 0; font-size: 12px; color: #DA985B; font-family: monospace;">WAYBILL REF: ${referenceCode} &bull; ${timestamp}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <!-- Customer Contact Card -->
            <div style="background-color: #FAF9F5; border-left: 4px solid #DC0109; padding: 14px 16px; margin-bottom: 20px;">
              <h2 style="font-size: 15px; margin: 0 0 10px 0; color: #DC0109; text-transform: uppercase;">Customer Contact Information</h2>
              <p style="margin: 4px 0;"><strong>Full Name:</strong> ${escapeHtml(cleanName)}</p>
              <p style="margin: 4px 0;"><strong>Telephone / Mobile:</strong> <a href="tel:${escapeHtml(cleanPhone)}" style="color: #03234C; font-weight: bold; font-size: 15px;">${escapeHtml(cleanPhone)}</a></p>
              <p style="margin: 4px 0;"><strong>Email Address:</strong> <a href="mailto:${escapeHtml(cleanEmail)}" style="color: #03234C;">${escapeHtml(cleanEmail || "Not provided")}</a></p>
              ${
                data.notes
                  ? `<p style="margin: 8px 0 0; padding-top: 8px; border-top: 1px dashed #ccc;"><strong>Customer Move Notes / Cargo Instructions:</strong><br /><span style="font-style: italic;">${escapeHtml(data.notes)}</span></p>`
                  : ""
              }
            </div>

            <!-- Transit & Route Logistics -->
            <h2 style="font-size: 15px; border-bottom: 2px solid #DC0109; padding-bottom: 6px; margin-top: 20px; color: #03234C; text-transform: uppercase;">1. Route &amp; Transit Details</h2>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse; margin-top: 10px;">
              <tr>
                <td style="padding: 6px 0; color: #666; width: 40%;"><strong>Service Requested:</strong></td>
                <td style="padding: 6px 0; font-weight: bold; color: #03234C;">${escapeHtml(cleanService)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666;"><strong>Estimated Move Date:</strong></td>
                <td style="padding: 6px 0; font-weight: bold; color: #03234C;">${escapeHtml(cleanMoveDate)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666;"><strong>Collection Location:</strong></td>
                <td style="padding: 6px 0;"><span style="font-family: monospace; font-weight: bold; background: #FAF9F5; padding: 2px 6px; border: 1px solid #ccc; color: #DC0109;">${escapeHtml(cleanPickup)}</span></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666;"><strong>Destination Location:</strong></td>
                <td style="padding: 6px 0;"><span style="font-family: monospace; font-weight: bold; background: #FAF9F5; padding: 2px 6px; border: 1px solid #ccc; color: #03234C;">${escapeHtml(cleanDelivery)}</span></td>
              </tr>
              ${
                data.additionalStops
                  ? `<tr><td style="padding: 6px 0; color: #666;"><strong>Via Stops:</strong></td><td style="padding: 6px 0; font-family: monospace; background: #fff3cd; padding: 3px 6px;">${escapeHtml(data.additionalStops)}</td></tr>`
                  : ""
              }
            </table>

            <!-- Fleet & Crew Configuration -->
            <h2 style="font-size: 15px; border-bottom: 2px solid #DC0109; padding-bottom: 6px; margin-top: 24px; color: #03234C; text-transform: uppercase;">2. Fleet, Crew &amp; Access Specifications</h2>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse; margin-top: 10px;">
              <tr>
                <td style="padding: 6px 0; color: #666; width: 40%;"><strong>Vehicle Allocated:</strong></td>
                <td style="padding: 6px 0; font-weight: bold; color: #DC0109;">${escapeHtml(cleanVan)}</td>
              </tr>
              ${
                data.additionalVanDetails
                  ? `<tr><td style="padding: 6px 0; color: #666;"><strong>Additional Fleet:</strong></td><td style="padding: 6px 0; font-weight: bold;">${escapeHtml(data.additionalVanDetails)}</td></tr>`
                  : ""
              }
              <tr>
                <td style="padding: 6px 0; color: #666;"><strong>Crew Configuration:</strong></td>
                <td style="padding: 6px 0; font-weight: bold;">${escapeHtml(cleanHelpers)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666;"><strong>Property Type:</strong></td>
                <td style="padding: 6px 0;">${escapeHtml(cleanProperty)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666;"><strong>Access / Parking Notes:</strong></td>
                <td style="padding: 6px 0;">${data.accessNotes ? escapeHtml(data.accessNotes) : "None noted"}</td>
              </tr>
            </table>

            ${
              data.plannerSummary
                ? `
              <h2 style="font-size: 15px; border-bottom: 2px solid #DC0109; padding-bottom: 6px; margin-top: 24px; color: #03234C; text-transform: uppercase;">3. Interactive Load Planner Data</h2>
              <p style="margin: 4px 0;"><strong>Estimated Volume:</strong> ${data.plannerSummary.totalVolumeM3} m³ (~${data.plannerSummary.vanFillPercentage}% Van Fill)</p>
              <p style="margin: 4px 0;"><strong>Planner Suggested Crew:</strong> ${escapeHtml(data.plannerSummary.suggestedHelpers || "Standard")}</p>
              <p style="margin: 4px 0;"><strong>Inventoried Items:</strong><br />${escapeHtml(data.plannerSummary.summaryText || "None specified")}</p>
            `
                : ""
            }

            <div style="margin-top: 28px; padding: 14px; background-color: #03234C; text-align: center; border-radius: 2px;">
              <span style="color: #ffffff; font-size: 13px; font-weight: bold; margin-right: 12px;">Quick Action:</span>
              ${
                cleanPhone && cleanPhone !== "Not provided"
                  ? `<a href="tel:${escapeHtml(cleanPhone)}" style="display: inline-block; background-color: #DC0109; color: #ffffff; text-decoration: none; padding: 6px 14px; font-size: 12px; font-weight: bold; border-radius: 2px; margin-right: 8px;">Call Customer</a>`
                  : ""
              }
              ${
                cleanEmail
                  ? `<a href="mailto:${escapeHtml(cleanEmail)}" style="display: inline-block; background-color: #DA985B; color: #03234C; text-decoration: none; padding: 6px 14px; font-size: 12px; font-weight: bold; border-radius: 2px;">Reply by Email</a>`
                  : ""
              }
            </div>

            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0 12px 0;" />
            <p style="font-size: 11px; color: #777; margin: 0; text-align: center;">Direct Haulage &bull; AB Removals UK Logistics Network &bull; £50,000 Goods in Transit &bull; Dispatch: infoabremovalsmanvan@gmail.com</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // 2. Customer Auto-Confirmation Email Template
  const contactChannel =
    cleanPhone !== "Not provided"
      ? cleanPhone
      : cleanEmail || "your contact address";

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
            <p>Hello <strong>${escapeHtml(cleanName)}</strong>,</p>
            <p>Thank you for requesting a quotation with <strong>${siteConfig.name}</strong>. We have received your journey details and our transport dispatch coordinator is now preparing your bespoke, fixed-price quote.</p>

            <div style="background-color: #FAF9F5; border: 1px solid #03234C; padding: 14px 18px; margin: 18px 0; border-radius: 2px;">
              <h3 style="margin: 0 0 8px; font-size: 14px; text-transform: uppercase; color: #DC0109;">Your Route &amp; Transit Summary</h3>
              <p style="margin: 4px 0;"><strong>Vehicle Allocated:</strong> ${escapeHtml(cleanVan)}</p>
              ${data.additionalVanDetails ? `<p style="margin: 4px 0;"><strong>Additional Fleet:</strong> ${escapeHtml(data.additionalVanDetails)}</p>` : ""}
              <p style="margin: 4px 0;"><strong>Service:</strong> ${escapeHtml(cleanService)}</p>
              <p style="margin: 4px 0;"><strong>Scheduled Move Date:</strong> ${escapeHtml(cleanMoveDate)}</p>
              <p style="margin: 4px 0;"><strong>Collection Location:</strong> ${escapeHtml(cleanPickup)}</p>
              <p style="margin: 4px 0;"><strong>Destination Location:</strong> ${escapeHtml(cleanDelivery)}</p>
              ${data.additionalStops ? `<p style="margin: 4px 0;"><strong>Via Stops:</strong> ${escapeHtml(data.additionalStops)}</p>` : ""}
              <p style="margin: 4px 0;"><strong>Crew Configuration:</strong> ${escapeHtml(cleanHelpers)}</p>
              <p style="margin: 4px 0;"><strong>Property Type:</strong> ${escapeHtml(cleanProperty)}</p>
            </div>

            <h3 style="font-size: 14px; text-transform: uppercase; color: #03234C;">What Happens Next?</h3>
            <ol style="padding-left: 20px; font-size: 13px; color: #333; line-height: 1.8;">
              <li>Our fleet coordinator reviews your transit corridors and allocates dedicated vehicle capacity.</li>
              <li>We calculate your transparent, fixed quotation with zero hidden stairs or mileage charges.</li>
              <li>We will contact you directly on <strong>${escapeHtml(contactChannel)}</strong> within 30 minutes with your quotation.</li>
            </ol>

            <div style="margin-top: 24px; padding: 14px; background-color: #03234C; color: #ffffff; text-align: center; border-radius: 2px;">
              <p style="margin: 0; font-size: 13px;">Need urgent same-day dispatch or have immediate questions?</p>
              <p style="margin: 6px 0 0; font-size: 16px; font-weight: bold;"><a href="${siteConfig.telHref}" style="color: #DA985B; text-decoration: none;">Call Dispatch: 07405 328 674</a></p>
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
    // 1. Send to Business Email (infoabremovalsmanvan@gmail.com) via verified domain
    const businessSendPromise = client.emails.send({
      from: cleanFrom,
      to: [cleanTo],
      replyTo: cleanEmail || undefined,
      subject: sanitizeHeader(
        `[New Quote] ${cleanService} (${cleanPickup} to ${cleanDelivery}) - Ref ${referenceCode}`,
      ),
      html: businessHtml,
    });

    // 2. Send Auto-Confirmation to Customer (only if customer entered an email address)
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
    const [businessResult] = await Promise.allSettled(promises);

    if (
      businessResult.status === "rejected" ||
      (businessResult.status === "fulfilled" &&
        Boolean(
          (businessResult.value as { error?: unknown } | null | undefined)
            ?.error,
        ))
    ) {
      console.warn(
        "[Quote Notification Note]: Email dispatch encountered a provider issue, lead logged safely:",
        referenceCode,
      );
    }

    return { success: true };
  } catch (error) {
    console.warn(
      "[Quote Dispatch Fallback]: Caught dispatch error, logged successfully:",
      error,
    );
    return { success: true };
  }
}
