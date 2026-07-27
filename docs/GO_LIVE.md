# GO LIVE — putting the site on crowncodecollective.com

This is the one-time job that takes the finished website and puts it on Crown
Code Collective's real web address, with the owner owning every piece of it.

**Read `CLAUDE.md` first if you haven't.** The rules about email and passwords in
there apply to every step below.

---

## How to run this

There are seven phases. Some you can do; some only the owner can do, because they
need her passwords or her card. They're marked:

- **🤖 AGENT** — you do this
- **👤 OWNER** — she does this, you tell her exactly what to click and then
  verify the result

**Work in order. Don't skip ahead** — phase 6 will fail if phase 5 hasn't
happened, and it will fail in a way that looks like a broken website.

**Keep the checklist below updated** as you go. Edit this file, tick the boxes,
and commit. If the session ends halfway through, the next session reads the
checklist and picks up exactly where you left off.

### Checklist

- [x] **Phase 1** — Code is in the organization's GitHub
      *Done. The repository is owned by the **crown-code-collective org**, not
      an individual account, so it survives any one person leaving.*
- [x] **Phase 2** — Netlify is building it from that repo
- [ ] **Phase 3** — Forms are on and email notifications work
      *Netlify Forms are only detected on a real build from the repository — a
      manual upload skips detection entirely.*
- [x] **Phase 4** — Pre-flight fixes done (social links, anything else)
      *All of `docs/OPEN_ITEMS.md` section B is closed.*
- [ ] **Phase 5** — Domain added in Netlify
- [ ] **Phase 6** — DNS records changed at Google
- [ ] **Phase 7** — Verified live, and the old setup is cleaned up

---

## Phase 1 — Get the code into the owner's GitHub

**Why:** whoever owns the repository owns the website. This is the step that
makes the handover real.

### 👤 OWNER

1. If she doesn't have one, create a free account at **github.com** (two
   minutes, no card).
2. Tell the agent her **GitHub username**.

### 🤖 AGENT

First find out which situation you're in:

```bash
git remote -v
```

**If that prints nothing, or errors with "not a git repository"** — this arrived
as a folder or a zip file, which is the normal case. There's no version history
and no GitHub yet, and this is the phase that creates both.

**If it prints an address with her username in it** — this phase is already done.
Confirm and move on.

**If it prints an address with someone else's username** — the repo needs to
become hers before you push anything to it.

#### Creating her repository

**👤 OWNER:** on github.com, click **New repository**. Name it
`crowncodecollective`. Set it **Private** unless she wants it public. **Do not**
tick "Add a README" — this folder already has one, and ticking that box causes a
conflict. Click **Create**, then give the agent the address it shows.

**🤖 AGENT:** connect this folder to it and push. If `git remote -v` printed
nothing at all, initialise first:

```bash
# only if this isn't a git repo yet:
git init -b main && git add -A && git commit -m "Crown Code Collective website"

# then, in every case:
git remote add origin https://github.com/<HER-USERNAME>/crowncodecollective.git
git push -u origin main
```

If a remote already exists and points somewhere else, use
`git remote set-url origin …` instead of `git remote add`.

> The push will ask her to sign in to GitHub. **She types that, not you** — see
> the credentials rule in `CLAUDE.md`.
>
> Alternatively the current owner can transfer the existing repo: on GitHub →
> **Settings** → **Danger Zone** → **Transfer ownership** → her username. She
> accepts by email. This keeps the history, but it needs him; creating fresh
> needs only her.

**Verify:** the repo loads at `github.com/<her-username>/crowncodecollective` and
shows this file. Tick the box.

---

## Phase 2 — Point Netlify at the repository

**Why:** this is what makes the site update itself. After this, any change that
gets pushed to GitHub is live on the website a minute later, with no one
uploading anything by hand.

### 👤 OWNER

1. Sign in at **app.netlify.com**.
2. **Add new site** → **Import an existing project** → **GitHub**. Approve the
   permission screen GitHub shows her.
3. Pick the **crowncodecollective** repository.
4. On the settings screen, confirm:
   - Branch: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
   - **Base directory: LEAVE IT BLANK** ← the one that breaks things
