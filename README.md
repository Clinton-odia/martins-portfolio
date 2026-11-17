# ⚡ RF → DC: Dr. Martins Odiamenhi Engineering Portfolio

> **Instrument-Grade Portfolio & Research Showcase**  
> *RF Systems · Wireless Power Transfer · Nonlinear Energy Modelling*  
> **Wavemind Systems** Research Initiative

---

## 🔬 Overview

This repository houses the personal engineering portfolio, research portal, and technical lab log for **Dr. Martins Odiamenhi** (PhD in Electrical & Electronic Engineering, Edinburgh Napier University).

Designed with the aesthetic precision of a calibrated laboratory instrument, the platform showcases Dr. Odiamenhi’s investigations into converting ambient electromagnetic radiation into regulated direct current (DC) power for perpetual, battery-free Internet of Things (IoT) sensors and healthcare telemetry.

The site is built as a **zero-backend, ultra-fast static web application** using **React 18, TypeScript, and Vite**, powered by a **pure, deterministic regular CSS architecture** (no runtime CSS frameworks or Tailwind layout dependencies).

---

## 📡 Core Research Pillars

The portfolio organizes Dr. Odiamenhi’s doctoral and postdoctoral research into three core pillars:

```
                  ┌─────────────────────────────────────────────────────────┐
                  │                 01. RF & MICROWAVE SYSTEMS              │
                  │   Dual-Band Antennas · Rectennas · Harmonic Rejection   │
                  └────────────────────────────┬────────────────────────────┘
                                               │
                                               ▼
                  ┌─────────────────────────────────────────────────────────┐
                  │         02. ENERGY STORAGE & POWER MANAGEMENT           │
                  │   State-Space Modelling · Supercapacitor Dynamics · PMIC│
                  └────────────────────────────┬────────────────────────────┘
                                               │
                                               ▼
                  ┌─────────────────────────────────────────────────────────┐
                  │          03. WIRELESS SENSOR NETWORKS & CONTROL         │
                  │   SWIPT Protocols · Battery-Free IoT · Cooja Simulation │
                  └─────────────────────────────────────────────────────────┘
```

1. **RF & Microwave Systems:** Miniaturized microstrip antennas, circular polarization (RHCP/LHCP) for orientation-insensitive reception, native distributed matching networks, and harmonic-suppressing microwave front-ends achieving **>60% power conversion efficiency (PCE)** at $-10\text{ dBm}$ input power.
2. **Energy Storage & Power Management:** Nonlinear diode equivalent circuits, supercapacitor charging kinetics under erratic micro-watt flux, ultra-low-power cold-start PMIC topologies, and state-space analytical derivations.
3. **Wireless Sensor Networks & Control:** Simultaneous Wireless Information and Power Transfer (SWIPT) architectures, power-aware duty-cycled sensing protocols, and network-level lifetime verification via Cooja/Contiki-NG.

---

## ✨ Key Features & Interactive Systems

- **Animated Signal Scope (Hero Section):** A real-time vector visualization demonstrating the transformation of an incoming high-frequency RF wave ($f_0 = 5.8\text{ GHz}$) into rectified harmonics via Schottky diode action, smoothed through a low-pass filter stage into a steady phosphor-teal DC output line.
- **Interactive 5-Stage Harvester Schematic (`/research`):** Clickable block diagram detailing the end-to-end signal chain (Antenna Array → Impedance Match → Nonlinear Diode → Power Conditioning → IoT Node).
- **Verified Publication Engine (`/publications`):** 9+ peer-reviewed journal papers and symposium proceedings with verified DOIs, category filtering, expandable abstract drawers, formatted citation copy buttons, and instant BibTeX export (`.bib`).
- **Engineering Notes & Lab Log (`/notes`):** In-depth technical articles featuring native LaTeX mathematical notation rendered via KaTeX and syntax-highlighted simulation scripts (Python, MATLAB).
- **Datasheet Hardware Spec Chips:** Every project detail card displays standardized engineering metrics (frequency bands, substrate dielectric properties, peak efficiency, dimensions, and simulation vs. measurement validation status).
- **Dual-Theme Instrument Panel:** Seamless toggle between Dark Ink (`#0A0F1A`) and Daylight Blueprint (`#F8FAFC`), strictly tested to surpass **WCAG AA contrast standards** across all text and border pairings.
- **Client Integrity Guard:** Strictly adheres to zero-hallucination protocols. All pending personal facts are cleanly isolated as traceable `TODO(martins)` placeholders tracked via automated CI scripts.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | **React 18** | Robust component tree, fast hydration, zero-runtime overhead |
| **Language** | **TypeScript 5.6** | Strict type safety for data models, publication schemas, and props |
| **Build Tool** | **Vite 6** | Instant Hot Module Replacement (HMR) and optimized rollup production bundles |
| **Styling** | **Pure Regular CSS** | Deterministic layout, custom CSS properties, no Tailwind engine or margin bugs |
| **Typography** | **Self-Hosted Fontsource** | `Space Grotesk` (display), `Inter` (body), `JetBrains Mono` (metrics/code) |
| **Mathematics** | **KaTeX + remark-math** | Fast, client-side LaTeX equation rendering without layout shift |
| **Icons** | **Lucide React** | Clean, lightweight SVG technical icons |
| **Data Validation** | **Zod** | Runtime schema enforcement for notes, projects, and publication records |

---

## 📁 Repository Structure

