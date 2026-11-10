import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { JsonLd } from "@/components/seo/json-ld";
import { getNearbyAreas } from "@/content";
import { londonBoroughs } from "@/content/london-boroughs";
import {
  getVerifiedJobExamples,
  livePublishedPricing,
} from "@/content/london-proof";
import { services } from "@/content/services";
import {
  getAreaServiceContent,
  getValidAreaServicePairs,
} from "@/lib/seo/area-service-content";
import { constructMetadata } from "@/lib/seo/metadata";
import {
  generateBreadcrumbSchema,
  generateFaqPageSchema,
  generateServiceSchema,
} from "@/lib/seo/schema";
import { isTier1City } from "@/lib/seo/tiers";

interface Props {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  return getValidAreaServicePairs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const combo = getAreaServiceContent(citySlug, serviceSlug);

  if (!combo) {
    return constructMetadata({ title: "Page Not Found" });
  }

  const isTier1 = isTier1City(citySlug);

  return constructMetadata({
    title: combo.seoTitle,
    exactTitle: true,
    description: combo.seoDescription,
    path: `/areas/${combo.citySlug}/${combo.serviceSlug}`,
    noIndex: !isTier1,
  });
}

export default async function AreaServiceDetailPage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const combo = getAreaServiceContent(citySlug, serviceSlug);

  if (!combo) {
    notFound();
  }

  const { area, service } = combo;
  const nearbyAreas = getNearbyAreas(area.slug, 4);
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const relatedServices = services
    .filter((s) => service.relatedServiceSlugs.includes(s.slug))
    .slice(0, 4);
  const verifiedLondonJobs =
    area.slug === "london" ? getVerifiedJobExamples("london") : [];

  const serviceSchema = generateServiceSchema(
    service.name,
    combo.seoDescription,
    `/areas/${area.slug}/${service.slug}`,
    area.name,
  );
  const faqSchema = generateFaqPageSchema(combo.localFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Coverage Areas", url: "/areas" },
    { name: area.name, url: `/areas/${area.slug}` },
    {
      name: service.name,
      url: `/areas/${area.slug}/${service.slug}`,
    },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
      {/* Top Banner & Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Coverage Areas", href: "/areas" },
              { label: area.name, href: `/areas/${area.slug}` },
              {
                label: service.name,
                href: `/areas/${area.slug}/${service.slug}`,
              },
            ]}
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider">
              {area.name} Logistics
            </span>
            <span className="inline-block rounded-full bg-slate-200/80 px-3 py-1 text-xs font-mono font-medium text-slate-800">
              Postcodes: {area.postcodePrefixes.join(", ")}
            </span>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              Euro-6 Compliant
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            {combo.h1}
          </h1>

          <p className="mt-4 text-lg text-slate-700 font-medium leading-relaxed">
            {combo.leadParagraph}
          </p>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {combo.serviceOverview}
          </p>
        </div>

        {/* Localized Logistics & Operating Nuances */}
        <section className="max-w-4xl mx-auto space-y-6 mb-12 md:mb-16">
          <h2 className="text-2xl font-bold text-slate-900">
            How We Execute {service.name} in {area.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700 font-bold text-sm">
                    P
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">
                    {combo.parkingAndPermits.heading}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {combo.parkingAndPermits.content}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                    🏢
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">
                    {combo.accessAndHandling.heading}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {combo.accessAndHandling.content}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-bold text-sm">
                    🛣️
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">
                    {combo.transitAndCorridors.heading}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {combo.transitAndCorridors.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Specific to this Service */}
        <section className="max-w-4xl mx-auto rounded-3xl bg-white p-8 md:p-10 border border-slate-200 shadow-xs mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Key Service Advantages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {combo.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-100"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm font-medium text-slate-800">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bespoke Local FAQs Accordion */}
        <section className="max-w-4xl mx-auto mb-12 md:mb-16">
          <FaqAccordion
            faqs={combo.localFaqs}
            title={`${service.name} in ${area.name} FAQs`}
            description={`Answers to common questions about booking and executing ${service.name.toLowerCase()} across ${area.name}.`}
          />
        </section>

        {/* London Borough Hubs Section (Displayed for London) */}
        {area.slug === "london" && (
          <section className="max-w-4xl mx-auto rounded-3xl bg-white p-8 md:p-10 border border-slate-200 shadow-xs mb-12 md:mb-16">
            <div className="mb-6">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                London Boroughs
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                London Borough Moving Coverage
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                We coordinate {service.name.toLowerCase()} across all thirty-two
                London boroughs, including these primary hubs:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {londonBoroughs.map((b) => (
                <Link
                  key={b.slug}
                  href={`/areas/london/boroughs/${b.slug}`}
                  className="group flex flex-col justify-between rounded-xl bg-slate-50 p-4 border border-slate-200 hover:border-red-300 hover:bg-white hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors text-sm">
                        {b.name}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-200/60 px-1.5 py-0.5 rounded">
                        {b.postcodeDistricts.slice(0, 3).join(", ")}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {b.shortDescription}
                    </p>
                  </div>
                  <span className="mt-3 text-xs font-semibold text-red-600 inline-flex items-center gap-1 group-hover:underline">
                    Man and Van {b.name} &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* London Congestion Charge & ULEZ Guidance */}
        {area.slug === "london" && (
          <section className="max-w-4xl mx-auto rounded-3xl bg-white p-8 md:p-10 border border-slate-200 shadow-xs mb-12 md:mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Congestion Charge & ULEZ Operating Details in London
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Our 3.5T Luton removals fleet is fully compliant with
              London&apos;s Ultra Low Emission Zone (ULEZ) across all London
              postcodes with zero daily emissions surcharges. When moves transit
              central London within operating hours, Congestion Charge zone
              requirements apply.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 block mb-1">
                Official Transport for London (TfL) Information:
              </strong>
              For active charging hours, boundary maps, and payment rules,
              please consult official TfL resources:
              <div className="mt-2 flex flex-wrap gap-4">
                <a
                  href="https://tfl.gov.uk/modes/driving/congestion-charge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-red-600 hover:text-red-700 underline"
                >
                  TfL Congestion Charge Details &rarr;
                </a>
                <a
                  href="https://tfl.gov.uk/modes/driving/ultra-low-emission-zone-ulez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-red-600 hover:text-red-700 underline"
                >
                  TfL ULEZ Information & Boundaries &rarr;
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Published Pricing Section (London) */}
        {area.slug === "london" && (
          <section className="max-w-4xl mx-auto rounded-3xl bg-white p-8 md:p-10 border border-slate-200 shadow-xs mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                  Verified Tariffs
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  {service.name} Pricing in London
                </h2>
              </div>
              <p className="text-xs text-slate-500 sm:text-right max-w-xs">
                Transparent hourly rates with zero hidden mileage fees across
                London postcodes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
                <span className="text-xs text-red-600">
                  per hour (most popular)
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-xs font-medium text-slate-600 block mb-1">
                  Minimum Booking
                </span>
                <span className="text-2xl font-black text-slate-900 block mb-1">
                  {livePublishedPricing.bookingTerms.minimumBookingHours} hours
                </span>
                <span className="text-xs text-slate-500">standard term</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <span className="text-xs font-medium text-slate-600 block mb-1">
                  Deposit
                </span>
                <span className="text-2xl font-black text-slate-900 block mb-1">
                  {livePublishedPricing.bookingTerms.depositFormatted}
                </span>
                <span className="text-xs text-slate-500">
                  credited to invoice
                </span>
              </div>
            </div>

            {verifiedLondonJobs.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-3">
                  Verified Recent Moves in London
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {verifiedLondonJobs.map((j) => (
                    <div
                      key={`${j.date}-${j.propertyType}`}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span>{j.date}</span>
                        <span className="font-semibold text-slate-700">
                          {j.vanAndCrew}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {j.propertyType}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">{j.route}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Related London Services (when London) or Other City Services */}
        {area.slug === "london" ? (
          <section className="max-w-4xl mx-auto rounded-3xl bg-white p-6 md:p-8 border border-slate-200 mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Related London Removals Services
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Complementary services operating alongside{" "}
                  {service.name.toLowerCase()} across Greater London:
                </p>
              </div>
              <Link
                href="/areas/london"
                className="text-xs font-semibold text-red-600 hover:text-red-700 whitespace-nowrap"
              >
                ← London Removals Hub
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/areas/london/${rel.slug}`}
                  className="rounded-xl bg-slate-50 p-3.5 border border-slate-100 hover:border-red-300 hover:bg-white hover:shadow-xs transition-all group"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors text-xs sm:text-sm">
                    {rel.name}
                  </h3>
                  <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                  <span className="mt-2 text-[11px] font-semibold text-red-600 inline-flex items-center gap-1 group-hover:underline">
                    View London service &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <section className="max-w-4xl mx-auto rounded-3xl bg-white p-6 md:p-8 border border-slate-200 mb-12 md:mb-16">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Other Services in {area.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Looking for something else in {area.name}? Explore our other
              specialist removal options:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/areas/${area.slug}/${other.slug}`}
                  className="rounded-xl bg-slate-50 p-3 text-center border border-slate-100 hover:border-red-300 hover:bg-white hover:text-red-600 transition-all text-xs font-semibold text-slate-800 truncate"
                >
                  {other.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Same Service in Nearby Cities */}
        {nearbyAreas.length > 0 && (
          <section className="max-w-4xl mx-auto rounded-3xl bg-slate-100 p-6 md:p-8 mb-12 md:mb-16">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              {service.name} in Nearby Towns & Cities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              We also operate daily {service.name.toLowerCase()} routes in
              adjacent areas:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nearbyAreas.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/areas/${nearby.slug}/${service.slug}`}
                  className="rounded-xl bg-white p-3.5 text-center border border-slate-200 hover:border-red-300 hover:shadow-xs transition-all group"
                >
                  <span className="text-sm font-bold text-slate-900 group-hover:text-red-600 block">
                    {nearby.name}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Quote CTA */}
        <div className="max-w-4xl mx-auto">
          <QuoteCtaCard
            serviceSlug={service.slug}
            cityName={area.name}
            title={`Book ${service.name} in ${area.name}`}
            description={`Get a competitive, transparent quote for ${service.name.toLowerCase()} in ${area.name}. Punctual service, modern Luton vans, and professional handling.`}
          />
        </div>
      </main>
    </div>
  );
}
