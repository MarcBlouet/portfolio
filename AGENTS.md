<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Projet

Portfolio personnel de Marc Blouet.
Repo : https://github.com/MarcBlouet/portfolio

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind v4 + daisyUI 5
- Pas de dossier `src/` (`app/` à la racine)
- Alias `@/*`

Pas encore : Prisma, Supabase, Zustand, paiements.

Emails : Brevo (fetch API, pas de SDK). Clé `BREVO_API_KEY` dans `.env.local` (gitignoré).

## Fichiers importants

- `app/globals.css` : Tailwind + daisyUI (`themes: winter --default, night --prefersdark`)
- Logos du site : `public/brand/logo.svg` (clair), `public/brand/logo-blanc.svg` (sombre)
- Favicon : `metadata.icons` → `/brand/logo.svg` dans `app/layout.tsx`
- `layout.tsx` : `lang="fr"`, polices Geist

## `_local/`

Dossier de travail ignoré par Git (charte graphique, notes).
Ne jamais le committer ni y déplacer le code du site.

## Conventions

- Commentaires de code en français si besoin
- README / profil : ton simple, amateur
- Commits : `chore`, `feat`, `fix`, `style`, `docs`

## Architecture

- Une seule page : `app/page.tsx`
- Sections = composants dans `components/`
- Header, Hero, About, Skills, Projets, Contact
- Les composants ne s’importent pas entre eux
- Style : classes Tailwind dans les composants (pas de CSS séparé pour l’instant)
- Thèmes daisyUI figés : winter (clair) / night (sombre). Pas les tokens `_local/` pour les couleurs.

## Mode de travail avec l’agent

- L’utilisateur écrit le code. L’agent guide, n’écrit pas les fichiers (sauf demande explicite).
- Adapter le niveau selon la difficulté et la nouveauté :
  - Déjà vu / simple → message court, plan en 1-2 phrases, laisser faire. Pas de code à copier, pas de mini-étapes.
  - Nouveau ou difficile → expliquer quoi + pourquoi, donner les étapes claires et le code à copier si ça aide vraiment, puis laisser appliquer.
- Avant une section : dire le plan (quoi / pourquoi) sans noyer.
- Après essai : corriger précisément, montrer seulement ce qui manque ou ce qui cloche.
- Français. Longueur proportionnée : court sur le simple, plus détaillé sur le nouveau. Jamais « fais X » sans montrer comment si X n’a jamais été vu.

## Layout des sections

- Largeur commune : `max-w-5xl mx-auto px-4 md:px-8 py-16`
- Titres de section : `h2` avec `text-2xl md:text-4xl font-bold mb-4`
- Apostrophes typographiques `’` dans le JSX (évite `react/no-unescaped-entities`)

## État actuel

- Header fait : logo, nav ancres, toggle daisyUI `swap` + `theme-controller`
- `Header.tsx` est un Client Component (`"use client"`)
- Thèmes daisyUI : winter / night. `THEME_CLAIR` / `THEME_SOMBRE` dans `Header.tsx`. Thème mémorisé dans `localStorage` (`theme`). Lecture via `useSyncExternalStore` (évite le mismatch d’hydratation logo clair/sombre). Checkbox écrit `localStorage` + `theme-change`
- Logo `Image` : `width`/`height` 25 + `className="h-6.5 w-6.5 shrink-0"`. Lien `href="#"` (haut de page). Plus de lien nav « Intro »
- Hero fait : grille `grid-cols-1 md:grid-cols-2`, texte centré en mobile / à gauche dès `md`, photo `public/marc.jpg` via `next/image` (`priority`, `justify-self-center md:justify-self-end`). Plus d’`id` ni de `scroll-mt`
- About fait (`id="apropos"`) : Qui suis-je ?, plusieurs `<p>`
- Skills fait (`id="stack"`) : badges Next.js, React, TypeScript, Tailwind CSS, daisyUI (`badge-outline`)
- Projets fait (`id="projets"`) : 3 cartes daisyUI (Portfolio Live, CaristePrêt En cours, Snippix Concept), grille `sm:grid-cols-2 md:grid-cols-3`
- Contact fait (`id="contact"`) : 2 colonnes, `items-start` (le form ne s’étire pas). Form Daisy (nom / email / message / Envoyer), honeypot `company` hidden. `"use client"`. POST `/api/contact`. Status `idle|loading|ok|error`. `form.reset` si ok. Champs + bouton `disabled` si ok. `required` `maxLength` 100/200/2000. Section `min-h-[calc(100svh-4rem)]` pour que Contact puisse coller sous le header (formulaire inchangé)
- Icônes Contact : GitHub + X, SVG inline Simple Icons, `size-6 fill-current`, `target="_blank"` `rel="noopener noreferrer"` `aria-label`. Pas LinkedIn / Instagram (choix). Liste `flex gap-4 mt-4`
- `app/api/contact/route.ts` : POST, trim, honeypot fake ok, limites, regex email. `fetch` Brevo `https://api.brevo.com/v3/smtp/email` (header `api-key`). Sender/to `marcblouet.pro@gmail.com`. `replyTo` visiteur. `textContent` `De : ${nom}\nEmail : ${email}\n\n${message}` (pas de chevrons, Outlook les mange). Pas de SDK. Ne jamais committer `.env.local`
- Scroll fluide fait : `className="scroll-smooth"` sur `<html>` dans `app/layout.tsx`
- Header sticky fait : wrapper `sticky top-0 z-10 bg-base-100 border-b border-base-content/25` + `max-w-5xl mx-auto` (barre pas pleine largeur, choix assumé). Inner `<header>` garde le flex. Tailwind v4 : opacité via `couleur/25`, pas `border-opacity-*`
- `scroll-mt-15` sur About, Skills, Projets, Contact (pas sur Hero)
- Menu burger fait : daisyUI `dropdown dropdown-center sm:hidden` au centre (remplace la nav). Nav desktop `hidden sm:block`. Breakpoint `sm` (pas `md`). SVG 3 traits, pas Lucide. Burger volontairement au milieu, pas collé au thème. Mêmes ternaires actifs que le desktop
- Lien nav actif : scroll + `getBoundingClientRect().top <= 120`, dernière section dont le haut a passé cette ligne. `setActive("")` au-dessus d’À propos (Hero). Aussi `hashchange` / `resize`. Ternaires `bg-base-content text-base-100`. `overflow-hidden` sur le `<nav>` pour les coins. Plus d’IntersectionObserver (trop de sections visibles en grand écran)
- Header non découpé (un fichier). Session 2026-09-01 après-midi : Brevo + thème + spy nav

## À faire (prochaine session)

- Vercel : ajouter `BREVO_API_KEY` (jamais dans le repo)
- DKIM / domaine Brevo : optionnel, plus tard
- Polices charte (Space Grotesk / Inter) : optionnel, plus tard