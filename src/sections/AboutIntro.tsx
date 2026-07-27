import Reveal from "../components/Reveal";

/* FINAL approved "What is Crown Code Collective?" copy, 2026-07-26.
   Verbatim — do not reword. */
export default function AboutIntro() {
  return (
    <section className="grain relative overflow-hidden bg-foundation px-5 py-28 sm:px-8 sm:py-36">
      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">About Crown Code Collective</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
            What is Crown Code Collective?
          </h2>
        </Reveal>
        <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-sand/85">
          <Reveal delay={0.12}>
            <p>
              Crown Code Collective is a nonprofit organization that transforms awareness into
              intentional action. Through education, recognition, research, media, missions, and
              community engagement, we create practical, visible, measurable, and repeatable
              pathways for individuals, businesses, leaders, and institutions to connect,
              contribute, and build together.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-display text-2xl text-gold">
              Because awareness alone is not enough.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
