import { areas } from "@/content/areas";
import { getLondonServiceContent } from "@/content/london-services";
import { services } from "@/content/services";
import { areaServiceMetaDescriptions } from "@/lib/seo/area-service-descriptions";
import { formatSeoTitle } from "@/lib/seo/metadata";
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

function getCleanSentences(text: string): string[] {
  const raw = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const seen = new Set<string>();
  const out: string[] = [];
  for (const s of raw) {
    const norm = s.toLowerCase();
    if (!seen.has(norm)) {
      seen.add(norm);
      out.push(s);
    }
  }
  return out;
}

// 5 rotating variations to eliminate structural n-gram overlap across cities
const leadWrappers = [
  (city: string) =>
    `Rather than facing the stress of multi-trip vehicle hire across ${city}, our crew supplies 3.5-tonne Luton box vans equipped with 500kg hydraulic tail lifts, padded transit blankets, and heavy-duty load straps. Every booking includes full driver-loading assistance and transparent fixed pricing with zero hidden surcharges.`,
  (city: string) =>
    `Self-drive van hire in busy urban traffic across ${city} can be challenging and time-consuming. Our professional team eliminates this hassle by providing spacious 3.5T Luton box vehicles featuring hydraulic lift gates, thick furniture quilts, and upfront guaranteed rates.`,
  (city: string) =>
    `Coordinating a move without dedicated loading assistance risks property scuffs and unnecessary physical strain. We deploy modern tail-lift removals vans across ${city} fitted with securing tie rails, protective covers, and experienced driver support.`,
  (city: string) =>
    `Managing property moves across ${city} requires dependable transport with tail-lift support. Our removal services provide high-capacity 3.5T Luton box vans equipped with floor runners, transit blankets, and heavy cargo straps for complete peace of mind.`,
  (city: string) =>
    `Avoid the exhaustion of self-managed removals shuttling across ${city}. Our team provides agile 3.5-tonne Luton vans with 500kg hydraulic lifts and two-man carrying assistance, backed by straightforward fixed tariffs.`,
];

const overviewWrappers = [
  "Our moving team coordinates around your tenancy handover or property key exchange schedule. We take complete responsibility for securing and loading your cargo, ensuring all sofas, wardrobes, electrical items, and boxed goods are strapped securely before beginning direct door-to-door transit.",
  "We coordinate closely with your completion timeline and building access hours. Our porters handle the heavy lifting of furniture, domestic white goods, and fragile containers, strapping every piece safely inside our tail-lift vehicle.",
  "Our removals crew aligns with your scheduled move window and lease deadlines. We manage the loading of bulky furniture, appliances, and cartons with great care, securing all cargo to vehicle rails before commencing transit.",
  "We plan the loading schedule around your completion time and lease handover commitments. Our experienced staff takes full care of your furniture, appliances, and cartons, fastening every load with heavy ratchet straps.",
  "Our team synchronizes with your property completion or key collection timetable. We oversee the safe transfer of large furniture, electrical items, and packed boxes, securing everything inside our box van prior to transit.",
];

const transitWrappers = [
  "We deliver direct, dedicated door-to-door transit without co-loading delays, depot stops, or double-handling.",
  "Your belongings travel non-stop on a dedicated vehicle directly from collection to destination with zero intermediate offloading.",
  "We provide single-vehicle point-to-point transport, eliminating freight consolidation delays and depot double-handling.",
  "Our vans operate non-stop dedicated transit straight from pickup to delivery, ensuring zero cargo transfers or depot holding delays.",
  "All items travel directly in a dedicated vehicle from your pickup address to your destination with zero intermediate stops.",
];

const faqAnswer1Templates = [
  (city: string) =>
    `Our operations team reviews parking restrictions outside your ${city} address beforehand. We guide you on reserving council bay suspensions or arranging resident loading dispensations for our Luton vans where permit zones apply.`,
  (city: string) =>
    `We check local kerbside regulations and access bays across ${city} prior to move day. Where Controlled Parking Zones apply, our drivers plan van positioning legally and coordinate parking dispensations.`,
  (city: string) =>
    `Our drivers assess street layout outside your property in ${city} in advance. We advise on booking temporary council parking waivers so our tail-lift vehicle has authorized kerbside space during loading.`,
  (city: string) =>
    `We inspect street access and local council restrictions across ${city} prior to arrival. Our crew coordinates parking suspensions or loading dispensations to maintain legal kerbside access.`,
  (city: string) =>
    `Our team verifies street access outside your ${city} property before dispatch. We guide you through booking council bay dispensations so our removals van loads legally without traffic obstruction.`,
];

const faqAnswer2Templates = [
  (city: string) =>
    `Yes. Our porters are trained in manual handling across multi-floor walk-ups and tight communal stairs throughout ${city}, utilizing protective floor runners and door jamb covers to ensure zero property scuffs.`,
  (city: string) =>
    `Yes. Our moving crew comes equipped with specialized lifting straps, furniture gliders, and padded covers to transport items safely across narrow staircases and upper-floor apartments in ${city}.`,
  (city: string) =>
    `Yes. We routinely handle upper-storey removals across ${city}. Our team utilizes furniture dollies, stair climbers, and neoprene banister protectors to move heavy items without scuffs or property impact.`,
  (city: string) =>
    `Yes. Our porters are equipped with heavy lifting straps, stair-climbing dollies, and padded blankets to navigate tight stairwells and upper-floor apartments in ${city} safely.`,
  (city: string) =>
    `Yes. We handle multi-storey moves across ${city} regularly, using specialized carrying straps, floor runners, and corner guards to protect walls and woodwork.`,
];

