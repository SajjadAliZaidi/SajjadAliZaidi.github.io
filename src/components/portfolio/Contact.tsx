import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

const items = [
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email", value: profile.email },
  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", value: "linkedin.com" },
  { href: profile.github, icon: Github, label: "GitHub", value: "github.com" },
];

export function Contact() {
  return (
    <Section id="contact" label="contact" title="Get in touch">
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
        Open to collaboration on applied AI, GenAI platforms, and full-stack product work.
        The fastest way to reach me is email.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary hover:text-primary"
          >
            <it.icon className="h-5 w-5 text-primary" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {it.label}
              </div>
              <div className="text-sm">{it.value}</div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
