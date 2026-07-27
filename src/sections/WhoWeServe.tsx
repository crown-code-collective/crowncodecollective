import Reveal from "../components/Reveal";

/* Who We Serve. Copy approved 2026-07-26 (final) — verbatim, do not reword. */
const AUDIENCES = [
  "Individuals",
  "Students",
  "Families",
  "Business Owners",
  "Nonprofit Organizations",
  "Schools",
  "Colleges & Universities",
  "Educators",
  "Community Leaders",
  "Faith Communities",
  "Government Agencies",
  "Community Partners",
];

export default function WhoWeServe() {
  return (
    <section className="grain relative overflow-hidden bg-foundation-soft px-5 py-32 sm:px-8 sm:py-40">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Who We Serve</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              Built for People Ready to Participate
            </h2>
          </Reveal>
        </div>

        <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a} delay={0.02 * i}>
              <li className="flex items-baseline gap-3 border-b border-gold/12 pb-3.5 text-base text-sand/85">
                <span className="text-gold/60">·</span>
                {a}
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <p className="mt-14 max-w-2xl text-lg leading-relaxed text-sand/85">
            Our resources can be used individually, through organizations, in classrooms, across
            communities, and through strategic partnerships.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
