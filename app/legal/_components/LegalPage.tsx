import { LEGAL_LAST_UPDATED } from "../_lib/entities";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-10">
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          Effective {LEGAL_LAST_UPDATED}
        </p>
        <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            {intro}
          </p>
        )}
      </header>
      <div className="legal-body space-y-8 text-[15px] leading-relaxed text-foreground">
        {children}
      </div>
    </div>
  );
}

export function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl tracking-tight">
        <span className="mr-3 text-muted">{n}.</span>
        {title}
      </h2>
      <div className="space-y-3 text-muted">{children}</div>
    </section>
  );
}

export function Sub({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 pt-2">
      <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-foreground">
        {title}
      </h3>
      <div className="space-y-3 text-muted">{children}</div>
    </div>
  );
}
