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
      <p className="mt-4 text-slate-700">
        Equipped with heavy-duty loading ramps, transit blankets, and securing
        straps. [TODO: confirm exact van make, model, internal dimensions, and
        payload capacity].
      </p>
    </main>
  );
}
