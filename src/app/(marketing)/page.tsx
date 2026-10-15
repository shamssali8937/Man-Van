import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UKRouteMap } from "@/components/marketing/uk-route-map";
import {
  Badge,
  Button,
  Container,
  Heading,
  LabelCard,
  Stamp,
  TapeDivider,
} from "@/components/ui";
import { areas } from "@/content/areas";
import { faqs } from "@/content/faqs";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: `${siteConfig.name} | UK Removals & Man and Van`,
  description: siteConfig.description,
});

/**
 * Utilitarian 3.5t Luton Box Van SVG with Overhang & Tail Lift
 */
function LutonVanIcon({
  className = "w-10 h-7",
  fillBox = "#DC0109",
  fillCab = "#03234C",
  accent = "#DA985B",
}: {
  className?: string;
  fillBox?: string;
  fillCab?: string;
  accent?: string;
}) {
  return (
    <svg
      viewBox="0 0 54 36"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Luton Overhang & Main Box */}
      <rect
        x="14"
        y="2"
        width="36"
        height="23"
        rx="1.5"
        fill={fillBox}
        stroke="#03234C"
        strokeWidth="1.5"
      />
      <rect
        x="8"
        y="2"
        width="8"
        height="8"
        rx="1"
        fill={fillBox}
        stroke="#03234C"
        strokeWidth="1.5"
      />
      {/* Front Cab */}
      <path
        d="M16 9 L9 9 L4 18 L2 21 L2 25 L16 25 Z"
        fill={fillCab}
        stroke="#03234C"
        strokeWidth="1"
      />
      {/* Windshield */}
      <path d="M14 10 L9 10 L5.5 18 L14 18 Z" fill="#F6F4EE" />
      {/* Rear Tail Lift Bar */}
      <rect
        x="49"
        y="5"
        width="2"
        height="19"
        fill={accent}
        stroke="#03234C"
        strokeWidth="0.75"
      />
      {/* Headlight */}
      <circle cx="3.5" cy="22" r="1.5" fill="#DA985B" />
      {/* Chassis rail */}
      <rect x="1" y="25" width="49" height="3" fill="#03234C" />
      {/* Front Wheel */}
      <circle cx="10" cy="27" r="4.5" fill="#03234C" />
      <circle cx="10" cy="27" r="2" fill="#DA985B" />
      {/* Rear Wheel */}
      <circle cx="41" cy="27" r="4.5" fill="#03234C" />
      <circle cx="41" cy="27" r="2" fill="#DA985B" />
    </svg>
  );
}

