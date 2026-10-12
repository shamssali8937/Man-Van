import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "About Us",
  description:
    "Learn more about AB Removals – your dedicated removals and man & van partner.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">About {siteConfig.name}</h1>
      <p className="mt-4 text-slate-700 leading-relaxed max-w-3xl">
        Founded to bring freight reliability, transparent pricing, and punctual
        logistics to residential and commercial moves. We operate a modern fleet
        of long-wheelbase 3.5-tonne Luton box vans fitted with 500kg hydraulic
        tail lifts, comprehensive £50,000 Goods in Transit cover, and £2,000,000
        Public Liability insurance. We never co-load unrelated consignments,
        ensuring direct, non-stop transit from collection to delivery across
        England, Scotland, and Wales.
      </p>
    </main>
  );
}
