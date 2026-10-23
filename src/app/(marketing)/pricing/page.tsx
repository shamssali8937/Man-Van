import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { JsonLd } from "@/components/seo/json-ld";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("Removals Pricing & Man and Van Rates"),
  description: formatSeoDescription(
    "Transparent UK removals pricing and man and van rates. Clear hourly rates from £55/hr, 2-man teams, and guaranteed fixed quotes. No hidden fees.",
  ),
  path: "/pricing",
});

const crewTiers = [
  {
    name: "Van with Driver Assistance",
    hourlyRate: "From £55 / hr",
    description:
      "Working driver assists with loading, stowing, and direct transport. Ideal for small moves and studio flats.",
    features: [
      "Working driver assists with secure van loading and stowage",
      "Customer assists with heavier, two-person bulky items",
      "Lowest hourly commitment and rapid turnaround",
    ],
  },
  {
    name: "Van with Two-Person Moving Team",
    hourlyRate: "From £75 / hr",
    popular: true,
    description:
      "Our most requested tier. Two experienced movers handle all heavy lifting, carrying, and room placement.",
    features: [
      "Full two-person loading and unloading removals team",
      "Safe handling for heavy sofas, appliances, wardrobes & beds",
      "Complete room-of-choice positioning and transit care",
    ],
  },
  {
    name: "Van with Three-Person Moving Team (Complete Team)",
    hourlyRate: "From £95 / hr",
    description:
      "Full moving team designed for large house removals, multi-floor walk-ups, or strict completion day deadlines.",
    features: [
      "Three dedicated professional movers (Complete Team)",
      "Accelerated loading and minimum turnaround downtime",
      "Ideal for multi-bedroom properties, heavy safes, or commercial offices",
    ],
  },
];

const pricingFactors = [
  {
    title: "Hourly vs. Fixed-Price Quotes",
    description:
      "For local moves and smaller transfers, we provide clear hourly rates billed in 30-minute increments after the minimum time. For larger house relocations and long-distance intercity transfers, we offer guaranteed fixed-price quotes so your total cost is locked in with zero overtime surprises.",
  },
  {
    title: "Minimum Booking Window",
    description:
      "Local van hire carries a standard minimum hire duration of 2 hours. For nationwide long-distance transfers, pricing is based on a transparent door-to-door transit schedule with fixed mileage calculation (£1.50/mile beyond initial allowance).",
  },
  {
    title: "Parking Arrangements & Bay Suspensions",
    description:
      "Customers are responsible for providing valid resident visitor parking vouchers or securing a temporary council parking suspension outside both properties. If parking charges or pay-and-display meters are required, they are billed strictly at cost with zero markup.",
  },
  {
    title: "Congestion Charge & Clean Air Zones",
    description:
      "Our modern fleet is Euro-6 compliant, guaranteeing 100% exemption from London Ultra Low Emission Zone (ULEZ) charges and regional Clean Air Zones (such as Birmingham CAZ). When operating inside the central London Congestion Charge zone during charging hours (07:00–18:00 Mon–Fri, 12:00–18:00 Sat–Sun), the standard TfL fee of £15.00 applies at cost.",
  },
  {
    title: "Heavy Items & Bulky Extras",
    description:
      "Specialist heavy items requiring extra equipment or additional crew (such as upright pianos, commercial safes, or American-style fridge-freezers) carry an item supplement of £50 to £80. Please declare these when requesting your quote so appropriate equipment is allocated.",
  },
  {
    title: "Stairs & Property Access",
    description:
      "Properties with multi-floor walk-ups without a working passenger/service lift may incur an access supplement of £15 per flight beyond 2 flights. Informing us during booking ensures we assign an appropriate team size to keep move day on schedule.",
  },
];

export default function PricingPage() {
  notFound();

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pricing & Rates", url: "/pricing" },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={[breadcrumbsSchema]} />
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
            Transparent Pricing Structure
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            How Removals Pricing Works
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We operate on a straightforward, transparent pricing policy. No
            invented rates, no hidden fuel surcharges, and no surprise arrival
            fees. Review how our rate framework operates below.
          </p>
        </div>

        {/* Crew Tier Cards */}
        <section aria-labelledby="crew-tiers-heading" className="mb-16">
          <h2
            id="crew-tiers-heading"
            className="text-2xl font-bold text-slate-900 text-center mb-8"
          >
            Crew Configurations & Rate Tiers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {crewTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl bg-white p-6 sm:p-8 border shadow-xs flex flex-col justify-between ${
                  tier.popular
                    ? "border-red-500 ring-2 ring-red-500/20"
                    : "border-slate-200"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                    {tier.description}
                  </p>

                  <div className="my-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Standard Hourly Rates
                    </span>
                    <span className="text-2xl font-black font-mono text-slate-900 mt-1 block">
                      {tier.hourlyRate}
                    </span>
                    {/* <span className="text-[11px] text-amber-800 font-semibold mt-1 inline-block bg-amber-100/80 px-2 py-0.5 rounded-sm">
                      Requires client confirmation
                    </span> */}
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold shrink-0">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    href="/quote"
                    className={`w-full inline-flex items-center justify-center rounded-xl py-3 text-xs font-bold transition-all ${
                      tier.popular
                        ? "bg-red-600 text-white hover:bg-red-500"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Get Custom Quote &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Factors Breakdown */}
        <section aria-labelledby="pricing-factors-heading" className="mb-16">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-xs">
            <div className="mb-8 max-w-2xl">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Full Clarity
              </span>
              <h2
                id="pricing-factors-heading"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1"
              >
                Pricing Factors & Transparency Policy
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                All numbers are placeholder-verified per project guidelines.
                Review the terms below:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-2xl bg-slate-50 p-6 border border-slate-100"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-200 p-5 text-xs text-amber-900">
              <span className="font-bold block mb-1">
                Deposit & Payment Security:
              </span>
              Bookings are secured with a standard confirmation deposit of £40.
              The remaining balance is payable upon job completion via bank
              transfer, cash, or credit/debit card. Invoices with full VAT and
              company registration details are provided for commercial and
              residential clients.
            </div>
          </div>
        </section>

        {/* Quote CTA */}
        <QuoteCtaCard
          title="Request an Upfront, Exact Quote"
          description="Enter your postcodes, move date, and item details. We calculate your exact quotation with zero hidden extras."
        />
      </main>
    </div>
  );
}
