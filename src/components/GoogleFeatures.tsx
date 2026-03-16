const features = ["Mobile Optimized", "Fast Loading", "SEO Friendly", "Google Ranking"];

const icons = [
  <svg key="mobile" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></svg>,
  <svg key="speed" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 14a8 8 0 1 1 16 0" /><path d="M12 14l4-4" /></svg>,
  <svg key="seo" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /><path d="M14 4h6v6" /><path d="M10 14 20 4" /></svg>,
  <svg key="google" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /><path d="M8 11h6" /></svg>,
];

export function GoogleFeatures({ headingClass }: { headingClass: string }) {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-10 flex max-w-5xl items-center gap-6">
          <div className="h-px flex-1 bg-[#d4af37]/55" />
          <h2 className={`${headingClass} text-center text-5xl text-white`}>Get Found on Google</h2>
          <div className="h-px flex-1 bg-[#d4af37]/55" />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center justify-center gap-3 text-xl text-white">
              <span className="text-[#d4af37]">{icons[index]}</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
