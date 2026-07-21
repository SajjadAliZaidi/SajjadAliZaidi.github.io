import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useIsMounted } from "../../hooks/use-is-mounted";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  const isMounted = useIsMounted();

  return (
    <section id={id} className="scroll-mt-20 border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            // {label}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        {isMounted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </section>
  );
}
