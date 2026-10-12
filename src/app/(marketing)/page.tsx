import type { Metadata } from "next";
import {
  Badge,
  Button,
  Container,
  Heading,
  LabelCard,
  Section,
  Stamp,
  TapeDivider,
} from "@/components/ui";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: `${siteConfig.name} | UK Removals & Man and Van`,
  description: siteConfig.description,
});

export default function HomePage() {
  return (
    <>
      {/* Route Banner Accent */}
      <TapeDivider
        size="sm"
        variant="standard"
        label="UK MAINLAND LOGISTICS /// DEDICATED LUTON TRANSIT /// DIRECT DISPATCH"
        repeatLabel
      />

      {/* Hero Section */}
      <Section variant="paper" spacing="lg" withGrid>
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="navy" dot>
                  THE ROUTE
                </Badge>
                <Badge variant="outline">GOODS IN TRANSIT INSURED</Badge>
                <Stamp variant="red" size="sm" rotation="-2">
                  DIRECT HAULAGE
                </Stamp>
              </div>

              <Heading as="h1" size="display-2xl" withRoadLine>
                {siteConfig.name}
              </Heading>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-brand-navy/80 leading-relaxed">
                {siteConfig.tagline}. Transparent pricing, professional 2-man
                crews, and live route coordination across all UK postcodes.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="primary" size="lg" href="/quote">
                  GET INSTANT QUOTE
                </Button>
                <Button variant="secondary" size="lg" href={siteConfig.telHref}>
                  CALL {siteConfig.telephone}
                </Button>
                <Button variant="ghost" size="lg" href="/services">
                  VIEW SERVICES
                </Button>
              </div>
            </div>

            {/* Quick Consignment Waybill Card */}
            <div className="w-full lg:max-w-md">
              <LabelCard
                variant="paper"
                consignmentNo="UK-DISPATCH-2026"
                destinationCode="NATIONWIDE"
                routeCode="CORRIDOR-M1-M6"
                priority="PRIORITY"
                hasBarcode
                hasEyelet
                cornerStamp={
                  <Stamp variant="red" size="sm" rotation="4">
                    VERIFIED
                  </Stamp>
                }
              >
                <h3 className="font-display italic font-black text-xl uppercase mb-2">
                  Fast UK Removals &amp; Transport
                </h3>
                <p className="font-sans text-sm text-brand-navy/80 mb-4 leading-relaxed">
                  Tail lift Luton box vans, quilted protective blankets, and
                  strapped cargo handling for houses, flats, and single bulky
                  items.
                </p>
                <div className="pt-3 border-t border-brand-navy/20 flex items-center justify-between font-mono text-xs font-bold">
                  <span>DISPATCH: 7 DAYS A WEEK</span>
                  <span className="text-brand-red">FREE QUOTES</span>
                </div>
              </LabelCard>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
