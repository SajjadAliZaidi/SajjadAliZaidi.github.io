import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useIsMounted } from "../../hooks/use-is-mounted";

function LinkSlot({
  href,
  internalUrl,
  icon: Icon,
  label,
}: {
  href?: string | null;
  internalUrl?: string | null;
  icon: typeof Github | typeof ArrowRight;
  label: string;
}) {
  if (internalUrl) {
    return (
      <Link
        to={internalUrl}
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Icon className="h-3.5 w-3.5" />
        {label}
      </Link>
    );
  }

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

function ProjectCard({ p }: { p: (typeof projects)[0] }) {
  const isMounted = useIsMounted();

  const cardContent = (
    <Card className="bg-card h-full transition-colors group-hover:border-primary">
      <CardContent className="flex h-full flex-col p-6">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {p.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
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
          {/* @ts-ignore */}
          {p.internalUrl && (
            // @ts-ignore
            <LinkSlot internalUrl={p.internalUrl} icon={ArrowRight} label="View Project" />
          )}
          <LinkSlot href={p.githubUrl} icon={Github} label="GitHub" />
          <LinkSlot href={p.liveUrl} icon={ExternalLink} label="Live Demo" />
        </div>
      </CardContent>
    </Card>
  );

  if (isMounted) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="group h-full"
      >
        {cardContent}
      </motion.div>
    );
  }

  return <div className="group h-full">{cardContent}</div>;
}

export function Projects() {
  return (
    <Section id="projects" label="projects" title="Selected Projects">
      <p className="mb-8 text-base text-muted-foreground">
        A mix of production systems and 0-to-1 builds. Some solving real business problems, some solving problems I made up for myself.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
