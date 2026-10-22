import { describe, expect, it } from "vitest";
import {
  getAllAreas,
  getAllServices,
  getAreaBySlug,
  getGeneralFaqs,
  getReviews,
  getServiceBySlug,
} from "@/content";
import { AreaSchema, FAQSchema, ReviewSchema, ServiceSchema } from "@/types";

describe("Content Layer Integrity", () => {
  describe("Services", () => {
    it("has all 14 services", () => {
      const services = getAllServices();
      expect(services).toHaveLength(14);
    });

    it("every service validates against ServiceSchema", () => {
      const services = getAllServices();
      for (const service of services) {
        const result = ServiceSchema.safeParse(service);
        expect(result.success).toBe(true);
      }
    });

    it("every service description has 200+ words", () => {
      const services = getAllServices();
      for (const service of services) {
        const wordCount = service.description.trim().split(/\s+/).length;
        expect(wordCount).toBeGreaterThanOrEqual(200);
      }
    });

    it("every service has between 5 and 7 benefits and 4 FAQs", () => {
      const services = getAllServices();
      for (const service of services) {
        expect(service.benefits.length).toBeGreaterThanOrEqual(5);
        expect(service.benefits.length).toBeLessThanOrEqual(7);
        expect(service.faqs).toHaveLength(4);
      }
    });

    it("getServiceBySlug returns the service or undefined if not found", () => {
      const valid = getServiceBySlug("house-removals");
      expect(valid).toBeDefined();
      expect(valid?.name).toBe("House Removals");

      const invalid = getServiceBySlug("non-existent-service");
      expect(invalid).toBeUndefined();
    });
  });

  describe("Areas", () => {
    it("has exactly 30 UK cities and towns", () => {
      const areas = getAllAreas();
      expect(areas).toHaveLength(30);
    });

    it("every area validates against AreaSchema", () => {
      const areas = getAllAreas();
      for (const area of areas) {
        const result = AreaSchema.safeParse(area);
        expect(result.success).toBe(true);
      }
    });

    it("every area has 3 local notes and at least 3 FAQs", () => {
      const areas = getAllAreas();
      for (const area of areas) {
        expect(area.localNotes.parking).toBeTruthy();
        expect(area.localNotes.access).toBeTruthy();
        expect(area.localNotes.typicalRoutes).toBeTruthy();
        expect(area.faqs.length).toBeGreaterThanOrEqual(3);
      }
    });

    it("getAreaBySlug returns the area or undefined if not found", () => {
      const valid = getAreaBySlug("london");
      expect(valid).toBeDefined();
      expect(valid?.name).toBe("London");

      const invalid = getAreaBySlug("atlantis");
      expect(invalid).toBeUndefined();
    });
  });

  describe("FAQs", () => {
    it("has at least 12 general FAQs covering core and search queries", () => {
      const faqs = getGeneralFaqs();
      expect(faqs.length).toBeGreaterThanOrEqual(12);
    });

    it("every FAQ validates against FAQSchema", () => {
      const faqs = getGeneralFaqs();
      for (const faq of faqs) {
        const result = FAQSchema.safeParse(faq);
        expect(result.success).toBe(true);
      }
    });
  });

  describe("Reviews", () => {
    it("has 8 authentic verified customer reviews that validate against ReviewSchema", () => {
      const reviews = getReviews();
      expect(reviews).toHaveLength(8);
      for (const rev of reviews) {
        const result = ReviewSchema.safeParse(rev);
        expect(result.success).toBe(true);
      }
    });
  });
});
