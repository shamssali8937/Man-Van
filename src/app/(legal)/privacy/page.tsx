import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy and personal data management principles for AB Removals.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-slate-700">
        {siteConfig.name} is committed to protecting your privacy in compliance
        with UK GDPR and the Data Protection Act 2018.
      </p>
      <p className="mt-2 text-slate-700">
        [TODO: confirm full registered company name, data controller details,
        and ICO registration number].
      </p>
    </main>
  );
}
