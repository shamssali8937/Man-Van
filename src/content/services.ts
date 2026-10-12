import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "house-removals",
    slug: "house-removals",
    title: "House Removals",
    shortDescription:
      "Complete house moving services tailored to moves of all sizes.",
    description:
      "Comprehensive house relocation services designed to make moving home efficient and stress-free. From flats to family homes, goods are handled with care and delivered securely.",
    features: [
      "Careful handling of furniture and household goods",
      "Flexible scheduling to suit completion dates",
      "Transit protection using blankets and straps",
      "Prompt and reliable arrival",
    ],
  },
  {
    id: "man-and-van",
    slug: "man-and-van",
    title: "Man and Van Services",
    shortDescription:
      "Flexible, efficient van and driver service for smaller moves and transport.",
    description:
      "A versatile man and van service suitable for individual items, student moves, room moves, and urgent transport needs.",
    features: [
      "Assistance with loading and unloading",
      "Cost-effective hourly or fixed-rate booking options [TODO: confirm pricing model]",
      "Ideal for quick moves and single bulky items",
      "Available across local and nationwide routes [TODO: confirm coverage scope]",
    ],
  },
  {
    id: "furniture-collection-delivery",
    slug: "furniture-collection-and-delivery",
    title: "Furniture Collection and Delivery",
    shortDescription:
      "Secure collection and doorstep delivery for store purchases and second-hand items.",
    description:
      "Collection and delivery service for items purchased online (e.g. eBay, Facebook Marketplace), retail stores (e.g. IKEA), or private sellers.",
    features: [
      "Collection directly from sellers or retail premises",
      "Protective strapping and padding during transit",
      "Room of choice placement upon delivery [TODO: confirm]",
      "Flexible collection times",
    ],
  },
  {
    id: "office-commercial-removals",
    slug: "office-and-commercial-removals",
    title: "Office and Commercial Removals",
    shortDescription:
      "Reliable commercial relocations to minimise business disruption.",
    description:
      "Tailored removal solutions for offices, shops, and small commercial premises. Designed to ensure minimal downtime and safe transit of equipment.",
    features: [
      "Safe handling of desks, chairs, and office equipment",
      "Out-of-hours scheduling available upon request [TODO: confirm]",
      "Systematic transport to keep items organised",
      "Reliable and punctual service",
    ],
  },
  {
    id: "furniture-dismantling-assembly",
    slug: "furniture-dismantling-and-assembly",
    title: "Furniture Dismantling and Assembly",
    shortDescription:
      "Skilled disassembly and reconstruction of flat-pack and large furniture.",
    description:
      "Practical dismantling and reassembly service for bed frames, wardrobes, dining sets, and flat-pack units that cannot fit through doorways whole.",
    features: [
      "Safe disassembly prior to transit",
      "Secure hardware and screw preservation",
      "Reassembly at destination address",
      "Saves time and prevents transit damage",
    ],
  },
  {
    id: "waste-removal-property-clearance",
    slug: "waste-removal-and-property-clearance",
    title: "Waste Removal and Property Clearance",
    shortDescription:
      "Responsible property clearances and disposal of unwanted items.",
    description:
      "Clearance services for residential and commercial properties. Clearing unwanted furniture, clutter, and non-hazardous waste with responsible disposal [TODO: confirm waste carrier licence number].",
    features: [
      "House, garage, and shed clearances",
      "Responsible disposal at licensed facilities",
      "Heavy lifting and loading included",
      "Tidy and thorough clearance work",
    ],
  },
];
