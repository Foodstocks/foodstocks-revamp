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

        <div className="hidden lg:flex items-center gap-1">
          {/* Solutions mega-menu */}
          <div className="nav-item relative">
            <button className="px-3 py-2 font-medium text-sm hover:text-brand-red flex items-center gap-1">
              {t('solutions')}
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 7.5L10 12l4.5-4.5z"/></svg>
            </button>
            <div className="mega-menu absolute left-0 top-full w-[720px] bg-white rounded-2xl shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] border border-gray-100 p-6 grid grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{m('forSuppliers')}</p>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/solutions/distribution-network" className="block hover:text-brand-red">
                      <span className="font-semibold">{m('distributionNetwork')}</span>
                      <span className="block text-xs text-gray-500">{m('distributionNetworkDesc')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/supplier-portal" className="block hover:text-brand-red">
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
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{m('forResellers')}</p>
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
            <button className="px-3 py-2 font-medium text-sm hover:text-brand-red flex items-center gap-1">
              {t('technology')}
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 7.5L10 12l4.5-4.5z"/></svg>
            </button>
            <div className="mega-menu absolute left-0 top-full w-[560px] bg-white rounded-2xl shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] border border-gray-100 p-6 grid grid-cols-2 gap-4">
              <Link href="/technology/order-agent" className="group flex gap-3 p-3 rounded-xl hover:bg-gray-50">
                <span className="w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-sm group-hover:text-brand-red">
                    {m('orderAgentTitle')} <span className="text-[10px] text-brand-red ml-1">{m('new')}</span>
                  </p>
                  <p className="text-xs text-gray-500">{m('orderAgentShort')}</p>
                </div>
              </Link>
              <Link href="/technology/ar" className="group flex gap-3 p-3 rounded-xl hover:bg-gray-50">
                <span className="w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>
                </span>
                <div>
                  <p className="font-semibold text-sm group-hover:text-brand-red">AR Product Viz</p>
                  <p className="text-xs text-gray-500">{m('arShort')}</p>
                </div>
              </Link>
            </div>
          </div>

          <Link className="px-3 py-2 font-medium text-sm hover:text-brand-red" href="/case-studies">{t('caseStudies')}</Link>
          <Link className="px-3 py-2 font-medium text-sm hover:text-brand-red" href="/pricing">{t('pricing')}</Link>
          <Link className="px-3 py-2 font-medium text-sm hover:text-brand-red" href="/blog">{t('blog')}</Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/shop" className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 font-medium text-sm hover:text-brand-red">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272" />
            </svg>
            Shop
          </Link>
          <Button href="#" size="sm">{t('requestDemo')}</Button>
          <button
            className="lg:hidden p-2"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 space-y-3">
            <Link href="/solutions/supplier" className="block py-2 font-semibold" onClick={() => setMobileOpen(false)}>{m('forSuppliers')}</Link>
            <Link href="/solutions/reseller" className="block py-2 font-semibold" onClick={() => setMobileOpen(false)}>{m('forResellers')}</Link>
            <Link href="/technology/order-agent" className="block py-2 font-semibold" onClick={() => setMobileOpen(false)}>{m('orderAgentTitle')}</Link>
            <Link href="/technology/ar" className="block py-2 font-semibold" onClick={() => setMobileOpen(false)}>AR Product Viz</Link>
            <Link href="/case-studies" className="block py-2 font-semibold" onClick={() => setMobileOpen(false)}>{t('caseStudies')}</Link>
            <Link href="/pricing" className="block py-2 font-semibold" onClick={() => setMobileOpen(false)}>{t('pricing')}</Link>
            <a href="#" className="block py-2 font-semibold">{t('login')}</a>
          </div>
        </div>
      )}
    </header>
  );
}
