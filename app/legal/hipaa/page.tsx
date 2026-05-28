import type { Metadata } from "next";
import { LegalPage, Section, Sub } from "../_components/LegalPage";
import { TECH_COMPANY, MEDICAL_GROUP } from "../_lib/entities";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices — goodmeds",
  description:
    "How protected health information about you may be used and disclosed and how you can get access to this information.",
};

export default function HipaaPage() {
  return (
    <LegalPage
      title="Notice of Privacy Practices"
      intro={`This Notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.`}
    >
      <div className="rounded-lg border border-accent/30 bg-accent/[0.04] p-5 text-sm leading-relaxed text-foreground">
        <p className="font-medium uppercase tracking-[0.14em]">
          THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED
          AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE
          REVIEW IT CAREFULLY.
        </p>
      </div>

      <Section n="1" title="Who this Notice applies to">
        <p>
          This Notice is issued by <strong>{MEDICAL_GROUP.legalName}</strong>{" "}
          (the "Medical Group"), the professional entity that provides clinical
          services to patients of {TECH_COMPANY.brand}. The Medical Group is a
          HIPAA-Covered Entity. {TECH_COMPANY.legalName} provides technology
          and administrative services to the Medical Group as a HIPAA Business
          Associate under a written agreement and follows this Notice when
          handling your protected health information ("PHI") on the Medical
          Group's behalf.
        </p>
      </Section>

      <Section n="2" title="Our pledge regarding your PHI">
        <p>
          We are required by law to (a) maintain the privacy and security of
          your PHI, (b) provide you with this Notice of our legal duties and
          privacy practices with respect to your PHI, (c) notify you following
          a breach of unsecured PHI, and (d) follow the terms of the Notice
          currently in effect.
        </p>
      </Section>

      <Section n="3" title="How we may use and disclose your PHI">
        <Sub title="For treatment">
          <p>
            We use and disclose your PHI to provide, coordinate, and manage
            your health care — for example, to evaluate your intake, write a
            prescription, transmit your prescription to a compounding pharmacy,
            and follow up on your treatment.
          </p>
        </Sub>
        <Sub title="For payment">
          <p>
            We use and disclose PHI to obtain payment for services and
            medication — for example, to process your subscription payment or
            to verify your identity for fraud prevention.
          </p>
        </Sub>
        <Sub title="For health-care operations">
          <p>
            We use and disclose PHI for activities that support our practice,
            including quality assessment, provider credentialing, training,
            compliance, audits, and customer support.
          </p>
        </Sub>
        <Sub title="Other permitted or required disclosures">
          <p>
            We may use or disclose PHI as required or permitted by law,
            including for public-health activities, reporting suspected abuse
            or neglect, health-oversight activities, judicial and
            administrative proceedings, law-enforcement purposes, organ
            donation, research with appropriate authorization or waiver,
            workers' compensation, military and veteran activities, national
            security, correctional institutions, and to avert a serious threat
            to health or safety.
          </p>
        </Sub>
        <Sub title="With your written authorization">
          <p>
            Other uses and disclosures of PHI — including most uses and
            disclosures of psychotherapy notes (if any), uses and disclosures
            for marketing, and sales of PHI — will be made only with your
            written authorization. You may revoke any authorization at any
            time in writing, except to the extent we have already acted in
            reliance on it.
          </p>
        </Sub>
      </Section>

      <Section n="4" title="Your rights">
        <Sub title="Right to access">
          <p>
            You have the right to inspect and obtain a copy of your PHI in our
            records, in the form and format you request if readily producible,
            including an electronic copy. We may charge a reasonable,
            cost-based fee.
          </p>
        </Sub>
        <Sub title="Right to amend">
          <p>
            You have the right to request that we amend PHI that you believe is
            incorrect or incomplete. We may deny your request in certain
            circumstances and will provide a written explanation.
          </p>
        </Sub>
        <Sub title="Right to an accounting of disclosures">
          <p>
            You have the right to receive a list of certain disclosures we have
            made of your PHI in the six years before your request (excluding
            disclosures for treatment, payment, health-care operations, and
            certain other categories).
          </p>
        </Sub>
        <Sub title="Right to request restrictions">
          <p>
            You have the right to request restrictions on certain uses and
            disclosures of your PHI. We are not required to agree, except that
            we must agree to restrict disclosures to a health plan for items
            you paid for out of pocket in full.
          </p>
        </Sub>
        <Sub title="Right to confidential communications">
          <p>
            You have the right to request that we communicate with you about
            medical matters in a specific way or at a specific location (for
            example, by mail at a particular address). We will accommodate
            reasonable requests.
          </p>
        </Sub>
        <Sub title="Right to a paper copy of this Notice">
          <p>
            You have the right to a paper copy of this Notice at any time on
            request, even if you have agreed to receive it electronically.
          </p>
        </Sub>
        <Sub title="Right to be notified of a breach">
          <p>
            You have the right to be notified following a breach of unsecured
            PHI as required by federal regulation.
          </p>
        </Sub>
        <Sub title="How to exercise your rights">
          <p>
            To exercise any of these rights, email{" "}
            <a href={`mailto:${TECH_COMPANY.privacyEmail}`}>
              {TECH_COMPANY.privacyEmail}
            </a>{" "}
            or write to {MEDICAL_GROUP.legalName}, c/o {TECH_COMPANY.legalName},
            Attn: Privacy Officer, {TECH_COMPANY.mailingAddress.line1},{" "}
            {TECH_COMPANY.mailingAddress.cityStateZip}. We may require you to
            submit a written request and verify your identity.
          </p>
        </Sub>
      </Section>

      <Section n="5" title="Changes to this Notice">
        <p>
          We reserve the right to change this Notice and to make the changes
          effective for all PHI we maintain. The current Notice will always be
          posted on this page with its effective date.
        </p>
      </Section>

      <Section n="6" title="Complaints">
        <p>
          If you believe your privacy rights have been violated, you may file a
          complaint with us by emailing{" "}
          <a href={`mailto:${TECH_COMPANY.privacyEmail}`}>
            {TECH_COMPANY.privacyEmail}
          </a>{" "}
          or by writing to the address above. You also have the right to file
          a complaint with the Secretary of the U.S. Department of Health and
          Human Services at:
        </p>
        <p className="rounded-md border border-border bg-card px-4 py-3 text-sm not-italic text-foreground">
          Office for Civil Rights, U.S. Department of Health and Human
          Services, 200 Independence Avenue SW, Washington, DC 20201, or call
          1-877-696-6775, or visit{" "}
          <a
            href="https://www.hhs.gov/hipaa/filing-a-complaint/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            hhs.gov/hipaa/filing-a-complaint
          </a>
          .
        </p>
        <p>
          <strong>
            We will not retaliate against you for filing a complaint.
          </strong>
        </p>
      </Section>

      <Section n="7" title="Contact">
        <p>
          Privacy Officer
          <br />
          {MEDICAL_GROUP.legalName}, c/o {TECH_COMPANY.legalName}
          <br />
          {TECH_COMPANY.mailingAddress.line1}
          <br />
          {TECH_COMPANY.mailingAddress.cityStateZip}
          <br />
          <a href={`mailto:${TECH_COMPANY.privacyEmail}`}>
            {TECH_COMPANY.privacyEmail}
          </a>
        </p>
      </Section>
    </LegalPage>
  );
}
