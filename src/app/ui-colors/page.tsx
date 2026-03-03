const palette = [
  { name: "Primary", hex: "#2563EB", className: "bg-primary" },
  { name: "Accent", hex: "#22C55E", className: "bg-accent" },
  { name: "Background", hex: "#FFFFFF", className: "bg-white" },
  { name: "Section BG", hex: "#F8FAFC", className: "bg-section" },
];

export default function UiColorsPage() {
  return (
    <main className="section-padding min-h-screen bg-white">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">VR Web Solutions UI Colors</h1>
        <p className="mt-2 text-slate-600">Use this page to manage brand colors in future updates.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {palette.map((item) => (
            <div key={item.name} className="rounded-xl border border-slate-200 p-4">
              <div className={`h-24 rounded-lg border border-slate-200 ${item.className}`} />
              <p className="mt-3 font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-600">{item.hex}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
