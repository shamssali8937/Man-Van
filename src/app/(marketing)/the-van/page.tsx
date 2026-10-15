import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import {
  Badge,
  Button,
  Container,
  Heading,
  Stamp,
  TapeDivider,
} from "@/components/ui";
import { VanGallery, type VanImage } from "@/components/van/van-gallery";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("Fleet & Van Specifications"),
  description: formatSeoDescription(
    "Explore our full UK removals fleet: 3.5T Luton box vans with tail lift, large LWB high-roof vans, medium MWB panel vans, and small courier vans.",
  ),
  path: "/the-van",
});

const vanPhotos: VanImage[] = [
  {
    src: "/images/vans/hero-van-branded.jpeg",
    alt: "White Mercedes-Benz Sprinter 3.5-tonne Luton box van with AB Removals corporate logo livery decaled on the side and hydraulic tail lift",
    caption: "3.5T Luton Box Van with Tail Lift – AB Removals Flagship Fleet",
    badge: "Branded Flagship",
  },
  {
    src: "/images/vans/van-lwb.jpeg",
    alt: "Clean white long-wheelbase high-roof Mercedes-Benz Sprinter panel removals van parked on a UK street",
    caption:
      "Large LWB High-Roof Panel Van – 14.0 m³ Capacity for 1–2 Bed Moves",
    badge: "Large LWB Van",
  },
  {
    src: "/images/vans/van-mwb.jpeg",
    alt: "Clean white medium-wheelbase panel van parked outside modern residential home in the UK",
    caption: "Medium MWB Panel Van – 10.5 m³ Agile Urban Removals Vehicle",
    badge: "Medium MWB Van",
  },
  {
    src: "/images/vans/van-small.jpeg",
    alt: "Clean white compact cargo courier van parked on a UK residential street curb",
    caption: "Small Courier Cargo Van – Single Item & Student Luggage Transit",
    badge: "Small Courier Van",
  },
  {
    src: "/images/vans/van-1.jpeg",
    alt: "Side profile view of the white 3.5-tonne Luton box van parked on commercial paving",
    caption: "Side Profile – 3.5-Tonne Luton Box Body & Forward Pod",
    badge: "Luton Side Elevation",
  },
  {
    src: "/images/vans/van-3.jpeg",
    alt: "Rear perspective displaying the rear roller shutter door and heavy-duty hydraulic tail lift mechanism",
    caption: "Rear View – Roller Shutter & 500kg Hydraulic Tail Lift Platform",
    badge: "Tail Lift & Shutter",
  },
];

interface FleetVehicle {
  id: string;
  name: string;
  shortName: string;
  category: string;
  badge: string;
  image: string;
  imageAlt: string;
  volume: string;
  payload: string;
  dimensions: string;
  loadingAccess: string;
  recommendedCrew: string;
  capacityScope: string;
  bestFor: string;
  features: string[];
}

