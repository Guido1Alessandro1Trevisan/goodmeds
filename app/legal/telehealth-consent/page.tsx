import type { Metadata } from "next";
import { LegalPage, Section, Sub } from "../_components/LegalPage";
import { TECH_COMPANY, MEDICAL_GROUP } from "../_lib/entities";

export const metadata: Metadata = {
  title: "Telehealth Informed Consent — goodmeds",
  description:
    "Informed consent for receiving asynchronous telehealth services through goodmeds.",
};

export default function TelehealthConsentPage() {
  return (
    <LegalPage
      title="Telehealth Informed Consent"
      intro={`Before you receive care through the ${TECH_COMPANY.brand} platform, please read this consent carefully. By submitting your intake, you confirm that you understand and agree to the items below.`}
    >
      <Section n="1" title="What telehealth is">
        <p>
          Telehealth is the use of secure electronic communications — including
          web-based questionnaires, secure messaging, photos, audio, and video
          — to provide health-care services at a distance. Your care through{" "}
          {TECH_COMPANY.brand} is provided primarily{" "}
          <strong>asynchronously</strong>, meaning your provider reviews your
          information on their own schedule rather than in a live appointment.
        </p>
      </Section>

      <Section n="2" title="Who provides your care">
        <p>
          Clinical services are provided by independent healthcare providers
          affiliated with <strong>{MEDICAL_GROUP.legalName}</strong>, each of
          whom is licensed in the US state where you live at the time of your
          visit. {TECH_COMPANY.legalName} provides the technology platform but
          does not provide medical care.
        </p>
      </Section>

      <Section n="3" title="Expected benefits">
        <p>
          Telehealth can provide convenient access to care without travel or
          waiting rooms, allow you to receive evaluation and treatment from a
          licensed provider in a private setting, and support ongoing
          medication management with timely messaging between visits.
        </p>
      </Section>

      <Section n="4" title="Possible risks and limitations">
        <p>By using telehealth, you understand and accept the following:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>No physical exam.</strong> Your provider will not perform a
            hands-on physical examination. Conditions that require an in-person
            exam, lab work, imaging, or urgent intervention may not be
            appropriately diagnosed or treated through this Service.
          </li>
          <li>
            <strong>Information you provide is essential.</strong> Decisions
            about your care are based on the information you submit. Inaccurate
            or incomplete information may lead to inappropriate treatment or
            harm.
          </li>
          <li>
            <strong>Technical issues.</strong> Connectivity failures,
            transmission errors, equipment failures, or unauthorized access
            could disrupt or affect your care. We use industry-standard
            safeguards but cannot guarantee against every technical failure.
          </li>
          <li>
            <strong>Asynchronous timing.</strong> Because your provider reviews
            asynchronously, there may be hours or longer between your message
            and a response. This Service is not appropriate for urgent or
            emergent medical needs.
          </li>
          <li>
            <strong>Medication risks.</strong> Any medication, including
            compounded GLP-1 receptor agonists, carries side-effect and
            interaction risks. Please read the{" "}
            <a href="/#safety">Important Safety Information</a> on the home
            page and discuss your full medical history and medications with
            your provider.
          </li>
        </ul>
      </Section>

      <Section n="5" title="Not for emergencies">
        <p>
          <strong>
            Telehealth through {TECH_COMPANY.brand} is not appropriate for
            medical emergencies.
          </strong>{" "}
          If you are experiencing a medical emergency — including severe
          abdominal pain, signs of an allergic reaction, chest pain,
          shortness of breath, suicidal thoughts, or any other life-threatening
          symptom — call <strong>911</strong> or go to the nearest emergency
          room immediately.
        </p>
      </Section>

      <Section n="6" title="Alternatives">
        <p>
          You have the right to receive care from an in-person provider
          instead of by telehealth. You may decline telehealth and seek care
          from your local primary-care provider, an urgent-care clinic, an
          in-person specialist, or an emergency department at any time.
        </p>
      </Section>

      <Section n="7" title="Voluntary participation; right to withdraw">
        <p>
          Your use of telehealth is voluntary. You may withdraw consent and
          stop using the Service at any time, without affecting your right to
          future care. Withdrawing consent does not affect any treatment
          already provided.
        </p>
      </Section>

      <Section n="8" title="Confidentiality and records">
        <p>
          Information shared during your telehealth visit is protected by
          federal and state privacy laws, including HIPAA where applicable.
          See the <a href="/legal/hipaa">Notice of Privacy Practices</a> for
          details about how your protected health information may be used and
          disclosed and your rights regarding it. A record of your visit will
          be maintained in your patient chart.
        </p>
        <p>
          There are limits to confidentiality. Information may be disclosed
          where required by law (for example, mandated reporting of suspected
          abuse, response to a valid subpoena, or to prevent imminent harm).
        </p>
      </Section>

      <Section n="9" title="Recording">
        <p>
          We do not record video or audio visits as a default. Some messages
          and intake responses are retained as part of your medical record.
        </p>
      </Section>

      <Section n="10" title="Financial responsibility">
        <p>
          You understand that {TECH_COMPANY.brand} is a cash-pay service. You
          are responsible for the listed monthly fee if you are prescribed
          medication. See the{" "}
          <a href="/legal/terms">Terms of Service</a> for fee and cancellation
          details.
        </p>
      </Section>

      <Section n="11" title="State-specific provisions">
        <p>
          Some states have specific requirements for telehealth consent. Where
          a state requires additional disclosures, those will be presented to
          you in your intake before you submit. If you have moved or are
          temporarily in a different state, please update your address before
          requesting care; your provider may not be licensed in your new
          location.
        </p>
      </Section>

      <Section n="12" title="Your consent">
        <p>
          By starting an intake or accepting this consent during the intake
          flow, you confirm that you have read and understood this Telehealth
          Informed Consent, that you have had the opportunity to ask
          questions, and that you voluntarily consent to receiving care
          through telehealth as described.
        </p>
      </Section>

      <Section n="13" title="Questions">
        <p>
          Email{" "}
          <a href={`mailto:${TECH_COMPANY.supportEmail}`}>
            {TECH_COMPANY.supportEmail}
          </a>{" "}
          with any questions about this consent before you begin.
        </p>
      </Section>
    </LegalPage>
  );
}
