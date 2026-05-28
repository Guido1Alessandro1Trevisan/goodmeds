import Link from "next/link";

const sections = [
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/hipaa", label: "Notice of Privacy Practices" },
  { href: "/legal/telehealth-consent", label: "Telehealth Consent" },
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1 bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-base font-medium tracking-tight">
              goodmeds
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Legal
            </p>
            <nav className="mt-4 flex flex-col gap-2 border-l border-border pl-4">
              {sections.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {s.label}
                </Link>
              ))}
            </nav>
            <div className="mt-10 rounded-xl border border-border bg-card p-5 text-xs leading-relaxed text-muted">
              <p className="font-medium text-foreground">Draft for review</p>
              <p className="mt-2">
                These documents are working drafts intended to be reviewed by
                healthcare-regulatory counsel before launch. They are not legal
                advice.
              </p>
            </div>
          </aside>

          <article className="lg:col-span-9">{children}</article>
        </div>
      </div>

      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 text-xs text-muted">
          © {new Date().getFullYear()} Opero Labs, Inc. ·{" "}
          <Link href="/" className="hover:text-foreground">
            goodmeds.co
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="10"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M6.5 11h9M11 6.5v9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
