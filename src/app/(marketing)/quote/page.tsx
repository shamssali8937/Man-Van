import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Request a Free Quote",
  description:
    "Get a fast, transparent quote for your move or transport requirements.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Request a Quote</h1>
      <p className="mt-4 text-slate-700">
        Complete your moving details below to receive a bespoke, no-obligation
        quotation.
      </p>
    </main>
  );
}
