import { Section } from "./Section";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" label="about" title="About">
      <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {about}
      </p>
    </Section>
  );
}
