# Guoqing Zhang Portfolio

Personal robotics portfolio for Guoqing Zhang, hosted with GitHub Pages at:

https://guoqingzhangwade.github.io

The site is a static, multi-page HTML/CSS portfolio (no build step, no framework) focused on robotics controls, estimation, real-time systems, and continuum/medical robotics research.

## Current Content

- Ph.D. Mechanical Engineering positioning, updated after the April 30, 2026 thesis defense
- Incoming postdoctoral researcher at UC San Diego ECE (starting November 2026), working with Prof. Nikolay Atanasov and Prof. Tania Morimoto on an ARPA-H-funded soft continuum robot project
- Latest resume link: `files/Resume_Guoqing_2026_v2.pdf`
- Johnson & Johnson and Auris Health robotics R&D experience
- Stevens Ph.D. research projects on shape, force, and wrench estimation
- TMECH/AIM Focused Section paper published June 24, 2026 and presented at AIM 2026 (Genova); TRO paper presented by co-author Dr. Long Wang at IROS 2026 (Pittsburgh)
- Lightweight optional GoatCounter analytics wiring

## File Structure

```text
Guoqingzhangwade.github.io/
|-- index.html            (Home)
|-- about.html             (About + Technical Skills)
|-- news.html              (Full dated News feed)
|-- projects.html          (Research showcase + Featured Projects & Experience)
|-- publications.html      (Selected Publications)
|-- style.css
|-- analytics.js
|-- README.md
|-- files/
|   |-- Resume_Guoqing_Zhang.pdf
|   |-- Resume_Guoqing_2026_v1.pdf
|   `-- Resume_Guoqing_2026_v2.pdf
|-- images/
|   |-- profile.jpg
|   |-- favicon-32.png / favicon-192.png / favicon-512.png
|   |-- thumb-shape-estimation.jpg / thumb-shape-force.jpg  (publication thumbnails)
|   |-- Large_scale_continuum_testbed.jpg
|   |-- Small_scale_surgical_continuum_robot.jpg
|   |-- Robotic_guidewire_driving_system_rendered.png
|   |-- LAH_grasping_scenarios.png
|   |-- integrated_shape_force_sim_est.jpg
|   `-- other SVG/JPG project assets
|-- Laboratory Assistive Hand.pdf
`-- 4-26-2.mp4
```

## Editing Guide

The site is split into five pages that each repeat the same `<nav class="sitenav">` and `<footer>` markup (copy/paste, no templating) — if you change the nav links, update it in all five files.

- `index.html` (Home): hero (photo, tagline, contact links, recent milestones), a condensed "Now" section, and a 3-item News preview linking to `news.html`.
- `about.html`: full bio paragraphs + Technical Skills grid.
- `news.html`: the complete dated News feed, newest first. Add entries as `<li><time datetime="YYYY-MM-DD">...</time><span>...</span></li>` inside `.news-list`; mirror the newest 2-3 into `index.html`'s `.home-news-preview` list too.
- `projects.html`: Research Platforms showcase + Featured Projects & Experience (the old single-page sections, merged here).
- `publications.html`: publication cards. The two active papers use `.publication-media` (with a thumbnail in `images/`) and a `.publication-actions` button (DOI or arXiv link); older/in-prep entries are plain `.publication` cards with no thumbnail.
- The resume button currently points to `files/Resume_Guoqing_2026_v2.pdf`.
- Contact links row: Email, LinkedIn, GitHub, Google Scholar, and Resume (hero on Home only).

Visual styling lives in `style.css`.

- Colors and spacing are defined in the `:root` block.
- Nav styling is under `.sitenav` (the current page gets `.active`); the Home hero is `.hero` / `.hero-identity` / `.hero-photo`; inner-page banners use `.page-header`; News entries are under `.news-list` (full) / `.home-news-preview` (Home teaser).
- Responsive behavior is handled by the media queries at the bottom.
- Project, showcase, and publication thumbnail sizing is controlled by `.showcase-image`, `.project-image`, `.publication-thumb`, and related utility classes.

If a large image needs to be reused as a small thumbnail (as with the publication cards), render/resize it down first — don't link the original asset directly if it's multiple MB; see `images/thumb-shape-estimation.jpg` for an example (rendered down from a 23 MB SVG to 23 KB).

## Analytics

The portfolio includes optional GoatCounter analytics for:

- Home page visits
- Email, LinkedIn, GitHub, and resume clicks
- Laboratory Assistive Hand report and demo video clicks

Analytics are disabled by default. To enable them, edit this block in `index.html`:

```html
<script>
    window.portfolioAnalytics = {
        goatcounterSite: "guoqing-portfolio",
        allowLocal: false
    };
</script>
```

`goatcounterSite` can be a site code such as `guoqing-portfolio`, a host such as `guoqing-portfolio.goatcounter.com`, or a full endpoint such as `https://guoqing-portfolio.goatcounter.com/count`.

Keep `allowLocal: false` unless local test traffic should appear in analytics.

## Local Preview

Because this is a static site, opening `index.html` directly in a browser is usually enough.

For a closer GitHub Pages-style preview, run a simple local server from the repo root:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Pre-Deployment Checklist

- Confirm the resume link opens the newest PDF.
- Check project images on desktop and mobile widths.
- Verify external links for email, LinkedIn, GitHub, report, and demo video.
- Proofread publication statuses and news dates before sending the site with job applications.
- If you edited the nav or footer, confirm all five pages still match.

## Last Updated

October 2026
