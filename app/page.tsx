import Image from "next/image";
import { SiteHeader } from "./_components/SiteHeader";
import { SiteFooter } from "./_components/SiteFooter";
import { Waitlist } from "./_components/Waitlist";
import { categories, type Category } from "./_lib/categories";
import { TECH_COMPANY, MEDICAL_GROUP } from "./legal/_lib/entities";

const principles = [
  {
    title: "US-licensed providers",
    body: `Every prescription is reviewed and signed by a clinician licensed in your state through ${MEDICAL_GROUP.descriptiveName} — not by an algorithm.`,
  },
  {
    title: "Transparent sourcing",
    body: "Compounded medications come from US-licensed pharmacies. We disclose the pharmacy partner in your account before any charge.",
  },
  {
    title: "Care beyond the first visit",
    body: "Your provider stays with you through treatment — dose adjustments, side-effect support, and check-ins via secure messaging.",
  },
  {
    title: "No insurance, no surprises",
    body: "Cash-pay only. Your monthly cost is disclosed before any charge. Pause or cancel from your dashboard any time.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col flex-1 bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <WeightLossFeature />
        <Hero />
        <CategoryCatalog />
        <WhyUs />
        <Waitlist />
      </main>
      <SiteFooter />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            WeightLossFeature                               */
/* -------------------------------------------------------------------------- */

const glp1Lineup = [
  {
    name: "Compounded Semaglutide",
    image: "/img/category-weight-loss.png",
    generic: "Semaglutide",
    badges: ["Coming Soon"],
  },
  {
    name: "Semaglutide High Dose",
    image: "/img/category-weight-loss.png",
    generic: "Semaglutide",
    badges: ["Coming Soon", "High dose"],
  },
  {
    name: "Compounded Tirzepatide",
    image: "/img/category-weight-loss.png",
    generic: "Tirzepatide",
    badges: ["Coming Soon"],
  },
  {
    name: "Tirzepatide High Dose",
    image: "/img/category-weight-loss.png",
    generic: "Tirzepatide",
    badges: ["Coming Soon", "High dose"],
  },
  {
    name: "Sublingual Semaglutide",
    image: "/img/category-hair.png",
    generic: "Semaglutide · Sublingual",
    badges: ["Coming Soon"],
  },
  {
    name: "Semaglutide + B12",
    image: "/img/icon-source.png",
    generic: "Semaglutide blend",
    badges: ["Coming Soon", "Enhanced"],
  },
  {
    name: "Tirzepatide + B12",
    image: "/img/icon-source.png",
    generic: "Tirzepatide blend",
    badges: ["Coming Soon", "Enhanced"],
  },
];

function WeightLossFeature() {
  return (
    <section
      className="relative overflow-hidden text-background"
      style={{
        background:
          "linear-gradient(180deg, #241F1C 0%, #38312C 45%, #41301B 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[87rem] px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16 lg:pt-32">
        {/* Headline + hero product image */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-background/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-background/85">
              <span className="size-1.5 rounded-full bg-[#FFC671]" />
              The GoodMeds Weight Loss Program
            </p>
            <h2 className="font-serif text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-background sm:text-6xl lg:text-[72px]">
              Your weight loss
              <br />
              <span style={{ color: "#FFC671" }} className="italic">
                breakthrough is coming.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-background/75 lg:text-lg">
              A full lineup of provider-prescribed compounded GLP-1 options
              — semaglutide, tirzepatide, high-dose, and sublingual — coming
              to {TECH_COMPANY.brand} at launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FFC671", color: "#453421" }}
              >
                Join the waitlist
              </a>
              <a
                href="#glp1-lineup"
                className="inline-flex h-12 items-center justify-center rounded-full border border-background/25 bg-background/5 px-7 text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                See the lineup ↓
              </a>
            </div>
          </div>

          {/* Big product image hero */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[2rem]">
              <Image
                src="/img/category-weight-loss.png"
                alt="A sage-green compounded GLP-1 injection pen"
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* The lineup carousel */}
        <div id="glp1-lineup" className="mt-20 lg:mt-28">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-serif text-3xl font-medium leading-tight tracking-[-0.03em] text-background sm:text-4xl lg:text-[40px]">
              Access our wide
              <span style={{ color: "#FFC671" }} className="italic">
                {" "}
                GLP-1 lineup.
              </span>
            </h3>
            <p className="text-sm text-background/65">
              7 formulations, all coming soon — including high-dose and
              sublingual options.
            </p>
          </div>

          {/* Horizontal scrolling track */}
          <div className="relative -mx-4 overflow-x-auto pb-2 sm:-mx-6">
            <div className="flex snap-x snap-mandatory gap-3 px-4 sm:gap-4 sm:px-6">
              {glp1Lineup.map((p, i) => (
                <ProductLineupCard key={`${p.name}-${i}`} product={p} />
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-background/55">
            All formulations shown are compounded medications. Compounded
            semaglutide and tirzepatide are not FDA-approved. They are
            prepared by US-licensed pharmacies on the prescription of a
            licensed provider for an individual clinical need. Availability,
            eligibility, and pricing will be confirmed at launch and during
            your intake. See{" "}
            <a
              href="/safety"
              className="text-background/80 underline underline-offset-2 hover:text-background"
            >
              Important Safety Information
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductLineupCard({
  product,
}: {
  product: (typeof glp1Lineup)[number];
}) {
  return (
    <a
      href="#waitlist"
      className="group relative flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-background/10 bg-[#41301B]/90 p-4 transition-transform hover:-translate-y-0.5 sm:w-[280px]"
    >
      {/* Top: badges */}
      <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1.5">
        {product.badges.map((b) => (
          <span
            key={b}
            className="inline-flex items-center gap-1 rounded-full bg-background/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground"
          >
            {b === "Coming Soon" && (
              <span className="size-1.5 rounded-full bg-[#FFC671]" />
            )}
            {b}
          </span>
        ))}
      </div>

      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-background/[0.04]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="280px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Title + meta */}
      <div className="mt-4 flex flex-col gap-1.5">
        <h4 className="font-serif text-xl font-medium tracking-[-0.02em] text-background">
          {product.name}
        </h4>
        <span className="text-sm text-[#FFC671]">Pricing at launch</span>
        <span className="text-xs uppercase tracking-[0.14em] text-background/55">
          {product.generic}
        </span>
      </div>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Hero                                    */
/* -------------------------------------------------------------------------- */

function Hero() {
  // Hims-style hero: H1 + 2 big featured tiles + 4 small category tiles.
  const featured = [categories[0], categories[1]]; // Weight Loss, Sexual Health
  const others = [categories[2], categories[3], categories[4], categories[5]]; // Hair, Skin, Daily, Mental

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto w-full max-w-[87rem] px-3 pt-6 pb-6 sm:px-4 lg:px-6">
        {/* H1 — bold, tight tracking, sentence-broken */}
        <h1 className="mx-auto mt-4 mb-6 max-w-[87rem] px-2 font-serif text-[clamp(2.5rem,_8vw,_3.5625rem)] font-medium leading-none tracking-[-0.0625em] text-foreground sm:my-8 lg:mb-9 lg:mt-5">
          Modern care
          <br className="hidden sm:block" />
          <span className="italic text-accent"> you'll actually use.</span>
        </h1>

        {/* Row 1 — two big featured tiles */}
        <div className="mb-1 flex flex-col gap-1 sm:flex-row">
          {featured.map((cat) => (
            <BigFeatureTile key={cat.slug} category={cat} />
          ))}
        </div>

        {/* Row 2 — four small category tiles */}
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 xl:grid-cols-4">
          {others.map((cat) => (
            <SmallCategoryTile key={cat.slug} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BigFeatureTile({ category }: { category: Category }) {
  return (
    <a
      href={`#${category.slug}`}
      aria-label={`${category.featuredTitle} — coming soon`}
      className="group relative flex h-[14.1875rem] flex-1 flex-col overflow-hidden rounded-2xl sm:h-[12.4375rem] sm:rounded-3xl"
      style={{ backgroundImage: category.heroGradient }}
    >
      {/* Product image, large, anchored right */}
      <div className="absolute inset-0">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          priority
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {/* Left-anchored gradient so the title stays legible */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 35%, transparent 70%)`,
          }}
        />
      </div>

      {/* Copy block bottom-left, chevron bottom-right */}
      <div className="relative z-10 mt-auto flex items-end justify-between p-4 lg:p-5">
        <div className="flex flex-col gap-1">
          <h3 className="max-w-[11.25rem] font-serif text-[1.125rem] font-medium leading-[1.1] tracking-[-0.055625rem] text-background sm:text-[1.25rem] sm:tracking-[-0.065625rem]">
            {category.featuredTitle.split(" ").slice(0, -2).join(" ")}{" "}
            <br />
            <span style={{ color: "#FFC671" }}>
              {category.featuredTitle.split(" ").slice(-2).join(" ")}
            </span>
          </h3>
          <div className="flex flex-col gap-1">
            <span className="text-[0.875rem] font-normal leading-[1.3] tracking-[-0.01em] text-background lg:text-base">
              {category.ctaLabel} →
            </span>
          </div>
        </div>
        <span className="ml-3 inline-flex shrink-0 items-center">
          <ComingSoonBadge accent="#FFC671" />
        </span>
      </div>
    </a>
  );
}

function SmallCategoryTile({ category }: { category: Category }) {
  return (
    <a
      href={`#${category.slug}`}
      aria-label={`${category.label} — coming soon`}
      className="group relative flex h-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl px-4 py-0 transition-shadow hover:shadow-sm sm:h-[6.25rem] sm:rounded-3xl"
      style={{
        backgroundImage:
          "linear-gradient(167deg, #f4f1e6 0%, #faf8f2 38%, #faf8f2 84%, #f4f1e6 100%)",
      }}
    >
      {/* Hover-gradient overlay (transparent → category gradient on hover) */}
      <span
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundImage: category.heroGradient }}
      />

      {/* Label, left-aligned, takes the height */}
      <div className="relative z-10 flex h-full w-full items-center justify-start text-left">
        <span
          className="font-serif text-[1.125rem] font-medium leading-[1.1] tracking-[-0.055625rem] transition-colors duration-300 group-hover:text-background"
          style={{ color: category.heroTextPrimary }}
        >
          {category.shortLabel.replace(category.shortAccentWord, "").trim()}{" "}
          <span
            className="transition-colors duration-300 group-hover:text-background"
            style={{ color: category.heroTextAccent }}
          >
            {category.shortAccentWord}
          </span>
        </span>
      </div>

      {/* Small product image, right-anchored */}
      <div className="relative z-10 -mr-1 flex aspect-square h-20 w-20 shrink-0 items-center justify-end sm:h-[5rem] sm:w-[5rem]">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          sizes="80px"
          className="object-contain"
        />
      </div>

      {/* Chevron, far right */}
      <span
        aria-hidden
        className="relative z-10 ml-1 inline-flex items-center pr-2 transition-colors duration-300 group-hover:text-background"
      >
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6 6.5L1 11.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}


function ComingSoonBadge({ accent }: { accent: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur"
      style={{ boxShadow: `inset 0 0 0 1px ${accent}40` }}
    >
      <span
        className="size-1.5 rounded-full"
        style={{ backgroundColor: accent }}
      />
      Coming Soon
    </span>
  );
}


/* -------------------------------------------------------------------------- */
/*                              CategoryCatalog                               */
/* -------------------------------------------------------------------------- */

function CategoryCatalog() {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            The full lineup
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
            Every category,
            <br />
            <span className="italic text-accent">at a glance.</span>
          </h2>
          <p className="mt-5 max-w-lg text-muted">
            Six prescription categories, one platform, one provider
            relationship. All coming soon — join the waitlist to be first when
            each opens.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <CatalogCard key={cat.slug} category={cat} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function CatalogCard({ category }: { category: Category }) {
  return (
    <li>
      <a
        href="#waitlist"
        id={category.slug}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-transparent transition-all hover:-translate-y-0.5 hover:border-foreground/10"
        style={{ backgroundColor: category.tint, color: category.onTint }}
      >
        {/* Image — large, takes top half */}
        <div className="relative aspect-[5/4] w-full overflow-hidden">
          <Image
            src={category.image}
            alt={category.imageAlt}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute right-3 top-3">
            <ComingSoonBadge accent={category.accent} />
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: category.accent }}
          >
            {category.eyebrow}
          </p>
          <h3
            className="font-serif text-3xl font-medium leading-[1.05] tracking-[-0.025em]"
            style={{ color: category.onTint }}
          >
            {category.label}
          </h3>
          <p
            className="text-[14px] leading-relaxed"
            style={{ color: category.onTint, opacity: 0.78 }}
          >
            {category.subhead.split(".")[0]}.
          </p>
          <span
            className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold transition-transform group-hover:translate-x-0.5"
            style={{ color: category.accent }}
          >
            Notify me →
          </span>
        </div>
      </a>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    WhyUs                                   */
/* -------------------------------------------------------------------------- */

function WhyUs() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Why {TECH_COMPANY.brand}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Care that actually
            <br />
            <span className="italic font-medium text-accent">
              feels like care.
            </span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