const fleetVehicles: FleetVehicle[] = [
  {
    id: "luton-tail-lift",
    name: "3.5T Luton Box Van (Hydraulic Tail Lift)",
    shortName: "3.5T Luton Box Van",
    category: "Flagship Removals Vehicle",
    badge: "Most Popular / Flagship",
    image: "/images/vans/hero-van-branded.jpeg",
    imageAlt:
      "White 3.5-tonne Luton box van with AB Removals corporate logo livery decaled on the side and hydraulic tail lift",
    volume: "19.0 m³ (670 cu ft)",
    payload: "1,000 kg",
    dimensions: "4.1m (L) x 2.05m (W) x 2.2m (H)",
    loadingAccess: "500kg Hydraulic Tail Lift + Rear Roller Shutter",
    recommendedCrew: "2 or 3 Movers",
    capacityScope: "1–3 Bedroom House or Flat (Up to 60 Boxes + Furniture)",
    bestFor:
      "Full household relocations, 2–3 bedroom flats, tall wardrobes standing upright, American fridge-freezers, and heavy solid wood furniture.",
    features: [
      "500kg hydraulic cantilever tail lift platform",
      "Full internal timber tie rails & load tracking",
      "Oversized bulkhead storage pod above driver cab",
      "2.2m standing height for tall furniture upright",
      "Low loading threshold with wide roll-in access",
    ],
  },
  {
    id: "lwb-van",
    name: "Large LWB High-Roof Panel Van (Long Wheelbase)",
    shortName: "Large LWB Van",
    category: "High-Volume Panel Transport",
    badge: "Long Wheelbase",
    image: "/images/vans/van-lwb.jpeg",
    imageAlt:
      "White Mercedes Sprinter long-wheelbase high-roof commercial removals panel van parked on UK street",
    volume: "14.0 m³ (495 cu ft)",
    payload: "1,250 kg",
    dimensions: "4.3m (L) x 1.78m (W) x 1.94m (H)",
    loadingAccess: "270° Rear Twin Barn Doors + Sliding Side Door",
    recommendedCrew: "1 or 2 Movers",
    capacityScope: "1–2 Bedroom Apartment (Up to 40 Boxes + Furniture)",
    bestFor:
      "1–2 bedroom apartments, commercial office stock, multi-item furniture collections, trade transit, and long-distance inter-city moves.",
    features: [
      "Continuous 4.3m floor length for long timber, rugs, and pipes",
      "Heavy 1,250kg payload capacity for dense loads",
      "Full-height sliding side door for curbside loading",
      "270-degree opening rear doors for forklift pallet loading",
      "Fully ply-lined cargo hold with recessed anchor lashing points",
    ],
  },
  {
    id: "mwb-van",
    name: "Medium MWB Panel Van (Medium Wheelbase)",
    shortName: "Medium MWB Van",
    category: "Agile Urban Transit",
    badge: "Medium Wheelbase",
    image: "/images/vans/van-mwb.jpeg",
    imageAlt:
      "Clean white medium wheelbase panel removals van parked on asphalt street",
    volume: "10.5 m³ (370 cu ft)",
    payload: "1,350 kg",
    dimensions: "3.0m (L) x 1.78m (W) x 1.88m (H)",
    loadingAccess: "180° Rear Barn Doors + Sliding Side Door",
    recommendedCrew: "Driver Only or 1 Helper",
    capacityScope: "Studio Flat / Student Room (Up to 25 Boxes + Sofa / Bed)",
    bestFor:
      "Studio flats, bedsits, shared student houses, single room moves, sofa deliveries, narrow terraced streets, and tight urban parking bays.",
    features: [
      "Compact turning circle ideal for tight cul-de-sacs and city streets",
      "Highest payload rating in fleet (up to 1,350kg)",
      "Standard driveway length parking footprint",
      "Curbside sliding access door for rapid loading",
      "Internal non-slip cargo floor with tie-down rings",
    ],
  },
  {
    id: "small-van",
    name: "Small Transit Connect / Cargo Courier Van",
    shortName: "Small Cargo Van",
    category: "Fast Courier & Escort",
    badge: "Single Item / Luggage",
    image: "/images/vans/van-small.jpeg",
    imageAlt:
      "Clean white compact commercial cargo courier van parked on paved street curb",
    volume: "3.5 m³ (125 cu ft)",
    payload: "650–800 kg",
    dimensions: "1.8m (L) x 1.4m (W) x 1.2m (H)",
    loadingAccess: "Asymmetric Rear Doors + Side Sliding Door",
    recommendedCrew: "Driver Only (Self-Loading Available)",
    capacityScope: "Single Bulky Item, Washing Machine, or 10–15 Boxes",
    bestFor:
      "Marketplace collections (eBay, Gumtree, Facebook), store pickups (IKEA, B&Q), washing machines, student trunks, luggage, and urgent parcel consignments.",
    features: [
      "Under 2.0m vehicle height allows access to underground car parks",
      "Fast agile courier transit across dense city zones",
      "Fold-flat passenger seat for extra cargo pass-through length",
      "Lowest fuel consumption and ultra-low transit footprint",
      "Fully carpeted/ply-lined protective interior",
    ],
  },
];

