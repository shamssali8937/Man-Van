import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { JsonLd } from "@/components/seo/json-ld";
import { faqs } from "@/content/faqs";
import { siteConfig } from "@/content/site";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";
import {
  generateBreadcrumbSchema,
  generateFaqPageSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("Frequently Asked Questions | Removals FAQ"),
  description: formatSeoDescription(
    "Answers to common UK removals and man and van questions. Booking notice, Luton van sizes, transit insurance, packing, and moving terms explained.",
  ),
  path: "/faq",
});

const categoryMetadata: Record<
  string,
  { label: string; icon: string; description: string }
> = {
  general: {
    label: "General Moving & Coverage",
    icon: "🏠",
    description:
      "Questions about service areas, near-me coverage, insurance, and transit terms.",
  },
  pricing: {
    label: "Pricing, Rates & Tolls",
    icon: "💳",
    description:
      "Clear explanations of our hourly structure, deposits, Clean Air compliance, and payments.",
  },
  services: {
    label: "Vehicles, Dismantling & Crew",
    icon: "🚚",
    description:
      "Information regarding our 3.5T Luton van fleet, tail lifts, IKEA furniture dismantling, and porters.",
  },
  booking: {
    label: "Booking Notice & Cancellations",
    icon: "📅",
    description:
      "Notice windows, date changes, key delay flexibility, and deposit terms.",
  },
};

export default function FAQPage() {
  const categories = ["general", "pricing", "services", "booking"] as const;

  const faqSchema = generateFaqPageSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQs", url: "/faq" },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={[faqSchema, breadcrumbSchema]} />

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
            Knowledge Base & Moving Advice
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Removals & Man and Van FAQs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Clear answers to your moving questions across the UK. Learn about
            booking timelines, Luton van capacity, transit insurance, and common
            moving terminology.
          </p>
        </div>

        {/* Moving Terms Explained / Glossary */}
        <section
          aria-labelledby="moving-terms-heading"
          className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 md:p-10 shadow-xs mb-12"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 text-xl font-bold">
              📖
            </span>
            <div>
              <h2
                id="moving-terms-heading"
                className="text-xl sm:text-2xl font-bold text-slate-900"
              >
                Moving Terms Explained (UK Glossary)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Plain-English definitions of common British moving terminology
                and phrases
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-1">
                Man and Van (Man with a Van)
              </h3>
              <p>
                A <strong>man and van</strong> (also commonly called a{" "}
                <em>man with a van</em>, <em>van and driver</em>, or{" "}
                <em>van hire with driver</em>) is a flexible, staffed transport
                service. Unlike self-drive hire where you must collect, drive,
                and fuel the vehicle, our professional driver manages the van
                and assists directly with loading and unloading.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-1">
                House Removals vs Small Removals
              </h3>
              <p>
                <strong>House removals</strong> (or <em>domestic moving</em>)
                involves a full moving team handling multi-room properties,
                working around property completion schedules.{" "}
                <strong>Small removals</strong> (or <em>flat removals</em>)
                refer to compact 1-bedroom apartments, studio flats, or student
                rooms where a smaller crew and faster turnaround are ideal.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-1">
                Luton Box Van with Hydraulic Tail Lift
              </h3>
              <p>
                A <strong>Luton van</strong> features an enclosed box body with
                an over-cab storage pod. A <strong>hydraulic tail lift</strong>{" "}
                is an electric platform at the rear of the van that hoists heavy
                items (up to 500kg), such as washing machines, sofas, and
                upright pianos, smoothly from road level into the cargo hold.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-1">
                Singular vs Plural & Symbol Variations
              </h3>
              <p>
                In British English, <em>removals</em> is the established
                industry plural, whereas <em>removal</em> is used for an
                individual collection. Search queries using <em>man & van</em>{" "}
                or <em>man and van</em> refer to the exact same service, and we
                cater to both seamlessly.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
            <span className="font-bold text-slate-700 uppercase tracking-wider block mb-1">
              Common British Moving Searches
            </span>
            <p>
              Searchers across the UK frequently look for our services under:{" "}
              <em>
                man & van, man with a van, two men and a van, house removals UK,
                flat removals, van and driver hire, furniture courier, sofa
                delivery, and house clearance
              </em>
              . All these needs are supported through our dedicated fleet.
            </p>
          </div>
        </section>

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
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl bg-slate-800 px-5 py-3 text-slate-200 hover:bg-slate-700 transition-colors"
            >
              Explore Our 6 Services &rarr;
            </Link>
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
