import type { Metadata } from "next";
import { QuoteWizard } from "@/components/quote";
import { Badge, Container, Heading, Stamp, TapeDivider } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Request a Free Moving Quote | Direct UK Removals & Man and Van",
  description:
    "Select your van size, enter your UK collection and delivery postcodes, and request a transparent, fixed removals quote. Dedicated direct transit with zero hidden fees.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <div className="bg-route-grid bg-brand-paper min-h-screen pb-20">
      {/* Top Warning Caution Stripe */}
      <TapeDivider
        size="sm"
        variant="standard"
        label="DIRECT DISPATCH QUOTATION /// 3.5T LUTON FLEET /// TRANSPARENT PRICING"
        repeatLabel
      />

      {/* Page Header Section */}
      <section className="py-10 sm:py-14 border-b border-brand-navy/15 bg-brand-paper">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2.5 flex-wrap">
              <Badge variant="navy" dot>
                THE ROUTE
              </Badge>
              <Badge variant="outline">UK MAINLAND TRANSIT</Badge>
              <Stamp variant="red" size="sm" rotation="-1">
                FIXED QUOTES
              </Stamp>
            </div>

            {/* Exactly ONE <h1> on this page */}
            <Heading as="h1" size="display-xl" withRoadLine>
              REQUEST A BESPOKE REMOVALS QUOTE
            </Heading>

            <p className="font-sans text-base sm:text-lg text-brand-navy/85 leading-relaxed max-w-3xl">
              Select your vehicle size from our agile fleet — from compact
              courier vans to our flagship 3.5-tonne Luton box vans equipped
              with 500kg hydraulic tail lifts — and enter your route
              specifications for an instant, transparent quotation.
            </p>

            {/* Trust highlights banner */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono font-bold text-brand-navy/80">
              <div className="flex items-center gap-1.5">
                <span className="text-brand-red">✓</span> Zero Co-Loading
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-red">✓</span> £50k Goods in Transit
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-red">✓</span> No Hidden Mileage Fees
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-red">✓</span> 48h Free Cancellation
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Quote & Load Planner Experience */}
      <section className="py-10 sm:py-14">
        <Container>
          <QuoteWizard />
        </Container>
      </section>

      {/* Bottom Dispatch Helpline Anchor */}
      <section className="border-t border-brand-navy/15 pt-8">
        <Container>
          <div className="bg-white border-2 border-brand-navy p-6 rounded-xs shadow-cargo-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-brand-red uppercase">
                NEED RAPID TRANSIT ADVICE?
              </span>
              <h3 className="font-display font-black text-xl uppercase text-brand-navy">
                Speak Directly with Our Fleet Coordinator
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-navy/80 max-w-xl">
                Have oversized furniture, tight stairwells, or urgent move
                dates? Call our direct line for advice and immediate telephone
                bookings.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={siteConfig.telHref}
                className="px-5 py-2.5 bg-brand-navy hover:bg-brand-navy-950 text-white font-mono text-sm font-bold rounded-xs transition-colors shadow-cargo-sm"
              >
                📞 Call {siteConfig.telephone}
              </a>
              <a
                href={siteConfig.whatsappHref}
                className="px-5 py-2.5 bg-brand-paper hover:bg-brand-paper-rule text-brand-navy border-2 border-brand-navy font-mono text-sm font-bold rounded-xs transition-colors"
              >
                💬 WhatsApp Dispatch
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
