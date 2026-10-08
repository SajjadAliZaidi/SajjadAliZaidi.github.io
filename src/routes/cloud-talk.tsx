import { type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Linkedin, Presentation } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cloudTalk, type ProviderRow } from "@/data/cloudTalk";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/cloud-talk")({
  head: () => ({
    meta: [
      { title: cloudTalk.meta.title },
      { name: "description", content: cloudTalk.meta.description },
      { property: "og:title", content: cloudTalk.meta.title },
      { property: "og:description", content: cloudTalk.meta.description },
      { property: "og:url", content: cloudTalk.meta.url },
      { name: "twitter:title", content: cloudTalk.meta.title },
      { name: "twitter:description", content: cloudTalk.meta.description },
    ],
  }),
  component: CloudTalk,
});

function PageSection({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">// {label}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-card px-5 py-4">
      <span className="mt-0.5 select-none font-mono text-xs text-primary">{">"}</span>
      <p className="text-base leading-relaxed text-foreground">{children}</p>
    </div>
  );
}

/** Table on md+, one stacked card per row below md. */
function ProviderComparison({
  rows,
  firstColumn,
  caption,
}: {
  rows: readonly ProviderRow[];
  firstColumn: string;
  caption: string;
}) {
  const cells = (r: ProviderRow) => [r.aws, r.azure, r.gcp];

  return (
    <>
      <ul className="space-y-3 md:hidden" aria-label={caption}>
        {rows.map((r) => (
          <li key={r.concept} className="rounded-lg border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{r.concept}</p>
            <dl className="mt-3 space-y-2">
              {cloudTalk.providers.map((p, i) => (
                <div key={p} className="grid grid-cols-[3.5rem_1fr] gap-3">
                  <dt className="font-mono text-xs uppercase tracking-wider text-primary leading-5">
                    {p}
                  </dt>
                  <dd className="text-sm leading-5 text-muted-foreground">{cells(r)[i]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      <div className="hidden overflow-hidden rounded-lg border border-border md:block">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-card">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                {firstColumn}
              </th>
              {cloudTalk.providers.map((p) => (
                <th
                  key={p}
                  scope="col"
                  className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-primary"
                >
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.concept} className="border-t border-border">
                <th scope="row" className="px-4 py-3 font-medium text-foreground">
                  {r.concept}
                </th>
                {cells(r).map((c, i) => (
                  <td key={i} className="px-4 py-3 text-muted-foreground">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const chipClass =
  "inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground";

function CloudTalk() {
  const {
    header,
    slides,
    bigIdea,
    cheatSheet,
    storeExample,
    differences,
    skillStack,
    roadmap,
    resources,
    stories,
    footerNote,
  } = cloudTalk;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Nav />

      <main className="flex-1">
        {/* ── Header ── */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {header.label}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {header.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {header.subtitle}
            </p>
            <p className="mt-6 font-mono text-sm text-muted-foreground">{header.speaker}</p>
          </div>
        </section>

        {/* ── 1. Slides ── */}
        <PageSection id="slides" label="01 · slides" title="The slides">
          <Button asChild size="lg" className="h-11 w-full sm:w-auto">
            <a href={slides.url} target="_blank" rel="noopener noreferrer">
              <Presentation className="mr-2 h-4 w-4" />
              Open the slides
            </a>
          </Button>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              src={slides.embedUrl}
              title={slides.embedTitle}
              loading="lazy"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </PageSection>

        {/* ── 2. Big idea ── */}
        <PageSection
          id="big-idea"
          label="02 · the big idea"
          title="Same building blocks, different names"
        >
          <Callout>{bigIdea.callout}</Callout>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="The 8 building blocks">
            {bigIdea.blocks.map((b) => (
              <li key={b} className={chipClass}>
                {b}
              </li>
            ))}
          </ul>
        </PageSection>

        {/* ── 3. Cheat sheet ── */}
        <PageSection
          id="cheat-sheet"
          label="03 · cheat sheet"
          title="Same service, different names"
        >
          <ProviderComparison
            rows={cheatSheet}
            firstColumn="Concept"
            caption="Equivalent services across AWS, Azure and GCP"
          />
        </PageSection>

        {/* ── 4. Example ── */}
        <PageSection id="example" label="04 · example" title="One online store, three clouds">
          <p className="mb-6 text-base text-muted-foreground sm:text-lg">{storeExample.intro}</p>
          <ProviderComparison
            rows={storeExample.rows}
            firstColumn="Component"
            caption="An online store's components on AWS, Azure and GCP"
          />
          <p className="mt-4 text-sm text-muted-foreground">{storeExample.footnote}</p>
        </PageSection>

        {/* ── 5. Differences ── */}
        <PageSection id="differences" label="05 · differences" title="Where they differ">
          <div className="grid gap-4 sm:grid-cols-2">
            {differences.items.map((d) => (
              <div key={d.title} className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Callout>{differences.takeaway}</Callout>
          </div>
        </PageSection>

        {/* ── 6. Skill stack ── */}
        <PageSection id="skill-stack" label="06 · skill stack" title="The portable skill stack">
          <ul className="space-y-4 text-base text-muted-foreground sm:text-lg">
            {skillStack.skills.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="mt-2.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Callout>{skillStack.callout}</Callout>
          </div>
        </PageSection>

        {/* ── 7. Roadmap ── */}
        <PageSection id="roadmap" label="07 · roadmap" title="Learning roadmap">
          <ol className="space-y-3">
            {roadmap.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary font-mono text-xs text-primary">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-base leading-relaxed text-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </PageSection>

        {/* ── 8. Resources ── */}
        <PageSection id="resources" label="08 · resources" title="Free resources">
          <div className="grid gap-3 sm:grid-cols-2">
            {resources.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 items-center justify-between gap-3 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary"
              >
                <span className="min-w-0">
                  <span className="block font-medium text-foreground transition-colors group-hover:text-primary">
                    {r.title}
                  </span>
                  <span className="block truncate font-mono text-xs text-muted-foreground">
                    {r.href.replace(/^https:\/\//, "")}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>
        </PageSection>

        {/* ── 9. Stories ── */}
        <PageSection id="stories" label="09 · stories" title="Stories from the talk">
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-border bg-card px-5"
          >
            <AccordionItem value="stories" className="border-b-0">
              <AccordionTrigger className="min-h-11 text-base">
                Show the {stories.length} articles
              </AccordionTrigger>
              <AccordionContent>
                <ul className="divide-y divide-border">
                  {stories.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-11 items-center justify-between gap-3 py-3"
                      >
                        <span>
                          <span className="block text-foreground transition-colors group-hover:text-primary">
                            {s.title}
                          </span>
                          <span className="block font-mono text-xs text-muted-foreground">
                            {s.source}
                          </span>
                        </span>
                        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageSection>

        {/* ── Footer note ── */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="text-lg text-muted-foreground">{footerNote.text}</p>
            <div className="mt-6 flex justify-center">
              <Button asChild size="lg" className="h-11">
                <a href={profile.linkedin.value} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  {footerNote.linkLabel}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
