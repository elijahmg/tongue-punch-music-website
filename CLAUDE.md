# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # Start dev server at localhost:4321
bun run build     # Build to dist/
bun run preview   # Preview the production build
```

## Architecture

**Astro 5 static site** using Tailwind CSS v4 (via `@tailwindcss/vite`) with no JavaScript framework.

**Pages:**
- `src/pages/index.astro` — main landing page (Menu → Hero → Live → SpotifyEmbed → InstaGallery)
- `src/pages/epk.astro` — Electronic Press Kit (bio, photos, Spotify embed, tech rider PDF, contact)

**Layout:** `src/layouts/Layout.astro` wraps all pages — handles SEO via `astro-seo`, JSON-LD `MusicGroup` schema, grain overlay, and a restrictive CSP header. The CSP allows Elfsight (Instagram widget), Spotify embeds, and Google Fonts only.

**Content collection:** Gig dates live in `src/data/gigs.json` and are typed via `src/content.config.ts`. The `Live.astro` component reads them with `getCollection('gigs')`. To add/remove shows, edit only `gigs.json`.

**Design tokens** (Tailwind v4 `@theme` in `src/styles/global.css`):
- `brand-black` `#191919`, `brand-white` `#f0f0f0`, `brand-accent` `#DA24FF` (Electric Fuchsia)
- Display font: Anton SC (`font-display` class); body: Inter

**Instagram gallery** (`InstaGallery.astro`) is powered by an Elfsight widget loaded via `<script src="https://elfsightcdn.com/platform.js">` — not managed in this repo.
