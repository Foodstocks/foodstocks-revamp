import { Link } from '@/i18n/navigation';
import { Hero } from '@/components/marketing/sections/hero';
import { DualPath } from '@/components/marketing/sections/dual-path';
import { FAQ } from '@/components/marketing/sections/faq';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? 'w-3.5 h-3.5'} viewBox="0 0 14 14" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M11.78 3.22a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06 0l-2.5-2.5a.75.75 0 011.06-1.06L5.25 8.69l5.47-5.47a.75.75 0 011.06 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── TRUSTED BY marquee ──────────────────────────────── */}
      <section className="py-14 border-y border-gray-100 bg-white">
        <div className="max-w-[82rem] mx-auto px-6">
          <p className="text-center text-[11px] text-gray-400 uppercase tracking-[0.15em] font-bold mb-8">
            Dipercaya oleh brand snack terkemuka Indonesia
          </p>
          <div className="marquee-wrapper overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track">
              {/* First copy — visible to screen readers */}
              <div className="flex items-center gap-12">
                {['Indofood', 'Wings', 'Mayora', 'Garuda Food', 'Nabati', 'Orang Tua', 'Khong Guan', 'Kobe', 'Monde', 'Siantar Top'].map((b) => (
                  <span key={b} className="text-xl font-[family-name:var(--font-display)] font-bold text-gray-300 whitespace-nowrap hover:text-gray-400 transition-colors cursor-default">
                    {b}
                  </span>
                ))}
              </div>
              {/* Duplicate for infinite scroll — hidden from assistive tech */}
              <div className="flex items-center gap-12" aria-hidden="true">
                {['Indofood', 'Wings', 'Mayora', 'Garuda Food', 'Nabati', 'Orang Tua', 'Khong Guan', 'Kobe', 'Monde', 'Siantar Top'].map((b) => (
                  <span key={b} className="text-xl font-[family-name:var(--font-display)] font-bold text-gray-300 whitespace-nowrap hover:text-gray-400 transition-colors cursor-default">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DualPath />

      {/* ── CORE TECHNOLOGY ─────────────────────────────────── */}
      <section className="py-24 bg-[#FFF5F5] bg-dot-grid">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 items-end mb-14">
            <div className="lg:col-span-2">
              <span className="eyebrow">Teknologi</span>
              <h2 className="heading-brand mt-4 text-4xl md:text-5xl">
                Tech-forward distribusi snack,<br className="hidden md:block" /> bukan cuma jual-beli.
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Dari AI order capture sampai AR produk 3D — infrastruktur yang belum ada di industri distribusi snack Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Featured card — FS OrderAgent */}
            <article className="card-hover bg-brand-ink rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/20 rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-red/10 rounded-full translate-y-1/3 -translate-x-1/4" />
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="tech-icon bg-brand-red">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-red text-white px-2.5 py-1 rounded-full">
                    Baru
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                  FS OrderAgent
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  AI tangkap order dari WhatsApp, email, voice note, dan foto PO — otomatis masuk sistem.
                </p>
                <Link
                  href="/technology/order-agent"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white hover:gap-2.5 transition-all"
                >
                  Lihat demo
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7h9M7.5 3l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* AR Product Viz */}
            <article className="card-hover bg-white border border-gray-100 rounded-3xl p-7">
              <div className="tech-icon bg-brand-red-50 mb-6">
                <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">AR Product Viz</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Scan kemasan → model 3D, resep, info nutrisi, dan video how-to. Pertama di Indonesia.
              </p>
              <Link
                href="/technology/ar"
                className="mt-6 inline-flex items-center gap-1.5 text-brand-red font-semibold text-sm hover:gap-2.5 transition-all"
              >
                Pelajari
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7h9M7.5 3l4 4-4 4" />
                </svg>
              </Link>
            </article>

            {/* Smart WMS */}
            <article className="card-hover bg-white border border-gray-100 rounded-3xl p-7">
              <div className="tech-icon bg-blue-50 mb-6">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">Smart WMS</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Warehouse Management System real-time. Auto-reorder mencegah stockout, cold storage terjaga.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-brand-red font-semibold text-sm hover:gap-2.5 transition-all"
              >
                Pelajari
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7h9M7.5 3l4 4-4 4" />
                </svg>
              </a>
            </article>

            {/* Analytics & Prediction */}
            <article className="card-hover bg-white border border-gray-100 rounded-3xl p-7">
              <div className="tech-icon bg-violet-50 mb-6">
                <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">Analytics &amp; Prediction</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Demand forecasting berbasis data historis &amp; tren. Route optimization otomatis untuk logistik.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-brand-red font-semibold text-sm hover:gap-2.5 transition-all"
              >
                Pelajari
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7h9M7.5 3l4 4-4 4" />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ── 3 BUSINESS MODELS ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Model kerjasama</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">3 cara untuk mulai</h2>
            <p className="mt-4 text-gray-500">Fleksibel sesuai modal &amp; skala bisnis Anda.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {/* Wholesale */}
            <article className="card-hover bg-white rounded-3xl p-8 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-300">01</p>
              <h3 className="heading-brand text-2xl mt-2">Wholesale</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                Beli putus dalam jumlah besar dengan harga terbaik.
              </p>
              <ul className="mt-6 pt-6 border-t border-gray-100 space-y-2.5" role="list">
                {['Harga termurah', 'Min. 1 karton', 'Reward points'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="feature-check text-brand-red"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>

            {/* Consignment — featured */}
            <article className="card-hover bg-white rounded-3xl p-8 border-2 border-brand-red relative shadow-[0_8px_30px_-8px_rgba(227,6,19,0.18)]">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-brand-red text-white px-3.5 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                Paling Populer
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red">02</p>
              <h3 className="heading-brand text-2xl mt-2">Consignment</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                Zero upfront capital. Bayar hanya saat produk terjual.
              </p>
              <ul className="mt-6 pt-6 border-t border-brand-red-100 space-y-2.5" role="list">
                {['Tanpa modal awal', 'Sisa stok di-retur', 'Monitoring real-time'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="feature-check text-brand-red"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>

            {/* Dropship */}
            <article className="card-hover bg-white rounded-3xl p-8 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-300">03</p>
              <h3 className="heading-brand text-2xl mt-2">Dropship</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                Tanpa gudang, tanpa stok. Kirim langsung ke customer Anda.
              </p>
              <ul className="mt-6 pt-6 border-t border-gray-100 space-y-2.5" role="list">
                {['Tanpa simpan stok', 'Custom packaging', 'Real-time tracking'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="feature-check text-brand-red"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ── FEATURED CASE STUDY ─────────────────────────────── */}
      <section className="py-24 bg-[#FFF0F0]">
        <div className="max-w-[82rem] mx-auto px-6">
          <Reveal className="grid lg:grid-cols-2 gap-12 items-center bg-brand-ink text-white rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-white/3 rounded-full translate-y-1/2" />
            </div>
            <div className="relative">
              <span className="eyebrow eyebrow-dark">Case Study</span>
              <h2 className="heading-brand mt-6 text-4xl md:text-5xl">
                Dinastar naik <span className="text-brand-red">+340%</span> order dalam 6 bulan.
              </h2>
              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                Dari toko kelontong di Surabaya jadi jaringan 12 cabang dengan inventory terkontrol.
              </p>
              <Button href="/case-studies" className="mt-8">Baca case study lengkap →</Button>
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { l: 'Order volume', v: '+340%' },
                { l: 'Cabang baru',  v: '12' },
                { l: 'Waste stock',  v: '−82%' },
                { l: 'Waktu hemat',  v: '15h/wk' },
              ].map((m) => (
                <div key={m.l} className="border border-white/10 rounded-2xl p-5 bg-white/5 backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-widest text-white/40">{m.l}</p>
                  <p className="heading-brand text-4xl mt-2">{m.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-[82rem] mx-auto px-6">
          <p className="text-center text-[11px] text-gray-400 uppercase tracking-[0.15em] font-bold mb-10">
            Sertifikasi &amp; Jaminan Kualitas
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {[
              { label: 'Terdaftar BPOM',      icon: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-100' },
              { label: 'Halal MUI',           icon: 'bg-green-500',   text: 'text-green-700',   bg: 'bg-green-50 border-green-100' },
              { label: 'Partner BBI',         icon: 'bg-blue-500',    text: 'text-blue-700',    bg: 'bg-blue-50 border-blue-100' },
              { label: 'Gudang Food-grade',   icon: 'bg-brand-red',   text: 'text-brand-red',   bg: 'bg-brand-red-50 border-brand-red-100' },
            ].map((cert) => (
              <div
                key={cert.label}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl border ${cert.bg}`}
              >
                <span className={`w-6 h-6 rounded-full ${cert.icon} flex items-center justify-center flex-shrink-0`}>
                  <CheckIcon className="w-3 h-3 text-white" />
                </span>
                <span className={`font-semibold text-sm ${cert.text}`}>{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-28 bg-brand-ink relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-red/15 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/8 rounded-full translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="eyebrow eyebrow-dark mb-6 inline-flex">Siap mulai?</span>
          <h2 className="heading-brand text-4xl md:text-6xl text-white mt-4">
            Scale bisnis snack Anda<br className="hidden md:block" /> bersama Foodstocks.
          </h2>
          <p className="mt-6 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Bergabung dengan 500+ mitra yang sudah tumbuh bersama Foodstocks.<br className="hidden md:block" />
            Gratis daftar, gratis onboarding.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg">Mulai Jual Sekarang →</Button>
            <Button
              href="#"
              size="lg"
              className="bg-transparent text-white border border-white/20 hover:bg-white/8 hover:border-white/40"
            >
              Request Demo
            </Button>
          </div>
          {/* Trust micro-copy */}
          <p className="mt-8 text-[13px] text-white/30">
            Tidak perlu kartu kredit &nbsp;·&nbsp; Setup dalam 24 jam &nbsp;·&nbsp; Cancel kapan saja
          </p>
        </div>
      </section>
    </>
  );
}
