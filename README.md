# AB Removals – Man and Van

Production website for **AB Removals – Man and Van**, a UK-based removals and logistics business offering domestic removals, commercial moves, and dedicated man and van services.

Built with Next.js App Router, React Server Components, TypeScript (Strict), Tailwind CSS v4, Biome, and Zod.

---

## 🛠️ Technology Stack

- **Framework**: Next.js (App Router, React Server Components by default)
- **Runtime & Language**: Node.js >= 20.0.0, TypeScript (Strict mode enabled)
- **Package Manager**: `pnpm` (strictly enforced via `.npmrc` and `packageManager`)
- **Styling**: Tailwind CSS v4 with custom brand tokens in `@theme`
- **Validation**: Zod for compile-time and runtime validation (client & server)
- **Forms**: React Hook Form with `@hookform/resolvers/zod`
- **Environment Management**: `@t3-oss/env-nextjs`
- **Linter & Formatter**: Biome (`biome check`)
- **Git Hooks**: Husky + lint-staged (pre-commit checking: Biome + TypeScript `tsc --noEmit`)
- **Email Dispatch**: Resend
- **Rate Limiting**: `@upstash/ratelimit` + `@upstash/redis` (with in-memory fallback)
- **Testing**: Vitest (Unit / Integration) & Playwright (End-to-End)

---

## 📁 Project Structure

```
├── .husky/                  # Git hooks (pre-commit lint & typecheck)
├── docs/
│   └── TODO.md              # Tracked client confirmation checklist & placeholders
├── public/                  # Static assets and icons
├── src/
│   ├── app/
│   │   ├── (marketing)/     # Public marketing route group
│   │   │   ├── page.tsx     # Homepage
│   │   │   ├── services/    # All services & dynamic [service] route
│   │   │   ├── areas/       # Service coverage areas & dynamic [city]/[service] routes
│   │   │   ├── the-van/     # Vehicle specifications and loading capabilities
│   │   │   ├── pricing/     # Transparent pricing and hourly rates policy
│   │   │   ├── faq/         # Frequently asked questions
│   │   │   ├── reviews/     # Verified customer testimonials
│   │   │   ├── about/       # Company history and story
│   │   │   ├── contact/     # Direct phone & contact details
│   │   │   └── quote/       # Quote request page
│   │   ├── (legal)/         # Legal routes (privacy, terms, cookies)
│   │   ├── api/
│   │   │   └── quote/       # Server route handler for quote submissions
│   │   ├── layout.tsx       # Root layout with en-GB locale and font configuration
│   │   ├── not-found.tsx    # 404 page
│   │   ├── error.tsx        # Client error boundary
│   │   ├── loading.tsx      # Fallback loading spinner
│   │   ├── sitemap.ts       # Dynamic XML sitemap generation
│   │   ├── robots.ts        # Dynamic robots.txt generation
│   │   ├── manifest.ts      # Progressive Web App manifest
│   │   └── opengraph-image.tsx # Dynamic OpenGraph card generation
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives (buttons, inputs, cards)
│   │   ├── layout/          # Global layout components (navbar, footer, containers)
│   │   ├── sections/        # Marketing sections (hero, features, testimonials)
│   │   ├── quote/           # Interactive quote calculator and forms
│   │   └── seo/             # Structured data components (Schema.org JSON-LD)
│   ├── content/             # Strictly typed content data
│   │   ├── site.ts          # Business contact info, telephone, placeholders
│   │   ├── services.ts      # The 6 core service definitions
│   │   ├── areas.ts         # Coverage areas and UK postcode regions
│   │   ├── faqs.ts          # Curated FAQ entries
│   │   └── reviews.ts       # Customer reviews repository
│   ├── lib/
│   │   ├── email/           # Email dispatch helpers (Resend)
│   │   ├── security/        # Rate limiting, turnstile verification, sanitization
│   │   ├── seo/             # OpenGraph metadata and Schema.org builders
│   │   ├── validations/     # Zod form schemas (quote form)
│   │   ├── env.ts           # Type-safe environment variables
│   │   └── utils.ts         # Tailwind class merger (clsx + tailwind-merge)
│   ├── styles/
│   │   └── globals.css      # Tailwind v4 import and brand palette tokens
│   ├── types/               # Global TypeScript interface definitions
│   └── middleware.ts        # Next.js security headers & routing middleware
└── tests/
    ├── unit/                # Vitest unit test suites
    └── e2e/                 # Playwright browser end-to-end specs
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `>= 20.0.0`
- pnpm `>= 10.0.0` (`npm` and `yarn` are prohibited)

### 2. Environment Setup
Copy the example environment configuration:
```bash
cp .env.example .env.local
```

### 3. Installation
Install project dependencies:
```bash
pnpm install
```

### 4. Development Server
Start the Next.js local development server:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 Available Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `pnpm dev` | Starts the Next.js development server |
| `build` | `pnpm build` | Compiles the production build |
| `start` | `pnpm start` | Runs the compiled production server |
| `lint` | `pnpm lint` | Runs Biome code analysis and formatting checks |
| `format` | `pnpm format` | Automatically formats codebase using Biome |
| `typecheck` | `pnpm typecheck` | Executes TypeScript strict type verification (`tsc --noEmit`) |
| `test` | `pnpm test` | Runs unit and integration test suites with Vitest |
| `test:e2e` | `pnpm test:e2e` | Runs Playwright end-to-end browser tests |
| `audit` | `pnpm audit` | Scans dependencies for security vulnerabilities |

---

## 🔒 Security & Code Standards

- **Server-Side Input Validation**: All submissions are checked using strict Zod schemas with regex verification for UK postcodes and phone numbers.
- **Data Protection & Privacy**: Server logs are stripped of customer personal data.
- **Anti-Spam & Abuse Protection**: Integrated with Upstash Redis rate limiting and Cloudflare Turnstile token verification.
- **Strict Locale**: Content conforms to British English (`en-GB`), GBP currency (`£`), and `DD/MM/YYYY` date format.
- **Placeholders**: Any unconfirmed business details are catalogued in [docs/TODO.md](docs/TODO.md) and flagged with `[TODO: confirm]`.
