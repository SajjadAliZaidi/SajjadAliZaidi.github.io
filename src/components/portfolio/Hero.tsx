import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <p className="font-mono text-sm text-primary">
          <span className="text-muted-foreground">const</span> role ={" "}
          <span>"engineer"</span>;
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl">
          {profile.title}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">
              <Mail className="mr-1.5 h-4 w-4" />
              Contact
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={profile.resumeUrl} download>
              <Download className="mr-1.5 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
