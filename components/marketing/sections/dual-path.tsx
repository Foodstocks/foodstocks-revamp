'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Tab = 'supplier' | 'reseller';

function CheckIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M10.28 2.28a.75.75 0 00-1.06 0L4.5 6.997 2.78 5.28a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l5.25-5.25a.75.75 0 000-1.06z" clipRule="evenodd" />
    </svg>
  );
}

function SupplierMockup() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)] overflow-hidden">
      {/* Header bar */}
      <div className="bg-brand-ink px-5 py-3 flex items-center justify-between">
        <span className="text-white text-xs font-bold">Supplier Portal</span>
        <span className="text-[10px] font-bold bg-brand-red/90 text-white px-2 py-0.5 rounded-full">Live</span>
      </div>

      <div className="p-5 space-y-4">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Reseller Aktif', value: '247', delta: '+12' },
            { label: 'Distribusi', value: '+42%', delta: null },
            { label: 'Forecast', value: '1.2K', delta: 'karton' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">{s.label}</p>
              <p className="heading-brand text-base text-brand-ink">{s.value}</p>
              {s.delta && (
                <p className="text-[9px] text-emerald-600 font-semibold mt-0.5">{s.delta}</p>
              )}
            </div>
          ))}
        </div>

        {/* Distribution bar chart */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-semibold text-gray-600">Distribusi per Kota</span>
            <span className="text-[10px] text-gray-400">bulan ini</span>
          </div>
          <div className="space-y-1.5">
            {([
              { city: 'Jakarta',  bar: 'w-[90%]', label: '90%' },
              { city: 'Surabaya', bar: 'w-[68%]', label: '68%' },
              { city: 'Bandung',  bar: 'w-[52%]', label: '52%' },
              { city: 'Medan',    bar: 'w-[38%]', label: '38%' },
            ] as const).map((row) => (
              <div key={row.city} className="flex items-center gap-2">
                <span className="text-[10px] text-gray-500 w-14 flex-shrink-0">{row.city}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                  <div className={`bg-brand-red rounded-full h-1.5 ${row.bar}`} />
                </div>
                <span className="text-[10px] text-gray-400 w-6 text-right">{row.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demand Prediction badge */}
        <div className="flex items-center gap-3 rounded-xl bg-brand-red-50 border border-brand-red-100 p-3">
          <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-bold text-brand-red-700">AI Demand Prediction</p>
            <p className="text-[9px] text-gray-500 mt-0.5">Bulan depan: est. 1,240 karton (+8%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResellerMockup() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)] overflow-hidden">
      {/* Header bar */}
      <div className="bg-brand-ink px-5 py-3 flex items-center justify-between">
        <span className="text-white text-xs font-bold">Reseller Dashboard</span>
        <span className="text-[10px] font-bold text-white/60">Gold Partner</span>
      </div>

      <div className="p-5 space-y-4">
        {/* Reward progress */}
        <div className="rounded-xl bg-gradient-to-r from-brand-red/5 to-brand-orange/5 border border-brand-red-100 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-gray-700">Reward Points</span>
            <span className="heading-brand text-lg text-brand-red">12,450 pts</span>
          </div>
          <div className="bg-white rounded-full h-2 border border-gray-100">
            <div className="bg-gradient-to-r from-brand-red to-brand-orange rounded-full h-2 w-[72%]" />
          </div>
          <p className="text-[9px] text-gray-400 mt-1.5">3,550 pts lagi menuju Platinum</p>
        </div>

        {/* Product grid */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-semibold text-gray-600">Produk Rekomendasi</span>
            <span className="text-[10px] text-brand-red font-semibold">923+ SKU →</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: 'Chitato Keju', price: 'Rp 42K', hot: true },
              { name: 'Taro Udang',   price: 'Rp 38K', hot: false },
              { name: 'Qtela Tempe',  price: 'Rp 31K', hot: false },
            ].map((p) => (
              <div key={p.name} className="rounded-xl bg-gray-50 border border-gray-100 p-2.5 relative">
                {p.hot && (
                  <span className="absolute -top-1.5 -right-1 text-[8px] font-bold bg-brand-red text-white px-1.5 py-0.5 rounded-full">
                    HOT
                  </span>
                )}
                <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-brand-red-50 to-brand-peach mb-2" />
                <p className="text-[9px] font-semibold text-gray-700 leading-tight truncate">{p.name}</p>
                <p className="text-[9px] text-brand-red font-bold mt-0.5">{p.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active orders */}
        <div className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-100 px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center">
              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold text-gray-700">3 pesanan aktif</span>
          </div>
          <span className="text-[10px] text-blue-600 font-bold">Lihat semua →</span>
        </div>
      </div>
    </div>
  );
}

export function DualPath() {
  const [tab, setTab] = useState<Tab>('supplier');

  const supplierFeatures = [
    'Gudang food-grade + cold storage',
    'Dashboard penjualan real-time',
    'Demand prediction AI',
    'Route optimization otomatis',
  ];

  const resellerFeatures = [
    'Harga wholesale mulai order 1 karton',
    'Reward points tiap pembelian',
    'AI rekomendasi produk laku',
    'Dropship dengan branding sendiri',
  ];

  return (
    <section className="py-24 border-t border-gray-100">
      <div className="max-w-[88rem] mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Satu platform, dua jalan</span>
          <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Pilih peran Anda</h2>
          <p className="mt-4 text-gray-500">
            Supplier atau reseller? Kami siapkan tools berbeda untuk setiap kebutuhan.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-full bg-gray-50 border border-gray-100">
              <button
                type="button"
                onClick={() => setTab('supplier')}
                className={cn(
                  'px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200',
                  tab === 'supplier'
                    ? 'bg-brand-red text-white shadow-[0_4px_12px_-2px_rgba(227,6,19,0.35)]'
                    : 'text-gray-500 hover:text-gray-800',
                )}
              >
                Saya Supplier
              </button>
              <button
                type="button"
                onClick={() => setTab('reseller')}
                className={cn(
                  'px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200',
                  tab === 'reseller'
                    ? 'bg-brand-red text-white shadow-[0_4px_12px_-2px_rgba(227,6,19,0.35)]'
                    : 'text-gray-500 hover:text-gray-800',
                )}
              >
                Saya Reseller
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: text */}
            <div>
              {tab === 'supplier' ? (
                <>
                  <h3 className="heading-brand text-3xl">
                    Jangkauan distribusi tanpa repot logistik.
                  </h3>
                  <p className="mt-4 text-gray-500 leading-relaxed">
                    Produk Anda langsung terdistribusi ke 500+ reseller di 30+ kota. Kami urus gudang,
                    pengiriman, dan analytics — Anda fokus produksi.
                  </p>
                  <ul className="mt-6 space-y-3" role="list">
                    {supplierFeatures.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="feature-check text-brand-red">
                          <CheckIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button href="/solutions/supplier" className="mt-8">Pelajari Supplier Portal →</Button>
                </>
              ) : (
                <>
                  <h3 className="heading-brand text-3xl">
                    Stok lengkap, harga reseller, tanpa minimum repot.
                  </h3>
                  <p className="mt-4 text-gray-500 leading-relaxed">
                    923+ SKU camilan terverifikasi dalam satu katalog. Wholesale, konsinyasi, atau
                    dropship — pilih yang cocok untuk toko Anda.
                  </p>
                  <ul className="mt-6 space-y-3" role="list">
                    {resellerFeatures.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="feature-check text-brand-red">
                          <CheckIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button href="/solutions/reseller" className="mt-8">Mulai Belanja Sekarang →</Button>
                </>
              )}
            </div>

            {/* Right: visual mockup */}
            <div>
              {tab === 'supplier' ? <SupplierMockup /> : <ResellerMockup />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
