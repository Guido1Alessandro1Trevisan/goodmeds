import Link from "next/link";
import { TECH_COMPANY } from "../legal/_lib/entities";

const navItems: [string, string][] = [
  ["Weight Loss", "/#weight-loss"],
  ["Safety", "/safety"],
  ["FAQ", "/faq"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-baseline gap-1">
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            {TECH_COMPANY.brand}
          </span>
          <span
            aria-hidden
            className="size-1.5 translate-y-[-0.4em] rounded-full bg-accent transition-transform group-hover:scale-125"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/#waitlist"
            className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
