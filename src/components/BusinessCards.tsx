import Link from "next/link";

type BusinessCard = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const cards: BusinessCard[] = [
  {
    title: "Salon Websites",
    description: "Designed to convert lookers to loyal clients.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 7h16v13H4z" />
        <path d="M9 7V4h6v3" />
        <path d="M12 11v9" />
      </svg>
    ),
  },
  {
    title: "Restaurant Website",
    description: "Elegant menus and bookings that drive traffic.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M5 3v7a2 2 0 0 0 2 2v9" />
        <path d="M9 3v7" />
        <path d="M14 3h5v18" />
      </svg>
    ),
  },
  {
    title: "Gym Websites",
    description: "Powerful layouts for training and membership.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 9h3v6H4z" />
        <path d="M17 9h3v6h-3z" />
        <path d="M7 11h10v2H7z" />
      </svg>
    ),
  },
  {
    title: "Tile Showroom Websites",
    description: "Showcase catalogues with a premium visual flow.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="4" y="4" width="7" height="7" />
        <rect x="13" y="4" width="7" height="7" />
        <rect x="4" y="13" width="7" height="7" />
        <rect x="13" y="13" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Photography Studio Website",
    description: "Immersive galleries to spotlight your work.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 7h16v12H4z" />
        <circle cx="12" cy="13" r="3" />
        <path d="M8 7l1.2-2h5.6L16 7" />
      </svg>
    ),
  },
  {
    title: "Local Business Website",
    description: "Built to capture nearby leads and enquiries.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
];

export function BusinessCards() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-xl border border-[#3a3a3a] bg-[#1a1a1a] p-6 shadow-xl transition duration-300 hover:scale-[1.03] hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
            >
              <div className="flex items-center gap-4 text-[#d4af37]">
                {card.icon}
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              </div>
              <p className="mt-3 text-[#bdbdbd]">{card.description}</p>
              <div className="my-5 h-px bg-gradient-to-r from-[#d4af37]/35 to-transparent" />
              <Link href="/services" className="inline-flex items-center gap-2 text-lg font-semibold text-white">
                View Demo
                <span className="text-xs">▾</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
