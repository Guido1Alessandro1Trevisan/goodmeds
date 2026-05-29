/**
 * Product categories for the GoodMeds landing page. Each category gets its
 * own editorial section + a card in the bento grid. All are "coming soon"
 * for now — flip `status` to "live" when a category goes live.
 *
 * Color system per category:
 *   tint    — bold medium-saturated card/section background (Ro-style bento)
 *   accent  — darker shade of the same hue, used for eyebrow + CTA button
 *   onTint  — text color that sits well on the tint
 */

export type CategoryStatus = "coming-soon" | "live";

export interface Category {
  slug: string;
  label: string;
  /** Short label for compact hero tiles (e.g. "Regrow hair"). */
  shortLabel: string;
  /** The word inside `shortLabel` that gets the accent color (Hims pattern). */
  shortAccentWord: string;
  /** Tile copy for the big featured tile (e.g. "Start with weight loss"). */
  featuredTitle: string;
  /** Lower-case verb action used in the small tile chevron (e.g. "Join waitlist"). */
  ctaLabel: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  tint: string;
  accent: string;
  onTint: string;
  /** Gradient applied to big featured tiles + small-tile hover state. */
  heroGradient: string;
  /** Primary text color for small tile (resting state). */
  heroTextPrimary: string;
  /** Accent color on the small tile's accent word (resting state). */
  heroTextAccent: string;
  status: CategoryStatus;
}

