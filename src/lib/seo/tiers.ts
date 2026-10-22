/**
 * UK Coverage Area Tier Classification
 *
 * Tier 1: Top 10 Major UK Conurbations & Core Metropolitan Areas.
 * These have fully indexable city x service spoke pages in sitemap.xml.
 *
 * Tier 2+: Secondary cities and regional towns.
 * City x service pages for Tier 2+ are set to noindex and excluded from sitemap.xml
 * until individual on-site photographic and verified operational data is gathered.
 */

export const TIER_1_CITY_SLUGS = [
  "london",
  "birmingham",
  "manchester",
  "leeds",
  "glasgow",
  "liverpool",
  "bristol",
  "sheffield",
  "edinburgh",
  "cardiff",
] as const;

export type Tier1CitySlug = (typeof TIER_1_CITY_SLUGS)[number];

export function isTier1City(citySlug: string): boolean {
  return (TIER_1_CITY_SLUGS as readonly string[]).includes(citySlug);
}
