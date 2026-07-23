import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { ExternalLink, ArrowLeft, ImageIcon, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/peeklinked")({
  head: () => ({
    meta: [
      { title: "PeekLinked | Sajjad Ali Zaidi" },
      {
        name: "description",
        content:
          "A browser extension that blurs LinkedIn images and videos by default, letting you reveal them on your own terms.",
      },
      { property: "og:title", content: "PeekLinked | Sajjad Ali Zaidi" },
      { name: "twitter:title", content: "PeekLinked | Sajjad Ali Zaidi" },
    ],
  }),
  component: PeekLinked,
});

function PeekLinked() {
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
              PeekLinked
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Give your attention back. Peek when you're ready.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a
                  href="https://github.com/SajjadAliZaidi/peeklinked"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
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
              A Chrome/Edge extension that blurs LinkedIn profile pictures, post images, and videos
              by default, overlaying a small toggle on each so you can reveal them on demand — a
              small nudge against the endless-scroll pull of a feed built to keep you looking.
            </p>

            <div className="mt-8 inline-flex items-start gap-3 rounded-lg border border-border bg-card px-5 py-4">
              <span className="mt-0.5 font-mono text-xs text-primary select-none">
                {">"}
              </span>
              <p className="font-mono text-sm text-muted-foreground">
                <strong className="text-foreground font-medium">Status: </strong>
                In Development — Chrome Web Store submission in progress
              </p>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // features
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Key Features
            </h2>

            <ul className="mt-8 space-y-4 text-base text-muted-foreground sm:text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Master on/off switch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Per-tab pause with a keyboard shortcut</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Adjustable blur intensity (5 presets)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Independent controls per content type (profile pictures / post images / videos)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Bulk show/hide all on page</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Architecture Note ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // engineering
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Technical Highlight
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Built without ever mutating LinkedIn's own DOM. LinkedIn is a React app, and directly
              inserting or moving elements inside its tree breaks React's reconciliation — an early
              version that wrapped image elements caused parts of the page to crash and unmount. The
              current architecture applies blur via inline styles on the existing elements and keeps
              all interactive controls in a separate overlay layer, fully decoupled from LinkedIn's
              own React tree.
            </p>
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

            <div className="mt-8 columns-1 sm:columns-3 gap-4 space-y-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <a
                  key={n}
                  href={`/assets/screenshots/peeklinked/screenshot_${n}.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block break-inside-avoid overflow-hidden rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                  <img
                    src={`/assets/screenshots/peeklinked/screenshot_${n}.png`}
                    alt={`PeekLinked screenshot ${n}`}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA footer ── */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // source
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Check out the code
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a
                  href="https://github.com/SajjadAliZaidi/peeklinked"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
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
