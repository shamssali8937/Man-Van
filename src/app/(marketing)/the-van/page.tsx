import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { VanGallery, type VanImage } from "@/components/van/van-gallery";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("The Van & Specifications"),
  description: formatSeoDescription(
    "Explore our 3.5-tonne Luton box van with hydraulic tail lift. View real photos, loading dimensions, protective equipment, and cargo capacities.",
  ),
  path: "/the-van",
});

const vanPhotos: VanImage[] = [
  {
    src: "/images/vans/van-1.jpeg",
    alt: "Side profile view of the white 3.5-tonne Luton box van parked on commercial paving",
    caption: "Side Profile – 3.5-Tonne Luton Box Body",
    badge: "Side Elevation",
  },
  {
    src: "/images/vans/van-2.jpeg",
    alt: "Front three-quarter view of the Mercedes-Benz Sprinter Luton van at sunset beside a green verge",
    caption: "Front Three-Quarter – Aerodynamic Luton Pod & Cab",
    badge: "Front Three-Quarter",
  },
  {
    src: "/images/vans/van-3.jpeg",
    alt: "Rear three-quarter perspective on a gravel driveway displaying the rear roller shutter door and heavy-duty hydraulic tail lift mechanism",
    caption: "Rear View – Roller Shutter & 500kg Tail Lift Platform",
    badge: "Tail Lift & Shutter",
  },
];

const specifications = [
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
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "The Van", href: "/the-van" }]} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
            Fleet & Mechanical Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            The Van: 3.5T Luton Box Van
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our purpose-built 3.5-tonne Luton van is engineered for domestic and
            commercial haulage. Featuring a hydraulic tail lift, generous cubic
            capacity, and full transit restraint rails, it keeps your
            possessions protected across every UK route.
          </p>
        </div>

        {/* Van Photo Gallery with Lightbox */}
        <section aria-labelledby="van-photos-heading" className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2
                id="van-photos-heading"
                className="text-2xl font-bold text-slate-900"
              >
                Vehicle Photo Gallery
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Real photos of our removals vehicle in operation across UK
                destinations.
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
              3 Photographs
            </span>
          </div>

          <VanGallery images={vanPhotos} />
        </section>

        {/* Specification Table */}
        <section aria-labelledby="van-specs-heading" className="mb-16">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-10 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Technical Data
              </span>
              <h2
                id="van-specs-heading"
                className="text-2xl font-bold text-slate-900 mt-1"
              >
                Vehicle Specifications Table
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Standard technical dimensions and capacity thresholds for our
                3.5-tonne Luton Box Van with hydraulic tail lift.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
                    <th scope="col" className="py-3.5 px-4">
                      Specification Parameter
                    </th>
                    <th scope="col" className="py-3.5 px-4">
                      Value
                    </th>
                    <th scope="col" className="py-3.5 px-4">
                      Operational Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {specifications.map((spec) => (
                    <tr
                      key={spec.parameter}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-3.5 px-4 text-slate-900 font-semibold">
                        {spec.parameter}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs">
                        <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-1 text-emerald-900 font-bold">
                          {spec.value}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-600">
                        {spec.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What We Carry / What We Cannot Carry */}
        <section aria-labelledby="cargo-scope-heading" className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2
              id="cargo-scope-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900"
            >
              What We Carry
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our Luton van accommodates everything from full flat and house
              contents to fragile marketplace collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Permitted Cargo */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                  ✓
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Accepted Goods & Furniture
                </h3>
              </div>

              <div className="space-y-4">
                {whatWeCarryItems.map((item) => (
                  <div
                    key={item.category}
                    className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      {item.category}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {item.examples}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prohibited Cargo */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-sm">
                    ✕
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Prohibited & Excluded Items
                  </h3>
                </div>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  For vehicle safety, road legislation compliance, and insurance
                  coverage, we cannot transport:
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  {whatWeCannotCarryItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-lg bg-red-50/50 p-2.5 border border-red-100"
                    >
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-slate-800 block mb-1">
                  Notice on Hazardous Waste:
                </span>
                For property clearances involving chemicals or asbestos,
                specialized hazardous disposal partners must be used.
              </div>
            </div>
          </div>
        </section>

        {/* Transit Protection Equipment */}
        <section aria-labelledby="equipment-heading" className="mb-16">
          <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                Stowage & Safety
              </span>
              <h2
                id="equipment-heading"
                className="text-2xl sm:text-3xl font-extrabold text-white mt-1"
              >
                Transit Protection Equipment on Board
              </h2>
              <p className="text-sm text-slate-300 mt-2">
                Every vehicle run comes fully stocked with professional-grade
                handling and securing equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {protectiveEquipment.map((eq) => (
                <div
                  key={eq.title}
                  className="rounded-xl bg-slate-800/80 p-5 border border-slate-700"
                >
                  <h3 className="text-base font-bold text-white mb-2">
                    {eq.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {eq.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote CTA */}
        <QuoteCtaCard
          title="Need Our Van for Your Move?"
          description="Book our 3.5-tonne Luton van with an experienced driver or multi-man team. Instant transparent quotes with zero hidden mileage fees."
        />
      </main>
    </div>
  );
}
