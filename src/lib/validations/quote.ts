import { z } from "zod";

// UK Postcode regex pattern
const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;

// UK Phone regex pattern (accepts +44 or 0 prefix, landline or mobile with optional spaces)
const UK_PHONE_REGEX = /^(?:(?:\+44\s?(?:\(0\)\s?)?)|0)(?:\s*\d){9,10}$/;

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email address is too long"),
  phone: z
    .string()
    .trim()
    .regex(
      UK_PHONE_REGEX,
      "Please provide a valid UK telephone number (e.g. 07405 328 674)",
    ),
  serviceType: z.string().min(1, "Please select a required service"),
  pickupPostcode: z
    .string()
    .trim()
    .regex(UK_POSTCODE_REGEX, "Please provide a valid UK collection postcode"),
  deliveryPostcode: z
    .string()
    .trim()
    .regex(UK_POSTCODE_REGEX, "Please provide a valid UK destination postcode"),
  moveDate: z.string().min(1, "Please choose an estimated moving date"),
  propertyType: z.string().optional(),
  itemsDescription: z
    .string()
    .trim()
    .max(2000, "Description cannot exceed 2000 characters")
    .optional(),
  additionalDetails: z
    .string()
    .trim()
    .max(1000, "Additional details cannot exceed 1000 characters")
    .optional(),
  turnstileToken: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
