import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { OpenCookieSettingsButton } from "@/components/common/open-cookie-settings-button";
import { siteConfig } from "@/content/site";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("Cookie Policy"),
  description: formatSeoDescription(
    "UK PECR and GDPR cookie policy for AB Removals. Learn how we handle essential tokens, consent choices, and analytical cookies.",
  ),
  path: "/cookies",
  noIndex: true,
});

export default function CookiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Cookie Policy", href: "/cookies" }]} />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="border-b border-slate-100 pb-6 mb-8">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Privacy & Electronic Communications (PECR)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Cookie Policy
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: October 2026 • Status: Draft Template (Pending
              Qualified Review)
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
            <div className="rounded-xl bg-slate-100 border border-slate-200 p-4 text-xs text-slate-800 not-prose">
              <strong>Cookie Transparency:</strong> This policy outlines the
              necessary and functional storage mechanisms used by{" "}
              {siteConfig.name}
              to deliver a secure online quote and dispatch service.
            </div>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files placed on your device by websites
                you visit. They are widely used to make websites function
                properly, protect against malicious traffic, and provide
                anonymous operational insights to site owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                2. Categories of Cookies We Use
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Strictly Necessary Cookies & Storage:</strong>{" "}
                  Essential for you to browse the website and securely use
                  features like the quote planner, contact form, and rate limit
                  protection. These cannot be disabled and do not require
                  consent under UK PECR Regulation 6.
                </li>
                <li>
                  <strong>Analytics Cookies (Optional):</strong> Help us
                  understand how visitors interact with our removals pages (such
                  as which city routes are most viewed). In compliance with
                  Google Consent Mode v2, analytical cookies are strictly
                  blocked by default until you grant explicit consent.
                </li>
                <li>
                  <strong>Marketing Cookies (Optional):</strong> Used to measure
                  advertising campaign performance. We do not currently run
                  third-party behavioral retargeting campaigns.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                3. Cookie & Token Inventory
              </h2>
              <div className="overflow-x-auto not-prose my-4">
                <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase">
                    <tr>
                      <th className="p-3">Cookie / Token</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Purpose</th>
                      <th className="p-3">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 font-mono">
                        ab_removals_cookie_consent_v1
                      </td>
                      <td className="p-3 font-semibold text-emerald-700">
                        Strictly Necessary
                      </td>
                      <td className="p-3 text-slate-600">
                        Stores your cookie consent choices (Accept, Reject,
                        Manage) in local storage.
                      </td>
                      <td className="p-3">1 Year</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono">__Host-nonce / CSP</td>
                      <td className="p-3 font-semibold text-emerald-700">
                        Strictly Necessary
                      </td>
                      <td className="p-3 text-slate-600">
                        Per-request cryptographic nonce protecting against
                        Cross-Site Scripting (XSS).
                      </td>
                      <td className="p-3">Per Request</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono">_ga, _ga_* (Optional)</td>
                      <td className="p-3 font-semibold text-blue-700">
                        Analytics (Consented)
                      </td>
                      <td className="p-3 text-slate-600">
                        Google Tag Manager / Analytics anonymous visitor
                        measurement (only with consent).
                      </td>
                      <td className="p-3">Up to 2 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                4. How to Change Your Cookie Preferences
              </h2>
              <p>
                You can change or withdraw your consent choice at any time with
                a single click. Click the button below to re-open your
                preferences panel:
              </p>
              <div className="my-4 not-prose">
                <OpenCookieSettingsButton />
              </div>
              <p className="text-xs text-slate-500">
                You can also configure your web browser (Chrome, Safari,
                Firefox, Edge) to reject or delete cookies directly within your
                browser privacy settings.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
