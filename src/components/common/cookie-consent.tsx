"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge, Button } from "@/components/ui";

const CONSENT_STORAGE_KEY = "ab_removals_cookie_consent_v1";

interface ConsentPreferences {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Initialize Google Tag Manager Consent Mode v2 defaults (All denied by default)
 */
function initGtagConsentDefaults() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
}

/**
 * Updates Google Tag Manager Consent Mode v2 state based on user choice
 */
function updateGtagConsent(analytics: boolean, marketing: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
    analytics_storage: analytics ? "granted" : "denied",
  });

  // If user granted consent and a GTM Container ID is configured, load the GTM container script
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (
    (analytics || marketing) &&
    gtmId &&
    !document.getElementById("gtm-script")
  ) {
    const script = document.createElement("script");
    script.id = "gtm-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
  }
}

export function CookieConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    initGtagConsentDefaults();

    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ConsentPreferences;
        setAnalyticsEnabled(parsed.analytics);
        setMarketingEnabled(parsed.marketing);
        updateGtagConsent(parsed.analytics, parsed.marketing);
      } else {
        // No choice saved yet; display the banner
        setIsOpen(true);
      }
    } catch (_e) {
      setIsOpen(true);
    }

    const handleOpenPreferences = () => {
      setIsOpen(true);
      setIsManageOpen(true);
    };
    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () =>
      window.removeEventListener(
        "open-cookie-preferences",
        handleOpenPreferences,
      );
  }, []);

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const preferences: ConsentPreferences = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
    } catch (_e) {
      // ignore storage failure
    }

    updateGtagConsent(analytics, marketing);
    setIsOpen(false);
    setIsManageOpen(false);
  };

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    saveConsent(true, true);
  };

  const handleRejectAll = () => {
    setAnalyticsEnabled(false);
    setMarketingEnabled(false);
    saveConsent(false, false);
  };

  const handleSavePreferences = () => {
    saveConsent(analyticsEnabled, marketingEnabled);
  };

  if (!isOpen) return null;

  return (
    <aside
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-brand-navy/60 backdrop-blur-md animate-fade-in"
    >
      <div className="max-w-5xl mx-auto bg-brand-paper border-2 border-brand-navy p-5 sm:p-6 rounded-xs shadow-cargo space-y-4 text-left">
        {/* Banner Header */}
        <div className="flex items-center justify-between border-b border-brand-navy/15 pb-2">
          <div className="flex items-center gap-2">
            <Badge variant="navy" size="sm">
              UK GDPR &bull; PECR
            </Badge>
            <h2
              id="cookie-banner-title"
              className="font-display font-black text-lg uppercase tracking-wide text-brand-navy"
            >
              Privacy &amp; Cookie Preferences
            </h2>
          </div>
          <span className="font-mono text-[0.625rem] text-brand-navy/85 font-semibold uppercase">
            REGULATORY NOTICE
          </span>
        </div>

        {/* Banner Body */}
        <p
          id="cookie-banner-desc"
          className="font-sans text-xs sm:text-sm text-brand-navy/85 leading-relaxed"
        >
          We use strictly necessary cookies to ensure secure route calculation,
          CSRF protection, and quote submissions. With your consent, we also use
          analytics and performance cookies to evaluate traffic flows and
          improve our UK logistics services. You can manage or withdraw consent
          at any time.
        </p>

        {/* Manage Preferences Granular Modal/Panel */}
        {isManageOpen && (
          <div className="bg-white border-2 border-brand-navy/20 p-4 rounded-xs space-y-3 font-sans text-xs">
            <h3 className="font-mono text-xs font-bold uppercase text-brand-navy">
              Granular Consent Settings:
            </h3>

            {/* Category 1: Strictly Necessary */}
            <div className="flex items-start justify-between gap-4 p-2.5 bg-brand-paper border border-brand-navy/15 rounded-xs">
              <div>
                <span className="font-bold text-brand-navy block">
                  Strictly Necessary Cookies (Always Active)
                </span>
                <span className="text-brand-navy/70 text-[0.6875rem]">
                  Required for site operation, load planner state persistence,
                  and form security.
                </span>
              </div>
              <span className="font-mono font-bold text-brand-red text-xs shrink-0">
                ENABLED
              </span>
            </div>

            {/* Category 2: Performance & Analytics */}
            <label className="flex items-start justify-between gap-4 p-2.5 bg-brand-paper border border-brand-navy/15 rounded-xs cursor-pointer">
              <div>
                <span className="font-bold text-brand-navy block">
                  Performance &amp; Analytics Cookies
                </span>
                <span className="text-brand-navy/70 text-[0.6875rem]">
                  Measures route page views and site load speeds via Google Tag
                  Manager (Consent Mode v2).
                </span>
              </div>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                className="w-4 h-4 mt-1 accent-brand-navy cursor-pointer"
              />
            </label>

            {/* Category 3: Marketing & Targeting */}
            <label className="flex items-start justify-between gap-4 p-2.5 bg-brand-paper border border-brand-navy/15 rounded-xs cursor-pointer">
              <div>
                <span className="font-bold text-brand-navy block">
                  Targeting &amp; Marketing Cookies
                </span>
                <span className="text-brand-navy/70 text-[0.6875rem]">
                  Used solely for measuring conversions and transit service
                  relevance.
                </span>
              </div>
              <input
                type="checkbox"
                checked={marketingEnabled}
                onChange={(e) => setMarketingEnabled(e.target.checked)}
                className="w-4 h-4 mt-1 accent-brand-navy cursor-pointer"
              />
            </label>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                size="sm"
                variant="primary"
                onClick={handleSavePreferences}
              >
                Save Preferences
              </Button>
            </div>
          </div>
        )}

        {/* Bottom Actions Row: Accept, Reject, Manage */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="text-[0.6875rem] font-sans text-brand-navy/90">
            Read our full{" "}
            <Link
              href="/privacy"
              className="underline font-bold hover:text-brand-red"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/cookies"
              className="underline font-bold hover:text-brand-red"
            >
              Cookie Policy
            </Link>
            .
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button size="sm" variant="secondary" onClick={handleRejectAll}>
              Reject All
            </Button>
            <Button
              size="sm"
              variant="kraft"
              onClick={() => setIsManageOpen((prev) => !prev)}
            >
              {isManageOpen ? "Close Preferences" : "Manage Preferences"}
            </Button>
            <Button size="sm" variant="primary" onClick={handleAcceptAll}>
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
