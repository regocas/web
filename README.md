# Fundación Martina

Website for Fundación Martina, a non-profit foundation funding research into ataxias and
rare diseases related to the VPS13D gene. Static site built with
[Eleventy (11ty)](https://www.11ty.dev/).

## Requirements

- Node.js
- npm

## Getting started

```
npm install
npm start          # dev server with live reload, http://localhost:8080
npm run build      # production build, outputs to _site/
```

## Languages

The site is available in Spanish (`es`, default), Galician (`gl`) and English (`en`),
under `/es/`, `/gl/`, `/en/`. Language is handled via the Eleventy i18n plugin
(`eleventyConfig.addPlugin(EleventyI18nPlugin, ...)` in `eleventy.config.js`).

## Editing content

Structural markup lives in the `.njk` templates; the actual copy lives in data files, one
per content type, each keyed by locale (`es` / `en` / `gl`):

| File | Contents |
|---|---|
| `src/_data/site.js` | Site name, tagline, production URL, locale list |
| `src/_data/i18n.js` | Nav labels, footer, misc UI strings |
| `src/_data/home.js` | All homepage prose (hero, donate banner, foundation intro/pillars, section eyebrows) |
| `src/_data/events.json` | Upcoming events |
| `src/_data/projects.json` | Research projects listed under "Research" |
| `src/_data/docs.json` | Downloadable foundation documents (title/description/PDF path) |

News articles are individual Markdown files under `src/{lang}/news/*.md`. Each translated
version of the same story shares a `translationKey` in its front matter — this is what
lets the language switcher jump to the equivalent article instead of just the homepage
when you're reading one.

Adding a news article, event, project, or document does not require touching any
template — just add an entry to the relevant data file / a new Markdown file.

**Missing translations:** if an `en`/`gl` entry is missing or incomplete in `home.js`,
`events.json`, `projects.json`, or `docs.json`, that page falls back to the Spanish
version automatically (see the `withFallback` filter in `eleventy.config.js`) rather than
rendering blank. This does not apply to news articles, since falling back would mean
showing a Spanish-language article inside another locale's page.

## Deployment

Pushing to `main` builds the site and publishes it to the `gh-pages` branch via
`.github/workflows/deploy.yml`. One-time setup on GitHub, after that branch exists:
**Settings → Pages → Build and deployment → Source: Deploy from a branch → `gh-pages` /
`(root)`**.

Each pull request from a branch in this repo also gets a preview, built by
`.github/workflows/preview.yml` into `gh-pages` under `pr-preview/pr-<number>/` (e.g.
`https://<user>.github.io/<repo>/pr-preview/pr-12/`). A bot comment on the PR links to
it, and the preview is removed when the PR is closed or merged. PRs from forks don't get
previews, since their workflow token can't push to `gh-pages`.

Without a custom domain, a GitHub Pages project site is served from
`https://<user>.github.io/<repo>/`, not the domain root — so the workflow builds with
`PATH_PREFIX=/<repo-name>/` (via `pathPrefix` in `eleventy.config.js`), which every
internal link/asset path in the templates respects through the `url` filter. Adding a
`CNAME` file at the repo root (Settings → Pages → Custom domain) switches this back to
`/` automatically on the next deploy (previews included), and the workflow copies it
into `gh-pages` so the custom domain survives each deploy — no other changes needed.

## License

Code is licensed under [MIT](LICENSE). Written content (homepage copy, news articles) is
licensed under [CC BY 4.0](CONTENT-LICENSE.md); brand assets and governance PDFs are not
covered by either license — see [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md) for details.

## Notes

- `src/_data/site.js` `url` is the production domain (`https://lafundacionmartina.org`),
  used for canonical links, hreflang, the sitemap, and Open Graph tags.
- The English and Galician homepages and the one example research project in
  `projects.json` were added as a translation trial; the project entry is placeholder
  content and should be reviewed/replaced with real data before launch.
- `brand/` at the repo root holds the original source logo files (PNG); `src/assets/img/`
  holds the web-optimized assets actually used by the site.
