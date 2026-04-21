import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';

export const metadata = {
  title: 'Quality Warehousing · Gudang Food-Grade di 30+ Kota',
  description:
    'Gudang food-grade Foodstocks: cold storage, climate control, BPOM-compliant. Inventory real-time, auto-reorder, tersebar di 30+ kota.',
};

const features = [
  {
    title: 'Food-Grade Certified',
    desc: 'Semua gudang lulus standar BPOM food-safety. Sanitasi berkala, pest control, temperature log harian.',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
  },
  {
    title: 'Cold Storage',
    desc: 'Freezer -18°C untuk frozen, chiller 2-8°C untuk dairy, ambient 18-25°C untuk dry goods. Pilih per SKU.',
    icon: 'M6 18.75a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM6 7.5a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H6.75A.75.75 0 016 7.5zm-3 3.75h18m0-3.75H3m18 11.25v-7.5a2.25 2.25 0 00-2.25-2.25h-3.75a2.25 2.25 0 00-2.25 2.25v7.5m8.25 0H3.75m0 0a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75H21M3 19.5a.75.75 0 01-.75-.75m.75.75h18',
  },
  {
    title: 'Real-time WMS',
    desc: 'Warehouse Management System terintegrasi. Supplier &amp; reseller lihat stok real-time, no more surprise kosong.',
    icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
  },
  {
    title: 'Auto-Reorder',
    desc: 'AI prediksi kapan stok habis berdasarkan demand trend. PO otomatis dibuat sebelum stockout terjadi.',
    icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
  },
];

const cities = [
  ['Sumatra', 'Medan, Palembang, Pekanbaru, Lampung'],
  ['Jawa Barat', 'Jakarta, Bandung, Bogor, Karawang'],
  ['Jawa Tengah', 'Semarang, Yogyakarta, Solo'],
  ['Jawa Timur', 'Surabaya, Malang, Sidoarjo'],
  ['Bali & NTB', 'Denpasar, Mataram'],
  ['Kalimantan', 'Pontianak, Banjarmasin, Samarinda'],
  ['Sulawesi', 'Makassar, Manado, Palu'],
  ['Indonesia Timur', 'Jayapura, Ambon'],
];

export default function QualityWarehousingPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-[88rem] mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Untuk Supplier · Warehousing</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,4.5vw+1rem,4.75rem)]">
              Gudang <span className="text-brand-red">food-grade</span>
              <br />di seluruh Indonesia.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              30+ warehouse tersertifikasi di 30+ kota strategis. Cold storage, climate control,
              real-time inventory — produk Anda tersimpan dengan aman, kirim cepat ke mana saja.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#" size="lg">Kirim Produk ke Gudang →</Button>
              <Button href="#network" size="lg" variant="secondary">Lihat Jaringan</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-gray-100 pt-6">
              <div><p className="heading-brand text-2xl text-brand-red">30+</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Warehouse</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">99.9%</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Uptime WMS</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">BPOM</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Certified</p></div>
            </div>
          </Reveal>

          {/* Warehouse visual */}
          <Reveal className="lg:col-span-5">
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 space-y-4">
              <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Freezer</p>
                    <p className="text-xs text-gray-500">-18°C ± 1°C</p>
                  </div>
                </div>
                <span className="text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded-full">Active</span>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Chiller</p>
                    <p className="text-xs text-gray-500">2-8°C</p>
                  </div>
                </div>
                <span className="text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded-full">Active</span>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Dry Ambient</p>
                    <p className="text-xs text-gray-500">18-25°C</p>
                  </div>
                </div>
                <span className="text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded-full">Active</span>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between text-xs text-gray-500 mb-2"><span>Kapasitas saat ini</span><span className="font-bold text-gray-700">68% terpakai</span></div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-brand-red" style={{ width: '68%' }} /></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Infrastruktur</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Kualitas yang tidak kompromi.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <article key={f.title} className="bg-white border border-gray-100 rounded-3xl p-7">
                <svg className="w-8 h-8 text-brand-red mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: f.desc }} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section id="network" className="py-24">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Jaringan gudang</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">30+ warehouse di 8 regional.</h2>
            <p className="mt-4 text-gray-600">Dari Sabang sampai Merauke, ada gudang terdekat untuk produk Anda.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map(([region, list]) => (
              <div key={region} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <p className="font-[family-name:var(--font-display)] font-bold text-sm">{region}</p>
                <p className="text-xs text-gray-500 mt-1">{list}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[88rem] mx-auto px-6">
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest font-semibold mb-8">
            Sertifikasi &amp; Standar
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {[
              ['BPOM', 'bg-green-100 text-green-700'],
              ['Halal MUI', 'bg-emerald-100 text-emerald-700'],
              ['ISO 22000', 'bg-blue-100 text-blue-700'],
              ['HACCP', 'bg-purple-100 text-purple-700'],
              ['GMP', 'bg-amber-100 text-amber-700'],
            ].map(([name, cls]) => (
              <div key={name} className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border border-gray-100">
                <div className={`w-10 h-10 rounded-full ${cls} flex items-center justify-center font-bold`}>✓</div>
                <p className="font-bold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Titipkan produk Anda.</h2>
          <p className="mt-5 text-white/80 text-lg">Gudang terjaga, inventory transparan, distribusi nasional.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Kirim ke Gudang →</Button>
            <Button href="#" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Tour Virtual</Button>
          </div>
        </div>
      </section>
    </>
  );
}
