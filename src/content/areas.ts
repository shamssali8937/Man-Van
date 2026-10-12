import type { Area } from "@/types";

export const areas: Area[] = [
  {
    id: "london",
    slug: "london",
    name: "London",
    county: "Greater London",
    postcodePrefixes: ["E", "EC", "N", "NW", "SE", "SW", "W", "WC"],
    description:
      "Reliable removals and man and van services covering Greater London and surrounding districts.",
  },
  {
    id: "manchester",
    slug: "manchester",
    name: "Manchester",
    county: "Greater Manchester",
    postcodePrefixes: ["M"],
    description:
      "Domestic and commercial removals operating across Manchester and the North West region.",
  },
  {
    id: "birmingham",
    slug: "birmingham",
    name: "Birmingham",
    county: "West Midlands",
    postcodePrefixes: ["B"],
    description:
      "Prompt man and van and house removals across Birmingham and the West Midlands.",
  },
  {
    id: "leeds",
    slug: "leeds",
    name: "Leeds",
    county: "West Yorkshire",
    postcodePrefixes: ["LS"],
    description:
      "Professional furniture collection, deliveries, and removals across Leeds and West Yorkshire.",
  },
];
