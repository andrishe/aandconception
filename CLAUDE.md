# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site + blog for **LATALÉAAND** (French interior-design studio; the brand was renamed from « AAND Conception », so social URLs, the contact address and the watermark baked into `public/images/` still read `aandconception`). Next.js 15 App Router, React 19, TypeScript, Tailwind 3, Supabase (auth + Postgres + Storage). UI copy, comments and commit messages are in French.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml`).

```bash
pnpm dev      # dev server on :3000 (Turbopack)
pnpm build    # production build — the only real typecheck/lint gate
pnpm start    # serve the production build
pnpm lint     # next lint (eslint-config-next: core-web-vitals + typescript)
```

There is no test framework in this repo. `pnpm build` is what catches type and lint errors before deploy.

## Environment variables

Two Supabase clients read **different, non-interchangeable** variable names — this is the most common source of "works in the browser, fails on the server" bugs:

| Consumer | Variables |
| --- | --- |
| [src/utils/supabase/clients.ts](src/utils/supabase/clients.ts) (browser) | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| [src/utils/supabase/server.ts](src/utils/supabase/server.ts) and [src/utils/supabase/middleware.ts](src/utils/supabase/middleware.ts) | `SUPABASE_URL`, `SUPABASE_ANON_KEY` (no `NEXT_PUBLIC_` prefix) |

Also `NEXT_PUBLIC_ACCESS_KEY` — Web3Forms key for the contact form ([src/app/Contact/page.tsx](src/app/Contact/page.tsx)).

**Supabase is optional at runtime.** When either pair of variables is missing, the app degrades instead of crashing: [clients.ts](src/utils/supabase/clients.ts) swaps in an offline stub (chainable query builder + auth/storage no-ops) and exports `isSupabaseConfigured`, the middleware skips the session refresh, and [server.ts](src/utils/supabase/server.ts) throws a readable error only when the login action actually runs. So `pnpm dev` and `pnpm build` both work with no `.env` at all — the blog just renders an empty list and login fails with a clear message. Re-enable the real backend purely by adding the variables; no code change.

The Supabase project hostname is **hardcoded** in [next.config.ts](next.config.ts) under `images.remotePatterns`. Pointing at a different Supabase project requires editing that file or `next/image` will refuse post images.

## Architecture

### Routing conventions
Route folders are **capitalized French names** (`/Apropos`, `/Services`, `/Blog`, `/Contact`, `/Signin`, `/Error`), and URLs are case-sensitive. Any new link must match the folder casing exactly and be added to `navbarLinks` in [src/data/data.ts](src/data/data.ts), which drives the `Navbar`.

`/Apropos` is now a **redirect** to `/#apropos`: its "Qui suis-je ?" copy was merged into the homepage About section and lives in `about` in [data.ts](src/data/data.ts). The route is kept so old links and bookmarks still resolve, and so the same text is not served at two URLs.

`/Blog`, `/Blog/Create` and `/Signin` are **unlinked on purpose** — the client asked for Blog and Connexion to be removed from the navigation. The routes still work by URL (that is how an admin publishes), so keep them building; don't delete them and don't re-add them to `navbarLinks` without being asked.

The `Accueil.tsx` directory — [src/app/Accueil.tsx/page.tsx](src/app/Accueil.tsx/page.tsx) — is a page component (the older video hero) that is currently not imported anywhere, so it only serves the stray `/Accueil.tsx` route. Leave it in place.

The `Projects` and `Process` sections carry `id="portfolio"` / `id="processus"` anchors, but nothing links to them — the nav is route-only.

[layout.tsx](src/app/layout.tsx) owns the chrome: it renders the skip link, `<Navbar>`, a single `<main id="contenu">` wrapper and `<Footer>` for every route. Pages render their content only — never add `<Navbar>`/`<Footer>`/`<main>` to a page, and keep each page's own top padding, which is what clears the fixed 80px navbar. `Navbar` still accepts the legacy `logoLight` / `logoDark` / `textColor*` / `dynamicLogo` props so the older pages keep compiling, but the redesigned navbar ignores them — it is always the solid cream bar with the `Réserver` CTA. Don't add new call sites that pass them.

### Auth
- `middleware.ts` runs `updateSession` on every non-static request purely to **refresh the Supabase auth cookie**. It does not gate anything.
- Login is a server action, [src/app/Signin/actions.ts](src/app/Signin/actions.ts), which throws on failure and redirects to `/Blog` on success. `Signin/page.tsx` catches the throw and shows a toast.
- All actual gating is **client-side** via `useUser()` from [src/context/UserContext.tsx](src/context/UserContext.tsx) (`user && ...` in `Navbar`, `PostList`, `PostForm`). Routes and API handlers are not protected server-side; `/api/posts` uses the anon browser client and performs no auth check, so write access depends entirely on Supabase RLS policies on the `posts` table and the `posts-images` bucket.
- `UserProvider` wraps the app in [src/app/layout.tsx](src/app/layout.tsx) and is redundantly re-wrapped in [src/app/page.tsx](src/app/page.tsx).

