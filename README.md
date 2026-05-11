# Guoqing Zhang Portfolio

Personal robotics portfolio for Guoqing Zhang, hosted with GitHub Pages at:

https://guoqingzhangwade.github.io

The site is a static HTML/CSS portfolio focused on robotics controls, estimation, real-time systems, and continuum/medical robotics research.

## Current Content

- Ph.D. Mechanical Engineering positioning, updated after the April 30, 2026 thesis defense
- Latest resume link: `files/Resume_Guoqing_2026_v2.pdf`
- Johnson & Johnson and Auris Health robotics R&D experience
- Stevens Ph.D. research projects on shape, force, and wrench estimation
- Updated publication status for the accepted IEEE/ASME TMECH/AIM Focused Section paper and AIM presentation
- Lightweight optional GoatCounter analytics wiring

## File Structure

```text
Guoqingzhangwade.github.io/
|-- index.html
|-- style.css
|-- analytics.js
|-- README.md
|-- files/
|   |-- Resume_Guoqing_Zhang.pdf
|   |-- Resume_Guoqing_2026_v1.pdf
|   `-- Resume_Guoqing_2026_v2.pdf
|-- images/
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

Most content lives in `index.html`.

- Hero summary, links, and recent milestones are near the top of the file.
- Project cards are in the `Featured Projects & Experience` section.
- Publication entries are in the `Selected Publications` section.
- The resume button currently points to `files/Resume_Guoqing_2026_v2.pdf`.

Visual styling lives in `style.css`.

- Colors and spacing are defined in the `:root` block.
- Responsive behavior is handled by the media queries at the bottom.
- Project and showcase image sizing is controlled by `.showcase-image`, `.project-image`, and related utility classes.

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
- Proofread publication statuses before sending the site with job applications.

## Last Updated

May 2026
