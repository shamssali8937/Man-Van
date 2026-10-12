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
      <p className="mt-2 text-slate-700">
        [TODO: confirm cancellation terms, waiting time charges, access
        limitations, and liability terms].
      </p>
    </main>
  );
}
