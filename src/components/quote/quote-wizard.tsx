"use client";

import { useState } from "react";
import { QuoteForm } from "./quote-form";
import { VanSelector } from "./van-selector";

export function QuoteWizard() {
  const [selectedVanId, setSelectedVanId] = useState<string>("luton-tail-lift");
  const [additionalVans, setAdditionalVans] = useState<string[]>([]);

  return (
    <div className="space-y-10">
      {/* STEP 1: Interactive Van Size & Specification Selector */}
      <VanSelector
        selectedVanId={selectedVanId}
        onSelectVan={setSelectedVanId}
        additionalVans={additionalVans}
        onUpdateAdditionalVans={setAdditionalVans}
      />

      {/* STEP 2: Main Route & Transit Specification Form */}
      <QuoteForm
        vanType={selectedVanId}
        onSelectVan={setSelectedVanId}
        additionalVans={additionalVans}
        onUpdateAdditionalVans={setAdditionalVans}
      />
    </div>
  );
}
