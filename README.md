# Site source

Plain HTML/CSS, no build step, no framework. That's deliberate: it means
every byte a search or AI crawler sees is exactly what's in these files —
nothing generated at request time, nothing that needs JavaScript to render.

## Files

- `index.html` — homepage
- `about.html` — bio & credentials
- `styles.css` — shared stylesheet for every page
- `robots.txt` — explicitly allows the major AI/search crawlers (some
  hosts and CDNs block them by default now)
- `sitemap.xml` — lists every page, so Search Console / Bing Webmaster
  Tools can index them on purpose rather than by chance

**Before this goes live:** replace every `example.com` (in `index.html`,
`about.html`, `robots.txt`, `sitemap.xml`) with your real domain, and
replace `REPLACE_WITH_YOUR_EMAIL@example.com` in `index.html` with a real
address.

## Adding a page

Copy `about.html`, keep the `<header>`, `<link>` tags, and `<footer>`
exactly as they are (that's what keeps every page styled and navigable
the same way), change everything inside `<main>`, and add a line for it
in `sitemap.xml`. Add the new page to the `<nav>` in *every* HTML file
once it's ready to be public — an unlinked page with no incoming link is
much harder for a crawler to find.

## The Git loop

Once the repo is cloned locally and these files are in it:

```bash
git add .
git commit -m "describe what changed, e.g. 'add about page'"
git push
```

That's the whole cycle. `add` stages what changed, `commit` saves a
snapshot with a message (this is your history — future-you will thank
present-you for writing real messages, not "update"), `push` sends it to
GitHub, which Cloudflare Pages then deploys automatically.

To check what changed before you commit: `git status` (what's staged/
unstaged) and `git diff` (the actual line-by-line changes). Getting in
the habit of reading `git diff` before every commit is worth more than
any Git tutorial — it's where you actually see what you did.
