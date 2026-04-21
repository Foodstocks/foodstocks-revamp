import { Link } from '@/i18n/navigation';
import { Hero } from '@/components/marketing/sections/hero';
import { DualPath } from '@/components/marketing/sections/dual-path';
import { FAQ } from '@/components/marketing/sections/faq';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* TRUSTED BY marquee */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-[88rem] mx-auto px-6">
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest font-semibold mb-8">
            Dipercaya oleh brand snack terkemuka Indonesia
          </p>
          <div className="marquee-wrapper overflow-hidden">
            <div className="marquee-track">
              {[...Array(2)].map((_, loop) => (
                <div key={loop} className="flex items-center gap-16 text-2xl font-[family-name:var(--font-display)] font-bold text-gray-400" aria-hidden={loop === 1}>
                  {['Indofood', 'Wings', 'Mayora', 'Garuda Food', 'Nabati', 'Orang Tua', 'Khong Guan', 'Kobe', 'Monde', 'Siantar Top'].map((b) => (
                    <span key={b}>{b}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DualPath />

      {/* CORE TECHNOLOGY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 items-end mb-14">
            <div className="lg:col-span-2">
              <span className="eyebrow">Teknologi</span>
              <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Tech-forward distribusi snack, bukan cuma jual-beli.</h2>
            </div>
            <p className="text-gray-600">
              Dari AI order capture sampai AR produk 3D — infrastruktur yang belum ada di industri distribusi snack Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <article className="card-hover bg-brand-red text-white rounded-3xl p-7">
              <div className="flex items-center justify-between mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/15 px-2 py-1 rounded-full">Baru</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">FS OrderAgent</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">AI tangkap order dari WhatsApp, email, voice note, dan foto PO — otomatis masuk sistem.</p>
              <Link href="/technology/order-agent" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all">Lihat demo →</Link>
            </article>

            <article className="card-hover bg-white border border-gray-100 rounded-3xl p-7">
              <svg className="w-8 h-8 text-brand-red mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">AR Product Viz</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Scan kemasan → model 3D, resep, info nutrisi, dan video how-to. Pertama di Indonesia.</p>
              <Link href="/technology/ar" className="mt-6 inline-flex items-center gap-1 text-brand-red font-semibold text-sm">Pelajari →</Link>
            </article>

            <article className="card-hover bg-white border border-gray-100 rounded-3xl p-7">
              <svg className="w-8 h-8 text-brand-red mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">Smart WMS</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Warehouse Management System real-time. Auto-reorder mencegah stockout, cold storage terjaga.</p>
              <a href="#" className="mt-6 inline-flex items-center gap-1 text-brand-red font-semibold text-sm">Pelajari →</a>
            </article>

            <article className="card-hover bg-white border border-gray-100 rounded-3xl p-7">
              <svg className="w-8 h-8 text-brand-red mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">Analytics &amp; Prediction</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Demand forecasting berbasis data historis &amp; tren. Route optimization otomatis untuk logistik.</p>
              <a href="#" className="mt-6 inline-flex items-center gap-1 text-brand-red font-semibold text-sm">Pelajari →</a>
            </article>
          </div>
        </div>
      </section>

      {/* 3 BUSINESS MODELS */}
      <section className="py-24">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Model kerjasama</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">3 cara untuk mulai</h2>
            <p className="mt-4 text-gray-600">Fleksibel sesuai modal &amp; skala bisnis Anda.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <article className="card-hover bg-white rounded-3xl p-8 border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">01</p>
              <h3 className="heading-brand text-2xl mt-2">Wholesale</h3>
              <p className="mt-3 text-gray-600 text-sm">Beli putus dalam jumlah besar dengan harga terbaik.</p>
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700"><span className="text-brand-red">✓</span> Harga termurah</div>
                <div className="flex items-center gap-2 text-gray-700"><span className="text-brand-red">✓</span> Min. 1 karton</div>
                <div className="flex items-center gap-2 text-gray-700"><span className="text-brand-red">✓</span> Reward points</div>
              </div>
            </article>

            <article className="card-hover bg-white rounded-3xl p-8 border-2 border-brand-red relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-brand-red text-white px-3 py-1 rounded-full">Paling Populer</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">02</p>
              <h3 className="heading-brand text-2xl mt-2">Consignment</h3>
              <p className="mt-3 text-gray-600 text-sm">Zero upfront capital. Bayar hanya saat produk terjual.</p>
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700"><span className="text-brand-red">✓</span> Tanpa modal awal</div>
                <div className="flex items-center gap-2 text-gray-700"><span className="text-brand-red">✓</span> Sisa stok di-retur</div>
                <div className="flex items-center gap-2 text-gray-700"><span className="text-brand-red">✓</span> Monitoring real-time</div>
              </div>
            </article>

            <article className="card-hover bg-white rounded-3xl p-8 border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">03</p>
              <h3 className="heading-brand text-2xl mt-2">Dropship</h3>
              <p className="mt-3 text-gray-600 text-sm">Tanpa gudang, tanpa stok. Kirim langsung ke customer Anda.</p>
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700"><span className="text-brand-red">✓</span> Tanpa simpan stok</div>
                <div className="flex items-center gap-2 text-gray-700"><span className="text-brand-red">✓</span> Custom packaging</div>
                <div className="flex items-center gap-2 text-gray-700"><span className="text-brand-red">✓</span> Real-time tracking</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-6">
          <Reveal className="grid lg:grid-cols-2 gap-12 items-center bg-brand-ink text-white rounded-3xl p-10 lg:p-16">
            <div>
              <span className="eyebrow" style={{ background: 'rgba(227,6,19,0.15)', color: '#FCA5A5' }}>Case Study</span>
              <h2 className="heading-brand mt-6 text-4xl md:text-5xl">
                Dinastar naik <span className="text-brand-red">+340%</span> order dalam 6 bulan.
              </h2>
              <p className="mt-5 text-white/70 text-lg">
                Dari toko kelontong di Surabaya jadi jaringan 12 cabang dengan inventory terkontrol.
              </p>
              <Button href="/case-studies" className="mt-8">Baca case study lengkap →</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { l: 'Order volume', v: '+340%' },
                { l: 'Cabang baru', v: '12' },
                { l: 'Waste stock', v: '−82%' },
                { l: 'Waktu hemat', v: '15h/wk' },
              ].map((m) => (
                <div key={m.l} className="border border-white/10 rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-widest text-white/50">{m.l}</p>
                  <p className="heading-brand text-4xl mt-2">{m.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-[88rem] mx-auto px-6">
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest font-semibold mb-8">
            Sertifikasi &amp; Jaminan Kualitas
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { l: 'Terdaftar', b: 'BPOM', c: 'bg-green-100 text-green-700' },
              { l: 'Bersertifikat', b: 'Halal MUI', c: 'bg-emerald-100 text-emerald-700' },
              { l: 'Partner', b: 'BBI', c: 'bg-blue-100 text-blue-700' },
              { l: 'Gudang', b: 'Food-grade', c: 'bg-brand-red/10 text-brand-red' },
            ].map((cert) => (
              <div key={cert.b} className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border border-gray-100">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${cert.c}`}>✓</div>
                <div>
                  <p className="text-xs text-gray-500">{cert.l}</p>
                  <p className="font-bold">{cert.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Siap scale bisnis snack Anda?</h2>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto">
            Bergabung dengan 500+ mitra yang sudah tumbuh bersama Foodstocks. Gratis daftar, gratis onboarding.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Mulai Jual Sekarang →</Button>
            <Button href="#" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Request Demo</Button>
          </div>
        </div>
      </section>
    </>
  );
}
