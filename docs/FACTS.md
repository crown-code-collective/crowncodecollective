# FACTS — the verified setup

Don't trust a line here that you can verify in five seconds — verify it. The
commands to re-check each fact are included.

---

## The domain

**`crowncodecollective.com`** — owned by Crown Code Collective.

DNS is managed through **Google** (Google Domains / Squarespace, or the Google
Cloud DNS console). The owner holds that login.

Check the current state rather than trusting a written value:

```bash
nslookup -type=NS crowncodecollective.com 8.8.8.8
nslookup -type=A  crowncodecollective.com 8.8.8.8
nslookup -type=MX crowncodecollective.com 8.8.8.8
```

### 🔴 The email rule — the most important line in this repository

**Crown Code Collective runs Google Workspace email on this same domain.**

The website and the email travel on the same domain but on *different* DNS
records. Changing the web records does not affect email — **provided only the
web records are changed.**

| Record type | In scope for web work? |
|---|---|
| apex `A` | ✅ yes — this is the website |
| `www` | ✅ yes — this is the website |
| `MX` | 🔴 **NEVER** — this is all of their email |
| `TXT` SPF (`v=spf1 …`) | 🔴 **NEVER** — removing it sends their mail to spam |
| `TXT` `google-site-verification…` | 🔴 never — proves domain ownership |
| `*._domainkey` | 🔴 never — email signing |

If any tool offers to "clean up old records" or "move your domain to Netlify /
switch your nameservers," **decline**. Netlify DNS would move the whole domain
and take the email with it. Point two records instead; leave everything else
untouched.

After any DNS change, check the MX record still resolves — every single time.

### Note before the domain is repointed

The address previously served a "launching soon" page with a signup form that
**collected real email addresses**. Export that list before the page goes away,
and cancel the old website subscription afterwards so it stops billing. See
`docs/OPEN_ITEMS.md` § C.

---

## Hosting

**Netlify**, free tier.

- Build command: `npm run build`
- Publish directory: `dist`
- **Base directory: blank** — the site is at the repo root
- Both settings are already declared in `netlify.toml`; Netlify reads them
  automatically. The only way to get this wrong is to type a base directory into
  the Netlify UI when there shouldn't be one.
- Node: Netlify's default is fine. If a build ever fails on a Node version, set
  `NODE_VERSION = "20"` in `netlify.toml`.

Deploys are automatic: push to `main` → Netlify rebuilds.

### If you ever deploy by manual upload instead

Zip the **contents** of `dist` (not the folder itself), and make sure the
archive uses **forward slashes**. PowerShell's `Compress-Archive` writes Windows
backslashes into the zip, which Netlify reads as literal filenames — the deploy
reports success and then 404s on every route. Zip from File Explorer's
*Send to → Compressed folder*, or build the archive with
`System.IO.Compression.ZipArchive` replacing `\` with `/` in each entry name.

---

## Forms

Two Netlify Forms live on the **Join** page (`src/pages/Join.tsx`):

| Form name | What it's for |
|---|---|
| `partners` | Partnership interest |
| `alumni` | Alumni network signups |

Both use a honeypot field (`bot-field`) for spam. Submissions land in the
Netlify dashboard under **Forms**.

**Netlify only detects forms on a deploy that happens *after* the Forms feature
is switched on, and only on a real build from the repository** — a manual upload
skips form detection entirely. If forms don't appear, turn the feature on and
trigger a fresh build. The code is already correct.

---

## The code

| Where | What |
|---|---|
| `src/pages/` | The three pages: Home, About, Join |
| `src/sections/` | The blocks that make up those pages |
| `src/components/` | Reusable pieces — header, footer, emblem, animations |
| `src/index.css` | Colors, fonts, textures |
| `public/media/` | Hero video (`.mp4` + `.webm`) and its poster image |
| `public/` | The emblem images and the SPA redirect rule |

---

Owned by Crown Code Collective.
