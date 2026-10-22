export type SearchIntent =
  | "informational"
  | "commercial"
  | "transactional"
  | "local";

export type KeywordPriority = "high" | "medium" | "low";

export interface KeywordEntry {
  keyword: string;
  intent: SearchIntent;
  targetUrl: string;
  priority: KeywordPriority;
  monthlyVolume: string; // [TODO: fill from Google Keyword Planner / Search Console]
  notes?: string;
}

export interface ServiceKeywordMap {
  serviceId: string;
  serviceName: string;
  targetUrl: string;
  primaryKeyword: KeywordEntry;
  secondaryKeywords: KeywordEntry[];
  broadTerms: KeywordEntry[];
  longTailQueries: KeywordEntry[];
  localModifierPatterns: string[];
  spellingVariants: Array<{
    term: string;
    intendedTerm: string;
    action: "monitor only, do not target in titles";
  }>;
}

export interface BroadTermMapping {
  broadTerm: string;
  targetPage: string;
  strategy: string;
  intent: SearchIntent;
  priority: KeywordPriority;
}

export const broadTermHubStrategy: BroadTermMapping[] = [
  {
    broadTerm: "removals",
    targetPage: "/",
    strategy:
      "Captured through the homepage brand authority, internal anchor links from headers/footers, and breadcrumbs rather than keyword-stuffing.",
    intent: "commercial",
    priority: "high",
  },
  {
    broadTerm: "removal company",
    targetPage: "/",
    strategy:
      "Supported by homepage entity signals, About page company details, Schema.org MovingCompany, and natural editorial copy.",
    intent: "commercial",
    priority: "high",
  },
  {
    broadTerm: "man and van",
    targetPage: "/services/man-and-van",
    strategy:
      "Targeted as the primary spoke topic with dedicated service page, van sizing specs, and local landing page spoke links.",
    intent: "transactional",
    priority: "high",
  },
  {
    broadTerm: "vans",
    targetPage: "/the-van",
    strategy:
      "Routed to the dedicated fleet specifications page with real payload, cubic volume, dimensions, and tail-lift diagrams.",
    intent: "informational",
    priority: "medium",
  },
  {
    broadTerm: "movers / crew",
    targetPage: "/pricing",
    strategy:
      "Mapped to crew tier breakdowns (driver-only, 2-man crew, 3-man crew) with hourly transparent pricing and helper options.",
    intent: "commercial",
    priority: "medium",
  },
  {
    broadTerm: "moving help / helpers",
    targetPage: "/quote",
    strategy:
      "Mapped directly to the interactive quote calculator wizard where customers choose helper levels and load assistance.",
    intent: "transactional",
    priority: "high",
  },
];