export default function HomePage() {
  const top10Areas = areas.slice(0, 10);
  const top6Faqs = faqs.slice(0, 6);

  return (
    <>
      {/* Top Utilitarian Road Tape Accent */}
      <TapeDivider
        size="sm"
        variant="standard"
        label="UK LOGISTICS /// DEDICATED 3.5T LUTON FLEET /// DOOR-TO-DOOR TRANSIT"
        repeatLabel
      />

      {/* =========================================================================
          SECTION 1: HERO
          Strong headline about moving across the UK (Single h1), short subheading,
          Primary CTA "Get a Free Quote", Secondary CTA "Call 07405 328 674",
          the van photo (next/image with priority, blurDataURL), Stamp badges.
          ========================================================================= */}
      <section
        id="hero"
        aria-label="Direct UK Removals Overview"
        className="relative bg-brand-paper py-12 md:py-16 lg:py-20 border-b border-brand-navy/15 bg-route-grid"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5 flex-wrap">
                <Badge variant="navy" dot>
                  THE ROUTE
                </Badge>
                <Badge variant="outline">UK MAINLAND TRANSIT</Badge>
                <Stamp variant="red" size="sm" rotation="-2">
                  DIRECT DISPATCH
                </Stamp>
              </div>

              {/* Exact Single <h1> on Page */}
              <Heading as="h1" size="display-2xl" withRoadLine>
                DIRECT MOVES &amp; CARGO TRANSIT ACROSS THE UK
              </Heading>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-brand-navy/85 max-w-2xl leading-relaxed">
                Dedicated Luton van transport, experienced two-man crews, and
                transparent quotes. Direct point-to-point transit with zero
                depots, zero co-loading, and no hidden mileage fees from
                collection to delivery.
              </p>

              {/* Primary & Secondary Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="primary" size="lg" href="/quote">
                  Get a Free Quote
                </Button>
                <Button variant="secondary" size="lg" href={siteConfig.telHref}>
                  Call {siteConfig.telephone}
                </Button>
                <Button variant="ghost" size="lg" href="#services-grid">
                  Explore Services
                </Button>
              </div>

              {/* Stamp Badges (Verified & Placeholder, no unverified claims) */}
              <div className="pt-4 flex items-center gap-4 flex-wrap border-t border-brand-navy/15">
                <Stamp variant="navy" size="sm" rotation="-2">
                  3.5T LUTON BOX
                </Stamp>
                <Stamp variant="red" size="sm" rotation="2">
                  TAIL LIFT EQUIPPED
                </Stamp>
                <Stamp variant="kraft" size="sm" rotation="-1">
                  GOODS IN TRANSIT
                </Stamp>
              </div>
            </div>

            {/* Right Hero Van Image Column with next/image */}
            <div className="lg:col-span-5 relative">
              <div className="relative border-2 border-brand-navy bg-brand-paper shadow-cargo-lg p-2 rounded-xs">
                {/* Waybill Eyebrow Header */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-brand-navy/20 font-mono text-[10px] sm:text-xs font-bold text-brand-navy uppercase tracking-wider">
                  <span>CONSIGNMENT: #UK-DIRECT</span>
                  <span className="text-brand-red">LIVE VEHICLE</span>
                </div>

                <div className="relative aspect-[960/718] w-full overflow-hidden bg-brand-navy/10 border border-brand-navy/20">
                  <Image
                    src="/images/vans/hero-van-branded.jpeg"
                    alt="White Mercedes-Benz Sprinter 3.5-tonne Luton box van with AB Removals corporate logo livery decaled on the side and hydraulic tail lift"
                    width={960}
                    height={718}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Industrial Manifest Tag beneath photo */}
                <div className="pt-2.5 flex items-center justify-between font-mono text-xs font-bold text-brand-navy/80">
                  <span>MERCEDES-BENZ SPRINTER LUTON</span>
                  <span className="text-brand-navy">500KG TAIL LIFT</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: TRUST STRIP
          Four items using only claims that can be supported:
          1. Man and Van
          2. Local and Nationwide
          3. Driver-Only or With Helpers
          4. Transparent Quotes
          (No ratings or years in business)
          ========================================================================= */}
      <section
        id="trust"
        aria-label="Direct Transit Principles"
        className="bg-brand-navy text-brand-paper py-8 border-b-2 border-brand-red"
      >
        <Container>
          <h2 className="sr-only">Our Core Moving Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Item 1: Man and Van */}
            <div className="border-l-2 border-brand-red pl-4 py-1">
              <div className="font-mono text-xs text-brand-tan font-bold tracking-wider uppercase mb-1">
                {"01 — SERVICE SCOPE"}
              </div>
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-brand-paper mb-1">
                Man and Van
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-navy-200 leading-relaxed">
                Dedicated 3.5t Luton box van transport for houses, flats,
                student moves, and single bulky items.
              </p>
            </div>

            {/* Item 2: Local and Nationwide */}
            <div className="border-l-2 border-brand-red pl-4 py-1">
              <div className="font-mono text-xs text-brand-tan font-bold tracking-wider uppercase mb-1">
                {"02 — UK NETWORK"}
              </div>
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-brand-paper mb-1">
                Local and Nationwide
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-navy-200 leading-relaxed">
                Direct point-to-point transit connecting your local
                neighbourhood with destinations across England, Scotland &amp;
                Wales.
              </p>
            </div>

            {/* Item 3: Driver-Only or With Helpers */}
            <div className="border-l-2 border-brand-red pl-4 py-1">
              <div className="font-mono text-xs text-brand-tan font-bold tracking-wider uppercase mb-1">
                {"03 — CREW CONFIGURATION"}
              </div>
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-brand-paper mb-1">
                Driver-Only or With Helpers
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-navy-200 leading-relaxed">
                Choose a solo working driver for self-loading or book an
                experienced two-man crew for heavy lifting and stairs.
              </p>
            </div>

            {/* Item 4: Transparent Quotes */}
            <div className="border-l-2 border-brand-red pl-4 py-1">
              <div className="font-mono text-xs text-brand-tan font-bold tracking-wider uppercase mb-1">
                {"04 — HONEST PRICING"}
              </div>
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-brand-paper mb-1">
                Transparent Quotes
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-navy-200 leading-relaxed">
                Clear fixed or hourly pricing with zero surprise mileage spikes,
                stairs fees, or hidden fuel surcharges.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3: ROUTE SECTION (Collect → Load → Move → Deliver)
          The scroll-driven story, 4 steps.
          Inline SVG arc + CSS scroll-driven animation with static fallback.
          ========================================================================= */}
      <section
        id="route-story"
        aria-label="The 4-Step Move Route"
        className="relative bg-brand-paper py-16 md:py-24 border-b border-brand-navy/15 overflow-hidden"
      >
        <Container>
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="red" dot>
                THE 4-STEP DISPATCH
              </Badge>
              <span className="font-mono text-xs text-brand-navy/70 uppercase">
                SCROLL-DRIVEN TRANSIT JOURNEY
              </span>
            </div>
            <Heading as="h2" size="display-lg">
              The Route: From Doorstep to Destination
            </Heading>
            <p className="font-sans text-base sm:text-lg text-brand-navy/80 mt-2 leading-relaxed">
              Track the journey of your cargo. Each move follows our rigorous
              four-phase haulage sequence to ensure total protection and
              punctuality.
            </p>
          </div>

          {/* Desktop Horizontal Route Arc & Story Steps (md+ screens) */}
          <div className="hidden md:block relative">
            {/* Inline SVG Road Arc Graphic */}
            <div className="relative w-full h-24 mb-6">
              <svg
                viewBox="0 0 1000 120"
                className="w-full h-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* Background road ribbon */}
                <path
                  d="M 40 60 C 260 10, 440 110, 640 40 C 780 -10, 880 90, 960 60"
                  fill="none"
                  stroke="#03234C"
                  strokeWidth="8"
                  strokeOpacity="0.12"
                  strokeLinecap="round"
                />
                {/* Active dashed road center line */}
                <path
                  d="M 40 60 C 260 10, 440 110, 640 40 C 780 -10, 880 90, 960 60"
                  fill="none"
                  stroke="#DC0109"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  className="route-story-dash-desktop"
                />
                {/* Waypoint Stations */}
                <circle cx="50" cy="58" r="6" fill="#03234C" />
                <circle cx="340" cy="62" r="6" fill="#03234C" />
                <circle cx="650" cy="40" r="6" fill="#03234C" />
                <circle cx="950" cy="60" r="6" fill="#03234C" />
              </svg>
            </div>

            {/* 4 Story Steps Grid */}
            <div className="grid grid-cols-4 gap-6">
              {/* Step 1: Collect */}
              <div className="border border-brand-navy/20 bg-white/70 p-5 shadow-cargo-sm rounded-xs relative">
                <div className="flex items-center justify-between mb-3 border-b border-brand-navy/15 pb-2">
                  <span className="font-mono text-xs font-bold text-brand-red">
                    STOP 01
                  </span>
                  <Stamp variant="navy" size="sm">
                    COLLECT
                  </Stamp>
                </div>
                <h3 className="font-display font-black text-xl uppercase text-brand-navy mb-2">
                  1. Punctual Arrival
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-navy/80 leading-relaxed">
                  Direct dispatch to your collection address. We position the
                  Luton van, deploy parking ramps, and carry out an initial
                  cargo safety walkthrough.
                </p>
                <div className="mt-3 font-mono text-[11px] text-brand-navy/70 border-t border-brand-navy/10 pt-2">
                  ✓ Parking alignment &amp; access check
                </div>
              </div>

              {/* Step 2: Load */}
              <div className="border border-brand-navy/20 bg-white/70 p-5 shadow-cargo-sm rounded-xs relative">
                <div className="flex items-center justify-between mb-3 border-b border-brand-navy/15 pb-2">
                  <span className="font-mono text-xs font-bold text-brand-red">
                    STOP 02
                  </span>
                  <Stamp variant="navy" size="sm">
                    LOAD
                  </Stamp>
                </div>
                <h3 className="font-display font-black text-xl uppercase text-brand-navy mb-2">
                  2. Secure Stowing
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-navy/80 leading-relaxed">
                  Heavy items loaded via 500kg hydraulic tail lift. Furniture
                  wrapped in quilted removal blankets and locked into internal
                  rails using ratchet straps.
                </p>
                <div className="mt-3 font-mono text-[11px] text-brand-navy/70 border-t border-brand-navy/10 pt-2">
                  ✓ Transit padding &amp; rail immobilization
                </div>
              </div>

              {/* Step 3: Move */}
              <div className="border border-brand-navy/20 bg-white/70 p-5 shadow-cargo-sm rounded-xs relative">
                <div className="flex items-center justify-between mb-3 border-b border-brand-navy/15 pb-2">
                  <span className="font-mono text-xs font-bold text-brand-red">
                    STOP 03
                  </span>
                  <Stamp variant="navy" size="sm">
                    MOVE
                  </Stamp>
                </div>
                <h3 className="font-display font-black text-xl uppercase text-brand-navy mb-2">
                  3. Dedicated Transit
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-navy/80 leading-relaxed">
                  Direct UK transit via primary motorway corridors (M1, M6, M4).
                  Your goods travel alone without co-loading, depot transfers,
                  or delays.
                </p>
                <div className="mt-3 font-mono text-[11px] text-brand-navy/70 border-t border-brand-navy/10 pt-2">
                  ✓ Direct non-stop UK haulage
                </div>
              </div>

              {/* Step 4: Deliver */}
              <div className="border border-brand-navy/20 bg-white/70 p-5 shadow-cargo-sm rounded-xs relative">
                <div className="flex items-center justify-between mb-3 border-b border-brand-navy/15 pb-2">
                  <span className="font-mono text-xs font-bold text-brand-red">
                    STOP 04
                  </span>
                  <Stamp variant="red" size="sm">
                    DELIVER
                  </Stamp>
                </div>
                <h3 className="font-display font-black text-xl uppercase text-brand-navy mb-2">
                  4. Placement &amp; Sign-off
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-navy/80 leading-relaxed">
                  Careful offloading via tail lift and direct carry into your
                  designated rooms of choice. Final item inspection and delivery
                  manifest sign-off.
                </p>
                <div className="mt-3 font-mono text-[11px] text-brand-navy/70 border-t border-brand-navy/10 pt-2">
                  ✓ Room-of-choice positioning
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Route Story Arc (under md screens) */}
          <div className="md:hidden relative space-y-6">
            {[
              {
                step: "01",
                code: "COLLECT",
                title: "1. Punctual Arrival",
                desc: "Direct dispatch to your origin. We position the van safely and inspect loading access.",
                check: "Parking alignment & access check",
              },
              {
                step: "02",
                code: "LOAD",
                title: "2. Secure Stowing",
                desc: "Hydraulic tail lift loading with quilted transit blankets and commercial ratchet tie-downs.",
                check: "Transit padding & tie-down straps",
              },
              {
                step: "03",
                code: "MOVE",
                title: "3. Dedicated Transit",
                desc: "Direct non-stop motorway transit across the UK with dedicated cargo space and zero co-loading.",
                check: "Non-stop UK point-to-point transit",
              },
              {
                step: "04",
                code: "DELIVER",
                title: "4. Room Placement",
                desc: "Unloading via tail lift and direct placement into your designated rooms of choice at your destination.",
                check: "Room-of-choice placement completed",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border-l-4 border-brand-red bg-white/80 p-5 shadow-cargo-sm border-y border-r border-brand-navy/15"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-brand-red">
                    STOP {item.step}
                  </span>
                  <Stamp variant="navy" size="sm">
                    {item.code}
                  </Stamp>
                </div>
                <h3 className="font-display font-black text-lg uppercase text-brand-navy mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-brand-navy/85 leading-relaxed mb-2">
                  {item.desc}
                </p>
                <div className="font-mono text-[11px] text-brand-navy/70 border-t border-brand-navy/10 pt-2">
                  ✓ {item.check}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: SERVICES GRID
          The 6 services as LabelCards linking to /services/[slug]
          ========================================================================= */}
      <section
        id="services-grid"
        aria-label="Removal and Transport Services"
        className="bg-brand-paper py-16 md:py-24 border-b border-brand-navy/15"
      >
        <Container>
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="navy" dot>
                CARGO MANIFEST
              </Badge>
              <span className="font-mono text-xs text-brand-navy/70 uppercase">
                6 SPECIALIZED SERVICES
              </span>
            </div>
            <Heading as="h2" size="display-lg">
              Our Removals &amp; Transport Services
            </Heading>
            <p className="font-sans text-base sm:text-lg text-brand-navy/80 mt-2 leading-relaxed">
              Every transport category is handled with dedicated 3.5t Luton
              vans, tail lifts, and trained moving teams across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const consignmentNo = `SRV-0${index + 1}-${service.slug.substring(0, 4).toUpperCase()}`;
              return (
                <div key={service.id} className="h-full flex flex-col">
                  <LabelCard
                    variant="paper"
                    consignmentNo={consignmentNo}
                    destinationCode="UK-WIDE"
                    routeCode="MAINLAND"
                    priority="DIRECT"
                    hasBarcode
                    hasEyelet
                    className="h-full flex flex-col"
                  >
                    <div className="flex-1 flex flex-col">
                      {/* Uniform Title Height so multi-line and single-line titles align */}
                      <div className="min-h-[3.75rem] flex items-start mb-2">
                        <h3 className="font-display italic font-black text-xl lg:text-2xl uppercase text-brand-navy leading-tight">
                          {service.name}
                        </h3>
                      </div>

                      {/* Uniform Description Height */}
                      <p className="font-sans text-xs sm:text-sm text-brand-navy/80 leading-relaxed mb-4 min-h-[4rem] line-clamp-3">
                        {service.shortDescription}
                      </p>

                      {/* Key Benefits Bullets */}
                      <div className="flex-1 min-h-[5.5rem] mb-4">
                        <ul className="space-y-1.5 border-t border-brand-navy/15 pt-3 font-sans text-xs text-brand-navy/85">
                          {service.benefits.slice(0, 3).map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-start gap-1.5"
                            >
                              <span className="text-brand-red font-bold font-mono">
                                ▶
                              </span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action buttons pinned to exact bottom baseline with mt-auto */}
                      <div className="mt-auto pt-4 border-t border-brand-navy/20 flex items-center justify-between gap-3">
                        <Button
                          variant="secondary"
                          size="sm"
                          href={`/services/${service.slug}`}
                        >
                          Service Details
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          href={`/quote?service=${service.slug}`}
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </LabelCard>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5: LOAD PLANNER TEASER
          Luton box van capacity info with CTA to /quote
          ========================================================================= */}
      <section
        id="load-planner"
        aria-label="Vehicle Capacity and Load Specifications"
        className="bg-brand-navy text-brand-paper py-16 md:py-20 border-b-2 border-brand-tan"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="tan" dot>
                  VEHICLE CAPACITY
                </Badge>
                <span className="font-mono text-xs text-brand-navy-200 uppercase">
                  3.5T LUTON SPECIFICATIONS
                </span>
              </div>

              <Heading as="h2" size="display-lg" className="text-brand-paper">
                Plan Your Cargo: The Luton Box Advantage
              </Heading>

              <p className="font-sans text-base sm:text-lg text-brand-navy-100 leading-relaxed">
                Wondering whether your property fits in a single load? Our
                long-wheelbase Mercedes-Benz Sprinter Luton box vans are
                specifically configured for maximum capacity, safe tie-down, and
                seamless city access.
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
                <div className="border-l-2 border-brand-tan pl-3">
                  <div className="font-mono text-[10px] text-brand-tan font-bold uppercase">
                    LOAD VOLUME
                  </div>
                  <div className="font-display font-black text-2xl text-brand-paper">
                    650 CU. FT
                  </div>
                  <div className="font-sans text-[11px] text-brand-navy-200">
                    ~18.5 cu. meters
                  </div>
                </div>

                <div className="border-l-2 border-brand-tan pl-3">
                  <div className="font-mono text-[10px] text-brand-tan font-bold uppercase">
                    PAYLOAD
                  </div>
                  <div className="font-display font-black text-2xl text-brand-paper">
                    1,000 KG
                  </div>
                  <div className="font-sans text-[11px] text-brand-navy-200">
                    Safe legal weight
                  </div>
                </div>

                <div className="border-l-2 border-brand-tan pl-3">
                  <div className="font-mono text-[10px] text-brand-tan font-bold uppercase">
                    TAIL LIFT
                  </div>
                  <div className="font-display font-black text-2xl text-brand-paper">
                    500 KG
                  </div>
                  <div className="font-sans text-[11px] text-brand-navy-200">
                    Hydraulic platform
                  </div>
                </div>

                <div className="border-l-2 border-brand-tan pl-3">
                  <div className="font-mono text-[10px] text-brand-tan font-bold uppercase">
                    PROTECTION
                  </div>
                  <div className="font-display font-black text-2xl text-brand-paper">
                    30+ PADS
                  </div>
                  <div className="font-sans text-[11px] text-brand-navy-200">
                    Quilted blankets &amp; rails
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg" href="/quote">
                  Plan Your Move &amp; Get a Quote
                </Button>
                <Button variant="secondary" size="lg" href="/the-van">
                  Detailed Van Specifications
                </Button>
              </div>
            </div>

            {/* Right Schematic Visual Card */}
            <div className="lg:col-span-5">
              <div className="border-2 border-brand-tan/40 bg-brand-navy-950 p-6 shadow-cargo rounded-xs relative">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-brand-navy-800 font-mono text-xs text-brand-tan">
                  <span>VAN SCHEMATIC: 3.5T LUTON</span>
                  <span className="text-brand-paper">BOX CONFIGURATION</span>
                </div>

                {/* Inline SVG Van Blueprint Diagram */}
                <div className="w-full flex justify-center py-4">
                  <LutonVanIcon
                    className="w-48 h-32 sm:w-60 sm:h-40"
                    fillBox="#073570"
                    fillCab="#03234C"
                    accent="#DA985B"
                  />
                </div>

                <div className="space-y-2 border-t border-brand-navy-800 pt-4 font-mono text-xs text-brand-navy-200">
                  <div className="flex justify-between">
                    <span>INTERNAL LENGTH:</span>
                    <span className="text-brand-paper font-bold">
                      4.1 M (13.5 FT)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>INTERNAL HEIGHT:</span>
                    <span className="text-brand-paper font-bold">
                      2.2 M (7.2 FT)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>OVERHANG POD:</span>
                    <span className="text-brand-paper font-bold">
                      LUTON CABIN STORAGE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6: COVERAGE
          UK map-style graphic (simple SVG) and links to the top 10 areas
          ========================================================================= */}
      <section
        id="coverage-map"
        aria-label="UK Nationwide Coverage Map"
        className="bg-brand-paper py-16 md:py-24 border-b border-brand-navy/15"
      >
        <Container>
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="navy" dot>
                TRANSIT CORRIDORS
              </Badge>
              <span className="font-mono text-xs text-brand-navy/70 uppercase">
                MAINLAND ROUTE NETWORK
              </span>
            </div>
            <Heading as="h2" size="display-lg">
              Nationwide UK Coverage &amp; Key Transit Hubs
            </Heading>
            <p className="font-sans text-base sm:text-lg text-brand-navy/80 mt-2 leading-relaxed">
              We connect major residential centers across England, Scotland and
              Wales with dedicated direct transport routes. Direct door-to-door
              without regional hub delays.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Real Geographically Accurate UK Route Map */}
            <div className="lg:col-span-5 bg-white/80 border-2 border-brand-navy p-5 shadow-cargo rounded-xs">
              <div className="flex items-center justify-between font-mono text-xs font-bold text-brand-navy pb-3 mb-2 border-b border-brand-navy/15">
                <span>REAL UK HAULAGE CORRIDOR MAP</span>
                <span className="text-brand-red font-bold">
                  100% DIRECT ROUTING
                </span>
              </div>

              <UKRouteMap />

              <div className="pt-2 border-t border-brand-navy/15 flex items-center justify-between font-mono text-[11px] text-brand-navy/70">
                <span>ARTERIES: M1 / M6 / M4 / M62 / M8 / M5</span>
                <span className="text-brand-red font-bold">LIVE DISPATCH</span>
              </div>
            </div>

            {/* Right: Top 10 Areas Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {top10Areas.map((area) => (
                  <Link
                    key={area.id}
                    href={`/areas/${area.slug}`}
                    className="group border border-brand-navy/20 bg-white/70 hover:bg-white hover:border-brand-navy p-4 shadow-cargo-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-black text-lg uppercase text-brand-navy group-hover:text-brand-red transition-colors">
                          {area.name}
                        </span>
                        <span className="font-mono text-xs font-bold text-brand-navy/70 bg-brand-navy/5 px-2 py-0.5 rounded-xs">
                          {area.postcodePrefixes.join(", ")}
                        </span>
                      </div>
                      <div className="font-mono text-xs text-brand-tan-800 font-bold uppercase mb-2">
                        {area.region}
                      </div>
                      <p className="font-sans text-xs text-brand-navy/80 line-clamp-2 leading-relaxed">
                        {area.intro}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-brand-navy/10 flex items-center justify-between font-mono text-[11px] font-bold text-brand-navy/70 group-hover:text-brand-navy">
                      <span>View Area Transit</span>
                      <span className="text-brand-red transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-between p-4 bg-brand-navy-50 border border-brand-navy/20 rounded-xs">
                <span className="font-sans text-sm text-brand-navy/85">
                  Operating across 30 major UK destinations and surrounding
                  postcodes.
                </span>
                <Button variant="secondary" size="sm" href="/areas">
                  View All 30 Areas
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 7: FAQ
          6 questions with accessible accordion (native <details> or ARIA, no heavy library)
          ========================================================================= */}
      <section
        id="faq-section"
        aria-label="Frequently Asked Questions"
        className="bg-brand-paper py-16 md:py-24 border-b border-brand-navy/15"
      >
        <Container>
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="navy" dot>
                DIRECT ANSWERS
              </Badge>
              <span className="font-mono text-xs text-brand-navy/70 uppercase">
                FREQUENT ENQUIRIES
              </span>
            </div>
            <Heading as="h2" size="display-lg">
              Frequently Asked Removals Questions
            </Heading>
            <p className="font-sans text-base sm:text-lg text-brand-navy/80 mt-2 leading-relaxed">
              Straightforward answers about our booking process, van equipment,
              crew allocations, and transit terms.
            </p>
          </div>

          <div className="max-w-3xl space-y-4">
            {top6Faqs.map((faq, index) => (
              <details
                key={faq.id}
                className="group border border-brand-navy/20 bg-white/70 hover:bg-white p-5 shadow-cargo-sm rounded-xs transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer font-display font-black text-lg sm:text-xl uppercase text-brand-navy select-none">
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-brand-red font-bold">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="font-mono text-sm font-bold text-brand-navy/60 group-open:rotate-45 group-open:text-brand-red transition-transform ml-4 shrink-0">
                    +
                  </span>
                </summary>
                <div className="mt-3 pt-3 border-t border-brand-navy/15 font-sans text-sm sm:text-base text-brand-navy/85 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="max-w-3xl mt-8 pt-4 border-t border-brand-navy/15 flex items-center justify-between">
            <span className="font-sans text-sm text-brand-navy/75">
              Have a specific logistical question not covered here?
            </span>
            <Button variant="ghost" size="sm" href="/faq">
              Browse All FAQs
            </Button>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8: FINAL CTA
          TapeDivider and quote button
          ========================================================================= */}
      <section id="final-quote" aria-label="Book Your Move">
        <TapeDivider
          size="sm"
          variant="standard"
          label="DIRECT UK HAULAGE /// REAL-TIME ROUTE DISPATCH /// REQUEST YOUR QUOTE"
          repeatLabel
        />

        <div className="bg-brand-paper py-16 md:py-24 bg-route-grid">
          <Container>
            <div className="max-w-4xl mx-auto border-2 border-brand-navy bg-white p-8 md:p-12 shadow-cargo-lg rounded-xs text-center space-y-6 relative">
              <div className="inline-flex items-center gap-2">
                <Stamp variant="red" size="md" rotation="-2">
                  DISPATCH READY
                </Stamp>
                <Badge variant="navy">7 DAYS A WEEK</Badge>
              </div>

              <Heading as="h2" size="display-xl">
                Ready to Lock In Your Move Route?
              </Heading>

              <p className="font-sans text-base sm:text-lg text-brand-navy/85 max-w-2xl mx-auto leading-relaxed">
                Receive an upfront, transparent quote with zero obligation.
                Select your collection postcode, specify your cargo volume, and
                choose between driver-only or assisted two-man crew.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button variant="primary" size="lg" href="/quote">
                  Get a Free Quote
                </Button>
                <Button variant="secondary" size="lg" href={siteConfig.telHref}>
                  Call {siteConfig.telephone}
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href={siteConfig.whatsappHref}
                >
                  WhatsApp Us
                </Button>
              </div>

              <div className="pt-6 border-t border-brand-navy/15 flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-bold text-brand-navy/70">
                <span>✓ NO DEPOSITS REQUIRED TO ENQUIRE</span>
                <span>✓ FULL GOODS IN TRANSIT COVER</span>
                <span>✓ DIRECT VEHICLE DISPATCH</span>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
