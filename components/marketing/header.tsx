'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

/* ── small colored icon chip ── */
const Chip = ({ color, path }: { color: string; path: string }) => (
  <span className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  </span>
);

/* ── solution tabs data ── */
const supplierItems = [
  { href: '/solutions/distribution-network', title: 'Jaringan Distribusi', desc: '30+ kota, logistik terintegrasi', chip: 'bg-red-50 text-brand-red',     path: 'M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' },
  { href: '/solutions/supplier',              title: 'Supplier Portal',     desc: 'Analytics & dashboard real-time', chip: 'bg-orange-50 text-orange-500', path: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25' },
  { href: '/solutions/quality-warehousing',   title: 'Gudang Berkualitas',  desc: 'Cold storage · food-grade',        chip: 'bg-emerald-50 text-emerald-600', path: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' },
  { href: '/solutions/supplier#kol',          title: 'KOL & Affiliator',    desc: 'Perluas jangkauan via kreator',    chip: 'bg-pink-50 text-pink-500',     path: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
];

const resellerItems = [
  { href: '/solutions/wholesale',   title: 'Wholesale',   desc: 'Beli putus harga terbaik',       chip: 'bg-blue-50 text-blue-600',    path: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' },
  { href: '/solutions/consignment', title: 'Konsinyasi',  desc: 'Zero upfront · bayar saat laku', chip: 'bg-amber-50 text-amber-500',  path: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { href: '/solutions/dropship',    title: 'Dropship',    desc: 'Tanpa stok · custom branding',   chip: 'bg-violet-50 text-violet-600', path: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' },
];

const techRetailItems = [
  { href: '/technology/ar',           title: 'AR Product Viz',  desc: '3D, resep, nutrisi',              chip: 'bg-purple-50 text-purple-600', path: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' },
  { href: '#',                         title: 'Smart Catalog',   desc: 'Browse 923+ SKU dengan AR',       chip: 'bg-sky-50 text-sky-600',       path: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272' },
];

const techOpsItems = [
  { href: '/technology/order-agent', title: 'FS OrderAgent', desc: 'AI order capture', chip: 'bg-red-50 text-brand-red',      path: 'M13 10V3L4 14h7v7l9-11h-7z', badge: 'Baru' },
  { href: '#',                        title: 'Smart WMS',     desc: 'Inventory & auto-reorder', chip: 'bg-violet-50 text-violet-600', path: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' },
];

function ItemRow({ href, title, desc, chip, path, badge, onClick }: {
  href: string; title: string; desc: string; chip: string; path: string;
  badge?: string; onClick?: () => void;
}) {
  return (
    <Link href={href as never} onClick={onClick}
      className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white hover:shadow-[0_2px_12px_-4px_rgba(15,23,42,0.10)] transition-all">
      <Chip color={chip} path={path} />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors flex items-center gap-1.5">
          {title}
          {badge && <span className="text-[9px] font-bold text-brand-red bg-brand-red/10 px-1.5 py-0.5 rounded-full">{badge}</span>}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
      </div>
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [solutionsTab, setSolutionsTab] = useState<'supplier' | 'reseller'>('supplier');
  const [techTab, setTechTab]           = useState<'retail' | 'ops'>('retail');
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function toggleSection(s: string) { setMobileSection((p) => (p === s ? null : s)); }
  function toggleLocale() { router.replace(pathname, { locale: locale === 'id' ? 'en' : 'id' }); }
  function closeMobile() { setMobileOpen(false); }

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-200/80 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]">
      <div className="max-w-[82rem] mx-auto px-6 h-[68px] flex items-center gap-6">

        {/* ── Logo ── */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Foodstocks" width={140} height={36} className="h-9 w-auto" priority />
        </Link>

        {/* ── Desktop nav — centered ── */}
        <nav className="hidden lg:flex items-center justify-center gap-0.5 flex-1" aria-label="Main navigation">

          {/* Solutions mega-menu */}
          <div className="nav-item relative">
            <button type="button" className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-red rounded-xl hover:bg-gray-50 transition-all duration-150">
              {t('solutions')}
              <svg className="nav-chevron w-3.5 h-3.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {/* ── 2-panel dropdown ── */}
            <div className="mega-menu absolute left-0 top-full pt-3 w-[640px]">
              <div className="bg-white rounded-2xl shadow-[0_16px_48px_-12px_rgba(15,23,42,0.18)] border border-gray-100 overflow-hidden flex">

                {/* Left sidebar — category tabs */}
                <div className="w-44 flex-shrink-0 bg-[#F7F8FA] p-3 space-y-1 border-r border-gray-100">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 px-3 pb-2 pt-1">Solutions</p>
                  <button type="button" onMouseEnter={() => setSolutionsTab('supplier')}
                    className={`w-full text-left px-3 py-3 rounded-xl transition-all duration-150 ${solutionsTab === 'supplier' ? 'bg-white shadow-sm border border-gray-200/80' : 'hover:bg-white/70'}`}>
                    <p className="text-xs font-bold text-gray-900">Untuk Supplier</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">Distribusi & produksi</p>
                  </button>
                  <button type="button" onMouseEnter={() => setSolutionsTab('reseller')}
                    className={`w-full text-left px-3 py-3 rounded-xl transition-all duration-150 ${solutionsTab === 'reseller' ? 'bg-white shadow-sm border border-gray-200/80' : 'hover:bg-white/70'}`}>
                    <p className="text-xs font-bold text-gray-900">Untuk Reseller</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">Jual lebih banyak</p>
                  </button>

                  {/* Featured mini-card at bottom of sidebar */}
                  <div className="!mt-4 mx-0.5 bg-gradient-to-br from-brand-ink to-slate-800 rounded-xl p-3">
                    <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest">Baru</p>
                    <p className="text-xs font-bold text-white mt-1 leading-tight">FS OrderAgent</p>
                    <p className="text-[10px] text-white/50 mt-1 leading-tight">AI order dari WA & email</p>
                    <Link href="/technology/order-agent" className="mt-2 flex items-center gap-1 text-brand-red text-[10px] font-bold hover:underline">
                      Lihat demo →
                    </Link>
                  </div>
                </div>

                {/* Right content panel */}
                <div className="flex-1 p-4">
                  {solutionsTab === 'supplier' && (
                    <div className="space-y-0.5">
                      {supplierItems.map((item) => (
                        <ItemRow key={item.href} {...item} />
                      ))}
                    </div>
                  )}
                  {solutionsTab === 'reseller' && (
                    <div className="space-y-0.5">
                      {resellerItems.map((item) => (
                        <ItemRow key={item.href} {...item} />
                      ))}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="px-3 py-2.5 rounded-xl bg-brand-red-50/60 border border-brand-red-100/60">
                          <p className="text-xs font-bold text-brand-red">Konsinyasi — Zero Upfront</p>
                          <p className="text-[11px] text-gray-600 mt-0.5">Bayar hanya saat produk terjual. Ideal untuk reseller baru.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Technology mega-menu */}
          <div className="nav-item relative">
            <button type="button" className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-red rounded-xl hover:bg-gray-50 transition-all duration-150">
              {t('technology')}
              <svg className="nav-chevron w-3.5 h-3.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="mega-menu absolute left-0 top-full pt-3 w-[560px]">
              <div className="bg-white rounded-2xl shadow-[0_16px_48px_-12px_rgba(15,23,42,0.18)] border border-gray-100 overflow-hidden flex">

                {/* Left sidebar */}
                <div className="w-44 flex-shrink-0 bg-[#F7F8FA] p-3 space-y-1 border-r border-gray-100">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 px-3 pb-2 pt-1">Technology</p>
                  <button type="button" onMouseEnter={() => setTechTab('retail')}
                    className={`w-full text-left px-3 py-3 rounded-xl transition-all duration-150 ${techTab === 'retail' ? 'bg-white shadow-sm border border-gray-200/80' : 'hover:bg-white/70'}`}>
                    <p className="text-xs font-bold text-gray-900">Retail & Catalog</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">AR, 3D, smart browse</p>
                  </button>
                  <button type="button" onMouseEnter={() => setTechTab('ops')}
                    className={`w-full text-left px-3 py-3 rounded-xl transition-all duration-150 ${techTab === 'ops' ? 'bg-white shadow-sm border border-gray-200/80' : 'hover:bg-white/70'}`}>
                    <p className="text-xs font-bold text-gray-900">Operasional</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">AI order, WMS, analytics</p>
                  </button>

                  {/* Featured */}
                  <div className="!mt-4 mx-0.5 bg-gradient-to-br from-slate-900 via-purple-950 to-brand-ink rounded-xl p-3">
                    <p className="text-[10px] font-bold text-purple-300 uppercase tracking-widest">Pertama di Indonesia</p>
                    <p className="text-xs font-bold text-white mt-1 leading-tight">AR Product Experience</p>
                    <Link href="/technology/ar" className="mt-2 flex items-center gap-1 text-purple-300 text-[10px] font-bold hover:underline">
                      Coba demo AR →
                    </Link>
                  </div>
                </div>

                {/* Right panel */}
                <div className="flex-1 p-4">
                  {techTab === 'retail' && (
                    <div className="space-y-0.5">
                      {techRetailItems.map((item) => (
                        <ItemRow key={item.href} {...item} />
                      ))}
                    </div>
                  )}
                  {techTab === 'ops' && (
                    <div className="space-y-0.5">
                      {techOpsItems.map((item) => (
                        <ItemRow key={item.href} {...(item as Parameters<typeof ItemRow>[0])} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Simple links */}
          {[
            { href: '/case-studies', label: t('caseStudies') },
            { href: '/about',        label: t('about') },
            { href: '/blog',         label: t('blog') },
          ].map(({ href, label }) => (
            <Link key={href} href={href as never}
              className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-red rounded-xl hover:bg-gray-50 transition-all duration-150 whitespace-nowrap">
              {label}
            </Link>
          ))}
        </nav>

        {/* ── Right side ── */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          {/* Language switcher */}
          <button type="button" onClick={toggleLocale}
            className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold text-gray-500 hover:text-gray-800 rounded-xl hover:bg-gray-100 transition-all duration-150"
            aria-label="Toggle language">
            <span className="text-sm leading-none">{locale === 'id' ? '🇮🇩' : '🇬🇧'}</span>
            <span className="uppercase">{locale}</span>
          </button>

          {/* Login — plain text link */}
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-brand-red transition-colors">
            {t('login')}
          </Link>

          {/* Primary CTA */}
          <Button href="/contact" size="sm" className="px-5">
            {t('ctaDaftar')} →
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button type="button"
          className="lg:hidden p-2 ml-auto text-gray-600 hover:text-brand-ink rounded-xl hover:bg-gray-50 transition-colors"
          aria-label="Buka menu"
          onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-[82rem] mx-auto px-6 py-2 divide-y divide-gray-50">

            {(['solutions', 'technology', 'company'] as const).map((section) => {
              const labels = { solutions: 'Solutions', technology: 'Technology', company: 'Company' };
              const items = {
                solutions: [
                  { href: '/solutions/supplier',             label: 'Supplier Portal' },
                  { href: '/solutions/distribution-network', label: 'Jaringan Distribusi' },
                  { href: '/solutions/quality-warehousing',  label: 'Gudang Berkualitas' },
                  { href: '/solutions/supplier#kol',         label: 'KOL & Affiliator' },
                  { href: '/solutions/wholesale',            label: 'Wholesale' },
                  { href: '/solutions/consignment',          label: 'Konsinyasi' },
                  { href: '/solutions/dropship',             label: 'Dropship' },
                ],
                technology: [
                  { href: '/technology/ar',           label: 'AR Product Viz' },
                  { href: '/technology/order-agent',  label: 'FS OrderAgent' },
                  { href: '#',                         label: 'Smart WMS' },
                ],
                company: [
                  { href: '/about',        label: t('about') },
                  { href: '/case-studies', label: t('caseStudies') },
                  { href: '/blog',         label: t('blog') },
                  { href: '/contact',      label: t('contact') },
                ],
              };
              return (
                <div key={section}>
                  <button type="button" onClick={() => toggleSection(section)}
                    className="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-gray-900">
                    <span>{labels[section]}</span>
                    <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === section ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className={`faq-body ${mobileSection === section ? 'is-open' : ''}`}>
                    <div className="pb-3 space-y-0.5">
                      {items[section].map(({ href, label }) => (
                        <Link key={href} href={href as never}
                          className="block px-2 py-2.5 text-sm text-gray-700 rounded-xl hover:bg-gray-50 hover:text-brand-red transition-colors"
                          onClick={closeMobile}>
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="py-4 flex items-center gap-3">
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-brand-red" onClick={closeMobile}>
                {t('login')}
              </Link>
              <Button href="/contact" className="flex-1 justify-center" onClick={closeMobile}>
                {t('ctaDaftar')} →
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
