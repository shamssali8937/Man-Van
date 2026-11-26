import { siteConfig } from "@/content/site";

export function LondonServiceDetailsSection({
  headingPrefix = "London Removals",
}: {
  headingPrefix?: string;
}) {
  return (
    <section className="max-w-4xl mx-auto rounded-3xl bg-white p-8 md:p-10 border border-slate-200 shadow-xs mb-12 md:mb-16">
      <div className="mb-6 pb-6 border-b border-slate-200">
        <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
          24/7 London Fleet &amp; Booking Guide
        </span>
        <h2 className="text-2xl font-bold text-slate-900">
          {headingPrefix}: What Is Included, Vehicle Sizes &amp; How Booking
          Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
          <h3 className="text-base font-bold text-slate-900 mb-3">
            Vehicle Sizes &amp; Included Equipment
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li>
              <strong>3.5-Tonne Luton Box Van:</strong> 18–20 cubic metres
              enclosed capacity (up to 4.1m length × 2.0m width × 2.2m height)
            </li>
            <li>
              <strong>500kg Hydraulic Tail Lift:</strong> Smooth ground-to-van
              loading for sofas, appliances, and office equipment
            </li>
            <li>
              <strong>Protective Gear Included:</strong> Quilted transit
              blankets, ratchet tie-down straps, and four-wheel furniture
              dollies
            </li>
            <li>
              <strong>ULEZ Compliant:</strong> Euro 6 fleet with zero daily ULEZ
              emissions surcharge across all 32 London boroughs
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
          <h3 className="text-base font-bold text-slate-900 mb-3">
            How Booking Works (Open 24/7)
          </h3>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
            <li>
              <strong>Request Your Quote:</strong> Book online or call{" "}
              <a
                href={siteConfig.telHref}
                className="font-semibold text-red-600 hover:underline"
              >
                {siteConfig.telephone}
              </a>{" "}
              any time, 24/7.
            </li>
            <li>
              <strong>Choose Your Crew:</strong> Driver-only (£55–£65/hr) or
              two-person crew (£75–£90/hr), 2-hour minimum booking.
            </li>
            <li>
              <strong>Secure Your Slot:</strong> Pay a £40 booking deposit to
              lock in your van, arrival window, and dedicated door-to-door
              transit.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
