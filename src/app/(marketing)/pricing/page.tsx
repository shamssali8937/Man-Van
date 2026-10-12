import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Pricing & Rates",
  description: "Clear and transparent removals pricing with no hidden charges.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Pricing & Rates</h1>
      <p className="mt-4 text-slate-700 leading-relaxed max-w-3xl">
        We believe in upfront, transparent pricing. Standard hourly rates start
        from £55/hr for a working driver-only, and £75–£90/hr for an experienced
        two-man team, subject to a 2-hour minimum booking. For long-distance
        moves outside Greater London, mileage is calculated directly from
        collection to delivery at £1.40–£1.80 per mile with zero empty-return
        surcharges. Booking deposits are fixed at £40 (or 20% for nationwide
        long hauls), fully credited against your final invoice.
      </p>
    </main>
  );
}
