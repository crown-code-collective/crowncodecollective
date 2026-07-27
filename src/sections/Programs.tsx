import Reveal from "../components/Reveal";

/* Featured initiatives. Copy approved 2026-07-26 (final) — verbatim.
   LINKS: none of these has its own page yet. Every button points at
   #participate so nothing is a dead link. When a program page exists, change
   the href here — that is the only edit needed. */
const PROGRAMS = [
  {
    title: "BLACKOUT",
    body: [
      "A coordinated participation mission that helps individuals and communities examine habits, redirect attention, and take intentional action together.",
    ],
    cta: "Learn About BLACKOUT",
  },
  {
    title: "Build Back Black",
    body: [
      "An economic participation initiative that helps individuals and communities strengthen economic awareness through consistent action and measurable practice.",
      "The Build Back Black Journal and Digital Companion provide guided tools for reflection, business discovery, community economic circulation, and long-term participation.",
    ],
    cta: "Explore Build Back Black",
  },
  {
    title: "Crown Score & Crown Verified",
    body: [
      "Programs that help businesses demonstrate trust, participation, visibility, and community commitment through a structured evaluation process.",
    ],
    cta: "Learn More",
  },
  {
    title: "Crown Code Collective Business Directory",
    body: [
      "A searchable directory connecting communities with participating businesses while encouraging stronger local economic support.",
    ],
    cta: "Explore the Directory",
  },
  {
    title: "Founding Builder Program",
    body: [
      "An opportunity for early businesses and supporters to help establish the long-term foundation of Crown Code Collective.",
    ],
    cta: "Become a Founding Builder",
  },
  {
    title: "Media, Podcast, Research & Reports",
    body: [
      "Stories, interviews, educational content, research, and public reports that document community participation and encourage continued learning.",
    ],
    cta: "Explore Media",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="grain relative overflow-hidden bg-foundation-soft px-5 py-32 scroll-mt-20 sm:px-8 sm:py-40"
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-20 max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Featured Initiatives</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              Practical Ways to Participate
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-sand/80">
              Every Crown Code Collective initiative provides a different way to move from awareness
              into intentional action.
            </p>
          </Reveal>
        </div>

        <div className="space-y-14">
          {PROGRAMS.map((p) => (
            <Reveal key={p.title} delay={0.04}>
              <article className="border-t border-gold/15 pt-10">
                <h3 className="font-display text-2xl leading-tight text-cream sm:text-[1.9rem]">
                  {p.title}
                </h3>
                <div className="mt-5 max-w-3xl space-y-3">
                  {p.body.map((line) => (
                    <p key={line} className="text-base leading-relaxed text-sand/80">
                      {line}
                    </p>
                  ))}
                </div>
                <a
                  href="#participate"
                  className="mt-7 inline-flex items-center border border-gold/45 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-foundation"
                >
                  {p.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
