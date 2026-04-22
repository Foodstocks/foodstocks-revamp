'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

/* ── colored icon chip ── */
function ItemIcon({ path, bg = 'bg-gray-100', color = 'text-gray-500' }: {
  path: string; bg?: string; color?: string;
}) {
  return (
    <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${bg} mt-0.5 transition-all`}>
      <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    </span>
  );
}

/* ── grid item card ── */
function ItemCard({ href, title, desc, path, badge, bg, color, onClick }: {
  href: string; title: string; desc: string; path: string;
  badge?: string; bg?: string; color?: string; onClick?: () => void;
}) {
  return (
    <Link href={href as never} onClick={onClick}
      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all">
      <ItemIcon path={path} bg={bg} color={color} />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors flex items-center gap-1.5">
          {title}
          {badge && <span className="text-[9px] font-bold text-brand-red bg-brand-red/10 px-1.5 py-0.5 rounded-full">{badge}</span>}
        </p>
        <p className="text-xs text-gray-500 mt-0.5 leading-snug">{desc}</p>
      </div>
    </Link>
  );
}

/* ── chevron-right icon ── */
const ChevronRight = () => (
  <svg className="w-4 h-4 text-gray-300 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

/* ── chevron-down icon ── */
const ChevronDown = ({ open }: { open: boolean }) => (
  <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

/* ── nav data ── */
const supplierItems = [
  { href: '/solutions/distribution-network', title: 'Jaringan Distribusi', desc: '30+ kota, logistik terintegrasi',   bg: 'bg-red-50',     color: 'text-brand-red',    path: 'M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' },
  { href: '/solutions/supplier',              title: 'Supplier Portal',     desc: 'Analytics & dashboard real-time',  bg: 'bg-orange-50',  color: 'text-orange-500',   path: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25' },
  { href: '/solutions/quality-warehousing',   title: 'Gudang Berkualitas',  desc: 'Cold storage · food-grade',        bg: 'bg-emerald-50', color: 'text-emerald-600',  path: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' },
  { href: '/solutions/supplier#kol',          title: 'KOL & Affiliator',    desc: 'Perluas jangkauan via kreator',    bg: 'bg-pink-50',    color: 'text-pink-500',     path: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
];

const resellerItems = [
  { href: '/solutions/wholesale',   title: 'Wholesale',  desc: 'Beli putus harga terbaik',       bg: 'bg-blue-50',   color: 'text-blue-600',   path: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' },
  { href: '/solutions/consignment', title: 'Konsinyasi', desc: 'Zero upfront · bayar saat laku', bg: 'bg-amber-50',  color: 'text-amber-500',  path: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { href: '/solutions/dropship',    title: 'Dropship',   desc: 'Tanpa stok · custom branding',   bg: 'bg-violet-50', color: 'text-violet-600', path: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' },
];

const techRetailItems = [
  { href: '/technology/ar', title: 'AR Product Viz', desc: '3D, resep, nutrisi',        bg: 'bg-purple-50', color: 'text-purple-600', path: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' },
  { href: '#',              title: 'Smart Catalog',  desc: 'Browse 923+ SKU dengan AR', bg: 'bg-sky-50',    color: 'text-sky-600',    path: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272' },
];

const techOpsItems = [
  { href: '/technology/order-agent', title: 'FS OrderAgent', desc: 'AI order capture',          bg: 'bg-red-50',    color: 'text-brand-red',    path: 'M13 10V3L4 14h7v7l9-11h-7z', badge: 'Baru' },
  { href: '#',                        title: 'Smart WMS',     desc: 'Inventory & auto-reorder', bg: 'bg-violet-50', color: 'text-violet-600',   path: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' },
];

export function Header() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [solutionsTab, setSolutionsTab]   = useState<'supplier' | 'reseller'>('supplier');
  const [techTab, setTechTab]             = useState<'retail' | 'ops'>('retail');
  const [openMenu, setOpenMenu]           = useState<string | null>(null);
  const timerRef                          = useRef<ReturnType<typeof setTimeout> | null>(null);

  const t = useTranslations('nav');

  function toggleSection(s: string) { setMobileSection((p) => (p === s ? null : s)); }
  function closeMobile() { setMobileOpen(false); }

  function menuEnter(name: string) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenMenu(name);
  }
  function menuLeave() {
    timerRef.current = setTimeout(() => setOpenMenu(null), 140);
  }

  const hasPanel = openMenu === 'solutions' || openMenu === 'technology';

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[82rem] mx-auto px-6 h-[68px] flex items-center gap-8 relative">

        {/* ── Logo ── */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Foodstocks" width={140} height={36} className="h-9 w-auto" priority />
        </Link>

        {/* ── Desktop nav — absolutely centered on page ── */}
        <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 z-10
                        bg-gray-100 border border-gray-200/80 rounded-full px-2 py-1.5 gap-0.5"
          aria-label="Main navigation">

          {/* Solutions trigger */}
          <button type="button"
            onMouseEnter={() => menuEnter('solutions')}
            onMouseLeave={menuLeave}
            className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${openMenu === 'solutions' ? 'bg-white text-brand-red shadow-sm' : 'text-gray-700 hover:bg-white hover:text-brand-red hover:shadow-sm'}`}>
            {t('solutions')}
            <ChevronDown open={openMenu === 'solutions'} />
          </button>

          {/* Technology trigger */}
          <button type="button"
            onMouseEnter={() => menuEnter('technology')}
            onMouseLeave={menuLeave}
            className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${openMenu === 'technology' ? 'bg-white text-brand-red shadow-sm' : 'text-gray-700 hover:bg-white hover:text-brand-red hover:shadow-sm'}`}>
            {t('technology')}
            <ChevronDown open={openMenu === 'technology'} />
          </button>

          {/* Simple links */}
          {[
            { href: '/case-studies', label: t('caseStudies') },
            { href: '/about',        label: t('about') },
            { href: '/blog',         label: t('blog') },
          ].map(({ href, label }) => (
            <Link key={href} href={href as never}
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-white hover:text-brand-red hover:shadow-sm rounded-full transition-all whitespace-nowrap">
              {label}
            </Link>
          ))}
        </nav>

        {/* ── Right side ── */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0 ml-auto">
          <Link href="/login" className="text-sm font-semibold text-gray-600 hover:text-brand-red transition-colors whitespace-nowrap">
            Login
          </Link>
          <Button href="/contact" size="sm" className="px-5 whitespace-nowrap">
            Daftar Sekarang →
          </Button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button type="button"
          className="lg:hidden p-2 ml-auto text-gray-600 hover:text-brand-ink rounded-lg hover:bg-gray-50 transition-colors"
          aria-label="Buka menu"
          onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* ── Full-width mega dropdown (Ukirama layout) ── */}
      <div
        className={`absolute left-0 right-0 top-full bg-white border-t-2 border-brand-red shadow-[0_20px_40px_-10px_rgba(15,23,42,0.12)] z-50 transition-all duration-[180ms] ease-out ${
          hasPanel ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onMouseEnter={() => openMenu && menuEnter(openMenu)}
        onMouseLeave={menuLeave}
      >
        {/* ── Solutions panel ── */}
        {openMenu === 'solutions' && (
          <div className="max-w-[82rem] mx-auto px-6 flex min-h-[220px]">
            {/* Left sidebar */}
            <div className="w-56 flex-shrink-0 py-5 px-3 bg-[#F7F8FA] rounded-xl mr-6 flex flex-col">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1 mb-2">Solutions</p>
              {([
                { key: 'supplier' as const, title: 'Untuk Supplier', desc: 'Distribusi & produksi' },
                { key: 'reseller' as const, title: 'Untuk Reseller', desc: 'Jual lebih banyak' },
              ] as const).map(({ key, title, desc }) => (
                <button key={key} type="button" onMouseEnter={() => setSolutionsTab(key)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between mb-1 ${
                    solutionsTab === key
                      ? 'bg-white shadow-sm border border-gray-200'
                      : 'hover:bg-white/60'
                  }`}>
                  <div>
                    <p className={`text-sm font-bold transition-colors ${solutionsTab === key ? 'text-brand-red' : 'text-gray-800'}`}>{title}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{desc}</p>
                  </div>
                  <ChevronRight />
                </button>
              ))}
            </div>

            {/* Right panel */}
            <div className="flex-1 py-5">
              {solutionsTab === 'supplier' && (
                <>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Untuk Supplier</p>
                  <div className="grid grid-cols-2 gap-1">
                    {supplierItems.map((item) => (
                      <ItemCard key={item.href} {...item} onClick={() => setOpenMenu(null)} />
                    ))}
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-brand-ink to-slate-700 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest">Baru</span>
                      <p className="text-sm font-bold text-white mt-0.5">FS OrderAgent</p>
                      <p className="text-xs text-white/50 mt-0.5">AI order capture dari WhatsApp & email</p>
                    </div>
                    <Link href="/technology/order-agent" onClick={() => setOpenMenu(null)}
                      className="flex-shrink-0 ml-4 px-3 py-1.5 bg-brand-red text-white text-xs font-bold rounded-lg hover:bg-brand-red/90 transition-colors">
                      Lihat demo →
                    </Link>
                  </div>
                </>
              )}
              {solutionsTab === 'reseller' && (
                <>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Untuk Reseller</p>
                  <div className="grid grid-cols-2 gap-1">
                    {resellerItems.map((item) => (
                      <ItemCard key={item.href} {...item} onClick={() => setOpenMenu(null)} />
                    ))}
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-brand-ink to-slate-700 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest">Baru</span>
                      <p className="text-sm font-bold text-white mt-0.5">FS OrderAgent</p>
                      <p className="text-xs text-white/50 mt-0.5">AI order capture dari WhatsApp & email</p>
                    </div>
                    <Link href="/technology/order-agent" onClick={() => setOpenMenu(null)}
                      className="flex-shrink-0 ml-4 px-3 py-1.5 bg-brand-red text-white text-xs font-bold rounded-lg hover:bg-brand-red/90 transition-colors">
                      Lihat demo →
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ── Technology panel ── */}
        {openMenu === 'technology' && (
          <div className="max-w-[82rem] mx-auto px-6 flex min-h-[220px]">
            {/* Left sidebar */}
            <div className="w-56 flex-shrink-0 py-5 px-3 bg-[#F7F8FA] rounded-xl mr-6 flex flex-col">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1 mb-2">Technology</p>
              {([
                { key: 'retail' as const, title: 'Retail & Catalog', desc: 'AR, 3D, smart browse' },
                { key: 'ops'    as const, title: 'Operasional',       desc: 'AI order, WMS, analytics' },
              ] as const).map(({ key, title, desc }) => (
                <button key={key} type="button" onMouseEnter={() => setTechTab(key)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between mb-1 ${
                    techTab === key
                      ? 'bg-white shadow-sm border border-gray-200'
                      : 'hover:bg-white/60'
                  }`}>
                  <div>
                    <p className={`text-sm font-bold transition-colors ${techTab === key ? 'text-brand-red' : 'text-gray-800'}`}>{title}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{desc}</p>
                  </div>
                  <ChevronRight />
                </button>
              ))}
            </div>

            {/* Right panel */}
            <div className="flex-1 py-5">
              {techTab === 'retail' && (
                <>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Retail & Catalog</p>
                  <div className="grid grid-cols-2 gap-1">
                    {techRetailItems.map((item) => (
                      <ItemCard key={item.href} {...item} onClick={() => setOpenMenu(null)} />
                    ))}
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-slate-900 via-purple-950 to-brand-ink rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-purple-300 uppercase tracking-widest">Pertama di Indonesia</span>
                      <p className="text-sm font-bold text-white mt-0.5">AR Product Experience</p>
                      <p className="text-xs text-white/50 mt-0.5">Visualisasi 3D, resep, & info nutrisi</p>
                    </div>
                    <Link href="/technology/ar" onClick={() => setOpenMenu(null)}
                      className="flex-shrink-0 ml-4 px-3 py-1.5 bg-purple-500 text-white text-xs font-bold rounded-lg hover:bg-purple-600 transition-colors">
                      Coba demo AR →
                    </Link>
                  </div>
                </>
              )}
              {techTab === 'ops' && (
                <>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Operasional</p>
                  <div className="grid grid-cols-2 gap-1">
                    {techOpsItems.map((item) => (
                      <ItemCard key={item.href} {...(item as Parameters<typeof ItemCard>[0])} onClick={() => setOpenMenu(null)} />
                    ))}
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-slate-900 via-purple-950 to-brand-ink rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-purple-300 uppercase tracking-widest">Pertama di Indonesia</span>
                      <p className="text-sm font-bold text-white mt-0.5">AR Product Experience</p>
                      <p className="text-xs text-white/50 mt-0.5">Visualisasi 3D, resep, & info nutrisi</p>
                    </div>
                    <Link href="/technology/ar" onClick={() => setOpenMenu(null)}
                      className="flex-shrink-0 ml-4 px-3 py-1.5 bg-purple-500 text-white text-xs font-bold rounded-lg hover:bg-purple-600 transition-colors">
                      Coba demo AR →
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
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
                  { href: '/technology/ar',          label: 'AR Product Viz' },
                  { href: '/technology/order-agent', label: 'FS OrderAgent' },
                  { href: '#',                        label: 'Smart WMS' },
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
                    <ChevronDown open={mobileSection === section} />
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
              <Link href="#" className="text-sm font-semibold text-gray-600 hover:text-brand-red" onClick={closeMobile}>
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