export const ukServiceKeywordMap: Record<string, ServiceKeywordMap> = {
  // 1. House Removals
  "house-removals": {
    serviceId: "house-removals",
    serviceName: "House Removals",
    targetUrl: "/services/house-removals",
    primaryKeyword: {
      keyword: "house removals",
      intent: "transactional",
      targetUrl: "/services/house-removals",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "house removals UK",
        intent: "transactional",
        targetUrl: "/services/house-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "flat removals",
        intent: "transactional",
        targetUrl: "/services/house-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "home removals",
        intent: "transactional",
        targetUrl: "/services/house-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "domestic removals",
        intent: "commercial",
        targetUrl: "/services/house-removals",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "house moving service",
        intent: "commercial",
        targetUrl: "/services/house-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "two man house removals",
        intent: "transactional",
        targetUrl: "/services/house-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "removals",
        intent: "commercial",
        targetUrl: "/",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
        notes: "Captured via homepage & services hub",
      },
    ],
    longTailQueries: [
      {
        keyword: "how much do house removals cost UK",
        intent: "informational",
        targetUrl: "/pricing",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "what size van do I need to move a 2 bed house",
        intent: "informational",
        targetUrl: "/the-van",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "house removals in {city}",
      "house removals {city}",
      "{city} house removals",
      "flat removals in {city}",
      "home removals near me",
    ],
    spellingVariants: [
      {
        term: "house removal",
        intendedTerm: "house removals",
        action: "monitor only, do not target in titles",
      },
      {
        term: "home moveing",
        intendedTerm: "home moving",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 2. Office and Commercial Removals
  "office-and-commercial-removals": {
    serviceId: "office-and-commercial-removals",
    serviceName: "Office and Commercial Removals",
    targetUrl: "/services/office-and-commercial-removals",
    primaryKeyword: {
      keyword: "office and commercial removals",
      intent: "transactional",
      targetUrl: "/services/office-and-commercial-removals",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "office removals",
        intent: "transactional",
        targetUrl: "/services/office-and-commercial-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "commercial relocations",
        intent: "commercial",
        targetUrl: "/services/office-and-commercial-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "business removals UK",
        intent: "commercial",
        targetUrl: "/services/office-and-commercial-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "weekend office relocation",
        intent: "transactional",
        targetUrl: "/services/office-and-commercial-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "commercial movers",
        intent: "commercial",
        targetUrl: "/services/office-and-commercial-removals",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "how to minimize downtime during office move",
        intent: "informational",
        targetUrl: "/services/office-and-commercial-removals",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "office removals in {city}",
      "office removals {city}",
      "commercial removals {city}",
      "business relocation {city}",
    ],
    spellingVariants: [
      {
        term: "buisness removals",
        intendedTerm: "business removals",
        action: "monitor only, do not target in titles",
      },
      {
        term: "commerical removals",
        intendedTerm: "commercial removals",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 3. Furniture Removals and Delivery
  "furniture-removals-and-delivery": {
    serviceId: "furniture-removals-and-delivery",
    serviceName: "Furniture Removals and Delivery",
    targetUrl: "/services/furniture-removals-and-delivery",
    primaryKeyword: {
      keyword: "furniture removals and delivery",
      intent: "transactional",
      targetUrl: "/services/furniture-removals-and-delivery",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "furniture collection and delivery",
        intent: "transactional",
        targetUrl: "/services/furniture-removals-and-delivery",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "furniture delivery service",
        intent: "transactional",
        targetUrl: "/services/furniture-removals-and-delivery",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "sofa delivery service",
        intent: "transactional",
        targetUrl: "/services/furniture-removals-and-delivery",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "furniture courier",
        intent: "commercial",
        targetUrl: "/services/furniture-removals-and-delivery",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "single item transport",
        intent: "commercial",
        targetUrl: "/services/furniture-removals-and-delivery",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "furniture transport",
        intent: "commercial",
        targetUrl: "/services/furniture-removals-and-delivery",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "how to transport a sofa in a van",
        intent: "informational",
        targetUrl: "/the-van",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "cost to collect and deliver a wardrobe",
        intent: "informational",
        targetUrl: "/pricing",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "furniture removals in {city}",
      "furniture delivery {city}",
      "furniture collection and delivery {city}",
      "{city} furniture courier",
    ],
    spellingVariants: [
      {
        term: "furnature delivery",
        intendedTerm: "furniture delivery",
        action: "monitor only, do not target in titles",
      },
      {
        term: "matress collection",
        intendedTerm: "mattress collection",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 4. Man and Van Services
  "man-and-van": {
    serviceId: "man-and-van",
    serviceName: "Man and Van Services",
    targetUrl: "/services/man-and-van",
    primaryKeyword: {
      keyword: "man and van",
      intent: "transactional",
      targetUrl: "/services/man-and-van",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "man and van hire",
        intent: "transactional",
        targetUrl: "/services/man-and-van",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "man with a van",
        intent: "transactional",
        targetUrl: "/services/man-and-van",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "van and driver hire",
        intent: "commercial",
        targetUrl: "/services/man-and-van",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "two men and a van",
        intent: "transactional",
        targetUrl: "/services/man-and-van",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "local man and van",
        intent: "local",
        targetUrl: "/services/man-and-van",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "van hire",
        intent: "commercial",
        targetUrl: "/services/man-and-van",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "how much does a man and van cost per hour",
        intent: "informational",
        targetUrl: "/pricing",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "same day man and van hire",
        intent: "transactional",
        targetUrl: "/services/man-and-van",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "man and van in {city}",
      "man and van {city}",
      "{city} man and van",
      "man with a van {city}",
      "man and van near me",
    ],
    spellingVariants: [
      {
        term: "man & van",
        intendedTerm: "man and van",
        action: "monitor only, do not target in titles",
      },
      {
        term: "men and van",
        intendedTerm: "man and van",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 5. Furniture Assembly and Dismantling
  "furniture-assembly-and-dismantling": {
    serviceId: "furniture-assembly-and-dismantling",
    serviceName: "Furniture Assembly and Dismantling",
    targetUrl: "/services/furniture-assembly-and-dismantling",
    primaryKeyword: {
      keyword: "furniture assembly and dismantling",
      intent: "transactional",
      targetUrl: "/services/furniture-assembly-and-dismantling",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "flat pack assembly service",
        intent: "transactional",
        targetUrl: "/services/furniture-assembly-and-dismantling",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "furniture disassembly",
        intent: "commercial",
        targetUrl: "/services/furniture-assembly-and-dismantling",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "IKEA PAX wardrobe assembly",
        intent: "transactional",
        targetUrl: "/services/furniture-assembly-and-dismantling",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "flatpack assembly",
        intent: "commercial",
        targetUrl: "/services/furniture-assembly-and-dismantling",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "do removal companies dismantle furniture",
        intent: "informational",
        targetUrl: "/faq",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "furniture assembly in {city}",
      "furniture dismantling {city}",
      "flat pack assembly {city}",
    ],
    spellingVariants: [
      {
        term: "furnature assembly",
        intendedTerm: "furniture assembly",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 6. Student and Small Moves
  "student-and-small-moves": {
    serviceId: "student-and-small-moves",
    serviceName: "Student and Small Moves",
    targetUrl: "/services/student-and-small-moves",
    primaryKeyword: {
      keyword: "student and small moves",
      intent: "transactional",
      targetUrl: "/services/student-and-small-moves",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "student removals UK",
        intent: "transactional",
        targetUrl: "/services/student-and-small-moves",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "small move service",
        intent: "commercial",
        targetUrl: "/services/student-and-small-moves",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "university room move",
        intent: "transactional",
        targetUrl: "/services/student-and-small-moves",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "student moving",
        intent: "commercial",
        targetUrl: "/services/student-and-small-moves",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "cheap student moving van between cities",
        intent: "informational",
        targetUrl: "/pricing",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "student removals in {city}",
      "student move {city}",
      "small moves {city}",
    ],
    spellingVariants: [
      {
        term: "studnet moves",
        intendedTerm: "student moves",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 7. Store Collections and Deliveries
  "store-collections-and-deliveries": {
    serviceId: "store-collections-and-deliveries",
    serviceName: "Store Collections and Deliveries",
    targetUrl: "/services/store-collections-and-deliveries",
    primaryKeyword: {
      keyword: "store collections and deliveries",
      intent: "transactional",
      targetUrl: "/services/store-collections-and-deliveries",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "IKEA collection service",
        intent: "transactional",
        targetUrl: "/services/store-collections-and-deliveries",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "B&Q collection and delivery",
        intent: "transactional",
        targetUrl: "/services/store-collections-and-deliveries",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "retail store pickup van",
        intent: "commercial",
        targetUrl: "/services/store-collections-and-deliveries",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "store collection",
        intent: "commercial",
        targetUrl: "/services/store-collections-and-deliveries",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "same day store collection van with driver",
        intent: "transactional",
        targetUrl: "/services/store-collections-and-deliveries",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "store collections in {city}",
      "IKEA delivery {city}",
      "store delivery {city}",
    ],
    spellingVariants: [
      {
        term: "stor collection",
        intendedTerm: "store collection",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 8. Appliance Removals
  "appliance-removals": {
    serviceId: "appliance-removals",
    serviceName: "Appliance Removals",
    targetUrl: "/services/appliance-removals",
    primaryKeyword: {
      keyword: "appliance removals",
      intent: "transactional",
      targetUrl: "/services/appliance-removals",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "washing machine transport",
        intent: "transactional",
        targetUrl: "/services/appliance-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "fridge freezer moving service",
        intent: "transactional",
        targetUrl: "/services/appliance-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "American fridge freezer removals",
        intent: "transactional",
        targetUrl: "/services/appliance-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "appliance delivery",
        intent: "commercial",
        targetUrl: "/services/appliance-removals",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "how to transport an American fridge upright in van",
        intent: "informational",
        targetUrl: "/faq",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "appliance removals in {city}",
      "washing machine moving {city}",
      "fridge delivery {city}",
    ],
    spellingVariants: [
      {
        term: "appliance removels",
        intendedTerm: "appliance removals",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 9. Packing and Moving Assistance
  "packing-and-moving-assistance": {
    serviceId: "packing-and-moving-assistance",
    serviceName: "Packing and Moving Assistance",
    targetUrl: "/services/packing-and-moving-assistance",
    primaryKeyword: {
      keyword: "packing and moving assistance",
      intent: "transactional",
      targetUrl: "/services/packing-and-moving-assistance",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "packing service for moving",
        intent: "transactional",
        targetUrl: "/services/packing-and-moving-assistance",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "house packing service UK",
        intent: "commercial",
        targetUrl: "/services/packing-and-moving-assistance",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "fragile packing service",
        intent: "commercial",
        targetUrl: "/services/packing-and-moving-assistance",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "packing services",
        intent: "commercial",
        targetUrl: "/services/packing-and-moving-assistance",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "how much does professional packing cost UK",
        intent: "informational",
        targetUrl: "/pricing",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "packing service in {city}",
      "removal packing {city}",
      "packing assistance {city}",
    ],
    spellingVariants: [
      {
        term: "packign service",
        intendedTerm: "packing service",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 10. Storage Transportation
  "storage-transportation": {
    serviceId: "storage-transportation",
    serviceName: "Storage Transportation",
    targetUrl: "/services/storage-transportation",
    primaryKeyword: {
      keyword: "storage transportation",
      intent: "transactional",
      targetUrl: "/services/storage-transportation",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "removals to storage",
        intent: "transactional",
        targetUrl: "/services/storage-transportation",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "self storage move in van",
        intent: "commercial",
        targetUrl: "/services/storage-transportation",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "storage unit removals UK",
        intent: "commercial",
        targetUrl: "/services/storage-transportation",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "storage movers",
        intent: "commercial",
        targetUrl: "/services/storage-transportation",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "van hire to take furniture to Big Yellow Storage",
        intent: "transactional",
        targetUrl: "/services/storage-transportation",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "storage removals in {city}",
      "storage transport {city}",
      "{city} storage movers",
    ],
    spellingVariants: [
      {
        term: "storge transport",
        intendedTerm: "storage transport",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 11. Waste Removal and Disposal
  "waste-removal-and-disposal": {
    serviceId: "waste-removal-and-disposal",
    serviceName: "Waste Removal and Disposal",
    targetUrl: "/services/waste-removal-and-disposal",
    primaryKeyword: {
      keyword: "waste removal and disposal",
      intent: "transactional",
      targetUrl: "/services/waste-removal-and-disposal",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "property clearance",
        intent: "transactional",
        targetUrl: "/services/waste-removal-and-disposal",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "house clearance UK",
        intent: "transactional",
        targetUrl: "/services/waste-removal-and-disposal",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "rubbish clearance van",
        intent: "transactional",
        targetUrl: "/services/waste-removal-and-disposal",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "licensed waste carrier",
        intent: "commercial",
        targetUrl: "/services/waste-removal-and-disposal",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "garage clearance",
        intent: "commercial",
        targetUrl: "/services/waste-removal-and-disposal",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "unwanted furniture disposal",
        intent: "commercial",
        targetUrl: "/services/waste-removal-and-disposal",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "waste collection",
        intent: "commercial",
        targetUrl: "/services/waste-removal-and-disposal",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "rubbish removal",
        intent: "commercial",
        targetUrl: "/services/waste-removal-and-disposal",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "man and van rubbish clearance vs skip hire",
        intent: "informational",
        targetUrl: "/services/waste-removal-and-disposal",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "how to get rid of an old mattress and sofa",
        intent: "informational",
        targetUrl: "/faq",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "waste removal in {city}",
      "property clearance {city}",
      "house clearance {city}",
      "rubbish clearance {city}",
      "rubbish removal near me",
    ],
    spellingVariants: [
      {
        term: "rubish removal",
        intendedTerm: "rubbish removal",
        action: "monitor only, do not target in titles",
      },
      {
        term: "proprety clearance",
        intendedTerm: "property clearance",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 12. Heavy and Bulky Item Transportation
  "heavy-and-bulky-item-transportation": {
    serviceId: "heavy-and-bulky-item-transportation",
    serviceName: "Heavy and Bulky Item Transportation",
    targetUrl: "/services/heavy-and-bulky-item-transportation",
    primaryKeyword: {
      keyword: "heavy and bulky item transportation",
      intent: "transactional",
      targetUrl: "/services/heavy-and-bulky-item-transportation",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "piano removals UK",
        intent: "transactional",
        targetUrl: "/services/heavy-and-bulky-item-transportation",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "gym equipment transport",
        intent: "transactional",
        targetUrl: "/services/heavy-and-bulky-item-transportation",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "tail lift van hire for heavy items",
        intent: "commercial",
        targetUrl: "/services/heavy-and-bulky-item-transportation",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "heavy item transport",
        intent: "commercial",
        targetUrl: "/services/heavy-and-bulky-item-transportation",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "how to move an upright piano safely",
        intent: "informational",
        targetUrl: "/faq",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "heavy item transport in {city}",
      "piano removals {city}",
      "bulky item delivery {city}",
    ],
    spellingVariants: [
      {
        term: "paino removals",
        intendedTerm: "piano removals",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 13. Special Collections and Deliveries
  "special-collections-and-deliveries": {
    serviceId: "special-collections-and-deliveries",
    serviceName: "Special Collections and Deliveries",
    targetUrl: "/services/special-collections-and-deliveries",
    primaryKeyword: {
      keyword: "special collections and deliveries",
      intent: "transactional",
      targetUrl: "/services/special-collections-and-deliveries",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "antique furniture transport",
        intent: "transactional",
        targetUrl: "/services/special-collections-and-deliveries",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "auction house collection service",
        intent: "transactional",
        targetUrl: "/services/special-collections-and-deliveries",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "fine art courier UK",
        intent: "commercial",
        targetUrl: "/services/special-collections-and-deliveries",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "exhibition stand transport",
        intent: "commercial",
        targetUrl: "/services/special-collections-and-deliveries",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "specialist courier",
        intent: "commercial",
        targetUrl: "/services/special-collections-and-deliveries",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "dedicated van for trade show exhibition delivery",
        intent: "transactional",
        targetUrl: "/services/special-collections-and-deliveries",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "special collections in {city}",
      "antique delivery {city}",
      "auction pickup {city}",
    ],
    spellingVariants: [
      {
        term: "anteeq transport",
        intendedTerm: "antique transport",
        action: "monitor only, do not target in titles",
      },
    ],
  },

  // 14. Nationwide and Long-Distance Removals
  "nationwide-and-long-distance-removals": {
    serviceId: "nationwide-and-long-distance-removals",
    serviceName: "Nationwide and Long-Distance Removals",
    targetUrl: "/services/nationwide-and-long-distance-removals",
    primaryKeyword: {
      keyword: "nationwide and long-distance removals",
      intent: "transactional",
      targetUrl: "/services/nationwide-and-long-distance-removals",
      priority: "high",
      monthlyVolume:
        "[TODO: fill from Google Keyword Planner / Search Console]",
    },
    secondaryKeywords: [
      {
        keyword: "long distance removals UK",
        intent: "transactional",
        targetUrl: "/services/nationwide-and-long-distance-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "nationwide removals company",
        intent: "commercial",
        targetUrl: "/services/nationwide-and-long-distance-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "cross country moving service",
        intent: "transactional",
        targetUrl: "/services/nationwide-and-long-distance-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "intercity man and van",
        intent: "transactional",
        targetUrl: "/services/nationwide-and-long-distance-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    broadTerms: [
      {
        keyword: "long distance movers",
        intent: "commercial",
        targetUrl: "/services/nationwide-and-long-distance-removals",
        priority: "medium",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    longTailQueries: [
      {
        keyword: "how much do nationwide removals cost in the UK",
        intent: "informational",
        targetUrl: "/pricing",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
      {
        keyword: "direct door to door removals London to Manchester",
        intent: "transactional",
        targetUrl: "/services/nationwide-and-long-distance-removals",
        priority: "high",
        monthlyVolume:
          "[TODO: fill from Google Keyword Planner / Search Console]",
      },
    ],
    localModifierPatterns: [
      "nationwide removals from {city}",
      "long distance removals {city}",
      "intercity removals {city}",
    ],
    spellingVariants: [
      {
        term: "nation wide removals",
        intendedTerm: "nationwide removals",
        action: "monitor only, do not target in titles",
      },
    ],
  },
};
