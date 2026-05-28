import Image from "next/image";
import { SiteHeader } from "./_components/SiteHeader";
import { SiteFooter } from "./_components/SiteFooter";
import { TECH_COMPANY, MEDICAL_GROUP } from "./legal/_lib/entities";

const treatments = [
  {
    name: "Semaglutide",
    blurb:
      "A GLP-1 receptor agonist that helps reduce appetite when paired with diet and lifestyle changes.",
  },
  {
    name: "Tirzepatide",
    blurb:
      "A dual GLP-1 / GIP receptor agonist prescribed by your provider when clinically appropriate.",
  },
];

const includedItems = [
  "Asynchronous telehealth visit",
  "Medication, if prescribed",
  "Shipping to your door",
  "Messaging with your clinical team",
  "Dose adjustments through treatment",
];

const notIncludedItems = [
  "Insurance billing (cash-pay only)",
  "Lab work ordered outside the platform",
  "Specialist referrals",
];

const steps = [
  {
    n: "01",
    title: "Take the medical intake",
    body: "A clinical questionnaire about your health history, current medications, goals, and any conditions that affect eligibility. No appointment, no waiting room.",
  },
  {
    n: "02",
    title: "A licensed provider reviews",
    body: "A clinician licensed in your state reviews your file, may follow up with questions, and — only if appropriate — writes a prescription. You only pay if you're prescribed.",
  },
  {
    n: "03",
    title: "Pharmacy ships your prescription",
    body: "Your prescription is filled by a US-licensed compounding pharmacy and shipped to your door. Cancel or pause anytime.",
  },
];

const careCards = [
  {
    src: "/img/person-walking.png",
    alt: "Member walking on a tree-lined sidewalk in autumn light",
    title: "Built around your day",
    body: "Async care means no waiting rooms and no scheduled video calls. Your provider reviews your file and responds on a cadence that fits your life.",
  },
  {
    src: "/img/person-laughing.png",
    alt: "Member laughing at an outdoor cafe with a ceramic coffee cup",
    title: "Real conversations, anytime",
    body: "Side-effect questions, dose adjustments, plateau strategy — message your provider through the platform and get a thoughtful reply, not a chatbot.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col flex-1 bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <HowItWorks />
        <CareExperience />
        <Pricing />
        <WhyUs />
        <TextureBand />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 pt-20 pb-24 lg:grid-cols-12 lg:gap-12 lg:pt-28 lg:pb-32">
        <div className="lg:col-span-7">
          <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            GLP-1 Care,
            <br />
            <span className="italic font-medium text-accent">
              Prescribed Online.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            Provider-prescribed compounded semaglutide and tirzepatide,
            shipped to your door. Cash-pay only — no insurance, no office
            visits.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href="#start"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
            >
              Start Your Visit
            </a>
            <a
              href="#how"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-7 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              How It Works
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <Check>US-licensed providers</Check>
            <Check>Shipped to your door</Check>
            <Check>Cancel anytime</Check>
          </div>
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-muted">
            Compounded semaglutide and tirzepatide are not FDA-approved and
            are not the same as brand-name medications like Ozempic, Wegovy,
            Mounjaro, or Zepbound. See{" "}
            <a
              href="/safety"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Important Safety Information
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/img/person-portrait.png"
                alt="A GoodMeds member in soft window light, calm and at ease"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-border bg-background/95 p-5 backdrop-blur sm:left-auto sm:max-w-[280px]">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                  Included In Your Monthly Plan
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <CheckIcon /> Async telehealth visit
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon /> Medication, if prescribed
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon /> Shipping &amp; provider messaging
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4 px-2 text-xs text-muted">
              Eligibility is determined by a licensed provider during your
              intake. Specific pricing for your prescribed plan is shared
              before any charge. You only pay if you're prescribed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "US-licensed providers",
    "Cash-pay — no insurance",
    "Compounded by US pharmacies",
    "Asynchronous telehealth",
    "Cancel anytime",
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
              How It Works
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Three Steps.
              <br />
              <span className="italic font-medium text-accent">
                No Waiting Rooms.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-muted">
              Intake, asynchronous provider review, and — only if a GLP-1 is
              right for you — pharmacy fulfillment.
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
                  <h3 className="font-serif text-2xl font-semibold tracking-tight">
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

function CareExperience() {
  return (
    <section className="border-b border-border/60 bg-card">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              The Experience
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Care designed
              <br />
              <span className="italic font-medium text-accent">
                around your life.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-muted">
              GLP-1 treatment works best when it fits the way you actually
              live — your schedule, your goals, and the questions that come
              up between visits. {TECH_COMPANY.brand} is built for that.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {careCards.map((card) => (
              <article
                key={card.src}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-5"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-card">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="px-1 pb-1">
                  <h3 className="font-serif text-xl font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Pricing
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Transparent Monthly Pricing.
            <br />
            <span className="italic font-medium text-accent">
              No Insurance Hassles.
            </span>
          </h2>
          <p className="mt-5 text-muted">
            Your monthly cost covers everything below. Specific pricing for
            your prescribed plan is shared during intake — before any charge —
            and depends on the medication and dose your provider determines
            is right for you.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              What's Included
            </p>
            <ul className="mt-5 space-y-3 text-sm text-foreground">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Not Included
            </p>
            <ul className="mt-5 space-y-3 text-sm text-foreground">
              {notIncludedItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-block h-3 w-3 shrink-0 rounded-full border border-border"
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-muted">
            <strong className="text-foreground">
              You only pay if you're prescribed.
            </strong>{" "}
            If your provider determines a GLP-1 isn't right for you, you pay
            nothing.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {treatments.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-card p-6 text-left"
              >
                <h3 className="font-serif text-2xl font-semibold tracking-tight">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{t.blurb}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
                  Compounded by a US-licensed pharmacy
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      title: "US-licensed providers",
      body: `Every prescription is reviewed and signed by a clinician licensed in the state where you live, through ${MEDICAL_GROUP.descriptiveName} — not by an algorithm.`,
    },
    {
      title: "Transparent sourcing",
      body: "Medication is prepared by a US-licensed compounding pharmacy on a per-prescription basis for your individual clinical need.",
    },
    {
      title: "Care beyond the first visit",
      body: "Your provider remains available through your treatment to adjust dosing or address side effects via secure messaging.",
    },
    {
      title: "No insurance, no surprises",
      body: "Cash-pay only. Your monthly cost is disclosed in full before any charge. You can pause or cancel from your dashboard at any time.",
    },
  ];
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Why {TECH_COMPANY.brand}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Care that actually
            <br />
            <span className="italic font-medium text-accent">
              feels like care.
            </span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-2xl font-semibold tracking-tight">
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
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="start" className="bg-accent text-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:py-24">
        <div className="max-w-xl">
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Ready When You Are.
          </h2>
          <p className="mt-4 text-background/75">
            Take the intake. A licensed provider reviews your file. You only
            pay if a GLP-1 is prescribed for you.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-background px-7 text-sm font-medium text-accent transition-colors hover:bg-background/90"
          >
            Start Your Visit
          </a>
          <a
            href="#pricing"
            className="inline-flex h-12 items-center justify-center rounded-full border border-background/30 px-7 text-sm font-medium text-background transition-colors hover:bg-background/10"
          >
            See What's Included
          </a>
        </div>
      </div>
    </section>
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