const faqAnswer3Templates = [
  (city: string) =>
    `Yes. We operate dedicated point-to-point removals departing ${city} to all mainland UK destinations. Your belongings travel on a dedicated Luton vehicle with direct same-day or scheduled delivery.`,
  (city: string) =>
    `Yes. We provide direct long-distance transport connecting ${city} to any UK region with zero depot transfers or co-loading delays.`,
  (city: string) =>
    `Yes. We handle inter-city and nationwide relocations departing ${city}. Your goods remain secure inside the same dedicated tail-lift van from pickup straight to delivery.`,
  (city: string) =>
    `Yes. We operate direct nationwide transport departing ${city} to England, Scotland, and Wales with dedicated single-load vehicles and zero freight transfers.`,
  (city: string) =>
    `Yes. We provide point-to-point long-distance removals departing ${city} across the UK mainland with scheduled delivery and dedicated vehicle security.`,
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
  const areaIndex = areas.findIndex((a) => a.slug === citySlug);
  const serviceIndex = services.findIndex((s) => s.slug === serviceSlug);

  if (areaIndex === -1 || serviceIndex === -1) {
    return null;
  }

  const area = areas[areaIndex];
  const service = services[serviceIndex];

  // Primary keyword display with properly capitalised city name
  const primaryKwDisplay = `${service.name.toLowerCase()} in ${area.name}`;
  const postcodesFormatted = area.postcodePrefixes.join(", ");
  const rot = (areaIndex * 3 + serviceIndex * 7) % 5;

  // Extract clean local notes and district reference
  const introSentences = getCleanSentences(area.intro);
  const districtSentence =
    introSentences.find(
      (s) =>
        s.includes("Whether you are relocating") ||
        s.includes("From high-rise") ||
        s.includes("across all") ||
        s.includes("conurbation"),
    ) ||
    introSentences[1] ||
    introSentences[0] ||
    "";

  const parkingSentences = getCleanSentences(area.localNotes.parking);
  const parkingSpecific = parkingSentences.slice(0, 2).join(" ");

  const accessSentences = getCleanSentences(area.localNotes.access);
  const accessSpecific = accessSentences.slice(0, 2).join(" ");

  const routeSpecific = area.localNotes.typicalRoutes.trim();

  // 1. Title (< 60 chars) and Description (< 160 chars)
  const seoTitle = formatSeoTitle(`${service.name} in ${area.name}`);
  const seoDescription = buildAreaServiceMetaDescription(area, service);

  // 2. Single H1
  const h1 = `${service.name} in ${area.name}`;

  // 3. Body text synthesis ensuring >400 words, no duplicate sentences, proper city capitalisation
  const londonSpecial =
    citySlug === "london" ? getLondonServiceContent(serviceSlug) : undefined;

  const leadParagraph = londonSpecial
    ? londonSpecial.leadParagraph
    : `Booking reliable ${primaryKwDisplay} ensures your property relocation across postcodes ${postcodesFormatted} in ${area.county} is handled by an attentive, punctual removals team. ${districtSentence} ${leadWrappers[rot](area.name)}`;

  const serviceOverview = londonSpecial
    ? londonSpecial.serviceOverview
    : `${service.shortDescription} When scheduling ${primaryKwDisplay}, ${overviewWrappers[rot]}`;

  const parkingContent = londonSpecial
    ? londonSpecial.parkingAndPermits
    : `Loading during moves in ${area.name} requires careful coordination with local street regulations. ${parkingSpecific} Our drivers assess vehicle positioning in advance, keeping loading rapid while ensuring full compliance with local council restrictions.`;

  const accessContent = londonSpecial
    ? londonSpecial.accessAndHandling
    : `Properties across ${area.name} present distinct architectural access challenges. ${accessSpecific} Our moving teams come equipped with protective floor runners, furniture dollies, and neoprene jamb protectors to navigate narrow communal hallways and stairwells without property scuffs.`;

  const transitContent = londonSpecial
    ? londonSpecial.transitAndCorridors
    : `For dedicated ${primaryKwDisplay} connecting locally or moving long-distance across the UK, our moving vans travel via established regional arteries: ${routeSpecific} ${transitWrappers[rot]}`;

  const localFaqs = londonSpecial
    ? londonSpecial.localFaqs
    : [
        {
          question: `How do you arrange parking for ${service.name.toLowerCase()} in ${area.name}?`,
          answer: faqAnswer1Templates[rot](area.name),
        },
        {
          question: `Can your team navigate narrow stairs or upper floors in ${area.name}?`,
          answer: faqAnswer2Templates[rot](area.name),
        },
        {
          question: `Do you provide direct moves from ${area.name} to other UK regions?`,
          answer: faqAnswer3Templates[rot](area.name),
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
