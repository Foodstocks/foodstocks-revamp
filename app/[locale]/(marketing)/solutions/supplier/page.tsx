import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';

export const metadata = {
  title: 'Untuk Supplier · Distribusi ke 500+ Reseller',
  description:
    'Jangkau 500+ reseller di 30+ kota Indonesia tanpa repot logistik. Gudang food-grade, analytics real-time, demand prediction AI.',
};

const benefits = [
  {
    title: 'Gudang Food-Grade',
    desc: '30+ warehouse tersertifikasi di seluruh Indonesia, lengkap dengan cold storage & inventory real-time.',
    path: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  },
  {
    title: 'Analytics Real-time',
    desc: 'Dashboard sales, inventory, dan performance per SKU/kota. Tahu persis produk mana yang perform.',
    path: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  },
  {
    title: 'Demand Prediction AI',
    desc: 'AI forecasting berbasis historis + trend. Auto-reorder mencegah stockout, prediksi demand per kota.',
    path: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5',
  },
  {
    title: 'Supplier Portal',
    desc: 'Web + mobile portal untuk manage produk, lihat analytics, dan komunikasi dengan tim Foodstocks.',
    path: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25',
  },
];

const kolPerks = [
  {
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    title: 'Jangkauan Audiens Luas',
    desc: 'Konten Anda menjangkau jutaan follower. Kami sediakan materi produk, sample, dan brief kreatif.',
  },
  {
    icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Komisi Kompetitif',
    desc: 'Komisi per konversi + bonus performa. Semakin banyak terjual, semakin tinggi komisi Anda.',
  },
  {
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    title: 'Dashboard Afiliasi Real-time',
    desc: 'Lacak klik, konversi, dan pendapatan Anda kapan saja melalui dashboard afiliasi personal.',
  },
  {
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    title: 'Support Konten AI',
    desc: 'Template konten, caption generator, dan insight tren dari AI Foodstocks untuk tingkatkan engagement.',
  },
];

const steps = [
  { n: 1, title: 'Registrasi & dokumen', desc: 'Upload NIB, BPOM, Halal MUI. Tim kami verifikasi.' },
  { n: 2, title: 'Upload produk', desc: 'SKU, foto, harga wholesale. Tim kami bantu optimize listing.' },
  { n: 3, title: 'Kirim ke gudang', desc: 'Pilih gudang Foodstocks terdekat. Kami terima & inventory masuk.' },
  { n: 4, title: 'Distribusi otomatis', desc: 'Produk tersedia untuk 500+ reseller. Anda monitor via dashboard.' },
];

