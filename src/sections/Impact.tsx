import Reveal from "../components/Reveal";

/* Impact. Copy approved 2026-07-26 (final) — verbatim.
   Careful framing to preserve: "Our work is designed to increase" — these are
   intended outcomes, not claimed results. Do not convert this into impact
   numbers until there are real, measured ones. */
const INCREASES = [
  "Community participation",
  "Leadership development",
  "Business trust and visibility",
  "Community economic circulation",
  "Educational engagement",
  "Cross-generational leadership",
  "Organizational partnerships",
  "Community collaboration",
];

export default function Impact() {
  return (
    <section
      id="research"
      className="grain relative overflow-hidden bg-foundation px-5 py-32 scroll-mt-20 sm:px-8 sm:py-40"
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Measuring What Participation Builds
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              Visible. Measurable. Repeatable.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-sand/80">
              Crown Code Collective believes meaningful change should be visible, measurable, and
              repeatable.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <p className="text-xs uppercase tracking-[0.24em] text-gold/75">
            Our work is designed to increase
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-x-12 gap-y-4 sm:grid-cols-2">
          {INCREASES.map((d, i) => (
            <Reveal key={d} delay={0.03 * i}>
              <li className="flex items-baseline gap-3 border-b border-gold/12 pb-4 text-base leading-relaxed text-sand/85">
                <span className="text-gold/60">·</span>
                {d}
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <p className="mt-14 max-w-2xl text-lg leading-relaxed text-sand/85">
            We measure participation, document outcomes, evaluate progress, and publish research
            that helps strengthen future work.
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <a
            href="#participate"
            className="mt-9 inline-flex items-center border border-gold/45 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-foundation"
          >
            View Research &amp; Reports
          </a>
        </Reveal>
      </div>
    </section>
  );
}
