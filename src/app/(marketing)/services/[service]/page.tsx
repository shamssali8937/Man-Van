import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { JsonLd } from "@/components/seo/json-ld";
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
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return constructMetadata({ title: "Service Not Found" });
  }

  // Guaranteed strictly < 60 chars title and < 160 chars description
  const shortTitle = `${service.name} UK`;
  return constructMetadata({
    title: formatSeoTitle(shortTitle),
    description: formatSeoDescription(service.shortDescription),
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related services objects
  const relatedServices = services.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug),
  );

  // Popular cities for this service
  const popularAreas = areas.slice(0, 10);

  const serviceSchema = generateServiceSchema(
    service.name,
    service.shortDescription,
    `/services/${service.slug}`,
  );
  const faqSchema = generateFaqPageSchema(service.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.name, url: `/services/${service.slug}` },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
      {/* Top Banner & Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.name, href: `/services/${service.slug}` },
            ]}
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
            AB Removals Professional Logistics
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            {service.name} Services UK
          </h1>
          <p className="mt-4 text-lg text-slate-700 font-medium leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Quick Van Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-bold">●</span> 3.5T Luton Box
              Van
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-bold">●</span> 500kg Tail Lift
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-bold">●</span> Goods in Transit
              Insured
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 font-bold">●</span> 2–3 Man Crews
              Available
            </div>
          </div>
        </div>

        {/* In-depth Service Overview */}
        <section className="max-w-4xl mx-auto rounded-3xl bg-white p-8 md:p-12 border border-slate-200 shadow-xs mb-12 md:mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Service Details & Moving Standards
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed space-y-4">
            <p>{service.description}</p>
          </div>

          {/* Key Benefits */}
          <div className="mt-8 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Key Features & Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {service.benefits.map((benefit) => (
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
          </div>
        </section>

        {/* How It Works for this Service */}
        <section className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-8 md:p-12 mb-12 md:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
              Seamless Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How Our {service.name} Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-slate-800/80 p-5 border border-slate-700">
              <span className="text-2xl font-black text-red-400 block mb-1 font-mono">
                1
              </span>
              <h3 className="text-base font-bold text-white mb-1">
                Quote & Scheduling
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Provide collection & destination postcodes with an inventory
                estimate. Receive a transparent, guaranteed fixed quote.
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-5 border border-slate-700">
              <span className="text-2xl font-black text-red-400 block mb-1 font-mono">
                2
              </span>
              <h3 className="text-base font-bold text-white mb-1">
                Transit Protection
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our moving team wraps furniture with transit blankets and straps
                items securely inside our Luton van to eliminate road vibration.
              </p>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-5 border border-slate-700">
              <span className="text-2xl font-black text-red-400 block mb-1 font-mono">
                3
              </span>
              <h3 className="text-base font-bold text-white mb-1">
                Room Placement
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We carry every box and item directly into your chosen rooms at
                the destination, leaving your doorways and corridors clear.
              </p>
            </div>
          </div>
        </section>

        {/* Service FAQs with Accordion */}
        <section className="max-w-4xl mx-auto mb-12 md:mb-16">
          <FaqAccordion
            faqs={service.faqs}
            title={`${service.name} FAQs`}
            description="Clear answers regarding our equipment, booking terms, and transit procedures."
          />
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Related Services You May Need
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Complementary removal and logistics solutions for your move.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="rounded-xl bg-white p-5 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group"
                >
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                  <span className="mt-3 text-xs font-semibold text-red-600 inline-flex items-center gap-1 group-hover:underline">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* In London Dedicated Callout */}
        <section className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-8 md:p-10 border border-slate-800 shadow-sm mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-red-500/20 px-3.5 py-1 text-xs font-bold text-red-400 uppercase tracking-wider">
                London Removals &amp; Logistics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Looking for {service.name} in London?
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Operating throughout Central London, Inner boroughs, and Outer
                London. All Luton box vans are fully ULEZ-compliant with
                hydraulic tail lifts and heavy-duty moving gear for apartments,
                houses, student halls, and commercial premises across the
                capital.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <Link
                href={`/areas/london/${service.slug}`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-red-600 text-white text-sm font-bold shadow-md hover:bg-red-700 transition-colors text-center"
              >
                {service.name} in London &rarr;
              </Link>
              <Link
                href="/areas/london"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors text-center border border-slate-700"
              >
                London Removals Hub
              </Link>
            </div>
          </div>
        </section>

        {/* Local Area Links for this Service */}
        <section className="max-w-4xl mx-auto rounded-3xl bg-white p-6 md:p-8 border border-slate-200 mb-12 md:mb-16">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            Book {service.name} by UK City
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Explore local notes, parking rules, and route information for this
            service in top UK coverage areas:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {popularAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/${service.slug}`}
                className="rounded-lg bg-slate-50 p-2.5 text-center text-xs font-medium text-slate-700 hover:text-red-600 hover:bg-red-50/50 transition-colors truncate border border-slate-100"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Quote CTA */}
        <div className="max-w-4xl mx-auto">
          <QuoteCtaCard
            serviceSlug={service.slug}
            title={`Get a Quote for ${service.name}`}
            description="Transparent fixed pricing tailored to your requirements. Enter your move details to get an upfront estimate today."
          />
        </div>
      </main>
    </div>
  );
}
