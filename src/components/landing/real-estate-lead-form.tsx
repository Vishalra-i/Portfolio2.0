"use client";

import { FormEvent, useState } from "react";

type LeadFormState = {
  name: string;
  businessName: string;
  phone: string;
};

const initialState: LeadFormState = {
  name: "",
  businessName: "",
  phone: "",
};

async function saveLeadPlaceholder(payload: LeadFormState) {
  // TODO: Replace with real API integration in next iteration.
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.info("Real estate lead captured", payload);
}

export function RealEstateLeadForm() {
  const [formData, setFormData] = useState<LeadFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      await saveLeadPlaceholder(formData);
      setStatusMessage("Thanks! Our team will call you shortly.");
      setFormData(initialState);
    } catch {
      setStatusMessage("Something went wrong. Please try WhatsApp for a faster response.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900">Get a free call-back in 10 minutes</h3>
      <p className="mt-2 text-sm text-slate-600">Share your details and we will suggest the best website package.</p>

      <div className="mt-5 space-y-3">
        <input
          className="input-field"
          name="name"
          value={formData.name}
          required
          placeholder="Your Name"
          onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
        />
        <input
          className="input-field"
          name="businessName"
          value={formData.businessName}
          required
          placeholder="Business Name"
          onChange={(event) => setFormData((prev) => ({ ...prev, businessName: event.target.value }))}
        />
        <input
          className="input-field"
          name="phone"
          value={formData.phone}
          required
          placeholder="Phone Number"
          onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Request Free Consultation"}
      </button>

      {statusMessage ? <p className="mt-3 text-sm text-slate-600">{statusMessage}</p> : null}
    </form>
  );
}
