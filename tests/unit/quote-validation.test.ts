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

  describe("Contact details validation (at least one contact method required)", () => {
    it("rejects submission if both phone and email are empty", () => {
      const noContactData = {
        pickupPostcode: "SW1",
        deliveryPostcode: "M1",
        phone: "",
        email: "",
      };

      const result = quoteFormSchema.safeParse(noContactData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.phone).toContain(
          "Please provide either a telephone number or an email address so we can contact you with your quote.",
        );
        expect(result.error.flatten().fieldErrors.email).toContain(
          "Please provide either a telephone number or an email address so we can contact you with your quote.",
        );
      }
    });

    it("accepts quote submission when only phone is provided (all other fields blank)", () => {
      const phoneOnlyData = {
        pickupPostcode: "",
        deliveryPostcode: "",
        fullName: "",
        phone: "07405 328 674",
        email: "",
        notes: "",
        accessNotes: "",
      };

      const result = quoteFormSchema.safeParse(phoneOnlyData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.phone).toBe("07405 328 674");
        expect(result.data.email).toBe("");
        expect(result.data.vanType).toBe("luton");
        expect(result.data.serviceType).toBe("house-removals");
      }
    });

    it("accepts quote submission when only email is provided (all other fields blank)", () => {
      const emailOnlyData = {
        pickupPostcode: "",
        deliveryPostcode: "",
        fullName: "",
        phone: "",
        email: "customer@example.co.uk",
        notes: "",
        accessNotes: "",
      };

      const result = quoteFormSchema.safeParse(emailOnlyData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.phone).toBe("");
        expect(result.data.email).toBe("customer@example.co.uk");
      }
    });
  });

  describe("UK Postcode & Location validation", () => {
    it("accepts full UK postcodes, partial postcodes, and city names", () => {
      const flexibleLocations = [
        "SW1A 1AA",
        "W1D 4FA",
        "M1 1AE",
        "B33 8TH",
        "EC1A 1BB",
        "EH1 1YZ",
        "CF10 1EP",
        "sw1a1aa", // lowercase without space
        "SW1", // partial postcode
        "E16", // outward code
        "London", // city name
        "Manchester",
        "Birmingham City Centre",
        "", // optional / empty
      ];

      for (const loc of flexibleLocations) {
        const data = {
          serviceType: "house-removals",
          moveDate: getFutureDateISO(5),
          pickupPostcode: loc,
          deliveryPostcode: "M1 1AE",
          helpers: "2_helpers",
          propertyType: "terraced",
          fullName: "Valid User",
          phone: "07405 328 674",
          email: "user@example.co.uk",
          consent: true,
        };

        const result = quoteFormSchema.safeParse(data);
        expect(result.success, `Failed on location/postcode: ${loc}`).toBe(
          true,
        );
      }
    });
  });

  describe("Phone Number validation", () => {
    it("accepts UK numbers, flexible formats, and empty optional phones", () => {
      const validPhones = [
        "07405 328 674",
        "+447405328674",
        "+44 7405 328674",
        "020 7946 0912",
        "0121 496 0123",
        "07123456789",
        "07405", // short / partial number
        "", // optional empty
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
        expect(result.success, `Failed on phone: ${phone}`).toBe(true);
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
    it("allows submission even if consent is true, false, or omitted", () => {
      const noConsentData = {
        serviceType: "house-removals",
        moveDate: getFutureDateISO(5),
        pickupPostcode: "SW1",
        deliveryPostcode: "M1",
        helpers: "2_helpers",
        propertyType: "terraced",
        fullName: "Customer",
        phone: "07405 328 674",
        email: "user@example.co.uk",
        consent: false,
      };

      const result = quoteFormSchema.safeParse(noConsentData);
      expect(result.success).toBe(true);
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

  describe("Additional Van Fleet Options", () => {
    it("validates quote with multi-vehicle additional vans configured", () => {
      const multiVanData = {
        vanType: "luton-tail-lift",
        hasAdditionalVan: true,
        additionalVans: ["luton-tail-lift", "lwb-van"],
        additionalVanDetails:
          "Extra #1: 3.5T Luton Box Van; Extra #2: Large High-Roof Panel Van",
        serviceType: "house-removals",
        moveDate: getFutureDateISO(10),
        pickupPostcode: "SW1A 1AA",
        deliveryPostcode: "M1 1AE",
        helpers: "3_helpers" as const,
        propertyType: "detached",
        fullName: "Sarah Connor",
        phone: "07405 328 674",
        email: "sarah@example.com",
        consent: true,
      };

      const result = quoteFormSchema.safeParse(multiVanData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.hasAdditionalVan).toBe(true);
        expect(result.data.additionalVans).toHaveLength(2);
        expect(result.data.additionalVans).toContain("luton-tail-lift");
        expect(result.data.additionalVans).toContain("lwb-van");
      }
    });
  });
});
