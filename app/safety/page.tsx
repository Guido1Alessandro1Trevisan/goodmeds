import type { Metadata } from "next";
import { SiteHeader } from "../_components/SiteHeader";
import { SiteFooter } from "../_components/SiteFooter";
import { TECH_COMPANY } from "../legal/_lib/entities";

export const metadata: Metadata = {
  title: "Important Safety Information — GoodMeds",
  description:
    "Safety information for compounded GLP-1 medications. Please read before starting treatment.",
};

export default function SafetyPage() {
  return (
    <div className="flex flex-col flex-1 bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section>
          <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Important Safety Information
                </p>
                <h1 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                  Please read before starting treatment.
                </h1>
                <p className="mt-6 max-w-sm text-muted">
                  This information is required to be visible to all patients
                  considering GLP-1 treatment. Please review it carefully and
                  discuss any questions with your provider during intake.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-6 text-[15px] leading-relaxed text-muted">
                <p>
                  <strong className="text-foreground">
                    Compounded semaglutide and compounded tirzepatide are not
                    FDA-approved.
                  </strong>{" "}
                  The U.S. Food and Drug Administration has not reviewed these
                  compounded products for safety, effectiveness, or quality.
                  They are not the same as, and have not been shown to be
                  equivalent to, FDA-approved brand-name medications such as
                  Ozempic®, Wegovy®, Mounjaro®, or Zepbound®. Compounded
                  medications are prepared by a US-licensed pharmacy on the
                  order of a licensed prescriber for an individual patient
                  with a documented clinical need.
                </p>
                <p>
                  <strong className="text-foreground">Who should not use:</strong>{" "}
                  Do not use a GLP-1 receptor agonist if you or a family
                  member has a history of medullary thyroid carcinoma (MTC) or
                  Multiple Endocrine Neoplasia syndrome type 2 (MEN 2), if you
                  have a known serious allergy to the active ingredient, or if
                  you are pregnant, trying to become pregnant, or
                  breastfeeding. Disclose all medical conditions and
                  medications during your intake.
                </p>
                <p>
                  <strong className="text-foreground">
                    Possible side effects include
                  </strong>{" "}
                  nausea, vomiting, diarrhea, constipation, abdominal pain,
                  reduced appetite, fatigue, and injection-site reactions.
                  Serious risks include pancreatitis, gallbladder problems,
                  kidney injury, severe hypoglycemia (especially with other
                  glucose-lowering medications), vision changes in patients
                  with diabetic retinopathy, and a boxed-warning risk of
                  thyroid C-cell tumors observed in animal studies of this
                  medication class. This is not a complete list.
                </p>
                <p>
                  <strong className="text-foreground">When to seek help:</strong>{" "}
                  Stop using the medication and seek immediate medical care if
                  you experience severe or persistent abdominal pain, signs of
                  an allergic reaction (rash, swelling, difficulty breathing),
                  a lump or swelling in your neck, hoarseness, or trouble
                  swallowing.{" "}
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
                  The content on this site is for general information and does
                  not replace consultation with a qualified healthcare
                  professional. Individual results vary; nothing on this site
                  should be read as a guarantee of any specific outcome.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
