import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getAllLondonBoroughSlugs,
  getLondonBorough,
} from "@/content/london-boroughs";
import {
  getVerifiedCustomPrices,
  getVerifiedJobExamples,
  livePublishedPricing,
} from "@/content/london-proof";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";
import {
  generateBreadcrumbSchema,
  generateFaqPageSchema,
  generateServiceSchema,
} from "@/lib/seo/schema";

interface Props {
  params: Promise<{ borough: string }>;
}

export async function generateStaticParams() {
  return getAllLondonBoroughSlugs().map((slug) => ({
    borough: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { borough: slug } = await params;
  const borough = getLondonBorough(slug);

  if (!borough) {
    return constructMetadata({ title: "Borough Not Found" });
  }

  return constructMetadata({
    title: borough.seoTitle,
    exactTitle: true,
    description: borough.seoDescription,
    path: `/areas/london/boroughs/${borough.slug}`,
  });
}

export default async function LondonBoroughPage({ params }: Props) {
  const { borough: slug } = await params;
  const borough = getLondonBorough(slug);

  if (!borough) {
    notFound();
  }

  // Schema generation: Service, FAQPage, BreadcrumbList (NO review or rating schema)
  const serviceSchema = generateServiceSchema(
    "Man and Van",
    borough.seoDescription,
    `/areas/london/boroughs/${borough.slug}`,
    `${borough.name}, London`,
  );
  const faqSchema = generateFaqPageSchema(borough.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Areas", url: "/areas" },
    { name: "London", url: "/areas/london" },
    { name: "Boroughs", url: "/areas/london" },
    { name: borough.name, url: `/areas/london/boroughs/${borough.slug}` },
  ]);

  // Verified-only data gates (Phase 1)
  const verifiedJobs = getVerifiedJobExamples(borough.slug);
  const verifiedPrices = getVerifiedCustomPrices(borough.slug);

  // Neighbouring borough objects for local interlinking
  const neighbours = borough.neighbouringBoroughs
    .map((neighbourSlug) => getLondonBorough(neighbourSlug))
    .filter((b): b is NonNullable<typeof b> => b !== null && b !== undefined);

  const keyLondonServices = [
    {
      title: "Man and Van",
      href: "/areas/london/man-and-van",
      desc: "Agile Luton vans with driver or working crew for quick transfers",
    },
    {
      title: "House Removals",
      href: "/areas/london/house-removals",
      desc: "Full home moves across London boroughs",
    },
    {
      title: "Furniture Delivery",
      href: "/areas/london/furniture-removals-and-delivery",
      desc: "Store collections and sofa transport with tail lift",
    },
    {
      title: "Office Relocations",
      href: "/areas/london/office-and-commercial-removals",
      desc: "Commercial moves for desks, archives, and tech equipment",
    },
    {
      title: "Student Moves",
      href: "/areas/london/student-and-small-moves",
      desc: "Affordable room and studio transit across universities",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />

      {/* Top Banner & Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Coverage Areas", href: "/areas" },
              { label: "London", href: "/areas/london" },
              {
                label: borough.name,
                href: `/areas/london/boroughs/${borough.slug}`,
              },
            ]}
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider">
              Greater London • Borough Service
            </span>
            <span className="inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-mono font-medium text-slate-800">
              Postcodes: {borough.postcodeDistricts.join(", ")}
            </span>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
              Euro 6 ULEZ Compliant
            </span>
            {borough.transportAndRoads.congestionChargeZone === "full" && (
              <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                Congestion Charge Zone
              </span>
            )}
            {borough.transportAndRoads.congestionChargeZone === "partial" && (
              <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 border border-amber-200">
                Bordering Congestion Charge Zone
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            {borough.h1}
          </h1>

          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
            {borough.leadParagraph}
          </p>
        </div>

        {/* Operational Highlights Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold mb-4">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Districts & Postcodes
            </h2>
            <p className="text-sm text-slate-600 mb-3">
              Serving all neighbourhoods across {borough.name}:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {borough.neighbourhoods.map((n) => (
                <span
                  key={n}
                  className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Emissions & Standards
            </h2>
            <p className="text-sm text-slate-600 mb-3">
              ULEZ compliant Euro 6 Luton vans with tail lifts:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
              <li>• Zero ULEZ penalty charges for customers</li>
              <li>• 3.5-tonne Luton capacity with 500kg tail lift</li>
              <li>• Transit blankets & strapping on every job</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Dispatch & Hours
            </h2>
            <p className="text-sm text-slate-600 mb-3">
              Reliable moving transport 7 days a week:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
              <li>• Available 24 hours / 7 days a week</li>
              <li>• Driver-only and 2-person moving crew options</li>
              <li>• Transparent 2-hour minimum booking terms</li>
            </ul>
          </div>
        </div>

        {/* In-Depth Local Editorial Content */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          {/* Section 1: Property Types */}
          <section className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Who We Move in {borough.name}: Local Property Profiles
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6 font-normal">
              {borough.propertyTypesContent}
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-3">
                Common Property Types Serviced
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
                {borough.propertyTypes.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 2: Access & Stairs */}
          <section className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Access Challenges, Stairs, and Service Lifts in {borough.name}
            </h2>
            <p className="text-slate-700 leading-relaxed font-normal">
              {borough.accessAndStairs}
            </p>
          </section>

          {/* Section 3: Parking, CPZs, and Permits */}
          <section className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Parking Rules, CPZ Zones, and Council Bay Suspensions
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6 font-normal">
              {borough.parkingPermitsContent}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Controlled Parking Zones
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {borough.parkingAndAccess.cpzOverview}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Suspension Procedure
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {borough.parkingAndAccess.suspensionProcess}
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Congestion Charge & ULEZ */}
          <section className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Congestion Charge and ULEZ Information for {borough.name}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6 font-normal">
              {borough.transportAndUlezContent}
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 block mb-1">
                Official Transport for London (TfL) Guidance:
              </strong>
              For current daily charge rates, operational hours, and boundary
              maps, please consult the official Transport for London portals:
              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href="https://tfl.gov.uk/modes/driving/congestion-charge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-red-600 hover:text-red-700 underline"
                >
                  TfL Congestion Charge Portal →
                </a>
                <a
                  href="https://tfl.gov.uk/modes/driving/ultra-low-emission-zone-ulez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-red-600 hover:text-red-700 underline"
                >
                  TfL ULEZ Information Portal →
                </a>
              </div>
            </div>
          </section>

          {/* Section 5: Transit Corridors */}
          <section className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Key Transport Corridors & Typical Routes in {borough.name}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6 font-normal">
              {borough.typicalRoutesContent}
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-3">
                Primary Transit Corridors
              </h3>
              <div className="flex flex-wrap gap-2">
                {borough.transportAndRoads.keyCorridors.map((kc) => (
                  <span
                    key={kc}
                    className="inline-block rounded-md bg-white border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-800"
                  >
                    {kc}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: Practical Moving Tips */}
          <section className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Local Moving Day Tips for {borough.name} Residents
            </h2>
            <p className="text-slate-700 leading-relaxed font-normal">
              {borough.localMovingTips}
            </p>
          </section>
        </div>

        {/* Pricing Block - Single Source of Truth from Live Published Pricing */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                  Transparent Rates
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Man and Van Pricing in {borough.name}
                </h2>
              </div>
              <p className="text-xs text-slate-500 md:text-right max-w-xs">
                Transparent hourly rates with zero hidden charges. 2-hour
                minimum booking term.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-xs font-medium text-slate-600 block mb-1">
                  Driver Only
                </span>
                <span className="text-2xl font-black text-slate-900 block mb-1">
                  {livePublishedPricing.driverOnly.formatted}
                </span>
                <span className="text-xs text-slate-500">per hour</span>
              </div>
              <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-center">
                <span className="text-xs font-semibold text-red-800 block mb-1">
                  2-Person Crew
                </span>
                <span className="text-2xl font-black text-red-700 block mb-1">
                  {livePublishedPricing.twoManCrew.formatted}
                </span>
                <span className="text-xs text-red-600">per hour (popular)</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-xs font-medium text-slate-600 block mb-1">
                  Minimum Term
                </span>
                <span className="text-2xl font-black text-slate-900 block mb-1">
                  {livePublishedPricing.bookingTerms.minimumBookingHours} hours
                </span>
                <span className="text-xs text-slate-500">minimum charge</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-xs font-medium text-slate-600 block mb-1">
                  Booking Deposit
                </span>
                <span className="text-2xl font-black text-slate-900 block mb-1">
                  {livePublishedPricing.bookingTerms.depositFormatted}
                </span>
                <span className="text-xs text-slate-500">
                  secures your van & crew
                </span>
              </div>
            </div>

            {/* Custom borough verified price table (strictly gated: renders ONLY if verified) */}
            {verifiedPrices.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-3">
                  Verified Local Fixed Rates for {borough.name}
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 uppercase">
                        <th className="py-2">Service</th>
                        <th className="py-2">Scope</th>
                        <th className="py-2">Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {verifiedPrices.map((vp) => (
                        <tr key={vp.label}>
                          <td className="py-2 font-medium text-slate-900">
                            {vp.service}
                          </td>
                          <td className="py-2 text-slate-600">{vp.label}</td>
                          <td className="py-2 font-bold text-slate-900">
                            £{vp.amountFrom} {vp.unit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Verified Job Examples (Strictly gated: renders ONLY if verified) */}
        {verifiedJobs.length > 0 && (
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                Verified Past Moves
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Recent Removals in {borough.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {verifiedJobs.map((job) => (
                  <div
                    key={`${job.date}-${job.propertyType}`}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span>{job.date}</span>
                      <span className="font-semibold text-slate-700">
                        {job.vanAndCrew}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {job.propertyType}
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">{job.route}</p>
                    <p className="text-xs text-slate-700 font-medium">
                      {job.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Local FAQs Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-6">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
              Local Guidance
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions About Moving in {borough.name}
            </h2>
          </div>
          <FaqAccordion faqs={borough.faqs} />
        </div>

        {/* Clear Quote CTA with Phone and WhatsApp */}
        <section className="max-w-4xl mx-auto mb-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 text-white shadow-xl">
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-3.5 py-1 text-xs font-semibold text-red-300 ring-1 ring-red-500/30 mb-4">
              Direct Dispatch • {borough.name}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Get an Instant Quote for Your {borough.name} Move
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
              Punctual Luton vans with tail lifts, experienced moving teams, and
              upfront transparent hourly or fixed pricing across {borough.name}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`/quote?area=${encodeURIComponent(borough.slug)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-red-600 px-7 py-3.5 text-base font-bold text-white shadow-lg hover:bg-red-500 active:scale-95 transition-all"
              >
                Get a Free Quote Online
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <a
                href={siteConfig.telHref}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-base font-semibold text-white hover:bg-slate-700 active:scale-95 transition-all"
              >
                <svg
                  className="mr-2 h-4 w-4 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call {siteConfig.telephone}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-emerald-500 active:scale-95 transition-all shadow-md"
              >
                <svg
                  className="mr-2 h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h.02zm-3.53 4.44c-.19 0-.42.07-.64.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.17 1.71 2.62 4.15 3.67.58.25 1.03.4 1.39.51.58.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.17-.48-.29-.26-.13-1.52-.75-1.76-.84-.23-.09-.4-.13-.57.13-.17.25-.66.84-.81 1.01-.15.17-.3.19-.55.07-.26-.13-1.09-.4-2.07-1.28-.76-.68-1.28-1.52-1.43-1.78-.15-.25-.02-.39.11-.51.11-.11.26-.29.39-.44.13-.15.17-.25.26-.42.09-.17.04-.32-.02-.45-.06-.13-.57-1.38-.78-1.89-.2-.5-.41-.43-.57-.44l-.49-.01z" />
                </svg>
                WhatsApp Chat
              </a>
            </div>
          </div>
        </section>

        {/* Interlinking: Neighbouring Boroughs & Popular Services */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Related London Services */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Popular Removal Services in London
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {keyLondonServices.map((ks) => (
                <Link
                  key={ks.title}
                  href={ks.href}
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors group"
                >
                  <span className="text-sm font-bold text-slate-900 group-hover:text-red-700 block mb-1">
                    {ks.title}
                  </span>
                  <span className="text-xs text-slate-600 leading-snug block">
                    {ks.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Neighbouring Boroughs */}
          {neighbours.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Serving Neighbouring London Boroughs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {neighbours.map((nb) => (
                  <Link
                    key={nb.slug}
                    href={`/areas/london/boroughs/${nb.slug}`}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-900 block mb-1">
                      Man and Van {nb.name}
                    </span>
                    <span className="text-xs text-slate-600 line-clamp-2">
                      {nb.shortDescription}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Link back to Main London Hub */}
          <div className="text-center pt-4">
            <Link
              href="/areas/london"
              className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700"
            >
              ← View All Removals in London
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
