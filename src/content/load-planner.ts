/**
 * Commercial Load Planner Content Layer
 * Defines furniture items, estimated volumes in cubic metres (m³),
 * categories, vehicle capacities, and crew recommendation heuristics.
 *
 * NOTE ON ESTIMATES:
 * Volume values are commercial averages used across the UK removals industry
 * for estimating load requirements in a standard 3.5-tonne Luton Box Van (~19 m³).
 * These figures are operational planning estimates and do not represent
 * binding cargo measurements or guaranteed payload allowances.
 */

export interface PlannerItem {
  id: string;
  name: string;
  category: "bedroom" | "living" | "kitchen" | "office" | "boxes" | "outdoor";
  volumeM3: number; // Volume in cubic metres (estimate)
  description?: string;
  isHeavyOrBulky?: boolean;
}

export interface ItemCategory {
  id: PlannerItem["category"];
  label: string;
}

export const ITEM_CATEGORIES: ItemCategory[] = [
  { id: "bedroom", label: "Bedroom" },
  { id: "living", label: "Living Room" },
  { id: "kitchen", label: "Kitchen & Dining" },
  { id: "office", label: "Office & Study" },
  { id: "boxes", label: "Boxes & Packing" },
  { id: "outdoor", label: "Outdoor & Other" },
];

/**
 * Standard 3.5t Mercedes-Benz Sprinter Luton Box Van Cargo Dimensions:
 * Length: 4.1m | Width: 2.05m | Height: 2.2m | Useful Cargo Volume: ~19.0 m³ (670 cu ft)
 * Maximum payload allowance: ~1,000 kg with 500 kg hydraulic tail lift.
 */
export const LUTON_VAN_CAPACITY_M3 = 19.0;

export const PLANNER_ITEMS: PlannerItem[] = [
  // Bedroom
  {
    id: "single-bed",
    name: "Single Bed (with mattress)",
    category: "bedroom",
    volumeM3: 1.2,
    description: "Frame and standard single mattress",
  },
  {
    id: "double-bed",
    name: "Double / King Bed",
    category: "bedroom",
    volumeM3: 1.8,
    description: "Standard 4ft6 or 5ft bed frame & mattress",
    isHeavyOrBulky: true,
  },
  {
    id: "single-mattress",
    name: "Extra Mattress (Single/Double)",
    category: "bedroom",
    volumeM3: 0.5,
    description: "Standalone mattress wrapped for transit",
  },
  {
    id: "wardrobe",
    name: "Wardrobe (2-door)",
    category: "bedroom",
    volumeM3: 1.6,
    description: "Standard free-standing double wardrobe",
    isHeavyOrBulky: true,
  },
  {
    id: "chest-of-drawers",
    name: "Chest of Drawers",
    category: "bedroom",
    volumeM3: 0.8,
    description: "3 to 5 drawer chest",
  },
  {
    id: "bedside-table",
    name: "Bedside Table / Nightstand",
    category: "bedroom",
    volumeM3: 0.25,
    description: "Small bedside unit",
  },

  // Living Room
  {
    id: "sofa-2-seater",
    name: "Sofa (2-Seater)",
    category: "living",
    volumeM3: 1.5,
    description: "Standard 2-person fabric or leather couch",
    isHeavyOrBulky: true,
  },
  {
    id: "sofa-3-seater",
    name: "Sofa (3-Seater / Corner Section)",
    category: "living",
    volumeM3: 2.2,
    description: "Large 3-seat sofa or L-shape modular section",
    isHeavyOrBulky: true,
  },
  {
    id: "armchair",
    name: "Armchair",
    category: "living",
    volumeM3: 0.8,
    description: "Single-person upholstered armchair",
  },
  {
    id: "coffee-table",
    name: "Coffee Table",
    category: "living",
    volumeM3: 0.4,
    description: "Low living room coffee or side table",
  },
  {
    id: "tv-unit",
    name: "TV & Entertainment Unit",
    category: "living",
    volumeM3: 0.7,
    description: "Media bench, stand, and boxed television",
  },
  {
    id: "bookcase",
    name: "Bookcase / Shelving Unit",
    category: "living",
    volumeM3: 0.9,
    description: "Upright open shelving bookcase",
  },

  // Kitchen & Dining
  {
    id: "dining-table",
    name: "Dining Table",
    category: "kitchen",
    volumeM3: 1.1,
    description: "Standard 4-to-6 seater table",
    isHeavyOrBulky: true,
  },
  {
    id: "dining-chairs",
    name: "Dining Chairs (pair)",
    category: "kitchen",
    volumeM3: 0.4,
    description: "Two stackable or nestable chairs",
  },
  {
    id: "fridge-freezer",
    name: "Fridge-Freezer (Tall)",
    category: "kitchen",
    volumeM3: 1.2,
    description: "Upright domestic fridge-freezer unit",
    isHeavyOrBulky: true,
  },
  {
    id: "washing-machine",
    name: "Washing Machine / Dryer",
    category: "kitchen",
    volumeM3: 0.6,
    description: "Standard 60cm under-counter appliance",
    isHeavyOrBulky: true,
  },
  {
    id: "microwave-kitchenware",
    name: "Small Appliance Bundle",
    category: "kitchen",
    volumeM3: 0.3,
    description: "Microwave, kettle, toaster, & air-fryer",
  },

  // Office & Study
  {
    id: "desk",
    name: "Workstation Desk",
    category: "office",
    volumeM3: 0.8,
    description: "Standard home or office writing desk",
  },
  {
    id: "office-chair",
    name: "Ergonomic Office Chair",
    category: "office",
    volumeM3: 0.4,
    description: "Swivel chair with armrests",
  },
  {
    id: "filing-cabinet",
    name: "Filing Cabinet",
    category: "office",
    volumeM3: 0.5,
    description: "Metal or wooden 2-drawer document cabinet",
  },

  // Boxes & Packing
  {
    id: "box-small",
    name: "Box (Small / Books)",
    category: "boxes",
    volumeM3: 0.06,
    description: "Heavy items, books, glassware (~35x35x35cm)",
  },
  {
    id: "box-medium",
    name: "Box (Medium / General)",
    category: "boxes",
    volumeM3: 0.1,
    description: "Pantry items, clothing, toys (~45x45x50cm)",
  },
  {
    id: "box-large",
    name: "Box (Large / Bedding)",
    category: "boxes",
    volumeM3: 0.16,
    description: "Linen, cushions, duvets, coats (~50x50x65cm)",
  },
  {
    id: "suitcase",
    name: "Suitcase / Travel Bag",
    category: "boxes",
    volumeM3: 0.12,
    description: "Standard large luggage bag",
  },

  // Outdoor & Bulky
  {
    id: "bicycle",
    name: "Bicycle / E-Bike",
    category: "outdoor",
    volumeM3: 0.5,
    description: "Adult pushbike or commuter cycle",
  },
  {
    id: "garden-furniture",
    name: "Garden Chairs / Bench",
    category: "outdoor",
    volumeM3: 0.6,
    description: "Foldable patio set or wooden garden bench",
  },
];

