import Reveal from "../components/Reveal";
import GoldDust from "../components/GoldDust";
import { Link } from "../lib/router";
import { STATUS_LABEL, WORK_AREAS, findWorkArea, type Status } from "../data/work";

/* One Area of Work, in full. Route: /work/<slug>
   The visual system here is deliberately the same as the rest of the site —
   foundation background, gold rules, Reveal on entry — so these read as part
   of the site rather than as a bolted-on subsection. Nothing new was designed. */

const STATUS_TONE: Record<Status, string> = {
  available: "border-gold/60 text-gold",
  building: "border-sand/35 text-sand/75",
  opening: "border-gold/40 text-gold/85",
  planned: "border-sand/25 text-sand/55",
};

export default function WorkAreaPage({ slug }: { slug: string }) {
  const area = findWorkArea(slug);

  if (!area) {
    return (
      <main className="grain relative bg-foundation px-5 py-40 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl text-cream">That area isn't here.</h1>
          <p className="mt-5 text-base text-sand/80">
            The six Areas of Work are listed on the home page.
          </p>
          <Link
            to="/#our-work"
            className="mt-9 inline-block border border-gold/40 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-foundation"
          >
            See the six areas
          </Link>
        </div>
      </main>
    );
  }

  const others = WORK_AREAS.filter((a) => a.slug !== area.slug);

  return (
    <main className="grain relative overflow-hidden bg-foundation">
      <GoldDust className="opacity-50" density={0.6} />

      {/* Masthead */}
      <section className="relative px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              to="/#our-work"
              className="text-xs uppercase tracking-[0.24em] text-gold/75 transition-colors hover:text-gold"
            >
              ← The Six Areas of Work
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-10 font-display text-sm tracking-[0.24em] text-gold/70">
              {area.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-[2.1rem] leading-[1.12] text-cream sm:text-[3.1rem]">
              {area.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-gold/90">{area.lede}</p>
          </Reveal>
        </div>
      </section>

      {/* The long form */}
      <section className="relative px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-3xl border-t border-gold/15 pt-14">
          {area.body.map((p, i) => (
            <Reveal key={i} delay={0.04 * i}>
              <p className="mb-6 text-lg leading-relaxed text-sand/85">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What's in it */}
      <section className="relative px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">What this area includes</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand/65">
              Each item says plainly where it stands. Nothing here is described as finished
              unless a person can use it today.
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {area.offerings.map((o, i) => (
              <Reveal key={o.name} delay={0.03 * i}>
                <article className="border-t border-gold/15 pt-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <h2 className="font-display text-xl leading-tight text-cream sm:text-2xl">
                      {o.name}
                    </h2>
                    <span
                      className={`shrink-0 border px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] ${STATUS_TONE[o.status]}`}
                    >
                      {STATUS_LABEL[o.status]}
                    </span>
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand/80">{o.body}</p>
                  {o.href && (
                    <Link
                      to={o.href}
                      className="mt-5 inline-block text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-cream"
                    >
                      {o.hrefLabel ?? "Learn more"} →
                    </Link>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for + CTA */}
      <section className="relative px-5 pb-28 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-12 border-t border-gold/15 pt-14 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gold/75">Who this is for</p>
            <ul className="mt-5 space-y-2.5">
              {area.forWhom.map((w) => (
                <li
                  key={w}
                  className="flex items-baseline gap-3 text-base leading-relaxed text-sand/85"
                >
                  <span className="text-gold/60">·</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gold/75">Take part</p>
            <p className="mt-5 text-base leading-relaxed text-sand/80">
              Every area of work has a way in. Tell us where you fit and we will point you at
              the part that is ready for you.
            </p>
            <Link
              to={area.cta.href}
              className="mt-7 inline-block border border-gold/40 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-foundation"
            >
              {area.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* The other five */}
      <section className="relative px-5 pb-32 sm:px-8">
        <div className="mx-auto max-w-4xl border-t border-gold/15 pt-14">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">The other areas</p>
          <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/work/${o.slug}`}
                className="group flex items-baseline gap-4 border-b border-gold/10 pb-4 transition-colors hover:border-gold/40"
              >
                <span className="font-display text-sm tracking-[0.2em] text-gold/60">
                  {String(o.index).padStart(2, "0")}
                </span>
                <span className="text-base leading-snug text-sand/80 transition-colors group-hover:text-cream">
                  {o.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
