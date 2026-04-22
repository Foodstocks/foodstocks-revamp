import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { StatCounter } from '@/components/marketing/stat-counter';
import { Reveal } from '@/components/marketing/reveal';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative bg-white bg-dot-grid overflow-hidden">
      {/* Background gradient decorators */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[640px] h-[560px] bg-gradient-to-bl from-brand-red-50/80 via-brand-cream/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-gradient-to-tr from-brand-cream/50 to-transparent" />
      </div>

      <div className="relative max-w-[88rem] mx-auto px-6 pt-16 pb-20 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── Left column ─────────────────────────────────────── */}
        <Reveal className="lg:col-span-6">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red-50 border border-brand-red-100 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red pulse-red" />
            <span className="text-brand-red-700 text-[11px] font-bold uppercase tracking-widest">
              {t('eyebrow')}
            </span>
          </div>

          <h1 className="heading-brand text-[clamp(2.75rem,5.5vw+1rem,5.75rem)] leading-[1.02]">
            {t('titleBefore')}{' '}
            <span className="text-gradient-red">{t('titleHighlight')}</span>,
            <br />
            {t('titleAfter')}
          </h1>

          <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
            {t('description')}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#" size="lg">
              {t('ctaPrimary')}
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
            <Button href="#" size="lg" variant="secondary">{t('ctaSecondary')}</Button>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-4 gap-0 max-w-lg">
            {[
              { to: 923, suffix: '+', label: t('statSku') },
              { to: 500, suffix: '+', label: t('statMitra') },
              { to: 30,  suffix: '+', label: t('statKota') },
              { to: 99,  suffix: '%', label: t('statReliability') },
            ].map((s, i) => (
              <div key={i} className="relative pl-4 first:pl-0">
                {i > 0 && (
                  <div className="absolute left-0 top-1/4 h-8 w-px bg-gray-200" aria-hidden />
                )}
                <p className="stat-number text-3xl lg:text-4xl text-brand-red">
                  <StatCounter to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-[10px] text-gray-400 mt-1.5 uppercase tracking-wider leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Right column — mockup ────────────────────────────── */}
        <Reveal className="lg:col-span-6 relative">
          {/* Glow blob behind card */}
          <div className="absolute inset-4 -z-10 glow-blob-red scale-110" aria-hidden />

          {/* Main browser mockup */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-[0_24px_64px_-16px_rgba(15,23,42,0.18)]">

            {/* Browser chrome */}
            <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden>
                <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
              </div>
              <div className="flex-1 px-3 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] text-gray-500 font-mono truncate flex items-center gap-1.5">
                <svg className="w-2.5 h-2.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                shop.foodstocks.id/dashboard
              </div>
            </div>

            <div className="p-5 space-y-4">
              {/* User header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Selamat datang,</p>
                  <p className="font-bold text-sm mt-0.5">Ibu Sari</p>
                </div>
                <span className="text-[10px] font-bold bg-gradient-to-r from-brand-red to-brand-orange text-white px-2.5 py-1 rounded-full">
                  Gold Partner
                </span>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Orders',    value: '42',   accent: false },
                  { label: 'Reward',    value: '12.4K', accent: true },
                  { label: 'SKU aktif', value: '923+', accent: false },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-3">
                    <p className="text-[9px] text-gray-400 uppercase tracking-wider">{s.label}</p>
                    <p className={`heading-brand text-lg mt-0.5 ${s.accent ? 'text-brand-red' : ''}`}>{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Sales chart */}
              <div className="bg-white rounded-xl border border-gray-100 p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold">Penjualan minggu ini</span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    ▲ 42%
                  </span>
                </div>
                <div className="flex items-end gap-1.5 h-16" aria-hidden>
                  <div className="flex-1 rounded-t bg-gray-100 h-[40%]" />
                  <div className="flex-1 rounded-t bg-gray-100 h-[60%]" />
                  <div className="flex-1 rounded-t bg-gray-100 h-[50%]" />
                  <div className="flex-1 rounded-t bg-gray-100 h-[75%]" />
                  <div className="flex-1 rounded-t bg-brand-red   h-[90%]" />
                  <div className="flex-1 rounded-t bg-gray-100 h-[65%]" />
                  <div className="flex-1 rounded-t bg-brand-red/50 h-[80%]" />
                </div>
                <div className="flex justify-between text-[9px] text-gray-400 mt-2" aria-hidden>
                  {['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Recent orders */}
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Pesanan Terbaru</p>
                <div className="space-y-1.5">
                  {[
                    { name: 'Chitato Keju · 2 karton', id: '#FS-2842', time: 'hari ini', status: 'Diproses', color: 'amber' },
                    { name: 'Indomie Goreng · 5 karton', id: '#FS-2841', time: 'kemarin', status: 'Dikirim', color: 'blue' },
                  ].map((o) => (
                    <div key={o.id} className="bg-white rounded-xl border border-gray-100 p-2.5 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-red-50 to-brand-red-100 flex-shrink-0" aria-hidden />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold truncate">{o.name}</p>
                        <p className="text-[9px] text-gray-400">{o.id} · {o.time}</p>
                      </div>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap ${o.color === 'amber' ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700'}`}>
                        {o.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live badge */}
            <div className="absolute top-16 left-4 bg-white rounded-full px-2.5 py-1 flex items-center gap-1.5 text-[10px] font-bold border border-gray-100 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden /> Live
            </div>
          </div>

          {/* Floating card — AI OrderAgent */}
          <div className="absolute top-20 -left-4 lg:-left-10 bg-white rounded-2xl border border-gray-100 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.14)] p-3.5 max-w-[230px] hidden sm:block">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-7 h-7 rounded-lg bg-brand-red flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <div>
                <p className="text-[11px] font-bold leading-tight">FS OrderAgent</p>
                <p className="text-[9px] text-gray-400">WhatsApp · 9:42 AM</p>
              </div>
            </div>
            <p className="text-[11px] text-gray-600 leading-relaxed italic">
              &ldquo;Pak tolong kirim 10 karton Chitato besok ya&rdquo;
            </p>
            <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Parsed 0.8s → Order #2843 dibuat
            </div>
          </div>

          {/* Floating card — AR Preview */}
          <div className="absolute bottom-14 -right-4 lg:-right-8 bg-white rounded-2xl border border-gray-100 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.14)] p-3.5 hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-red-50 to-brand-red-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <div>
              <p className="text-[9px] text-gray-400 uppercase tracking-wider">AR Preview aktif</p>
              <p className="text-xs font-bold">Chitato Keju 3D →</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
