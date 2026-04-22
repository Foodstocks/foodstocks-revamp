'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

/* ── icon chips for dropdown items ── */
const Chip = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
    {children}
  </span>
);

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const t = useTranslations('nav');
  const m = useTranslations('megaMenu');

  function toggleSection(s: string) {
    setMobileSection((prev) => (prev === s ? null : s));
  }

  return (
    <header className="sticky top-0 z-50 bg-white/96 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[88rem] mx-auto px-6 h-[66px] flex items-center gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex-shrink-0 mr-1">
          <Image src="/logo.png" alt="Foodstocks" width={140} height={36} className="h-9 w-auto" priority />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1" aria-label="Main navigation">

          {/* Solutions mega-menu */}
          <div className="nav-item relative">
            <button type="button" className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-red rounded-xl hover:bg-gray-50 transition-all duration-150">
              {t('solutions')}
              <svg className="nav-chevron w-3.5 h-3.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="mega-menu absolute left-0 top-full pt-3 w-[720px]">
              <div className="bg-white rounded-2xl shadow-[0_12px_40px_-8px_rgba(15,23,42,0.14)] border border-gray-100 overflow-hidden">
                <div className="p-6 grid grid-cols-3 gap-x-6">

                  {/* For Suppliers */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 px-2.5">{m('forSuppliers')}</p>
                    <ul className="space-y-0.5">
                      <li>
                        <Link href="/solutions/distribution-network" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-red-50 text-brand-red">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">{m('distributionNetwork')}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('distributionNetworkDesc')}</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/supplier" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-orange-50 text-orange-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">{m('supplierPortal')}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('supplierPortalDesc')}</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/quality-warehousing" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-emerald-50 text-emerald-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">{m('qualityWarehousing')}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('qualityWarehousingDesc')}</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/supplier#kol" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-pink-50 text-pink-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">{m('kolAffiliator')}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('kolAffiliatorDesc')}</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* For Resellers */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 px-2.5">{m('forResellers')}</p>
                    <ul className="space-y-0.5">
                      <li>
                        <Link href="/solutions/wholesale" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-blue-50 text-blue-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">{m('wholesale')}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('wholesaleDesc')}</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/consignment" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-amber-50 text-amber-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">{m('consignment')}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('consignmentDesc')}</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/dropship" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-violet-50 text-violet-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">{m('dropship')}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('dropshipDesc')}</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Featured card */}
                  <div className="bg-gradient-to-br from-brand-ink via-slate-800 to-slate-900 rounded-xl p-5 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-brand-red bg-brand-red/20 px-2.5 py-1 rounded-full">
                        {m('orderAgentBadge')}
                      </span>
                      <p className="font-[family-name:var(--font-display)] font-bold text-base mt-3 text-white leading-snug">{m('orderAgentTitle')}</p>
                      <p className="text-xs text-white/55 mt-2 leading-relaxed">{m('orderAgentDesc')}</p>
                    </div>
                    <Link href="/technology/order-agent" className="mt-5 inline-flex items-center gap-1.5 text-brand-red text-sm font-semibold group/cta">
                      <span className="group-hover/cta:underline">{m('orderAgentCta')}</span>
                      <svg className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </Link>
                  </div>
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

            <div className="mega-menu absolute left-0 top-full pt-3 w-[680px]">
              <div className="bg-white rounded-2xl shadow-[0_12px_40px_-8px_rgba(15,23,42,0.14)] border border-gray-100 overflow-hidden">
                <div className="p-6 grid grid-cols-3 gap-x-6">

                  {/* Retail */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 px-2.5">{m('techForRetail')}</p>
                    <ul className="space-y-0.5">
                      <li>
                        <Link href="/technology/ar" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-purple-50 text-purple-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">AR Product Viz</p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('arShort')}</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <a href="#" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-sky-50 text-sky-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">{m('retailCatalog')}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('retailCatalogDesc')}</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Reseller + Supplier */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 px-2.5">{m('techForReseller')}</p>
                    <ul className="space-y-0.5 mb-5">
                      <li>
                        <Link href="/technology/order-agent" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-brand-red/10 text-brand-red">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">
                              {m('orderAgentTitle')}
                              <span className="ml-1.5 text-[9px] font-bold text-brand-red bg-brand-red/10 px-1.5 py-0.5 rounded-full">{m('new')}</span>
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('orderAgentShort')}</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 px-2.5">{m('techForSupplier')}</p>
                    <ul className="space-y-0.5">
                      <li>
                        <a href="#" className="group flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                          <Chip color="bg-violet-50 text-violet-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                          </Chip>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-none">{m('smartWms')}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{m('smartWmsDesc')}</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Featured — AR */}
                  <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-brand-ink rounded-xl p-5 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-purple-300 bg-purple-500/20 px-2.5 py-1 rounded-full">
                        {m('techFeaturedBadge')}
                      </span>
                      <p className="font-[family-name:var(--font-display)] font-bold text-base mt-3 text-white leading-snug">{m('techFeaturedTitle')}</p>
                      <p className="text-xs text-white/55 mt-2 leading-relaxed">{m('techFeaturedDesc')}</p>
                    </div>
                    <Link href="/technology/ar" className="mt-5 inline-flex items-center gap-1.5 text-purple-300 text-sm font-semibold group/cta">
                      <span className="group-hover/cta:underline">{m('techFeaturedCta')}</span>
                      <svg className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple links */}
          <Link href="/case-studies" className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-red rounded-xl hover:bg-gray-50 transition-all duration-150">
            {t('caseStudies')}
          </Link>
          <Link href="/about" className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-red rounded-xl hover:bg-gray-50 transition-all duration-150">
            {t('about')}
          </Link>
          <Link href="/blog" className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-red rounded-xl hover:bg-gray-50 transition-all duration-150">
            {t('blog')}
          </Link>
        </nav>

        {/* ── Right side CTAs ── */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          {/* Language toggle */}
          <button type="button" className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-500 hover:text-gray-800 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-150" aria-label="Ganti bahasa">
            <span className="text-sm leading-none">🇮🇩</span>
            <span>ID</span>
          </button>

          {/* Login */}
          <Button href="#" size="sm" variant="secondary">
            {t('login')}
          </Button>

          {/* Primary CTA */}
          <Button href="/contact" size="sm">
            {t('ctaDaftar')} →
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 ml-auto text-gray-600 hover:text-brand-ink rounded-lg hover:bg-gray-50 transition-colors"
          aria-label="Buka menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-[88rem] mx-auto px-6 py-2 divide-y divide-gray-50">

            {/* Solutions accordion */}
            <div>
              <button type="button" onClick={() => toggleSection('solutions')} className="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-gray-900">
                Solutions
                <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'solutions' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`faq-body ${mobileSection === 'solutions' ? 'is-open' : ''}`}>
                <div className="pb-3 space-y-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2 py-1">{m('forSuppliers')}</p>
                  <Link href="/solutions/distribution-network" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{m('distributionNetwork')}</Link>
                  <Link href="/solutions/supplier" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{m('supplierPortal')}</Link>
                  <Link href="/solutions/quality-warehousing" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{m('qualityWarehousing')}</Link>
                  <Link href="/solutions/supplier#kol" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{m('kolAffiliator')}</Link>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2 py-1 pt-2">{m('forResellers')}</p>
                  <Link href="/solutions/wholesale" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{m('wholesale')}</Link>
                  <Link href="/solutions/consignment" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{m('consignment')}</Link>
                  <Link href="/solutions/dropship" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{m('dropship')}</Link>
                </div>
              </div>
            </div>

            {/* Technology accordion */}
            <div>
              <button type="button" onClick={() => toggleSection('technology')} className="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-gray-900">
                Technology
                <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'technology' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`faq-body ${mobileSection === 'technology' ? 'is-open' : ''}`}>
                <div className="pb-3 space-y-0.5">
                  <Link href="/technology/ar" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>AR Product Viz</Link>
                  <Link href="/technology/order-agent" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{m('orderAgentTitle')}</Link>
                  <a href="#" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{m('smartWms')}</a>
                </div>
              </div>
            </div>

            {/* Company accordion */}
            <div>
              <button type="button" onClick={() => toggleSection('company')} className="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-gray-900">
                Company
                <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'company' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`faq-body ${mobileSection === 'company' ? 'is-open' : ''}`}>
                <div className="pb-3 space-y-0.5">
                  <Link href="/about" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{t('about')}</Link>
                  <Link href="/case-studies" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{t('caseStudies')}</Link>
                  <Link href="/blog" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{t('blog')}</Link>
                  <Link href="/contact" className="block px-2 py-2 text-sm rounded-xl hover:bg-gray-50" onClick={() => setMobileOpen(false)}>{t('contact')}</Link>
                </div>
              </div>
            </div>

            {/* Bottom CTAs */}
            <div className="py-4 grid grid-cols-2 gap-2">
              <Button href="#" variant="secondary" className="w-full justify-center">{t('login')}</Button>
              <Button href="/contact" className="w-full justify-center">{t('ctaDaftar')} →</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
