import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions of service for AB Removals – Man and Van.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Terms and Conditions</h1>
      <p className="mt-4 text-slate-700">
        These terms govern removals and transport bookings conducted by{" "}
        {siteConfig.name}.
      </p>
      <p className="mt-2 text-slate-700 leading-relaxed max-w-3xl">
        Bookings are secured upon receipt of a £40 booking deposit (or 20% on
        nationwide journeys over 50 miles). Cancellations with at least 48 hours
        prior notice receive a 100% deposit refund; cancellations with under 48
        hours forfeit the deposit to cover allocated vehicle and driver
        scheduling. A 30-minute loading/unloading buffer is included at every
        stop; access delays or key waiting times exceeding this allowance are
        billed pro-rata at standard hourly rates. Consignments are protected up
        to £50,000 Goods in Transit under standard UK removals stowage
        conditions.
      </p>
    </main>
  );
}
