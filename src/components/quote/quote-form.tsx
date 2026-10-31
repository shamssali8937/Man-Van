"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Badge,
  Button,
  Checkbox,
  Input,
  Select,
  Stamp,
  Textarea,
} from "@/components/ui";
import { siteConfig } from "@/content/site";
import {
  HELPER_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  type QuoteFormInput,
  type QuoteFormValues,
  quoteFormSchema,
  SERVICE_TYPE_OPTIONS,
  VAN_OPTIONS,
} from "@/lib/validations/quote";
import { PostcodeAutocomplete } from "./postcode-autocomplete";

interface ExtraStop {
  id: string;
  postcode: string;
  notes: string;
}

interface QuoteFormProps {
  vanType?: string;
  onSelectVan?: (vanId: string) => void;
  additionalVans?: string[];
  onUpdateAdditionalVans?: (vans: string[]) => void;
  className?: string;
}

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function QuoteForm({
  vanType = "luton-tail-lift",
  onSelectVan,
  additionalVans = [],
  onUpdateAdditionalVans,
  className = "",
}: QuoteFormProps) {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [waybillReference, setWaybillReference] = useState<string>("");

  // Extra Drop-off / Collection Stops along the route
  const [showAdditionalStops, setShowAdditionalStops] =
    useState<boolean>(false);
  const [extraStops, setExtraStops] = useState<ExtraStop[]>([]);

  // Calculate today's minimum date in YYYY-MM-DD for native datepicker constraint
  const todayISO = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuoteFormInput, unknown, QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      vanType: vanType,
      hasAdditionalVan: additionalVans.length > 0,
      additionalVans: additionalVans,
      additionalVanDetails: "",
      serviceType: "house-removals",
      moveDate: todayISO,
      pickupPostcode: "",
      deliveryPostcode: "",
      hasAdditionalStops: false,
      additionalStops: "",
      helpers: "two_person",
      propertyType: "terraced",
      accessNotes: "",
      fullName: "",
      phone: "",
      email: "",
      notes: "",
      consent: true,
      honeypot: "",
      turnstileToken: "",
    },
  });

  // Sync vanType and additionalVans props with form state
  useEffect(() => {
    if (vanType) {
      setValue("vanType", vanType);
    }
    setValue("hasAdditionalVan", additionalVans.length > 0);
    setValue("additionalVans", additionalVans);
    if (additionalVans.length > 0) {
      const details = additionalVans
        .map((id, i) => {
          const v = VAN_OPTIONS.find((opt) => opt.id === id);
          return `Extra #${i + 1}: ${v?.name || id} (${v?.volume || ""})`;
        })
        .join("; ");
      setValue("additionalVanDetails", details);
    } else {
      setValue("additionalVanDetails", "");
    }
  }, [vanType, additionalVans, setValue]);

  // Keep additional stops synced with form data
  useEffect(() => {
    setValue("hasAdditionalStops", showAdditionalStops);
    if (!showAdditionalStops || extraStops.length === 0) {
      setValue("additionalStops", "");
    } else {
      const formatted = extraStops
        .map(
          (s, i) =>
            `Via Stop ${i + 1}: ${s.postcode || "Pending postcode"}${
              s.notes ? ` (Notes: ${s.notes})` : ""
            }`,
        )
        .join("; ");
      setValue("additionalStops", formatted);
    }
  }, [showAdditionalStops, extraStops, setValue]);

  const handleToggleAdditionalStops = (enabled: boolean) => {
    setShowAdditionalStops(enabled);
    if (enabled && extraStops.length === 0) {
      setExtraStops([{ id: "stop-1", postcode: "", notes: "" }]);
    }
  };

  const handleAddStop = () => {
    if (extraStops.length >= 3) return;
    setExtraStops((prev) => [
      ...prev,
      { id: `stop-${Date.now()}`, postcode: "", notes: "" },
    ]);
  };

  const handleRemoveStop = (id: string) => {
    setExtraStops((prev) => {
      const filtered = prev.filter((s) => s.id !== id);
      if (filtered.length === 0) {
        setShowAdditionalStops(false);
      }
      return filtered;
    });
  };

  const handleUpdateStop = (
    id: string,
    field: "postcode" | "notes",
    val: string,
  ) => {
    setExtraStops((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: val } : s)),
    );
  };

  // Form submit handler
  const onSubmit = async (data: QuoteFormValues) => {
    setSubmissionState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        const ref = `AB-UK-${Math.floor(100000 + Math.random() * 900000)}`;
        setWaybillReference(ref);
        setSubmissionState("success");
      } else {
        setErrorMessage(
          json.error ||
            "The automated quote dispatch service returned an error. Please contact our direct line on 07405 328 674.",
        );
        setSubmissionState("error");
      }
    } catch (_err) {
      setErrorMessage(
        "Network connection interrupted. Please call direct dispatch on 07405 328 674 for immediate telephone booking.",
      );
      setSubmissionState("error");
    }
  };

  const handleResetForm = () => {
    reset();
    setExtraStops([]);
    setShowAdditionalStops(false);
    setSubmissionState("idle");
    setErrorMessage("");
  };

  const selectedVanData =
    VAN_OPTIONS.find((v) => v.id === watch("vanType")) || VAN_OPTIONS[0];

  // =========================================================================
  // SUCCESS SCREEN
  // =========================================================================
  if (submissionState === "success") {
    return (
      <section
        aria-labelledby="success-heading"
        className="bg-brand-paper border-2 border-brand-navy shadow-cargo rounded-xs p-6 sm:p-10 max-w-3xl mx-auto text-left"
      >
        <div className="flex items-center justify-between border-b-2 border-brand-navy pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Stamp variant="navy" size="md">
              DISPATCH CONFIRMED
            </Stamp>
            <Badge variant="navy">WAYBILL: {waybillReference}</Badge>
          </div>
          <span className="font-mono text-xs font-bold text-brand-red uppercase">
            STATUS: RECEIVED
          </span>
        </div>

        <h2
          id="success-heading"
          className="font-display font-black text-2xl sm:text-3xl uppercase text-brand-navy mb-3"
        >
          Quote Request Successfully Logged
        </h2>

        <p className="font-sans text-sm sm:text-base text-brand-navy/85 leading-relaxed mb-6">
          Thank you for choosing {siteConfig.name}. Your journey specifications
          have been routed to our transport dispatch desk. A dedicated
          coordinator will review your route corridors, allocated vehicle (
          <strong>{selectedVanData.name}</strong>), and crew configuration to
          provide your transparent, fixed quote within 30 minutes.
        </p>

        {/* Route Snapshot Manifest Box */}
        <div className="bg-white border-2 border-brand-navy p-5 rounded-xs space-y-3 font-mono text-xs mb-6 shadow-cargo-sm">
          <div className="flex justify-between border-b border-brand-navy/15 pb-2">
            <span className="text-brand-navy/60 font-bold uppercase">
              SELECTED FLEET:
            </span>
            <div className="text-right">
              <span className="font-black text-brand-red uppercase block">
                {selectedVanData.name}
              </span>
              {additionalVans.length > 0 && (
                <span className="font-mono text-[11px] text-brand-navy block mt-0.5">
                  + {additionalVans.length} Additional Van
                  {additionalVans.length > 1 ? "s" : ""} (
                  {additionalVans
                    .map(
                      (id) => VAN_OPTIONS.find((v) => v.id === id)?.shortName,
                    )
                    .join(", ")}
                  )
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between border-b border-brand-navy/15 pb-2">
            <span className="text-brand-navy/60 font-bold uppercase">
              SERVICE:
            </span>
            <span className="font-bold text-brand-navy">
              {SERVICE_TYPE_OPTIONS.find(
                (s) => s.value === watch("serviceType"),
              )?.label || watch("serviceType")}
            </span>
          </div>

          <div className="flex justify-between border-b border-brand-navy/15 pb-2">
            <span className="text-brand-navy/60 font-bold uppercase">
              TRANSIT CORRIDOR:
            </span>
            <span className="font-bold text-brand-navy">
              {watch("pickupPostcode") || "UK Mainland / Flexible"} →{" "}
              {watch("deliveryPostcode") || "UK Destination / Flexible"}
            </span>
          </div>

          {showAdditionalStops && extraStops.length > 0 && (
            <div className="border-b border-brand-navy/15 pb-2">
              <span className="text-brand-navy/60 font-bold uppercase block mb-1">
                ADDITIONAL VIA STOPS:
              </span>
              <ul className="list-disc pl-4 space-y-0.5 text-brand-navy">
                {extraStops.map((s, i) => (
                  <li key={s.id}>
                    Stop {i + 1}: {s.postcode || "Specified postcode"}{" "}
                    {s.notes && `(${s.notes})`}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-between border-b border-brand-navy/15 pb-2">
            <span className="text-brand-navy/60 font-bold uppercase">
              CREW CONFIGURATION:
            </span>
            <span className="font-bold text-brand-navy">
              {HELPER_OPTIONS.find((h) => h.value === watch("helpers"))?.label}
            </span>
          </div>

          <div className="flex justify-between border-b border-brand-navy/15 pb-2">
            <span className="text-brand-navy/60 font-bold uppercase">
              PROPERTY TYPE:
            </span>
            <span className="font-bold text-brand-navy">
              {PROPERTY_TYPE_OPTIONS.find(
                (p) => p.value === watch("propertyType"),
              )?.label || watch("propertyType")}
            </span>
          </div>

          <div className="flex justify-between border-b border-brand-navy/15 pb-2">
            <span className="text-brand-navy/60 font-bold uppercase">
              SCHEDULED DATE:
            </span>
            <span className="font-bold text-brand-navy">
              {watch("moveDate") || "Flexible / Pending"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-brand-navy/60 font-bold uppercase">
              CONTACT DISPATCH VIA:
            </span>
            <span className="font-bold text-brand-navy">
              {watch("phone") || watch("email") || "Direct Customer Line"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" href={siteConfig.telHref}>
            Call Hotline: {siteConfig.telephone}
          </Button>
          <Button variant="kraft" href={siteConfig.whatsappHref}>
            WhatsApp for Free Quote
          </Button>
          <Button variant="secondary" onClick={handleResetForm}>
            Submit Another Route Request
          </Button>
        </div>
      </section>
    );
  }

  // =========================================================================
  // MAIN QUOTE FORM
  // =========================================================================
  return (
    <section
      aria-labelledby="quote-form-heading"
      className={`bg-brand-paper border-2 border-brand-navy shadow-cargo rounded-xs overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="bg-brand-navy text-brand-paper p-4 sm:p-6 border-b-2 border-brand-navy">
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="red" size="sm">
            STEP 02
          </Badge>
          <span className="font-mono text-xs uppercase tracking-wider text-brand-tan">
            TRANSIT SPECIFICATION &amp; ROUTE DETAILS
          </span>
        </div>
        <h2
          id="quote-form-heading"
          className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-white"
        >
          Request Your Moving Quote
        </h2>
        <p className="font-sans text-xs sm:text-sm text-brand-paper/85 mt-1 leading-relaxed max-w-3xl">
          Enter your route postcodes, moving date, and access specifications.
          Zero hidden stairs charges, zero co-loading, and full £50,000 Goods in
          Transit coverage.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit, (formErrors) => {
          console.warn("[Quote Form Validation Warning]:", formErrors);
        })}
        noValidate
        className="p-4 sm:p-6 lg:p-8 space-y-6 text-left"
      >
        {/* =====================================================================
            FAILURE STATE ALERT WITH DIRECT PHONE FALLBACK
            ===================================================================== */}
        {submissionState === "error" && (
          <div
            role="alert"
            className="p-4 sm:p-5 bg-brand-red/10 border-2 border-brand-red rounded-xs space-y-3"
          >
            <div className="flex items-center gap-2 text-brand-red font-display font-black text-lg uppercase">
              ONLINE DISPATCH TEMPORARILY UNAVAILABLE
            </div>

            <p className="font-sans text-xs sm:text-sm text-brand-navy leading-relaxed">
              {errorMessage}
            </p>

            <div className="pt-2 border-t border-brand-red/20 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                href={siteConfig.telHref}
                className="bg-brand-red hover:bg-brand-red-600"
              >
                Call Hotline: {siteConfig.telephone}
              </Button>
              <Button variant="kraft" size="sm" href={siteConfig.whatsappHref}>
                WhatsApp for Free Quote
              </Button>
              <button
                type="button"
                onClick={() => setSubmissionState("idle")}
                className="font-mono text-xs underline text-brand-navy hover:text-brand-red cursor-pointer ml-auto"
              >
                Dismiss &amp; Try Again
              </button>
            </div>
          </div>
        )}

        {/* =====================================================================
            SECTION 0: SELECTED VEHICLE REVIEW
            ===================================================================== */}
        <div className="bg-brand-paper-rule p-4 border-2 border-brand-navy/30 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="font-mono text-[10px] font-bold text-brand-navy/70 uppercase tracking-widest block">
              {additionalVans.length > 0
                ? `ALLOCATED FLEET (${additionalVans.length + 1} VEHICLES):`
                : "ALLOCATED VEHICLE FOR THIS QUOTE:"}
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xl" aria-hidden="true">
                🚚
              </span>
              <p className="font-display font-black text-lg text-brand-navy uppercase">
                {selectedVanData.name}
              </p>
            </div>
            {additionalVans.length > 0 ? (
              <div className="mt-1 flex flex-wrap items-center gap-1.5">
                <span className="font-mono text-xs font-bold text-brand-red uppercase">
                  Additional Fleet:
                </span>
                {additionalVans.map((vanId, i) => {
                  const extraVan = VAN_OPTIONS.find((v) => v.id === vanId);
                  return (
                    <span
                      key={`review-extra-${i}-${vanId}`}
                      className="inline-flex items-center gap-1 font-mono text-[11px] font-bold bg-white text-brand-navy px-2 py-0.5 rounded-xs border border-brand-navy/30"
                    >
                      + 1x {extraVan?.shortName || vanId}
                      {onUpdateAdditionalVans && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...additionalVans];
                            updated.splice(i, 1);
                            onUpdateAdditionalVans(updated);
                          }}
                          className="ml-1 text-brand-red hover:text-brand-navy cursor-pointer font-bold"
                          title="Remove extra vehicle"
                        >
                          ✕
                        </button>
                      )}
                    </span>
                  );
                })}
              </div>
            ) : (
              <p className="font-mono text-xs text-brand-navy/70 mt-0.5">
                {selectedVanData.name}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onSelectVan && (
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("van-selector-heading");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-mono text-xs font-bold underline text-brand-navy hover:text-brand-red uppercase"
              >
                Change Fleet ↑
              </button>
            )}
          </div>
        </div>

        {/* =====================================================================
            SECTION 1: ROUTE & SERVICE LOGISTICS
            ===================================================================== */}
        <div className="space-y-4">
          <div className="border-b border-brand-navy/15 pb-2">
            <span className="font-mono text-[0.6875rem] font-bold text-brand-red uppercase tracking-widest block">
              01 / ROUTE &amp; LOGISTICS
            </span>
            <span className="font-display font-black text-lg text-brand-navy uppercase">
              Where &amp; When Are You Moving?
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service Type */}
            <Select
              label="Service Type"
              error={errors.serviceType?.message}
              options={SERVICE_TYPE_OPTIONS.map((s) => ({
                value: s.value,
                label: s.label,
              }))}
              {...register("serviceType")}
            />

            {/* Moving Date */}
            <Input
              type="date"
              label="Moving Date"
              min={todayISO}
              hint="Select moving date (today or future)"
              error={errors.moveDate?.message}
              {...register("moveDate")}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Collection Postcode with Live Autocomplete Search */}
            <PostcodeAutocomplete
              name="pickupPostcode"
              label="Collection Location / Postcode"
              placeholder="e.g. SW1, E16, London or full postcode"
              value={watch("pickupPostcode") || ""}
              onChange={(val) =>
                setValue("pickupPostcode", val, { shouldValidate: true })
              }
              error={errors.pickupPostcode?.message}
              hint="Type UK postcode prefix, area, or city name"
            />

            {/* Delivery Postcode with Live Autocomplete Search */}
            <PostcodeAutocomplete
              name="deliveryPostcode"
              label="Delivery Location / Postcode"
              placeholder="e.g. M1, Birmingham, Manchester or full postcode"
              value={watch("deliveryPostcode") || ""}
              onChange={(val) =>
                setValue("deliveryPostcode", val, { shouldValidate: true })
              }
              error={errors.deliveryPostcode?.message}
              hint="Type UK delivery postcode, area, or destination city"
            />
          </div>

          {/* =====================================================================
              CHOOSEABLE ADDITIONAL DROP-OFF LOCATIONS
              ===================================================================== */}
          <div className="rounded-xs border-2 border-brand-navy/20 bg-brand-paper-light p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-display uppercase italic font-bold text-xs tracking-wider text-brand-navy block">
                  Additional Drop-Off or Collection Stops?
                </span>
                <p className="font-sans text-xs text-brand-navy/70">
                  Need to pick up or drop items at an extra flat, storage
                  facility, or office along the route?
                </p>
              </div>

              {/* Chooseable Yes / No Buttons */}
              <div className="inline-flex rounded-xs border-2 border-brand-navy bg-white p-0.5 shadow-xs shrink-0">
                <button
                  type="button"
                  onClick={() => handleToggleAdditionalStops(false)}
                  className={`px-3 py-1 text-xs font-display font-black uppercase tracking-wider rounded-xs transition-colors ${
                    !showAdditionalStops
                      ? "bg-brand-navy text-white"
                      : "text-brand-navy hover:bg-brand-paper"
                  }`}
                >
                  Direct (No Stops)
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleAdditionalStops(true)}
                  className={`px-3 py-1 text-xs font-display font-black uppercase tracking-wider rounded-xs transition-colors ${
                    showAdditionalStops
                      ? "bg-brand-red text-white"
                      : "text-brand-navy hover:bg-brand-paper"
                  }`}
                >
                  + Add Via Stops
                </button>
              </div>
            </div>

            {/* Expandable Additional Stops Section */}
            {showAdditionalStops && (
              <div className="pt-3 border-t border-brand-navy/15 space-y-4">
                {extraStops.map((stop, index) => (
                  <div
                    key={stop.id}
                    className="p-3.5 bg-white border border-brand-navy/30 rounded-xs shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-brand-red uppercase">
                        VIA STOP {index + 1}
                      </span>
                      {extraStops.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveStop(stop.id)}
                          className="font-mono text-xs text-brand-red hover:underline font-bold uppercase cursor-pointer"
                        >
                          ✕ Remove Stop
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <PostcodeAutocomplete
                        name={`extraStop-${index}-postcode`}
                        label={`Stop ${index + 1} Postcode`}
                        placeholder="e.g. B1 1BB or Birmingham"
                        value={stop.postcode}
                        onChange={(val) =>
                          handleUpdateStop(stop.id, "postcode", val)
                        }
                        hint="Address or postcode for this extra stop"
                      />

                      <div>
                        <label
                          htmlFor={`extraStop-${index}-notes`}
                          className="block font-display uppercase italic font-bold text-xs tracking-wider text-brand-navy mb-1.5"
                        >
                          Stop Purpose / Instructions
                        </label>
                        <input
                          id={`extraStop-${index}-notes`}
                          type="text"
                          value={stop.notes}
                          onChange={(e) =>
                            handleUpdateStop(stop.id, "notes", e.target.value)
                          }
                          placeholder="e.g. Pick up 4 boxes from Big Yellow Storage unit"
                          className="w-full h-11 px-3.5 bg-white border-2 border-brand-navy/30 hover:border-brand-navy/60 text-brand-navy placeholder:text-brand-navy/40 font-sans text-sm rounded-xs transition-colors focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {extraStops.length < 3 && (
                  <button
                    type="button"
                    onClick={handleAddStop}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-brand-paper border-2 border-dashed border-brand-navy text-brand-navy font-display font-black text-xs uppercase tracking-wider rounded-xs cursor-pointer transition-colors shadow-xs"
                  >
                    <span>+ Add Another Drop-Off Location</span>
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Crew Helpers */}
            <Select
              label="Crew Configuration"
              error={errors.helpers?.message}
              options={HELPER_OPTIONS.map((h) => ({
                value: h.value,
                label: h.label,
              }))}
              hint="Choose driver assistance, two-person team, or three-person complete team"
              {...register("helpers")}
            />

            {/* Property Type */}
            <Select
              label="Property / Premise Type"
              error={errors.propertyType?.message}
              options={PROPERTY_TYPE_OPTIONS.map((p) => ({
                value: p.value,
                label: p.label,
              }))}
              {...register("propertyType")}
            />
          </div>

          {/* Access Notes */}
          <Textarea
            label="Property Access &amp; Parking Notes"
            placeholder="e.g. 2nd floor flat with no lift; tight staircase; parking permit arranged; red route loading restrictions outside property."
            rows={2}
            error={errors.accessNotes?.message}
            {...register("accessNotes")}
          />
        </div>

        {/* =====================================================================
            SECTION 2: CONTACT DETAILS
            ===================================================================== */}
        <div className="space-y-4 pt-2">
          <div className="border-b border-brand-navy/15 pb-2">
            <span className="font-mono text-[0.6875rem] font-bold text-brand-red uppercase tracking-widest block">
              02 / CONTACT &amp; DISPATCH
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-display font-black text-lg text-brand-navy uppercase">
                Your Contact Information
              </span>
              <span className="font-mono text-[11px] text-brand-navy/70">
                Provide at least phone or email for quote delivery
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              label="Full Name"
              placeholder="e.g. Jane Smith"
              error={errors.fullName?.message}
              {...register("fullName")}
            />

            <Input
              type="tel"
              label="Telephone / Mobile"
              placeholder="e.g. 07405 328 674"
              error={errors.phone?.message}
              {...register("phone")}
            />

            <Input
              type="email"
              label="Email Address"
              placeholder="e.g. jane@example.co.uk"
              error={errors.email?.message}
              {...register("email")}
            />
          </div>

          <Textarea
            label="Additional Move Notes or Special Cargo Instructions"
            placeholder="Tell us about special handling requirements (pianos, antique furniture, fragile items, preferred collection time windows, etc.)"
            rows={3}
            error={errors.notes?.message}
            {...register("notes")}
          />
        </div>

        {/* =====================================================================
            SECTION 3: COMPLIANCE & HONEYPOT (NO TURNSTILE)
            ===================================================================== */}
        <div className="space-y-4 pt-2 border-t border-brand-navy/15">
          {/* Hidden Honeypot Field (Spam Bot Protection) */}
          <div
            aria-hidden="true"
            className="hidden opacity-0 h-0 overflow-hidden"
          >
            <label htmlFor="website-field">Website (leave blank)</label>
            <input
              id="website-field"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("honeypot")}
            />
          </div>

          {/* Consent Checkbox */}
          <div className="space-y-1">
            <Checkbox
              id="consent-checkbox"
              label="I agree to the privacy policy and consent to my details being processed for this quotation."
              description="Your information is used solely to calculate and dispatch your bespoke removals quote. We never share customer data with brokers or marketing agencies."
              error={errors.consent?.message}
              {...register("consent")}
            />
            <p className="text-[0.6875rem] font-sans text-brand-navy/70 ml-8">
              Read our full{" "}
              <Link
                href="/privacy"
                target="_blank"
                className="underline font-semibold hover:text-brand-red"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                target="_blank"
                className="underline font-semibold hover:text-brand-red"
              >
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>

        {/* =====================================================================
            SUBMIT ACTION BUTTON
            ===================================================================== */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t-2 border-brand-navy/20">
          <div className="text-xs font-sans text-brand-navy/75">
            <span className="font-bold text-brand-navy">
              No Payment Required Now:
            </span>{" "}
            Fixed quote provided before booking. Free 48hr cancellation.
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={submissionState === "submitting"}
            className="shadow-cargo-sm min-w-[200px]"
          >
            {submissionState === "submitting" ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                TRANSMITTING ROUTE...
              </span>
            ) : (
              "REQUEST FREE QUOTE"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
}
