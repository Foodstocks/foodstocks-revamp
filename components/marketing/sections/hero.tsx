import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { StatCounter } from '@/components/marketing/stat-counter';
import { Reveal } from '@/components/marketing/reveal';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative overflow-hidden hero-bg min-h-[calc(100vh-68px)] flex flex-col justify-center">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute -top-32 -right-24 w-[700px] h-[600px] rounded-full bg-white/8 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[400px] rounded-full bg-black/20 blur-3xl" />
        <div className="bg-dot-grid-white absolute inset-0 opacity-70" />
      </div>

      <div className="relative max-w-[82rem] mx-auto px-6 py-8 lg:py-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

        {/* ── Left column ── */}
        <Reveal className="lg:col-span-7">

          {/* Social proof pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-white/40 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.20)] mb-5">
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

          <h1 className="heading-brand text-[clamp(2.25rem,4vw+1rem,4.25rem)] leading-[1.05] text-white">
            {t('titleBefore')}{' '}
            <span className="text-yellow-300 drop-shadow-sm">{t('titleHighlight')}</span>,<br />
            {t('titleAfter')}
          </h1>

          <p className="mt-6 text-lg text-white/75 max-w-lg leading-relaxed">
            {t('description')}
          </p>

          {/* Trust badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z', label: 'BPOM & Halal MUI' },
              { icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', label: 'AI Order Capture' },
              { icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9', label: 'AR Product 3D' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-1.5 bg-white/15 border border-white/25 rounded-full px-3 py-1.5 text-xs font-medium text-white/90">
                <svg className="w-3.5 h-3.5 text-yellow-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                </svg>
                {b.label}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" className="bg-white text-brand-red hover:bg-white/90 shadow-lg font-bold">
              {t('ctaPrimary')}
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
            <Button href="/solutions/supplier" size="lg" className="bg-white/15 text-white border border-white/30 hover:bg-white/25 font-semibold">
              {t('ctaSecondary')}
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-6 pt-5 border-t border-white/20 grid grid-cols-4 gap-0 max-w-lg">
            {[
              { to: 923, suffix: '+', label: t('statSku') },
              { to: 500, suffix: '+', label: t('statMitra') },
              { to: 30,  suffix: '+', label: t('statKota') },
              { to: 99,  suffix: '%', label: t('statReliability') },
            ].map((s, i) => (
              <div key={i} className="relative pl-4 first:pl-0">
                {i > 0 && <div className="absolute left-0 top-1/4 h-8 w-px bg-white/25" aria-hidden />}
                <p className="stat-number text-3xl lg:text-4xl text-white">
                  <StatCounter to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-[10px] text-white/60 mt-1.5 uppercase tracking-wider leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Right column — hero image ── */}
        <Reveal className="lg:col-span-5 relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-full bg-white/15 blur-3xl scale-110" aria-hidden />
          <Image
            src="/hero-section.png"
            alt="Foodstocks platform dashboard"
            width={800}
            height={600}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
