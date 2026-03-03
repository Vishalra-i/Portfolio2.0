"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import emailConfig from "@/lib/emailConfig";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFeedback("Sending...");

    const form = formRef.current;

    if (!form) return;

    // Extract values safely
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const business = formData.get("business") as string;

    // Validation
    if (!name || !phone || !business) {
      alert("Please fill all required fields");
      setFeedback("");
      return;
    }

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form,
        {
          publicKey: emailConfig.publicKey,
        }
      );

      setFeedback("✅ Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFeedback("❌ Something went wrong. Try again.");
    } finally {
      setTimeout(() => setFeedback(""), 5000);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input name="name" required className="input-field" placeholder="Your full name" />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input name="phone" required className="input-field" placeholder="Your phone number" />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Business Type
          </label>
          <input name="business" required className="input-field" placeholder="Salon, gym, clinic, etc." />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Email (optional)
          </label>
          <input name="email" type="email" className="input-field" placeholder="you@business.com" />
        </div>

        {/* Feedback */}
        {feedback && (
          <p className="text-sm font-medium text-gray-600">{feedback}</p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
        >
          Send Details
        </button>
      </div>
    </form>
  );
}