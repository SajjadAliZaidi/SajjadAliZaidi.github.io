import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/data/portfolio";

function LinkSlot({
  href,
  icon: Icon,
  label,
}: {
  href?: string;
  icon: typeof Github;
  label: string;
}) {
  if (!href) {
    return (
      <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground opacity-60">
        <Icon className="h-3.5 w-3.5" />
        Coming Soon
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </a>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <Card className="bg-card transition-colors hover:border-primary/40">
      <CardContent className="flex h-full flex-col p-6">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {p.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="rounded font-mono text-[10px] uppercase tracking-wider"
            >
              {t}
            </Badge>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <LinkSlot href={p.github} icon={Github} label="GitHub" />
          <LinkSlot href={p.demo} icon={ExternalLink} label="Live Demo" />
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  return (
    <Section id="projects" label="projects" title="Selected Projects">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
