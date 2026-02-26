const reasons = [
  "Fast delivery",
  "Conversion-focused design",
  "Affordable pricing",
  "Full-stack expertise",
];

export function WhyChooseMeSection() {
  return (
    <section id="why-me" className="section-padding border-t border-slate-800/80">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Me</h2>
          <p className="text-slate-300">Focused on outcomes: more leads, better trust, and faster launch.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="glass-card rounded-xl p-5 text-center text-base font-medium transition duration-300 hover:border-emerald-400 hover:text-emerald-300"
            >
              {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
