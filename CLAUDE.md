# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite HMR)
npm run build     # type-check then build to dist/
npm run preview   # preview production build locally
npm run lint      # run ESLint
```

There is no test suite configured.

## Architecture

This is a personal portfolio + blog site built with React 19, TypeScript, Vite, Tailwind CSS, and React Router v7.

**Routing** is defined in [src/App.tsx](src/App.tsx):
- `/` → `About` page
- `/blog` → `Blog` listing page
- `/blog/:slug` → `BlogPost` dynamic page

**Blog system** works in three parts that must stay in sync when adding a new post:
1. [src/data/blogs.ts](src/data/blogs.ts) — registry of all posts (slug, title, excerpt, date, image, component name)
2. [src/blogs/](src/blogs/) — one `.tsx` file per post (`BlogOne.tsx`, `BlogTwo.tsx`, etc.) containing the full post content
3. [src/pages/BlogPost.tsx](src/pages/BlogPost.tsx) — looks up the slug, resolves the component name from the registry, and renders it

To add a new blog post: create the component in `src/blogs/`, add an entry to `src/data/blogs.ts`, and import + register the component in `src/pages/BlogPost.tsx`.

**Static content** (education, volunteering, skills, social links) lives in [src/constants/index.tsx](src/constants/index.tsx) and is typed via [src/types/index.ts](src/types/index.ts).

**Styling** uses Tailwind CSS utility classes throughout; no CSS modules or styled-components.
