import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Our Van Specifications",
  description:
    "Learn more about our removals vehicle, payload capacity, and transit protection equipment.",
  path: "/the-van",
});

export default function TheVanPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">The Van</h1>
      <p className="mt-4 text-slate-700 leading-relaxed max-w-3xl">
        Equipped with heavy-duty loading ramps, a 500kg hydraulic tail lift,
        heavy-duty transit blankets, ratcheting cargo straps, and furniture
        dollies. Operating a long-wheelbase 3.5-tonne Mercedes-Benz Sprinter
        Luton box van (internal dimensions: 4.1m length &times; 2.05m width
        &times; 2.2m height; load volume: ~19m&sup3; / 670 cu ft; payload
        capacity: ~1,000kg). Euro-6 compliant with zero charges across ULEZ and
        regional Clean Air Zones.
      </p>
    </main>
  );
}
