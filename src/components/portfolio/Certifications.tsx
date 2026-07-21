import { Award } from "lucide-react";
import { Section } from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section id="certifications" label="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <Card key={c.code} className="bg-card">
            <CardContent className="flex items-start gap-4 p-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium leading-snug">{c.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {c.code} · {c.issuer} · {c.year}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
