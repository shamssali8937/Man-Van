import { describe, expect, it } from "vitest";
import { sanitizeString } from "@/lib/security/sanitize";
import { quoteFormSchema } from "@/lib/validations/quote";

describe("Quote validation & security", () => {
  it("validates a complete, valid UK moving quote submission", () => {
    const validData = {
      fullName: "Jane Smith",
      email: "jane.smith@example.co.uk",
      phone: "07405 328 674",
      serviceType: "House Removals",
      pickupPostcode: "SW1A 1AA",
      deliveryPostcode: "M1 1AE",
      moveDate: "20/10/2026",
      propertyType: "2-bed terraced house",
      itemsDescription: "Living room sofa, 2 beds, dining table, boxes",
    };

    const result = quoteFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("rejects invalid UK postcodes", () => {
    const invalidData = {
      fullName: "Jane Smith",
      email: "jane.smith@example.co.uk",
      phone: "07405 328 674",
      serviceType: "House Removals",
      pickupPostcode: "INVALID_POSTCODE",
      deliveryPostcode: "M1 1AE",
      moveDate: "20/10/2026",
    };

    const result = quoteFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.pickupPostcode).toBeDefined();
    }
  });

  it("sanitizes HTML tags from user inputs", () => {
    const maliciousInput = "<script>alert('xss')</script>Hello World";
    const cleaned = sanitizeString(maliciousInput);
    expect(cleaned).toBe("alert('xss')Hello World");
  });
});
