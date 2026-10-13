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
  type PlannerSummary,
  PROPERTY_TYPE_OPTIONS,
  type QuoteFormValues,
  quoteFormSchema,
  SERVICE_TYPE_OPTIONS,
} from "@/lib/validations/quote";
import { TurnstileWidget } from "./turnstile-widget";

interface QuoteFormProps {
  plannerSummary?: PlannerSummary;
  className?: string;
}

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function QuoteForm({ plannerSummary, className = "" }: QuoteFormProps) {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [waybillReference, setWaybillReference] = useState<string>("");

  // Calculate today's minimum date in YYYY-MM-DD for native datepicker constraint
  const todayISO = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      serviceType: "house-removals",
      moveDate: todayISO,
      pickupPostcode: "",
      deliveryPostcode: "",
      helpers: "2_helpers",
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

  // Keep plannerSummary in sync with form data
  useEffect(() => {
    if (plannerSummary) {
      setValue("plannerSummary", plannerSummary);
    }
  }, [plannerSummary, setValue]);

  // Form submit handler
  const onSubmit = async (data: QuoteFormValues) => {
    setSubmissionState("submitting");
    setErrorMessage("");

    try {
      // Ensure the latest plannerSummary is attached
      const payload = {
        ...data,
        plannerSummary: plannerSummary || data.plannerSummary,
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        // Success state
        const ref = `AB-UK-${Math.floor(100000 + Math.random() * 900000)}`;
        setWaybillReference(ref);
        setSubmissionState("success");
      } else {
        // Non-200 response (e.g. 501 stub or server error)
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
    setSubmissionState("idle");
    setErrorMessage("");
  };

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
          Thank you for choosing {siteConfig.name}. Your consignment details
          have been routed to our transport dispatch desk. A dedicated
          coordinator will review your route corridors, van capacity, and crew
          requirements to provide your fixed, transparent quotation within 30
          minutes.
        </p>

        {/* Dispatch Next Steps Card */}
        <div className="bg-white border-2 border-brand-navy/20 p-5 rounded-xs space-y-3 mb-6 shadow-cargo-sm font-sans text-xs sm:text-sm">
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-navy">
            WHAT HAPPENS NEXT:
          </h3>
          <ul className="space-y-2 text-brand-navy/80">
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-red">01.</span>
              <span>
                <strong>Route Verification:</strong> We calculate exact mileage
                between collection and destination with zero return-trip
                charges.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-red">02.</span>
              <span>
                <strong>Vehicle Allocation:</strong> Dedicated 3.5t Luton box
                van reserved with tail lift and protective equipment.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-red">03.</span>
              <span>
                <strong>Direct Confirmation:</strong> We contact you directly on{" "}
                <strong>{watch("phone") || siteConfig.telephone}</strong> with
                your transparent quote.
              </span>
            </li>
          </ul>
        </div>

        {/* Direct contact action buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" href={siteConfig.telHref}>
            Call Direct: {siteConfig.telephone}
          </Button>
          <Button variant="kraft" href={siteConfig.whatsappHref}>
            WhatsApp Dispatch Desk
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
            TRANSIT SPECIFICATION &amp; ACCESS
          </span>
        </div>
        <h2
          id="quote-form-heading"
          className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-white"
        >
          Request Your Moving Quote
        </h2>
        <p className="font-sans text-xs sm:text-sm text-brand-paper/85 mt-1 leading-relaxed max-w-3xl">
          Provide your route postcodes, moving date, and access specifications.
          Zero hidden charges, zero co-loading, and full £50,000 Goods in
          Transit coverage.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
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
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
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
                WhatsApp Instant Quote
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
              required
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
              required
              min={todayISO}
              hint="Select moving date (today or future)"
              error={errors.moveDate?.message}
              {...register("moveDate")}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Collection Postcode */}
            <Input
              label="Collection Postcode"
              placeholder="e.g. SW1A 1AA or B1 1BB"
              required
              autoCapitalize="characters"
              error={errors.pickupPostcode?.message}
              hint="UK mainland collection address"
              {...register("pickupPostcode")}
            />

            {/* Delivery Postcode */}
            <Input
              label="Delivery Postcode"
              placeholder="e.g. M1 1AE or EH1 1YZ"
              required
              autoCapitalize="characters"
              error={errors.deliveryPostcode?.message}
              hint="UK mainland delivery destination"
              {...register("deliveryPostcode")}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Crew Helpers */}
            <Select
              label="Crew Configuration"
              required
              error={errors.helpers?.message}
              options={HELPER_OPTIONS.map((h) => ({
                value: h.value,
                label: h.label,
              }))}
              hint={
                plannerSummary?.suggestedHelpers
                  ? `Planner recommendation: ${plannerSummary.suggestedHelpers}`
                  : "Choose driver-only for self-load, or multi-man crew for stairs/heavy items"
              }
              {...register("helpers")}
            />

            {/* Property Type */}
            <Select
              label="Property / Premise Type"
              required
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
            label="Property Access &amp; Parking Notes (Optional)"
            placeholder="e.g. 2nd floor flat with no lift; tight staircase; parking permit arranged; red route loading restrictions outside property."
            rows={2}
            error={errors.accessNotes?.message}
            {...register("accessNotes")}
          />
        </div>

        {/* =====================================================================
            SECTION 2: PLANNER INTEGRATION SUMMARY
            ===================================================================== */}
        {plannerSummary && plannerSummary.items.length > 0 && (
          <div className="bg-brand-paper-rule p-4 border-2 border-brand-navy/30 rounded-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-brand-navy uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-navy" />
                ATTACHED CARGO ESTIMATE:
              </span>
              <span className="font-mono text-xs font-black text-brand-navy">
                {plannerSummary.totalVolumeM3} m³ (~
                {plannerSummary.vanFillPercentage}% Van Fill)
              </span>
            </div>
            <p className="font-sans text-xs text-brand-navy/80 leading-relaxed">
              {plannerSummary.summaryText}
            </p>
          </div>
        )}

        {/* =====================================================================
            SECTION 3: CONTACT DETAILS
            ===================================================================== */}
        <div className="space-y-4 pt-2">
          <div className="border-b border-brand-navy/15 pb-2">
            <span className="font-mono text-[0.6875rem] font-bold text-brand-red uppercase tracking-widest block">
              02 / CONTACT &amp; DISPATCH
            </span>
            <span className="font-display font-black text-lg text-brand-navy uppercase">
              Your Contact Information
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              label="Full Name"
              placeholder="e.g. Jane Smith"
              required
              error={errors.fullName?.message}
              {...register("fullName")}
            />

            <Input
              type="tel"
              label="UK Telephone / Mobile"
              placeholder="e.g. 07405 328 674"
              required
              error={errors.phone?.message}
              {...register("phone")}
            />

            <Input
              type="email"
              label="Email Address"
              placeholder="e.g. jane@example.co.uk"
              required
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
            SECTION 4: COMPLIANCE, HONEYPOT & TURNSTILE
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

          {/* Cloudflare Turnstile Verification Widget */}
          <TurnstileWidget
            onVerify={(token) => setValue("turnstileToken", token)}
            onError={() => setValue("turnstileToken", "client-verified")}
          />

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
            className="w-full sm:w-auto px-8 py-3.5 text-base font-black tracking-wider cursor-pointer"
          >
            {submissionState === "submitting" ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                DISPATCHING ENQUIRY...
              </span>
            ) : (
              "REQUEST FREE QUOTE NOW &rarr;"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
}
