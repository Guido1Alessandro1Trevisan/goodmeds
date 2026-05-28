import type { Metadata } from "next";
import { LegalPage, Section, Sub } from "../_components/LegalPage";
import { TECH_COMPANY, MEDICAL_GROUP } from "../_lib/entities";

export const metadata: Metadata = {
  title: "Privacy Policy — goodmeds",
  description:
    "How goodmeds collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This Privacy Policy describes how ${TECH_COMPANY.legalName} ("${TECH_COMPANY.shortName}," "we," "us," or "our") collects, uses, and shares information when you use the ${TECH_COMPANY.brand} website and platform.`}
    >
      <Section n="1" title="HIPAA and this Policy">
        <p>
          Protected health information ("PHI") that you provide to receive
          clinical care is held by{" "}
          <strong>{MEDICAL_GROUP.legalName}</strong> (the "Medical Group"),
          which is a HIPAA "Covered Entity." {TECH_COMPANY.shortName} is the
          Medical Group's "Business Associate" and processes PHI on its behalf
          under a written Business Associate Agreement. PHI is governed by the{" "}
          <a href="/legal/hipaa">Notice of Privacy Practices</a> of the Medical
          Group. This Privacy Policy covers non-PHI personal information we
          collect when you visit our website, create an account, or otherwise
          interact with the Service outside the context of clinical care.
        </p>
      </Section>

      <Section n="2" title="Information we collect">
        <Sub title="Information you provide">
          <p>
            Account details (name, email, date of birth, address); intake
            responses, medical history, current medications, allergies, and
            health metrics you submit; messages to your provider and our
            support team; payment information (processed by our payment
            processor — we do not store full card numbers).
          </p>
        </Sub>
        <Sub title="Information we collect automatically">
          <p>
            Device and browser information (user agent, IP address, screen
            size); usage data (pages visited, links clicked, timestamps);
            cookies and similar technologies as described in our Cookies
            section.
          </p>
        </Sub>
        <Sub title="Information from third parties">
          <p>
            Payment confirmation from our payment processor; shipping status
            from carriers; identity-verification signals from anti-fraud
            providers.
          </p>
        </Sub>
      </Section>

      <Section n="3" title="How we use information">
        <p>
          We use information to (a) provide and improve the Service, (b)
          facilitate the asynchronous telehealth visit between you and the
          Medical Group, (c) process payments and shipments, (d) communicate
          with you about your account, your care, and important service or
          legal updates, (e) detect and prevent fraud, (f) comply with legal
          and regulatory obligations, and (g) — only with your separate consent
          — send you promotional emails (you can unsubscribe at any time).
        </p>
      </Section>

      <Section n="4" title="How we share information">
        <Sub title="The Medical Group and its providers">
          <p>
            Your intake responses, medical history, messages, and other
            clinically relevant information are shared with the Medical Group
            and the licensed provider who reviews your file, so they can
            evaluate and treat you.
          </p>
        </Sub>
        <Sub title="Compounding pharmacy">
          <p>
            If you are prescribed medication, the prescription and shipping
            details are transmitted to the US-licensed compounding pharmacy
            that fills your prescription.
          </p>
        </Sub>
        <Sub title="Service providers">
          <p>
            We share information with vendors that help us operate the Service
            (hosting, analytics, email delivery, payment processing, customer
            support tooling, shipping). Vendors that handle PHI are bound by
            HIPAA-compliant Business Associate Agreements.
          </p>
        </Sub>
        <Sub title="Legal, safety, and corporate transactions">
          <p>
            We may share information when required by law, in response to valid
            legal process, to protect rights and safety, or in connection with
            a merger, acquisition, financing, or sale of assets (with notice to
            you where required).
          </p>
        </Sub>
        <Sub title="We do not sell your personal information">
          <p>
            We do not sell personal information, and we do not share PHI with
            third parties for their own marketing purposes.
          </p>
        </Sub>
      </Section>

      <Section n="5" title="Cookies and tracking">
        <p>
          We use cookies and similar technologies to keep you signed in,
          remember preferences, measure how the Service performs, and — only
          with consent where required — for marketing analytics. You can
          control cookies through your browser settings; turning off some
          cookies may affect functionality.
        </p>
        <p>
          We honor Global Privacy Control ("GPC") signals as a valid opt-out of
          sale/share of personal information for residents of states that
          recognize it.
        </p>
      </Section>

      <Section n="6" title="Data retention">
        <p>
          We retain account and usage information for as long as your account
          is active and for a reasonable period afterward to comply with legal
          obligations and resolve disputes. PHI held by the Medical Group is
          retained according to applicable state medical-record retention laws
          (typically 6–10 years from last service, longer for minors).
        </p>
      </Section>

      <Section n="7" title="Your choices and rights">
        <Sub title="Account controls">
          <p>
            You can review and update your account information at any time from
            your dashboard. You can unsubscribe from marketing emails using the
            link in any marketing message.
          </p>
        </Sub>
        <Sub title="State privacy rights">
          <p>
            Residents of California, Colorado, Connecticut, Delaware, Florida,
            Indiana, Iowa, Montana, Nebraska, New Hampshire, New Jersey,
            Oregon, Tennessee, Texas, Utah, and Virginia (and other states
            that grant comparable rights) may have the right to (a) access the
            personal information we hold about them, (b) correct inaccuracies,
            (c) request deletion, (d) opt out of sale/share/targeted
            advertising (we do not engage in any of these for PHI), and (e)
            appeal a denied request. To exercise a right, email{" "}
            <a href={`mailto:${TECH_COMPANY.privacyEmail}`}>
              {TECH_COMPANY.privacyEmail}
            </a>
            . We will verify your identity before fulfilling a request and
            respond within the timeframes required by applicable law.
          </p>
        </Sub>
        <Sub title="PHI requests">
          <p>
            For requests related to your medical record (right to access,
            amend, request restrictions, accounting of disclosures), see the{" "}
            <a href="/legal/hipaa">Notice of Privacy Practices</a>.
          </p>
        </Sub>
      </Section>

      <Section n="8" title="Security">
        <p>
          We use administrative, technical, and physical safeguards designed to
          protect your information, including encryption in transit and at
          rest, access controls, audit logging, vendor risk review, and
          employee training. No system is perfectly secure; we cannot guarantee
          that information will never be accessed, used, or disclosed in a
          manner inconsistent with this Policy.
        </p>
      </Section>

      <Section n="9" title="Children">
        <p>
          The Service is intended for adults 18 and older. We do not knowingly
          collect personal information from children under 13. If we learn we
          have, we will delete it.
        </p>
      </Section>

      <Section n="10" title="International users">
        <p>
          The Service is offered only in the United States, and information we
          collect is stored and processed in the United States. If you access
          the Service from outside the US, you do so at your own initiative and
          are responsible for compliance with local laws.
        </p>
      </Section>

      <Section n="11" title="Changes to this Policy">
        <p>
          We may update this Policy from time to time. We will post the updated
          version with a revised effective date and, for material changes,
          notify you by email or in-app banner.
        </p>
      </Section>

      <Section n="12" title="Contact">
        <p>
          Questions about this Policy or our privacy practices? Email{" "}
          <a href={`mailto:${TECH_COMPANY.privacyEmail}`}>
            {TECH_COMPANY.privacyEmail}
          </a>{" "}
          or write to {TECH_COMPANY.legalName}, Attn: Privacy,{" "}
          {TECH_COMPANY.mailingAddress.line1},{" "}
          {TECH_COMPANY.mailingAddress.cityStateZip}.
        </p>
      </Section>
    </LegalPage>
  );
}
