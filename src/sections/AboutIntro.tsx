import Reveal from "../components/Reveal";

/* Natasha's verbatim "What is Crown Code Collective?" copy, supplied 2026-07-26.
   Do not reword. */
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
              Crown Code Collective is a nonprofit creative infrastructure organization that
              transforms awareness into intentional participation. Through education, recognition,
              research, media, missions, and community engagement, CCC builds practical, visible,
              measurable, and repeatable pathways for people, businesses, leaders, and institutions
              to connect and build together.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              Our work moves recognition beyond acknowledgment. Recognition builds visibility.
              Visibility builds trust. Trust creates connection. Connection produces participation.
              Participation strengthens economic circulation, ownership, and legacy.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>We do not simply celebrate what Black communities have built.</p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="font-display text-2xl text-gold">
              We create the infrastructure to help build what comes next.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
