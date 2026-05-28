import Link from "next/link";
import { TECH_COMPANY, MEDICAL_GROUP } from "../legal/_lib/entities";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-baseline gap-1">
              <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
                {TECH_COMPANY.brand}
              </span>
              <span
                aria-hidden
                className="size-1.5 translate-y-[-0.4em] rounded-full bg-accent"
              />
            </Link>
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
                ["Semaglutide", "/#pricing"],
                ["Tirzepatide", "/#pricing"],
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                ["How It Works", "/#how"],
                ["Safety", "/safety"],
                ["FAQ", "/faq"],
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
            providers. Compounded semaglutide and compounded tirzepatide are
            not FDA-approved, have not been evaluated by the FDA for safety,
            effectiveness, or quality, and are not the same as brand-name
            medications such as Ozempic®, Wegovy®, Mounjaro®, or Zepbound®
            (all registered trademarks of their respective owners —{" "}
            {TECH_COMPANY.brand} is not affiliated with, sponsored by, or
            endorsed by these manufacturers). See{" "}
            <Link href="/safety" className="text-foreground hover:text-accent">
              Important Safety Information
            </Link>{" "}
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
            <Link
              href={href}
              className="text-foreground hover:text-accent"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
