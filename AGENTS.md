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

Pas encore : Prisma, Supabase, Zustand, paiements, email.

## Fichiers importants

- `app/globals.css` : Tailwind + daisyUI (`themes: light --default, dark --prefersdark`)
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
- Tokens charte : plus tard, depuis `_local/`

## Mode de travail avec l’agent

- L’utilisateur écrit le code ; l’agent guide, n’écrit pas les fichiers (sauf demande, ex. AGENTS.md)
- Avant une section : expliquer le plan (quoi / pourquoi), laisser essayer, corriger après
- Pas de mini-étapes à copier
- Messages courts, français

## Layout des sections

- Largeur commune : `max-w-5xl mx-auto px-4 md:px-8 py-16`
- Titres de section : `h2` avec `text-2xl md:text-4xl font-bold mb-4`
- Apostrophes typographiques `’` dans le JSX (évite `react/no-unescaped-entities`)

## État actuel

- Header fait : logo (clair/sombre via `useState` + `theme-controller`), nav ancres, toggle daisyUI `swap`
- `Header.tsx` est un Client Component (`"use client"`)
- Thèmes daisyUI : light / dark
- Logo `Image` : `width`/`height` 25 + `className="h-6.5 w-6.5 shrink-0"`. Lien `href="#"` (haut de page). Plus de lien nav « Intro »
- Hero fait : grille `grid-cols-1 md:grid-cols-2`, texte centré en mobile / à gauche dès `md`, photo `public/marc.jpg` via `next/image` (`priority`, `justify-self-center md:justify-self-end`). Plus d’`id` ni de `scroll-mt`
- About fait (`id="apropos"`) : Qui suis-je ?, plusieurs `<p>`
- Skills fait (`id="stack"`) : badges Next.js, React, TypeScript, Tailwind CSS, daisyUI (`badge-outline`)
- Projets fait (`id="projets"`) : 3 cartes daisyUI (Portfolio Live, CaristePrêt En cours, Snippix Concept), grille `sm:grid-cols-2 md:grid-cols-3`
- Contact visuel fait (`id="contact"`) : 2 colonnes, form Daisy (nom / email / message / Envoyer), `w-full max-w-2xl mx-auto`, labels `htmlFor` + `id`. `"use client"` encore inutile. Pas d’envoi.
- Icônes Contact faites : GitHub + X, SVG inline Simple Icons, `size-6 fill-current`, `target="_blank"` `rel="noopener noreferrer"` `aria-label`. Pas LinkedIn / Instagram (choix). Liste `flex gap-4 mt-4`
- `app/api/contact/route.ts` créé, encore vide
- Scroll fluide fait : `className="scroll-smooth"` sur `<html>` dans `app/layout.tsx`
- Header sticky fait : wrapper `sticky top-0 z-10 bg-base-100 border-b border-base-content/25` + `max-w-5xl mx-auto` (barre pas pleine largeur, choix assumé). Inner `<header>` garde le flex. Tailwind v4 : opacité via `couleur/25`, pas `border-opacity-*`
- `scroll-mt-15` sur About, Skills, Projets, Contact (pas sur Hero)
- Menu burger fait : daisyUI `dropdown dropdown-center sm:hidden` au centre (remplace la nav). Nav desktop `hidden sm:block`. Breakpoint `sm` (pas `md`). SVG 3 traits, pas Lucide. Burger volontairement au milieu, pas collé au thème
- Lien nav actif fait : `active` + `IntersectionObserver` (`rootMargin: "-25% 0px -60% 0px"`), Set des sections visibles, première id dans l’ordre apropos → contact. Ternaires `bg-base-content text-base-100`. `overflow-hidden` sur le `<nav>` pour les coins. Pas encore dans le menu burger
- Header non découpé (un fichier). Session stoppée 2026-09-01 matin. Prochaine : API Brevo

## À faire (prochaine session)

- Formulaire → `POST /api/contact` ; route `fetch` Brevo `https://api.brevo.com/v3/smtp/email` (header `api-key`). Pas de SDK. Clé dans `.env.local` (`BREVO_API_KEY`), déjà gitignoré. Expéditeur vérifié dans Brevo
- Mémoriser le thème (`localStorage`)
- Ternaire actif aussi dans le menu burger (optionnel)
- Brancher les tokens de la charte
- Remplacer le README Next