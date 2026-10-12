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
      <p className="mt-2 text-slate-700 leading-relaxed max-w-3xl">
        We act as the data controller for quote submissions and booking dispatch
        records. Any personal information gathered (including full names,
        contact numbers, email addresses, and collection/delivery locations) is
        processed solely for logistics coordination, route dispatching, and
        invoicing. Customer records are never shared with marketing brokers or
        unassociated third parties. You may request data access or deletion at
        any time by contacting
        {siteConfig.email}.
      </p>
    </main>
  );
}
