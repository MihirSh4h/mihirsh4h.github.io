# Mihir Shah personal website

An understated personal website about work across medicine, translational
research, clinical AI, healthcare innovation, public policy, and disability
access.

## What is included

- A concise homepage with a headshot and profile links
- A publications page with all 19 publications from the July 2026 CV
- A Thoughts index with four complete, sourced essays
- An individual page for each essay
- Responsive layouts for desktop, tablet, and mobile
- A small server-rendering test suite

## Pages

- `/` for the main profile and career narrative
- `/publications` for the full publication record
- `/thoughts` for the writing index
- `/thoughts/[slug]` for individual essays

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local address printed in the terminal.

## Make updates

- Homepage content: `app/page.tsx`
- Publication records: `app/publication-data.ts`
- Essays and sources: `app/content.tsx`
- Visual system: `app/globals.css`
- Site metadata: `app/layout.tsx`
- Headshot: `public/mihir-shah-headshot.jpg`

To add a publication, place a new entry at the top of
`app/publication-data.ts`. Include its year, authors, title, journal, and DOI.
The Publications page will group it under the correct year automatically.

## Verify before publishing

```bash
npm run build
npm run lint
node --test tests/rendered-html.test.mjs
```

The repository can be pushed to GitHub as-is. It uses the vinext Cloudflare
Worker build included with the starter and can be connected to a compatible
Cloudflare deployment workflow later.
