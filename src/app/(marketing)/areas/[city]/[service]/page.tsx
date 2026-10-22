import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { JsonLd } from "@/components/seo/json-ld";
import { getNearbyAreas } from "@/content";
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

  const serviceSchema = generateServiceSchema(
    service.name,
    combo.leadParagraph,
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

        {/* Other Services in this City */}
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
