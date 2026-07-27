import Reveal from "../components/Reveal";
import GoldDust from "../components/GoldDust";

/* Final call to action. Copy approved 2026-07-26 (final) — verbatim. */
export default function FinalCTA() {
  return (
    <section className="grain relative overflow-hidden bg-foundation-soft px-5 py-32 sm:px-8 sm:py-40">
      <GoldDust className="opacity-70" density={0.9} />
      <div className="gold-glow left-1/2 top-1/2 h-[26rem] w-[46rem] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.16] text-cream sm:text-[2.9rem]">
            Awareness Is Only the Beginning.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-sand/85">
            Every day presents another opportunity to learn, participate, contribute, and build.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-sand/85">
            Join Crown Code Collective and help transform awareness into intentional action.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#our-work"
              className="inline-flex items-center justify-center bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-foundation transition-all duration-300 hover:bg-gold-hi"
            >
              Explore Our Work
            </a>
            <a
              href="#participate"
              className="inline-flex items-center justify-center border border-cream/40 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Find Your Path
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
