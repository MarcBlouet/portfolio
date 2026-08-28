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

- `app/globals.css` : uniquement `@import "tailwindcss";` et `@plugin "daisyui";`
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

## À faire

- Brancher les tokens de la charte
- Header + logo selon thème clair/sombre
- Pages accueil, projets, à propos, contact
- Remplacer le README par défaut Next