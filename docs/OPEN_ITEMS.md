# OPEN ITEMS — what's not finished yet

This is the master list of everything still outstanding on the Crown Code
Collective website. **When every box on this page is ticked, the job is
finished.** Not before.

Work top to bottom. Tick each box, commit this file as you go, and if a session
ends halfway the next one reads this page and continues. Don't tick a box
because you did the action — tick it because you checked the result.

Some items need the owner (they need her accounts or her words). Those are
marked **👤**. Ask for one thing at a time, in plain English, and wait.
Never ask her for a password.

---

## A · Get the site onto the real web address

- [ ] **A1 — Run `docs/GO_LIVE.md` start to finish.**
      That file is the full technical launch: code into GitHub, Netlify
      building it, forms switched on, domain added, DNS changed, everything
      verified. It has its own seven-phase checklist.

      Phases 1, 2 and 4 are done. **Phase 3 (forms), 5, 6 and 7 remain.**

---

## B · The three things left unfinished when the site was built

All three are **closed**. Kept here because the notes explain *why* the site is
the way it is.

### B1 — Social links

Originally all four footer links in `src/components/Footer.tsx` pointed at `"#"`.

- [x] **B1 done** — real links are in place and were verified live. Crown Code
      Collective is on **Instagram** and **TikTok**; the accounts that don't
      exist were **removed from the footer** rather than left as dead links.
      External links open in a new tab with `rel="noopener noreferrer"`.

**If a social account is ever added or changed:** follow
`docs/EDIT_THE_SITE.md` § Social links, use full addresses starting `https://`,
and then click every link on the live site. A typo looks exactly like a working
link until someone clicks it.

---

### B2 — The About intro

The "What is Crown Code Collective?" paragraphs on the Home page were originally
written in-voice as a stand-in, to be replaced with the organization's own
wording.

- [x] **B2 done** — replaced with her own copy, verbatim, in
      `src/sections/AboutIntro.tsx`. Structure and `className` values unchanged.

**⚠️ Do not reword this section.** It is the organization's own description of
itself. Same rule as the Mission.

**⚠️ Do not touch the Mission statement.** The italic mission on the Home page
(`src/sections/Mission.tsx`) is verbatim locked copy. It is the one italic
moment on the entire site. Leave it exactly as it is.

---

### B3 — The crest

The DNA-crown emblem was **rebuilt by eye** from available artwork. It is not an
official vector logo. It appears in the header, the footer, and on the About
page — so if any detail is wrong, it's wrong everywhere at once.

- [x] **B3 done** — reviewed and confirmed correct by the owner. No official
      vector file exists, so the rebuilt artwork stands **by decision, not by
      default**.

**If an official logo file ever turns up:** replace `public/emblem-full.png` and
`public/emblem-mark.png`, keeping the same filenames. A vector (`.svg`, `.ai`,
`.eps`) can be used directly and is better — convert it properly rather than
guessing.

---

## C · Handover housekeeping 👤

These close the loop on the previous setup. Do them **after** the site is
confirmed live on the real address, never before.

- [ ] **C1 — Export the old email signups from the previous host.**
      Before the domain was pointed here it showed a "launching soon" page with
      a *Sign up for updates* form. **Real people signed up on it.** Export that
      list. Once the page is gone, so is the list — and those are Crown Code
      Collective's earliest supporters.

- [ ] **C2 — Cancel the old website subscription** so it stops charging.
      ⚠️ Cancel the **website builder**, not the domain name, if the domain is
      registered at the same provider. If it's unclear which is which, stop and
      check rather than guessing — cancelling the domain would be very bad.

- [ ] **C3 — Have the old staging site deleted.** Until it's gone there are two
      copies of the website on the internet, and someone will eventually link to
      the wrong one.

- [ ] **C4 — Confirm the form notification email works for real.**
      Submit a genuine test through both the Partners and the Alumni forms on
      the live site and confirm the email actually lands. If `docs/GO_LIVE.md`
      phase 3 was done properly this is already true — re-confirm it anyway.
      Silently broken form notifications are the single most expensive failure
      on a site like this: someone reaches out, and nobody ever knows.

---

## When every box is ticked

Tell the owner, in plain words, that the site is live on the real address, the
social links work, the words are hers, where form submissions arrive, and that
the email was never touched.

Then commit this file one last time so the finished state is recorded.
