"use client";

import { useState } from "react";
import {
  type ContactFormData,
  contactFormSchema,
} from "@/lib/validations/contact";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setServerMessage("");

    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      for (const err of validation.error.errors) {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitStatus("error");
        setServerMessage(
          data.error || "Unable to send message. Please try again.",
        );
      } else {
        setSubmitStatus("success");
        setServerMessage(
          data.message || "Thank you! Your message has been sent successfully.",
        );
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          honeypot: "",
        });
      }
    } catch {
      setSubmitStatus("error");
      setServerMessage(
        "A network error occurred. Please call 07405 328 674 for urgent enquiries.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field (hidden from legitimate users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website_hp">Leave empty</label>
        <input
          id="company_website_hp"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submitStatus === "success" && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800">
          <span className="font-bold block mb-1">
            Message Sent Successfully!
          </span>
          {serverMessage}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-800">
          <span className="font-bold block mb-1">Notice:</span>
          {serverMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all focus:outline-hidden focus:ring-2 ${
              errors.fullName
                ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                : "border-slate-300 focus:border-slate-900 focus:ring-slate-900"
            }`}
            placeholder="e.g. David Miller"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all focus:outline-hidden focus:ring-2 ${
              errors.email
                ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                : "border-slate-300 focus:border-slate-900 focus:ring-slate-900"
            }`}
            placeholder="e.g. david@example.co.uk"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5"
          >
            Telephone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all focus:outline-hidden focus:ring-2 ${
              errors.phone
                ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                : "border-slate-300 focus:border-slate-900 focus:ring-slate-900"
            }`}
            placeholder="e.g. 07123 456 789"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all focus:outline-hidden focus:ring-2 ${
              errors.subject
                ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                : "border-slate-300 focus:border-slate-900 focus:ring-slate-900"
            }`}
            placeholder="e.g. Removals enquiry / date check"
          />
          {errors.subject && (
            <p className="text-xs text-red-600 mt-1">{errors.subject}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all focus:outline-hidden focus:ring-2 resize-y ${
            errors.message
              ? "border-red-400 focus:ring-red-400 bg-red-50/20"
              : "border-slate-300 focus:border-slate-900 focus:ring-slate-900"
          }`}
          placeholder="Please tell us about your move, addresses, access notes, or any questions..."
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center rounded-xl bg-slate-900 py-3.5 px-6 text-sm font-bold text-white shadow-sm hover:bg-red-600 disabled:opacity-50 active:scale-98 transition-all"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            Sending Message...
          </span>
        ) : (
          "Send Enquiry Message"
        )}
      </button>

      <p className="text-center text-[11px] text-slate-500 mt-2">
        Protected by rate limiting & SSL encryption • Zero customer data shared
        with third parties.
      </p>
    </form>
  );
}
