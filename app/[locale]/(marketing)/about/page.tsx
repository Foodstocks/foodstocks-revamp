import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';

export const metadata = {
  title: 'Tentang Kami · Foodstocks',
  description: 'Foodstocks adalah platform B2B distribusi snack berbasis teknologi yang menghubungkan produsen dengan reseller di seluruh Indonesia hingga mancanegara.',
};

const milestones = [
  { year: '2021', title: 'Foodstocks didirikan', desc: 'Mulai dengan visi mendigitalisasi rantai distribusi snack Indonesia.' },
  { year: '2022', title: '100+ mitra pertama', desc: 'Bergabungnya 100+ reseller & supplier awal. Infrastruktur warehouse pertama aktif.' },
  { year: '2023', title: 'Platform teknologi live', desc: 'Peluncuran Supplier Portal, Reseller Dashboard, dan FS OrderAgent (AI order capture).' },
  { year: '2024', title: 'AR Product Experience', desc: 'Pertama di Indonesia — augmented reality untuk preview produk snack secara 3D.' },
  { year: '2025', title: 'Ekspansi Nasional', desc: '30+ kota, 500+ mitra aktif, 923+ SKU tersedia di platform.' },
  { year: '2026', title: 'Going Global', desc: 'Ekspansi ke pasar Asia Tenggara & Timur Tengah. Internasionalisasi produk snack Indonesia.' },
];

const coverage = [
  { region: 'Jawa & Bali',         cities: 'Jakarta, Surabaya, Bandung, Semarang, Yogyakarta, Denpasar', flag: '🇮🇩' },
  { region: 'Sumatra',              cities: 'Medan, Palembang, Pekanbaru, Lampung, Padang', flag: '🇮🇩' },
  { region: 'Kalimantan & Sulawesi',cities: 'Balikpapan, Makassar, Manado, Pontianak', flag: '🇮🇩' },
  { region: 'Asia Tenggara',        cities: 'Singapore, Kuala Lumpur, Bangkok, Manila', flag: '🌏' },
  { region: 'Timur Tengah',         cities: 'Dubai, Riyadh (Ekspansi 2026)', flag: '🌍' },
];

const values = [
  {
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    title: 'Tech-First',
    desc: 'Setiap keputusan didorong oleh data dan teknologi. Kami bukan distributor biasa — kami technology partner.',
  },
  {
    icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    title: 'Partner Mindset',
    desc: 'Sukses mitra adalah sukses kami. Kami investasi di pertumbuhan bisnis setiap supplier dan reseller.',
  },
  {
    icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
    title: 'Kualitas Terjamin',
    desc: 'BPOM, Halal MUI, dan food-grade warehouse. Standar kualitas yang tidak kami kompromikan.',
  },
  {
    icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
    title: 'Global Ambition',
    desc: 'Membawa snack Indonesia ke pasar dunia. Dari 30+ kota nasional menuju ekspansi Asia Tenggara & Timur Tengah.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white bg-dot-grid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-brand-red-50/60 to-transparent" />
        </div>
        <div className="relative max-w-[82rem] mx-auto px-6 pt-20 pb-24 text-center">
          <Reveal>
            <span className="eyebrow">Tentang Foodstocks</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.75rem,5vw+1rem,5rem)]">
              Kami hadir untuk mendigitalisasi<br className="hidden md:block" />
              <span className="text-gradient-red"> distribusi snack Indonesia.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Foodstocks adalah platform B2B distribusi snack berbasis teknologi yang memposisikan
              diri sebagai <strong className="text-brand-ink font-semibold">Technology Partner</strong> — bukan sekadar distributor biasa.
              Kami menghubungkan produsen snack dengan reseller dan buyer di seluruh Indonesia hingga global.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { v: '923+', l: 'SKU Produk' },
                { v: '500+', l: 'Mitra Aktif' },
                { v: '30+',  l: 'Kota Indonesia' },
                { v: '5+',   l: 'Negara (2026)' },
              ].map((s) => (
                <div key={s.l} className="bg-white rounded-2xl border border-gray-100 px-5 py-4 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.08)]">
                  <p className="heading-brand text-3xl text-brand-red">{s.v}</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="eyebrow">Misi & Visi</span>
              <h2 className="heading-brand mt-4 text-4xl md:text-5xl">
                Membangun tulang punggung distribusi snack Asia Tenggara.
              </h2>
              <p className="mt-6 text-gray-500 leading-relaxed">
                Kami percaya bahwa snack Indonesia — dari keripik tempe hingga chiki artisan —
                layak mendapatkan akses distribusi sekelas produk global. Dengan teknologi sebagai
                fondasi, kami membangun infrastruktur yang adil, transparan, dan skalabel bagi
                semua pelaku industri.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                <strong className="text-brand-ink font-semibold">Visi 2030:</strong> Menjadi platform distribusi
                snack terbesar di Asia Tenggara, dengan 10.000+ SKU dan kehadiran di 15+ negara.
              </p>
              <Button href="/contact" className="mt-8">Bergabung dengan Kami →</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <article key={v.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-red-50 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-base">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JANGKAUAN — NASIONAL & INTERNASIONAL */}
      <section className="py-24 bg-white">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Jangkauan</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">
              Nasional kuat,<br />global dalam jangkauan.
            </h2>
            <p className="mt-4 text-gray-500">
              Dari Sabang sampai Merauke — dan terus meluas ke pasar Asia Tenggara dan Timur Tengah.
            </p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {coverage.map((c) => (
              <div key={c.region} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4 hover:border-brand-red-200 hover:shadow-[0_4px_20px_-4px_rgba(227,6,19,0.08)] transition-all">
                <span className="text-2xl flex-shrink-0" aria-hidden>{c.flag}</span>
                <div>
                  <p className="font-[family-name:var(--font-display)] font-bold">{c.region}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{c.cities}</p>
                </div>
                {c.flag === '🌏' || c.flag === '🌍' ? (
                  <span className="ml-auto flex-shrink-0 text-[10px] font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
                    Ekspansi
                  </span>
                ) : (
                  <span className="ml-auto flex-shrink-0 text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full">
                    Aktif
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow">Perjalanan</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Milestone Foodstocks</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[28px] top-4 bottom-4 w-px bg-gray-200 md:left-1/2" aria-hidden />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <Reveal key={m.year} className={`flex gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? 'justify-end pr-10' : 'justify-start pl-10'}`}>
                    <div className={`bg-white rounded-2xl border border-gray-100 p-5 max-w-xs ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <p className="heading-brand text-brand-red text-xl">{m.year}</p>
                      <h3 className="font-[family-name:var(--font-display)] font-bold mt-1">{m.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{m.desc}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-14 flex items-start justify-center pt-1">
                    <div className="w-7 h-7 rounded-full bg-brand-red border-4 border-white shadow-sm z-10" />
                  </div>
                  <div className="md:hidden flex-1">
                    <p className="heading-brand text-brand-red text-lg">{m.year}</p>
                    <h3 className="font-[family-name:var(--font-display)] font-bold mt-0.5">{m.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{m.desc}</p>
                  </div>
                  <div className="hidden md:block flex-1" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-ink relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-red/12 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-5xl text-white">
            Jadilah bagian dari revolusi distribusi snack Indonesia.
          </h2>
          <p className="mt-5 text-white/50 text-lg">
            Bergabung sebagai supplier, reseller, atau mitra teknologi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button href="/solutions/supplier">Daftar sebagai Supplier →</Button>
            <Button href="/contact" variant="secondary" className="border-white/20 text-white hover:bg-white/10">
              Hubungi Tim Kami
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
