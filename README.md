# Foodstocks.id — Revamp

Next.js 15 + React 19 + Tailwind v4 implementation untuk redesign Foodstocks.id, platform distribusi snack B2B di Indonesia. Reference visual: [choco.com](https://choco.com).

## Quick start

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Tech stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS v4 (@theme CSS config) |
| i18n | next-intl v4 (ID default, EN secondary) |
| CMS | Sanity (schemas + client ready; embedded studio skipped due to React 19 compat) |
| Deploy target | Vercel (static prerender) |

## Struktur folder

```
app/
├── layout.tsx                  # Root shell (html/body/fonts)
├── globals.css                 # Tailwind v4 @theme tokens + custom utilities
└── [locale]/
    ├── layout.tsx              # NextIntlClientProvider wrapper
    └── (marketing)/            # Route group: marketing site
        ├── layout.tsx          # TopBar + Header + Footer
        ├── page.tsx            # Home
        ├── solutions/
        │   ├── supplier/
        │   ├── reseller/
        │   ├── wholesale/
        │   ├── consignment/
        │   ├── dropship/
        │   ├── quality-warehousing/
        │   ├── distribution-network/
        │   └── supplier-portal/
        ├── technology/
        │   ├── order-agent/    # FS OrderAgent (new AI feature)
        │   └── ar/
        ├── case-studies/
        ├── pricing/
        └── blog/               # Powered by Sanity (fallback stub if not configured)
components/
├── ui/button.tsx
├── marketing/
│   ├── header.tsx              # Mega-menu nav (client)
│   ├── footer.tsx
│   ├── top-bar.tsx             # Lang toggle (ID ⇄ EN)
│   ├── reveal.tsx              # IntersectionObserver fade-up
│   ├── stat-counter.tsx        # Animated number counter
│   ├── stub-page.tsx           # Placeholder template
│   └── sections/
│       ├── hero.tsx
│       ├── dual-path.tsx       # Supplier vs Reseller tabs
│       ├── faq.tsx             # Accordion
│       └── pricing-tabs.tsx    # Reseller vs Supplier pricing
i18n/
├── routing.ts                  # Locale definitions (id, en)
├── request.ts                  # Server config
└── navigation.ts               # Locale-aware Link/usePathname
messages/
├── id.json                     # Indonesian (default)
└── en.json                     # English
middleware.ts                   # Locale prefix routing
sanity/
├── env.ts · client.ts · queries.ts
└── schemas/                    # blogPost + caseStudy types
mockups/                        # Phase 1 static HTML references (not deployed)
```

## Design system

- **Primary color**: `--color-brand-red #E30613` (dari logo)
- **Fonts**: Fredoka (brand display) + Plus Jakarta Sans (headings) + Inter (body)
- **Tokens**: Lihat `app/globals.css` → `@theme { ... }`
- **Typography utility**: `.heading-brand` untuk hero/section h1-h2 (Fredoka)
- Komponen: semua di `components/ui/` dan `components/marketing/`

## Scripts

```bash
npm run dev          # Dev server dengan Turbopack
npm run build        # Production build (static prerender)
npm run start        # Run production build locally
npm run typecheck    # TypeScript check (no emit)
npm run lint         # Next.js lint (belum detailed config)
```

## Environment variables

Copy `.env.local.example` → `.env.local` dan isi:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-id       # dari sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-12-01
```

Tanpa env vars, app tetap jalan — halaman `/blog` akan tampilkan stub "Sanity belum dikonfigurasi".

## Deploy ke Vercel

1. Push ke GitHub (atau provider git lain)
2. Di [vercel.com/new](https://vercel.com/new): Import project dari repo
3. Framework preset otomatis terdeteksi (Next.js)
4. Tambahkan env vars di Project Settings → Environment Variables
5. Deploy

## Pages yang sudah ported

14 unique pages × 2 locales = **28 static routes**, semua prerendered (SSG).

| Route | Status |
|---|---|
| `/` (home) | ✅ Full implementation |
| `/solutions/supplier`, `/solutions/reseller` | ✅ |
| `/solutions/wholesale`, `/consignment`, `/dropship` | ✅ |
| `/solutions/quality-warehousing`, `/distribution-network`, `/supplier-portal` | ✅ |
| `/technology/order-agent`, `/technology/ar` | ✅ |
| `/case-studies` | ✅ (single case: Minimarket Dinastar) |
| `/pricing` | ✅ (dual-audience tabs) |
| `/blog` | 🟡 Sanity-powered, needs env setup |

Konten body sebagian besar masih hardcoded Indonesian — translations EN tersedia hanya untuk chrome (header, footer, nav) dan home hero. Migrasi konten body ke `messages/*.json` bertahap.

## Masih TODO (roadmap)

- [ ] Shop portal (`/shop`, `/shop/product/[slug]`, `/dashboard`) — shop.foodstocks.id
- [ ] Full translation coverage (body content semua page)
- [ ] Sanity integration setup + first content
- [ ] Backend API integration (perlu info backend existing)
- [ ] Email/form handlers (contact, newsletter, demo request)
- [ ] Analytics (GA4 + Meta Pixel + Clarity)
- [ ] Coverage map interaktif (upgrade dari SVG static ke Mapbox)
- [ ] AR asset pipeline (3D model upload flow)

## Phase 1 mockups

Static HTML/Tailwind references di `/mockups` (tidak di-build oleh Next):
- Buka `mockups/index.html` untuk navigator
- Digunakan saat onboarding anggota tim baru untuk visual reference

## Notes untuk developer

- Semua `Link` harus pakai `@/i18n/navigation` (locale-aware), **bukan** `next/link`
- Client components yang pakai translations: `useTranslations('namespace')`
- Server components: `getTranslations('namespace')` dari `next-intl/server`
- `[locale]/layout.tsx` memanggil `setRequestLocale(locale)` untuk enable static rendering
- Middleware match pattern ada di `middleware.ts` — hati-hati saat tambah route baru yang bukan-locale
