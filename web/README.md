# MoeenDev — Full-Stack Operations Console

A production-ready full-stack operations console by **MoeenDev**, built with:

- **Next.js 16** (App Router, React 19, TypeScript, Tailwind CSS v4)
- **shadcn/ui** components
- Demo mode that stores data locally in the browser when the backend is offline

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Run checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Demo Mode (no backend required)

The console automatically detects when the FastAPI backend is unreachable and
falls back to an in-browser **demo mode** — records are stored in `localStorage`
and a banner explains the state. Connect a backend later by setting `BACKEND_URL`
and the app switches to the live API automatically.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, click **Add New → Project** and import the repo.
3. Root directory: `web`.
4. Node.js version: **20+** (auto-detected via `engines`).
5. (Optional) Add `BACKEND_URL` env var to point at your deployed FastAPI API.
6. Deploy — then add your domain, e.g. `moeen-fullstack.vercel.app`.

A root-level `vercel.json` already pins the framework and root directory for you.

## API notes

REST endpoints live in the FastAPI backend (`/api/v1/records`, `/health`, …).
The Next.js `/api/*` routes proxy those requests server-side when `BACKEND_URL`
is configured.