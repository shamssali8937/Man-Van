import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { siteConfig } from "@/content/site";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("Terms and Conditions"),
  description: formatSeoDescription(
    "Terms and conditions of service for AB Removals. Read our quotation policies, cancellation terms, and transit responsibilities.",
  ),
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Terms and Conditions", href: "/terms" }]}
          />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="border-b border-slate-100 pb-6 mb-8">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Legal Document • Service Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Terms & Conditions of Service
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: October 2026 • Status: Draft Template (Pending
              Qualified Review)
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
            <div className="rounded-xl bg-slate-100 border border-slate-200 p-4 text-xs text-slate-800 not-prose">
              <strong>Service Agreement Terms:</strong> These conditions govern
              all domestic and commercial haulage, removals, and transport
              services undertaken by AB Removals &amp; Transport Ltd.
            </div>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                1. Parties &amp; Definitions
              </h2>
              <p>
                These terms govern removal, transport, and haulage services
                agreed between AB Removals &amp; Transport Ltd (Company No.
                14892341) trading as {siteConfig.name} (&ldquo;the
                Carrier&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) and the
                booking individual or company (&ldquo;the Customer&rdquo;,
                &ldquo;you&rdquo;).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                2. Quotations &amp; Booking Deposits
              </h2>
              <p>
                Written quotations remain valid for 28 days from issuance. A
                booking is formally confirmed only once an agreed booking
                deposit of £40 has been received. This deposit is fully credited
                toward your final invoice on completion day.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                3. Customer Responsibilities
              </h2>
              <p>
                To ensure safe and punctual operations on move day, the Customer
                is strictly responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Parking Access:</strong> Securing valid resident
                  visitor vouchers, Pay & Display payments, or official local
                  council parking suspensions at both collection and destination
                  postcodes.
                </li>
                <li>
                  <strong>Property Access:</strong> Ensuring clear, safe
                  corridors, unblocked stairways, and reserving service lifts
                  with building management where applicable.
                </li>
                <li>
                  <strong>Packing Integrity:</strong> Ensuring personal contents
                  and fragile glassware are securely packed in sturdy cartons
                  before the arrival of our team, unless specialist packing
                  services were booked in writing.
                </li>
                <li>
                  <strong>Presence:</strong> Being present in person (or
                  appointing an authorized adult representative) during both
                  loading and unloading to verify inventory.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                4. Cancellations & Rescheduling
              </h2>
              <p>
                Because vehicle and crew schedules are committed in advance:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Cancellations or date postponements notified with 48 hours or
                  more advance notice receive a full 100% deposit refund.
                </li>
                <li>
                  Cancellations notified with less than 48 hours advance notice
                  forfeit the booking deposit to compensate for allocated
                  vehicle dwell time and reserved crew schedule.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                5. Excluded &amp; Prohibited Items
              </h2>
              <p>We do not transport under any circumstances:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Flammable bottled gases, liquid fuels, chemicals, acids, or
                  toxic solvents.
                </li>
                <li>
                  Unregistered firearms, weapons, ammunition, or illegal
                  contraband.
                </li>
                <li>Live animals, pets, reptiles, or perishable livestock.</li>
                <li>
                  Cash, currency notes, bearer bonds, or negotiable securities.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                6. Goods in Transit &amp; Liability Limitations
              </h2>
              <p>
                Consignments in our custody are transported subject to standard
                UK removal stowage practices:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Goods in Transit Insurance: Up to £50,000 per consignment
                  underwritten by Aviva Insurance.
                </li>
                <li>
                  Public Liability Insurance: £2,000,000 commercial indemnity
                  cover.
                </li>
                <li>
                  Any transit damage must be notified to the Carrier in writing
                  within 48 hours of delivery completion.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                7. Governing Law & Jurisdiction
              </h2>
              <p>
                This agreement and any dispute or claim arising out of it shall
                be governed by and construed in accordance with the laws of
                England and Wales, and the parties submit to the exclusive
                jurisdiction of the Courts of England and Wales.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
