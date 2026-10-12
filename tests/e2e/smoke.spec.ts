import { expect, test } from "@playwright/test";

test.describe("Smoke tests", () => {
  test("homepage renders successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("AB Removals");
  });

  test("services page renders", async ({ page }) => {
    await page.goto("/services");
    await expect(page.locator("h1")).toContainText("Our Removal Services");
  });
});