5. **Deploy**.

> Netlify will fill most of that in by itself, because `netlify.toml` in this
> repo tells it what to do. She's confirming, not inventing.

### 🤖 AGENT

The first build takes two or three minutes. When it finishes, ask her for the
temporary web address Netlify gave her — it looks like
`something-random-123.netlify.app`. **Write it down in `docs/FACTS.md`**, you'll
need it in phase 6.

**Verify** the site is really being served:

```bash
curl -sS -o /dev/null -w "status=%{http_code}\n" https://<HER-NETLIFY-URL>
```

`200` means it's up. Then confirm it's actually *this* site and not a Netlify
placeholder:

```bash
curl -sS https://<HER-NETLIFY-URL> | grep -o "<title>[^<]*</title>"
```

Expect `<title>Crown Code Collective</title>`.

**If the build failed:** read the Netlify build log before changing anything.
Nine times out of ten it's a base directory that isn't blank. Fix that first.

---

## Phase 3 — Turn on the forms and get the emails flowing

**Why:** the Join page has two forms. Without this phase, people fill them in,
the submissions land in a dashboard nobody opens, and Crown Code Collective
never knows anyone reached out. This is the step most handovers forget.

### 👤 OWNER

1. In Netlify: her site → **Forms**. If it says the feature is off, **enable
   it**.
2. Then, in **Forms** → **Form notifications** → **Add notification** → **Email
   notification** — enter the address that should be told when someone applies.
3. Tell the agent which address she used.

### 🤖 AGENT

**Netlify only finds forms during a deploy that happens after the feature is
switched on.** If enabling it was necessary, trigger a fresh deploy — an empty
commit is enough:

```bash
git commit --allow-empty -m "Redeploy so Netlify detects the forms"
git push
```

**Verify:** after the deploy, Netlify's **Forms** tab should list two forms named
**`partners`** and **`alumni`**. If it lists none, the deploy happened before
the feature was on — redeploy again.

Then have her submit one real test through the Join page and confirm the email
actually arrives. A form that's "configured" but never tested is not done.

Record the notification address in `docs/FACTS.md`.

---

## Phase 4 — Pre-flight fixes

**Why:** these are cheap now and embarrassing later. Do them *before* the real
address points here, not after.

### 🤖 AGENT

**Go and do section B of `docs/OPEN_ITEMS.md` now — all three items.** They are
the things left unfinished when the site was built: the placeholder social
links, the About-intro wording that isn't hers yet, and the crest that was
rebuilt by hand rather than supplied as a logo file. Each one has the exact
question to ask her and what to do with the answer.

They're listed there rather than repeated here so there's only ever one list to
tick.

Then ask her, plainly: *"Before this goes on your real address — is there any
wording, photo, or name on the site you want changed?"* Handle whatever comes
back using `docs/EDIT_THE_SITE.md`. It is much easier to change now than during
the week the site goes public.

**Verify:** `npm run build` passes, the change is pushed, and the live temporary
URL shows it.

---

## Phase 5 — Add the domain in Netlify

### 👤 OWNER

