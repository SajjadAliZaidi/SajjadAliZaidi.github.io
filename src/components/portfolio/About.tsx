import { Section } from "./Section";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" label="about" title="About">
      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {about.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
