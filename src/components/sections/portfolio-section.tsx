import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "LMS Platform (Full Stack)",
    summary:
      "A complete learning management system with authentication, course progress, and admin analytics.",
  },
  {
    title: "Gym Website Demo",
    summary:
      "Lead-focused gym website showcasing plans, trainers, and inquiry CTAs for membership growth.",
  },
  {
    title: "Salon Website Demo",
    summary:
      "Modern salon booking site designed to drive appointment requests through WhatsApp and forms.",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding border-t border-slate-800/80">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Portfolio Highlights</h2>
          <p className="text-slate-300">Real project styles tailored for local service businesses.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="group">
              <CardHeader>
                <CardTitle className="group-hover:text-emerald-300">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">{project.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
