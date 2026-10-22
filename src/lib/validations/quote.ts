import { z } from "zod";

// UK Postcode regex pattern (handles standard UK formats: e.g. SW1A 1AA, M1 1AE, B33 8TH, EC1A 1BB, with or without space)
export const UK_POSTCODE_REGEX = /^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i;

// UK Phone regex pattern (accepts +44 or 0 prefix, landline or mobile with optional spaces/dashes)
export const UK_PHONE_REGEX = /^(?:(?:\+44\s?(?:\(0\)\s?)?)|0)(?:\s*\d){9,10}$/;

export const HELPER_OPTIONS = [
  {
    value: "driver_assistance",
    label: "Van with Driver Assistance",
  },
  {
    value: "two_person",
    label: "Van with Two-Person Moving Team",
  },
  {
    value: "three_person",
    label: "Van with Three-Person Moving Team (Complete Team)",
  },
] as const;

export const PROPERTY_TYPE_OPTIONS = [
  { value: "flat_lift", label: "Flat / Apartment (Lift Access Available)" },
  { value: "flat_stairs", label: "Flat / Apartment (Stairs Only)" },
  { value: "ground_floor", label: "Ground Floor Flat / Bungalow" },
  { value: "terraced", label: "Terraced House" },
  { value: "semi_detached", label: "Semi-Detached House" },
  { value: "detached", label: "Detached House (3+ Bed)" },
  {
    value: "office_commercial",
    label: "Commercial Office / Business Premises",
  },
  { value: "storage_unit", label: "Self-Storage Facility" },
  { value: "student_room", label: "Student Accommodation / Single Room" },
  { value: "other", label: "Other / Multiple Properties" },
] as const;

export const SERVICE_TYPE_OPTIONS = [
  { value: "house-removals", label: "House Removals/Flat Removals" },
  {
    value: "office-and-commercial-removals",
    label: "Office and Commercial Removals",
  },
  {
    value: "furniture-removals-and-delivery",
    label: "Furniture Removals and Delivery",
  },
  { value: "man-and-van", label: "Man and Van Services" },
  {
    value: "furniture-assembly-and-dismantling",
    label: "Furniture Assembly and Dismantling",
  },
  { value: "student-and-small-moves", label: "Student and Small Moves" },
  {
    value: "store-collections-and-deliveries",
    label: "Store Collections and Deliveries",
  },
  { value: "appliance-removals", label: "Appliance Removals" },
  {
    value: "packing-and-moving-assistance",
    label: "Packing and Moving Assistance",
  },
  { value: "storage-transportation", label: "Storage Transportation" },
  {
    value: "waste-removal-and-disposal",
    label: "Waste Removal and Disposal",
  },
  {
    value: "heavy-and-bulky-item-transportation",
    label: "Heavy and Bulky Item Transportation",
  },
  {
    value: "special-collections-and-deliveries",
    label: "Special Collections and Deliveries",
  },
  {
    value: "nationwide-and-long-distance-removals",
    label: "Nationwide and Long-Distance Removals",
  },
] as const;

/**
 * Validates that a date string (YYYY-MM-DD) is not in the past.
 * Permits moves scheduled for today or any future date.
 */
export function isDateTodayOrFuture(dateString: string): boolean {
  if (!dateString) return false;

  const now = new Date();
  const localYear = now.getFullYear();
  const localMonth = String(now.getMonth() + 1).padStart(2, "0");
  const localDay = String(now.getDate()).padStart(2, "0");
  const localToday = `${localYear}-${localMonth}-${localDay}`;
  const utcToday = now.toISOString().split("T")[0];

  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    // Valid if today or future in either local or UTC timezone
    return dateString >= localToday || dateString >= utcToday;
  }

  const selected = new Date(dateString);
  if (Number.isNaN(selected.getTime())) return false;
  selected.setHours(23, 59, 59, 999);
  return selected >= now;
}

export const plannerItemSummarySchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number().int().nonnegative(),
  volumeM3: z.number().nonnegative(),
});

export const plannerSummarySchema = z.object({
  items: z.array(plannerItemSummarySchema),
  totalVolumeM3: z.number().nonnegative(),
  vanFillPercentage: z.number().nonnegative(),
  suggestedHelpers: z.string(),
  summaryText: z.string().optional(),
});

export interface VanOption {
  id: string;
  name: string;
  shortName: string;
  image: string;
  imageAlt: string;
  volume?: string;
  payload?: string;
  dimensions?: string;
  badge?: string;
  description?: string;
  recommendedCrew?: string;
}

