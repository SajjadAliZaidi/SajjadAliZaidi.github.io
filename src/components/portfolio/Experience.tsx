import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" label="experience" title="Experience">
      <ol className="relative border-l border-border pl-6">
        {experience.map((item) => (
          <li key={item.company + item.role} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {item.role}{" "}
                <span className="text-primary">@ {item.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                {item.period}
              </span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
