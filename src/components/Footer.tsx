import { Link } from "../lib/router";
import Emblem from "./Emblem";
import GoldDust from "./GoldDust";

/* Real accounts verified live 2026-07-26 (registered under setup@). Facebook and
   LinkedIn don't exist for CCC — removed rather than left as dead links. */
const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/crowncodecollective/" },
  { label: "TikTok", href: "https://www.tiktok.com/@crowncodecollective" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-foundation px-5 py-16 sm:px-8">
      <GoldDust className="opacity-60" density={0.7} />
      <div className="gold-glow left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <Emblem variant="full" className="emblem-alive h-24 w-auto" title="Crown Code Collective crest" />
        <p className="mt-6 font-display text-2xl tracking-tight text-cream">
          Crown Code <span className="text-gold">Collective</span>
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.32em] text-sand/70">
          Recognition · Leadership · Culture · Community
        </p>
        <div className="mx-auto mt-6 triband" />

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/join", label: "Join" },
          ].map((n) => (
            <Link key={n.to} to={n.to} className="text-sm uppercase tracking-[0.16em] text-sand/75 transition-colors hover:text-gold">
              {n.label}
            </Link>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-sand/75 transition-colors hover:text-gold"
              aria-label={s.label}
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="mt-10 text-[0.7rem] tracking-wide text-sand/60">
          © {new Date().getFullYear()} Crown Code Collective. CVII — for the 107.
        </p>
      </div>
    </footer>
  );
}
