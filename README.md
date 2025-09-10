# TaskFlow – Next.js (App Router)

A modern task manager scaffold built with Next.js App Router, Tailwind CSS, Zustand for state, and MSW for mock APIs.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS v4 (PostCSS plugin `@tailwindcss/postcss`)
- Zustand (state management)
- MSW (Mock Service Worker) for API mocking

## Requirements
- Node.js 18+
- npm (or pnpm/yarn/bun)

## Getting Started
1. Install dependencies:
```bash
npm install
```
2. Run the dev server:
```bash
npm run dev
```
3. Open `http://localhost:3000`.

## Project Structure
```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   ├── login/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx         # Protected dashboard
│   ├── api/                 # Mock API (can also be MSW)
│   │   ├── login/route.ts
│   │   ├── signup/route.ts
│   │   └── tasks/route.ts
│   └── middleware.ts        # Auth guard (edge)
├── store/                   # Zustand stores
│   ├── auth.ts              # JWT handling
│   └── tasks.ts             # Tasks CRUD
├── mocks/                   # MSW setup
│   ├── handlers.ts
│   └── browser.ts
```

> Note: Files in the structure may be placeholders initially.

## Scripts
```bash
npm run dev       # Start Next.js in development
npm run build     # Production build
npm run start     # Start production server
```

## Environment Variables
Create a `.env.local` in project root (examples):
```
NEXT_PUBLIC_API_BASE="/api"       # or external URL
JWT_SECRET="change_me"
```

## Tailwind CSS
- Ensure PostCSS uses `@tailwindcss/postcss`.
- Import Tailwind in your global CSS (e.g., `src/app/globals.css` if you add it) or in component-level styles.

## Mock API / MSW
- Handlers live in `src/mocks/handlers.ts`.
- Browser worker setup is in `src/mocks/browser.ts`.
- You can opt to use Next.js route handlers in `src/app/api/*` instead of (or alongside) MSW.

## Auth Flow (outline)
- `src/store/auth.ts` stores JWT/user state (Zustand).
- `src/app/middleware.ts` can protect `/dashboard` by checking an auth cookie or header.

## Conventions
- Use server components by default in App Router; mark client components with `"use client"`.
- Keep API types in a shared types file if needed.

## Troubleshooting
- Port in use: change `PORT` env or stop the conflicting process.
- Styles not applying: restart dev server after PostCSS/Tailwind config changes.
- MSW not intercepting: ensure the service worker is started in `layout.tsx` or client entry.

## License
MIT
