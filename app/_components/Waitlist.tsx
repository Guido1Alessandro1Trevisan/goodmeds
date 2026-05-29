"use client";

import Link from "next/link";
import { useState } from "react";

export function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="waitlist" className="bg-accent text-background">
      <div className="mx-auto w-full max-w-4xl px-6 py-24 lg:py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-background/70">
            Waitlist
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Be first when we launch.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-background/75">
            Drop your email — we'll let you know when each category opens and
            send the launch pricing to early members first.
          </p>

          {submitted ? (
            <p className="mx-auto mt-10 max-w-md rounded-full border border-background/30 bg-background/10 px-6 py-4 text-sm text-background">
              Thanks — you're on the list. We'll be in touch.
            </p>
          ) : (
            <form
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: POST to /api/waitlist when the backend is wired up.
                setSubmitted(true);
              }}
            >
              <label className="sr-only" htmlFor="waitlist-email">
                Email address
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="h-12 flex-1 rounded-full bg-background/95 px-5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-background/60"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-background px-7 text-sm font-medium text-accent transition-colors hover:bg-background/90"
              >
                Notify Me
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-background/60">
            No spam. We'll only email you about launch milestones and the
            categories you ask about.{" "}
            <Link
              href="/legal/privacy"
              className="underline underline-offset-2"
            >
              Privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
