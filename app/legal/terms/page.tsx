import type { Metadata } from "next";
import { LegalPage, Section, Sub } from "../_components/LegalPage";
import { TECH_COMPANY, MEDICAL_GROUP } from "../_lib/entities";

export const metadata: Metadata = {
  title: "Terms of Service — goodmeds",
  description:
    "Terms of service governing your use of the goodmeds telehealth platform.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These Terms govern your use of the ${TECH_COMPANY.brand} website, mobile experience, and platform (the "Service"). Please read them carefully — by creating an account or starting an intake, you agree to them.`}
    >
      <Section n="1" title="Who we are">
        <p>
          The Service is operated by <strong>{TECH_COMPANY.legalName}</strong>{" "}
          ("{TECH_COMPANY.shortName}," "we," "us," or "our"), a{" "}
          {TECH_COMPANY.formationState} corporation with mailing address{" "}
          {TECH_COMPANY.mailingAddress.line1},{" "}
          {TECH_COMPANY.mailingAddress.cityStateZip}.
        </p>
        <p>
          {TECH_COMPANY.shortName} is a <strong>technology platform</strong>, not
          a medical practice. We do not provide medical care, write
          prescriptions, or dispense medication. Clinical services are provided
          by independent, US-licensed healthcare providers affiliated with{" "}
          <strong>{MEDICAL_GROUP.legalName}</strong> (the "Medical Group"), a
          professional entity that is separate from {TECH_COMPANY.shortName}.
          Prescriptions, when issued, are filled by independent US-licensed
          compounding pharmacies.
        </p>
      </Section>

      <Section n="2" title="Eligibility">
        <p>
          To use the Service, you must (a) be at least 18 years old, (b) be a
          resident of the United States and located in a state where the Medical
          Group operates at the time of your visit, (c) be legally able to enter
          into a binding contract, and (d) provide accurate, current, and
          complete information during intake and on an ongoing basis.
        </p>
      </Section>

      <Section n="3" title="The Service">
        <Sub title="Asynchronous telehealth intake">
          <p>
            The Service lets you complete a clinical questionnaire that is
            reviewed asynchronously by a Medical Group provider licensed in your
            state. The provider may follow up with you for additional
            information, decline to prescribe, or — only if clinically
            appropriate — issue a prescription that is filled by an affiliated
            compounding pharmacy.
          </p>
        </Sub>
        <Sub title="Not a substitute for in-person care">
          <p>
            The Service is not a replacement for emergency care, primary care,
            mental-health crisis services, or in-person medical evaluation when
            those are clinically indicated. The Service is not appropriate for
            urgent or emergency medical conditions.{" "}
            <strong>
              If you are experiencing a medical emergency, call 911 or go to the
              nearest emergency room immediately.
            </strong>
          </p>
        </Sub>
        <Sub title="Compounded medications">
          <p>
            Some medications prescribed through the Medical Group are{" "}
            <strong>compounded</strong>. Compounded medications are not
            FDA-approved, have not been reviewed by the FDA for safety,
            effectiveness, or quality, and are not the same as brand-name
            medications such as Ozempic®, Wegovy®, Mounjaro®, or Zepbound®. See
            our <a href="/#safety">Important Safety Information</a>.
          </p>
        </Sub>
      </Section>

      <Section n="4" title="Patient–provider relationship">
        <p>
          Any patient–provider relationship is established directly between you
          and the Medical Group provider who reviews your file — not with{" "}
          {TECH_COMPANY.shortName}. Providers exercise independent clinical
          judgment and may decline to prescribe at their discretion. Your
          medical record is maintained by the Medical Group.
        </p>
      </Section>

      <Section n="5" title="Accounts and accuracy">
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for everything that happens under your
          account. You must promptly update your account, intake responses, and
          medical history if anything changes (including new diagnoses,
          medications, pregnancy, or adverse reactions).
        </p>
      </Section>

      <Section n="6" title="Fees, billing, and cancellation">
        <Sub title="Charges">
          <p>
            We charge a monthly subscription fee that covers the asynchronous
            visit, the medication if prescribed, shipping, and ongoing
            messaging with your provider. You will only be charged if you are
            prescribed medication. Listed prices reflect the lowest starting
            dose; higher prescribed doses may be priced differently and your
            provider will disclose pricing before any charge.
          </p>
        </Sub>
        <Sub title="Cash pay only">
          <p>
            The Service is cash-pay only. We do not bill health insurance or
            government payors, and we do not provide claim forms or
            superbills.
          </p>
        </Sub>
        <Sub title="Cancellation">
          <p>
            You may pause or cancel your subscription at any time from your
            account dashboard. Cancellation is effective at the end of your
            then-current billing cycle. Shipments already prepared by the
            pharmacy may not be refundable; we will confirm what is and isn't
            refundable before processing a cancellation.
          </p>
        </Sub>
      </Section>

      <Section n="7" title="Acceptable use">
        <p>
          You agree not to (a) provide false information during intake, (b)
          obtain prescriptions for anyone other than yourself, (c) resell,
          divert, or share any medication you receive, (d) misuse the Service or
          attempt to access it by automated means without our permission, or (e)
          use the Service in any way that violates applicable law.
        </p>
      </Section>

      <Section n="8" title="Intellectual property">
        <p>
          The Service, including all software, design, text, graphics, and the
          {" "}{TECH_COMPANY.brand} name and logo, is owned by{" "}
          {TECH_COMPANY.legalName} and protected by US and international
          intellectual-property laws. We grant you a personal, non-exclusive,
          non-transferable, revocable license to use the Service for its
          intended purpose.
        </p>
      </Section>

      <Section n="9" title="User content">
        <p>
          You retain ownership of information you submit (intake answers,
          messages, photos). By submitting information, you grant the Medical
          Group permission to use it to provide care and grant{" "}
          {TECH_COMPANY.shortName} a limited license to host and transmit it as
          necessary to operate the Service, subject to our{" "}
          <a href="/legal/privacy">Privacy Policy</a> and{" "}
          <a href="/legal/hipaa">Notice of Privacy Practices</a>.
        </p>
      </Section>

      <Section n="10" title="Disclaimers">
        <p>
          The Service is provided "as is" and "as available," without warranties
          of any kind, express or implied, including warranties of
          merchantability, fitness for a particular purpose, or
          non-infringement.
        </p>
        <p>
          {TECH_COMPANY.shortName} does not warrant any specific outcome,
          weight-loss result, or therapeutic benefit from any treatment ordered
          through the Service. Clinical-trial outcomes from FDA-approved
          brand-name drugs do not predict results for any individual using a
          compounded medication.
        </p>
      </Section>

      <Section n="11" title="Limitation of liability">
        <p>
          To the maximum extent permitted by applicable law,{" "}
          {TECH_COMPANY.shortName} and its officers, directors, employees, and
          agents will not be liable for any indirect, incidental, special,
          consequential, exemplary, or punitive damages, or any loss of
          profits, data, goodwill, or other intangible losses, arising out of
          or related to your use of the Service. Our total liability for any
          claim related to the Service will not exceed the amount you paid us
          in the twelve months preceding the claim, or US $100, whichever is
          greater.
        </p>
        <p>
          Nothing in these Terms limits liability that cannot be limited under
          applicable law.
        </p>
      </Section>

      <Section n="12" title="Indemnification">
        <p>
          You agree to indemnify and hold harmless {TECH_COMPANY.shortName},
          the Medical Group, and our respective affiliates from any claim
          arising out of (a) your breach of these Terms, (b) your violation of
          law, (c) your misuse of the Service, or (d) the inaccuracy of any
          information you provide during intake.
        </p>
      </Section>

      <Section n="13" title="Dispute resolution; arbitration">
        <p>
          <strong>Please read carefully.</strong> Any dispute arising out of or
          relating to these Terms or the Service will be resolved by binding
          individual arbitration administered by the American Arbitration
          Association under its Consumer Arbitration Rules, in Wilmington,
          Delaware. You and {TECH_COMPANY.shortName} waive the right to a jury
          trial and to participate in any class or representative action. You
          may opt out of this arbitration agreement by emailing{" "}
          <a href={`mailto:${TECH_COMPANY.legalEmail}`}>
            {TECH_COMPANY.legalEmail}
          </a>{" "}
          within 30 days of first accepting these Terms.
        </p>
        <p>
          Notwithstanding the above, either party may bring an individual claim
          in small-claims court. Claims about emergency medical care are not
          subject to this arbitration provision.
        </p>
      </Section>

      <Section n="14" title="Governing law">
        <p>
          These Terms are governed by the laws of the State of Delaware,
          without regard to its conflict-of-laws principles.
        </p>
      </Section>

      <Section n="15" title="Changes">
        <p>
          We may update these Terms from time to time. Material changes will be
          posted on this page and, where appropriate, notified by email. Your
          continued use of the Service after a change takes effect constitutes
          acceptance.
        </p>
      </Section>

      <Section n="16" title="Contact">
        <p>
          Questions about these Terms? Email{" "}
          <a href={`mailto:${TECH_COMPANY.legalEmail}`}>
            {TECH_COMPANY.legalEmail}
          </a>{" "}
          or write to {TECH_COMPANY.legalName},{" "}
          {TECH_COMPANY.mailingAddress.line1},{" "}
          {TECH_COMPANY.mailingAddress.cityStateZip}.
        </p>
      </Section>
    </LegalPage>
  );
}
