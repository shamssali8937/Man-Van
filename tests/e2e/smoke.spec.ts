import { expect, test } from "@playwright/test";

test.describe("Global Layout & Viewport Verification", () => {
  test("layout at mobile 320px viewport", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    await page.goto("/");

    // 1. Skip to content link exists
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();

    // 2. Logo image renders with correct alt
    const logo = page.locator('img[alt="AB Removals – Man and Van"]').first();
    await expect(logo).toBeVisible();

    // 3. Mobile action bar is visible with 3 action buttons
    const actionBar = page.locator('nav[aria-label="Quick mobile actions"]');
    await expect(actionBar).toBeVisible();

    // Check Call, WhatsApp, Get Quote
    const callBtn = actionBar.locator('a[href^="tel:"]');
    await expect(callBtn).toBeVisible();

    const waBtn = actionBar.locator('a[href*="wa.me"]');
    await expect(waBtn).toBeVisible();

    const quoteBtn = actionBar.locator('a[href="/quote"]');
    await expect(quoteBtn).toBeVisible();

    // 4. Desktop nav is hidden
    const desktopNav = page.locator('nav[aria-label="Main navigation"]');
    await expect(desktopNav).toBeHidden();

    // 5. Mobile menu trigger exists and can open drawer
    const menuToggle = page.locator(
      'button[aria-label="Open main navigation"]',
    );
    await expect(menuToggle).toBeVisible();
    await menuToggle.click();

    // Verify dialog opened with accessible role
    const drawer = page.locator('div[role="dialog"]');
    await expect(drawer).toBeVisible();

    // Verify Escape key closes the drawer
    await page.keyboard.press("Escape");
    await expect(drawer).toBeHidden();

    // 6. No horizontal overflow on 320px screen
    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(scrollWidth).toBeLessThanOrEqual(320);
  });

  test("layout at tablet 768px viewport", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");

    // Header phone direct line is visible
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator('header a[href^="tel:"]')).toBeVisible();

    // Mobile action bar is hidden at 768px
    const actionBar = page.locator('nav[aria-label="Quick mobile actions"]');
    await expect(actionBar).toBeHidden();

    // Footer is visible with contact info and Route divider
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer).toContainText("07405 328 674");
    await expect(footer).toContainText("REGISTERED BUSINESS ADDRESS");
  });

  test("layout at desktop 1280px viewport", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    // Desktop nav is visible
    const desktopNav = page.locator('nav[aria-label="Main navigation"]');
    await expect(desktopNav).toBeVisible();

    // All primary links are present in header
    await expect(desktopNav.locator('a[href="/services"]')).toBeVisible();
    await expect(desktopNav.locator('a[href="/areas"]')).toBeVisible();
    await expect(desktopNav.locator('a[href="/the-van"]')).toBeVisible();
    await expect(desktopNav.locator('a[href="/pricing"]')).toBeVisible();
    await expect(desktopNav.locator('a[href="/faq"]')).toBeVisible();
    await expect(desktopNav.locator('a[href="/reviews"]')).toBeVisible();
    await expect(desktopNav.locator('a[href="/contact"]')).toBeVisible();

    // Get a quote button is visible in header
    const headerQuote = page.locator('header a[href="/quote"]');
    await expect(headerQuote).toBeVisible();

    // Mobile action bar is hidden
    const actionBar = page.locator('nav[aria-label="Quick mobile actions"]');
    await expect(actionBar).toBeHidden();

    // Footer columns are visible
    const footer = page.locator("footer");
    await expect(footer.locator('a[href="/privacy"]')).toBeVisible();
    await expect(footer.locator('a[href="/terms"]')).toBeVisible();
    await expect(footer.locator('a[href="/cookies"]')).toBeVisible();
  });
});
