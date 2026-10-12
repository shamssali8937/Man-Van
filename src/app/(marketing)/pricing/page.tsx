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
      <p className="mt-4 text-slate-700">
        We believe in upfront, transparent pricing. [TODO: confirm exact hourly
        rates, minimum booking duration, and fuel charge policy].
      </p>
    </main>
  );
}
