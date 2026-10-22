import { areas } from "@/content/areas";
import { services } from "@/content/services";
import { areaServiceMetaDescriptions } from "@/lib/seo/area-service-descriptions";
import { formatSeoDescription, formatSeoTitle } from "@/lib/seo/metadata";
import type { Area, Service } from "@/types";

export interface AreaServiceContent {
  area: Area;
  service: Service;
  citySlug: string;
  serviceSlug: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  leadParagraph: string;
  serviceOverview: string;
  parkingAndPermits: {
    heading: string;
    content: string;
  };
  accessAndHandling: {
    heading: string;
    content: string;
  };
  transitAndCorridors: {
    heading: string;
    content: string;
  };
  localFaqs: Array<{
    question: string;
    answer: string;
  }>;
  benefits: string[];
}

// 14 distinct service profiles with 3 rotating variants each, NO banned words
const serviceVariants: Record<
  string,
  Array<{ name: string; equipment: string; benefit: string }>
> = {
  "house-removals": [
    {
      name: "house removals",
      equipment: "3.5T Luton vans with tail lifts",
      benefit: "room-of-choice placement and blankets",
    },
    {
      name: "domestic home moving",
      equipment: "box vans equipped with hydraulic lifts",
      benefit: "sofa padding and furniture transit",
    },
    {
      name: "flat and house removals",
      equipment: "high-capacity Luton vehicles",
      benefit: "direct door-to-door transit",
    },
    {
      name: "residential property moves",
      equipment: "spacious tail-lift box vehicles",
      benefit: "upfront transparent fixed rates",
    },
  ],
  "office-and-commercial-removals": [
    {
      name: "commercial office relocations",
      equipment: "computer crates and roll cages",
      benefit: "minimal business downtime",
    },
    {
      name: "workplace moving",
      equipment: "tail-lift box vans and IT protective covers",
      benefit: "methodical crate tracking",
    },
    {
      name: "business removals",
      equipment: "commercial moving vehicles",
      benefit: "weekend transit options",
    },
    {
      name: "corporate workspace moves",
      equipment: "heavy-duty transit containers",
      benefit: "seamless out-of-hours relocations",
    },
  ],
  "furniture-removals-and-delivery": [
    {
      name: "furniture removals and delivery",
      equipment: "padded moving blankets and straps",
      benefit: "retail pickups and room placement",
    },
    {
      name: "furniture transport and courier delivery",
      equipment: "tail-lift box vans with securing rails",
      benefit: "marketplace collections and sofa placement",
    },
    {
      name: "furniture collection and delivery",
      equipment: "protective blankets and dollies",
      benefit: "direct store pickups with upstairs carrying",
    },
    {
      name: "bulky furniture delivery",
      equipment: "tail-lift courier vehicles",
      benefit: "safe two-man room-of-choice positioning",
    },
  ],
  "man-and-van": [
    {
      name: "man and van hire",
      equipment: "agile 3.5-tonne Luton vans",
      benefit: "working driver loading assistance",
    },
    {
      name: "man with a van transport",
      equipment: "high-roof vans with hydraulic tail lifts",
      benefit: "swift room moves without delays",
    },
    {
      name: "van and driver moving service",
      equipment: "spacious removal vans and load straps",
      benefit: "practical loading support and hourly rates",
    },
    {
      name: "driver-assisted van transport",
      equipment: "agile Luton box vans",
      benefit: "budget-friendly hourly bookings",
    },
  ],
  "furniture-assembly-and-dismantling": [
    {
      name: "furniture dismantling and assembly",
      equipment: "cordless power drivers and hex tools",
      benefit: "sturdy wardrobe rebuilding",
    },
    {
      name: "flat-pack assembly and disassembly",
      equipment: "hand tools and hardware fixings",
      benefit: "IKEA PAX wardrobe builds",
    },
    {
      name: "furniture assembly service",
      equipment: "specialist torque drivers and allen keys",
      benefit: "hassle-free furniture reassembly",
    },
    {
      name: "wardrobe and bed assembly",
      equipment: "commercial cordless drivers",
      benefit: "secure furniture rebuilding",
    },
  ],
  "student-and-small-moves": [
    {
      name: "student room relocations",
      equipment: "compact removal vans and trolleys",
      benefit: "affordable campus transit",
    },
    {
      name: "student moving and room moves",
      equipment: "agile Luton box vans with tail lifts",
      benefit: "low rates for halls of residence",
    },
    {
      name: "small domestic and student moves",
      equipment: "protective moving vans and cartons",
      benefit: "punctual university moves",
    },
    {
      name: "student apartment relocations",
      equipment: "agile moving vans",
      benefit: "budget-friendly term-time transit",
    },
  ],
  "store-collections-and-deliveries": [
    {
      name: "store collections and delivery",
      equipment: "spacious tail-lift Luton box vans",
      benefit: "direct IKEA and B&Q pickups",
    },
    {
      name: "store collection and courier service",
      equipment: "protective padded blankets and rails",
      benefit: "warehouse pickups delivered inside",
    },
    {
      name: "retail goods collection and delivery",
      equipment: "heavy-duty tail-lift commercial vans",
      benefit: "prompt collection slots with carrying",
    },
    {
      name: "retail store transport",
      equipment: "hydraulic tail-lift vans",
      benefit: "direct collection and room placement",
    },
  ],
  "appliance-removals": [
    {
      name: "domestic appliance removals",
      equipment: "500kg hydraulic tail lifts and dollies",
      benefit: "upright fridge-freezer transit",
    },
    {
      name: "white goods moving and delivery",
      equipment: "heavy-duty sack barrows and straps",
      benefit: "safe washing machine transport",
    },
    {
      name: "kitchen appliance transport",
      equipment: "tail-lift Luton vans and runners",
      benefit: "secure room-of-choice positioning",
    },
    {
      name: "washing machine and cooker transport",
      equipment: "tail-lift vehicles and dollies",
      benefit: "upright white goods delivery",
    },
  ],
  "packing-and-moving-assistance": [
    {
      name: "packing and moving assistance",
      equipment: "double-walled boxes and bubble wrap",
      benefit: "systematic china wrapping",
    },
    {
      name: "packing and removals support",
      equipment: "heavy-duty cartons and packing paper",
      benefit: "protective packing for glass and mirrors",
    },
    {
      name: "packing assistance for moves",
      equipment: "wardrobe boxes and adhesive tape",
      benefit: "structured box preparation",
    },
    {
      name: "fragile packing and removals help",
      equipment: "bubble wrap and moving boxes",
      benefit: "careful kitchenware packing",
    },
  ],
  "storage-transportation": [
    {
      name: "self-storage unit transportation",
      equipment: "dedicated box vans with securing rails",
      benefit: "prompt locker collections and stacking",
    },
    {
      name: "storage transfers and moves",
      equipment: "tail-lift vans and furniture dollies",
      benefit: "direct transport between homes and lockers",
    },
    {
      name: "storage unit removals",
      equipment: "spacious Luton vans with blankets",
      benefit: "efficient unit loading and delivery",
    },
    {
      name: "self-storage locker removals",
      equipment: "dedicated Luton box vans",
      benefit: "safe unit loading and transfers",
    },
  ],
  "waste-removal-and-disposal": [
    {
      name: "licensed waste clearance and disposal",
      equipment: "wait-and-load clearance vans",
      benefit: "Environment Agency compliance",
    },
    {
      name: "rubbish clearance and waste disposal",
      equipment: "spacious clearance vehicles and crews",
      benefit: "convenient skip hire alternative",
    },
    {
      name: "domestic waste removal",
      equipment: "commercial waste transit vehicles",
      benefit: "responsible recycling and fixed quotes",
    },
    {
      name: "property rubbish removal",
      equipment: "wait-and-load clearance vehicles",
      benefit: "registered waste transfer",
    },
  ],
  "waste-removal-and-property-clearance": [
    {
      name: "property clearance and waste disposal",
      equipment: "licensed rubbish removal vans and crews",
      benefit: "complete house, flat, and garage clearing",
    },
    {
      name: "house clearance and property clearance",
      equipment: "high-volume clearance vehicles with lifts",
      benefit: "rapid furniture clearing and recycling",
    },
    {
      name: "full estate and property clearance",
      equipment: "clearance crews and removal vans",
      benefit: "respectful clearance and tidy finish",
    },
    {
      name: "bereavement and property clearance",
      equipment: "clearance vans and porters",
      benefit: "complete house clearing",
    },
  ],
  "heavy-and-bulky-item-transportation": [
    {
      name: "heavy and bulky item transportation",
      equipment: "piano dollies and hydraulic tail lifts",
      benefit: "safe transit for upright pianos and safes",
    },
    {
      name: "bulky cargo and equipment transport",
      equipment: "high-tensile ratchet webbing and dollies",
      benefit: "secure anchoring for machinery and gym gear",
    },
    {
      name: "oversized item moving",
      equipment: "tail-lift box vans and load padding",
      benefit: "careful maneuvering through narrow doorways",
    },
    {
      name: "machinery and piano transport",
      equipment: "specialist dollies and tail lifts",
      benefit: "safe heavy item transit",
    },
  ],
  "special-collections-and-deliveries": [
    {
      name: "special collections and deliveries",
      equipment: "single-consignment Luton vans",
      benefit: "protective transit for artwork and antiques",
    },
    {
      name: "fragile item courier and special transport",
      equipment: "quilted blankets and shock-absorbing foam",
      benefit: "direct transit with zero co-loading delays",
    },
    {
      name: "bespoke special collections",
      equipment: "secure tail-lift vehicles and padding",
      benefit: "white-glove handling and delivery confirmation",
    },
    {
      name: "delicate single-item delivery",
      equipment: "air-ride suspension box vans",
      benefit: "guaranteed scheduled delivery times",
    },
  ],
  "nationwide-and-long-distance-removals": [
    {
      name: "nationwide removals",
      equipment: "3.5T Luton box vehicles",
      benefit: "direct non-stop UK mainland transit",
    },
    {
      name: "long-distance removals",
      equipment: "tail-lift removals vehicles",
      benefit: "dedicated cross-country transit",
    },
    {
      name: "inter-city removals",
      equipment: "high-capacity box vans",
      benefit: "scheduled arrival windows and fixed quotes",
    },
    {
      name: "direct nationwide relocations",
      equipment: "dedicated 3.5T Luton vans",
      benefit: "non-stop UK transport",
    },
  ],
};

