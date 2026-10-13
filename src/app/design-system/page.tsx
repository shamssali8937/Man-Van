import type { Metadata } from "next";
import Image from "next/image";
import {
  Badge,
  BarcodeStrip,
  Button,
  Checkbox,
  Container,
  Heading,
  Input,
  LabelCard,
  Section,
  Select,
  Stamp,
  TapeDivider,
  Textarea,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Brand Design System | AB Removals – The Route",
  description: "Internal design system documentation and component inventory.",
  robots: {
    index: false,
    follow: false,
  },
};

const COLOR_SWATCHES = [
  {
    name: "Ink Navy",
    hex: "#03234C",
    role: "Primary Brand / Wordmark / Text",
    bgClass: "bg-[#03234C]",
    textClass: "text-white",
    contrast: "WCAG AAA (14.2:1 against Paper)",
    tints: ["#021630", "#03234C", "#073570", "#E6ECF5"],
  },
  {
    name: "Signal Red",
    hex: "#DC0109",
    role: "Brand Monogram / CTAs / Urgent Tape",
    bgClass: "bg-[#DC0109]",
    textClass: "text-white",
    contrast: "WCAG AA (4.9:1 against White)",
    tints: ["#B50107", "#DC0109", "#E92C33", "#FDE6E7"],
  },
  {
    name: "Kraft Tan",
    hex: "#DA985B",
    role: "Parcel Cardboard / Cargo Accents",
    bgClass: "bg-[#DA985B]",
    textClass: "text-brand-navy-950",
    contrast: "WCAG AA Large (3.4:1 with Navy 950: 9.8:1)",
    tints: ["#8E5824", "#B27235", "#DA985B", "#F8ECE0"],
  },
  {
    name: "Paper Off-White",
    hex: "#F6F4EE",
    role: "Background / Shipping Manifest Canvas",
    bgClass: "bg-[#F6F4EE]",
    textClass: "text-brand-navy",
    contrast: "Base Canvas / Warm Unbleached Paper",
    tints: ["#FFFFFF", "#FBFBFA", "#F6F4EE", "#E5E1D4"],
  },
];

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-brand-paper text-brand-navy">
      {/* Top Hazard Tape Banner */}
      <TapeDivider
        size="lg"
        label="INTERNAL BRAND SPECIFICATION /// THE ROUTE /// DO NOT DEPLOY TO PUBLIC SITEMAP"
        repeatLabel
      />

      {/* Hero Header */}
      <header className="border-b-2 border-brand-navy bg-brand-paper-light py-12 sm:py-16">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="navy" dot>
                  DESIGN SYSTEM V1.0
                </Badge>
                <Badge variant="outline">STRICT WCAG AA</Badge>
                <Stamp variant="red" size="sm" rotation="-3">
                  APPROVED
                </Stamp>
              </div>

              <Heading as="h1" size="display-2xl" withRoadLine>
                THE ROUTE
              </Heading>

              <p className="font-sans text-brand-navy/80 text-base sm:text-lg max-w-xl leading-relaxed">
                A non-traditional removals design system rooted in UK highway
                transit, tracked cargo waybills, perforated parcel tags, and the
                logo&apos;s dynamic road swoosh arc.
              </p>
            </div>

            {/* Logo Display Container */}
            <div className="bg-brand-paper p-6 border-2 border-brand-navy shadow-cargo max-w-sm rounded-xs flex flex-col items-center">
              <span className="font-mono text-[0.625rem] font-bold tracking-widest text-brand-navy/60 uppercase mb-3 self-start">
                BRAND ASSET: public/brand/logo.svg (Transparent)
              </span>
              <div className="relative w-64 h-56">
                <Image
                  src="/brand/logo.svg"
                  alt="AB Removals Master Identity"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-4 pt-3 border-t border-brand-navy/20 w-full flex justify-between items-center text-xs font-mono">
                <span className="text-brand-navy font-bold">#03234C</span>
                <span className="text-brand-red font-bold">#DC0109</span>
                <span className="text-brand-tan-800 font-bold">#DA985B</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* SECTION 1: Exact Extracted Color Palette */}
      <Section variant="paper" spacing="md">
        <Container>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-brand-red">
                TOKEN SECTION 01
              </span>
            </div>
            <Heading as="h2" size="heading-xl">
              EXACT EXTRACTED PALETTE
            </Heading>
            <p className="font-sans text-sm text-brand-navy/70 mt-1">
              Sampled directly from master logo artwork. Hex values replace all
              generic approximations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLOR_SWATCHES.map((swatch) => (
              <div
                key={swatch.name}
                className="bg-white border-2 border-brand-navy shadow-cargo rounded-xs overflow-hidden flex flex-col"
              >
                <div
                  className={`h-28 ${swatch.bgClass} ${swatch.textClass} p-4 flex flex-col justify-between`}
                >
                  <span className="font-display italic font-black text-lg tracking-wider">
                    {swatch.name}
                  </span>
                  <span className="font-mono text-sm font-bold tracking-widest">
                    {swatch.hex}
                  </span>
                </div>
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between bg-brand-paper-light">
                  <div>
                    <p className="font-sans text-xs font-semibold text-brand-navy">
                      {swatch.role}
                    </p>
                    <p className="font-mono text-[0.6875rem] text-emerald-800 font-bold mt-1">
                      {swatch.contrast}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-brand-navy/10 flex gap-1">
                    {swatch.tints.map((tint) => (
                      <div
                        key={tint}
                        className="h-4 flex-1 rounded-none border border-brand-navy/20"
                        style={{ backgroundColor: tint }}
                        title={tint}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <TapeDivider size="sm" variant="standard" />

      {/* SECTION 2: Typography Scale & Font Pairing */}
      <Section variant="white" spacing="md">
        <Container>
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-brand-red">
              TOKEN SECTION 02
            </span>
            <Heading as="h2" size="heading-xl">
              TYPOGRAPHY &amp; FLUID SCALE
            </Heading>
            <p className="font-sans text-sm text-brand-navy/70 mt-1">
              Barlow Condensed (Heavy Italic display echoing the logo wordmark)
              paired with DM Sans (Utilitarian grotesque body).
            </p>
          </div>

          <div className="space-y-6 bg-brand-paper border-2 border-brand-navy p-6 rounded-xs shadow-cargo">
            <div className="border-b border-brand-navy/20 pb-4">
              <span className="font-mono text-xs font-bold text-brand-red block mb-1">
                --text-display-2xl / clamp(2.5rem, 5vw + 1rem, 4.75rem)
              </span>
              <p className="font-display italic font-black text-[var(--text-display-2xl)] leading-none uppercase text-brand-navy">
                UK HAULAGE &amp; REMOVALS
              </p>
            </div>

            <div className="border-b border-brand-navy/20 pb-4">
              <span className="font-mono text-xs font-bold text-brand-red block mb-1">
                --text-display-xl / clamp(2.125rem, 3.75vw + 0.875rem, 3.75rem)
              </span>
              <p className="font-display italic font-black text-[var(--text-display-xl)] leading-none uppercase text-brand-navy">
                DEDICATED LUTON TRANSIT ROUTE
              </p>
            </div>

            <div className="border-b border-brand-navy/20 pb-4">
              <span className="font-mono text-xs font-bold text-brand-red block mb-1">
                --text-display-lg / clamp(1.75rem, 2.75vw + 0.75rem, 2.75rem)
              </span>
              <p className="font-display italic font-black text-[var(--text-display-lg)] leading-tight uppercase text-brand-navy">
                CONSIGNMENT WAYBILL: BIRMINGHAM TO LONDON
              </p>
            </div>

            <div className="border-b border-brand-navy/20 pb-4">
              <span className="font-mono text-xs font-bold text-brand-navy/60 block mb-1">
                --text-body-lg / DM Sans 18px (Grotesque Body)
              </span>
              <p className="font-sans text-base sm:text-lg text-brand-navy leading-relaxed max-w-3xl">
                Every domestic relocation, commercial cargo transfer, and
                furniture haulage route is executed with certified
                goods-in-transit protection, dual-strapped Luton vans, and live
                route coordination.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs font-bold text-brand-navy/60 block mb-1">
                Waybill Metadata / Monospace
              </span>
              <p className="font-mono text-xs font-bold tracking-widest text-brand-navy uppercase">
                {
                  "DISPATCH ID: 07405-328-674 /// CLASS: 3.5T LUTON BOX /// ULEZ: COMPLIANT"
                }
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <TapeDivider size="sm" variant="warning" />

      {/* SECTION 3: Button Matrix */}
      <Section variant="paper" spacing="md">
        <Container>
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-brand-red">
              UI PRIMITIVES 03
            </span>
            <Heading as="h2" size="heading-xl">
              BUTTON VARIANTS &amp; SIZES
            </Heading>
            <p className="font-sans text-sm text-brand-navy/70 mt-1">
              Industrial chamfered press states, offset shadows, and
              high-visibility call-to-actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Primary Red */}
            <div className="bg-white p-5 border-2 border-brand-navy rounded-xs shadow-cargo flex flex-col gap-4">
              <span className="font-mono text-xs font-bold text-brand-red">
                PRIMARY RED
              </span>
              <Button variant="primary" size="lg">
                GET INSTANT QUOTE
              </Button>
              <Button variant="primary" size="md">
                BOOK TRANSIT
              </Button>
              <Button variant="primary" size="sm">
                CONFIRM
              </Button>
            </div>

            {/* Secondary Navy */}
            <div className="bg-white p-5 border-2 border-brand-navy rounded-xs shadow-cargo flex flex-col gap-4">
              <span className="font-mono text-xs font-bold text-brand-navy">
                SECONDARY NAVY
              </span>
              <Button variant="secondary" size="lg">
                VIEW VEHICLE SPECS
              </Button>
              <Button variant="secondary" size="md">
                CALL 07405 328 674
              </Button>
              <Button variant="secondary" size="sm">
                DETAILS
              </Button>
            </div>

            {/* Kraft Tan */}
            <div className="bg-white p-5 border-2 border-brand-navy rounded-xs shadow-cargo flex flex-col gap-4">
              <span className="font-mono text-xs font-bold text-brand-tan-800">
                KRAFT TAN ACCENT
              </span>
              <Button variant="kraft" size="lg">
                DOWNLOAD INVENTORY
              </Button>
              <Button variant="kraft" size="md">
                PARCEL CHECKLIST
              </Button>
              <Button variant="kraft" size="sm">
                CHECKOUT
              </Button>
            </div>

            {/* Ghost & States */}
            <div className="bg-white p-5 border-2 border-brand-navy rounded-xs shadow-cargo flex flex-col gap-4">
              <span className="font-mono text-xs font-bold text-brand-navy/60">
                GHOST &amp; DISABLED
              </span>
              <Button variant="ghost" size="lg">
                READ REVIEWS
              </Button>
              <Button variant="ghost" size="md">
                EXPLORE AREAS
              </Button>
              <Button variant="primary" size="sm" disabled>
                UNAVAILABLE
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <TapeDivider size="sm" variant="standard" />

      {/* SECTION 4: Stamps & Tape Dividers */}
      <Section variant="white" spacing="md">
        <Container>
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-brand-red">
              UI PRIMITIVES 04
            </span>
            <Heading as="h2" size="heading-xl">
              STAMPS &amp; HAZARD DIVIDERS
            </Heading>
            <p className="font-sans text-sm text-brand-navy/70 mt-1">
              Rotated postal and cargo verification stamps mirroring genuine
              depot transit markings.
            </p>
          </div>

          {/* Stamps Showcase */}
          <div className="bg-brand-paper-light border-2 border-brand-navy p-6 rounded-xs shadow-cargo mb-8">
            <span className="font-mono text-xs font-bold text-brand-navy block mb-4">
              CARGO STAMP BADGES
            </span>
            <div className="flex flex-wrap items-center gap-6 py-4">
              <Stamp
                variant="red"
                size="lg"
                rotation="-6"
                subtext="HANDLE WITH CARE"
              >
                FRAGILE
              </Stamp>

              <Stamp
                variant="navy"
                size="lg"
                rotation="4"
                subtext="STACK VERTICAL"
              >
                THIS WAY UP
              </Stamp>

              <Stamp
                variant="red"
                size="md"
                rotation="-3"
                subtext="ALL-INCLUSIVE"
              >
                NO HIDDEN FEES
              </Stamp>

              <Stamp
                variant="kraft"
                size="md"
                rotation="2"
                subtext="POLICY VERIFIED"
              >
                GOODS INSURED
              </Stamp>

              <Stamp
                variant="navy"
                size="sm"
                rotation="-1"
                subtext="LIVE ROUTE"
              >
                UK TRACKED
              </Stamp>

              <Stamp variant="muted" size="sm" rotation="0">
                DEPOT CLEARED
              </Stamp>
            </div>
          </div>

          {/* Tape Dividers Showcase */}
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold text-brand-navy block">
              SECTION HAZARD TAPES
            </span>
            <TapeDivider size="sm" variant="standard" />
            <TapeDivider
              size="md"
              variant="standard"
              label="ROUTE CORRIDOR M1 / M6 / M25 /// DIRECT NON-STOP"
            />
            <TapeDivider
              size="lg"
              variant="warning"
              label="HEAVY PIANO &amp; OFFICE EQUIPMENT CARGO"
            />
          </div>
        </Container>
      </Section>

      <TapeDivider size="sm" variant="standard" />

      {/* SECTION 5: Shipping LabelCards */}
      <Section variant="paper" spacing="md">
        <Container>
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-brand-red">
              UI PRIMITIVES 05
            </span>
            <Heading as="h2" size="heading-xl">
              LABELCARD (PARCEL &amp; WAYBILL)
            </Heading>
            <p className="font-sans text-sm text-brand-navy/70 mt-1">
              Parcel cards with perforated ticket tear-offs, tie eyelets,
              barcode strips, and consignment metadata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Paper LabelCard */}
            <LabelCard
              variant="paper"
              consignmentNo="LDN-MCR-4029"
              destinationCode="MANCHESTER"
              routeCode="M6-NORTH"
              priority="PRIORITY"
              hasBarcode
              cornerStamp={
                <Stamp variant="red" size="sm" rotation="6">
                  PRIORITY LOAD
                </Stamp>
              }
            >
              <h3 className="font-display italic font-black text-xl uppercase mb-2">
                House &amp; Flat Removals
              </h3>
              <p className="font-sans text-sm text-brand-navy/80 mb-4 leading-relaxed">
                Full 3.5t Luton box van with tail lift, heavy-duty quilted
                blankets, and 2-man loading crew.
              </p>
              <div className="flex items-center justify-between text-xs font-mono font-bold pt-3 border-t border-brand-navy/20">
                <span>TRANSIT: 3.5 HOURS</span>
                <span className="text-brand-red">FROM £55/HR</span>
              </div>
            </LabelCard>

            {/* Kraft Carton Card */}
            <LabelCard
              variant="kraft"
              consignmentNo="BHM-CDF-8192"
              destinationCode="CARDIFF"
              routeCode="M5-WEST"
              priority="FRAGILE"
              hasBarcode
              cornerStamp={
                <Stamp variant="navy" size="sm" rotation="-4">
                  THIS WAY UP
                </Stamp>
              }
            >
              <h3 className="font-display italic font-black text-xl uppercase mb-2">
                Fragile Antique &amp; Piano
              </h3>
              <p className="font-sans text-sm text-brand-navy-950/80 mb-4 leading-relaxed">
                Piano trolleys, specialist ratchet strapping, corner protectors,
                and £50k goods in transit cover.
              </p>
              <div className="flex items-center justify-between text-xs font-mono font-bold pt-3 border-t border-brand-tan-700/30">
                <span>CREW: 3 SPECIALISTS</span>
                <span className="text-brand-navy">FIXED QUOTE</span>
              </div>
            </LabelCard>

            {/* Navy Priority Card */}
            <LabelCard
              variant="navy"
              consignmentNo="UK-EXPRESS-9912"
              destinationCode="EDINBURGH"
              routeCode="A1(M)-DIRECT"
              priority="DIRECT"
              hasBarcode
              cornerStamp={
                <Stamp variant="red" size="sm" rotation="5">
                  NO STOPS
                </Stamp>
              }
            >
              <h3 className="font-display italic font-black text-xl uppercase text-white mb-2">
                Same-Day Commercial Cargo
              </h3>
              <p className="font-sans text-sm text-brand-paper-light/80 mb-4 leading-relaxed">
                Dedicated non-stop vehicle allocation directly from loading bay
                to destination warehouse.
              </p>
              <div className="flex items-center justify-between text-xs font-mono font-bold pt-3 border-t border-white/20">
                <span>SECURITY: DUAL LOCK</span>
                <span className="text-brand-red">EXPEDITED</span>
              </div>
            </LabelCard>
          </div>
        </Container>
      </Section>

      <TapeDivider size="sm" variant="standard" />

      {/* SECTION 6: Form Primitives */}
      <Section variant="white" spacing="md">
        <Container>
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-brand-red">
              UI PRIMITIVES 06
            </span>
            <Heading as="h2" size="heading-xl">
              FORM CONTROLS &amp; WAYBILL INPUTS
            </Heading>
            <p className="font-sans text-sm text-brand-navy/70 mt-1">
              Field inputs styled like customs manifests with accessible ARIA
              relationships and validation states.
            </p>
          </div>

          <div className="bg-brand-paper border-2 border-brand-navy p-6 sm:p-8 rounded-xs shadow-cargo max-w-3xl">
            <div className="border-b-2 border-brand-navy/30 pb-4 mb-6 flex justify-between items-center">
              <div>
                <span className="font-mono text-xs font-bold tracking-wider text-brand-red uppercase">
                  SAMPLE FORM MANIFEST
                </span>
                <h3 className="font-display italic font-black text-xl uppercase text-brand-navy">
                  Transit Booking Form Specimen
                </h3>
              </div>
              <Badge variant="navy">WCAG AA COMPLIANT</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <Input
                label="Pickup Postcode"
                prefixText="UK"
                placeholder="e.g. B1 1AA"
                hint="Origin address postcode"
                required
              />

              <Input
                label="Destination Postcode"
                prefixText="UK"
                placeholder="e.g. SW1A 1AA"
                hint="Delivery address postcode"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <Select
                label="Vehicle Capacity Needed"
                options={[
                  {
                    label: "Luton Box Van (3.5 Tonne - Tail Lift)",
                    value: "luton",
                  },
                  { label: "Long Wheelbase Van (Medium Load)", value: "lwb" },
                  { label: "Small Van (Single Items)", value: "small" },
                ]}
              />

              <Input
                label="Target Moving Date"
                type="date"
                defaultValue="2026-10-20"
                hint="Flexible dates receive priority rates"
              />
            </div>

            {/* Error State Demonstration */}
            <div className="mb-5">
              <Input
                label="Contact Telephone"
                defaultValue="invalid-phone"
                error="Please enter a valid UK phone number (e.g. 07405 328 674)"
                required
              />
            </div>

            <div className="mb-5">
              <Textarea
                label="Itemised Inventory & Flight of Stairs"
                placeholder="List major items: 3-seater sofa, king bed, 15 cardboard boxes. Specify if lift is available."
                rows={3}
              />
            </div>

            <div className="space-y-3 pt-2 mb-6 border-t border-brand-navy/20">
              <Checkbox
                label="Goods in Transit Cover Required (£50,000 Included)"
                description="Comprehensive transit indemnity policy active for all items packed and secured."
                defaultChecked
              />

              <Checkbox
                label="Tail Lift Required for Heavy Machinery / Piano"
                description="Hydraulic lift platform for zero manual lifting of high-mass items."
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="primary" size="lg">
                SUBMIT TRANSIT MANIFEST
              </Button>
              <Button variant="ghost" size="lg">
                RESET FORM
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <TapeDivider size="sm" variant="standard" />

      {/* SECTION 7: Realistic Component Composition */}
      <Section variant="paper" spacing="lg" withGrid>
        <Container size="narrow">
          <div className="text-center mb-10">
            <Badge variant="red" size="md" className="mb-2">
              COMPOSITION SHOWCASE
            </Badge>
            <Heading as="h2" size="display-lg" withRoadLine>
              LIVE WAYBILL DOCKET
            </Heading>
            <p className="font-sans text-sm text-brand-navy/80 mt-2">
              How the tokens and primitives combine to form a distinctive brand
              identity.
            </p>
          </div>

          {/* Full Composition Card */}
          <div className="bg-brand-paper-light border-3 border-brand-navy shadow-cargo-lg rounded-xs overflow-hidden">
            {/* Docket Top Banner */}
            <div className="bg-brand-navy text-white px-5 py-3 flex items-center justify-between border-b-2 border-brand-navy-950">
              <div className="flex items-center gap-3">
                <span className="font-display italic font-black uppercase text-sm tracking-wider">
                  UK LOGISTICS WAYBILL #84920
                </span>
              </div>
              <span className="font-mono text-xs text-brand-tan font-bold">
                TRANSIT ROUTE ACTIVE
              </span>
            </div>

            {/* Docket Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-brand-navy/60 uppercase">
                    CARRIER SERVICE
                  </span>
                  <h3 className="font-display italic font-black text-2xl uppercase text-brand-navy">
                    AB Removals – Man and Van
                  </h3>
                  <p className="font-sans text-sm text-brand-navy/80 mt-1">
                    Direct door-to-door transit across the UK.
                  </p>
                </div>
                <Stamp
                  variant="red"
                  size="md"
                  rotation="4"
                  subtext="VERIFIED 2026"
                >
                  THIS WAY UP
                </Stamp>
              </div>

              {/* Waybill Route Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 border-2 border-brand-navy/20 rounded-xs">
                <div>
                  <span className="font-mono text-[0.6875rem] font-bold text-brand-red uppercase">
                    ORIGIN (DEPOT A)
                  </span>
                  <p className="font-display italic font-black text-lg text-brand-navy">
                    BIRMINGHAM (B1)
                  </p>
                  <p className="font-sans text-xs text-brand-navy/70">
                    Loaded: 08:30 AM
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[0.6875rem] font-bold text-brand-red uppercase">
                    DESTINATION (DEPOT B)
                  </span>
                  <p className="font-display italic font-black text-lg text-brand-navy">
                    LONDON CENTRAL (EC1)
                  </p>
                  <p className="font-sans text-xs text-brand-navy/70">
                    Est. Arrival: 11:45 AM
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t-2 border-dashed border-brand-navy/30">
                <BarcodeStrip
                  code="AB-UK-WAYBILL-84920"
                  className="w-full sm:w-auto"
                />

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <Button variant="secondary" size="md">
                    TRACK VEHICLE
                  </Button>
                  <Button variant="primary" size="md">
                    DOWNLOAD PDF
                  </Button>
                </div>
              </div>
            </div>

            {/* Perforated Bottom edge */}
            <div className="h-4 bg-brand-paper border-t-2 border-dashed border-brand-navy/30 flex items-center justify-between px-3">
              <span className="font-mono text-[0.5625rem] text-brand-navy/50 font-bold uppercase tracking-widest">
                TEAR OFF HERE FOR CUSTOMER CONSIGNMENT COPY
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t-2 border-brand-navy bg-brand-navy text-white py-8">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <span>
              AB REMOVALS DESIGN SYSTEM • CONCEPT: &quot;THE ROUTE&quot;
            </span>
            <span className="text-white/60">
              EXCLUDED FROM SITEMAP • NOINDEX ACTIVE
            </span>
          </div>
        </Container>
      </footer>
    </main>
  );
}
