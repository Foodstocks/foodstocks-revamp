'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations('nav');
  const m = useTranslations('megaMenu');

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <nav className="max-w-[88rem] mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Foodstocks" width={120} height={40} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">

          {/* Solutions mega-menu */}
          <div className="nav-item relative">
            <button type="button" className="px-3 py-2 font-medium text-sm hover:text-brand-red flex items-center gap-1">
              {t('solutions')}
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden><path d="M5.5 7.5L10 12l4.5-4.5z"/></svg>
            </button>
            <div className="mega-menu absolute left-0 top-full w-[720px] bg-white rounded-2xl shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] border border-gray-100 p-6 grid grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{m('forSuppliers')}</p>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/solutions/distribution-network" className="block hover:text-brand-red">
                      <span className="font-semibold">{m('distributionNetwork')}</span>
                      <span className="block text-xs text-gray-500">{m('distributionNetworkDesc')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/supplier" className="block hover:text-brand-red">
                      <span className="font-semibold">{m('supplierPortal')}</span>
                      <span className="block text-xs text-gray-500">{m('supplierPortalDesc')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/quality-warehousing" className="block hover:text-brand-red">
                      <span className="font-semibold">{m('qualityWarehousing')}</span>
                      <span className="block text-xs text-gray-500">{m('qualityWarehousingDesc')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/supplier#kol" className="block hover:text-brand-red">
                      <span className="font-semibold">{m('kolAffiliator')}</span>
                      <span className="block text-xs text-gray-500">{m('kolAffiliatorDesc')}</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{m('forResellers')}</p>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/solutions/wholesale" className="block hover:text-brand-red">
                      <span className="font-semibold">{m('wholesale')}</span>
                      <span className="block text-xs text-gray-500">{m('wholesaleDesc')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/consignment" className="block hover:text-brand-red">
                      <span className="font-semibold">{m('consignment')}</span>
                      <span className="block text-xs text-gray-500">{m('consignmentDesc')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/dropship" className="block hover:text-brand-red">
                      <span className="font-semibold">{m('dropship')}</span>
                      <span className="block text-xs text-gray-500">{m('dropshipDesc')}</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-brand-red-50 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-red bg-white px-2 py-0.5 rounded-full">
                    {m('orderAgentBadge')}
                  </span>
                  <p className="font-[family-name:var(--font-brand)] font-semibold text-lg mt-2">{m('orderAgentTitle')}</p>
                  <p className="text-xs text-gray-700 mt-1">{m('orderAgentDesc')}</p>
                </div>
                <Link href="/technology/order-agent" className="mt-3 inline-flex items-center gap-1 text-brand-red text-sm font-semibold">
                  {m('orderAgentCta')}
                </Link>
              </div>
            </div>
          </div>

          {/* Technology mega-menu */}
          <div className="nav-item relative">
            <button type="button" className="px-3 py-2 font-medium text-sm hover:text-brand-red flex items-center gap-1">
              {t('technology')}
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden><path d="M5.5 7.5L10 12l4.5-4.5z"/></svg>
            </button>
            <div className="mega-menu absolute left-0 top-full w-[720px] bg-white rounded-2xl shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] border border-gray-100 p-6 grid grid-cols-3 gap-6">
              {/* Retail */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{m('techForRetail')}</p>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/technology/ar" className="group flex gap-3 p-2 rounded-lg hover:bg-gray-50">
                      <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold group-hover:text-brand-red">AR Product Viz</p>
                        <p className="text-xs text-gray-500">{m('arShort')}</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="group flex gap-3 p-2 rounded-lg hover:bg-gray-50">
                      <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold group-hover:text-brand-red">{m('retailCatalog')}</p>
                        <p className="text-xs text-gray-500">{m('retailCatalogDesc')}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Reseller + Supplier */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{m('techForReseller')}</p>
                <ul className="space-y-3 text-sm mb-5">
                  <li>
                    <Link href="/technology/order-agent" className="group flex gap-3 p-2 rounded-lg hover:bg-gray-50">
                      <span className="w-8 h-8 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold group-hover:text-brand-red">
                          {m('orderAgentTitle')} <span className="text-[10px] text-brand-red ml-1">{m('new')}</span>
                        </p>
                        <p className="text-xs text-gray-500">{m('orderAgentShort')}</p>
                      </div>
                    </Link>
                  </li>
                </ul>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{m('techForSupplier')}</p>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="#" className="group flex gap-3 p-2 rounded-lg hover:bg-gray-50">
                      <span className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-semibold group-hover:text-brand-red">{m('smartWms')}</p>
                        <p className="text-xs text-gray-500">{m('smartWmsDesc')}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Featured */}
              <div className="bg-brand-ink rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-red bg-brand-red/20 px-2 py-0.5 rounded-full">
                    {m('techFeaturedBadge')}
                  </span>
                  <p className="font-[family-name:var(--font-brand)] font-semibold text-lg mt-2 text-white">{m('techFeaturedTitle')}</p>
                  <p className="text-xs text-white/60 mt-1">{m('techFeaturedDesc')}</p>
                </div>
                <Link href="/technology/ar" className="mt-3 inline-flex items-center gap-1 text-brand-red text-sm font-semibold hover:gap-2 transition-all">
                  {m('techFeaturedCta')}
                </Link>
              </div>
            </div>
          </div>

          <Link className="px-3 py-2 font-medium text-sm hover:text-brand-red" href="/case-studies">{t('caseStudies')}</Link>
          <Link className="px-3 py-2 font-medium text-sm hover:text-brand-red" href="/about">{t('about')}</Link>
          <Link className="px-3 py-2 font-medium text-sm hover:text-brand-red" href="/contact">{t('contact')}</Link>
          <Link className="px-3 py-2 font-medium text-sm hover:text-brand-red" href="/blog">{t('blog')}</Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link href="/shop" className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 font-medium text-sm hover:text-brand-red">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272" />
            </svg>
            Shop
          </Link>
          <Button href="#" size="sm" variant="secondary">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            {t('login')}
          </Button>
          <button
            type="button"
            className="lg:hidden p-2"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 pt-2 pb-1">Solutions</p>
            <Link href="/solutions/supplier" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{m('forSuppliers')}</Link>
            <Link href="/solutions/reseller" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{m('forResellers')}</Link>
            <Link href="/solutions/supplier#kol" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{m('kolAffiliator')}</Link>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 pt-3 pb-1">Technology</p>
            <Link href="/technology/order-agent" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{m('orderAgentTitle')}</Link>
            <Link href="/technology/ar" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>AR Product Viz</Link>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 pt-3 pb-1">Company</p>
            <Link href="/case-studies" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{t('caseStudies')}</Link>
            <Link href="/about" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{t('about')}</Link>
            <Link href="/contact" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{t('contact')}</Link>
            <Link href="/blog" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>{t('blog')}</Link>
            <div className="pt-4 pb-2">
              <Button href="#" size="sm" className="w-full justify-center">{t('login')}</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
