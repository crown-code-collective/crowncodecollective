import { Link } from "../lib/router";
import Emblem from "./Emblem";
import GoldDust from "./GoldDust";

/* Footer approved 2026-07-26.
   The old "Recognition · Leadership · Culture · Community" strapline was
   removed — it competed with C.O.D.E., which is the tagline. */

/* Real accounts, each loaded in a browser to confirm it exists before listing.
   Don't add a link here without doing that — a dead link in a nonprofit's
   footer looks exactly like a working one until someone clicks it.
   YouTube is included: the channel is public and branded, though it has no
   videos yet.
   The PODCAST is deliberately NOT here. The Spotify show is created but
   unpublished — open.spotify.com/show/033BV6MdHO2E6pkZyJ5aMv returns 404, so
   it would be a broken link. Add it the day the first episode publishes. */
const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/crowncodecollective/" },
  { label: "Facebook", href: "https://www.facebook.com/crowncodecollective" },
  { label: "TikTok", href: "https://www.tiktok.com/@crowncodecollective" },
  { label: "YouTube", href: "https://www.youtube.com/@crowncodecollective" },
];

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/#our-work", label: "Our Work" },
  { to: "/#programs", label: "Programs" },
  { to: "/#research", label: "Research" },
  { to: "/#participate", label: "Participate" },
  { to: "/join", label: "Partner" },
  { to: "/join", label: "Contact" },
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
        <p className="mt-3 text-base text-sand/80">
          Transforming Awareness Into Intentional Action
        </p>

        <div className="mx-auto mt-8 triband" />

        <p className="mt-8 font-display text-xl tracking-[0.12em] text-gold">C.O.D.E.</p>
        <p className="mt-2 text-xs uppercase tracking-[0.28em] text-sand/75">
          Claim • Observe • Do • Embody
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="text-sm uppercase tracking-[0.16em] text-sand/75 transition-colors hover:text-gold"
            >
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
          © {new Date().getFullYear()} Crown Code Collective. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
