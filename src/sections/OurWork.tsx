import Reveal from "../components/Reveal";
import { Link } from "../lib/router";
import { WORK_AREAS } from "../data/work";

/* The cards below stay verbatim. Each one now links to its full page at
   /work/<slug>; the slugs come from data/work.ts in the same order, so if
   an area is ever added or reordered, change both files together. */

/* Six Areas of Work. Copy approved 2026-07-26 (final) — verbatim, do not reword.
   Recognition appears here as ONE of six areas, which is the agreed framing:
   a method within the ecosystem, not the identity of the organization. */
const AREAS = [
  {
    title: "Missions and Community Activations",
    body: "Organized missions that help individuals and communities move from awareness to coordinated action.",
    includes: [
      "BLACKOUT Activation Mission",
      "BLACKOUT Mission Kit",
      "Future community missions and public participation campaigns",
    ],
  },
  {
    title: "Economic Education and Practice",
    body: "Educational tools that help people make intentional financial decisions, strengthen community economic circulation, and build long-term habits.",
    includes: ["Build Back Black", "Build Back Black Journal", "Build Back Black Digital Companion"],
  },
  {
    title: "Business Recognition, Visibility, and Connection",
    body: "Programs that help businesses demonstrate community participation, increase visibility, strengthen trust, and connect with customers.",
    includes: [
      "Crown Score",
      "Crown Verified",
      "Crown Code Collective Business Directory",
      "Founding Builder Program",
    ],
  },
  {
    title: "Recognition and Leadership Development",
    body: "Programs that recognize participation, celebrate achievement, develop leadership, and encourage service across generations.",
    includes: [
      "Participation Badges",
      "Student Recognition",
      "Leadership Recognition",
      "Community Recognition",
      "Leadership Development",
    ],
  },
  {
    title: "Education, Media, and Public Engagement",
    body: "Educational resources and media that help people understand community challenges, learn practical solutions, and participate in meaningful action.",
    includes: [
      "Educational Resources",
      "Workshops",
      "Public Speaking",
      "Crown Code Media",
      "Podcast",
      "Videos",
      "Community Learning Experiences",
    ],
  },
  {
    title: "Research, Partnerships, and Community Infrastructure",
    body: "Research and strategic partnerships that strengthen programs, measure outcomes, support implementation, and expand community impact.",
    includes: [
      "Research Projects",
      "Public Reports",
      "School Partnerships",
      "Community Partnerships",
      "Business Partnerships",
      "Organizational Partnerships",
      "Grant Initiatives",
    ],
  },
];

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="grain relative overflow-hidden bg-foundation px-5 py-32 scroll-mt-20 sm:px-8 sm:py-40"
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-20 max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              How the Mission Becomes Action
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              Six Areas of Work
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-sand/80">
              Crown Code Collective organizes its work across six connected areas. Each area creates
              a different pathway for participation while supporting the same mission.
            </p>
          </Reveal>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {AREAS.map((a, i) => (
            <Reveal key={a.title} delay={0.04}>
              <article className="grid gap-8 border-t border-gold/15 pt-10 md:grid-cols-[1fr_1fr] md:gap-16">
                <div>
                  <span className="font-display text-sm tracking-[0.2em] text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-cream sm:text-[1.9rem]">
                    {a.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-sand/80">{a.body}</p>
                  {WORK_AREAS[i] && (
                    <Link
                      to={`/work/${WORK_AREAS[i].slug}`}
                      className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-cream"
                    >
                      Explore this area →
                    </Link>
                  )}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold/75">Includes</p>
                  <ul className="mt-4 space-y-2.5">
                    {a.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-3 text-base leading-relaxed text-sand/85"
                      >
                        <span className="text-gold/60">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
