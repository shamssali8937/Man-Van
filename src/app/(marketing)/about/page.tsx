import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/content/site";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("About Us & The Route"),
  description: formatSeoDescription(
    "Learn about AB Removals. Built on 'The Route' concept: punctual direct van transit, experienced crews, and transparent removals across the UK.",
  ),
  path: "/about",
  noIndex: true,
});

const coreValues = [
  {
    icon: "🛣️",
    title: "Direct Route Transit",
    description:
      "We believe your possessions should travel directly from your collection doorstep to your destination. We never co-load unrelated consignments into regional freight depots.",
  },
  {
    icon: "🛡️",
    title: "Meticulous Care",
    description:
      "Every piece of furniture is treated with professional respect. Quilted removal blankets, ratchet tie-downs, and hydraulic tail lift handling are standard on every journey.",
  },
  {
    icon: "⚖️",
    title: "Transparent Integrity",
    description:
      "We operate an open, honest pricing philosophy. No invented charges, no empty-return surcharges, and clear terms provided upfront before move day.",
  },
  {
    icon: "🌱",
    title: "Environmental Duty",
    description:
      "We operate modern Euro-6 low-emission vehicles and dispose of unwanted items strictly via Environment Agency licensed facilities, diverting reusable goods to local charities.",
  },
];

export default function AboutPage() {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={[breadcrumbsSchema]} />
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
            Our Story & Mission
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Moving Built on &ldquo;The Route&rdquo;
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded to bring freight reliability, transparent pricing, and
            punctual logistics to home removals and man & van transport across
            the UK.
          </p>
        </div>

        {/* The Origin Story */}
        <section className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-xs mb-16">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              A Different Approach to Moving
            </h2>
            <p>
              Traditional removals often suffer from frustrating delays, opaque
              pricing, and outdated logistics. We established {siteConfig.name}{" "}
              around a single guiding concept:{" "}
              <strong>&ldquo;The Route&rdquo;</strong>.
            </p>
            <p>
              The swoosh arc in our emblem represents a clear, tracked journey
              across the United Kingdom. When you book our 3.5-tonne Luton van
              and crew, that vehicle is dedicated exclusively to your
              consignment. We load at your doorstep, secure every item with
              commercial-grade tie-downs and quilted blankets, and travel
              straight to your destination address with zero intermediate depot
              stops or co-loaded cargo confusion.
            </p>
            <p>
              Whether handling a compact studio flat in London, a student room
              in Manchester, or a nationwide long-distance transfer to Edinburgh
              or Cardiff, our mission is simple: communicate clearly, arrive on
              time, handle possessions with care, and leave customers completely
              satisfied in their new space.
            </p>
          </div>
        </section>

        {/* Structure for Founder or Team Photo */}
        <section
          aria-labelledby="team-heading"
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-10 shadow-xs">
            <h2
              id="team-heading"
              className="text-2xl font-bold text-slate-900 mb-6 text-center"
            >
              Our Leadership & Operations Team
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-8 max-w-2xl mx-auto">
              {/* Photo placeholder structure */}
              <div className="relative h-44 w-44 shrink-0 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-center">
                <svg
                  className="w-12 h-12 text-slate-400 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-xs font-semibold text-slate-500">
                  Operations &amp; Fleet Management
                </span>
              </div>

              <div>
                <span className="inline-block rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-700 mb-2">
                  Operations &amp; Transport Management
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Operations Team Leadership
                </h3>
                <p className="text-xs font-medium text-slate-700 mt-1">
                  Adam Bennett • Head of Logistics &amp; Transport
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Overseeing daily vehicle dispatch, route planning, driver
                  training, and customer service. With extensive practical
                  removals experience across UK motorway corridors, our team
                  ensures every haul meets strict safety and customer
                  satisfaction standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Core Values */}
        <section
          aria-labelledby="values-heading"
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
              What Drives Us
            </span>
            <h2
              id="values-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1"
            >
              Our Core Operational Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl block mb-3">{val.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insurance & Verification Checklist */}
        <section className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-8 md:p-10 mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Licensing, Insurance & Compliance Status
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            In accordance with our strict verification policy, the operational
            insurance policies below are tracked for formal client verification:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">
              <span className="text-red-400 font-bold block mb-1">
                Goods in Transit:
              </span>
              <p className="text-slate-300">
                £50,000 per consignment (underwritten by Aviva Insurance)
              </p>
            </div>
            <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">
              <span className="text-red-400 font-bold block mb-1">
                Public Liability:
              </span>
              <p className="text-slate-300">£2,000,000 commercial indemnity</p>
            </div>
            <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">
              <span className="text-red-400 font-bold block mb-1">
                Waste Carrier Licence:
              </span>
              <p className="text-slate-300">
                Environment Agency Registered Upper Tier (CBDU489120)
              </p>
            </div>
          </div>
        </section>

        {/* Quote CTA */}
        <div className="max-w-4xl mx-auto">
          <QuoteCtaCard
            title="Ready to Move with Confidence?"
            description="Speak directly to our team or use our instant quote planner for a guaranteed, transparent estimate."
          />
        </div>
      </main>
    </div>
  );
}
