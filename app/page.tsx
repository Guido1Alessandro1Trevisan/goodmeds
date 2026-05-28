import Image from "next/image";
import Link from "next/link";
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

const faqs = [
  {
    q: "Is compounded medication the same as the brand-name drug?",
    a: "No. Compounded semaglutide and compounded tirzepatide are not FDA-approved and are not the same as brand-name medications like Ozempic, Wegovy, Mounjaro, or Zepbound. The FDA has not reviewed compounded drugs for safety, effectiveness, or quality. They are prepared by a US-licensed pharmacy on the prescription of your provider for your individual clinical need.",
  },
  {
    q: "Who actually prescribes the medication?",
    a: `Prescriptions are written by independent healthcare providers affiliated with ${MEDICAL_GROUP.descriptiveName}, each licensed in the state where you live. ${TECH_COMPANY.brand} is a technology platform that connects you with these providers — we don't practice medicine ourselves, and we don't manufacture or compound medication.`,
  },
  {
    q: "How does pricing work?",
    a: "We're cash-pay only — no insurance billing. Your monthly cost covers the asynchronous visit, the medication if your provider prescribes one, shipping, and ongoing messaging with your clinical team. Specific pricing depends on the medication and dose your provider determines is right for you, and is shared during intake before any charge.",
  },
  {
    q: "What if I'm not eligible or want to stop?",
    a: "If your provider determines a GLP-1 isn't appropriate for you, you pay nothing. Once started, you can pause or cancel from your dashboard at any time. Notify your provider if your health changes or if you experience side effects.",
  },
  {
    q: "What are the side effects?",
    a: "Common side effects of GLP-1 medications include nausea, vomiting, diarrhea, constipation, abdominal pain, and reduced appetite. Serious but less common risks include pancreatitis, gallbladder problems, kidney injury, and thyroid C-cell tumors (boxed warning for the medication class). Discuss your full medical history with your provider. Stop using the medication and seek immediate medical care if you experience symptoms like severe abdominal pain, signs of an allergic reaction, or a lump in the neck. Call 911 in any emergency.",
  },
];

const commitments = [
  {
    title: "We don't claim our medication is the same as Ozempic or Wegovy",
    body: "Compounded semaglutide and compounded tirzepatide are not FDA-approved and are not the same as brand-name medications. We won't tell you otherwise.",
  },
  {
    title: "We don't promise a specific weight-loss outcome",
    body: "GLP-1 results vary based on your starting health, dose, lifestyle, and biology. Any clinical-trial numbers you see online are for FDA-approved brand-name drugs studied in specific patient populations — not a guarantee for you.",
  },
  {
    title: "We don't prescribe without a real clinical evaluation",
    body: "Every prescription is reviewed and signed by a clinician licensed in your state. If a GLP-1 isn't appropriate for you, your provider won't prescribe one — and you won't be charged.",
  },
  {
    title: "We don't use fake reviews",
    body: "When real patient stories are available — with consent, and clearly labeled as individual experiences that don't predict your results — we'll share them here. Until then, we'd rather show you nothing than show you something invented.",
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
        <Commitments />
        <Faq />
        <SafetyInfo />
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
          <span className="text-base font-medium tracking-tight">
            {TECH_COMPANY.brand}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#how" className="hover:text-foreground">
            How it works
          </a>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#safety" className="hover:text-foreground">
            Safety
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
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            GLP-1 care,
            <br />
            <span className="italic text-accent">prescribed online.</span>
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
              Start your visit
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
            <Check>Shipped to your door</Check>
            <Check>Cancel anytime</Check>
          </div>
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-muted">
            Compounded semaglutide and tirzepatide are not FDA-approved and are
            not the same as brand-name medications like Ozempic, Wegovy,
            Mounjaro, or Zepbound. See{" "}
            <a href="#safety" className="underline underline-offset-2">
              Important Safety Information
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/img/hero-still.png"
                alt="Editorial still life with a sage ceramic vessel and eucalyptus on cream linen"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-border bg-background/95 p-5 backdrop-blur sm:left-auto sm:max-w-[280px]">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                  Included in your monthly plan
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
              How it works
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Three steps.
              <br />
              <span className="italic text-accent">No waiting rooms.</span>
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
            Transparent monthly pricing.
            <br />
            <span className="italic text-accent">No insurance hassles.</span>
          </h2>
          <p className="mt-5 text-muted">
            Your monthly cost covers everything below. Specific pricing for
            your prescribed plan is shared during intake — before any charge —
            and depends on the medication and dose your provider determines is
            right for you.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              What's included
            </p>
            <ul className="mt-5 space-y-3 text-sm text-foreground">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Not included
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
                className="rounded-2xl border border-border bg-background p-6 text-left"
              >
                <h3 className="font-serif text-2xl tracking-tight">{t.name}</h3>
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
      </div>
    </section>
  );
}