export const VAN_OPTIONS: readonly VanOption[] = [
  {
    id: "luton",
    name: "Luton Van",
    shortName: "Luton Van",
    image: "/images/vans/hero-van-branded.jpeg",
    imageAlt: "White 3.5T Luton Box Van with tail lift",
    volume: "19.0 m³",
    payload: "1,000 kg",
    dimensions: "4.1m (L) x 2.0m (W) x 2.2m (H)",
    badge: "Luton Box Van",
    description: "Luton box van equipped with hydraulic tail lift.",
    recommendedCrew: "Van with Two-Person Moving Team",
  },
  {
    id: "xlwb",
    name: "XLWB Van",
    shortName: "XLWB Van",
    image: "/images/vans/van-xlwb-clean.jpeg",
    imageAlt: "Extra Long Wheelbase (XLWB) high-roof removals van",
    volume: "17.0 m³",
    payload: "1,150 kg",
    dimensions: "4.7m (L) x 1.78m (W) x 2.1m (H)",
    badge: "XLWB High-Roof",
    description: "Extra Long Wheelbase (XLWB) removals van.",
    recommendedCrew: "Van with Two-Person Moving Team",
  },
  {
    id: "lwb",
    name: "LWB Van",
    shortName: "LWB Van",
    image: "/images/vans/van-lwb.jpeg",
    imageAlt: "Long Wheelbase (LWB) high-roof removals van",
    volume: "14.0 m³",
    payload: "1,250 kg",
    dimensions: "4.3m (L) x 1.78m (W) x 1.94m (H)",
    badge: "LWB High-Roof",
    description: "Long Wheelbase (LWB) removals van.",
    recommendedCrew: "Van with Driver Assistance",
  },
] as const;

export const quoteFormSchema = z.object({
  // 0. Selected Vehicle & Fleet Sizing
  vanType: z.string().default("luton"),
  hasAdditionalVan: z.boolean().default(false),
  additionalVans: z.array(z.string()).default([]),
  additionalVanDetails: z.string().default(""),

  // 1. Move Logistics
  serviceType: z.string().default("house-removals"),

  moveDate: z
    .string()
    .default("")
    .refine(
      (val) => !val || isDateTodayOrFuture(val),
      "Moving date cannot be in the past",
    ),

  pickupPostcode: z
    .string()
    .trim()
    .toUpperCase()
    .default("")
    .refine(
      (val) => !val || UK_POSTCODE_REGEX.test(val),
      "Please enter a valid UK collection postcode (e.g. SW1A 1AA)",
    ),

  deliveryPostcode: z
    .string()
    .trim()
    .toUpperCase()
    .default("")
    .refine(
      (val) => !val || UK_POSTCODE_REGEX.test(val),
      "Please enter a valid UK delivery postcode (e.g. M1 1AE)",
    ),

  // Additional Drop-Off / Via Stops
  hasAdditionalStops: z.boolean().default(false),
  additionalStops: z.string().default(""),

  helpers: z
    .enum([
      "driver_only",
      "1_helper",
      "2_helpers",
      "3_helpers",
      "driver_assistance",
      "two_person",
      "three_person",
    ])
    .default("two_person"),

  propertyType: z.string().default("terraced"),

  accessNotes: z
    .string()
    .trim()
    .max(1000, "Access notes cannot exceed 1000 characters")
    .default(""),

  // 2. Contact Details
  fullName: z
    .string()
    .trim()
    .max(100, "Full name cannot exceed 100 characters")
    .default(""),

  phone: z
    .string()
    .trim()
    .default("")
    .refine(
      (val) => !val || UK_PHONE_REGEX.test(val),
      "Please enter a valid UK telephone number (e.g. 07405 328 674)",
    ),

  email: z
    .string()
    .trim()
    .max(255, "Email address is too long")
    .default("")
    .refine(
      (val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      "Please enter a valid email address",
    ),

  notes: z
    .string()
    .trim()
    .max(2000, "Additional notes cannot exceed 2000 characters")
    .default(""),

  // 3. Consent to Privacy Policy (Defaults to true)
  consent: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must consent to our privacy policy to request a quote",
    )
    .default(true),

  // 4. Load Planner Data (Included when configured via planner)
  plannerSummary: plannerSummarySchema.optional(),

  // 5. Anti-Spam Honeypot (Must remain empty; bots fill it)
  honeypot: z.string().max(0, "Spam submission detected").default(""),

  // 6. Cloudflare Turnstile Verification Token
  turnstileToken: z.string().optional().default(""),
});

export type QuoteFormInput = z.input<typeof quoteFormSchema>;
export type QuoteFormValues = z.output<typeof quoteFormSchema>;
export type PlannerSummary = z.infer<typeof plannerSummarySchema>;
