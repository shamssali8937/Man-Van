import { areas } from "@/content/areas";
import { services } from "@/content/services";
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

const serviceShortNames: Record<string, string> = {
  "house-removals": "House Removals",
  "man-and-van": "Man & Van",
  "furniture-collection-and-delivery": "Furniture Delivery",
  "office-and-commercial-removals": "Office Removals",
  "furniture-dismantling-and-assembly": "Furniture Assembly",
  "waste-removal-and-property-clearance": "Waste Clearance",
};

/**
 * Generate genuinely unique, localized content for a specific City + Service pairing.
 * Returns null if the combination does not have sufficient content, ensuring the page
 * returns notFound() and is excluded from the sitemap.
 */
export function getAreaServiceContent(
  citySlug: string,
  serviceSlug: string,
): AreaServiceContent | null {
  const area = areas.find((a) => a.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!area || !service) {
    return null;
  }

  // Check content sufficiency: must have detailed local notes and service core data
  if (
    !area.localNotes?.parking ||
    !area.localNotes?.access ||
    !area.localNotes?.typicalRoutes ||
    !service.description ||
    !service.benefits ||
    service.benefits.length === 0
  ) {
    return null;
  }

  const shortName = serviceShortNames[service.slug] || service.name;
  const postcodesFormatted = area.postcodePrefixes.join(", ");

  // 1. Unique SEO Title (< 60 chars) and Description (< 160 chars)
  const seoTitle = formatSeoTitle(`${shortName} in ${area.name}`);
  const seoDescription = formatSeoDescription(
    `Reliable ${shortName.toLowerCase()} in ${area.name} (${postcodesFormatted}). Luton vans, professional crew, transparent quotes & prompt door-to-door transit.`,
  );

  // 2. Unique H1
  const h1 = `${service.name} in ${area.name}`;

  // 3. Service & Location Specific Synthesis
  let leadParagraph = "";
  let serviceOverview = "";
  let parkingContent = "";
  let accessContent = "";
  let transitContent = "";
  let localFaqs: Array<{ question: string; answer: string }> = [];

  switch (service.slug) {
    case "house-removals":
      leadParagraph = `Relocating home in ${area.name} calls for dependable logistics, punctual loading teams, and protective vehicle equipment tailored to ${area.county}. Whether moving from a terraced townhouse, a contemporary apartment block, or a multi-storey family residence across postcodes ${postcodesFormatted}, our professional removal crews manage your entire property transition with complete care and transparent fixed pricing.`;
      serviceOverview = `Our house removals operation in ${area.name} deploys fully equipped 3.5-tonne Luton box vans featuring 500kg hydraulic tail lifts, commercial transit blankets, and heavy-duty load straps. We coordinate seamlessly around your property key completion schedule, ensuring your sofas, bedroom furniture, appliances, and fragile cartons arrive safely and are placed in your exact rooms of choice.`;
      parkingContent = `Loading during house removals in ${area.name} requires careful coordination with local street regulations. ${area.localNotes.parking}. Our drivers plan van positioning to avoid obstructing neighbours, keeping transit swift while securing your belongings on residential bays.`;
      accessContent = `Homes throughout ${area.name} feature varied architectural layouts: ${area.localNotes.access}. Our experienced two-man and three-man teams are equipped with furniture dollies, protective floor runners, and door jamb protectors to negotiate tight doorways and stairs safely.`;
      transitContent = `For moves within ${area.name} or relocations connecting to destinations nationwide, our vans utilise established arterial corridors: ${area.localNotes.typicalRoutes}. We provide direct door-to-door transit without depot storage delays.`;
      localFaqs = [
        {
          question: `How do you arrange parking for house removals in ${area.name}?`,
          answer: `We recommend reviewing parking outside your property in advance. ${area.localNotes.parking}. We assist with guidance on booking temporary council dispensations for our Luton removal van.`,
        },
        {
          question: `Can your team navigate narrow stairs or upper flats in ${area.name}?`,
          answer: `Yes. ${area.localNotes.access}. Our moving crew comes prepared with specialized lifting straps and blankets to transport heavy items safely across multi-floor properties.`,
        },
        {
          question: `Do you provide direct moves from ${area.name} to other UK regions?`,
          answer: `Yes. We operate direct long-distance journeys via ${area.localNotes.typicalRoutes}, ensuring your household possessions travel straight from your doorstep to your destination without double-handling.`,
        },
      ];
      break;

    case "man-and-van":
      leadParagraph = `Need a flexible, cost-effective man and van service in ${area.name}? Ideal for flat moves, student relocations, room transfers, and urgent cargo across ${postcodesFormatted}, our service pairs agile Luton and long-wheelbase vans with experienced, hardworking drivers and porters.`;
      serviceOverview = `Our man and van service in ${area.name} gives you the choice between driver-only transport and working two-man loading assistance. Unlike oversized commercial haulage lorries, our agile vehicles navigate urban streets, cul-de-sacs, and restrictive residential zones with ease, ensuring prompt loading and direct delivery.`;
      parkingContent = `Kerbside access in ${area.name} is key for swift loading: ${area.localNotes.parking}. Our compact vehicle profile allows faster positioning in permitted spaces and loading bays without unnecessary delay.`;
      accessContent = `Moving into or out of properties across ${area.name} often involves unique building challenges: ${area.localNotes.access}. Our porters are trained in safely maneuvering bulky furniture through tight interior spaces without damaging walls or banisters.`;
      transitContent = `Whether delivering across town in ${area.name} or heading nationwide, we leverage key local road connections: ${area.localNotes.typicalRoutes}. We ensure direct, dedicated journeys with zero shared-load confusion.`;
      localFaqs = [
        {
          question: `Can I book a man and van for short notice or same-day moves in ${area.name}?`,
          answer: `Yes, subject to van schedule availability across ${postcodesFormatted}. Contact us by phone or quote form for rapid booking dispatch.`,
        },
        {
          question: `How do your vans handle local traffic and emission zones around ${area.name}?`,
          answer: `Our modern fleet adheres to UK Clean Air and emission regulations. We utilise primary corridors like ${area.localNotes.typicalRoutes} to maintain efficient journey times.`,
        },
        {
          question: `Can one passenger travel in the van cab from ${area.name}?`,
          answer: `Yes, subject to seat availability in the front cab, one passenger can ride alongside our driver at no additional cost.`,
        },
      ];
      break;

    case "furniture-collection-and-delivery":
      leadParagraph = `Transporting bulky furniture across ${area.name} has never been simpler. From sofa collections at retail outlets and flat-pack pickups to purchases on Facebook Marketplace, Gumtree, or eBay, we provide prompt, protective delivery across postcodes ${postcodesFormatted}.`;
      serviceOverview = `Our furniture courier team provides door-to-door and room-of-choice delivery throughout ${area.name}. We wrap tables, sofas, mattresses, and wardrobes in heavy quilted removal pads and secure them with ratchet straps inside our tail-lift vans, guaranteeing zero transit abrasions.`;
      parkingContent = `Collecting furniture in ${area.name} often means stopping at busy town centres or residential streets: ${area.localNotes.parking}. We coordinate collection windows with sellers and retailers to ensure seamless loading.`;
      accessContent = `Getting large furniture items inside properties in ${area.name} can present hurdles: ${area.localNotes.access}. Our crew carries your pieces directly into your desired room rather than leaving them at the kerbside.`;
      transitContent = `Our delivery routes connect ${area.name} retail hubs, self-storage facilities, and homes via: ${area.localNotes.typicalRoutes}. We offer precise collection windows and pre-arrival calls.`;
      localFaqs = [
        {
          question: `Will you collect furniture directly from sellers or stores in ${area.name}?`,
          answer: `Yes. Provide us the collection address in ${area.name} and seller details; we will liaise to agree a convenient collection slot and deliver straight to your room.`,
        },
        {
          question: `Do you bring sofas and wardrobes up stairs in ${area.name} properties?`,
          answer: `Yes. We provide two-man room-of-choice placement, taking care of stairs and landings as long as dimensions allow safe passage.`,
        },
        {
          question: `Can you collect multiple furniture pieces from different locations?`,
          answer: `Yes, we can arrange multi-stop collections across ${area.name} and nearby districts before heading to your final delivery address.`,
        },
      ];
      break;

    case "office-and-commercial-removals":
      leadParagraph = `Relocating your business, branch, or workspace in ${area.name}? Our commercial removals team delivers structured, time-sensitive relocations across ${area.county} designed to keep operational downtime to an absolute minimum.`;
      serviceOverview = `From corporate suites and creative studios to retail stock rooms across postcodes ${postcodesFormatted}, we transport desks, ergonomic seating, boardroom tables, archive crates, and sensitive IT equipment with full transit cover and methodical asset grouping.`;
      parkingContent = `Commercial building logistics in ${area.name} often involve designated service bays or time-restricted loading: ${area.localNotes.parking}. We coordinate with building management and security for approved loading times.`;
      accessContent = `Workplace access in ${area.name} varies from modern commercial towers to converted historic premises: ${area.localNotes.access}. We provide protective lift covers, floor protection, and heavy skateboards to move assets swiftly.`;
      transitContent = `We ensure rapid transit between commercial hubs and regional business corridors via: ${area.localNotes.typicalRoutes}. Out-of-hours, evening, and weekend scheduling is available to protect trading hours.`;
      localFaqs = [
        {
          question: `Can commercial office moves in ${area.name} be scheduled over the weekend?`,
          answer: `Yes. We regularly undertake office relocations on Friday evenings and weekends so your team can resume business on Monday morning without disruption.`,
        },
        {
          question: `How is sensitive IT hardware protected during transport in ${area.name}?`,
          answer: `Computer monitors, PCs, and servers are wrapped in protective bubble blankets, packed into durable security crates, and secured firmly inside our Luton vans.`,
        },
        {
          question: `Do you provide VAT invoices and insurance documentation for corporate accounts?`,
          answer: `Yes. We supply itemized business invoices, Goods in Transit documentation, and risk assessment notes for commercial property management.`,
        },
      ];
      break;

    case "furniture-dismantling-and-assembly":
      leadParagraph = `Oversized wardrobes, ottoman beds, and complex flat-pack furniture often cannot navigate through tight residential doorways or spiral stairs in ${area.name}. Our skilled dismantling and reassembly service provides the stress-free solution.`;
      serviceOverview = `Equipped with professional cordless drivers, hex kits, and torque tools, our technicians systematically take down large furniture items before transport and reconstruct them securely in your destination room in ${area.name}, ensuring level placement and solid joints.`;
      parkingContent = `Because dismantling takes place directly on-site before loading: ${area.localNotes.parking}. Our team works efficiently to minimize vehicle dwell time outside your premises.`;
      accessContent = `Older or compact properties across ${area.name} frequently demand furniture disassembly: ${area.localNotes.access}. Dismantling items prevents doorway scuffs, wall damage, and joint strain.`;
      transitContent = `Dismantled components are neatly bundled with protective pads and transported securely across ${area.name} via: ${area.localNotes.typicalRoutes}. All fixings, bolts, and cam-locks are kept safely organized in labelled pouches.`;
      localFaqs = [
        {
          question: `Can you dismantle and rebuild IKEA PAX wardrobes in ${area.name}?`,
          answer: `Yes. Our crew has vast experience with PAX systems, MALM frames, and modular dining suites, ensuring complete reassembly at your destination.`,
        },
        {
          question: `Do I need to provide tools or hardware fixings?`,
          answer: `No. Our technicians arrive with complete commercial toolsets. We safeguard all original bolts and dowels throughout transit.`,
        },
        {
          question: `Can this service be booked alongside our removal in ${area.name}?`,
          answer: `Yes, you can add furniture dismantling and assembly to any house removal or man and van booking across ${postcodesFormatted}.`,
        },
      ];
      break;

    case "waste-removal-and-property-clearance":
      leadParagraph = `Looking for responsible, hassle-free waste removal or property clearance in ${area.name}? Skip the hassle of council skip permits and heavy lifting. Our licensed clearance teams clear unwanted household furniture, clutter, and office debris across ${postcodesFormatted}.`;
      serviceOverview = `We carry unwanted items directly from your garage, attic, upper-floor flat, or garden shed in ${area.name}, loading them straight into our clearance vans. All materials are transported to authorized commercial waste transfer stations and recycling facilities in compliance with UK waste duty of care.`;
      parkingContent = `Skip hire in ${area.name} often requires costly public highway permits and reserved parking bays: ${area.localNotes.parking}. Our wait-and-load van clearance avoids skip license fees and driveway obstruction.`;
      accessContent = `Clearing bulky items from properties in ${area.name} requires careful physical handling: ${area.localNotes.access}. Our team handles all heavy lifting, carrying, and sweeps the area clean before departure.`;
      transitContent = `Clearance loads are transported directly to licensed recycling facilities via: ${area.localNotes.typicalRoutes}. We divert reusable furniture to local community reuse channels whenever possible.`;
      localFaqs = [
        {
          question: `Are you a registered waste carrier operating in ${area.name}?`,
          answer: `Yes. We operate under Environment Agency waste regulations and dispose of all items at licensed commercial transfer stations.`,
        },
        {
          question: `Why is your clearance service better than hiring a skip in ${area.name}?`,
          answer: `Unlike skip hire, our team does all the heavy carrying from your property, eliminates skip road permits in ${area.name}, and leaves the premises broom-swept.`,
        },
        {
          question: `What items are excluded from clearance in ${area.name}?`,
          answer: `We cannot accept hazardous substances such as raw chemicals, asbestos, loose paint tins, motor oils, or medical clinical waste.`,
        },
      ];
      break;

    default:
      return null;
  }

  // Double check minimum word count to guarantee high-quality unique copy
  const faqText = localFaqs.map((f) => `${f.question} ${f.answer}`).join(" ");
  const fullText = `${leadParagraph} ${serviceOverview} ${parkingContent} ${accessContent} ${transitContent} ${faqText}`;
  const totalWords = fullText.trim().split(/\s+/).length;
  if (totalWords < 200) {
    return null;
  }

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

/**
 * Returns all valid (city, service) slug pairs that satisfy the unique content criteria.
 * Used by generateStaticParams and sitemap generator.
 */
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
