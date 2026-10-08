import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/portfolio";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

const pageLinks = [{ to: "/cs-nuces-lhr-cloud-talk-2026", label: "Cloud Talk" }] as const;

const linkClass =
  "group relative text-sm text-muted-foreground transition-colors hover:text-foreground";
const underline = (
  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
);

export function Nav() {
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-primary">$</span> {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-muted-foreground">.dev</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            isHome ? (
              <a
                key={l.href}
                href={l.href.replace("/#", "#")}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            )
          ))}
          {pageLinks.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass}>
              {l.label}
              {underline}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <a href={profile.resumeUrl} download>
              <Download className="mr-1.5 h-4 w-4" />
              Resume
            </a>
          </Button>
          {/* Hide theme toggle for now */}
          {/* <ThemeToggle /> */}
          <MobileMenu isHome={isHome} />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ isHome }: { isHome: boolean }) {
  const [open, setOpen] = useState(false);
  const pending = useRef<string | null>(null);
  const navigate = useNavigate();

  const select = (href: string) => (e: MouseEvent) => {
    e.preventDefault();
    pending.current = href;
    setOpen(false);
  };

  // The sheet locks page scroll until it fully unmounts, so in-page jumps are
  // deferred until then (see OnUnmount below) or they get swallowed.
  const go = () => {
    const href = pending.current;
    pending.current = null;
    if (!href) return;
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (isHome) {
        history.replaceState(null, "", `#${id}`);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate({ to: "/", hash: id });
      }
    } else {
      navigate({ to: href });
    }
  };

  const itemClass =
    "flex min-h-11 items-center rounded-md px-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-11 w-11 md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-72 max-w-[80vw] p-4 pt-14"
        onCloseAutoFocus={(e) => pending.current && e.preventDefault()}
        aria-describedby={undefined}
      >
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <OnUnmount run={go} />
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={select(l.href)} className={itemClass}>
              {l.label}
            </a>
          ))}
          {pageLinks.map((l) => (
            <a key={l.to} href={l.to} onClick={select(l.to)} className={itemClass}>
              {l.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function OnUnmount({ run }: { run: () => void }) {
  const latest = useRef(run);
  latest.current = run;
  // setTimeout lets the sheet's own unmount cleanup (scroll unlock) finish first.
  useEffect(() => () => void setTimeout(() => latest.current(), 0), []);
  return null;
}
