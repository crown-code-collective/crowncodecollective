import Reveal from "../components/Reveal";
import Emblem from "../components/Emblem";
import GoldDust from "../components/GoldDust";
import Constellation107 from "../components/Constellation107";
import { Link } from "../lib/router";

export default function About() {
  return (
    <article className="relative overflow-hidden bg-foundation">
      {/* Faint DNA-crown watermark */}
      <Emblem className="pointer-events-none absolute -right-20 top-24 h-[40rem] w-auto opacity-[0.04]" />

      {/* Header */}
      <header className="grain relative px-5 pb-20 pt-40 sm:px-8 sm:pt-48">
        <div className="gold-glow left-1/4 top-32 h-72 w-[40rem]" />
        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-gold">About</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display font-display-tight text-4xl leading-[1.08] text-cream sm:text-6xl">
              Why Crown Code Collective exists.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-sand/85">
              Because too many walked across a stage and were never truly seen. Because perseverance
              that long has a name, and a number, and a lineage worth keeping.
            </p>
          </Reveal>
        </div>
      </header>

      {/* CVII centerpiece — the emotional core */}
      <section className="grain relative overflow-hidden bg-foundation-soft px-5 py-28 sm:px-8 sm:py-36">
        <GoldDust className="opacity-70" density={0.9} />
        <div className="gold-glow left-1/2 top-1/2 h-96 w-[44rem] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-lightwipe-gold font-display text-2xl tracking-[0.18em] sm:text-3xl">CVII</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-sand/70">
              Roman numeral · One hundred and seven
            </p>
          </Reveal>

          {/* 107 points of light assemble into the crown — each light, one HBCU */}
          <Constellation107 className="mx-auto mt-8 h-[58vh] min-h-[420px] w-full max-w-2xl" />

          <Reveal>
            <p className="mt-2 text-sm uppercase tracking-[0.26em] text-gold">
              Historically Black Colleges &amp; Universities
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-10 max-w-2xl font-display text-2xl leading-[1.4] text-cream sm:text-[1.9rem]">
              Each light, a school built when the door was closed. One hundred and seven still
              standing — because someone refused to stop.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Long-form editorial */}
      <section className="grain relative bg-foundation px-5 py-28 sm:px-8 sm:py-36">
        <div className="relative mx-auto max-w-2xl space-y-7 text-lg leading-[1.8] text-sand/85">
          <Reveal>
            <p className="font-display text-2xl leading-snug text-cream">
              Educational perseverance deserves recognition.
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <p>
              Crown Code Collective was created to strengthen community through ceremonial
              recognition, leadership visibility, cultural connection, scholarships, and educational
              support systems.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              CCC exists to celebrate achievement, strengthen identity, and build connections across
              students, families, alumni, educators, and communities.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="pt-6 font-display text-3xl text-cream">The number is the soul of it.</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              When the country would not teach Black students, Black communities built the schools
              themselves — one hundred and seven of them. Each one was an act of perseverance before
              it was an institution. Each one said the same thing: we will educate our own, and we
              will be recognized for it.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              That is the code carried in our crown. Not metaphor — inheritance. The same refusal to
              be unseen that founded those 107 schools is the refusal that walks across a high-school
              stage today. Our emblem makes it literal: a crown woven from DNA, because educational
              perseverance is passed down the way everything essential is passed down — through the
              line, generation to generation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="pt-6 font-display text-3xl text-cream">BSU is the mission. The HBCU is the vision.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              It begins in a Black Student Union — a graduating senior who deserves to be recognized
              now, where they are. It points toward the HBCU — the fuller inheritance, the 107, the
              place the lineage was built to reach. We work the whole span: we honor the walk in
              front of us, and we keep the vision the 107 set in front of all of us.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-cream">
              Recognition, then return. A student is seen — and becomes someone who makes sure the
              next one is. That is how a crown stays on a people: it never stops being handed down.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className="pt-6 font-display text-3xl text-cream">A pipeline, and a place to be remembered.</h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p>
              Recognition is the start of a pipeline. The senior who is seen becomes the mentor who
              sees. The alum who reaches back becomes the leader others rise toward. We build that
              path on purpose — from the walk across the stage to the seat at the front of the room.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              And we keep the connection that time and distance try to take. Across schools, across
              cities, across generations — a community remembered is a community restored. No name
              that earned this is allowed to fade.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="text-cream">
              So this is a place to be seen, to be celebrated, and to be remembered — for the
              students, the families, the educators, and the communities who carried education like a
              torch through rooms that were not built to hold their light.
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="rule-gold mb-10" />
          <Reveal>
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-2xl text-cream">Take your place in the line.</p>
              <Link
                to="/join"
                className="inline-flex items-center bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-foundation transition-colors duration-300 hover:bg-gold-hi"
              >
                Join the Network
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