const lutonDetailedSpecs = [
  {
    parameter: "Cargo Volume (Cubic Capacity)",
    value: "19.0 m³ (670 cu ft)",
    notes:
      "Full Luton coachbuild capacity including oversized bulkhead storage space above cab",
  },
  {
    parameter: "Maximum Payload Capacity",
    value: "1,000 kg",
    notes:
      "Safe working load capacity calibrated for domestic furniture and commercial stock",
  },
  {
    parameter: "Internal Length",
    value: "4.10 m (13.5 ft)",
    notes:
      "Continuous load bed length from rear shutter to forward cabin bulkhead",
  },
  {
    parameter: "Internal Width",
    value: "2.05 m (6.7 ft)",
    notes: "Clear cargo width between internal protective timber tie rails",
  },
  {
    parameter: "Internal Height",
    value: "2.20 m (7.2 ft)",
    notes:
      "Generous standing height allowing wardrobes, tallboys, and fridge-freezers upright",
  },
  {
    parameter: "Tail Lift Capacity",
    value: "500 kg",
    notes:
      "Heavy-duty column/cantilever hydraulic tail lift platform for safe ground-level loading",
  },
  {
    parameter: "Cab Passenger Seating",
    value: "Driver + 2 Passengers",
    notes:
      "Comfortable cab seating allowing customer or helpers to travel on transit route",
  },
  {
    parameter: "Clean Air / Emissions Compliance",
    value: "Euro-6 Standard",
    notes: "100% compliant with London ULEZ & regional Clean Air Zones (CAZ)",
  },
];

const whatWeCarryItems = [
  {
    category: "Living Room Furniture",
    examples:
      "Corner sofas, 2/3-seater suites, armchairs, TV units, coffee tables, display cabinets.",
  },
  {
    category: "Bedroom Suites",
    examples:
      "King, double & single bed frames, mattresses, multi-door wardrobes, chests of drawers.",
  },
  {
    category: "Kitchen & White Goods",
    examples:
      "Washing machines, tumble dryers, fridge-freezers, dishwashers, freestanding cookers.",
  },
  {
    category: "Dining & Study Furniture",
    examples:
      "Dining tables & chair sets, office desks, ergonomic chairs, bookshelves, bookcases.",
  },
  {
    category: "Boxes & Household Sundries",
    examples:
      "Double-walled moving cartons, wardrobe boxes, archive crates, luggage, mirrors, framed art.",
  },
  {
    category: "Outdoor & Leisure Equipment",
    examples:
      "Bicycles, lawnmowers (fuel-drained), garden furniture, barbecue sets (clean), fitness equipment.",
  },
];

const whatWeCannotCarryItems = [
  "Hazardous chemicals, toxic acids, paints, solvents, or unsealed liquids",
  "Flammable gas cylinders, butane bottles, petrol, or diesel cans",
  "Illegal substances, illicit contraband, or unregistered firearms",
  "Live animals, livestock, or perishable livestock feeds",
  "Human remains or clinical/biological medical waste",
];

const protectiveEquipment = [
  {
    title: "Heavy-Duty Quilted Blankets",
    description:
      "Thick removal pads wrap all wooden, fabric, and delicate furniture surfaces to eliminate friction scratches.",
  },
  {
    title: "Ratchet Tie-Down Straps",
    description:
      "Commercial load straps anchor large appliances and bulky furniture tightly to internal tracking rails.",
  },
  {
    title: "500kg Hydraulic Tail Lift",
    description:
      "Enables safe ground-level mechanical lifting for heavy appliances, sofas, and solid oak tables.",
  },
  {
    title: "Furniture Dollies & Sack Barrows",
    description:
      "Industrial 4-wheel dollies and heavy sack trucks allow smooth doorstep transfers without dragging.",
  },
];

