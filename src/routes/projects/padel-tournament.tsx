import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { ExternalLink, ArrowLeft, ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/padel-tournament")({
  head: () => ({
    meta: [
      { title: "Padel Tournament Platform | Sajjad Ali Zaidi" },
      {
        name: "description",
        content:
          "End-to-end padel tournament management platform having bracket generation, match scheduling, live score tracking, and results. Built from 0 to 1 at Exper Labs.",
      },
      { property: "og:title", content: "Padel Tournament Platform | Sajjad Ali Zaidi" },
      { name: "twitter:title", content: "Padel Tournament Platform | Sajjad Ali Zaidi" },
    ],
  }),
  component: PadelTournament,
});

const frontendStack = ["React", "TypeScript", "Vite", "Tailwind CSS", "MUI"];
const infraStack = ["Firebase Hosting", "GitHub Actions (CI/CD)"];

function PadelTournament() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Nav />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
            {/* Back link */}
            <Link
              to="/"
              hash="projects"
              className="mb-10 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Projects
            </Link>

            {/* Label */}
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // project showcase
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Padel Tournament{" "}
              <span className="text-primary">Management Platform</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              An end-to-end platform for running padel tournaments with brackets,
              scheduling, and results, built as a 0-to-1 project at Exper Labs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a
                  href="https://lake-city-cpt.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live App
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // overview
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              What it does
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Built from the ground up to handle the full lifecycle of a padel
              tournament with bracket generation, match scheduling, live score
              tracking, and results, replacing what used to be a manual,
              spreadsheet-driven process.
            </p>

            {/* Pipeline note */}
            <div className="mt-8 inline-flex items-start gap-3 rounded-lg border border-border bg-card px-5 py-4">
              <span className="mt-0.5 font-mono text-xs text-primary select-none">
                {">"}
              </span>
              <p className="font-mono text-sm text-muted-foreground">
                Built and shipped with a full{" "}
                <span className="text-foreground font-medium">
                  staging / UAT / production
                </span>{" "}
                pipeline for internal testing before each release.
              </p>
            </div>
          </div>
        </section>

        {/* ── Screenshots ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // screenshots
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              In action
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((n) => (
                <a
                  key={n}
                  href={`/assets/screenshots/padel_app/screenshot_${n}.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-lg border border-border transition-colors hover:border-primary"
                >
                  <img
                    src={`/assets/screenshots/padel_app/screenshot_${n}.png`}
                    alt={`Padel Tournament Platform screenshot ${n}`}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // tech stack
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Built with
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {/* Frontend */}
              <div className="rounded-lg border border-border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                  Frontend
                </p>
                <div className="flex flex-wrap gap-2">
                  {frontendStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded font-mono text-[11px] uppercase tracking-wider"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Infra */}
              <div className="rounded-lg border border-border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                  Infrastructure
                </p>
                <div className="flex flex-wrap gap-2">
                  {infraStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded font-mono text-[11px] uppercase tracking-wider"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA footer ── */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // live
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              See it for yourself
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              The app is live in production and actively used for real tournaments.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a
                  href="https://lake-city-cpt.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Live App
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/" hash="projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
