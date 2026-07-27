import Reveal from "../components/Reveal";
import GoldDust from "../components/GoldDust";

/* The ONE italic moment on the whole site lives here — verbatim mission
   statement, supplied by the owner 2026-07-26 (locked copy, do not rewrite). */
export default function Mission() {
  return (
    <section className="grain relative overflow-hidden bg-foundation-soft px-5 py-32 sm:px-8 sm:py-40">
      <GoldDust className="opacity-70" density={0.9} />
      <div className="gold-glow left-1/2 top-1/2 h-[28rem] w-[48rem] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.34em] text-gold">Our Mission</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 font-display text-2xl italic leading-[1.32] text-cream sm:text-[2.15rem] sm:leading-[1.34]">
            To help individuals and communities transform awareness into intentional action by
            building lasting practices and systems that strengthen identity, cultivate leadership,
            foster economic resilience, and create lasting impact across generations.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mx-auto mt-12 h-px w-40 rule-gold" />
        </Reveal>
      </div>
    </section>
  );
}
