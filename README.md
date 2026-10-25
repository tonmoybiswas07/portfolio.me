# 🚀 Tonmoy Biswas – Modern Developer Portfolio

<div align="center">

![Portfolio Banner](https://i.ibb.co.com/j9w6jG94/Screenshot-2026-03-30-at-1-26-38-PM.png)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-tonmoyportfolio.vercel.app-22D3EE?style=for-the-badge&logo=vercel&logoColor=white)](https://tonmoyportfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-22D3EE?style=for-the-badge&logo=react&logoColor=0B1220)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  A high-performance, dark-mode-first developer portfolio engineered with <b>Next.js 15 App Router</b>, <b>React 19</b>, <b>TypeScript</b>, and <b>Tailwind CSS v4</b>. Features interactive sections, smooth Framer Motion micro-interactions, an integrated contact form, and a <b>live real-time GitHub Activity Dashboard & 52-week contribution heatmap</b>.
</p>

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [✨ Key Features](#-key-features)
- [📊 Live GitHub Activity Dashboard](#-live-github-activity-dashboard)
- [🎨 Design System & Palette](#-design-system--palette)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Architecture](#-project-architecture)
- [⚡ Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [🚀 Production Build & Deployment](#-production-build--deployment)
- [📬 Contact & Socials](#-contact--socials)
- [📄 License](#-license)

---

## 🌟 Overview

This portfolio is crafted for **Tonmoy Biswas**, a **Frontend & MERN Stack Developer** based in Dhaka, Bangladesh. It represents a clean, production-grade architecture that moves beyond static presentation by incorporating real-time telemetry, live GitHub statistics, accessible components, and responsive aesthetics.

---

## ✨ Key Features

- **⚡ Next.js 15 App Router & React 19:** Optimized static rendering with server-side API route caching and sub-second page transitions.
- **🛡️ Strict TypeScript:** Full type safety across components, data models, and external API responses.
- **📊 Live GitHub Activity Section:**
  - Real-time annual contribution count, active days, and streak calculation.
  - Interactive **52-week contribution heatmap** with Electric Cyan intensity levels and hover tooltips.
  - Live showcase of active public repositories with latest commit messages, timestamps, and language indicators.
  - Real-time public event activity feed (pushes, commits, repository events).
- **🎨 Midnight Navy & Electric Cyan Theme:** Curated dark-mode design system with subtle borders, glowing accents, and high-contrast typography.
- **📱 Fluid Responsiveness & Dual Navigation:**
  - Fixed desktop side rail with tooltips, active section indicator, and scrollspy.
  - Floating mobile bottom navigation bar with animated spring pills.
- **💼 Interactive Sections:**
  - **Hero Section:** Dynamic coding terminal card with resume download and social triggers.
  - **About Section:** Architectural pillars, technical approach, and developer profile card.
  - **Skills Section:** Categorized proficiency matrices (Frontend, Backend, Tools & Libraries).
  - **Projects Section:** Grid of featured projects with live demos, code repositories, and feature highlights.
  - **Experience & Education:** Timeline view of professional experience and academic background.
  - **Contact Section:** Direct inquiry form powered by EmailJS and React Toastify notifications.

---

## 📊 Live GitHub Activity Dashboard

The **GitHub Journey** section (`#github`) located immediately above the footer provides visitors and recruiters with an authentic view of coding consistency:

| Metric | Source / Behavior |
| :--- | :--- |
| **Total Contributions** | Aggregated for the rolling 365 days and current year via GitHub API. |
| **Current Streak** | Dynamically calculated working backward from today across daily contribution data. |
| **Longest Streak** | Personal record streak computed across historical contribution records. |
| **Contribution Heatmap** | 52-week calendar grid categorized into 5 intensity shades of Electric Cyan with hover tooltips. |
| **Active Repositories** | Top non-fork repositories with automated queries for the latest commit SHA, message, and timestamp. |
| **Live Event Stream** | Real-time public GitHub activity feed with relative timestamps. |

All metrics are served via the cached Next.js route handler (`/api/github`), protected against rate limiting with server-side caching (`revalidate: 3600`) and fallback resilience.

---

## 🎨 Design System & Palette

The user interface follows a modern high-tech aesthetic tailored for developer portfolios:

| Color Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Midnight Navy** | `#0B1220` | Root background & deep container canvases |
| **Slate Navy** | `#151F32` | Card surfaces, modals, and navigation bars |
| **Electric Cyan** | `#22D3EE` | Primary brand accent, glowing highlights, and active states |
| **Off White** | `#F8FAFC` | Primary headings and prominent text |
| **Muted Slate** | `#94A3B8` | Secondary body text and subtitles |

---

## 🛠️ Tech Stack

### Core Framework & Runtime
- **[Next.js 15.5](https://nextjs.org/)** – App Router, Server Components & Route Handlers
- **[React 19.2](https://react.dev/)** – Modern component architecture
- **[TypeScript 5.8](https://www.typescriptlang.org/)** – Strict typing and interfaces

### Styling & Animation
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first modern CSS engine
- **[Framer Motion 12](https://www.framer.com/motion/)** – Fluid entrance and hover micro-animations
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)** – Dynamic utility class merging

### Icons & Utilities
- **[React Icons](https://react-icons.github.io/react-icons/)** – FontAwesome, IoMd, and Pi icon packs
- **[Lucide React](https://lucide.dev/)** – Clean SVG symbols
- **[@emailjs/browser](https://www.emailjs.com/)** – Client-side email dispatching
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** – Notification toasts

---

## 📂 Project Architecture

```plaintext
portfolio/
├── public/                     # Static assets (images, CV pdf, favicon)
│   ├── favicon.svg
│   └── images/
│       ├── tonmoy-profile.jpeg
│       └── developer-coding.gif
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── github/
│   │   │       └── route.ts   # Cached GitHub REST & Heatmap API handler
│   │   ├── globals.css         # Tailwind CSS v4 styling & design tokens
│   │   ├── layout.tsx          # Root layout, fonts & metadata
│   │   ├── not-found.tsx       # Custom 404 page
│   │   └── page.tsx            # Single-page assembled portfolio
│   ├── components/
│   │   ├── github/             # Heatmap, Stat Cards, Repos & Activity Feed
│   │   │   ├── ContributionHeatmap.tsx
│   │   │   ├── GithubActivityFeed.tsx
│   │   │   ├── GithubSkeleton.tsx
│   │   │   ├── GithubStatsCards.tsx
│   │   │   └── RecentRepoCards.tsx
│   │   ├── layout/             # Responsive Navbar & Footer
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/           # Modular page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── GithubSection.tsx
│   │   └── ui/                 # Reusable atomic UI components
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── SectionHeading.tsx
│   ├── data/                   # Centralized content and project metadata
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── socials.ts
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn helper)
│   └── types/                  # TypeScript interface definitions
│       ├── github.ts
│       └── index.ts
├── next.config.ts              # Next.js configuration & image domains
├── package.json                # Dependencies and npm scripts
└── tsconfig.json               # TypeScript compiler configuration
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: `v18.18.0` or higher (Node.js 20+ recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tonmoybiswas07/tonmoy_portfolio.git
   cd tonmoy_portfolio
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory (optional for local development, recommended for higher API limits):

```env
# Optional: Specify your GitHub username (defaults to tonmoybiswas07)
GITHUB_USERNAME=tonmoybiswas07

# Optional: Personal GitHub Access Token for 5,000 req/hr rate limits
GITHUB_TOKEN=your_personal_access_token_here
```

### Running Locally

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🚀 Production Build & Deployment

To compile an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

### Deploy to Vercel

The portfolio is pre-configured for one-click deployment on [Vercel](https://vercel.com/):

1. Push your code to your GitHub repository.
2. Import the project into Vercel.
3. Set your custom environment variables if needed.
4. Deploy!

---

## 📬 Contact & Socials

- **Developer:** Tonmoy Biswas
- **Location:** Dhaka, Bangladesh
- **Portfolio:** [tonmoyportfolio.vercel.app](https://tonmoyportfolio.vercel.app/)
- **GitHub:** [@tonmoybiswas07](https://github.com/tonmoybiswas07)
- **Twitter / X:** [@TonmoyBiswas945](https://x.com/TonmoyBiswas945)
- **Facebook:** [tonmoy.biswas.7564](https://web.facebook.com/tonmoy.biswas.7564)
- **Instagram:** [@___b.tonmoy](https://www.instagram.com/___b.tonmoy/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) – feel free to explore, learn from, and adapt the code for your own portfolio.
