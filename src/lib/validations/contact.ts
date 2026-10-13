import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters)")
    .max(80, "Name must be under 80 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(120, "Email must be under 120 characters"),
  phone: z
    .string()
    .trim()
    .min(7, "Please provide a valid telephone number")
    .max(25, "Phone number is too long"),
  subject: z
    .string()
    .trim()
    .min(2, "Please provide a subject")
    .max(120, "Subject must be under 120 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Please provide a message with at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
