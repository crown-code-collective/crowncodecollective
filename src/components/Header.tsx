import { useEffect, useState } from "react";
import { Link, useRoute } from "../lib/router";
import Emblem from "./Emblem";

/* Approved navigation 2026-07-26: Home, About, Our Work, Programs, Research,
   Participate, Contact — with "Find Your Path" as the primary button.

   Only Home, About and Join exist as routes. Our Work, Programs, Research and
   Participate are real homepage sections, so they link to those anchors rather
   than to pages that do not exist. When a section becomes its own page, change
   the `to` here.

   Contact points at /join, which is where the working forms are. */
const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/#our-work", label: "Our Work" },
  { to: "/#programs", label: "Programs" },
  { to: "/#research", label: "Research" },
  { to: "/#participate", label: "Participate" },
  { to: "/join", label: "Contact" },
];

export default function Header() {
  const { path } = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled || open ? "bg-foundation/92 backdrop-blur-md border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <Emblem className="h-9 w-auto" title="Crown Code Collective" />
          <span className="font-display text-cream text-base leading-none tracking-tight sm:text-lg">
            Crown Code <span className="text-gold">Collective</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`relative text-sm uppercase tracking-[0.18em] transition-colors duration-200 ${
                path === n.to ? "text-gold" : "text-sand/80 hover:text-cream"
              }`}
            >
              {n.label}
              {path === n.to && <span className="absolute -bottom-2 left-0 h-px w-full bg-gold" />}
            </Link>
          ))}
          <Link
            to="/join"
            className="border border-gold/60 px-5 py-2 text-sm uppercase tracking-[0.16em] text-gold transition-colors duration-200 hover:bg-gold hover:text-foundation"
          >
            Find Your Path
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-px w-6 bg-cream transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-cream transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-cream transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/15 px-5 pb-6 pt-2 lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`block py-3 text-sm uppercase tracking-[0.18em] ${
                path === n.to ? "text-gold" : "text-sand/80"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/join"
            className="mt-4 inline-flex w-full items-center justify-center border border-gold/60 px-5 py-3 text-sm uppercase tracking-[0.16em] text-gold transition-colors duration-200 hover:bg-gold hover:text-foundation"
          >
            Find Your Path
          </Link>
        </nav>
      )}
    </header>
  );
}