export default function SupplierPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white">
        <div className="max-w-[82rem] mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Untuk Supplier &amp; Produsen</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,4.5vw+1rem,4.75rem)]">
              Jangkau <span className="text-brand-red">500+ reseller</span>
              <br />tanpa repot logistik.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Produk Anda langsung terdistribusi ke minimarket, dropshipper, dan kanal konsinyasi
              di 30+ kota. Kami urus gudang, pengiriman, dan analytics — Anda fokus produksi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#" size="lg">Daftarkan Produk Anda →</Button>
              <Button href="#demo" size="lg" variant="secondary">Lihat Supplier Portal</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-gray-100 pt-6">
              <div><p className="heading-brand text-2xl text-brand-red">500+</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Reseller aktif</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">30+</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Kota coverage</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">1×24h</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Onboarding</p></div>
            </div>
          </Reveal>

          {/* Supplier dashboard mockup */}
          <Reveal className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)]">
              <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1 px-3 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] text-gray-500 font-mono truncate">
                  shop.foodstocks.id/supplier
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Supplier Dashboard</p>
                  <p className="font-semibold text-sm mt-0.5">Keripik Pedas Oom</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-xl border border-gray-100 p-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Distribusi</p>
                    <p className="heading-brand text-lg mt-1 text-brand-red">1.240 <span className="text-xs text-gray-500">karton</span></p>
                    <p className="text-[10px] text-green-600 font-semibold mt-0.5">+42% bulan ini</p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Reseller aktif</p>
                    <p className="heading-brand text-lg mt-1">247</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">di 18 kota</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold">Forecast vs Realisasi</span>
                    <span className="text-[10px] text-gray-400">Mar 2026</span>
                  </div>
                  <div className="h-20 flex items-end gap-1">
                    <div className="flex-1 flex flex-col gap-0.5 h-full justify-end">
                      <div className="bg-gray-200 rounded-t h-[60%]" />
                      <div className="bg-brand-red rounded-t h-[55%]" />
                    </div>
                    <div className="flex-1 flex flex-col gap-0.5 h-full justify-end">
                      <div className="bg-gray-200 rounded-t h-[70%]" />
                      <div className="bg-brand-red rounded-t h-[72%]" />
                    </div>
                    <div className="flex-1 flex flex-col gap-0.5 h-full justify-end">
                      <div className="bg-gray-200 rounded-t h-[80%]" />
                      <div className="bg-brand-red rounded-t h-[90%]" />
                    </div>
                    <div className="flex-1 flex flex-col gap-0.5 h-full justify-end">
                      <div className="bg-gray-200 rounded-t h-[85%]" />
                      <div className="bg-brand-red rounded-t h-[82%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-[9px] text-gray-500">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-gray-200" />Forecast</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-brand-red" />Realisasi</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-3 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold">Auto-reorder: Keripik Pedas Oom (Large)</p>
                    <p className="text-[9px] text-gray-500">Forecast habis dalam 4 hari · Auto-PO dibuat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 bg-white rounded-xl border border-gray-100 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] px-3 py-2 hidden sm:block">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Revenue</p>
              <p className="heading-brand text-lg text-brand-red">Rp 248jt</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Benefit</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Semua yang Anda butuhkan untuk distribusi scale.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <article key={b.title} className="bg-white border border-gray-100 rounded-3xl p-7">
                <svg className="w-8 h-8 text-brand-red mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={b.path} />
                </svg>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="demo" className="py-24">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Proses</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Onboarding dalam 1×24 jam</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-5 left-[12%] right-[12%] h-px bg-gray-200" />
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-semibold text-sm relative z-10">
                  {s.n}
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-base">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="bg-white rounded-3xl border border-gray-100 p-10 md:p-14 text-center">
            <svg className="w-10 h-10 text-brand-red/30 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
            </svg>
            <p className="mt-6 heading-brand text-2xl md:text-3xl leading-snug">
              Sebagai brand snack baru, Foodstocks buka jalan ke 200+ reseller hanya dalam 3 bulan.
              Dashboard-nya bikin saya tahu persis produk mana yang paling laku di kota mana.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-sm text-gray-600">RH</div>
              <div className="text-left">
                <p className="font-semibold text-sm">Rudi Hartono</p>
                <p className="text-xs text-gray-500">Founder · Keripik Pedas Oom</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KOL & AFFILIATOR */}
      <section id="kol" className="py-24 bg-white">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="eyebrow">KOL &amp; Affiliator</span>
              <h2 className="heading-brand mt-4 text-4xl md:text-5xl">
                Perluas jangkauan via
                <span className="text-brand-red"> kreator &amp; afiliasi.</span>
              </h2>
              <p className="mt-6 text-gray-500 leading-relaxed">
                Program KOL &amp; Affiliator Foodstocks memungkinkan kreator konten, food blogger,
                dan micro-influencer untuk mempromosikan produk snack Indonesia dan menghasilkan
                komisi dari setiap transaksi.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Kami menyediakan link afiliasi personal, materi konten, sample produk, dan dashboard
                real-time untuk tracking performa kampanye Anda.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact?topic=Partnership+%2F+KOL" size="lg">Daftar sebagai KOL →</Button>
                <Button href="/contact" size="lg" variant="secondary">Pelajari Program</Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                <div><p className="heading-brand text-2xl text-brand-red">10%</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Komisi awal</p></div>
                <div><p className="heading-brand text-2xl text-brand-red">200+</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Kreator aktif</p></div>
                <div><p className="heading-brand text-2xl text-brand-red">7hr</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Pencairan mingguan</p></div>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                {kolPerks.map((k) => (
                  <article key={k.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 hover:border-brand-red-200 hover:bg-white hover:shadow-[0_4px_20px_-4px_rgba(227,6,19,0.08)] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-red-50 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={k.icon} />
                      </svg>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-base">{k.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{k.desc}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Siap distribusikan produk Anda?</h2>
          <p className="mt-5 text-white/80 text-lg">Registrasi gratis. Onboarding dalam 1×24 jam.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Daftar sebagai Supplier →</Button>
            <Button href="#" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Jadwalkan demo</Button>
          </div>
        </div>
      </section>
    </>
  );
}