/**
 * Calculates total volume, van fill percentage, and recommended crew helpers.
 */
export function calculateLoadMetrics(quantities: Record<string, number>) {
  let totalVolumeM3 = 0;
  let totalItemsCount = 0;
  let hasHeavyItems = false;

  for (const item of PLANNER_ITEMS) {
    const qty = quantities[item.id] || 0;
    if (qty > 0) {
      totalVolumeM3 += item.volumeM3 * qty;
      totalItemsCount += qty;
      if (item.isHeavyOrBulky) {
        hasHeavyItems = true;
      }
    }
  }

  // Rounded to one decimal place
  totalVolumeM3 = Math.round(totalVolumeM3 * 10) / 10;
  const rawFillPercent = (totalVolumeM3 / LUTON_VAN_CAPACITY_M3) * 100;
  const vanFillPercentage = Math.round(rawFillPercent);

  // Suggested helpers heuristic
  let suggestedHelpersKey:
    | "driver_only"
    | "1_helper"
    | "2_helpers"
    | "3_helpers" = "driver_only";
  let suggestedHelpersLabel = "Driver Only (Self-load)";

  if (totalVolumeM3 === 0) {
    suggestedHelpersKey = "driver_only";
    suggestedHelpersLabel = "Driver Only (Self-load)";
  } else if (totalVolumeM3 <= 4.0 && !hasHeavyItems) {
    suggestedHelpersKey = "driver_only";
    suggestedHelpersLabel = "Driver Only (Self-load)";
  } else if (totalVolumeM3 <= 8.5) {
    suggestedHelpersKey = "1_helper";
    suggestedHelpersLabel = "Driver + 1 Helper (Recommended)";
  } else if (totalVolumeM3 <= 15.0) {
    suggestedHelpersKey = "2_helpers";
    suggestedHelpersLabel = "Two-Man Crew (Standard Moving Team)";
  } else {
    suggestedHelpersKey = "3_helpers";
    suggestedHelpersLabel = "Three-Man Crew (Large Move / Fast Turnaround)";
  }

  return {
    totalVolumeM3,
    totalItemsCount,
    vanFillPercentage,
    rawFillPercent,
    suggestedHelpersKey,
    suggestedHelpersLabel,
    hasHeavyItems,
  };
}

export const PLANNER_DISCLAIMER =
  "ESTIMATE ONLY: Volume calculations and vehicle fill percentages are automated operational estimates based on standard UK removals item averages. Real-world stowage depends on dismantleability, box stacking, and cargo shape. This calculator does not constitute a legally binding quote or guaranteed cargo limit.";
