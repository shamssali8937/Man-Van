import type { Area, FAQ, Review, Service } from "@/types";
import { areas } from "./areas";
import { faqs } from "./faqs";
import { reviews } from "./reviews";
import { services } from "./services";
import { siteConfig } from "./site";

export * from "./areas";
export * from "./faqs";
export * from "./reviews";
export * from "./services";
export * from "./site";

/**
 * Retrieve a single service by its unique URL slug.
 * Returns undefined if not found.
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/**
 * Retrieve a single coverage area / city by its unique URL slug.
 * Returns undefined if not found.
 */
export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}

/**
 * Retrieve all registered removal services.
 */
export function getAllServices(): Service[] {
  return services;
}

/**
 * Retrieve all registered UK coverage areas.
 */
export function getAllAreas(): Area[] {
  return areas;
}

/**
 * Retrieve general site FAQs.
 */
export function getGeneralFaqs(): FAQ[] {
  return faqs;
}

/**
 * Retrieve verified customer reviews.
 */
export function getReviews(): Review[] {
  return reviews;
}

export { siteConfig };
