import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { faqs } from "@/content/faqs";
import { siteConfig } from "@/content/site";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("Frequently Asked Questions"),
  description: formatSeoDescription(
    "Answers to common removals questions. Learn about booking notice, pricing, packing care, tail lift vans, and cancellation terms.",
  ),
  path: "/faq",
});

const categoryMetadata: Record<
  string,
  { label: string; icon: string; description: string }
> = {
  general: {
    label: "General Moving",
    icon: "🏠",
    description:
      "Questions about what we move, transit insurance, and operating scope.",
  },
  pricing: {
    label: "Pricing & Payment",
    icon: "💳",
    description:
      "Clear explanations of our hourly framework, deposits, and payment terms.",
  },
  services: {
    label: "Vehicles & Services",
    icon: "🚚",
    description:
      "Information regarding our 3.5T Luton van, equipment, and crew capabilities.",
  },
  booking: {
    label: "Booking & Cancellations",
    icon: "📅",
    description:
      "Notice windows, rescheduling procedures, and confirmation deposits.",
  },
};

export default function FAQPage() {
  const categories = ["general", "pricing", "services", "booking"] as const;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "FAQs", href: "/faq" }]} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
            Knowledge Base & Help
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about our removal operations, Luton van
            capacity, transit protection standards, and booking policies across
            the UK.
          </p>
        </div>

        {/* FAQs Grouped by Topic */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          {categories.map((catKey) => {
            const catFaqs = faqs.filter((f) => f.category === catKey);
            const meta = categoryMetadata[catKey];
            if (catFaqs.length === 0) return null;

            return (
              <section
                key={catKey}
                aria-labelledby={`faq-cat-${catKey}`}
                className="rounded-3xl bg-white border border-slate-200 p-6 md:p-10 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl">
                    {meta.icon}
                  </span>
                  <div>
                    <h2
                      id={`faq-cat-${catKey}`}
                      className="text-xl sm:text-2xl font-bold text-slate-900"
                    >
                      {meta.label}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      {meta.description}
                    </p>
                  </div>
                </div>

                <FaqAccordion faqs={catFaqs} title="" className="mt-2" />
              </section>
            );
          })}
        </div>

        {/* Direct Help Card */}
        <section className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-8 md:p-10 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Speak directly with our logistics team. We provide free advice on
            vehicle sizing, route planning, and parking permits across the UK.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
            <a
              href={siteConfig.telHref}
              className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-500 transition-colors"
            >
              Call {siteConfig.telephone}
            </a>
            <a
              href={siteConfig.whatsappHref}
              className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-500 transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </section>

        {/* Quote CTA */}
        <div className="max-w-4xl mx-auto">
          <QuoteCtaCard
            title="Ready to Book Your Journey?"
            description="Get an upfront, transparent quote with zero hidden charges. Fast booking and punctual Luton vans."
          />
        </div>
      </main>
    </div>
  );
}
