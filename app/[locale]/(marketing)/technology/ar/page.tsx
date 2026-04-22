import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';

export const metadata = {
  title: 'AR Product Visualization · Scan Kemasan, Produk Hidup',
  description:
    'Augmented Reality untuk kemasan snack. Scan → model 3D, resep, info nutrisi, video how-to. Pertama di industri distribusi snack Indonesia.',
};

const capabilities = [
  {
    title: 'Model 3D interaktif',
    desc: 'Putar, zoom, cek dari segala sisi. Kemasan produk jadi showroom digital.',
    icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9',
  },
  {
    title: 'Resep & pairing',
    desc: 'Cara penyajian, kombinasi produk, ide resep — inspirasi untuk end-consumer.',
    icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3',
  },
  {
    title: 'Info nutrisi',
    desc: 'Tabel gizi, allergen, ingredients dalam format visual. Bantu konsumen choose wisely.',
    icon: 'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z',
  },
  {
    title: 'Video how-to',
    desc: 'Cuplikan produksi, cerita brand, atau tutorial — langsung di mobile.',
    icon: 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z',
  },
];

export default function ARPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white">
        <div className="max-w-[82rem] mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Teknologi Eksklusif</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,5vw+1rem,5rem)]">
              Scan kemasan,
              <br /><span className="text-brand-red">produk jadi hidup.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              AR Product Viz — pertama di industri distribusi snack Indonesia. Customer scan QR di
              kemasan, lihat 3D produk, resep, info nutrisi, dan video how-to langsung di HP.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#" size="lg">Aktifkan AR untuk Produk Anda →</Button>
              <Button href="#capabilities" size="lg" variant="secondary">Lihat contoh</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-gray-100 pt-6">
              <div><p className="heading-brand text-2xl text-brand-red">#1</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Di industri snack ID</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">4×</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Engagement vs label</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">No app</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Browser-native</p></div>
            </div>
          </Reveal>

          {/* Phone mockup showing AR preview */}
          <Reveal className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[9/19] rounded-[40px] bg-gray-900 p-2 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)]">
              <div className="w-full h-full rounded-[32px] bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-6 text-[10px] font-semibold z-10">
                  <span>9:41</span>
                  <div className="flex gap-1 items-center"><span>•••</span><span>▮▮</span><span>🔋</span></div>
                </div>
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-20" />
                <div className="pt-10 px-4 pb-4 h-full flex flex-col">
                  <div className="text-center mb-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">AR Preview</p>
                    <p className="font-[family-name:var(--font-display)] font-bold text-sm">Chitato Keju 68g</p>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-brand-red/5 to-brand-red/20 rounded-2xl relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-48 bg-gradient-to-b from-brand-red to-red-700 rounded-lg shadow-2xl transform rotate-6">
                        <div className="p-4 text-white">
                          <p className="text-[8px] uppercase">Potato Chips</p>
                          <p className="font-[family-name:var(--font-display)] font-bold text-sm mt-1">Chitato</p>
                          <p className="text-[10px]">Keju</p>
                          <div className="mt-10 text-center"><p className="text-[8px]">68g</p></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-red" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-red" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brand-red" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brand-red" />
                    <div className="absolute top-3 right-3 text-[9px] bg-white/90 backdrop-blur px-2 py-0.5 rounded-full font-bold text-brand-red">360°</div>
                  </div>
                  <div className="mt-3 flex gap-1 text-[10px]">
                    <button className="flex-1 py-1.5 rounded-lg bg-brand-red text-white font-semibold">3D</button>
                    <button className="flex-1 py-1.5 rounded-lg bg-gray-100 text-gray-600 font-semibold">Resep</button>
                    <button className="flex-1 py-1.5 rounded-lg bg-gray-100 text-gray-600 font-semibold">Nutrisi</button>
                    <button className="flex-1 py-1.5 rounded-lg bg-gray-100 text-gray-600 font-semibold">Video</button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-24 bg-gray-50">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Fitur AR</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">4 experience dalam 1 scan.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c) => (
              <article key={c.title} className="bg-white border border-gray-100 rounded-3xl p-7">
                <svg className="w-8 h-8 text-brand-red mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                </svg>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SPLIT */}
      <section className="py-24">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Benefit</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Menang di kedua sisi.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <article className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Untuk Supplier</p>
              <h3 className="heading-brand text-3xl mt-3">Brand experience yang memorable.</h3>
              <ul className="mt-6 space-y-3">
                {[
                  'Stand out di rak — packaging AR adalah diferensiator',
                  'Data engagement: siapa scan, berapa lama, produk mana paling dilihat',
                  'Update konten AR tanpa reprint kemasan (cloud-based)',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Untuk End-Consumer</p>
              <h3 className="heading-brand text-3xl mt-3">Lebih dari sekadar label belakang.</h3>
              <ul className="mt-6 space-y-3">
                {[
                  'Langsung bisa cek nutrisi, halal, allergen sebelum beli',
                  'Ide resep & pairing langsung di HP — konten shareable',
                  'No app download — WebAR langsung di browser (Chrome/Safari)',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Bawa produk Anda ke AR.</h2>
          <p className="mt-5 text-white/80 text-lg">Tim kami bantu produksi asset 3D + setup QR dalam 2 minggu.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Mulai Setup AR →</Button>
            <Button href="#" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Konsultasi gratis</Button>
          </div>
        </div>
      </section>
    </>
  );
}