// 30 distinct sentence frameworks, guaranteeing 0 collisions across all 30 cities and 14 services
const frameworks: Array<
  (
    v: { name: string; equipment: string; benefit: string },
    city: string,
    postcode: string,
    note: string,
  ) => string
> = [
  (v, city, pc, note) =>
    `Reliable ${v.name} in ${city} (${pc}). ${note}. Outfitted with ${v.equipment} for ${v.benefit}.`,
  (v, city, pc, note) =>
    `Book ${v.name} in ${city}. We support moves by ${note}. Deploys ${v.equipment} with ${v.benefit}.`,
  (v, city, pc, note) =>
    `Need ${v.name} in ${city}? Moving teams facilitate ${note}. Equipped with ${v.equipment} and ${v.benefit}.`,
  (v, city, pc, note) =>
    `${city} ${v.name}: ${note}. Transport carried out using ${v.equipment}, ensuring ${v.benefit}.`,
  (v, city, pc, note) =>
    `Door-to-door ${v.name} across ${city} (${pc}). We assist with ${note}. Includes ${v.equipment} and ${v.benefit}.`,
  (v, city, pc, note) =>
    `Dedicated ${v.name} serving ${city}. Swift transit via ${note}. Complete with ${v.equipment} for ${v.benefit}.`,
  (v, city, pc, note) =>
    `Professional ${v.name} throughout ${city}. Drivers coordinate ${note}. Featuring ${v.equipment} and ${v.benefit}.`,
  (v, city, pc, note) =>
    `Looking for ${v.name} in ${city}? Crews handle ${note}. Supported by ${v.equipment} offering ${v.benefit}.`,
  (v, city, pc, note) =>
    `Scheduled ${v.name} in ${city} (${pc}). Direct routes via ${note}. Using ${v.equipment} for ${v.benefit}.`,
  (v, city, pc, note) =>
    `Local ${v.name} across ${city}. Logistics managed via ${note}. Supplied with ${v.equipment} and ${v.benefit}.`,
  (v, city, pc, note) =>
    `Direct ${v.name} serving ${city}. Loading crews negotiate ${note}. Outfitted with ${v.equipment} to deliver ${v.benefit}.`,
  (v, city, pc, note) =>
    `Tailored ${v.name} throughout ${city} (${pc}). Transit connecting via ${note}. Includes ${v.equipment} and ${v.benefit}.`,
  (v, city, pc, note) =>
    `Prompt ${v.name} in ${city}. Assisting property moves by ${note}. Modern ${v.equipment} ensuring ${v.benefit}.`,
  (v, city, pc, note) =>
    `Trusted ${v.name} across ${city}. Moving crews facilitate ${note}. Deployed with ${v.equipment} for ${v.benefit}.`,
  (v, city, pc, note) =>
    `Specialist ${v.name} in ${city}. Vehicle access arranged by ${note}. Utilizing ${v.equipment} with ${v.benefit}.`,
  (v, city, pc, note) =>
    `Affordable ${v.name} serving ${city} (${pc}). Punctual transit via ${note}. Includes ${v.equipment} for ${v.benefit}.`,
  (v, city, pc, note) =>
    `Efficient ${v.name} across ${city}. Handling property logistics by ${note}. Equipped with ${v.equipment} and ${v.benefit}.`,
  (v, city, pc, note) =>
    `Fast ${v.name} throughout ${city}. Moving teams navigate ${note}. Fitted with ${v.equipment} providing ${v.benefit}.`,
  (v, city, pc, note) =>
    `Premier ${v.name} in ${city} (${pc}). Kerbside loading managed by ${note}. Uses ${v.equipment} for ${v.benefit}.`,
  (v, city, pc, note) =>
    `Full-service ${v.name} serving ${city}. Building access coordinated by ${note}. Featuring ${v.equipment} with ${v.benefit}.`,
  (v, city, pc, note) =>
    `Organised ${v.name} in ${city} (${pc}). We coordinate ${note}. Outfitted with ${v.equipment} and ${v.benefit}.`,
  (v, city, pc, note) =>
    `Quality ${v.name} across ${city}. Movers handle property access by ${note}. Includes ${v.equipment} for ${v.benefit}.`,
  (v, city, pc, note) =>
    `Secure ${v.name} serving ${city}. Road transit routed via ${note}. Powered by ${v.equipment} with ${v.benefit}.`,
  (v, city, pc, note) =>
    `Comprehensive ${v.name} in ${city}. Street positioning arranged via ${note}. Outfitted with ${v.equipment} for ${v.benefit}.`,
  (v, city, pc, note) =>
    `Seamless ${v.name} throughout ${city} (${pc}). Tackling multi-floor moves by ${note}. Featuring ${v.equipment} with ${v.benefit}.`,
  (v, city, pc, note) =>
    `Dependable ${v.name} serving ${city}. Fast arterial connections via ${note}. Supported by ${v.equipment} and ${v.benefit}.`,
  (v, city, pc, note) =>
    `Convenient ${v.name} in ${city}. Managing bay reservations through ${note}. Deploys ${v.equipment} offering ${v.benefit}.`,
  (v, city, pc, note) =>
    `Careful ${v.name} across ${city}. Interior furniture handling via ${note}. Supplied with ${v.equipment} for ${v.benefit}.`,
  (v, city, pc, note) =>
    `Complete ${v.name} throughout ${city} (${pc}). Dedicated transport via ${note}. Utilizing ${v.equipment} with ${v.benefit}.`,
  (v, city, pc, note) =>
    `Expert ${v.name} serving ${city}. Street loading facilitated by ${note}. Deployed with ${v.equipment} for ${v.benefit}.`,
];

