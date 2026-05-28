import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    name: "Semaglutide",
    price: "149",
    cadence: "month",
    blurb: "The original GLP-1. Steady, predictable weight loss.",
    bullets: [
      "Compounded by US-licensed pharmacies",
      "Weekly self-administered injection",
      "Average 15% body weight loss at 12 months",
    ],
  },
  {
    name: "Tirzepatide",
    price: "279",
    cadence: "month",
    blurb: "Dual-action GLP-1/GIP. The most effective option available.",
    bullets: [
      "Compounded by US-licensed pharmacies",
      "Weekly self-administered injection",
      "Average 21% body weight loss at 12 months",
    ],
    featured: true,
  },
];

const steps = [
  {
    n: "01",
    title: "Take the 5-minute intake",
    body: "A medical questionnaire about your goals, history, and current health. No appointment, no waiting room.",
  },
  {
    n: "02",
    title: "A licensed provider reviews",
    body: "A board-certified clinician in your state reviews your file and designs a dose plan within 24 hours.",
  },
  {
    n: "03",
    title: "Refrigerated delivery, monthly",
    body: "Your medication arrives discreetly at your door. Cancel or pause anytime — your provider is on call when you need them.",
  },
];

const testimonials = [
  {
    quote:
      "I'd tried everything. Six months on tirzepatide and I'm down 38 pounds. The provider actually returns messages.",
    name: "Maya R.",
    meta: "Member since 2025",
  },
  {
    quote:
      "No insurance runaround, no judgment, no $400 office visits. It's just… straightforward.",
    name: "Daniel K.",
    meta: "Member since 2025",
  },
  {
    quote:
      "The dose adjustments along the way are what made the difference. I didn't get the side effects I was afraid of.",
    name: "Priya S.",
    meta: "Member since 2026",
  },
];