### Blog data flow
`posts` table + `posts-images` Storage bucket. Shape in [src/types/posts.ts](src/types/posts.ts).

- **Read**: [src/app/Blog/page.tsx](src/app/Blog/page.tsx) is a server component that queries Supabase directly (using the *browser* client module) and passes `initialPosts` into the client component `BlogClient`, which owns the list state.
- **Create**: [src/components/PostForm.tsx](src/components/PostForm.tsx) uploads the image to Storage from the browser, gets the public URL, then `POST`s `{title, content, image_url, user_id}` to `/api/posts`. Note the API handler at [src/app/api/posts/route.ts](src/app/api/posts/route.ts) only destructures `title`, `content`, `image_url` — `user_id` is dropped, so rows created through the form have no owner, and `PostList`'s delete button (gated on `post.user_id === user.id`) never appears for them.
- **Delete**: `BlogClient` calls `DELETE /api/posts/[id]`, which looks up `image_url`, removes the file from Storage (best-effort — logs and continues on failure), then deletes the row.

### Styling
The homepage runs on the redesigned identity; `/Services` and `/Contact` were redesigned to match it. Only `/Blog`, `/Blog/Create` and `/Signin` still use the previous rose palette, so both token sets live in [tailwind.config.ts](tailwind.config.ts):

- **Current identity**: `cream` `#FAF6F1` (page ground), `sand` `#F3EDE4` (alternating band), `ink` `#2B2724` (text, buttons, footer), `clay` `#B65440` / `clayDark` (accent), `muted` (secondary text), `line` (borders).
- **Legacy**: `primary` `#a8797f`, `primaryDark`, `primaryLight`, `secondary`, `bgWite`. Beware `bgWite` is the real token name; `bg-bgWhite` appears in a couple of pages and silently resolves to nothing.

Typography is set in [src/app/layout.tsx](src/app/layout.tsx): Playfair Display (`font-serif`, all headings and the wordmark) and Inter (`font-sans`, body), wired through `--font-playfair` / `--font-inter`. A custom Tailwind plugin also mirrors every theme color into a `:root` CSS variable (`--clay`, …) for the Aceternity-style components in [src/components/ui/](src/components/ui/). `.section-label` in [src/app/globals.css](src/app/globals.css) is the small dotted eyebrow used above each section title.

The visual direction is pinned by the client's own mockup (cream + Playfair + terracotta) and was explicitly reaffirmed after review — do not "modernise" the palette or typography away from it. [globals.css](src/app/globals.css) also carries the quality floor: `:focus-visible` rings, a `prefers-reduced-motion` block that neutralises animation and swaps the hero video for its still via `.hero-still`.

The homepage mixes the redesigned sections in [src/components/home/](src/components/home/) (`Hero`, `About`, `Process`, `Projects`, `VisionBanner`) with `Testimonial` (real client reviews) — a legacy component kept for its content and restyled into the new identity; its marquee logic still lives in [src/components/ui/CustomTestimonial.tsx](src/components/ui/CustomTestimonial.tsx). `GalleryCards` and `Carousel` are no longer mounted anywhere — both were dropped as redundant with the homepage `Projects` section — but the components are kept. There is currently **no projects page**: the homepage gallery is the only showcase, so its cards are deliberately not links and its CTA points at `/Contact`. Restore real links there the day a projects route exists. The new sections read their content from [src/data/data.ts](src/data/data.ts) (`stats`, `processSteps`, `projects`, `testimonials`, `socialLinks`, `legalLinks`, `contactInfo`) — edit copy there, not in the JSX. `testimonials` is the single source for both the hero's review badge — whose count is `testimonials.length`, deliberately derived rather than hard-coded, so the badge can never overstate the reviews on the page — and the `Testimonial` section, and `projects` carries the real project titles/taglines lifted from `GalleryCards` — edit copy in one place. Project photography comes from `public/images/` (the `lsa_*`, `lcl_*`, `lc_*` 3D renders); the hero plays `public/salon.mp4` (76 MB, `poster` falls back to `lsa_5.png`) through [HeroVideo.tsx](src/components/home/HeroVideo.tsx), a client component whose only job is to hold `playbackRate` at `PLAYBACK_RATE` (0.5) — browsers reset the rate on replay, so it is re-applied on `play` and `loadedmetadata`.

Animation uses `framer-motion`, icons come from `lucide-react` (and `react-icons` in places). `cn()` in [src/lib/utils.ts](src/lib/utils.ts) is the clsx + tailwind-merge helper.
