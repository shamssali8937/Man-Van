# Project Placeholders & Verification Checklist

This document tracks all unconfirmed business details, regulatory accreditations, and content placeholders across the codebase. Per project requirements, no facts, reviews, prices, insurance figures, or accreditations are invented. Every item below requires explicit client confirmation before production deployment.

---

## 1. Business & Contact Information
- [ ] **Production Domain / URL**: Currently configured with placeholder `https://abremovals.co.uk` in `src/content/site.ts`.
- [ ] **Official Email Address**: Currently marked `[TODO: confirm business email]` in `src/content/site.ts` and `src/app/(marketing)/contact/page.tsx`.
- [ ] **Registered Office Address**: Full street address, town, and postcode needed in `src/content/site.ts`.
- [ ] **Operating Hours**: Working days and hours for customer enquiries in `src/content/site.ts`.
- [ ] **Company Registration & Legal Entity**: Registered company name, registration number, and VAT status for `src/app/(legal)/terms/page.tsx`.

## 2. Accreditations, Licensing & Insurance
- [ ] **Goods in Transit Insurance**: Policy underwriter and maximum coverage limit per load in `src/content/site.ts` and `src/content/faqs.ts`.
- [ ] **Public Liability Insurance**: Policy underwriter and coverage amount in `src/content/site.ts`.
- [ ] **Waste Carrier Licence**: Environment Agency Upper Tier Waste Carrier licence number for the "Waste Removal and Property Clearance" service in `src/content/services.ts`.
- [ ] **Trade Accreditations**: Confirmation of any industry memberships (e.g. BAR, Move Assured) in `src/content/site.ts`.

## 3. Vehicle Specifications
- [ ] **Van Fleet Details**: Make, model, internal cubic capacity, payload rating, and loading dimensions for `src/app/(marketing)/the-van/page.tsx`.
- [ ] **Equipment Inventory**: Confirmation of dollies, stair climbers, piano trolleys, blankets, and strapping equipment.

## 4. Pricing, Rates & Payment Terms
- [ ] **Pricing Structure**: Hourly rates, fixed quote policy, minimum booking hours, and congestion/ULEZ handling in `src/content/services.ts` and `src/app/(marketing)/pricing/page.tsx`.
- [ ] **Accepted Payment Methods**: Credit/debit card, bank transfer, cash, invoice terms in `src/content/faqs.ts`.
- [ ] **Cancellation & Rescheduling Policy**: Notice periods and cancellation fee terms for `src/app/(legal)/terms/page.tsx`.

## 5. Coverage Areas & Scope
- [ ] **Primary & Extended Coverage Areas**: Full list of UK postcodes and counties served in `src/content/areas.ts`.
- [ ] **Nationwide Moves**: Scope and terms for long-distance relocations.

## 6. Verified Customer Reviews
- [ ] **Genuine Reviews**: Real customer testimonials from Google Business Profile, Trustpilot, or verified moving jobs in `src/content/reviews.ts`. *(Strict rule: Zero artificial reviews or ratings).*

## 7. Third-Party Integrations & API Keys
- [ ] **Resend**: API key and sender domain DNS verification (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`).
- [ ] **Upstash Redis**: Production REST URL and token for distributed rate limiting.
- [ ] **Cloudflare Turnstile**: Site key and Secret key for anti-bot protection.
