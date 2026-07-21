import { Section } from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useIsMounted } from "../../hooks/use-is-mounted";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};

export function Skills() {
  const isMounted = useIsMounted();

  return (
    <Section id="skills" label="skills" title="Skills">
      <p className="mb-8 text-base text-muted-foreground">
        The stack I build with — from frontend to cloud AI infrastructure.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <Card key={group.category} className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-4 w-4 text-primary" />}
                  <h3 className="font-mono text-sm uppercase tracking-wider text-primary">
                    {group.category}
                  </h3>
                </div>
                {isMounted ? (
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-20px" }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {group.items.map((s) => (
                      <motion.div key={s} variants={item}>
                        <Badge
                          variant="secondary"
                          className="rounded-md border border-border bg-secondary/60 font-normal"
                        >
                          {s}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
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
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
