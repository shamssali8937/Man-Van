import { z } from "zod";

// UK Postcode regex pattern (handles standard UK formats: e.g. SW1A 1AA, M1 1AE, B33 8TH, EC1A 1BB, with or without space)
export const UK_POSTCODE_REGEX = /^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i;

// UK Phone regex pattern (accepts +44 or 0 prefix, landline or mobile with optional spaces/dashes)
export const UK_PHONE_REGEX = /^(?:(?:\+44\s?(?:\(0\)\s?)?)|0)(?:\s*\d){9,10}$/;

export const HELPER_OPTIONS = [
  { value: "driver_only", label: "Driver Only (Self-loading)" },
  { value: "1_helper", label: "Driver + 1 Helper (Assisted Move)" },
  { value: "2_helpers", label: "Two-Man Crew (Full Service Removals)" },
  { value: "3_helpers", label: "Three-Man Crew (Heavy Lift / Large Move)" },
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
  { value: "house-removals", label: "House & Flat Removals" },
  { value: "man-and-van", label: "Man and Van Transport" },
  {
    value: "furniture-collection",
    label: "Furniture Delivery & Store Pickups",
  },
  { value: "office-commercial", label: "Office & Commercial Relocations" },
  { value: "student-moves", label: "Student Moves & Storage Transit" },
  { value: "waste-clearance", label: "Licensed Waste Removal & Clearance" },
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

export const quoteFormSchema = z.object({
  // 1. Move Logistics
  serviceType: z
    .string({ required_error: "Please select a removals service" })
    .min(1, "Please select a removals service"),

  moveDate: z
    .string({ required_error: "Please choose your moving date" })
    .min(1, "Please choose your moving date")
    .refine(
      (val) => isDateTodayOrFuture(val),
      "Moving date cannot be in the past",
    ),

  pickupPostcode: z
    .string({ required_error: "Please enter collection postcode" })
    .trim()
    .toUpperCase()
    .regex(
      UK_POSTCODE_REGEX,
      "Please enter a valid UK collection postcode (e.g. SW1A 1AA)",
    ),

  deliveryPostcode: z
    .string({ required_error: "Please enter destination postcode" })
    .trim()
    .toUpperCase()
    .regex(
      UK_POSTCODE_REGEX,
      "Please enter a valid UK delivery postcode (e.g. M1 1AE)",
    ),

  helpers: z.enum(["driver_only", "1_helper", "2_helpers", "3_helpers"], {
    errorMap: () => ({
      message: "Please select your required crew configuration",
    }),
  }),

  propertyType: z
    .string({ required_error: "Please select your property type" })
    .min(1, "Please select your property type"),

  accessNotes: z
    .string()
    .trim()
    .max(1000, "Access notes cannot exceed 1000 characters")
    .optional()
    .or(z.literal("")),

  // 2. Contact Details
  fullName: z
    .string({ required_error: "Please enter your full name" })
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),

  phone: z
    .string({ required_error: "Please enter your contact phone number" })
    .trim()
    .regex(
      UK_PHONE_REGEX,
      "Please enter a valid UK telephone number (e.g. 07405 328 674)",
    ),

  email: z
    .string({ required_error: "Please enter your email address" })
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email address is too long"),

  notes: z
    .string()
    .trim()
    .max(2000, "Additional notes cannot exceed 2000 characters")
    .optional()
    .or(z.literal("")),

  // 3. Consent to Privacy Policy
  consent: z.literal(true, {
    errorMap: () => ({
      message: "You must consent to our privacy policy to request a quote",
    }),
  }),

  // 4. Load Planner Data (Included when configured via planner)
  plannerSummary: plannerSummarySchema.optional(),

  // 5. Anti-Spam Honeypot (Must remain empty; bots fill it)
  honeypot: z
    .string()
    .max(0, "Spam submission detected")
    .optional()
    .or(z.literal("")),

  // 6. Cloudflare Turnstile Verification Token
  turnstileToken: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
export type PlannerSummary = z.infer<typeof plannerSummarySchema>;
