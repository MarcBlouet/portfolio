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

- L’utilisateur écrit le code
- L’agent guide, n’écrit pas les fichiers
- Une étape à la fois, messages courts

## État actuel

- Header fait : logo (clair/sombre via `useState` + `theme-controller`), nav ancres, toggle daisyUI `swap`
- `Header.tsx` est un Client Component (`"use client"`)
- Thèmes daisyUI : light / dark
- Prochaine étape : `Hero.tsx` (`<section id="intro">`)

## À faire

- Hero (`id="intro"` : titre, phrase, boutons Projets / Contact)
- About, Skills, Projets, Contact (`id` : apropos, stack, projets, contact)
- Menu burger (nav mobile)
- Lien nav actif
- Mémoriser le thème (`localStorage`)
- Brancher les tokens de la charte
- Remplacer le README Next