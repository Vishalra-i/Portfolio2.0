import Link from "next/link";

const portfolioItems = [
  { name: "Sawara Gymtir Inles", category: "Gym Website" },
  { name: "Burlan Bites", category: "Restaurant Website" },
  { name: "FitZone Gym", category: "Gym Website" },
  { name: "Studio Lens", category: "Photography Website" },
  { name: "Delih Interiors", category: "Interior Website" },
  { name: "Balan", category: "Cafe Website" },
  { name: "ND Fashions", category: "Fashion Website" },
];

export function Portfolio({ headingClass }: { headingClass: string }) {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className={`${headingClass} text-center text-5xl text-white`}>Our Website Portfolio</h2>
        <div className="mx-auto mt-4 flex max-w-xl items-center gap-3">
          <div className="h-px flex-1 bg-[#d4af37]/60" />
          <div className="text-[#d4af37]">❤</div>
          <div className="h-px flex-1 bg-[#d4af37]/60" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-xl border border-[#3d3d3d] bg-[#1a1a1a] shadow-xl transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_26px_rgba(212,175,55,0.24)]"
            >
              <div className="h-52 border-b border-[#3a3a3a] p-3">
                <div
                  className="h-full rounded-lg"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, #8c6538 0%, #2b2219 55%, #b0854b 100%)"
                        : "linear-gradient(135deg, #5d3f23 0%, #1f1a16 55%, #a57d45 100%)",
                  }}
                />
              </div>
              <div className="bg-[#efede8] px-5 py-4 text-black">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-black/70">{item.category}</p>
              </div>
              <div className="bg-[#f4f2ee] px-5 py-4">
                <Link href="/portfolio" className="font-semibold text-black">
                  View Live Website
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