export default function TheVanPage() {
  return (
    <div className="bg-brand-paper min-h-screen">
      {/* Waybill Tape Divider */}
      <TapeDivider label="AB REMOVALS • FLEET SPECIFICATIONS • 3.5T LUTON & COMMERCIAL VANS • EURO-6 ULEZ" />

      {/* Breadcrumbs */}
      <div className="border-b-2 border-brand-navy/15 bg-brand-paper-light">
        <Container>
          <Breadcrumbs
            items={[{ label: "Fleet & Van Specifications", href: "/the-van" }]}
          />
        </Container>
      </div>

      <main className="py-10 md:py-16">
        <Container>
          {/* Hero Section */}
          <div className="max-w-4xl space-y-4 mb-12 md:mb-16">
            <div className="flex items-center gap-2.5 flex-wrap">
              <Badge variant="red" size="sm">
                COMMERCIAL FLEET
              </Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-brand-navy/70">
                UK LOGISTICS SPECIFICATIONS
              </span>
              <Stamp variant="navy" size="sm" rotation="-1">
                EURO-6 ULEZ
              </Stamp>
            </div>

            <Heading as="h1" size="display-xl" withRoadLine>
              Our Removals Fleet &amp; Vehicle Specifications
            </Heading>

            <p className="font-sans text-base sm:text-lg text-brand-navy/85 max-w-3xl leading-relaxed">
              Explore our complete UK removals fleet. From our flagship
              3.5-tonne Luton box vans equipped with 500kg hydraulic tail lifts
              to agile LWB, MWB, and compact courier vans, every vehicle comes
              fully stocked with commercial protective blankets, heavy-duty
              ratchet straps, and transit dollies.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono font-bold text-brand-navy">
              <div className="flex items-center gap-1.5">
                <span className="text-brand-red">■</span> 4 Fleet Sizes
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-red">■</span> 500kg Tail Lift
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-red">■</span> £50k Goods in Transit
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-red">■</span> 100% ULEZ Compliant
              </div>
            </div>
          </div>

          {/* ===================================================================
              FLEET SHOWCASE: 4 VEHICLE CATEGORIES
              =================================================================== */}
          <section aria-labelledby="fleet-showcase-heading" className="mb-16">
            <div className="border-b-2 border-brand-navy pb-3 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="font-mono text-xs font-bold text-brand-red uppercase tracking-wider block">
                  VEHICLE SELECTION GUIDE
                </span>
                <h2
                  id="fleet-showcase-heading"
                  className="font-display font-black text-2xl sm:text-3xl text-brand-navy uppercase tracking-wide mt-1"
                >
                  Choose the Right Vehicle For Your Move
                </h2>
              </div>
              <span className="font-mono text-xs font-bold text-brand-navy/70">
                4 Specialized Removals Configurations
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {fleetVehicles.map((van) => (
                <div
                  key={van.id}
                  className="bg-white border-2 border-brand-navy rounded-xs shadow-cargo flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Van Card Header */}
                    <div className="bg-brand-navy text-white p-4 border-b-2 border-brand-navy flex items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] font-bold text-brand-tan uppercase tracking-widest block">
                          {van.category}
                        </span>
                        <h3 className="font-display font-black text-lg sm:text-xl uppercase text-white leading-tight">
                          {van.name}
                        </h3>
                      </div>
                      <Badge variant="red" size="sm">
                        {van.badge}
                      </Badge>
                    </div>

                    {/* Van Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-paper-light border-b-2 border-brand-navy">
                      <Image
                        src={van.image}
                        alt={van.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Quick Specs Grid */}
                    <div className="p-4 sm:p-6 space-y-4">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 bg-brand-paper-light p-3 rounded-xs border border-brand-navy/20 font-mono text-xs">
                        <div>
                          <span className="text-brand-navy/60 block text-[10px] uppercase font-bold">
                            CARGO VOLUME:
                          </span>
                          <span className="font-black text-brand-navy text-sm">
                            {van.volume}
                          </span>
                        </div>
                        <div>
                          <span className="text-brand-navy/60 block text-[10px] uppercase font-bold">
                            PAYLOAD CAPACITY:
                          </span>
                          <span className="font-black text-brand-red text-sm">
                            {van.payload}
                          </span>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <span className="text-brand-navy/60 block text-[10px] uppercase font-bold">
                            DIMENSIONS:
                          </span>
                          <span className="font-bold text-brand-navy text-xs">
                            {van.dimensions}
                          </span>
                        </div>
                      </div>

                      {/* Best For & Capacity Scope */}
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-mono font-bold uppercase text-brand-navy/70 block">
                            TYPICAL CAPACITY:
                          </span>
                          <p className="font-sans font-bold text-brand-navy mt-0.5">
                            {van.capacityScope}
                          </p>
                        </div>
                        <div>
                          <span className="font-mono font-bold uppercase text-brand-navy/70 block">
                            BEST SUITED FOR:
                          </span>
                          <p className="font-sans text-brand-navy/80 mt-0.5 leading-relaxed">
                            {van.bestFor}
                          </p>
                        </div>
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="pt-2 border-t border-brand-navy/15">
                        <span className="font-mono text-[10px] font-bold text-brand-navy/70 uppercase tracking-widest block mb-2">
                          KEY EQUIPMENT &amp; ACCESS:
                        </span>
                        <ul className="space-y-1.5 text-xs font-sans text-brand-navy/85">
                          {van.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2"
                            >
                              <span
                                className="text-brand-red font-bold shrink-0 mt-0.5"
                                aria-hidden="true"
                              >
                                ✓
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-4 sm:p-6 pt-0 bg-white">
                    <div className="pt-3 border-t border-brand-navy/15 flex items-center justify-between gap-3">
                      <div className="font-mono text-xs text-brand-navy/70">
                        <span className="font-bold text-brand-navy">Crew:</span>{" "}
                        {van.recommendedCrew}
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        href={`/quote?van=${van.id}`}
                      >
                        Book {van.shortName} →
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===================================================================
              FLEET COMPARISON MATRIX TABLE
              =================================================================== */}
          <section aria-labelledby="comparison-heading" className="mb-16">
            <div className="bg-white border-2 border-brand-navy rounded-xs shadow-cargo overflow-hidden">
              <div className="bg-brand-navy text-white p-4 sm:p-6 border-b-2 border-brand-navy">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="red" size="sm">
                    COMPARISON MATRIX
                  </Badge>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-tan">
                    TECHNICAL BENCHMARK
                  </span>
                </div>
                <h2
                  id="comparison-heading"
                  className="font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-white"
                >
                  Side-by-Side Fleet Specification Table
                </h2>
                <p className="font-sans text-xs sm:text-sm text-brand-paper/85 mt-1 leading-relaxed">
                  Compare cargo capacities, load footprints, and handling access
                  across our 4 removals vehicle classes.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse font-sans">
                  <thead>
                    <tr className="border-b-2 border-brand-navy bg-brand-paper font-mono text-[11px] font-bold uppercase tracking-wider text-brand-navy">
                      <th scope="col" className="py-3 px-4">
                        Vehicle Type
                      </th>
                      <th scope="col" className="py-3 px-4">
                        Volume (m³)
                      </th>
                      <th scope="col" className="py-3 px-4">
                        Max Payload
                      </th>
                      <th scope="col" className="py-3 px-4">
                        Cargo Dimensions (L × W × H)
                      </th>
                      <th scope="col" className="py-3 px-4">
                        Loading Access
                      </th>
                      <th scope="col" className="py-3 px-4">
                        Typical Move Scope
                      </th>
                      <th scope="col" className="py-3 px-4">
                        Recommended Crew
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-brand-navy/15 divide-brand-navy/10 font-mono text-xs">
                    {fleetVehicles.map((van) => (
                      <tr
                        key={`table-${van.id}`}
                        className="hover:bg-brand-paper-light transition-colors"
                      >
                        <td className="py-3.5 px-4 font-display font-black text-brand-navy text-sm">
                          {van.shortName}
                          <span className="block font-sans text-[11px] text-brand-navy/70 font-normal">
                            {van.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-brand-navy">
                          <span className="bg-brand-paper px-2 py-0.5 rounded-xs border border-brand-navy/20">
                            {van.volume}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-brand-red">
                          {van.payload}
                        </td>
                        <td className="py-3.5 px-4 text-brand-navy">
                          {van.dimensions}
                        </td>
                        <td className="py-3.5 px-4 text-brand-navy/90 font-sans text-xs">
                          {van.loadingAccess}
                        </td>
                        <td className="py-3.5 px-4 text-brand-navy/90 font-sans text-xs">
                          {van.capacityScope}
                        </td>
                        <td className="py-3.5 px-4 text-brand-navy font-sans text-xs">
                          {van.recommendedCrew}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ===================================================================
              PHOTO GALLERY WITH ACCESSIBLE LIGHTBOX
              =================================================================== */}
          <section aria-labelledby="van-photos-heading" className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-3 mb-6 border-b-2 border-brand-navy gap-2">
              <div>
                <span className="font-mono text-xs font-bold text-brand-red uppercase tracking-wider block">
                  REAL VEHICLE PHOTOGRAPHY
                </span>
                <h2
                  id="van-photos-heading"
                  className="font-display font-black text-2xl sm:text-3xl text-brand-navy uppercase tracking-wide mt-1"
                >
                  Fleet Photo Gallery
                </h2>
                <p className="font-sans text-xs sm:text-sm text-brand-navy/75 mt-0.5">
                  Real operational photographs of our removals fleet in service
                  across UK locations. Click any image to inspect in
                  full-screen.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-brand-navy bg-white px-3 py-1 rounded-xs border border-brand-navy/20 self-start sm:self-auto">
                6 Photographs Available
              </span>
            </div>

            <VanGallery images={vanPhotos} />
          </section>

          {/* ===================================================================
              DETAILED TECHNICAL DATA: 3.5T LUTON SPECIFICATIONS
              =================================================================== */}
          <section aria-labelledby="luton-specs-heading" className="mb-16">
            <div className="bg-white border-2 border-brand-navy p-6 md:p-8 rounded-xs shadow-cargo">
              <div className="mb-6 border-b border-brand-navy/15 pb-4">
                <span className="font-mono text-xs font-bold text-brand-red uppercase tracking-wider block">
                  TECHNICAL BLUEPRINT
                </span>
                <h2
                  id="luton-specs-heading"
                  className="font-display font-black text-2xl text-brand-navy uppercase tracking-wide mt-1"
                >
                  Flagship 3.5T Luton Box Van Specifications
                </h2>
                <p className="font-sans text-xs sm:text-sm text-brand-navy/75 mt-1">
                  Full engineering parameters for our primary Luton coachbuild
                  with 500kg cantilever tail lift.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-brand-navy bg-brand-paper font-mono text-xs font-bold uppercase tracking-wider text-brand-navy">
                      <th scope="col" className="py-3 px-4">
                        Specification Parameter
                      </th>
                      <th scope="col" className="py-3 px-4">
                        Value
                      </th>
                      <th scope="col" className="py-3 px-4">
                        Operational Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-navy/10 font-sans text-xs sm:text-sm">
                    {lutonDetailedSpecs.map((spec) => (
                      <tr
                        key={spec.parameter}
                        className="hover:bg-brand-paper-light transition-colors"
                      >
                        <td className="py-3 px-4 text-brand-navy font-bold">
                          {spec.parameter}
                        </td>
                        <td className="py-3 px-4 font-mono text-xs">
                          <span className="inline-block rounded-xs bg-brand-navy text-white px-2.5 py-1 font-bold">
                            {spec.value}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-xs text-brand-navy/80">
                          {spec.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ===================================================================
              TRANSIT PROTECTION & STOWAGE EQUIPMENT
              =================================================================== */}
          <section aria-labelledby="equipment-heading" className="mb-16">
            <div className="rounded-xs bg-brand-navy text-white p-6 sm:p-8 md:p-10 border-2 border-brand-navy-950 shadow-cargo">
              <div className="max-w-2xl mb-8">
                <span className="font-mono text-xs font-bold text-brand-tan uppercase tracking-widest block">
                  SAFETY &amp; RESTOWAGE
                </span>
                <h2
                  id="equipment-heading"
                  className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide mt-1"
                >
                  Protective Equipment Carried On Board
                </h2>
                <p className="font-sans text-xs sm:text-sm text-brand-paper/85 mt-1.5 leading-relaxed">
                  Every vehicle dispatched comes pre-loaded with commercial
                  blankets, heavy-duty ratchet tie-downs, and transit dollies to
                  guarantee zero transit damage.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {protectiveEquipment.map((eq) => (
                  <div
                    key={eq.title}
                    className="rounded-xs bg-brand-navy-950/70 p-4 border border-white/10 space-y-2"
                  >
                    <div className="text-brand-red font-mono font-bold text-sm">
                      ■
                    </div>
                    <h3 className="font-display font-black text-base uppercase text-white">
                      {eq.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-paper/80 leading-relaxed">
                      {eq.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================
              CARGO SCOPE: WHAT WE CARRY VS PROHIBITED GOODS
              =================================================================== */}
          <section aria-labelledby="cargo-scope-heading" className="mb-16">
            <div className="border-b-2 border-brand-navy pb-3 mb-6">
              <span className="font-mono text-xs font-bold text-brand-red uppercase tracking-wider block">
                CARGO RECEPTION RULES
              </span>
              <h2
                id="cargo-scope-heading"
                className="font-display font-black text-2xl sm:text-3xl text-brand-navy uppercase tracking-wide mt-1"
              >
                What We Carry &amp; Prohibited Cargo
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Permitted Cargo */}
              <div className="rounded-xs bg-white border-2 border-brand-navy p-6 shadow-cargo">
                <div className="flex items-center gap-2 mb-4 border-b border-brand-navy/15 pb-3">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-xs bg-emerald-100 text-emerald-800 font-bold text-xs"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <h3 className="font-display font-black text-lg text-brand-navy uppercase">
                    Accepted Goods &amp; Furniture
                  </h3>
                </div>

                <div className="space-y-4">
                  {whatWeCarryItems.map((item) => (
                    <div
                      key={item.category}
                      className="border-b border-brand-navy/10 pb-3 last:border-b-0 last:pb-0"
                    >
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-navy">
                        {item.category}
                      </h4>
                      <p className="font-sans text-xs text-brand-navy/75 mt-0.5 leading-relaxed">
                        {item.examples}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prohibited Cargo */}
              <div className="rounded-xs bg-white border-2 border-brand-navy p-6 shadow-cargo flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4 border-b border-brand-navy/15 pb-3">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-xs bg-brand-red/15 text-brand-red font-bold text-xs"
                      aria-hidden="true"
                    >
                      ✕
                    </span>
                    <h3 className="font-display font-black text-lg text-brand-navy uppercase">
                      Prohibited &amp; Excluded Cargo
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-brand-navy/80 mb-4 leading-relaxed">
                    Under UK road transport legislation and our £50,000 Goods in
                    Transit coverage terms, our vehicles cannot accept:
                  </p>

                  <ul className="space-y-2.5 text-xs font-sans text-brand-navy/85">
                    {whatWeCannotCarryItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 rounded-xs bg-brand-red/5 p-2.5 border border-brand-red/20"
                      >
                        <span className="text-brand-red font-bold shrink-0">
                          ✕
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-xs bg-brand-paper-rule p-4 border border-brand-navy/20 text-xs text-brand-navy/80 font-sans">
                  <span className="font-mono font-bold uppercase text-brand-navy block mb-1">
                    Notice on Hazardous Waste:
                  </span>
                  We hold an Environment Agency upper-tier waste licence
                  (CBDU489120) for general rubbish and household clearances, but
                  toxic chemicals and asbestos require licensed hazardous
                  carriers.
                </div>
              </div>
            </div>
          </section>

          {/* ===================================================================
              QUOTE CTA SECTION
              =================================================================== */}
          <QuoteCtaCard
            title="Book Your Preferred Fleet Vehicle Today"
            description="Select your vehicle size and get a guaranteed transparent price with zero stairs charges, zero hidden mileage fees, and fully insured UK transit."
          />
        </Container>
      </main>
    </div>
  );
}
