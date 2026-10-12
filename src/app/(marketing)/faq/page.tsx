import type { Metadata } from "next";
import { faqs } from "@/content/faqs";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about booking, pricing, and our removals process.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <dl className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id}>
            <dt className="font-semibold text-[#0B2152]">{faq.question}</dt>
            <dd className="mt-1 text-slate-700">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
