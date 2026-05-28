import type { Metadata } from "next";
import { SiteHeader } from "../_components/SiteHeader";
import { SiteFooter } from "../_components/SiteFooter";
import { TECH_COMPANY, MEDICAL_GROUP } from "../legal/_lib/entities";

export const metadata: Metadata = {
  title: "FAQ — GoodMeds",
  description:
    "Common questions about compounded GLP-1 telehealth, prescribing, pricing, and side effects.",
};

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

export default function FaqPage() {
  return (
    <div className="flex flex-col flex-1 bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section>
          <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  FAQ
                </p>
                <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
                  Questions, answered honestly.
                </h1>
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
                    <dt className="font-serif text-xl tracking-tight">
                      {f.q}
                    </dt>
                    <dd className="mt-3 max-w-2xl text-muted">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
