'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { categories } from '@/lib/shop-data';

export function ShopHeader() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const pathname = usePathname();
  const compact = pathname.startsWith('/product') || pathname === '/dashboard';

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Top utility bar */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-[82rem] mx-auto px-6 py-1.5 flex items-center justify-between text-xs text-gray-500">
          <Link href="/" className="hover:text-brand-red">← Kembali ke foodstocks.id</Link>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-red">Lacak Pesanan</a>
            <a href="#" className="hover:text-brand-red">Pusat Bantuan</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-[82rem] mx-auto px-6 py-3 flex items-center gap-6">
        <Link href="/shop" className="flex-shrink-0">
          <Image src="/logo.png" alt="Foodstocks Shop" width={110} height={36} className="h-9 w-auto" priority />
        </Link>

        <div className="flex-1 max-w-2xl relative">
          <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type="text" placeholder="Cari 923+ camilan, brand, kategori..." className="w-full pl-12 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-brand-red focus:outline-none text-sm" />
        </div>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="hidden md:flex p-2 hover:bg-gray-50 rounded-full relative" aria-label="Reward">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">12K</span>
          </Link>
          <button className="p-2 hover:bg-gray-50 rounded-full relative" aria-label="Cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </button>
          <Link href="/dashboard" className="flex items-center gap-2 pl-2 pr-3 py-1.5 hover:bg-gray-50 rounded-full">
            <div className="w-7 h-7 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center font-semibold text-xs">IS</div>
            <span className="text-sm font-semibold hidden sm:inline">Ibu Sari</span>
          </Link>
        </div>
      </nav>

      {/* Category pills (hidden on product detail / dashboard) */}
      {!compact && (
        <div className="max-w-[82rem] mx-auto px-6 pb-3 flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={cn(
                'flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition',
                activeCategory === c
                  ? 'bg-brand-red text-white'
                  : 'bg-gray-50 border border-gray-100 hover:border-brand-red',
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
