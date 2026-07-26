import Reveal from "../components/Reveal";

/* Natasha's core creation sentence (verbatim) — the four verbs as a drumbeat,
   framed in a Langston-Hughes cadence (original lines, no quotation). Carries
   visibility, remembrance, connection, and "life." */
export default function CoreStatement() {
  return (
    <section className="relative overflow-hidden bg-foundation px-5 py-24 sm:px-8 sm:py-32">
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mx-auto mb-8 triband" />
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-xs uppercase tracking-[0.34em] text-gold">
            Seen · Honored · Remembered · Connected
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 font-display text-2xl leading-[1.4] text-cream sm:text-[2.1rem]">
            Crown Code Collective was created to ensure students and communities who persevered
            through education, leadership, culture, and life are{" "}
            <span className="text-gold">seen, honored, remembered, and connected.</span>
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-sand/80">
            A dream kept in the light does not defer. It rises — and it reaches back to carry the
            next one up the same road.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
