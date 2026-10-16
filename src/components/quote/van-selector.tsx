"use client";

import { Badge, Stamp } from "@/components/ui";
import { VAN_OPTIONS } from "@/lib/validations/quote";

interface VanSelectorProps {
  selectedVanId: string;
  onSelectVan: (vanId: string) => void;
  additionalVans?: string[];
  onUpdateAdditionalVans?: (vans: string[]) => void;
  className?: string;
}

export function VanSelector({
  selectedVanId,
  onSelectVan,
  additionalVans = [],
  onUpdateAdditionalVans,
  className = "",
}: VanSelectorProps) {
  const currentVan =
    VAN_OPTIONS.find((v) => v.id === selectedVanId) || VAN_OPTIONS[0];

  const handleAddAdditionalVan = (vanId: string) => {
    if (additionalVans.length >= 3) return;
    onUpdateAdditionalVans?.([...additionalVans, vanId]);
  };

  const handleRemoveAdditionalVan = (index: number) => {
    const updated = [...additionalVans];
    updated.splice(index, 1);
    onUpdateAdditionalVans?.(updated);
  };

  return (
    <section
      aria-labelledby="van-selector-heading"
      className={`bg-brand-paper border-2 border-brand-navy shadow-cargo rounded-xs overflow-hidden ${className}`}
    >
      {/* Waybill Eyebrow & Header */}
      <div className="bg-brand-navy text-brand-paper p-4 sm:p-6 border-b-2 border-brand-navy">
        <div className="flex items-center gap-2 mb-1.5">
          <Badge variant="red" size="sm">
            STEP 01
          </Badge>
          <span className="font-mono text-xs uppercase tracking-wider text-brand-tan">
            FLEET VEHICLE SPECIFICATION
          </span>
        </div>
        <h2
          id="van-selector-heading"
          className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-white"
        >
          Select Your Van Size
        </h2>
        <p className="font-sans text-xs sm:text-sm text-brand-paper/85 mt-1 leading-relaxed max-w-3xl">
          Choose the right vehicle for your move. From single-item courier
          pickups to our flagship 3.5-tonne Luton box vans equipped with 500kg
          hydraulic tail lifts and full protective equipment.
        </p>
      </div>

      {/* Grid of Interactive Van Cards */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        <div
          role="radiogroup"
          aria-label="Select removals vehicle"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {VAN_OPTIONS.map((van) => {
            const isSelected = van.id === selectedVanId;

            return (
              <button
                key={van.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onSelectVan(van.id)}
                className={`group relative flex flex-col justify-between p-4 rounded-xs border-2 cursor-pointer transition-all duration-200 text-left select-none outline-none ${
                  isSelected
                    ? "bg-white border-brand-navy shadow-cargo-lg ring-2 ring-brand-red/30 -translate-y-1"
                    : "bg-brand-paper-light border-brand-navy/20 hover:border-brand-navy/60 hover:bg-white hover:shadow-cargo-sm"
                }`}
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-1 mb-3">
                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs border ${
                      isSelected
                        ? "bg-brand-red text-white border-brand-red-700"
                        : "bg-brand-paper text-brand-navy/70 border-brand-navy/20"
                    }`}
                  >
                    {van.badge || "Standard Van"}
                  </span>

                  {isSelected && (
                    <Stamp variant="red" size="sm" rotation="2">
                      SELECTED
                    </Stamp>
                  )}
                </div>

                {/* Van Schematic Graphic */}
                <div className="my-2 py-3 px-2 bg-brand-paper/60 rounded-xs border border-brand-navy/10 flex items-center justify-center">
                  <VanGraphic vanId={van.id} isSelected={isSelected} />
                </div>

                {/* Van Title & Dimensions */}
                <div className="space-y-1 mb-3">
                  <h3 className="font-display font-black text-lg text-brand-navy uppercase leading-tight group-hover:text-brand-red transition-colors">
                    {van.shortName}
                  </h3>
                  <p className="font-mono text-xs font-bold text-brand-navy/70">
                    {van.volume}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="space-y-1.5 pt-2 border-t border-brand-navy/10 text-[11px] font-mono text-brand-navy/85">
                  <div className="flex justify-between">
                    <span className="text-brand-navy/85">Payload:</span>
                    <span className="font-bold text-brand-navy">
                      {van.payload}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-navy/85">Dimensions:</span>
                    <span className="font-bold text-brand-navy">
                      {van.dimensions}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-navy/85">Recommended:</span>
                    <span className="font-bold text-brand-navy">
                      {van.recommendedCrew}
                    </span>
                  </div>
                </div>

                {/* Suitability Note */}
                <p className="mt-3 pt-2 border-t border-brand-navy/10 text-xs font-sans text-brand-navy/90 leading-relaxed">
                  {van.description}
                </p>

                {/* Select Button */}
                <div className="mt-4 pt-2">
                  <span
                    className={`block w-full py-2 px-3 text-xs font-display font-black uppercase tracking-wider rounded-xs border text-center transition-all ${
                      isSelected
                        ? "bg-brand-navy text-white border-brand-navy-950 shadow-xs"
                        : "bg-white text-brand-navy border-brand-navy/30 group-hover:border-brand-navy group-hover:bg-brand-paper"
                    }`}
                  >
                    {isSelected ? "✓ Selected Vehicle" : "Select This Van"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* =====================================================================
            ADDITIONAL VAN FLEET CONTROLS
            ===================================================================== */}
        <div className="p-4 sm:p-5 rounded-xs border-2 border-brand-navy/20 bg-brand-paper-light space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-navy/15 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">
                  🚚➕
                </span>
                <h3 className="font-display font-black text-base sm:text-lg text-brand-navy uppercase">
                  Need An Additional Van? (Multi-Vehicle Move)
                </h3>
              </div>
              <p className="font-sans text-xs text-brand-navy/75 mt-0.5">
                Moving a 3–5 bed house, large office, or need simultaneous
                multi-point loading? Add extra vans to your fleet.
              </p>
            </div>

            <div className="inline-flex rounded-xs border-2 border-brand-navy bg-white p-0.5 shrink-0 self-start sm:self-center">
              <button
                type="button"
                onClick={() => onUpdateAdditionalVans?.([])}
                className={`px-3 py-1.5 font-mono text-xs font-bold uppercase transition-colors rounded-xs ${
                  additionalVans.length === 0
                    ? "bg-brand-navy text-white"
                    : "text-brand-navy hover:bg-brand-paper"
                }`}
              >
                1 Van (Single)
              </button>
              <button
                type="button"
                onClick={() => {
                  if (additionalVans.length === 0) {
                    onUpdateAdditionalVans?.([selectedVanId]);
                  }
                }}
                className={`px-3 py-1.5 font-mono text-xs font-bold uppercase transition-colors rounded-xs ${
                  additionalVans.length > 0
                    ? "bg-brand-red text-white"
                    : "text-brand-navy hover:bg-brand-paper"
                }`}
              >
                + Add Additional Van
                {additionalVans.length > 0 ? ` (${additionalVans.length})` : ""}
              </button>
            </div>
          </div>

          {additionalVans.length > 0 && (
            <div className="space-y-4 pt-1">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold uppercase text-brand-navy/80 block">
                  Add Vehicles to Your Fleet (Up to 3 additional vans):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {VAN_OPTIONS.map((van) => (
                    <button
                      key={van.id}
                      type="button"
                      disabled={additionalVans.length >= 3}
                      onClick={() => handleAddAdditionalVan(van.id)}
                      className={`p-2.5 rounded-xs border-2 text-left flex flex-col justify-between transition-all ${
                        additionalVans.length >= 3
                          ? "opacity-50 cursor-not-allowed bg-brand-paper border-brand-navy/20"
                          : "bg-white border-brand-navy hover:border-brand-red hover:shadow-cargo-xs cursor-pointer"
                      }`}
                    >
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase text-brand-red block">
                          + Add Vehicle
                        </span>
                        <p className="font-display font-black text-xs text-brand-navy uppercase mt-0.5">
                          {van.shortName}
                        </p>
                      </div>
                      <span className="font-mono text-[11px] text-brand-navy/70 mt-1 block">
                        {van.volume} • {van.payload}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Extra Fleet List */}
              <div className="space-y-2 pt-2 border-t border-brand-navy/15">
                <span className="font-mono text-xs font-bold uppercase text-brand-navy block">
                  Allocated Additional Vehicles:
                </span>
                <div className="space-y-2">
                  {additionalVans.map((vanId, idx) => {
                    const extraVan =
                      VAN_OPTIONS.find((v) => v.id === vanId) || VAN_OPTIONS[0];
                    return (
                      <div
                        key={`extra-van-${idx}-${vanId}`}
                        className="flex items-center justify-between p-3 bg-white border-2 border-brand-navy/30 rounded-xs shadow-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="font-mono text-xs font-bold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-xs border border-brand-red/20"
                            aria-hidden="true"
                          >
                            EXTRA #{idx + 1}
                          </span>
                          <div>
                            <p className="font-display font-black text-sm text-brand-navy uppercase">
                              {extraVan.name}
                            </p>
                            <span className="font-mono text-xs text-brand-navy/70">
                              {extraVan.volume} • {extraVan.payload} payload
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemoveAdditionalVan(idx)}
                          className="font-mono text-xs font-bold text-brand-red hover:underline px-2 py-1 cursor-pointer"
                        >
                          ✕ Remove
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 bg-brand-navy/5 border border-brand-navy/15 rounded-xs text-xs font-sans text-brand-navy flex items-center gap-2">
                <span className="text-brand-red font-bold">
                  ✓ Multi-Van Fleet:
                </span>
                <span>
                  All vehicles will be dispatched concurrently with coordinated
                  driver and loading teams.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Selected Vehicle / Fleet Confirmation Strip */}
        <div className="p-4 bg-brand-navy text-white rounded-xs border-2 border-brand-navy-950 shadow-cargo-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">
              🚚
            </span>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-brand-tan block">
                {additionalVans.length > 0
                  ? `ALLOCATED FLEET (${additionalVans.length + 1} VEHICLES):`
                  : "ALLOCATED TO YOUR QUOTE:"}
              </span>
              <p className="font-display font-black text-base sm:text-lg uppercase text-white leading-tight">
                {currentVan.name}
                {additionalVans.length > 0 && (
                  <span className="text-brand-tan font-sans text-sm font-normal normal-case block sm:inline sm:ml-2">
                    + {additionalVans.length} additional vehicle
                    {additionalVans.length > 1 ? "s" : ""}
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="tan" size="sm">
              {additionalVans.length > 0
                ? `${additionalVans.length + 1} Vehicles`
                : currentVan.volume}
            </Badge>
            <Badge variant="red" size="sm">
              {additionalVans.length > 0
                ? "Multi-Van Team"
                : `${currentVan.payload} MAX`}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Scalable schematic visual icon for each vehicle type.
 */
function VanGraphic({
  vanId,
  isSelected,
}: {
  vanId: string;
  isSelected: boolean;
}) {
  const strokeColor = isSelected ? "#DC0109" : "#03234C";

  if (vanId === "small-van") {
    return (
      <svg
        viewBox="0 0 160 80"
        className="w-full h-16 max-w-[140px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Compact Cargo Van */}
        <path
          d="M20 55 H135 V32 C135 30 132 28 128 28 H95 L75 28 L55 38 H24 C20 38 18 42 18 46 V55 Z"
          fill="#FAF9F5"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Cab Window */}
        <path
          d="M55 38 H75 L92 32 H78 L60 38 Z"
          fill="#03234C"
          opacity="0.15"
        />
        {/* Wheels */}
        <circle cx="42" cy="55" r="9" fill="#03234C" />
        <circle cx="42" cy="55" r="4" fill="#FFFFFF" />
        <circle cx="112" cy="55" r="9" fill="#03234C" />
        <circle cx="112" cy="55" r="4" fill="#FFFFFF" />
      </svg>
    );
  }

  if (vanId === "mwb-van") {
    return (
      <svg
        viewBox="0 0 160 80"
        className="w-full h-16 max-w-[140px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Medium Panel Van */}
        <path
          d="M15 55 H142 V26 C142 24 139 22 135 22 H85 L65 24 L42 36 H18 C15 36 14 40 14 45 V55 Z"
          fill="#FAF9F5"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Side Sliding Door Line */}
        <line
          x1="85"
          y1="23"
          x2="85"
          y2="55"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        {/* Wheels */}
        <circle cx="38" cy="55" r="10" fill="#03234C" />
        <circle cx="38" cy="55" r="4" fill="#FFFFFF" />
        <circle cx="118" cy="55" r="10" fill="#03234C" />
        <circle cx="118" cy="55" r="4" fill="#FFFFFF" />
      </svg>
    );
  }

  if (vanId === "lwb-van") {
    return (
      <svg
        viewBox="0 0 170 80"
        className="w-full h-16 max-w-[150px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Long Wheelbase High Roof Van */}
        <path
          d="M12 55 H155 V20 C155 18 152 16 148 16 H80 L60 20 L38 34 H15 C12 34 10 38 10 43 V55 Z"
          fill="#FAF9F5"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* High Roof Outline */}
        <line
          x1="78"
          y1="18"
          x2="148"
          y2="18"
          stroke="#DC0109"
          strokeWidth="2"
        />
        {/* Wheels */}
        <circle cx="35" cy="55" r="10" fill="#03234C" />
        <circle cx="35" cy="55" r="4" fill="#FFFFFF" />
        <circle cx="132" cy="55" r="10" fill="#03234C" />
        <circle cx="132" cy="55" r="4" fill="#FFFFFF" />
      </svg>
    );
  }

  // Flagship: 3.5T Luton Box Van with Tail Lift
  return (
    <svg
      viewBox="0 0 170 80"
      className="w-full h-16 max-w-[150px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Luton Box Body */}
      <rect
        x="55"
        y="12"
        width="100"
        height="43"
        fill="#FAF9F5"
        stroke={strokeColor}
        strokeWidth="2.5"
        rx="1"
      />
      {/* Over-cab Luton Pod */}
      <path
        d="M55 12 H42 C38 12 35 15 35 19 V28 H55 V12 Z"
        fill="#DC0109"
        stroke={strokeColor}
        strokeWidth="2"
      />
      {/* Driver Cab */}
      <path
        d="M55 28 H35 L20 40 H10 V55 H55 V28 Z"
        fill="#03234C"
        stroke={strokeColor}
        strokeWidth="2"
      />
      {/* Rear Tail Lift Platform */}
      <rect
        x="156"
        y="24"
        width="4"
        height="31"
        fill="#DC0109"
        stroke={strokeColor}
        strokeWidth="1"
      />
      {/* Wheels */}
      <circle cx="32" cy="55" r="10" fill="#03234C" />
      <circle cx="32" cy="55" r="4" fill="#FFFFFF" />
      <circle cx="130" cy="55" r="10" fill="#03234C" />
      <circle cx="130" cy="55" r="4" fill="#FFFFFF" />
    </svg>
  );
}
