import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/content/site";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("Contact Us"),
  description: formatSeoDescription(
    "Get in touch with AB Removals. Call 07405 328 674 or send an enquiry. Friendly team, prompt answers, nationwide removals.",
  ),
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
            Direct Communication Channels
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Contact AB Removals
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about booking our Luton van, arranging parking
            suspensions, or moving long-distance? Reach out to our transport
            coordinators directly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Operating Scope (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Direct Contact Methods
              </h2>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 text-lg font-bold">
                    📞
                  </span>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Call Us for Free Quote
                    </span>
                    <a
                      href={siteConfig.telHref}
                      className="font-bold text-slate-900 hover:text-red-600 transition-colors text-base"
                    >
                      {siteConfig.telephone}
                    </a>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Direct line for bookings & urgent moves
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 text-lg font-bold">
                    💬
                  </span>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      WhatsApp Quick Chat
                    </span>
                    <a
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline text-base"
                    >
                      WhatsApp for Free Quote
                    </a>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Fast responses, photo & inventory checks
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 text-lg font-bold">
                    ✉️
                  </span>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-bold text-slate-900 hover:text-red-600 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Quotes & formal corporate billing
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 text-lg font-bold">
                    🕒
                  </span>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Operating Hours
                    </span>
                    <span className="font-semibold text-slate-900 text-sm block">
                      Open 24/7 (24 Hours, 7 Days a Week)
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5 block">
                      Dispatch team available 24/7 for nationwide moves &amp;
                      urgent bookings
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Service Area Statement */}
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-2">
                Operational Statement
              </span>
              <h3 className="text-lg font-bold mb-2">
                Nationwide UK Service Coverage
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                We operate direct door-to-door transit connecting all 30 primary
                UK coverage areas — including Greater London, West Midlands,
                North West, Yorkshire, the South Coast, Wales, and Scotland.
              </p>
              <div className="rounded-xl bg-slate-800 p-3.5 border border-slate-700 text-xs text-slate-400">
                <span className="font-bold text-white block mb-0.5">
                  Operating Base:
                </span>
                {siteConfig.address.streetAddress},{" "}
                {siteConfig.address.addressLocality}
              </div>
            </div>
          </div>

          {/* Secure Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  Send an Enquiry
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">
                  Online Contact Form
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Leave a note with your move details. Our team monitors
                  enquiries and responds promptly.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
