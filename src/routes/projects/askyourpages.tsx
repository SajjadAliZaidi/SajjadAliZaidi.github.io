import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/projects/askyourpages")({
  head: () => ({
    meta: [
      { title: "AskYourPages — Coming Soon | Sajjad Ali Zaidi" },
      { name: "description", content: "Ask your books anything. Get answers with page-level citations you can actually click through to." },
      { property: "og:title", content: "AskYourPages — Coming Soon | Sajjad Ali Zaidi" },
      { name: "twitter:title", content: "AskYourPages — Coming Soon | Sajjad Ali Zaidi" }
    ]
  }),
  component: AskYourPages,
});

function AskYourPages() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Nav />
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="flex w-full max-w-[560px] flex-col items-center text-center">
          <span className="mb-6 inline-block rounded-full border border-border bg-primary/10 px-4 py-1.5 font-mono text-sm font-medium text-primary">
            Coming Soon
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ask<span className="text-primary">Your</span>Pages
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Ask your books anything. Get answers with page-level citations you can actually click through to.
          </p>

          <div className="my-8 h-1 w-12 rounded-full bg-primary" />

          <p className="text-base font-medium text-foreground">
            Upload a PDF. Ask a question. Jump straight to the page that answers it.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

