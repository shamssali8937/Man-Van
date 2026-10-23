import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    RESEND_API_KEY: z
      .string()
      .min(1)
      .default("re_4QNja9uK_8opcdi2xmrMHwqkZc9dmhXww"),
    QUOTE_TO_EMAIL: z.string().email().default("quotes@abremovals.co.uk"),
    QUOTE_FROM_EMAIL: z.string().email().default("onboarding@resend.dev"),
    TURNSTILE_SECRET_KEY: z.string().min(1).optional(),
    UPSTASH_REDIS_REST_URL: z.string().url().optional(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
    NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY:
      process.env.RESEND_API_KEY || "re_4QNja9uK_8opcdi2xmrMHwqkZc9dmhXww",
    QUOTE_TO_EMAIL:
      process.env.QUOTE_TO_EMAIL ||
      process.env.RESEND_TO_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "quotes@abremovals.co.uk",
    QUOTE_FROM_EMAIL:
      process.env.QUOTE_FROM_EMAIL ||
      process.env.RESEND_FROM_EMAIL ||
      "onboarding@resend.dev",
    TURNSTILE_SECRET_KEY:
      process.env.TURNSTILE_SECRET_KEY ||
      process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000",
    NEXT_PUBLIC_TURNSTILE_SITE_KEY:
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
      process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY,
    NEXT_PUBLIC_CONTACT_EMAIL:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      process.env.NEXT_PUBLIC_SITE_EMAIL,
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
