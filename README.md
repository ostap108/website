# Your site

This folder is the whole website. You write in plain text (Markdown),
push it to GitHub, and GitHub turns it into finished web pages for you.
You never edit HTML.

---

## The only folder you touch: `src/`

Everything you'll ever change lives in `src/`:

- `index.njk` — the **Home** page (Головна)
- `about.md` — **Про мене**
- `how-i-work.md` — **Як я працюю**
- `articles.njk` — the **Статті** list page (builds itself — leave it alone)
- `contact.njk` — **Контакт**
- `articles/` — your articles, one file per article
- `styles.css` — colours and fonts (change only if you want a new look)
- `_data/site.json` — your name, email, and domain in one place
- `_includes/` — the shared page frame. **Leave this alone** unless you
  want to change the header/footer on every page at once.

The files starting with a dot (`.eleventy.js`, `.github/`, `.gitignore`)
are the machine. You don't touch them. Ever.

Anything named `_site` is the finished site, rebuilt automatically. Never
edit it by hand — your changes there get wiped on the next build.

---

## Your weekly routine: publishing an article

1. Go into `src/articles/`.
2. Copy the existing article file and rename the copy. Use the pattern
   `YEAR-MONTH-DAY-short-name.md`, e.g. `2026-02-08-panichni-ataky.md`.
3. Open it. Change the three lines at the top:
   - `title:` the article's title
   - `description:` one sentence (used by search engines)
   - `date:` the date, as `YEAR-MONTH-DAY`
4. Write below the top block. A blank line starts a new paragraph.
   `## Heading` makes a heading. That's most of what you need.
5. Save. Then, in Terminal, from this folder:
   ```
   git add .
   git commit -m "new article: panic attacks"
   git push
   ```
6. Wait about a minute. The article is live, and it's added itself to the
   Статті list automatically. You did not touch any HTML.

That's it. That's the whole point of this setup.

---

## Getting it online the FIRST time (the hard part, once)

1. Put **all** of these files into your `website` repo folder, replacing
   the old plain-HTML files (delete the old `index.html`, `about.html`,
   `styles.css` from before — these replace them).
2. In Terminal, from the folder:
   ```
   git add .
   git commit -m "switch site to Eleventy"
   git push
   ```
3. On github.com, open your repo → **Settings** → **Pages** (left menu).
   Under **Source**, choose **GitHub Actions**. (This is different from
   what you set before — it must be "GitHub Actions", not "Deploy from a
   branch", or the build has nowhere to publish.)
4. Open the **Actions** tab of your repo. You'll see your push building:
   - yellow dot = building
   - green check = done, site is live
   - red X = something failed — click it, copy the error, send it to me
5. When it's green, your site is at:
   `https://ostap108.github.io/website/`

If the very first run failed only because Pages wasn't switched on yet,
just re-run it: Actions tab → click the failed run → "Re-run all jobs".

---

## When you connect ostapstepaniuk.com

Two small changes, and I'll walk you through them when you're there:

1. In `.eleventy.js`, change `pathPrefix: "/website/"` to `pathPrefix: "/"`.
2. Add a one-line file named `CNAME` containing your domain, and point the
   domain at GitHub. (I'll give exact steps at that point.)