function Commitments() {
  return (
    <section className="border-b border-border/60 bg-card">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Our standards
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            What we won't do.
          </h2>
          <p className="mt-6 max-w-lg text-muted">
            The GLP-1 telehealth space has a lot of corner-cutting. Here's where
            we draw the line.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {commitments.map((c) => (
            <li key={c.title}>
              <h3 className="font-serif text-2xl tracking-tight">{c.title}</h3>
              <p className="mt-3 max-w-md text-muted">{c.body}</p>
            </li>
          ))}
        </ul>
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
                href={`mailto:${TECH_COMPANY.supportEmail}`}
                className="text-accent underline underline-offset-4"
              >
                Email our team
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

function SafetyInfo() {
  return (
    <section id="safety" className="border-b border-border/60 bg-card">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Important Safety Information
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Please read before starting treatment.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-sm leading-relaxed text-muted">
            <p>
              <strong className="text-foreground">
                Compounded semaglutide and compounded tirzepatide are not
                FDA-approved.
              </strong>{" "}
              The U.S. Food and Drug Administration has not reviewed these
              compounded products for safety, effectiveness, or quality. They
              are not the same as, and have not been shown to be equivalent to,
              FDA-approved brand-name medications such as Ozempic®, Wegovy®,
              Mounjaro®, or Zepbound®. Compounded medications are prepared by a
              US-licensed pharmacy on the order of a licensed prescriber for an
              individual patient with a documented clinical need.
            </p>
            <p>
              <strong className="text-foreground">Who should not use:</strong>{" "}
              Do not use a GLP-1 receptor agonist if you or a family member has
              a history of medullary thyroid carcinoma (MTC) or Multiple
              Endocrine Neoplasia syndrome type 2 (MEN 2), if you have a known
              serious allergy to the active ingredient, or if you are pregnant,
              trying to become pregnant, or breastfeeding. Disclose all medical
              conditions and medications during your intake.
            </p>
            <p>
              <strong className="text-foreground">
                Possible side effects include
              </strong>{" "}
              nausea, vomiting, diarrhea, constipation, abdominal pain, reduced
              appetite, fatigue, and injection-site reactions. Serious risks
              include pancreatitis, gallbladder problems, kidney injury, severe
              hypoglycemia (especially with other glucose-lowering medications),
              vision changes in patients with diabetic retinopathy, and a
              boxed-warning risk of thyroid C-cell tumors observed in animal
              studies of this medication class. This is not a complete list.
            </p>
            <p>
              <strong className="text-foreground">When to seek help:</strong>{" "}
              Stop using the medication and seek immediate medical care if you
              experience severe or persistent abdominal pain, signs of an
              allergic reaction (rash, swelling, difficulty breathing), a lump
              or swelling in your neck, hoarseness, or trouble swallowing.{" "}
              <strong className="text-foreground">
                Call 911 in any emergency.
              </strong>{" "}
              Report side effects to your provider through your{" "}
              {TECH_COMPANY.brand} account and to the FDA via{" "}
              <a
                href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program"
                className="text-accent underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                MedWatch
              </a>{" "}
              or 1-800-FDA-1088.
            </p>
            <p>
              <strong className="text-foreground">Not medical advice.</strong>{" "}
              The content on this site is for general information and does not
              replace consultation with a qualified healthcare professional.
              Individual results vary; nothing on this site should be read as a
              guarantee of any specific outcome.
            </p>
          </div>
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
            Take the intake. A licensed provider reviews your file. You only pay
            if a GLP-1 is prescribed for you.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-background px-7 text-sm font-medium text-accent transition-colors hover:bg-background/90"
          >
            Start your visit
          </a>
          <a
            href="#pricing"
            className="inline-flex h-12 items-center justify-center rounded-full border border-background/30 px-7 text-sm font-medium text-background transition-colors hover:bg-background/10"
          >
            See what's included
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
                {TECH_COMPANY.brand}
              </span>
            </div>
            <p className="mt-4 text-sm text-muted">
              A telehealth platform that connects U.S. adults with licensed
              clinicians for evaluation and, when clinically appropriate,
              prescription of compounded GLP-1 medications.
            </p>
            <address className="mt-4 not-italic text-sm text-muted">
              {TECH_COMPANY.legalName}
              <br />
              {TECH_COMPANY.mailingAddress.line1}
              <br />
              {TECH_COMPANY.mailingAddress.cityStateZip}
              <br />
              <a
                href={`mailto:${TECH_COMPANY.supportEmail}`}
                className="hover:text-accent"
              >
                {TECH_COMPANY.supportEmail}
              </a>{" "}
              · {TECH_COMPANY.supportPhone}
            </address>
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
                ["Safety", "#safety"],
                ["FAQ", "#faq"],
                ["Contact", `mailto:${TECH_COMPANY.supportEmail}`],
              ]}
            />
            <FooterCol
              title="Legal"
              links={[
                ["Terms of Service", "/legal/terms"],
                ["Privacy Policy", "/legal/privacy"],
                ["Notice of Privacy Practices", "/legal/hipaa"],
                ["Telehealth Consent", "/legal/telehealth-consent"],
              ]}
            />
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-xs leading-relaxed text-muted">
          <p>
            {TECH_COMPANY.brand} is a telehealth platform owned and operated
            by {TECH_COMPANY.legalName}, a {TECH_COMPANY.formationState}{" "}
            corporation. Clinical services are provided by independent
            healthcare providers affiliated with {MEDICAL_GROUP.descriptiveName}
            , licensed in the state where the patient resides and not employed
            by {TECH_COMPANY.shortName}. Prescriptions are filled by
            US-licensed compounding pharmacies on the order of these
            providers. Compounded semaglutide and
            compounded tirzepatide are not FDA-approved, have not been
            evaluated by the FDA for safety, effectiveness, or quality, and
            are not the same as brand-name medications such as Ozempic®,
            Wegovy®, Mounjaro®, or Zepbound® (all registered trademarks of
            their respective owners — {TECH_COMPANY.brand} is not affiliated
            with, sponsored by, or endorsed by these manufacturers). See{" "}
            <a href="#safety" className="text-foreground hover:text-accent">
              Important Safety Information
            </a>{" "}
            and consult your provider before starting any treatment. Content
            on this site is for general information only and is not medical
            advice. Individual results vary. Call 911 in any emergency. Report
            adverse events to your provider and to the FDA via{" "}
            <a
              href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program"
              className="text-foreground hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              MedWatch
            </a>
            .
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} {TECH_COMPANY.legalName}. All rights
            reserved.
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
