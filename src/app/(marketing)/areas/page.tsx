import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { JsonLd } from "@/components/seo/json-ld";
import { areas } from "@/content/areas";
import { services } from "@/content/services";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("UK Removals Coverage Areas | 30 Cities"),
  description: formatSeoDescription(
    "Explore our 30 major UK removal coverage areas. Direct nationwide door-to-door transit across London, Birmingham, Manchester, Leeds, Bristol and Scotland.",
  ),
  path: "/areas",
});

export default function AreasHubPage() {
  // Group areas by region
  const regionsMap = areas.reduce(
    (acc, area) => {
      const reg = area.region || "Other UK Areas";
      if (!acc[reg]) {
        acc[reg] = [];
      }
      acc[reg].push(area);
      return acc;
    },
    {} as Record<string, typeof areas>,
  );

  const regionNames = Object.keys(regionsMap).sort();

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Coverage Areas", url: "/areas" },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={[breadcrumbsSchema]} />
      {/* Top Banner & Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Coverage Areas", href: "/areas" }]} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
            Nationwide Door-to-Door Removals
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            UK Coverage Areas & Removal Routes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our agile Luton vans connect 30 major UK cities, towns, and
            surrounding regions. Rather than relying on regional depot delays,
            we provide direct point-to-point removals and agile man and van
            transport nationwide.
          </p>
        </div>

        {/* Quick Corridor Highlights */}
        <section className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 mb-12 md:mb-16">
          <h2 className="text-lg font-bold text-slate-900 mb-3">
            Direct Intercity Motorway Corridors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-600">
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">
                M1 / M6 Spine
              </span>
              Connecting London, Milton Keynes, Birmingham, Manchester, and the
              North.
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">
                M4 / M5 Corridor
              </span>
              Direct connections between London, Reading, Bristol, and South
              Wales.
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">
                A1(M) / Eastern Axis
              </span>
              Fast transit linking London, Cambridge, Nottingham, Leeds, and
              Newcastle.
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">
                Cross-Border Scotland
              </span>
              Dedicated long-distance runs connecting England with Glasgow &
              Edinburgh.
            </div>
          </div>
        </section>

        {/* Areas Directory Grouped by Region */}
        <section aria-labelledby="all-areas-heading" className="mb-16">
          <h2
            id="all-areas-heading"
            className="text-2xl font-extrabold text-slate-900 mb-8"
          >
            All 30 Covered Cities & Municipalities
          </h2>

          <div className="space-y-10">
            {regionNames.map((region) => {
              const regionAreas = regionsMap[region];
              return (
                <div
                  key={region}
                  className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <h3 className="text-xl font-bold text-slate-900">
                      {region}
                    </h3>
                    <span className="text-xs font-semibold text-slate-500">
                      {regionAreas.length}{" "}
                      {regionAreas.length === 1 ? "City" : "Cities"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {regionAreas.map((area) => (
                      <article
                        key={area.slug}
                        className="rounded-xl bg-slate-50 p-4 border border-slate-100 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all group"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                              <Link
                                href={`/areas/${area.slug}`}
                                className="hover:underline"
                              >
                                {area.name}
                              </Link>
                            </h4>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {area.county}
                            </p>
                          </div>
                          <span className="inline-block rounded-md bg-slate-200/70 px-2 py-0.5 text-[11px] font-mono font-medium text-slate-700">
                            {area.postcodePrefixes.slice(0, 2).join(", ")}
                          </span>
                        </div>

                        <p className="mt-2.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {area.intro}
                        </p>

                        <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                          <Link
                            href={`/areas/${area.slug}`}
                            className="font-semibold text-red-600 hover:underline inline-flex items-center gap-1"
                          >
                            Area notes &rarr;
                          </Link>
                          <Link
                            href={`/quote?city=${encodeURIComponent(area.slug)}`}
                            className="text-slate-500 hover:text-slate-900 font-medium"
                          >
                            Book move
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Services We Provide in Every Area */}
        <section className="rounded-3xl bg-white border border-slate-200 p-8 md:p-10 mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Services Available in Every Area
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            All 6 of our specialized transport services operate across our full
            network of 30 cities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-xl bg-slate-50 p-4 border border-slate-100 hover:border-slate-300 hover:bg-white transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quote CTA */}
        <QuoteCtaCard
          title="Moving to or from Any UK Region?"
          description="Enter your collection and delivery postcodes for a clear fixed-rate quotation with dedicated van transit."
        />
      </main>
    </div>
  );
}
