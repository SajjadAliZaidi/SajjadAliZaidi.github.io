import { Section } from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" label="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <Card key={group.category} className="bg-card">
            <CardContent className="p-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-primary">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="rounded-md border border-border bg-secondary/60 font-normal"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
