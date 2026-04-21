'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Tab = 'supplier' | 'reseller';

export function DualPath() {
  const [tab, setTab] = useState<Tab>('supplier');

  return (
    <section className="py-24 border-t border-gray-100">
      <div className="max-w-[88rem] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Satu platform, dua jalan</span>
          <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Pilih peran Anda</h2>
          <p className="mt-4 text-gray-600">Supplier atau reseller? Kami siapkan tools berbeda untuk setiap kebutuhan.</p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-full bg-gray-50 border border-gray-100">
              <button
                onClick={() => setTab('supplier')}
                className={cn(
                  'px-5 py-2 rounded-full font-semibold text-sm transition',
                  tab === 'supplier' ? 'bg-brand-red text-white' : 'text-gray-600',
                )}
              >
                Saya Supplier
              </button>
              <button
                onClick={() => setTab('reseller')}
                className={cn(
                  'px-5 py-2 rounded-full font-semibold text-sm transition',
                  tab === 'reseller' ? 'bg-brand-red text-white' : 'text-gray-600',
                )}
              >
                Saya Reseller
              </button>
            </div>
          </div>

          {tab === 'supplier' ? (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="heading-brand text-3xl">Jangkauan distribusi tanpa repot logistik.</h3>
                <p className="mt-4 text-gray-600">
                  Produk Anda langsung terdistribusi ke 500+ reseller di 30+ kota. Kami urus gudang,
                  pengiriman, dan analytics — Anda fokus produksi.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    'Gudang food-grade + cold storage',
                    'Dashboard penjualan real-time',
                    'Demand prediction AI',
                    'Route optimization otomatis',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/solutions/supplier" className="mt-8">Pelajari Supplier Portal →</Button>
              </div>
              <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6">
                <div className="aspect-[4/3] rounded-2xl bg-white border border-gray-100 flex items-center justify-center">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">Dashboard preview</span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Distribusi bulan ini</span><span className="font-semibold text-brand-red">+42%</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Reseller aktif</span><span className="font-semibold">247</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Forecast bulan depan</span><span className="font-semibold">1,240 karton</span></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="heading-brand text-3xl">Stok lengkap, harga reseller, tanpa minimum repot.</h3>
                <p className="mt-4 text-gray-600">
                  923+ SKU camilan terverifikasi dalam satu katalog. Wholesale, konsinyasi, atau
                  dropship — pilih yang cocok untuk toko Anda.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    'Harga wholesale mulai order 1 karton',
                    'Reward points tiap pembelian',
                    'AI rekomendasi produk laku',
                    'Dropship dengan branding sendiri',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/solutions/reseller" className="mt-8">Mulai Belanja Sekarang →</Button>
              </div>
              <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6">
                <div className="aspect-[4/3] rounded-2xl bg-white border border-gray-100 flex items-center justify-center">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">Reseller dashboard</span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Reward points</span><span className="font-semibold text-brand-red">12,450 pts</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Pesanan aktif</span><span className="font-semibold">3</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Tier</span><span className="font-semibold">Gold Partner</span></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
