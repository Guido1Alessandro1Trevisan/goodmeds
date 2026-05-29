import Link from "next/link";
import { TECH_COMPANY, MEDICAL_GROUP } from "../legal/_lib/entities";

const colLearn: [string, string][] = [
  ["Weight Loss", "/#weight-loss"],
  ["Sexual Health", "/#sexual-health"],
  ["Hair Restoration", "/#hair"],
  ["Skincare", "/#skin"],
  ["Daily Health", "/#daily-health"],
  ["Mental Health", "/#mental-health"],
];

const colCompany: [string, string, string?][] = [
  ["About Us", "/#"],
  ["Safety", "/safety"],
  ["FAQ", "/faq"],
  ["Contact", `mailto:${TECH_COMPANY.supportEmail}`],
];

const colPopular: [string, string, string?][] = [
  ["Compounded Semaglutide", "/#weight-loss", "Compounded GLP-1"],
  ["Compounded Tirzepatide", "/#weight-loss", "Compounded GLP-1"],
  ["Sildenafil", "/#sexual-health", "Generic for Viagra®"],
  ["Tadalafil", "/#sexual-health", "Generic for Cialis®"],
  ["Finasteride", "/#hair"],
  ["Minoxidil", "/#hair"],
];

const colConnect: [string, string][] = [
  [`Email ${TECH_COMPANY.supportEmail}`, `mailto:${TECH_COMPANY.supportEmail}`],
  [TECH_COMPANY.supportPhone, `tel:${TECH_COMPANY.supportPhone.replace(/[^\d+]/g, "")}`],
  ["Press", `mailto:${TECH_COMPANY.supportEmail}`],
];

const colLegal: [string, string][] = [
  ["Terms of Service", "/legal/terms"],
  ["Privacy Policy", "/legal/privacy"],
  ["Notice of Privacy Practices", "/legal/hipaa"],
  ["Telehealth Consent", "/legal/telehealth-consent"],
];

