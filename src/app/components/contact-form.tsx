export function ContactForm() {
  return (
    <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
          <input id="phone" name="phone" required className="input-field" placeholder="Your phone number" />
        </div>
        <div>
          <label htmlFor="business" className="mb-1 block text-sm font-medium text-slate-700">
            Business Type
          </label>
          <input id="business" name="business" required className="input-field" placeholder="Salon, gym, clinic, etc." />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email (optional)
          </label>
          <input id="email" name="email" type="email" className="input-field" placeholder="you@business.com" />
        </div>
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
