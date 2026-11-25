import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScreenshotGallery } from "@/components/portfolio/ScreenshotGallery";

const LIVE_URL = "https://askyourpages.com/";

const description =
  "Upload a PDF book, ask questions about it, and get answers grounded in the book with page citations that open the exact passage. Live and free.";

const features = [
  "Upload a PDF book, ask questions, and get answers with page citations",
  "Click a citation to open the PDF viewer at that page, with the supporting passage highlighted",
  "Answers stay grounded in the book. If the book doesn't cover something, it says so instead of guessing",
  "Three suggested questions for every book, written in the book's own language",
  "Urdu and Arabic books with a real text layer are supported",
  "PDFs with an unreadable text layer are detected and rejected with a clear explanation (scanned books aren't supported yet)",
  "Live processing progress: current stage, embedding progress, queue position and a time estimate",
  "Email and Google sign-in, with books private to each account",
];

const stack = [
  {
    label: "Frontend",
    items: "Next.js 15, TypeScript, Tailwind v4, shadcn/ui and react-pdf (pdf.js), on Vercel",
  },
  { label: "API", items: "Node.js and Express, on Render" },
  {
    label: "Data",
    items: "Supabase (Postgres, pgvector, Auth, Storage) with row-level security",
  },
  {
    label: "RAG",
    items: "Page-aware chunking, Voyage embeddings and gpt-oss-120b via OpenRouter",
  },
];

// In the same order as screenshot_1.png ... screenshot_4.png
const screenshotAlts = [
  "AskYourPages library showing three uploaded books",
  "An answer about The Art of War with five page citations",
  "Three suggested questions for Alice's Adventures in Wonderland",
  "A citation opened in the PDF viewer at page 16, with the supporting passage highlighted",
];

const comingNext = [
  "Smarter follow-up questions",
  "Streaming answers",
  "A mobile app",
  "Paid plans",
];

export const Route = createFileRoute("/projects/askyourpages")({
  head: () => ({
    meta: [
      { title: "AskYourPages | Sajjad Ali Zaidi" },
      { name: "description", content: description },
      { property: "og:title", content: "AskYourPages | Sajjad Ali Zaidi" },
      { property: "og:description", content: description },
      { name: "twitter:title", content: "AskYourPages | Sajjad Ali Zaidi" },
      { name: "twitter:description", content: description },
    ],
  }),
  component: AskYourPages,
});

function AskYourPages() {
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
              Ask<span className="text-primary">Your</span>Pages
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Ask your books anything. Get answers with page citations you can click straight
              through to.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Try it free
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Screenshots ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // screenshots
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">In action</h2>

            <ScreenshotGallery
              images={import.meta.glob("/public/assets/screenshots/askyourpages/*.png", {
                eager: true,
              })}
              altPrefix="AskYourPages"
              alts={screenshotAlts}
              className="sm:columns-2"
            />
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">// overview</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">What it does</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Upload a PDF book and ask questions about it. Every answer cites the pages it came
              from, and clicking a citation opens the book at that page with the supporting passage
              highlighted, so you can check the answer against the source yourself.
            </p>

            <div className="mt-8 inline-flex items-start gap-3 rounded-lg border border-border bg-card px-5 py-4">
              <span className="mt-0.5 font-mono text-xs text-primary select-none">{">"}</span>
              <p className="font-mono text-sm text-muted-foreground">
                <strong className="text-foreground font-medium">Status: </strong>
                Live and free since November 2026. Solo project.
              </p>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">// features</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Key Features</h2>

            <ul className="mt-8 space-y-4 text-base text-muted-foreground sm:text-lg">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-2.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Engineering ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // engineering
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              How it's built
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A retrieval-augmented generation (RAG) pipeline with page-aware chunking: every chunk
              keeps track of the page it came from, which is what lets each answer cite and open an
              exact page.
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {stack.map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-card p-5">
                  <dt className="font-mono text-xs uppercase tracking-wider text-primary">
                    {s.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.items}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Roadmap ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">// roadmap</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Coming next</h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {comingNext.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA footer ── */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">// live</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Try it with your own books
            </h2>
            <p className="mt-3 text-base text-muted-foreground">Free to use at askyourpages.com.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open AskYourPages
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
