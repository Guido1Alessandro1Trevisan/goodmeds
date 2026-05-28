/**
 * Single source of truth for legal-entity facts referenced across legal pages
 * and the marketing footer. Edit values here, NOT inline in pages.
 *
 * TODO before launch:
 *   - Form the affiliated medical PC (see MEDICAL_GROUP placeholder below).
 *   - Confirm registered business mailing address with healthcare counsel.
 *   - Add real customer-service phone number.
 *   - Have all four legal pages reviewed by a healthcare-regulatory attorney.
 */

export const TECH_COMPANY = {
  legalName: "Opero Labs, Inc.",
  shortName: "Opero Labs",
  brand: "goodmeds",
  formationState: "Delaware",
  formationDate: "June 16, 2025",
  mailingAddress: {
    line1: "1616 E 56th Street, Unit 1508",
    cityStateZip: "Chicago, IL 60637",
    country: "United States",
  },
  supportEmail: "support@goodmeds.org",
  // TODO: set up privacy@ and legal@ as forwarding aliases to support@ in
  // your email host (Google Workspace / Cloudflare Email Routing — 5 min).
  privacyEmail: "privacy@goodmeds.org",
  legalEmail: "legal@goodmeds.org",
  supportPhone: "(312) 428-0466",
} as const;

/**
 * Affiliated medical group (Professional Corporation) — the licensed clinical
 * entity that actually provides care. We do NOT form this ourselves; it is
 * supplied by our clinical infrastructure partner (see CLINICAL_PARTNER
 * below). This is the standard white-label telehealth model used by most US
 * GLP-1 telehealth brands.
 *
 * TODO BEFORE LEGITSCRIPT SUBMISSION:
 *   Once the CareValidate (or equivalent) contract is signed, replace
 *   `legalName` and `descriptiveName` below with the actual PC name they
 *   provide. Do NOT submit to LegitScript with the placeholder text visible.
 */
export const MEDICAL_GROUP = {
  // PLACEHOLDER — replace with the real PC name from the clinical partner.
  legalName: "[Affiliated Medical Group — pending clinical partner agreement]",
  // Used in body copy where a long bracketed placeholder would read awkwardly
  // (e.g., the marketing footer). Replace this too once the PC name is known.
  descriptiveName: "an affiliated US medical group",
} as const;

export const PRODUCT_URL = "https://goodmeds.org";

/**
 * Last-updated date for legal documents. Update whenever you materially
 * change any of the four legal pages.
 */
export const LEGAL_LAST_UPDATED = "May 28, 2026";
