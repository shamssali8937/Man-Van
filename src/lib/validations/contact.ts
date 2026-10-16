import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .max(80, "Name must be under 80 characters")
    .optional()
    .default(""),
  email: z
    .string()
    .trim()
    .max(120, "Email must be under 120 characters")
    .optional()
    .default("")
    .refine(
      (val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      "Please provide a valid email address",
    ),
  phone: z
    .string()
    .trim()
    .max(25, "Phone number is too long")
    .optional()
    .default("")
    .refine(
      (val) => !val || val.length >= 7,
      "Please provide a valid telephone number",
    ),
  subject: z
    .string()
    .trim()
    .max(120, "Subject must be under 120 characters")
    .optional()
    .default(""),
  message: z
    .string()
    .trim()
    .max(2000, "Message must be under 2000 characters")
    .optional()
    .default(""),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
