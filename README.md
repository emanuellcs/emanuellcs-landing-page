# Emanuel Lázaro - Landing Page

A modern, responsive personal landing page and portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Animated Hero section with a typing effect
- Sections: About, Experience, Education, Projects, Skills, and Contact
- Interactive project cards with links to demos and repositories
- Reusable UI components based on Radix UI and Lucide icons
- Responsive design with accessibility in mind (ARIA, keyboard navigation)

## Prerequisites

- Node.js 22+ recommended
- pnpm (recommended) or npm/yarn

> This repository includes `pnpm-lock.yaml` - use `pnpm` for faster, deterministic installs.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/emanuellcs/emanuellcs-landing-page.git
cd emanuellcs-landing-page
```

2. Install dependencies (recommended: `pnpm`):

```bash
pnpm install
# or with npm
npm install
```

## Useful Scripts

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

Build for production:

```bash
pnpm build
pnpm start
```

Others (if present): `pnpm lint`, `pnpm format` - check `package.json`.

## Project Structure (Overview)

- `app/` - routes and pages (Next.js App Router)
- `components/` - reusable components and page sections
  - `components/layout/` - `header` and `footer`
  - `components/sections/` - `hero`, `about`, `experience`, `projects`, `skills`, `contact`
  - `components/ui/` - component library (buttons, cards, dialogs, etc.)
- `hooks/` - custom hooks (`use-mobile`, `use-toast`)
- `lib/` - utilities (e.g., `utils.ts`)
- `public/` - public assets (images, icons)
- `styles/` and `app/globals.css` - global styles and Tailwind configuration
- `tailwind.config.ts`, `next.config.mjs`, `tsconfig.json` - main config files

## Where to Edit Your Content

- Page content: edit the files in `components/sections/`.
- Header/footer: `components/layout/header.tsx` and `components/layout/footer.tsx`.
- Styles and themes: `tailwind.config.ts` and `app/globals.css`.

## Deploy

Recommended: Vercel (Next.js integration) or any Node.js-compatible host.

1. Connect the repository to Vercel.
2. Set the framework to Next.js and provide any required environment variables (if applicable).

## Contributing

- Issues and pull requests are welcome.
- For large changes, please open an issue first.

---

Maintained by Emanuel Lázaro - https://github.com/emanuellcs