export const categories: Category[] = [
  {
    slug: "weight-loss",
    label: "Weight Loss",
    shortLabel: "Start your weight loss",
    shortAccentWord: "weight loss",
    featuredTitle: "Start your weight loss",
    ctaLabel: "Join the waitlist",
    eyebrow: "GLP-1 Care",
    headline: "Weight loss, supported every step.",
    subhead:
      "Provider-prescribed compounded GLP-1 medications — semaglutide and tirzepatide — paired with ongoing clinical support, not a one-time prescription.",
    bullets: [
      "Compounded semaglutide and tirzepatide, from US-licensed pharmacies",
      "Asynchronous telehealth visits with licensed providers",
      "Monthly shipping and dose adjustments included",
    ],
    image: "/img/category-weight-loss.png",
    imageAlt: "A sage-green and cream injection pen on a cream surface",
    tint: "#C4D6CA",
    accent: "#1F3D2B",
    onTint: "#16291D",
    heroGradient: "linear-gradient(to right, #1F3D2B, #3A5A44)",
    heroTextPrimary: "#16291D",
    heroTextAccent: "#1F3D2B",
    status: "coming-soon",
  },
  {
    slug: "sexual-health",
    label: "Sexual Health",
    shortLabel: "Sex on demand",
    shortAccentWord: "demand",
    featuredTitle: "Sex on demand, simplified",
    ctaLabel: "Get notified",
    eyebrow: "Men's & Women's Sexual Health",
    headline: "Confidence, refilled.",
    subhead:
      "Generic and brand-name treatments for ED, premature ejaculation, and libido — prescribed by US-licensed clinicians, shipped in plain packaging.",
    bullets: [
      "Sildenafil and tadalafil (generic Viagra & Cialis)",
      "Discreet packaging and delivery",
      "Provider-reviewed eligibility, no in-person visit",
    ],
    image: "/img/category-sexual-health.png",
    imageAlt: "Two coral pharmaceutical capsules on a cream surface",
    tint: "#F2C9A8",
    accent: "#8A4421",
    onTint: "#3D1E0F",
    heroGradient: "linear-gradient(167deg, #A05230 0%, #B86A40 38%, #B86A40 84%, #A05230 100%)",
    heroTextPrimary: "#3D1E0F",
    heroTextAccent: "#8A4421",
    status: "coming-soon",
  },
  {
    slug: "hair",
    label: "Hair Restoration",
    shortLabel: "Regrow hair",
    shortAccentWord: "hair",
    featuredTitle: "Hold the line",
    ctaLabel: "Notify me",
    eyebrow: "Hair Loss & Regrowth",
    headline: "Hold the line. Then some.",
    subhead:
      "Clinically-proven topical and oral treatments — finasteride, minoxidil, and custom-compounded blends formulated for your specific pattern.",
    bullets: [
      "Oral and topical finasteride",
      "Minoxidil solutions and foams",
      "Custom-compounded combination formulas",
    ],
    image: "/img/category-hair.png",
    imageAlt: "An amber glass dropper bottle on a cream surface",
    tint: "#D9C2A3",
    accent: "#5C3920",
    onTint: "#3A2410",
    heroGradient: "linear-gradient(167deg, #6D4525 0%, #8A5A35 38%, #8A5A35 84%, #6D4525 100%)",
    heroTextPrimary: "#3A2410",
    heroTextAccent: "#8A5A35",
    status: "coming-soon",
  },
  {
    slug: "skin",
    label: "Skincare",
    shortLabel: "Refine skin",
    shortAccentWord: "skin",
    featuredTitle: "Skin that earns it",
    ctaLabel: "Notify me",
    eyebrow: "Prescription Skincare",
    headline: "Skincare that earns its place.",
    subhead:
      "Prescription tretinoin and custom-compounded actives formulated by your provider for your specific skin concerns — not a one-size product line.",
    bullets: [
      "Prescription tretinoin",
      "Compounded multi-active blends",
      "Provider check-ins through your treatment",
    ],
    image: "/img/category-skin.png",
    imageAlt: "A blush-pink ceramic jar with a cream lid on a cream surface",
    tint: "#F2C9CC",
    accent: "#8C4453",
    onTint: "#4A1F2A",
    heroGradient: "linear-gradient(167deg, #A0566A 0%, #B5677A 38%, #B5677A 84%, #A0566A 100%)",
    heroTextPrimary: "#4A1F2A",
    heroTextAccent: "#8C4453",
    status: "coming-soon",
  },
  {
    slug: "daily-health",
    label: "Daily Health",
    shortLabel: "Daily basics",
    shortAccentWord: "basics",
    featuredTitle: "Daily basics, sorted",
    ctaLabel: "Notify me",
    eyebrow: "Supplements & Multivitamins",
    headline: "Daily basics, doctor-formulated.",
    subhead:
      "Multivitamins, omega-3s, and targeted supplements designed by clinicians — no kitchen-sink formulations, no fillers, no claims that don't hold up.",
    bullets: [
      "Doctor-formulated daily blends",
      "Third-party tested ingredients",
      "Personalized to your needs and labs",
    ],
    image: "/img/category-daily-health.png",
    imageAlt: "A pale blue glass supplement bottle on a cream surface",
    tint: "#B8CADD",
    accent: "#2E4965",
    onTint: "#16273A",
    heroGradient: "linear-gradient(167deg, #3F5A73 0%, #5A78A0 38%, #5A78A0 84%, #3F5A73 100%)",
    heroTextPrimary: "#16273A",
    heroTextAccent: "#2E4965",
    status: "coming-soon",
  },
  {
    slug: "mental-health",
    label: "Mental Health",
    shortLabel: "Steady mind",
    shortAccentWord: "mind",
    featuredTitle: "Care for the harder days",
    ctaLabel: "Notify me",
    eyebrow: "Anxiety & Depression",
    headline: "Care for the harder days, too.",
    subhead:
      "Provider-prescribed SSRIs and SNRIs with ongoing therapeutic check-ins — not just a refill in the mail.",
    bullets: [
      "SSRIs and SNRIs prescribed online",
      "Provider-led dose management",
      "Crisis resources always one click away",
    ],
    image: "/img/category-mental-health.png",
    imageAlt: "Two lavender pharmaceutical capsules on a cream surface",
    tint: "#CDB8DC",
    accent: "#4A3370",
    onTint: "#291844",
    heroGradient: "linear-gradient(167deg, #5F4E80 0%, #7060A0 38%, #7060A0 84%, #5F4E80 100%)",
    heroTextPrimary: "#291844",
    heroTextAccent: "#4A3370",
    status: "coming-soon",
  },
];
