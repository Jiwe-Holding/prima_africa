# PRIMA AFRICA — corporate website

Corporate website (React + Vite) for PRIMA AFRICA: market research, fieldwork, data and consulting.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  content/site.js      ← all copy (expertise, methods, figures, offices, image paths)
  styles/global.css    ← design tokens (colours, type, buttons)
  components/          ← Header (mega menu), Hero, Footer, GroupWheel, Sections…
  pages/               ← Home, Group, Expertise (template for the 6 BUs), Contact, NotFound
public/images/         ← photos (WebP)
```

Routes: `/`, `/our-group`, `/expertise/:slug` (market-research, business-consulting, strategy,
economics-policy, expert-opinion, artificial-intelligence), `/contact`.

## Contact form

Copy `.env.example` to `.env` and set `VITE_CONTACT_ENDPOINT` (the form sends a JSON POST).
Without it, submission is simulated in development and shows an error in production.

## Deployment

This is a SPA: rewrite all routes to `index.html` (`public/_redirects` is provided for Netlify;
use `rewrites` on Vercel or `.htaccess` on Apache).

## Photo credits

All photos come from [Pexels](https://www.pexels.com/license/) (free for commercial use, no attribution required).
Pexels photo IDs: field-interviewer 6280728 · cati-agent 5453822 · cati-agent-2 8204385 · call-center 7709242 ·
market-vendor 27874897 · community-meeting 30564957 · business-team 1367272 ·
focus-group 5685766 · data-analysis 6801647 · solar 356049 · agriculture 11350430 ·
contract 8470836 · ai 3861969 · mobile-user 3727472.
They are placeholders until PRIMA's own fieldwork photos are available.
