import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { StatCounter } from '@/components/marketing/stat-counter';
import { Reveal } from '@/components/marketing/reveal';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative bg-white">
      <div className="max-w-[88rem] mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-7">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h1 className="heading-brand mt-6 text-[clamp(2.75rem,5.5vw+1rem,5.5rem)]">
            {t('titleBefore')} <span className="text-brand-red">{t('titleHighlight')}</span>,
            <br />
            {t('titleAfter')}
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">{t('description')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#" size="lg">
              {t('ctaPrimary')}
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
            <Button href="#" size="lg" variant="secondary">{t('ctaSecondary')}</Button>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-4 max-w-xl border-t border-gray-100 pt-6">
            <div>
              <p className="heading-brand text-3xl lg:text-4xl text-brand-red">
                <StatCounter to={923} suffix="+" />
              </p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{t('statSku')}</p>
            </div>
            <div>
              <p className="heading-brand text-3xl lg:text-4xl text-brand-red">
                <StatCounter to={500} suffix="+" />
              </p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{t('statMitra')}</p>
            </div>
            <div>
              <p className="heading-brand text-3xl lg:text-4xl text-brand-red">
                <StatCounter to={30} suffix="+" />
              </p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{t('statKota')}</p>
            </div>
            <div>
              <p className="heading-brand text-3xl lg:text-4xl text-brand-red">
                <StatCounter to={99} suffix="%" />
              </p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{t('statReliability')}</p>
            </div>
          </div>
        </Reveal>

        {/* UI dummy mockup (unchanged) */}
        <Reveal className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)]">
            <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              </div>
              <div className="flex-1 px-3 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] text-gray-500 font-mono truncate flex items-center gap-1.5">
                <svg className="w-2.5 h-2.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                shop.foodstocks.id/dashboard
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Halo,</p>
                  <p className="font-semibold text-sm mt-0.5">Ibu Sari</p>
                </div>
                <span className="text-[10px] font-semibold bg-brand-red/10 text-brand-red px-2 py-1 rounded-full">
                  Gold Partner
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white rounded-xl border border-gray-100 p-3">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Orders</p>
                  <p className="heading-brand text-lg mt-1">42</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-3">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Reward</p>
                  <p className="heading-brand text-lg mt-1 text-brand-red">12.4K</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-3">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">SKU</p>
                  <p className="heading-brand text-lg mt-1">923+</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold">Penjualan mingguan</span>
                  <span className="text-[10px] text-green-600 font-semibold">+42%</span>
                </div>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 60, 50, 75, 90, 65, 80].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t ${i === 4 ? 'bg-brand-red' : 'bg-gray-100'}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[9px] text-gray-400 mt-2">
                  <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-2">Pesanan Terbaru</p>
                <div className="space-y-1.5">
                  <div className="bg-white rounded-xl border border-gray-100 p-2.5 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold truncate">Chitato Keju · 2 karton</p>
                      <p className="text-[9px] text-gray-500">#FS-2842 · hari ini</p>
                    </div>
                    <span className="text-[9px] font-semibold bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded-full whitespace-nowrap">Diproses</span>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-2.5 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold truncate">Indomie Goreng · 5 karton</p>
                      <p className="text-[9px] text-gray-500">#FS-2841 · kemarin</p>
                    </div>
                    <span className="text-[9px] font-semibold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full whitespace-nowrap">Dikirim</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-16 left-5 bg-white rounded-full px-2.5 py-1 flex items-center gap-1.5 text-[10px] font-semibold border border-gray-100 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live
            </div>
          </div>

          <div className="absolute top-24 -left-3 lg:-left-8 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] p-3.5 max-w-[220px] hidden sm:block">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-lg bg-brand-red flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <div>
                <p className="text-[11px] font-bold">FS OrderAgent</p>
                <p className="text-[9px] text-gray-500">WhatsApp · 9:42 AM</p>
              </div>
            </div>
            <p className="text-[11px] text-gray-700 leading-relaxed italic">
              &quot;Pak tolong kirim 10 karton Chitato besok ya&quot;
            </p>
            <div className="mt-2 pt-2 border-t border-gray-100 flex items-center gap-1 text-[10px] text-brand-red font-semibold">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Parsed in 0.8s → Order #2843
            </div>
          </div>

          <div className="absolute bottom-16 -right-3 lg:-right-6 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] p-3 items-center gap-3 hidden sm:flex">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">AR Preview</p>
              <p className="text-xs font-bold">Chitato Keju →</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
