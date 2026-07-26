import Reveal from "../components/Reveal";

const COMING = [
  "Events",
  "Scholarships",
  "Community Spotlights",
  "Student Recognition",
  "Juneteenth & Cultural Events",
  "Leadership Programs",
  "Merchandise",
  "Photo Galleries",
];

/* Her future-sections list — signals growth and legitimacy (Goal #4).
   Intentional, not placeholder: the road ahead, named. */
export default function Horizon() {
  return (
    <section className="grain relative overflow-hidden bg-foundation-soft px-5 py-28 sm:px-8 sm:py-36">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <div className="mb-6 triband-line w-24" />
          </Reveal>
          <Reveal delay={0.04}>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">On the Horizon</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              The road keeps going.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-sand/80">
              This is the foundation. What rises on it is already named — built as the community
              grows, one season at a time.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-gold/15 bg-gold/10 sm:grid-cols-2 lg:grid-cols-4">
          {COMING.map((item, i) => (
            <Reveal key={item} delay={0.03 * i}>
              <div className="group flex h-full items-center justify-between gap-3 bg-foundation px-5 py-6 transition-colors duration-300 hover:bg-foundation-soft">
                <span className="font-display text-lg text-cream">{item}</span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-gold/70">Soon</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
