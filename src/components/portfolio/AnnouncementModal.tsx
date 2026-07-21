import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const SESSION_KEY = "ayp_modal_dismissed";

export function AnnouncementModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  }, []);

  // Escape key
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible, dismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ayp-modal-heading"
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-1/2 z-50 mx-auto max-w-[480px] -translate-y-1/2 rounded-xl border border-primary/40 bg-[#14141c] shadow-2xl shadow-black/60"
            style={{ borderTop: "2px solid #3b82f6" }}
          >
            {/* Dismiss button */}
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute right-3 top-3 rounded-md p-1.5 text-[#8b8b96] transition-colors hover:bg-white/5 hover:text-[#e4e4e7]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="px-6 pb-6 pt-5">
              {/* Eyebrow */}
              <p className="font-mono text-xs text-[#8b8b96]">
                🚧 What I'm building right now
              </p>

              {/* Heading */}
              <h2
                id="ayp-modal-heading"
                className="mt-2 text-xl font-bold tracking-tight text-[#e4e4e7]"
              >
                Ask<span className="text-[#3b82f6]">Your</span>Pages
              </h2>

              {/* Body */}
              <p className="mt-2 text-sm leading-relaxed text-[#8b8b96]">
                Ask your PDF books anything, with page-level citations that jump
                straight to the source. Coming soon.
              </p>

              {/* Actions */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button asChild size="sm" onClick={dismiss}>
                  <Link to="/projects/askyourpages">
                    Learn more
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <button
                  onClick={dismiss}
                  className="text-sm text-[#8b8b96] transition-colors hover:text-[#e4e4e7]"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