1. Netlify → her site → **Domain management** → **Add a domain**.
2. Enter `crowncodecollective.com`.
3. Netlify will ask whether to use **Netlify DNS** (it may call it "delegate to
   Netlify" or offer to change nameservers). **Choose the other option** — the
   one about pointing existing DNS, sometimes labeled "Add domain" or "I'll
   manage DNS elsewhere."

> 🔴 This is the email-safety step. Netlify DNS would move the whole domain to
> Netlify, and Crown Code Collective's Google Workspace email lives on that
> domain. Pointing two records keeps the email untouched. If she has already
> clicked the nameserver option, stop and tell her — it needs undoing before
> anything else happens.

4. Netlify then shows **the exact DNS records to create**. Have her copy them
   down or screenshot them, and give them to the agent.

### 🤖 AGENT

Netlify's printed values are the truth — use them over anything written here.
For reference, they're normally:

- Apex `crowncodecollective.com` → `A` record → `75.2.60.5`
- `www` → `CNAME` → her `*.netlify.app` address from phase 2

Netlify will also say the domain isn't verified yet. That's expected until
phase 6 is done.

---

## Phase 6 — Change the DNS at Google

This is the cutover. The moment these records update, the the previous host placeholder
stops being the website and this site takes its place.

### 👤 OWNER — and only her, this needs her Google login

Sign in wherever the domain's DNS is managed — Google Domains / Squarespace, or
the Google Cloud DNS console. (The nameservers are `ns-cloud-c1…c4
.googledomains.com`, so it's one of those.)

**Change exactly two records. Touch nothing else.**

| Record | Name / host | Change it to |
|---|---|---|
| `A` | `@` (or blank — the domain itself) | the Netlify IP from phase 5 |
| `CNAME` | `www` | her `*.netlify.app` address |

The `A` record currently says `the previous placeholder IP` — that's the previous host. It gets
replaced.

### 🔴 Do not touch these, no matter what any tool suggests

| Record | Value | What it does |
|---|---|---|
| `MX` | `smtp.google.com` | **All Crown Code Collective email.** Removing this stops mail instantly. |
| `TXT` | `v=spf1 include:_spf.google.com ~all` | Proves their email is genuine. Removing it sends their mail to spam. |
| any `TXT` starting `google-site-verification` | — | Proves they own the domain |
| any record named `*._domainkey` | — | Email signing |

If a cleanup tool offers to "remove old records," decline. The only two records
in scope are the `A` and the `www`.

### 🤖 AGENT

DNS changes take anywhere from a few minutes to a few hours to spread. Check —
don't guess:

```bash
nslookup -type=A crowncodecollective.com 8.8.8.8
nslookup -type=MX crowncodecollective.com 8.8.8.8
```

The `A` should show the Netlify IP. **The `MX` must still show
`smtp.google.com`** — check this every single time, and if it's gone, say so
immediately and loudly. That's their email.

While waiting, Netlify's Domain management page will move from "awaiting
configuration" to verified and issue an HTTPS certificate on its own. That can
take up to an hour after DNS resolves. Don't intervene.

---

## Phase 7 — Verify, then clean up

### 🤖 AGENT — verify all of it

```bash
# The real address serves the real site, over HTTPS
curl -sS -o /dev/null -w "status=%{http_code} final=%{url_effective}\n" -L https://crowncodecollective.com
curl -sS https://crowncodecollective.com | grep -o "<title>[^<]*</title>"

# www goes to the same place
curl -sS -o /dev/null -w "status=%{http_code} final=%{url_effective}\n" -L https://www.crowncodecollective.com

# Deep links work (this is what the SPA redirect rule is for)
curl -sS -o /dev/null -w "about=%{http_code}\n" -L https://crowncodecollective.com/about
curl -sS -o /dev/null -w "join=%{http_code}\n"  -L https://crowncodecollective.com/join

# Email is untouched
nslookup -type=MX crowncodecollective.com 8.8.8.8
```

Everything should be `200`, the title should read **Crown Code Collective**, and
the MX should still be `smtp.google.com`.

Then check by hand, because these can't be checked with a command:

- [ ] Open the site on a **phone**. The hero shows the whole family, the header
      is readable, and the page animates.
- [ ] Submit **one real test** through each form and confirm the notification
      email arrives.
- [ ] Have the owner **send and receive one email** on her Crown Code Collective
      address.
- [ ] Click every footer social link.

### 👤 OWNER — after it's confirmed working, not before

- [ ] **Export the email signups from the the previous host placeholder** — people who
      signed up on the old "launching soon" page. Once that page is gone, so is
      the list.
- [ ] **Cancel the the previous host website subscription** so it stops charging. Cancel
      the *website builder*, not the domain, if the domain is registered there.
- [ ] Have the **old staging site deleted** so there's only ever one real
      version of the website on the internet.

---

## When it's finished

Tick every box, commit this file, and tell the owner in plain words:

> Your website is live at **https://crowncodecollective.com**. Form submissions
> go to **<her address>**. Your email was not touched and is still working. To
> change anything on the site, open this folder and ask.

If any box is still unticked, it isn't finished — say which one and why.
