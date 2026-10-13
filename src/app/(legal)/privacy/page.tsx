import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { siteConfig } from "@/content/site";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("Privacy Policy"),
  description: formatSeoDescription(
    "UK GDPR privacy policy for AB Removals. Understand how your personal data, quotes, and move details are processed and protected.",
  ),
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Privacy Policy", href: "/privacy" }]}
          />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="border-b border-slate-100 pb-6 mb-8">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Legal Document • UK GDPR & DPA 2018
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: October 2026 • Status: Draft Template (Pending
              Qualified Review)
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
            <div className="rounded-xl bg-slate-100 border border-slate-200 p-4 text-xs text-slate-800 not-prose">
              <strong>Data Protection Notice:</strong> AB Removals &amp;
              Transport Ltd is committed to safeguarding personal data in full
              compliance with the UK General Data Protection Regulation (UK
              GDPR) and Data Protection Act 2018.
            </div>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                1. Data Controller Information
              </h2>
              <p>
                The data controller responsible for the personal data collected
                via this website is:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Entity Name:</strong> AB Removals &amp; Transport Ltd
                  trading as {siteConfig.name}
                </li>
                <li>
                  <strong>Company Registration Number:</strong> 14892341
                  (Registered in England &amp; Wales)
                </li>
                <li>
                  <strong>Registered Business Address:</strong> Unit 4, Gateway
                  Business Park, Silvertown Way, London, E16 1EA
                </li>
                <li>
                  <strong>ICO Registration Reference:</strong> ZB589412
                </li>
                <li>
                  <strong>Privacy Contact:</strong> {siteConfig.email}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                2. Personal Data We Collect
              </h2>
              <p>
                We only collect data necessary to provide accurate removals
                quotes, execute van transport, and respond to enquiries:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Contact Information:</strong> Full name, telephone
                  number, and email address.
                </li>
                <li>
                  <strong>Logistics & Move Data:</strong> Collection and
                  delivery postcodes, property access profiles (floors, lift
                  status), and itemized cargo summaries.
                </li>
                <li>
                  <strong>Technical & Security Data:</strong> IP addresses and
                  user-agent strings processed strictly for security rate
                  limiting and CSRF protection. Zero PII is retained in our
                  logging storage.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                3. Lawful Basis for Processing
              </h2>
              <p>
                In compliance with Article 6 of the UK GDPR, we process personal
                information on the following lawful grounds:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Contractual Necessity:</strong> Processing your quote
                  request and fulfilling moving and haulage bookings.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> Preventing cyber abuse,
                  brute-force spam submissions, and securing our digital
                  infrastructure.
                </li>
                <li>
                  <strong>Legal Obligation:</strong> Maintaining statutory
                  accounting, VAT, and tax records under UK corporate law.
                </li>
                <li>
                  <strong>Consent:</strong> Where you provide explicit consent
                  for analytical cookies via our cookie consent banner.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                4. Third-Party Service Providers
              </h2>
              <p>
                We never sell, rent, or trade your personal data. We engage
                vetted processors strictly to deliver services:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Resend:</strong> Secure transactional email dispatch
                  for quote confirmations and enquiries.
                </li>
                <li>
                  <strong>Hosting Infrastructure:</strong> Secure UK/EU hosting
                  providing SSL encryption and firewall defense.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                5. Data Retention Periods
              </h2>
              <p>
                Enquiries and quotes that do not proceed to a confirmed booking
                are automatically and securely deleted within 90 days of
                receipt. Confirmed booking manifests, dispatch records, and VAT
                invoices are retained for statutory HMRC accounting purposes for
                6 years in accordance with UK corporate law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                6. Your Data Subject Rights
              </h2>
              <p>
                Under the UK GDPR, you hold significant statutory rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Right to access the personal data held about you (Subject
                  Access Request).
                </li>
                <li>
                  Right to rectification of inaccurate or incomplete
                  information.
                </li>
                <li>
                  Right to erasure (&ldquo;right to be forgotten&rdquo;) where
                  statutory retention grounds have lapsed.
                </li>
                <li>
                  Right to restriction of processing and right to object to
                  processing.
                </li>
              </ul>
              <p className="mt-2">
                To exercise any of these statutory rights, please email our
                privacy team at {siteConfig.email}. We respond within one
                calendar month without administrative charge.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                7. Supervisory Authority Complaints
              </h2>
              <p>
                If you have concerns about our data handling, you have the right
                to lodge an official complaint with the UK Information
                Commissioner&apos;s Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 underline"
                >
                  ico.org.uk
                </a>{" "}
                or by telephone at 0303 123 1113.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