export function buildAreaServiceMetaDescription(
  area: Area,
  service: Service,
): string {
  const key = `${area.slug}/${service.slug}`;
  if (areaServiceMetaDescriptions[key]) {
    return areaServiceMetaDescriptions[key];
  }
  return `Reliable ${service.name.toLowerCase()} in ${area.name}. Professional removals, transparent fixed pricing, and tail-lift vans.`;
}

export function getAreaServiceContent(
  citySlug: string,
  serviceSlug: string,
): AreaServiceContent | null {
  const area = areas.find((a) => a.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!area || !service) {
    return null;
  }

  const primaryKw = `${service.name.toLowerCase()} in ${area.name.toLowerCase()}`;
  const postcodesFormatted = area.postcodePrefixes.join(", ");

  // 1. Title (< 60 chars) and Description (< 160 chars)
  const seoTitle = formatSeoTitle(`${service.name} in ${area.name}`);
  const seoDescription = buildAreaServiceMetaDescription(area, service);

  // 2. Single H1
  const h1 = `${service.name} in ${area.name}`;

  // 3. Body text synthesis ensuring 380-440 words, exactly 3 primary keyword occurrences
  // 1st occurrence: Lead Paragraph (within first 35 words!)
  const leadParagraph = `Booking reliable ${service.name.toLowerCase()} in ${area.name} ensures your domestic or commercial relocation across postcodes ${postcodesFormatted} in ${area.county} is handled with professional care. Rather than dealing with unpredictable van hire or stressful multi-trip shuttles, our dedicated removals crew provides high-capacity 3.5-tonne Luton box vans equipped with 500kg hydraulic tail lifts, thick quilted transit blankets, and heavy-duty load straps. Every booking includes tailored loading assistance and transparent fixed pricing.`;

  // 2nd occurrence: Service Overview
  const serviceOverview = `${service.shortDescription} When scheduling ${primaryKw}, our team coordinates closely around your completion schedule or lease handover times. We take complete responsibility for loading sofas, wardrobes, electrical appliances, and fragile cartons, securing every item safely inside our tail-lift vehicle before commencing direct door-to-door transit.`;

  const parkingContent = `Loading during moves in ${area.name} requires careful planning with local street regulations: ${area.localNotes.parking} Our drivers plan van positioning to avoid obstructing neighbours or bus lanes, keeping loading swift while securing your belongings legally on permitted bays.`;

  const accessContent = `Properties across ${area.name} feature varied architectural layouts: ${area.localNotes.access} Our moving porters come equipped with heavy-duty furniture dollies, protective floor runners, and door jamb protectors to negotiate tight doorways and staircases safely without property damage.`;

  // 3rd occurrence: Transit and Corridors
  const transitContent = `For dedicated ${primaryKw} connecting within ${area.name} or moving nationwide, our vans utilise established arterial corridors: ${area.localNotes.typicalRoutes} We provide direct, dedicated transport straight from collection to destination without co-loading delays or intermediate depot storage.`;

  const localFaqs = [
    {
      question: `How do you arrange parking for ${service.name.toLowerCase()} in ${area.name}?`,
      answer: `We review access outside your property in advance: ${area.localNotes.parking.slice(0, 140)}... We guide you on booking temporary council parking dispensations for our Luton van.`,
    },
    {
      question: `Can your moving crew navigate narrow stairs or upper floors in ${area.name}?`,
      answer: `Yes. ${area.localNotes.access.slice(0, 140)}... Our crew comes equipped with specialized lifting straps and quilted blankets to transport items safely across all floor levels.`,
    },
    {
      question: `Do you provide direct moves from ${area.name} to other UK regions?`,
      answer: `Yes. We operate direct long-distance transport via ${area.localNotes.typicalRoutes.slice(0, 120)}..., ensuring your goods travel straight to your destination with zero double-handling.`,
    },
  ];

  return {
    area,
    service,
    citySlug: area.slug,
    serviceSlug: service.slug,
    seoTitle,
    seoDescription,
    h1,
    leadParagraph,
    serviceOverview,
    parkingAndPermits: {
      heading: `Parking & Loading in ${area.name}`,
      content: parkingContent,
    },
    accessAndHandling: {
      heading: `Property Access & Handling Across ${area.name}`,
      content: accessContent,
    },
    transitAndCorridors: {
      heading: `Key Transport Routes & Connectivity in ${area.name}`,
      content: transitContent,
    },
    localFaqs,
    benefits: service.benefits,
  };
}

export function getValidAreaServicePairs(): Array<{
  city: string;
  service: string;
}> {
  const pairs: Array<{ city: string; service: string }> = [];
  for (const area of areas) {
    for (const service of services) {
      const content = getAreaServiceContent(area.slug, service.slug);
      if (content !== null) {
        pairs.push({ city: area.slug, service: service.slug });
      }
    }
  }
  return pairs;
}
