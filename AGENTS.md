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
- Pas de TopBar
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
- Logo `Image` : `width`/`height` 25 + `className="h-6.5 w-6.5 shrink-0"`
- Hero fait (`id="intro"`) : h1 Marc Blouet, phrase, boutons `#projets` / `#contact`
- About fait (`id="apropos"`) : Qui suis-je ?, plusieurs `<p>`
- Skills fait (`id="stack"`) : badges Next.js, React, TypeScript, Tailwind CSS, daisyUI
- Projets fait (`id="projets"`) : 3 cartes daisyUI (Portfolio Live, CaristePrêt En cours, Snippix Concept), grille `sm:grid-cols-2 md:grid-cols-3`
- Contact visuel fait (`id="contact"`) : 2 colonnes, form Daisy (nom / email / message / Envoyer), `w-full max-w-2xl mx-auto`, labels `htmlFor` + `id`. Liens GitHub / X en texte. `"use client"` encore inutile. Pas d’envoi.
- `app/api/contact/route.ts` créé, encore vide
- Commits poussés : header ; `feat: sections hero, about et skills` ; `feat: section projet`
- Session stoppée. Prochaine : polish nav + Contact API

## À faire (prochaine session)

- Scroll fluide : `scroll-smooth` sur `<html>` dans `app/layout.tsx`
- Header sticky : `sticky top-0 z-50` + `bg-base-100` (wrapper pleine largeur si besoin) ; `scroll-mt-…` sur les sections
- Photo Hero à droite : grille 2 cols, fichier dans `public/`
- Icônes Contact (GitHub, X, LinkedIn, Instagram) : SVG inline `fill-current` (suit light / dark), pas une image par thème
- Formulaire → `POST /api/contact` ; route `fetch` Brevo `https://api.brevo.com/v3/smtp/email` (header `api-key`). Pas de SDK. Clé dans `.env.local` (`BREVO_API_KEY`), déjà gitignoré. Expéditeur vérifié dans Brevo
- Menu burger (nav mobile)
- Lien nav actif
- Mémoriser le thème (`localStorage`)
- Brancher les tokens de la charte
- Remplacer le README Next