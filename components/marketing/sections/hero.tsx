import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { StatCounter } from '@/components/marketing/stat-counter';
import { Reveal } from '@/components/marketing/reveal';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative overflow-hidden hero-bg">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[700px] h-[600px] rounded-full bg-gradient-to-bl from-brand-red-50 via-brand-red-50/20 to-transparent" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand-cream/80 to-transparent" />
        <div className="bg-dot-grid absolute inset-0 opacity-40" />
      </div>

      <div className="relative max-w-[82rem] mx-auto px-6 pt-16 pb-20 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── Left column ── */}
        <Reveal className="lg:col-span-6">

          {/* Social proof pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08)] mb-7">
            <div className="flex items-center -space-x-1">
              {['bg-orange-400','bg-amber-400','bg-red-400','bg-pink-400'].map((c, i) => (
                <span key={i} className={`w-5 h-5 rounded-full border-2 border-white ${c}`} aria-hidden />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-gray-700">
              <span className="text-brand-red font-bold">500+</span> mitra aktif
            </span>
            <span className="text-xs text-gray-300">·</span>
            <div className="flex items-center gap-0.5" aria-label="Rating 4.9">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className="w-3 h-3 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[11px] font-semibold text-gray-600 ml-1">4.9</span>
            </div>
          </div>

          <h1 className="heading-brand text-[clamp(2.75rem,5.5vw+1rem,5.5rem)] leading-[1.02]">
            {t('titleBefore')}{' '}
            <span className="text-gradient-red">{t('titleHighlight')}</span>,<br />
            {t('titleAfter')}
          </h1>

          <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
            {t('description')}
          </p>

          {/* Trust badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z', label: 'BPOM & Halal MUI' },
              { icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', label: 'AI Order Capture' },
              { icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9', label: 'AR Product 3D' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600">
                <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                </svg>
                {b.label}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              {t('ctaPrimary')}
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
            <Button href="/solutions/supplier" size="lg" variant="secondary">{t('ctaSecondary')}</Button>
          </div>

          {/* Stats row */}
          <div className="mt-12 pt-8 border-t border-gray-200/60 grid grid-cols-4 gap-0 max-w-lg">
            {[
              { to: 923, suffix: '+', label: t('statSku') },
              { to: 500, suffix: '+', label: t('statMitra') },
              { to: 30,  suffix: '+', label: t('statKota') },
              { to: 99,  suffix: '%', label: t('statReliability') },
            ].map((s, i) => (
              <div key={i} className="relative pl-4 first:pl-0">
                {i > 0 && <div className="absolute left-0 top-1/4 h-8 w-px bg-gray-200" aria-hidden />}
                <p className="stat-number text-3xl lg:text-4xl text-brand-red">
                  <StatCounter to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-[10px] text-gray-400 mt-1.5 uppercase tracking-wider leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Right column — dashboard mockup ── */}
        <Reveal className="lg:col-span-6 relative">
          <div className="absolute inset-4 -z-10 glow-blob-red scale-110" aria-hidden />

          <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200/80 shadow-[0_24px_64px_-16px_rgba(15,23,42,0.16)]">
            {/* Browser chrome */}
            <div className="bg-gray-50 border-b border-gray-200/60 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden>
                <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
              </div>
              <div className="flex-1 px-3 py-1.5 rounded-lg bg-white border border-gray-200/80 text-[10px] text-gray-500 font-mono truncate flex items-center gap-1.5">
                <svg className="w-2.5 h-2.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                app.foodstocks.id/dashboard
              </div>
            </div>

            <div className="p-5 space-y-4 bg-[#FAFAF9]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Selamat datang,</p>
                  <p className="font-bold text-sm mt-0.5">Ibu Sari — Reseller Jakarta</p>
                </div>
                <span className="text-[10px] font-bold bg-gradient-to-r from-brand-red to-brand-orange text-white px-2.5 py-1 rounded-full shadow-sm">
                  Gold Partner
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Orders Bulan Ini', value: '42',    sub: '▲ 28%', subColor: 'text-emerald-600' },
                  { label: 'Reward Points',    value: '12.4K', sub: 'Tukar hadiah', subColor: 'text-brand-red' },
                  { label: 'SKU Tersedia',     value: '923+',  sub: 'Update harian', subColor: 'text-gray-400' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-3 shadow-[0_1px_4px_-1px_rgba(15,23,42,0.06)]">
                    <p className="text-[9px] text-gray-400 uppercase tracking-wider">{s.label}</p>
                    <p className="heading-brand text-lg mt-0.5">{s.value}</p>
                    <p className={`text-[9px] font-semibold mt-0.5 ${s.subColor}`}>{s.sub}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-[0_1px_4px_-1px_rgba(15,23,42,0.06)]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold">Penjualan 7 Hari</span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">▲ 42%</span>
                </div>
                <div className="flex items-end gap-1.5 h-16" aria-hidden>
                  <div className="flex-1 rounded-t bg-gray-100 h-[40%]" />
                  <div className="flex-1 rounded-t bg-gray-100 h-[60%]" />
                  <div className="flex-1 rounded-t bg-gray-100 h-[50%]" />
                  <div className="flex-1 rounded-t bg-gray-100 h-[75%]" />
                  <div className="flex-1 rounded-t bg-brand-red   h-[90%]" />
                  <div className="flex-1 rounded-t bg-gray-100 h-[65%]" />
                  <div className="flex-1 rounded-t bg-brand-red/40 h-[80%]" />
                </div>
                <div className="flex justify-between text-[9px] text-gray-400 mt-2" aria-hidden>
                  {['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map((d) => <span key={d}>{d}</span>)}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Pesanan Terbaru</p>
                <div className="space-y-1.5">
                  {[
                    { name: 'Chitato Keju · 2 karton', id: '#FS-2842', status: 'Diproses', color: 'amber' },
                    { name: 'Indomie Goreng · 5 karton', id: '#FS-2841', status: 'Dikirim',  color: 'blue' },
                  ].map((o) => (
                    <div key={o.id} className="bg-white rounded-xl border border-gray-100 p-2.5 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-red-50 to-brand-red-100 flex-shrink-0" aria-hidden />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold truncate">{o.name}</p>
                        <p className="text-[9px] text-gray-400">{o.id}</p>
                      </div>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap ${o.color === 'amber' ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700'}`}>
                        {o.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating card — AI OrderAgent */}
          <div className="absolute top-16 -left-4 lg:-left-10 bg-white rounded-2xl border border-gray-100 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.14)] p-3.5 max-w-[220px] hidden sm:block">
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
            <p className="text-[11px] text-gray-600 leading-relaxed italic">&ldquo;Pak tolong kirim 10 karton Chitato besok ya&rdquo;</p>
            <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Order #2843 dibuat otomatis
            </div>
          </div>

          {/* Floating card — AR */}
          <div className="absolute bottom-14 -right-4 lg:-right-8 bg-white rounded-2xl border border-gray-100 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.14)] p-3.5 hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
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
