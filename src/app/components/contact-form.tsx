"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import emailConfig from "@/lib/emailConfig";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = formRef.current;

    if (!form) {
      return;
    }

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const business = formData.get("business")?.toString().trim();

    if (!name || !phone || !business) {
      setStatus("error");
      setFeedback("Please fill in your name, phone number, and business type.");
      return;
    }

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setStatus("error");
      setFeedback("Form integration is not configured yet. Please use WhatsApp or email for now.");
      return;
    }

    setStatus("sending");
    setFeedback("Sending your request...");

    try {
      await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, form, {
        publicKey: emailConfig.publicKey,
      });

      setStatus("success");
      setFeedback("Thanks! Your request has been sent successfully.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Something went wrong while sending your request. Please try again.");
    }
  };

  const feedbackColor =
    status === "success"
      ? "text-emerald-600"
      : status === "error"
        ? "text-red-600"
        : "text-slate-500";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input id="name" name="name" required className="input-field" placeholder="Your full name" />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="input-field"
            placeholder="Your phone number"
            inputMode="tel"
          />
        </div>

        <div>
          <label htmlFor="business" className="mb-1 block text-sm font-medium text-slate-700">
            Business Type
          </label>
          <input
            id="business"
            name="business"
            required
            className="input-field"
            placeholder="Salon, gym, clinic, store, etc."
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input id="email" name="email" type="email" className="input-field" placeholder="you@business.com" />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-800 outline-none ring-blue-200 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500"
            placeholder="Tell us what pages, features, or package you need."
          />
        </div>

        {feedback ? (
          <p aria-live="polite" className={`text-sm font-medium ${feedbackColor}`}>
            {feedback}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {status === "sending" ? "Sending..." : "Send Details"}
        </button>
      </div>
    </form>
  );
}
