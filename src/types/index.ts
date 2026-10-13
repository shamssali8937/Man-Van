import { z } from "zod";

// --- Service Schemas & Types ---
export const ServiceFAQSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});
export type ServiceFAQ = z.infer<typeof ServiceFAQSchema>;

export const ServiceSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  title: z.string().min(1),
  shortDescription: z.string().min(1),
  description: z.string().min(1),
  benefits: z.array(z.string()).min(5).max(7),
  features: z.array(z.string()),
  faqs: z.array(ServiceFAQSchema).min(4),
  relatedServiceSlugs: z.array(z.string()),
  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  }),
});
export type Service = z.infer<typeof ServiceSchema>;

// --- Area Schemas & Types ---
export const AreaNotesSchema = z.object({
  parking: z.string().min(1),
  access: z.string().min(1),
  typicalRoutes: z.string().min(1),
});
export type AreaNotes = z.infer<typeof AreaNotesSchema>;

export const AreaSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  region: z.string().min(1),
  county: z.string().min(1),
  postcodePrefixes: z.array(z.string()),
  intro: z.string().min(1),
  description: z.string().min(1),
  localNotes: AreaNotesSchema,
  faqs: z.array(ServiceFAQSchema).min(3),
});
export type Area = z.infer<typeof AreaSchema>;

// --- FAQ Schemas & Types ---
export const FAQSchema = z.object({
  id: z.string().min(1),
  question: z.string().min(1),
  answer: z.string().min(1),
  category: z.enum(["general", "pricing", "services", "booking"]),
});
export type FAQ = z.infer<typeof FAQSchema>;

// --- Review Schemas & Types ---
export const ReviewSchema = z.object({
  id: z.string().min(1),
  author: z.string().min(1),
  location: z.string().min(1),
  service: z.string().min(1),
  date: z.string().min(1),
  comment: z.string().min(1),
  rating: z.number().min(1).max(5).optional(),
  isVerified: z.boolean(),
});
export type Review = z.infer<typeof ReviewSchema>;

// --- Quote Form Data ---
export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  pickupPostcode: string;
  deliveryPostcode: string;
  moveDate: string;
  propertyType?: string;
  itemsDescription?: string;
  additionalDetails?: string;
  turnstileToken?: string;
}
