'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Audience = 'reseller' | 'supplier';

type Tier = {
  badge: string;
  title: string;
  tagline: string;
  price: string;
  priceUnit?: string;
  priceSub: string;
  features: { text: string; strong?: boolean; disabled?: boolean }[];
  cta: { label: string; variant: 'primary' | 'secondary' };
  popular?: boolean;
};

const resellerTiers: Tier[] = [
  {
    badge: 'Bronze',
    title: 'Starter',
    tagline: 'Untuk toko kecil baru mulai.',
    price: 'Gratis',
    priceSub: 'Selamanya · tanpa kartu kredit',
    features: [
      { text: 'Akses katalog 923+ SKU' },
      { text: 'Wholesale & Consignment' },
      { text: 'Basic reward points' },
      { text: 'Email support' },
      { text: 'FS OrderAgent AI', disabled: true },
      { text: 'Dropship module', disabled: true },
    ],
    cta: { label: 'Mulai Gratis', variant: 'secondary' },
  },
  {
    badge: 'Gold',
    title: 'Growth',
    tagline: 'Untuk toko yang mau scale.',
    price: 'Rp 149',
    priceUnit: 'rb/bln',
    priceSub: 'Atau subscription tahunan diskon 20%',
    features: [
      { text: 'Semua di Starter' },
      { text: 'FS OrderAgent AI (500 order/bulan)', strong: true },
      { text: 'Dropship module + custom packaging' },
      { text: '2× reward points multiplier' },
      { text: 'WhatsApp & priority support' },
      { text: 'Analytics dashboard' },
    ],
    cta: { label: 'Upgrade ke Growth', variant: 'primary' },
    popular: true,
  },
  {
    badge: 'Platinum',
    title: 'Enterprise',
    tagline: 'Untuk jaringan toko & chain.',
    price: 'Custom',
    priceSub: 'Hubungi tim sales',
    features: [
      { text: 'Semua di Growth' },
      { text: 'Unlimited OrderAgent AI' },
      { text: 'Multi-branch management' },
      { text: 'ERP/POS integration (Accurate, Moka, dll)' },
      { text: 'Dedicated account manager' },
      { text: 'SLA 99.9% + on-call support' },
    ],
    cta: { label: 'Hubungi Sales', variant: 'secondary' },
  },
];

const supplierTiers: Tier[] = [
  {
    badge: 'Listing Only',
    title: 'Basic',
    tagline: 'Untuk brand baru ingin uji pasar.',
    price: 'Gratis',
    priceSub: 'Komisi per transaksi 8%',
    features: [
      { text: 'Listing hingga 10 SKU' },
      { text: 'Akses ke 500+ reseller' },
      { text: 'Basic analytics (view, order count)' },
      { text: 'Warehousing', disabled: true },
      { text: 'Demand prediction', disabled: true },
    ],
    cta: { label: 'Daftar Gratis', variant: 'secondary' },
  },
  {
    badge: 'Full Service',
    title: 'Distribution Partner',
    tagline: 'Untuk brand yang mau scale distribusi.',
    price: 'Rp 1,5',
    priceUnit: 'jt/bln',
    priceSub: '+ komisi 5% per transaksi',
    features: [
      { text: 'Unlimited SKU listing' },
      { text: 'Gudang food-grade di 3 kota', strong: true },
      { text: 'Demand prediction AI' },
      { text: 'Auto-reorder system' },
      { text: 'Marketing support (promo slot)' },
      { text: 'Priority support' },
    ],
    cta: { label: 'Pilih Distribution', variant: 'primary' },
    popular: true,
  },
  {
    badge: 'National',
    title: 'Enterprise',
    tagline: 'Untuk brand besar & national coverage.',
    price: 'Custom',
    priceSub: 'Negotiated rates',
    features: [
      { text: 'Semua di Distribution Partner' },
      { text: 'Gudang di 30+ kota' },
      { text: 'AR Product Viz setup' },
      { text: 'Route optimization dedicated' },
      { text: 'Dedicated account manager' },
      { text: 'API & ERP integration' },
    ],
    cta: { label: 'Hubungi Enterprise', variant: 'secondary' },
  },
];

export function PricingTabs() {
  const [audience, setAudience] = useState<Audience>('reseller');
  const tiers = audience === 'reseller' ? resellerTiers : supplierTiers;

  return (
    <>
      {/* Audience switcher */}
      <div className="inline-flex p-1 rounded-full bg-gray-50 border border-gray-100">
        <button
          onClick={() => setAudience('reseller')}
          className={cn(
            'px-5 py-2 rounded-full font-semibold text-sm transition',
            audience === 'reseller' ? 'bg-brand-red text-white' : 'text-gray-600',
          )}
        >
          Untuk Reseller
        </button>
        <button
          onClick={() => setAudience('supplier')}
          className={cn(
            'px-5 py-2 rounded-full font-semibold text-sm transition',
            audience === 'supplier' ? 'bg-brand-red text-white' : 'text-gray-600',
          )}
        >
          Untuk Supplier
        </button>
      </div>

      {/* Tiers */}
      <div className="mt-14 grid lg:grid-cols-3 gap-4 w-full max-w-[82rem]">
        {tiers.map((t) => (
          <article
            key={t.title}
            className={cn(
              'bg-white rounded-3xl p-8 relative text-left',
              t.popular ? 'border-2 border-brand-red' : 'border border-gray-100',
            )}
          >
            {t.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-brand-red text-white px-3 py-1 rounded-full">
                Paling Populer
              </span>
            )}
            <p className={cn('text-xs font-semibold uppercase tracking-widest', t.popular ? 'text-brand-red' : 'text-gray-400')}>
              {t.badge}
            </p>
            <h3 className="heading-brand text-3xl mt-2">{t.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{t.tagline}</p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="heading-brand text-5xl">
                {t.price}
                {t.priceUnit && <span className="text-lg text-gray-500">{t.priceUnit}</span>}
              </p>
              <p className="text-xs text-gray-500 mt-1">{t.priceSub}</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {t.features.map((f, i) => (
                <li key={i} className={cn('flex gap-3', f.disabled && 'text-gray-400')}>
                  <span className={f.disabled ? 'text-gray-400' : 'text-brand-red'}>{f.disabled ? '—' : '✓'}</span>
                  {f.strong ? <b>{f.text}</b> : <span>{f.text}</span>}
                </li>
              ))}
            </ul>
            <Button href="#" variant={t.cta.variant} className="mt-8 w-full">
              {t.cta.label}
            </Button>
          </article>
        ))}
      </div>
    </>
  );
}