export function SiteFooter() {
  return (
    <footer className="rounded-t-[1.5rem] bg-black px-6 pb-10 pt-16 text-white sm:px-12 sm:pt-20 lg:px-[63px]">
      <div className="mx-auto grid w-full max-w-[108rem] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        {/* LEFT — Connect / app card */}
        <div className="lg:col-span-4">
          <div className="flex w-full max-w-[26.875rem] flex-col items-start overflow-hidden rounded-3xl bg-white/[0.08] p-8 sm:p-10">
            <p className="text-sm font-normal text-white/85">
              The waitlist for {TECH_COMPANY.brand}
            </p>
            <h3 className="mt-2 font-serif text-[2rem] font-medium leading-none tracking-[-0.06em] text-white sm:text-[2.6875rem] sm:tracking-[-0.165625rem]">
              Total care.
            </h3>
            <h3 className="mt-1 font-serif text-[2rem] font-medium leading-none tracking-[-0.06em] text-white sm:text-[2.6875rem] sm:tracking-[-0.165625rem]">
              Totally <span className="italic text-[#FFC671]">different.</span>
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              We're building a modern multi-category telehealth platform — one
              place, one provider relationship, one transparent monthly bill.
            </p>
            <Link
              href="/#waitlist"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold text-[#453421] transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FFC671" }}
            >
              Join the waitlist →
            </Link>
          </div>
        </div>

        {/* RIGHT — link columns */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            <FooterCol title="Care Categories" items={colLearn.map((l) => [l[0], l[1]])} />
            <FooterCol title="Company" items={colCompany} />
            <FooterCol title="Treatments" items={colPopular} />
            <FooterCol title="Connect" items={colConnect.map((l) => [l[0], l[1]])} />
          </div>

          {/* Social row */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <SocialIcon
              label="Instagram"
              href="https://instagram.com"
              path="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 5.18A4.66 4.66 0 0 0 7.34 12 4.66 4.66 0 0 0 12 16.66 4.66 4.66 0 0 0 16.66 12 4.66 4.66 0 0 0 12 7.34zm0 7.69A3.03 3.03 0 1 1 12 8.97a3.03 3.03 0 0 1 0 6.06zm5.93-7.87a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0z"
            />
            <SocialIcon
              label="X (Twitter)"
              href="https://x.com"
              path="M18.244 2H21l-7.49 8.56L22.5 22h-6.91l-5.41-7.07L4.06 22H1.3l8.04-9.2L1.5 2h7.07l4.89 6.46L18.244 2zm-2.42 18h1.83L7.27 3.9H5.3l10.524 16.1z"
            />
            <SocialIcon
              label="LinkedIn"
              href="https://linkedin.com"
              path="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.92H5.67v8.42h2.67zM7 8.74a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.6V13.7c0-2.5-1.34-3.67-3.13-3.67-1.45 0-2.1.8-2.46 1.36V9.92h-2.67v8.42h2.67v-4.7c0-1.26.24-2.48 1.8-2.48 1.55 0 1.57 1.45 1.57 2.56v4.62h2.22z"
            />
            <SocialIcon
              label="TikTok"
              href="https://tiktok.com"
              path="M20.1 10.09c-.16.02-.33.03-.49.03a5.7 5.7 0 0 1-4.46-2.41v8.22a6.08 6.08 0 1 1-6.08-6.08c.13 0 .25.01.38.02v2.99c-.13-.01-.25-.04-.38-.04a3.2 3.2 0 1 0 3.23 3.1V2h2.86a4.55 4.55 0 0 0 4.95 4.06v3.03z"
            />
          </div>
        </div>
      </div>

      {/* Disclosures / address / legal */}
      <div className="mx-auto mt-16 w-full max-w-[108rem] border-t border-white/15 pt-10">
        <div className="grid grid-cols-1 gap-10 text-[12px] leading-relaxed text-white/55 lg:grid-cols-12">
          <address className="not-italic lg:col-span-4">
            <p className="text-sm font-medium text-white">
              {TECH_COMPANY.legalName}
            </p>
            <p className="mt-1">
              {TECH_COMPANY.mailingAddress.line1}
              <br />
              {TECH_COMPANY.mailingAddress.cityStateZip}
            </p>
            <p className="mt-3">
              <a
                href={`mailto:${TECH_COMPANY.supportEmail}`}
                className="hover:text-white"
              >
                {TECH_COMPANY.supportEmail}
              </a>
              {" · "}
              {TECH_COMPANY.supportPhone}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/40">
              LegitScript application pending
            </p>
          </address>

          <div className="lg:col-span-8">
            <p>
              {TECH_COMPANY.brand} is a telehealth platform owned and operated
              by {TECH_COMPANY.legalName}, a {TECH_COMPANY.formationState}{" "}
              corporation. Clinical services are provided by independent
              healthcare providers affiliated with{" "}
              {MEDICAL_GROUP.descriptiveName}, licensed in the state where the
              patient resides and not employed by {TECH_COMPANY.shortName}.
              Prescriptions are filled by US-licensed compounding pharmacies on
              the order of these providers. Compounded semaglutide and
              compounded tirzepatide are not FDA-approved, have not been
              evaluated by the FDA for safety, effectiveness, or quality, and
              are not the same as brand-name medications such as Ozempic®,
              Wegovy®, Mounjaro®, or Zepbound® (all registered trademarks of
              their respective owners — {TECH_COMPANY.brand} is not affiliated
              with, sponsored by, or endorsed by these manufacturers). See{" "}
              <Link href="/safety" className="text-white/80 hover:text-white">
                Important Safety Information
              </Link>{" "}
              and consult your provider before starting any treatment. Content
              on this site is for general information only and is not medical
              advice. Individual results vary. Call 911 in any emergency.
              Report adverse events to your provider and to the FDA via{" "}
              <a
                href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program"
                className="text-white/80 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                MedWatch
              </a>
              .
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px]">
              {colLegal.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white/70 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>

            <p className="mt-6 text-white/40">
              © {new Date().getFullYear()} {TECH_COMPANY.legalName}. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Big brand wordmark watermark */}
      <div className="mx-auto mt-14 w-full max-w-[108rem]">
        <p
          className="font-serif text-[clamp(3rem,_12vw,_10rem)] font-medium leading-none tracking-[-0.06em] text-white/[0.07]"
          aria-hidden
        >
          {TECH_COMPANY.brand}.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: [string, string, string?][];
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
        {title}
      </p>
      <ul className="mt-5 space-y-3 text-base">
        {items.map(([label, href, sublabel]) => (
          <li key={`${title}-${label}`}>
            <Link
              href={href}
              className="group inline-flex flex-col text-white/90 transition-colors hover:text-white"
            >
              <span className="border-b border-transparent group-hover:border-white/60">
                {label}
              </span>
              {sublabel && (
                <span className="text-xs text-white/45">{sublabel}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  label,
  href,
  path,
}: {
  label: string;
  href: string;
  path: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-black"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
      </svg>
    </a>
  );
}
