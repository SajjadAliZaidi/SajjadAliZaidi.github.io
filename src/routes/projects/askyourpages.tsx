import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { ExternalLink, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/askyourpages")({
  head: () => ({
    meta: [
      { title: "AskYourPages — Coming Soon | Sajjad Ali Zaidi" },
      {
        name: "description",
        content:
          "Upload PDF books and ask questions about them. Get AI answers with page-level citations you can click through to.",
      },
      { property: "og:title", content: "AskYourPages — Coming Soon | Sajjad Ali Zaidi" },
      { name: "twitter:title", content: "AskYourPages — Coming Soon | Sajjad Ali Zaidi" },
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
            <Link
              to="/"
              hash="projects"
              className="mb-10 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Projects
            </Link>

            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // coming soon
            </p>

            <div className="mt-6 inline-block rounded-full border border-border bg-primary/10 px-4 py-1.5 font-mono text-sm font-medium text-primary">
              Coming Soon
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ask<span className="text-primary">Your</span>Pages
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Ask your books anything. Get answers with page-level citations you
              can actually click through to.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a
                  href="https://askyourpages.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Site
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
              Upload a PDF book and ask questions about its content. The AI reads
              through every page, finds the relevant sections, and returns answers
              with page-level citations — click the citation and jump straight to
              the exact page that backs up the answer.
            </p>
          </div>
        </section>

        {/* ── Waitlist ── */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // waitlist
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Join the waitlist
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The landing page is live with a waitlist signup. Drop your email to
              get notified when the full app launches.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://askyourpages.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Join the Waitlist
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              // live
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Visit the site
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              The landing page is live with a waitlist. The app is coming soon.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a
                  href="https://askyourpages.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Live Site
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

