# Emanuel Lázaro's Landing Page

A modern, responsive personal portfolio and landing page for Emanuel Lázaro, built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Animated Hero Section**: Dynamic typing effect showcasing skills and roles.
- **About Section**: Highlights technical expertise and open-source contributions.
- **Experience & Education**: Timeline of professional and academic achievements.
- **Projects Showcase**: Interactive cards with links to live demos and GitHub repositories.
- **Skills Grid**: Categorized technical stack with icons.
- **Contact Section**: Easy ways to connect via email, GitHub, and LinkedIn.
- **Responsive Design**: Mobile-friendly navigation and layout.
- **Custom UI Components**: Built with Radix UI, Lucide Icons, and custom Tailwind styles.
- **Accessibility**: Keyboard navigation, focus rings, and ARIA labels.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/emanuellcs/emanuellcs-landing-page.git
   cd emanuellcs-landing-page
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

- `components/sections/`: Main page sections (Hero, About, Experience, Projects, Skills, Contact)
- `components/ui/`: Reusable UI components (Button, Card, Dialog, etc.)
- `components/layout/`: Header and Footer
- `public/`: Static assets
- `styles/`: Global styles and Tailwind config

## Customization

- Update your information in the relevant section files under `components/sections/`.
- Modify colors and styles in `tailwind.config.js` and `styles/`.
- Add or update projects, skills, and contact methods as needed.

## Contributing

Pull requests and suggestions are welcome! For major changes, please open an issue first.
---

Built and maintained by [Emanuel Lázaro](https://github.com/emanuellcs).
