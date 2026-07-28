import Reveal from "../components/Reveal";

/* Ways to Participate. Copy approved 2026-07-26 (final) — verbatim.
   Each button deep-links to its own form on the Join page. Plain anchors
   rather than router Links so the hash target is honored on arrival. */
const PATHS = [
  {
    title: "Individuals",
    body: "Participate in missions, use Crown Code resources, discover participating businesses, and strengthen your community through intentional action.",
    cta: "Start Here",
    href: "/join#individuals",
  },
  {
    title: "Businesses",
    body: "Join the Business Directory, complete Crown Score, earn Crown Verified recognition, and become part of a growing community network.",
    cta: "For Businesses",
    href: "/join#businesses",
  },
  {
    title: "Schools & Organizations",
    body: "Partner with Crown Code Collective to bring educational resources, missions, leadership development, and community engagement opportunities to your organization.",
    cta: "Become a Partner",
    href: "/join#organizations",
  },
  {
    title: "Supporters",
    body: "Support the work through partnerships, sponsorships, volunteering, advocacy, or a tax-deductible gift. Crown Code Collective is a 501(c)(3) nonprofit organization.",
    cta: "Support the Mission",
    href: "/join#supporters",
  },
];

export default function Participate() {
  return (
    <section
      id="participate"
      className="grain relative overflow-hidden bg-foundation px-5 py-32 scroll-mt-20 sm:px-8 sm:py-40"
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Find Your Path</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl leading-[1.14] text-cream sm:text-[2.6rem]">
              Everyone Has a Place
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-px bg-gold/15 sm:grid-cols-2">
          {PATHS.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <div className="flex h-full flex-col bg-foundation p-8 sm:p-10">
                <h3 className="font-display text-2xl text-cream sm:text-[1.8rem]">{p.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-sand/80">{p.body}</p>
                <a
                  href={p.href}
                  className="mt-8 inline-flex items-center self-start border border-gold/45 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-foundation"
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
