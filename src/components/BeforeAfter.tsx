export function BeforeAfter({ headingClass }: { headingClass: string }) {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-10 flex max-w-4xl items-center gap-6">
          <div className="h-px flex-1 bg-[#d4af37]/55" />
          <h2 className={`${headingClass} text-5xl text-white`}>Before &amp; After</h2>
          <div className="h-px flex-1 bg-[#d4af37]/55" />
        </div>

        <div className="relative grid overflow-hidden rounded-xl border border-[#3a3a3a] md:grid-cols-2">
          <div className="relative min-h-[250px] border-b border-[#3a3a3a] bg-[linear-gradient(120deg,#1b1b1b_0%,#3c2d1e_100%)] p-10 md:border-b-0 md:border-r">
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative">
              <h3 className="text-5xl font-semibold text-white">Before</h3>
              <ul className="mt-6 space-y-3 text-xl text-[#e8e8e8]">
                <li>○ Old Design</li>
                <li>○ Slow &amp; Outdated</li>
              </ul>
            </div>
          </div>

          <div className="relative min-h-[250px] bg-[linear-gradient(120deg,#342515_0%,#584325_100%)] p-10">
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative">
              <h3 className="text-5xl font-semibold text-white">After</h3>
              <ul className="mt-6 space-y-3 text-xl text-[#f3f3f3]">
                <li>○ Modern Design</li>
                <li>○ Fast &amp; SEO Optimized</li>
              </ul>
            </div>
          </div>

          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/60" />
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#f4f2ef] shadow-xl" />
        </div>
      </div>
    </section>
  );
}
