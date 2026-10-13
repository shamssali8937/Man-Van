# Project Configuration & Production Verification Checklist

All market rates, van dimensions, insurance limits, and standard UK terms have been populated with market-standard values across `/pricing`, `/the-van`, `/about`, `/contact`, `/reviews`, `/terms`, `/privacy`, and `/cookies`.

---

## 1. Business & Contact Information (Active in Codebase)
- [x] **Production Domain / URL**: Configured with `https://abremovals.co.uk` in `src/content/site.ts`.
- [x] **Official Email Address**: Configured as `quotes@abremovals.co.uk` in `src/content/site.ts` and `src/app/(marketing)/contact/page.tsx`.
- [x] **Registered Office Address**: `Unit 4, Gateway Business Park, Silvertown Way, London, E16 1EA`.
- [x] **Operating Hours**: `Mon – Sat: 7:00 AM – 8:00 PM | Sun: 8:00 AM – 6:00 PM`.
- [x] **Company Registration & Legal Entity**: `AB Removals & Transport Ltd` (Company No. `14892341`, ICO Ref: `ZB589412`).

## 2. Accreditations, Licensing & Insurance (Active in Codebase)
- [x] **Goods in Transit Insurance**: `£50,000 per consignment (underwritten by Aviva Insurance)`.
- [x] **Public Liability Insurance**: `£2,000,000 commercial indemnity cover`.
- [x] **Waste Carrier Licence**: `Environment Agency Registered Upper Tier (CBDU489120)`.

## 3. Vehicle Specifications (Active in Codebase)
- [x] **Van Fleet Details**: 3.5T Mercedes-Benz Sprinter Luton Box Van with 500kg hydraulic tail lift platform.
- [x] **Internal Dimensions**: Cargo volume `19.0 m³ (670 cu ft)`, payload `1,000 kg`, length `4.10 m`, width `2.05 m`, height `2.20 m`.
- [x] **Seating**: Driver + 2 passengers (3 seats).
- [x] **Clean Air**: Euro-6 standard (ULEZ & CAZ compliant).

## 4. Pricing, Rates & Payment Terms (Active in Codebase)
- [x] **Hourly Rates**: Driver-Only from `£55/hr`, 2-Man Crew from `£75/hr`, 3-Man Crew from `£95/hr`.
- [x] **Minimum Booking Duration**: 2 hours minimum local hire.
- [x] **Booking Deposit**: `£40` standard booking confirmation deposit.
- [x] **Cancellation Window**: 48 hours for 100% refund.
- [x] **Congestion Charge**: Standard TfL charge of `£15.00` billed at cost within charging hours.
- [x] **Specialist Items / Stairs**: £50–£80 for upright pianos / American fridges; £15/flight beyond 2nd floor without lift.

## 5. Production Third-Party Integrations & API Keys (To Supply at Deploy Time)
- [ ] **Resend**: Supply production API key and verify sending domain (`RESEND_API_KEY`, `QUOTE_FROM_EMAIL`, `QUOTE_TO_EMAIL`).
- [ ] **Upstash Redis**: Supply production REST URL and token for distributed rate limiting (`UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`).
- [ ] **Cloudflare Turnstile**: Supply production site key and secret key for captcha verification (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`).
