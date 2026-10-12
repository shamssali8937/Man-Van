import { Resend } from "resend";
import { env } from "@/lib/env";
import type { QuoteFormValues } from "@/lib/validations/quote";

const resendClient = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

export async function sendQuoteEmail(
  data: QuoteFormValues,
): Promise<{ success: boolean; error?: string }> {
  if (!resendClient || !env.RESEND_FROM_EMAIL || !env.RESEND_TO_EMAIL) {
    // In dev / test or when keys are unconfigured, return mock success without logging personal data
    return { success: true };
  }

  try {
    const { error } = await resendClient.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: [env.RESEND_TO_EMAIL],
      replyTo: data.email,
      subject: `New Quote Request: ${data.serviceType} (${data.pickupPostcode} to ${data.deliveryPostcode})`,
      html: `
        <h2>New Quote Enquiry - AB Removals</h2>
        <p><strong>Service:</strong> ${data.serviceType}</p>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Collection Postcode:</strong> ${data.pickupPostcode}</p>
        <p><strong>Destination Postcode:</strong> ${data.deliveryPostcode}</p>
        <p><strong>Estimated Move Date:</strong> ${data.moveDate}</p>
        ${data.propertyType ? `<p><strong>Property Type:</strong> ${data.propertyType}</p>` : ""}
        ${data.itemsDescription ? `<p><strong>Items:</strong><br />${data.itemsDescription}</p>` : ""}
        ${data.additionalDetails ? `<p><strong>Additional Details:</strong><br />${data.additionalDetails}</p>` : ""}
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (_error) {
    // Security: Do not output customer personal details in server error logs
    return { success: false, error: "Failed to dispatch email notification." };
  }
}
