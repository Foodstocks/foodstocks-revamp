# Foodstocks.id Revamp — Phase 1 Mockups

Static HTML + Tailwind mockups untuk validasi visual sebelum implementasi Next.js (Phase 2). Tidak ada build step — buka HTML langsung di browser.

## Cara preview

Mulai dari [`index.html`](index.html) — dashboard navigator ke semua halaman.

Atau buka halaman spesifik:

| # | File | Deskripsi |
|---|---|---|
| 01 | [`styleguide.html`](styleguide.html) | Design system foundation (colors, typography, komponen) |
| 02 | [`home.html`](home.html) | Marketing homepage lengkap (18 section) |
| 03 | [`solutions-supplier.html`](solutions-supplier.html) | Landing supplier/produsen |
| 04 | [`solutions-reseller.html`](solutions-reseller.html) | Landing reseller/minimarket |
| 05 | [`technology-order-agent.html`](technology-order-agent.html) | **Fitur baru** — FS OrderAgent AI |
| 06 | [`technology-ar.html`](technology-ar.html) | AR Product Visualization |
| 07 | [`case-study-detail.html`](case-study-detail.html) | Case study — Minimarket Dinastar |
| 08 | [`pricing.html`](pricing.html) | Pricing dual-audience (reseller/supplier) + comparison table |
| 09 | [`shop-home.html`](shop-home.html) | Shop portal homepage (shop.foodstocks.id) |
| 10 | [`shop-product-detail.html`](shop-product-detail.html) | Product detail + AR badge + model selector |
| 11 | [`dashboard-reseller.html`](dashboard-reseller.html) | Reseller dashboard (sidebar + stats + OrderAgent inbox) |

## Struktur file shared

```
mockups/
├── _config.js       # Tailwind CDN config (brand tokens)
├── _styles.css      # Custom CSS (btn, eyebrow, heading-brand, marquee, reveal)
├── _shared.js       # Interactivity (accordion, tabs, counter, mobile nav)
├── index.html       # Navigator ke semua halaman
├── README.md        # Dokumen ini
└── <pages>.html     # 11 mockup pages
```

## Design tokens

- **Brand Red** `#E30613` — primary anchor, CTAs, eyebrows
- **Brand Ink** `#0F172A` — dark sections (case study, final CTA)
- **Neutrals** — white + gray-50/100 dominan
- Tokens lengkap di [`../tailwind.config.js`](../tailwind.config.js) untuk Phase 2

## Typography hierarchy

| Class | Font | Pemakaian |
|---|---|---|
| `.heading-brand` | **Fredoka** 600 | Hero h1 + section h2 utama (big brand moments) |
| `.font-display` | Plus Jakarta Sans 700 | h3, card titles, subheadings |
| `.font-sans` (default) | Inter | Body text, UI |

## Prinsip visual

1. **Satu warna anchor** — merah brand untuk semua CTA, eyebrow, highlight
2. **Whitespace generous** — white/gray-50 dominan, decor minimal
3. **Iconography** — SVG outline monokrom, tidak pakai emoji di komponen utama
4. **Shadow minimal** — border-based, shadow hanya untuk hover
5. **Fredoka playful** hanya untuk headline brand-moment, sisanya clean sans

## Fitur existing Foodstocks yang dipertahankan

✅ AR Product Visualization (dapat halaman sendiri + badge di product detail)
✅ Sertifikasi BPOM / Halal MUI / BBI
✅ 3 Business Models (Wholesale / Consignment / Dropship)
✅ Reward Points (visible di dashboard + shop)
✅ Bilingual EN/ID toggle (functional di top bar)
✅ Coverage 30+ kota (peta stylized)
✅ Shop portal terpisah
✅ Testimonial supplier + reseller

## Fitur baru yang diadopsi dari Choco

✅ AI FS OrderAgent (WA/email/voice/foto PO) — halaman sendiri
✅ Hero video explainer placeholder
✅ Mega-menu navigation (Solutions/Technology by audience)
✅ Case study detail pages dengan metrics
✅ Logo integration carousel
✅ Animated stat counters
✅ Pricing page dengan comparison table
✅ Mockup UI dashboard di hero (ala Choco screenshot)

## Responsive breakpoints

- Mobile: < 768px
- Tablet: 768-1024px
- Desktop: ≥ 1024px

Test di Chrome DevTools responsive mode (Ctrl+Shift+M) atau resize browser.

## Catatan untuk Phase 2

1. Semua brand tokens sudah ada di [`../tailwind.config.js`](../tailwind.config.js) — tinggal copy
2. CDN Tailwind akan diganti jadi proper build (Tailwind v4 + PostCSS)
3. Komponen HTML yang di-duplicate di setiap page → componentize di Next.js:
   - `<Header />` (marketing vs shop variant)
   - `<Footer />`
   - `<MegaMenu />`
   - `<ProductCard />`, `<StatCard />`, `<TestimonialCard />`
4. Content yang hardcoded (produk, case studies, FAQ, blog) → pindah ke Sanity CMS
5. Mockup dashboard di hero akan diganti jadi screenshot asli + video demo (user akan replace)
