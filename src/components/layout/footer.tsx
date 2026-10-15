import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "../ui/container";
import { Stamp } from "../ui/stamp";
import { TapeDivider } from "../ui/tape-divider";

export function Footer() {
  const currentYear = siteConfig.copyrightYear;

  return (
    <footer className="bg-brand-navy text-white relative border-t-2 border-brand-navy-950 overflow-hidden">
      {/* "The Route" Hazard Tape Section Divider */}
      <TapeDivider
        size="md"
        variant="standard"
        label="UK FREIGHT & TRANSIT NETWORK /// RELIABLE DOOR-TO-DOOR SERVICE"
        repeatLabel
      />

      <div className="pt-12 sm:pt-16 pb-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/20">
            {/* Column 1: Brand & Identity */}
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-paper"
                aria-label="AB Removals – Return to homepage"
              >
                <div className="relative w-40 h-14">
                  <Image
                    src="/brand/logo-light.svg"
                    alt="AB Removals – Man and Van"
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <p className="font-sans text-sm text-brand-paper-rule leading-relaxed">
                Dedicated domestic removals, commercial moves, and agile man and
                van services operating across London, the Midlands, and
                nationwide UK transit routes.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <Stamp
                  variant="paper"
                  size="sm"
                  rotation="-2"
                  subtext="ALL LOADS"
                >
                  INSURED TRANSIT
                </Stamp>
                <Stamp variant="paper" size="sm" rotation="3">
                  NO HIDDEN FEES
                </Stamp>
              </div>
            </div>

            {/* Column 2: Removals Services */}
            <div>
              <h3 className="font-display italic font-black uppercase text-base text-brand-paper-light tracking-wider mb-4 border-l-2 border-brand-red pl-2.5">
                SERVICES IN TRANSIT
              </h3>
              <ul className="space-y-2.5 text-sm font-sans">
                {siteConfig.serviceLinks.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-white/80 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-brand-red font-bold text-xs">
                        ›
                      </span>
                      <span>{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Coverage Areas */}
            <div>
              <h3 className="font-display italic font-black uppercase text-base text-brand-paper-light tracking-wider mb-4 border-l-2 border-brand-red pl-2.5">
                PRIMARY ROUTE HUBS
              </h3>
              <ul className="space-y-2.5 text-sm font-sans">
                {siteConfig.keyAreaLinks.map((area) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="text-white/80 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-brand-red font-bold text-xs">
                        ›
                      </span>
                      <span>{area.label}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/areas"
                    className="inline-block mt-2 font-display italic font-black uppercase text-xs text-brand-tan hover:text-white tracking-wider"
                  >
                    VIEW ALL UK COVERAGE AREAS →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Direct Dispatch & Contact Details */}
            <div className="space-y-3">
              <h3 className="font-display italic font-black uppercase text-base text-brand-paper-light tracking-wider mb-4 border-l-2 border-brand-red pl-2.5">
                DIRECT DISPATCH
              </h3>

              {/* Telephone */}
              <div>
                <span className="font-mono text-[0.625rem] text-brand-tan uppercase font-bold tracking-wider block">
                  PHONE ENQUIRIES &amp; BOOKINGS
                </span>
                <a
                  href={siteConfig.telHref}
                  className="font-display italic font-black text-xl text-white hover:text-brand-red transition-colors inline-block mt-0.5"
                >
                  {siteConfig.telephone}
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <span className="font-mono text-[0.625rem] text-brand-tan uppercase font-bold tracking-wider block">
                  INSTANT WHATSAPP QUOTES
                </span>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans font-bold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                >
                  <span>Chat on WhatsApp ({siteConfig.telephone})</span>
                </a>
              </div>

              {/* Email Placeholder */}
              <div>
                <span className="font-mono text-[0.625rem] text-brand-tan uppercase font-bold tracking-wider block">
                  OFFICIAL EMAIL
                </span>
                <span className="font-mono text-xs text-white/70 block mt-0.5">
                  {siteConfig.email}
                </span>
              </div>

              {/* Business Address Placeholder */}
              <div>
                <span className="font-mono text-[0.625rem] text-brand-tan uppercase font-bold tracking-wider block">
                  REGISTERED BUSINESS ADDRESS
                </span>
                <p className="font-mono text-xs text-white/70 mt-0.5 leading-normal">
                  {siteConfig.address.formatted}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Legal, Sitemap & Copyright Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span>
                © {currentYear} {siteConfig.name}. All rights reserved.
              </span>
              <span className="hidden sm:inline">|</span>
              {siteConfig.legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white underline underline-offset-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="text-center md:text-right text-[0.6875rem] text-brand-paper-rule">
              <span>{"CONCEPT: THE ROUTE — LIVE UK TRACKED CARGO"}</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
