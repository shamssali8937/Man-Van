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
  title: formatSeoTitle("Removals & Man and Van Services UK"),
  description: formatSeoDescription(
    "Explore our professional house removals, man and van hire, and furniture delivery services across the UK. Luton vans with tail lifts and transparent quotes. Book today.",
  ),
  path: "/services",
});

const howItWorksSteps = [
  {
    step: "01",
    title: "Request a Fast Quote",
    description:
      "Use our online load planner or quote form to specify your postcodes and cargo size. We provide upfront, transparent pricing with zero surprise extras.",
  },
  {
    step: "02",
    title: "Punctual Arrival & Packing Care",
    description:
      "Our clean 3.5-tonne Luton van arrives on schedule. Our polite, experienced movers protect every item with quilted blankets, mattress bags, and ratchet straps.",
  },
  {
    step: "03",
    title: "Dedicated Direct Haulage",
    description:
      "Your cargo travels directly from collection to destination along optimal UK motorway corridors with zero intermediate depot delays or shared consignments.",
  },
  {
    step: "04",
    title: "Room-of-Choice Unloading",
    description:
      "We unload and carry all items into your specified rooms, place heavy furniture where you want it, and sweep the load bed clean before departing.",
  },
];

export default function ServicesHubPage() {
  const popularAreas = areas.slice(0, 12);

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={[breadcrumbsSchema]} />

      {/* Top Banner & Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
            UK Moving & Transport Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Removals & Man and Van Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Reliable, insured removals powered by modern 3.5-tonne Luton box
            vans with hydraulic tail lifts. From full domestic homes and student
            lets to commercial offices and marketplace deliveries, we handle
            every haul with precision across the UK.
          </p>
        </div>

        {/* Services Grid */}
        <section
          aria-labelledby="all-services-heading"
          className="mb-16 md:mb-20"
        >
          <h2 id="all-services-heading" className="sr-only">
            Our Removal Services List
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 shadow-xs border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      3.5T Luton Box Van
                    </span>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                      Fully Insured
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:underline"
                    >
                      {service.name}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold shrink-0">
                          ✓
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-semibold text-slate-900 hover:text-red-600 transition-colors inline-flex items-center gap-1"
                  >
                    Explore service
                    <span aria-hidden="true">&rarr;</span>
                  </Link>

                  <Link
                    href={`/quote?service=${encodeURIComponent(service.slug)}`}
                    className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-bold text-white hover:bg-red-600 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Moving Terms Explained / Service Distinction */}
        <section
          aria-labelledby="terms-overview-heading"
          className="rounded-3xl bg-white border border-slate-200 p-8 md:p-12 mb-16 md:mb-20 shadow-xs"
        >
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
              Moving Guide
            </span>
            <h2
              id="terms-overview-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1"
            >
              Moving Terms Explained: Which Service Do You Need?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              British moving terminology can sometimes be confusing. Here is a
              practical breakdown of the differences to help you select the
              right moving service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">
                1. Man and Van (Small Removals)
              </h3>
              <p className="leading-relaxed">
                Also searched as <em>man with a van</em>,{" "}
                <em>van and driver</em>, or <em>two men and a van</em>. This is
                our most flexible, hourly option. Perfect for studio moves,
                student relocations, room moves, and individual bulky items
                where you need a working driver and vehicle without full
                household coordination.
              </p>
              <Link
                href="/services/man-and-van"
                className="mt-3 inline-block font-semibold text-red-600 hover:underline text-xs"
              >
                Learn about man and van hire &rarr;
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">
                2. House Removals (Domestic Relocation)
              </h3>
              <p className="leading-relaxed">
                Commonly called <em>home removals</em> or <em>house moves</em>.
                This service deploys a dedicated 2-man or 3-man crew to manage
                entire flats or houses. We coordinate closely around property
                completion schedules, handle all heavy lifting, and place goods
                directly into designated rooms.
              </p>
              <Link
                href="/services/house-removals"
                className="mt-3 inline-block font-semibold text-red-600 hover:underline text-xs"
              >
                Learn about house removals &rarr;
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">
                3. Specialized Furniture & Clearance
              </h3>
              <p className="leading-relaxed">
                Whether you need flat-pack IKEA assembly, single-item sofa
                collection from retail stores, or ethical property clearance,
                our specialized teams arrive with tail lifts, cordless tools,
                and Environment Agency waste carrier licensing.
              </p>
              <Link
                href="/services/furniture-removals-and-delivery"
                className="mt-3 inline-block font-semibold text-red-600 hover:underline text-xs"
              >
                View furniture courier services &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="rounded-3xl bg-white border border-slate-200 p-8 md:p-12 mb-16 md:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
              The Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              How Our Removal Service Operates
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Simple, transparent booking designed to take the stress out of
              moving day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-xl bg-slate-50 p-6 border border-slate-100"
              >
                <span className="text-3xl font-black text-slate-300 block mb-2 font-mono">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage Areas Links Strip */}
        <section className="rounded-3xl bg-slate-100 p-8 md:p-10 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Major UK Coverage Areas
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                We provide scheduled and urgent removals across all UK regions.
              </p>
            </div>
            <Link
              href="/areas"
              className="mt-3 md:mt-0 text-sm font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
            >
              View all 30 coverage areas &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {popularAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="rounded-lg bg-white p-3 text-center text-xs font-semibold text-slate-800 hover:text-red-600 hover:border-red-300 border border-slate-200 transition-all truncate"
              >
                {area.name} Removals
              </Link>
            ))}
          </div>
        </section>

        {/* Quote CTA */}
        <QuoteCtaCard
          title="Ready to Book Your Removal?"
          description="Speak to our team or fill in our easy quote form for a clear, fixed-price removals estimate with zero hidden extras."
        />
      </main>
    </div>
  );
}
