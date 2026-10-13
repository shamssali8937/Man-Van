import { describe, expect, it } from "vitest";
import { calculateLoadMetrics } from "@/content/load-planner";
import { isDateTodayOrFuture, quoteFormSchema } from "@/lib/validations/quote";

describe("Quote Form Zod Schema Validation", () => {
  const getTodayISO = () => new Date().toISOString().split("T")[0];
  const getFutureDateISO = (daysAhead: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    return d.toISOString().split("T")[0];
  };
  const getPastDateISO = (daysAgo: number) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return d.toISOString().split("T")[0];
  };

  it("validates a complete, valid UK moving quote submission", () => {
    const validData = {
      serviceType: "house-removals",
      moveDate: getFutureDateISO(7),
      pickupPostcode: "SW1A 1AA",
      deliveryPostcode: "M1 1AE",
      helpers: "2_helpers" as const,
      propertyType: "terraced",
      accessNotes: "2nd floor flat, lift available, resident parking bay",
      fullName: "Jane Smith",
      phone: "07405 328 674",
      email: "jane.smith@example.co.uk",
      notes: "Need extra transit blankets for antique sideboard.",
      consent: true,
      honeypot: "",
      turnstileToken: "dummy-token",
      plannerSummary: {
        items: [
          {
            id: "double-bed",
            name: "Double / King Bed",
            quantity: 1,
            volumeM3: 1.8,
          },
          {
            id: "sofa-2-seater",
            name: "Sofa (2-Seater)",
            quantity: 1,
            volumeM3: 1.5,
          },
          {
            id: "box-medium",
            name: "Box (Medium)",
            quantity: 10,
            volumeM3: 1.0,
          },
        ],
        totalVolumeM3: 4.3,
        vanFillPercentage: 23,
        suggestedHelpers: "Two-Man Crew (Standard Moving Team)",
        summaryText: "1x Double Bed, 1x Sofa (2-Seater), 10x Box (Medium)",
      },
    };

    const result = quoteFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  describe("Move Date validation", () => {
    it("accepts a moving date set to today", () => {
      expect(isDateTodayOrFuture(getTodayISO())).toBe(true);
    });

    it("accepts a moving date in the future", () => {
      expect(isDateTodayOrFuture(getFutureDateISO(30))).toBe(true);
    });

    it("rejects a moving date in the past", () => {
      const pastDate = getPastDateISO(2);
      expect(isDateTodayOrFuture(pastDate)).toBe(false);

      const invalidData = {
        serviceType: "man-and-van",
        moveDate: pastDate,
        pickupPostcode: "SW1A 1AA",
        deliveryPostcode: "M1 1AE",
        helpers: "driver_only",
        propertyType: "ground_floor",
        fullName: "John Doe",
        phone: "07405 328 674",
        email: "john@example.co.uk",
        consent: true,
      };

      const result = quoteFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.moveDate).toContain(
          "Moving date cannot be in the past",
        );
      }
    });
  });

  describe("UK Postcode validation", () => {
    it("accepts valid UK postcodes in various standard formats", () => {
      const validPostcodes = [
        "SW1A 1AA",
        "W1D 4FA",
        "M1 1AE",
        "B33 8TH",
        "EC1A 1BB",
        "EH1 1YZ",
        "CF10 1EP",
        "sw1a1aa", // lowercase without space
      ];

      for (const postcode of validPostcodes) {
        const data = {
          serviceType: "house-removals",
          moveDate: getFutureDateISO(5),
          pickupPostcode: postcode,
          deliveryPostcode: "M1 1AE",
          helpers: "2_helpers",
          propertyType: "terraced",
          fullName: "Valid User",
          phone: "07405 328 674",
          email: "user@example.co.uk",
          consent: true,
        };

        const result = quoteFormSchema.safeParse(data);
        expect(result.success, `Failed on valid postcode: ${postcode}`).toBe(
          true,
        );
      }
    });

    it("rejects invalid UK postcodes", () => {
      const invalidPostcodes = ["12345", "INVALID", "SW1A", "AA1 1A", "1A 1AA"];

      for (const postcode of invalidPostcodes) {
        const data = {
          serviceType: "house-removals",
          moveDate: getFutureDateISO(5),
          pickupPostcode: postcode,
          deliveryPostcode: "M1 1AE",
          helpers: "2_helpers",
          propertyType: "terraced",
          fullName: "Test User",
          phone: "07405 328 674",
          email: "user@example.co.uk",
          consent: true,
        };

        const result = quoteFormSchema.safeParse(data);
        expect(
          result.success,
          `Should reject invalid postcode: ${postcode}`,
        ).toBe(false);
      }
    });
  });

  describe("UK Phone Number validation", () => {
    it("accepts valid UK mobile and landline formats", () => {
      const validPhones = [
        "07405 328 674",
        "+447405328674",
        "+44 7405 328674",
        "020 7946 0912",
        "0121 496 0123",
        "07123456789",
      ];

      for (const phone of validPhones) {
        const data = {
          serviceType: "house-removals",
          moveDate: getFutureDateISO(5),
          pickupPostcode: "SW1A 1AA",
          deliveryPostcode: "M1 1AE",
          helpers: "1_helper",
          propertyType: "semi_detached",
          fullName: "Valid Phone",
          phone: phone,
          email: "valid@example.co.uk",
          consent: true,
        };

        const result = quoteFormSchema.safeParse(data);
        expect(result.success, `Failed on valid phone: ${phone}`).toBe(true);
      }
    });

    it("rejects invalid phone numbers", () => {
      const invalidPhones = ["123", "07405", "not-a-phone", "12345678901234"];

      for (const phone of invalidPhones) {
        const data = {
          serviceType: "house-removals",
          moveDate: getFutureDateISO(5),
          pickupPostcode: "SW1A 1AA",
          deliveryPostcode: "M1 1AE",
          helpers: "1_helper",
          propertyType: "semi_detached",
          fullName: "Invalid Phone",
          phone: phone,
          email: "valid@example.co.uk",
          consent: true,
        };

        const result = quoteFormSchema.safeParse(data);
        expect(result.success, `Should reject phone: ${phone}`).toBe(false);
      }
    });
  });

  describe("Honeypot Anti-Spam Check", () => {
    it("rejects submission if honeypot contains any content", () => {
      const spamData = {
        serviceType: "house-removals",
        moveDate: getFutureDateISO(5),
        pickupPostcode: "SW1A 1AA",
        deliveryPostcode: "M1 1AE",
        helpers: "2_helpers",
        propertyType: "terraced",
        fullName: "Spam Bot",
        phone: "07405 328 674",
        email: "bot@example.com",
        consent: true,
        honeypot: "https://spam-link.ru", // Bot filled this field
      };

      const result = quoteFormSchema.safeParse(spamData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.honeypot).toBeDefined();
      }
    });
  });

  describe("Consent Checkbox", () => {
    it("rejects submission if consent is false or missing", () => {
      const noConsentData = {
        serviceType: "house-removals",
        moveDate: getFutureDateISO(5),
        pickupPostcode: "SW1A 1AA",
        deliveryPostcode: "M1 1AE",
        helpers: "2_helpers",
        propertyType: "terraced",
        fullName: "No Consent",
        phone: "07405 328 674",
        email: "user@example.co.uk",
        consent: false,
      };

      const result = quoteFormSchema.safeParse(noConsentData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.consent).toBeDefined();
      }
    });
  });

  describe("Load Planner Volume & Helper Heuristics", () => {
    it("calculates 0% fill for empty load", () => {
      const metrics = calculateLoadMetrics({});
      expect(metrics.totalVolumeM3).toBe(0);
      expect(metrics.vanFillPercentage).toBe(0);
      expect(metrics.suggestedHelpersKey).toBe("driver_only");
    });

    it("calculates accurate volume and recommends 2-man crew for heavy move", () => {
      const load = {
        "double-bed": 2, // 2 * 1.8 = 3.6 m³
        "sofa-3-seater": 1, // 1 * 2.2 = 2.2 m³
        "fridge-freezer": 1, // 1 * 1.2 = 1.2 m³
        wardrobe: 2, // 2 * 1.6 = 3.2 m³
        "box-large": 10, // 10 * 0.16 = 1.6 m³
      };

      const metrics = calculateLoadMetrics(load);
      // Expected total volume: 3.6 + 2.2 + 1.2 + 3.2 + 1.6 = 11.8 m³
      expect(metrics.totalVolumeM3).toBeCloseTo(11.8, 1);
      // Van fill percentage: (11.8 / 19.0) * 100 ≈ 62%
      expect(metrics.vanFillPercentage).toBe(62);
      expect(metrics.suggestedHelpersKey).toBe("2_helpers");
      expect(metrics.hasHeavyItems).toBe(true);
    });
  });
});
