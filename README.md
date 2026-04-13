# Personal Landing Page & Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![pnpm](https://img.shields.io/badge/pnpm-only-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.9%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, fully responsive personal portfolio and landing page built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. It combines an animated, interactive UI with clean architecture, strong accessibility practices, and production-ready SEO metadata. All in a single-page layout that guides visitors through every dimension of a professional profile.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customizing Content](#customizing-content)
- [Customizing Styles & Theme](#customizing-styles--theme)
- [SEO & Metadata](#seo--metadata)
- [Accessibility](#accessibility)
- [Performance Notes](#performance-notes)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

### Animated Particle Background
A full-screen HTML5 Canvas animation renders floating particles that connect to one another with lines when in proximity. The particle count scales dynamically based on the viewport area, and the entire canvas resizes gracefully on window resize events. The animation is GPU-friendly and uses `requestAnimationFrame` for smooth rendering without blocking the main thread.

### Typing Effect Hero Section
The Hero section opens with an animated typing effect that cycles through a configurable list of role descriptions. Each string is typed character by character, paused at full length, then deleted; creating a natural, looping typewriter animation powered entirely by React state and `useEffect`. No external library is needed.

### Smooth Scroll Navigation
The fixed header tracks the active section in real time by observing element positions against the viewport during scroll. When navigating via the nav links, `isClickScroll` logic prevents the scroll listener from immediately overriding the manually selected section, producing a snappy, flicker-free experience. An animated underline indicator slides between nav items using CSS `transform: translateX` for hardware-accelerated motion.

### Responsive Mobile Navigation
On smaller viewports, a slide-in drawer replaces the desktop nav. It features a backdrop blur overlay, an animated hamburger-to-X icon transition, and per-item entrance animations staggered by index. Body scroll is locked while the menu is open and restored on close. The drawer uses ARIA roles (`dialog`, `aria-modal`) and labelling for full screen-reader compatibility.

### About Section
A centered narrative section introduces the developer's background, areas of expertise, and career goals through prose paragraphs. Below the text, a responsive grid of highlight cards (each with an icon, title, and short description) visually communicates specialty areas across full-stack engineering, AI/ML, cloud infrastructure, and more.

### Experience Section
A timeline-style card layout presents professional experience entries in reverse chronological order. Each card displays the job title, company, location, employment period, a type badge (Freelance, Internship, Competition), a description paragraph, and a bulleted list of key responsibilities and technologies used.

### Education & Certifications Section
Academic background is presented as a card list with degree type, field of study, institution, period, location, and a status badge distinguishing completed from in-progress programs. A separate certifications grid beneath it tiles individual certifications as compact badge-style items with an icon.

### Projects / Repository Showcase
Instead of individual project cards, this section presents a curated platform directory: linking to GitHub, GitLab, Hugging Face, and Kaggle profiles with platform-specific branding, tag chips, and a hover-animated call-to-action button. A decorative background element in each card adds depth and visual interest.

### Skills Section
Technical skills are grouped into thematic categories (Languages, Backend & APIs, Frontend Development, Cloud & DevOps, Databases & Caching, AI/ML, and Hobby/Systems). Each skill is rendered as a small tile with an emoji icon and label. The tiles support individual hover effects including scale and color transitions.

### Contact Section
A contact grid renders one card per contact method (email, LinkedIn, Kaggle, Hugging Face, GitHub, and GitLab) with an icon, description, and a button that links directly to the relevant platform or opens a `mailto:` link. The section opens with a brief call-to-action paragraph setting the professional context.

### Scroll-to-Top Button
A `ScrollToTop` button fades in once the user has scrolled more than 300 px and smoothly returns the page to the top on click. It is absolutely positioned in the bottom-right corner and does not interfere with content.

### Header & Footer
The header becomes visually distinct (background, shadow, border) once scrolled past 50 px. The footer mirrors the social links from the Hero, includes a profile picture with an online-status dot, job titles, and a copyright notice. Both components share a unified set of social link definitions for easy maintenance.

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 6 |
| Styling | Tailwind CSS v4 |
| Component primitives | Radix UI (full suite) |
| Icons | Lucide React, React Icons (FA6) |
| Fonts | Geist Sans & Geist Mono |
| Animation | CSS keyframes + Tailwind CSS Animate |
| Image optimisation | Next.js Image + Sharp |
| Form utilities | React Hook Form + Zod |
| Charts | Recharts |
| Package manager | **pnpm** (required) |

## Project Structure

```
.
├── app/
│   ├── globals.css          # Global styles, CSS variables, Tailwind theme
│   ├── layout.tsx           # Root layout (metadata, fonts, Header, Footer)
│   ├── page.tsx             # Home page (composes all section components)
│   ├── robots.ts            # Next.js robots.txt generator
│   └── sitemap.ts           # Next.js sitemap generator
│
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Fixed navigation header with active-section tracking
│   │   └── footer.tsx       # Footer with social links and copyright
│   │
│   ├── sections/
│   │   ├── hero.tsx         # Typing effect, social links, CTA
│   │   ├── about.tsx        # Bio paragraphs and highlight cards
│   │   ├── experience.tsx   # Work experience cards
│   │   ├── education.tsx    # Degrees and certifications
│   │   ├── projects.tsx     # Platform/repository showcase
│   │   ├── skills.tsx       # Skill category grids
│   │   └── contact.tsx      # Contact method cards
│   │
│   └── ui/
│       ├── button.tsx            # Custom button with icon slots and variants
│       ├── card.tsx              # Card primitives (Header, Content, Footer, Title)
│       ├── particle-background.tsx # Canvas particle animation
│       ├── scroll-to-top.tsx     # Floating scroll button
│       └── ...                   # Full Radix UI / shadcn component library
│
├── hooks/
│   ├── use-mobile.tsx       # Responsive breakpoint hook
│   └── use-toast.ts         # Toast notification state hook
│
├── lib/
│   └── utils.ts             # `cn()` class merging utility
│
├── public/                  # Static assets
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Getting Started

### Prerequisites

- **Node.js 20.9.0 or later** (required by Next.js 16)
- **pnpm** - this project uses pnpm exclusively. Install it via:

```bash
npm install -g pnpm
# or via Corepack (recommended)
corepack enable
corepack prepare pnpm@latest --activate
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/emanuellcs/landing-page.git
cd landing-page
pnpm install
```

### Development Server

```bash
pnpm dev
```

The site will be available at `http://localhost:3000` with hot module replacement enabled.

### Production Build

```bash
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
```

## Customizing Content

All user-facing content is co-located with its component. There is no external CMS or data layer to configure: simply edit the relevant file.

**Hero section**: edit `components/sections/hero.tsx`. The `typingStrings` array at the top of the file controls the cycling role descriptions. The `socialLinks` array controls the icon links rendered below the CTA.

**About section**: edit `components/sections/about.tsx`. The `highlights` array drives the skill card grid. The prose paragraphs are written inline in JSX.

**Experience section**: edit `components/sections/experience.tsx`. Add, remove, or reorder entries in the `experiences` array. Each entry accepts `title`, `company`, `location`, `period`, `duration`, `type`, `description`, and an `achievements` string array.

**Education & Certifications**: edit `components/sections/education.tsx`. The `education` array follows the same pattern. The `certifications` array is a flat list of strings rendered as badge tiles.

**Projects**: edit `components/sections/projects.tsx`. The `platforms` array configures each platform card with its icon, description, tag chips, link, and colour values.

**Skills**: edit `components/sections/skills.tsx`. The `skillCategories` array holds each category object, which contains a `title`, a Lucide `icon`, and a `skills` array of `{ name, icon }` objects. The `icon` field accepts any emoji string.

**Contact methods**: edit `components/sections/contact.tsx`. The `contactMethods` array mirrors the structure of `socialLinks` in the Hero.

**Navigation links**: the `navigation` array in `components/layout/header.tsx` defines every item in both the desktop and mobile menus. Each entry is `{ name, href }` where `href` is the anchor ID of the target section (e.g. `"#about"`).

**Profile picture**: replace the `src` URL in `components/layout/header.tsx`, `components/sections/hero.tsx`, and `components/layout/footer.tsx`. All three currently point to a GitHub avatar URL. You can also place a local image in `public/` and reference it as `/your-image.png`.

## Customizing Styles & Theme

The visual theme is defined in two places.

`app/globals.css` holds all CSS custom properties (color tokens, spacing extensions, shadow tokens, animation keyframes), the Tailwind `@theme` block, and component utility classes such as `.section-padding`, `.container-custom`, `.gradient-text`, and `.card-hover`.

The color palette is built around a dark gray base (`gray-900` / `gray-800`) with teal accents (`teal-400` / `teal-500`). To change the accent color, search and replace `teal-` across the codebase, or redefine the teal values inside `@theme` in `globals.css`.

The `--shadow-glow` and `--shadow-glow-lg` custom properties control the neon glow effects on buttons and cards. Adjust the `rgba` color values to match any accent color change.

## SEO & Metadata

Static metadata is declared in `app/layout.tsx` using Next.js's `Metadata` API. It covers:

- `<title>` and `<meta name="description">`
- OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card tags
- Canonical icons (favicon, Apple touch icon)
- Robots directives (index + follow, with Googlebot overrides)

A JSON-LD `Person` schema block is injected via `<script type="application/ld+json">` in the `<head>` to improve structured data recognition by search engines.

The sitemap and robots.txt are generated dynamically by `app/sitemap.ts` and `app/robots.ts` respectively. Update the base URL (`https://emanuellcs.vercel.app`) in all three files when deploying to your own domain.

## Accessibility

The following accessibility practices are implemented throughout the project.

All interactive elements expose descriptive `aria-label` attributes. Navigation uses `role="navigation"` with an `aria-label`, and the mobile menu dialog uses `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`. Active navigation items receive `aria-current="page"`. The particle canvas is marked `aria-hidden="true"` because it is purely decorative.

Focus styles are globally defined in `globals.css` using `:focus-visible` with a teal outline, offset, and border-radius so keyboard users always have a clear focus indicator without affecting mouse users.

A `prefers-reduced-motion` media query in `globals.css` collapses all animation durations to near-zero and disables smooth scrolling for users who prefer reduced motion. The particle canvas continues to render statically.

A `prefers-contrast: high` media query boosts the teal accent values for improved contrast in high-contrast mode.

Semantic HTML is used throughout: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`; with appropriate heading hierarchy (`h1` in Hero, `h2` per section, `h3`/`h4` for subsections).

## Performance Notes

Images are served through Next.js's `<Image>` component with explicit `width` and `height` props and `priority` set on the Hero avatar to prevent layout shift and trigger early loading. The `sharp` package is included as a dependency for server-side image optimisation during the build.

The Geist font family is loaded via the `geist` package and injected as CSS variables, which avoids a render-blocking `@font-face` request. The `GeistSans.variable` and `GeistMono.variable` class names are applied to the `<html>` element.

TypeScript build errors are suppressed in `next.config.mjs` (`typescript.ignoreBuildErrors: true`) to enable deployment even when type errors are present. Consider removing this flag in a stricter production setup.

## Deployment

The recommended deployment target is **Vercel**, which provides zero-configuration support for the Next.js App Router.

1. Push your repository to GitHub (or any Git provider Vercel supports).
2. Import the repository in the [Vercel dashboard](https://vercel.com/new).
3. Set the framework preset to **Next.js**. Vercel detects this automatically.
4. Update the `url` field in `app/sitemap.ts` and `app/robots.ts`, and the `url` / `openGraph.url` fields in `app/layout.tsx` metadata to match your production domain.
5. Deploy.

The project can also be hosted on any platform that supports Node.js 20+. Run `pnpm build` to generate a `.next` production build, then `pnpm start` to serve it.

## Contributing

Issues and pull requests are welcome. For substantial changes, please open an issue first to discuss the proposed approach. When submitting a pull request, ensure `pnpm lint` passes with no errors and the production build (`pnpm build`) completes successfully.

## License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.
