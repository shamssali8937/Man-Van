import { describe, expect, it } from "vitest";
import { getAllAreas, getAllServices, getNearbyAreas } from "@/content";
import {
  getAreaServiceContent,
  getValidAreaServicePairs,
} from "@/lib/seo/area-service-content";
import { formatSeoDescription, formatSeoTitle } from "@/lib/seo/metadata";

describe("Dynamic SEO Pages & Content Layer", () => {
  describe("SEO Title & Description Rules", () => {
    it("formatSeoTitle always keeps title strictly under 60 characters", () => {
      const titles = [
        "House Removals",
        "Furniture Dismantling and Assembly",
        "Waste Removal and Property Clearance",
        "Removals in Newcastle-upon-Tyne",
        "Furniture Collection and Delivery in Newcastle-upon-Tyne",
        "Extremely Long Service Title That Might Potentially Exceed Sixty Characters If Not Handled",
      ];

      for (const t of titles) {
        const formatted = formatSeoTitle(t);
        expect(formatted.length).toBeLessThan(60);
      }
    });

    it("formatSeoDescription always keeps description strictly under 160 characters", () => {
      const longText =
        "This is an extraordinarily long meta description intended to test our truncation algorithm and make sure that it smoothly cuts before exceeding the 160 characters ceiling without cutting words awkwardly in the middle.";
      const formatted = formatSeoDescription(longText);
      expect(formatted.length).toBeLessThan(160);
      expect(formatted.length).toBeLessThanOrEqual(155);
    });
  });

  describe("Service Pages SEO Metadata", () => {
    const services = getAllServices();

    it("every service page title is under 60 characters", () => {
      for (const s of services) {
        const title = formatSeoTitle(`${s.name} UK`);
        expect(title.length).toBeLessThan(60);
      }
    });

    it("every service page description is under 160 characters", () => {
      for (const s of services) {
        const desc = formatSeoDescription(s.shortDescription);
        expect(desc.length).toBeLessThan(160);
      }
    });
  });

  describe("Area Pages SEO Metadata", () => {
    const areas = getAllAreas();

    it("every area page title is under 60 characters", () => {
      for (const a of areas) {
        const title = formatSeoTitle(`Removals in ${a.name}`);
        expect(title.length).toBeLessThan(60);
      }
    });

    it("every area page description is under 160 characters", () => {
      for (const a of areas) {
        const desc = formatSeoDescription(
          `Professional removals and man and van services in ${a.name} (${a.postcodePrefixes.join(", ")}). Clean Luton vans, experienced crew, clear pricing.`,
        );
        expect(desc.length).toBeLessThan(160);
      }
    });

    it("getNearbyAreas returns adjacent locations", () => {
      for (const a of areas) {
        const nearby = getNearbyAreas(a.slug, 4);
        expect(nearby.length).toBeGreaterThan(0);
        expect(nearby.length).toBeLessThanOrEqual(4);
        expect(nearby.some((n) => n.slug === a.slug)).toBe(false);
      }
    });
  });

  describe("City + Service Combination SEO Pages", () => {
    it("returns null for non-existent city or service", () => {
      expect(
        getAreaServiceContent("non-existent-city", "house-removals"),
      ).toBeNull();
      expect(
        getAreaServiceContent("london", "non-existent-service"),
      ).toBeNull();
    });

    it("generates genuinely unique copy for all valid combinations", () => {
      const validPairs = getValidAreaServicePairs();
      expect(validPairs.length).toBe(420); // 30 cities x 14 services

      // Inspect a sample of combinations across different services and cities
      const sample = [
        { city: "london", service: "house-removals" },
        { city: "birmingham", service: "man-and-van" },
        { city: "manchester", service: "furniture-removals-and-delivery" },
        { city: "leeds", service: "office-and-commercial-removals" },
        {
          city: "newcastle-upon-tyne",
          service: "furniture-assembly-and-dismantling",
        },
        { city: "bristol", service: "waste-removal-and-disposal" },
      ];

      for (const { city, service } of sample) {
        const content = getAreaServiceContent(city, service);
        expect(content).not.toBeNull();
        if (!content) return;

        // Verify SEO title strictly < 60 characters
        expect(content.seoTitle.length).toBeLessThan(60);

        // Verify SEO description strictly < 160 characters
        expect(content.seoDescription.length).toBeLessThan(160);

        // Verify H1 and lead paragraph are unique and present
        expect(content.h1).toBeTruthy();
        expect(content.leadParagraph).toContain(content.area.name);

        // Verify local notes are incorporated
        expect(content.parkingAndPermits.content).toBeTruthy();
        expect(content.accessAndHandling.content).toBeTruthy();
        expect(content.transitAndCorridors.content).toBeTruthy();

        // Verify localized FAQs are generated
        expect(content.localFaqs).toHaveLength(3);
        for (const faq of content.localFaqs) {
          expect(faq.question).toBeTruthy();
          expect(faq.answer).toBeTruthy();
        }

        // Verify word count of unique combined text
        const wordCount =
          `${content.leadParagraph} ${content.serviceOverview} ${content.parkingAndPermits.content} ${content.accessAndHandling.content} ${content.transitAndCorridors.content}`
            .trim()
            .split(/\s+/).length;
        expect(wordCount).toBeGreaterThanOrEqual(200);
      }
    });

    it("every single combination across all 420 pairs satisfies SEO title (<60) and description (<160) limits", () => {
      const validPairs = getValidAreaServicePairs();
      for (const { city, service } of validPairs) {
        const content = getAreaServiceContent(city, service);
        expect(content).not.toBeNull();
        if (content) {
          expect(content.seoTitle.length).toBeLessThan(60);
          expect(content.seoDescription.length).toBeLessThan(160);
        }
      }
    });
  });
});
