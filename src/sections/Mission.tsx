import Reveal from "../components/Reveal";
import GoldDust from "../components/GoldDust";

/* The ONE italic moment on the whole site lives here — Natasha's verbatim
   mission statement (locked copy, do not rewrite). */
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
            To recognize Black students at the moment of their walk, to lift the weight that makes
            the walk harder, and to bind one generation to the next — so that no one rises alone, and
            no one rises and forgets.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mx-auto mt-12 h-px w-40 rule-gold" />
        </Reveal>
      </div>
    </section>
  );
}
