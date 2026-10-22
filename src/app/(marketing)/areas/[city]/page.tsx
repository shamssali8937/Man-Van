import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { JsonLd } from "@/components/seo/json-ld";
import { getNearbyAreas } from "@/content";
import { areas } from "@/content/areas";
import { services } from "@/content/services";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";
import {
  generateBreadcrumbSchema,
  generateFaqPageSchema,
  generateServiceSchema,
} from "@/lib/seo/schema";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return areas.map((area) => ({
    city: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    return constructMetadata({ title: "Area Not Found" });
  }

  // Guaranteed strictly < 60 chars title and < 160 chars description
  return constructMetadata({
    title: formatSeoTitle(`Removals in ${area.name}`),
    exactTitle: true,
    description:
      area.metaDescription ||
      formatSeoDescription(
        `Professional removals in ${area.name} (${area.postcodePrefixes.join(", ")}). Dedicated Luton vans with tail lifts, punctual service and upfront fixed quotes.`,
      ),
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaCityPage({ params }: Props) {
  const { city: slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const nearbyAreas = getNearbyAreas(area.slug, 4);

  const localServiceSchema = generateServiceSchema(
    "Removals & Man and Van",
    area.intro,
    `/areas/${area.slug}`,
    area.name,
  );
  const faqSchema = generateFaqPageSchema(area.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Coverage Areas", url: "/areas" },
    { name: area.name, url: `/areas/${area.slug}` },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={[localServiceSchema, faqSchema, breadcrumbSchema]} />
      {/* Top Banner & Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Coverage Areas", href: "/areas" },
              { label: area.name, href: `/areas/${area.slug}` },
            ]}
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider">
              {area.region} • {area.county}
            </span>
            <span className="inline-block rounded-full bg-slate-200/80 px-3 py-1 text-xs font-mono font-medium text-slate-800">
              Postcodes: {area.postcodePrefixes.join(", ")}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Removals & Man and Van in {area.name}
          </h1>

          <p className="mt-4 text-lg text-slate-700 font-medium leading-relaxed">
            {area.intro}
          </p>
        </div>

        {/* Local Logistics & Notes Cards */}
        <section className="max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Local Logistics & Navigation in {area.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700 font-bold text-sm">
                  P
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Parking & Regulations
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {area.localNotes.parking}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                  🏢
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Building Access
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {area.localNotes.access}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-bold text-sm">
                  🛣️
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Key Transit Corridors
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {area.localNotes.typicalRoutes}
              </p>
            </div>
          </div>
        </section>

        {/* Services Available in this City */}
        <section className="max-w-4xl mx-auto rounded-3xl bg-white p-8 md:p-10 border border-slate-200 shadow-xs mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Removal Services in {area.name}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Choose a specialized removal service tailored to {area.name}{" "}
                properties:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/areas/${area.slug}/${service.slug}`}
                className="group flex flex-col justify-between rounded-xl bg-slate-50 p-5 border border-slate-100 hover:border-red-300 hover:bg-white hover:shadow-xs transition-all"
              >
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors text-sm sm:text-base">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <span className="mt-4 text-xs font-semibold text-red-600 inline-flex items-center gap-1 group-hover:underline">
                  View {area.name} page &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Local FAQs with Accordion */}
        <section className="max-w-4xl mx-auto mb-12 md:mb-16">
          <FaqAccordion
            faqs={area.faqs}
            title={`Moving in ${area.name} FAQs`}
            description={`Frequently asked questions regarding moves, parking permits, and van access in ${area.name}.`}
          />
        </section>

        {/* Nearby Coverage Areas */}
        {nearbyAreas.length > 0 && (
          <section className="max-w-4xl mx-auto rounded-3xl bg-slate-100 p-6 md:p-8 mb-12 md:mb-16">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Nearby & Regional Coverage Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              We also operate frequent removal runs in these adjacent locations:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nearbyAreas.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/areas/${nearby.slug}`}
                  className="rounded-xl bg-white p-3.5 text-center border border-slate-200 hover:border-red-300 hover:shadow-xs transition-all group"
                >
                  <span className="text-sm font-bold text-slate-900 group-hover:text-red-600 block">
                    {nearby.name}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {nearby.county}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Quote CTA */}
        <div className="max-w-4xl mx-auto">
          <QuoteCtaCard
            cityName={area.name}
            title={`Get Your ${area.name} Removal Quote`}
            description={`Fast, reliable removals in ${area.name} and across the UK. Instant transparent quotes with zero hidden mileage fees.`}
          />
        </div>
      </main>
    </div>
  );
}