const faqs = [
  {
    q: "Is compounded GLP-1 safe?",
    a: "Our medications are compounded in US-licensed 503A and 503B pharmacies that follow strict sterility and quality standards. Compounded medications are not FDA-approved but are legally prescribed by your provider when clinically appropriate.",
  },
  {
    q: "Do I need insurance?",
    a: "No. goodmeds is cash-pay only. Your monthly price covers the consultation, medication, and shipping — there are no hidden fees and no insurance paperwork.",
  },
  {
    q: "What if it isn't right for me?",
    a: "Your provider screens for eligibility before prescribing. If you're not a candidate, you pay nothing. If something changes mid-treatment, you can pause or cancel from your dashboard in one click.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most members notice reduced appetite within the first two weeks. Meaningful weight loss typically begins around weeks 4–8 as your dose is titrated up.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col flex-1 bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <HowItWorks />
        <Pricing />
        <WhyUs />
        <TextureBand />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-base font-medium tracking-tight">goodmeds</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#how" className="hover:text-foreground">
            How it works
          </a>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#start"
            className="hidden text-sm text-muted hover:text-foreground sm:inline"
          >
            Sign in
          </a>
          <a
            href="#start"
            className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Start visit
          </a>
        </div>
      </div>
    </header>
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
      <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M6.5 11h9M11 6.5v9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 pt-20 pb-24 lg:grid-cols-12 lg:gap-12 lg:pt-28 lg:pb-32">
        <div className="lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs tracking-wide text-muted uppercase">
            <span className="size-1.5 rounded-full bg-accent" />
            Now prescribing in 47 states
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            GLP-1 weight loss,
            <br />
            <span className="italic text-accent">prescribed online.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            Doctor-prescribed semaglutide and tirzepatide, delivered to your
            door. Transparent pricing from $149/month. No insurance required, no
            office visits, no surprises.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href="#start"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
            >
              Start your free visit
            </a>
            <a
              href="#how"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-7 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              How it works
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <Check>US-licensed providers</Check>
            <Check>Free overnight shipping</Check>
            <Check>Cancel anytime</Check>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/img/hero-still.png"
                alt="Editorial still life with a sage ceramic vessel, eucalyptus, and cream linen"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-xl border border-border bg-background/95 p-5 backdrop-blur sm:left-auto sm:max-w-[280px]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                    Starting at
                  </p>
                  <p className="mt-1 font-serif text-4xl leading-none tracking-tight">
                    $149
                    <span className="text-sm text-muted">/mo</span>
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    Visit, medication, and overnight shipping — all included.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 px-2 text-xs text-muted">
              Eligibility determined by your provider during your free intake.
              You only pay if you're prescribed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "As seen in clinical research",
    "21% average weight loss",
    "500,000+ patients treated",
    "47 states served",
    "Free overnight shipping",
  ];
  return (
    <section className="border-b border-border/60 bg-card">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-xs uppercase tracking-[0.18em] text-muted">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-10">
            {item}
            {i < items.length - 1 && (
              <span aria-hidden className="hidden text-border md:inline">
                •
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              How it works
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Three steps.
              <br />
              <span className="italic text-accent">No waiting rooms.</span>
            </h2>
            <p className="mt-6 max-w-sm text-muted">
              The whole flow — from intake to first delivery — takes less than a
              week for most members.
            </p>
          </div>
          <ol className="lg:col-span-8 divide-y divide-border border-y border-border">
            {steps.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 py-8"
              >
                <span className="font-serif text-3xl text-muted/70">{s.n}</span>
                <div>
                  <h3 className="font-serif text-2xl tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/60 bg-card">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Pricing
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            One price. Everything included.
          </h2>
          <p className="mt-5 text-muted">
            No insurance, no copays, no surprise bills. Your monthly price
            covers your visit, medication, shipping, and unlimited messaging
            with your provider.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                "flex flex-col rounded-2xl border p-8 " +
                (plan.featured
                  ? "border-accent bg-background"
                  : "border-border bg-background")
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-3xl tracking-tight">
                  {plan.name}
                </h3>
                {plan.featured && (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium uppercase tracking-wide text-background">
                    Most chosen
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-muted">{plan.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-5xl tracking-tight">
                  ${plan.price}
                </span>
                <span className="text-muted">/{plan.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-foreground">
                    <CheckIcon /> {b}
                  </li>
                ))}
              </ul>
              <a
                href="#start"
                className={
                  "mt-8 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors " +
                  (plan.featured
                    ? "bg-accent text-background hover:bg-accent-hover"
                    : "border border-border bg-card hover:bg-background")
                }
              >
                Start with {plan.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-muted">
          Prices reflect the lowest starting dose. Higher doses may cost more —
          your provider will share full pricing for your specific plan before
          any charge.
        </p>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      title: "Real US-licensed providers",
      body: "Every prescription is reviewed and signed by a clinician licensed in your state — not an algorithm.",
    },
    {
      title: "Compounded, not knockoff",
      body: "Our medications come from 503A and 503B pharmacies regulated by US state and federal authorities.",
    },
    {
      title: "Built for the long game",
      body: "Dose adjustments, plateau strategy, side-effect support — your provider stays with you through it.",
    },
    {
      title: "Truly transparent pricing",
      body: "One monthly price. No insurance, no hidden lab fees, no upsells. Cancel from your dashboard.",
    },
  ];
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Why goodmeds
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Care that actually feels like care.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-2xl tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TextureBand() {
  return (
    <section className="border-b border-border/60 bg-card">
      <div className="relative aspect-[21/9] w-full overflow-hidden sm:aspect-[21/7]">
        <Image
          src="/img/ritual-texture.png"
          alt="Folded cream linen with a fresh olive branch"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="max-w-md font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
              "A weekly ritual,
              <br />
              <span className="italic text-accent">
                not a willpower problem."
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-b border-border/60 bg-card">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            From our members
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Results worth talking about.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-background p-7"
            >
              <blockquote className="font-serif text-xl leading-snug tracking-tight text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 text-sm">
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-muted">{t.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Questions, answered honestly.
            </h2>
            <p className="mt-6 max-w-sm text-muted">
              Don't see what you're looking for?{" "}
              <a
                href="mailto:hello@goodmeds.co"
                className="text-accent underline underline-offset-4"
              >
                Email us
              </a>
              .
            </p>
          </div>
          <dl className="lg:col-span-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <dt className="font-serif text-xl tracking-tight">{f.q}</dt>
                <dd className="mt-3 max-w-2xl text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="start" className="bg-accent text-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:py-24">
        <div className="max-w-xl">
          <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Ready when you are.
          </h2>
          <p className="mt-4 text-background/75">
            Take the 5-minute intake. A licensed provider reviews your file
            within 24 hours. You only pay if you're prescribed.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-background px-7 text-sm font-medium text-accent transition-colors hover:bg-background/90"
          >
            Start your free visit
          </a>
          <a
            href="#pricing"
            className="inline-flex h-12 items-center justify-center rounded-full border border-background/30 px-7 text-sm font-medium text-background transition-colors hover:bg-background/10"
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-base font-medium tracking-tight">
                goodmeds
              </span>
            </div>
            <p className="mt-4 text-sm text-muted">
              Modern weight care, delivered. Doctor-prescribed GLP-1 treatment
              for adults in the United States.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 md:max-w-lg">
            <FooterCol
              title="Treatments"
              links={[
                ["Semaglutide", "#pricing"],
                ["Tirzepatide", "#pricing"],
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                ["How it works", "#how"],
                ["FAQ", "#faq"],
                ["Contact", "mailto:hello@goodmeds.co"],
              ]}
            />
            <FooterCol
              title="Legal"
              links={[
                ["Terms", "#"],
                ["Privacy", "#"],
                ["Telehealth consent", "#"],
              ]}
            />
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-xs leading-relaxed text-muted">
          <p>
            goodmeds connects patients with independent, US-licensed healthcare
            providers via a telehealth platform. Compounded medications are
            prepared by licensed 503A or 503B pharmacies and are not FDA-approved.
            Compounded medications may be prescribed when an FDA-approved drug
            is unavailable or clinically inappropriate for a patient. This page
            is for informational purposes and does not constitute medical
            advice. Results vary.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} goodmeds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-foreground hover:text-accent">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckIcon />
      {children}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-accent"
    >
      <path
        d="M2.5 7.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