```
martins_portfolio/
├── public/                     # Static assets & downloadable documents
│   └── martins-odiamenhi-cv.pdf
├── scripts/
│   └── check-todos.mjs         # Automated auditor for TODO(martins) placeholders
├── src/
│   ├── assets/                 # SVGs and project schematics
│   ├── components/             # Reusable instrument-grade UI components
│   │   ├── Footer.tsx          # 4-column footer with Wavemind vision & sitemap
│   │   ├── Icons.tsx           # Typed Lucide icon bindings
│   │   ├── Nav.tsx             # Sticky backdrop-blur navigation with pill links
│   │   ├── NoteCard.tsx        # Engineering note summary card
│   │   ├── PillarCard.tsx      # Research foundation card with metric chips
│   │   ├── ProjectCard.tsx     # Hardware project card with bespoke vector diagrams
│   │   ├── PublicationRow.tsx  # Expandable publication row with BibTeX generator
│   │   ├── RFDivider.tsx       # Isolated RF-to-DC wave section divider
│   │   ├── RFWaveHero.tsx      # Animated oscilloscope signal scope
│   │   ├── SpecChip.tsx        # Datasheet specification chip
│   │   ├── StatStrip.tsx       # 4-column numeric instrument strip
│   │   └── ThemeToggle.tsx     # Dark/light mode switcher with local persistence
│   ├── content/                # Data files and markdown notes (CMS-free)
│   │   ├── data.ts             # Projects, notes, and research pillars
│   │   ├── publications.json   # 9+ peer-reviewed publications
│   │   ├── schemas.ts          # Zod schema definitions
│   │   └── site.config.ts      # Global site metadata, links, and credentials
│   ├── pages/                  # Route views
│   │   ├── About.tsx           # Bio, non-overlapping timeline, and lab skills
│   │   ├── Contact.tsx         # Mailto obfuscation, direct channels, availability
│   │   ├── CV.tsx              # CV download hub and executive credentials
│   │   ├── Home.tsx            # 5-second landing view with hero, pillars, projects
│   │   ├── NoteDetail.tsx      # Single engineering note with LaTeX & code
│   │   ├── Notes.tsx           # Searchable laboratory logs & tag filter
│   │   ├── NotFound.tsx        # Branded 404 error page
│   │   ├── ProjectDetail.tsx   # Deep-dive hardware build datasheets
│   │   ├── Projects.tsx        # Filterable project portfolio grid
│   │   ├── Publications.tsx    # Complete peer-reviewed research index
│   │   └── Research.tsx        # Research statement & 5-stage block diagram
│   ├── styles/                 # Modular Regular CSS System (No Tailwind)
│   │   ├── base.css            # Resets, typography, blueprint grid, scrollbars
│   │   ├── components.css      # Component-level styles (nav, hero, scope, timeline)
│   │   ├── layout.css          # Container, grid, flexbox, and responsive rules
│   │   └── tokens.css          # Color variables, fonts, shadows, and radii
│   ├── App.tsx                 # Client router and layout shell
│   ├── index.css               # CSS entry point
│   ├── main.tsx                # React DOM root entry point
│   └── vite-env.d.ts           # Ambient type declarations
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** `v18.0.0` or higher
- **pnpm** (recommended) or **npm**

### Installation

Clone the repository and install dependencies:

```bash
cd martins_portfolio
pnpm install
# or: npm install
```

### Development Server

Start the local development server with instant Hot Module Replacement:

```bash
pnpm dev
# or: npm run dev
```

Open `http://localhost:5173` in your browser.

### Type Checking & Audits

Verify that all TypeScript types compile without errors:

```bash
npx tsc --noEmit
```

Run the automated placeholder audit to check for remaining client confirmation items:

```bash
npm run check:todos
```

### Production Build

Generate the optimized, static production bundle:

```bash
pnpm build
# or: npm run build
```

The compiled static assets will be output to the `dist/` directory, ready to serve on any static hosting environment.

---

## 🚢 Deployment

The build output in `dist/` consists purely of standard HTML, CSS, JavaScript, and font files. It requires no Node.js runtime, server processes, or databases.

### Static Host Quick-Deploy

- **Cloudflare Pages:** Connect repository, set build command `npm run build`, and output directory `dist`.
- **Netlify:** Set build command `npm run build` and publish directory `dist`.
- **GitHub Pages:** Deploy the `dist/` folder via GitHub Actions or the `gh-pages` branch.
- **cPanel / Apache / Nginx:** Upload the contents of `dist/` directly to your `public_html` directory.

---

## 📋 Client Checklist (`TODO(martins)`)

To maintain complete academic and professional accuracy, the portfolio uses strictly verified public records. A total of 23 specific items are flagged with `TODO(martins)` for Dr. Odiamenhi to review before public launch:
- Formal headshot photo (to place in `public/headshot.jpg`).
- Primary direct email address and LinkedIn / Google Scholar / ORCID profile URLs.
- Prior university degrees (BSc / BEng / MSc) in the `/about` timeline.
- Replacement of `public/martins-odiamenhi-cv.pdf` with the finalized official CV PDF.

Run `npm run check:todos` at any time to inspect the full list and line numbers.

---

## 📄 License & Attribution

- **Code Architecture:** MIT License.
- **Research Content, Papers & Diagrams:** © 2026 Dr. Martins Odiamenhi. All research rights reserved.
- **Brand Vision:** Wavemind Systems.
