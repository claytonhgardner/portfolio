# Clayton Gardner — Portfolio

Single-page portfolio site built with [Astro](https://astro.build) and Tailwind CSS,
edited through [Pages CMS](https://pagescms.org) and hosted free on GitHub Pages.

**Live site:** https://claytonhgardner.github.io/portfolio/

---

## Editing the site (no code needed)

1. Go to **https://app.pagescms.org** and sign in with GitHub.
2. Open the **portfolio** repository.
3. Choose what to edit:
   - **Site info**: name, contact details, bio, capabilities, tools, closing statement.
   - **Projects**: each case study or gallery on the page.
   - **Media**: upload or replace images.
4. Click **Save**. The site rebuilds automatically and updates in about 1–2 minutes.
   You can watch progress under the repo's **Actions** tab on GitHub.

### Tips

- **Order:** projects appear by their *Order on page* number (10, 20, 30…). To put
  a new project between two others, give it a number in between (e.g. 25).
- **Drafts:** turn on *Hide from site* to keep a project without showing it.
- **Layouts:**
  - *Case study*: images on the left, text sections (Challenge, My Role, Solution…) on the right.
    Optional *Detail panel* adds a second panel underneath (like the Canare page).
  - *Gallery*: a grid of items, each with one or more images and a caption.
- **Alt text:** every image asks for a short description. Describe what's in the image
  for people using screen readers, e.g. "Trade show booth with blue hexagon walls."
- **Image sizes:** upload images about **2000px on the long side** (JPG for photos,
  PNG for screenshots, SVG for logos). The site automatically creates smaller,
  faster versions for phones.
- **If a save breaks the build** (for example, an image was deleted but a project
  still uses it), the live site keeps showing the last working version. The error
  appears in the **Actions** tab.

---

## Developing locally

Requires Node.js 22+.

```bash
npm install
npm run dev       # http://localhost:4321/portfolio/
npm run build     # production build in dist/
npm run preview   # preview the production build
```

### Project structure

```
.pages.yml                   Pages CMS configuration (editor fields)
.github/workflows/deploy.yml Build + deploy to GitHub Pages on every push to main
astro.config.mjs             Site URL and base path
src/content/site/index.md    Site info (name, bio, contact…)
src/content/projects/*.md    One file per project
src/content.config.ts        Content schema (validates CMS data at build time)
src/assets/images/           All images (CMS uploads land here)
src/components/              Page sections
src/styles/global.css        Palette, fonts, chevron shape
```

### Custom domain

If a custom domain is connected later: set `site` to the domain in
`astro.config.mjs`, remove the `base` line, and add the domain under
**Settings → Pages** on GitHub.

### Fonts

The PDF portfolio uses Gotham, which requires a paid web license. The site uses
Montserrat (self-hosted via Fontsource) as a close free substitute. To switch,
change `--font-sans` in `src/styles/global.css`.
