"use client";

import Image from "next/image";
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
          Select Your Van
        </h2>
        <p className="font-sans text-xs sm:text-sm text-brand-paper/85 mt-1 leading-relaxed max-w-3xl">
          Choose from our dedicated removals fleet: Luton Van, XLWB Van, or LWB
          Van.
        </p>
      </div>

      {/* Grid of Interactive Van Cards - Photo & Name Only */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        <div
          role="radiogroup"
          aria-label="Select removals vehicle"
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
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
                {/* Header Badge & Selected Stamp */}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs border ${
                      isSelected
                        ? "bg-brand-red text-white border-brand-red-700"
                        : "bg-brand-paper text-brand-navy/70 border-brand-navy/20"
                    }`}
                  >
                    {van.badge || van.shortName}
                  </span>

                  {isSelected && (
                    <Stamp variant="red" size="sm" rotation="2">
                      SELECTED
                    </Stamp>
                  )}
                </div>

                {/* Van Photograph (No schematic, real photograph) */}
                <div className="relative w-full aspect-16/10 rounded-xs overflow-hidden border-2 border-brand-navy/20 my-2 bg-slate-100 shadow-xs">
                  <Image
                    src={van.image}
                    alt={van.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-200"
                  />
                </div>

                {/* Van Title Only (No Specifications) */}
                <div className="mt-2 text-center">
                  <h3 className="font-display font-black text-xl text-brand-navy uppercase leading-tight group-hover:text-brand-red transition-colors">
                    {van.name}
                  </h3>
                </div>

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
                Moving a large house, office, or multi-point pickup? Add extra
                vans to your fleet.
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {VAN_OPTIONS.map((van) => (
                    <button
                      key={van.id}
                      type="button"
                      disabled={additionalVans.length >= 3}
                      onClick={() => handleAddAdditionalVan(van.id)}
                      className={`p-2.5 rounded-xs border-2 text-left flex items-center gap-3 transition-all ${
                        additionalVans.length >= 3
                          ? "opacity-50 cursor-not-allowed bg-brand-paper border-brand-navy/20"
                          : "bg-white border-brand-navy hover:border-brand-red hover:shadow-cargo-xs cursor-pointer"
                      }`}
                    >
                      <div className="relative w-14 h-11 shrink-0 rounded-xs overflow-hidden border border-brand-navy/15">
                        <Image
                          src={van.image}
                          alt={van.imageAlt}
                          fill
                          sizes="60px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase text-brand-red block">
                          + Add Vehicle
                        </span>
                        <p className="font-display font-black text-xs text-brand-navy uppercase">
                          {van.name}
                        </p>
                      </div>
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
                          <div className="relative w-12 h-9 shrink-0 rounded-xs overflow-hidden border border-brand-navy/15">
                            <Image
                              src={extraVan.image}
                              alt={extraVan.imageAlt}
                              fill
                              sizes="50px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-display font-black text-sm text-brand-navy uppercase">
                              {extraVan.name}
                            </p>
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
                : currentVan.name}
            </Badge>
            <Badge variant="red" size="sm">
              {additionalVans.length > 0 ? "Multi-Van Team" : "Dedicated Fleet"}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
