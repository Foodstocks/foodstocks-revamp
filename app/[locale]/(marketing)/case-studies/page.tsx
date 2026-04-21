import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';

export const metadata = {
  title: 'Case Study · Minimarket Dinastar +340% Order',
  description:
    'Bagaimana Minimarket Dinastar naik dari 1 cabang jadi 12 cabang dengan order volume +340% dalam 6 bulan menggunakan Foodstocks Reseller Portal.',
};

const metrics = [
  { v: '+340%', l: 'Order volume' },
  { v: '12', l: 'Cabang baru' },
  { v: '−82%', l: 'Waste stock' },
  { v: '15h/wk', l: 'Waktu hemat' },
];

const related = [
  { tag: 'Supplier', name: 'Keripik Pedas Oom', desc: 'Dari produksi rumahan jadi brand dengan distribusi di 18 kota, 6 bulan.', metric: '+215%', unit: 'SKU sold' },
  { tag: 'Dropshipper', name: 'Dewi Permata', desc: '3 jam/hari hemat waktu input order manual sejak pakai OrderAgent AI.', metric: '540', unit: 'order/bulan' },
  { tag: 'Reseller', name: 'Toko Aminah Bandung', desc: 'Turnover naik 180% tanpa nambah modal, pakai konsinyasi.', metric: '+180%', unit: 'turnover' },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[88rem] mx-auto px-6 pt-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-brand-red">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/case-studies" className="hover:text-brand-red">Case Studies</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-ink">Minimarket Dinastar</span>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <span className="eyebrow">Case Study · Reseller</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,4.5vw+1rem,4.5rem)] max-w-4xl">
              Minimarket Dinastar: dari 1 ke 12 cabang, order <span className="text-brand-red">+340%</span> dalam 6 bulan.
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-red" /> Lokasi: Surabaya</div>
              <div>Industri: Retail mini-market</div>
              <div>Model: Consignment + Wholesale</div>
              <div>Periode: Sep 2025 — Mar 2026</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((m) => (
            <div key={m.l}>
              <p className="heading-brand text-4xl md:text-5xl text-brand-red">{m.v}</p>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">{m.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <section>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Tantangan</p>
            <h2 className="heading-brand text-3xl md:text-4xl mt-3">
              Warung kelontong dengan stok yang serba tebak-tebakan.
            </h2>
            <p className="mt-5 text-gray-700 leading-relaxed">
              Sebelum gabung Foodstocks, Ibu Sari menjalankan satu warung kelontong kecil di
              Surabaya Barat. Setiap minggu, ia harus pergi ke 5 distributor berbeda untuk restock
              — jadwal kacau, harga tidak konsisten, dan 30% stoknya sering tidak laku sebelum expired.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              &quot;Saya mau ekspansi, tapi takut rugi. Modal terbatas, gak tahu produk mana yang
              akan laku di kota lain,&quot; ujar Ibu Sari. Ekspansi jadi mimpi yang tertunda karena
              risiko stock mati terlalu besar.
            </p>
          </section>

          <section className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Solusi</p>
            <h2 className="heading-brand text-3xl md:text-4xl mt-3">
              Mulai dari konsinyasi, scale dengan data.
            </h2>
            <p className="mt-5 text-gray-700 leading-relaxed">
              Foodstocks onboard Ibu Sari di model <b>Consignment</b> — zero modal awal. Setelah 2
              bulan, data Reseller Portal tunjukkan produk mana yang perform di Surabaya. Ibu Sari
              switch ke <b>Wholesale</b> untuk top-sellers, konsinyasi dipertahankan untuk produk baru.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              {[
                ['Consignment untuk 3 bulan pertama', 'test pasar tanpa risiko'],
                ['AI product recommendation', 'Foodstocks suggest produk berdasarkan tren kota & demografi'],
                ['Auto-reorder', 'stockout tercegah, inventory optimal'],
                ['FS OrderAgent', 'customer order via WA, masuk sistem otomatis'],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs">{i + 1}</span>
                  <div>
                    <b>{title}</b> — {desc}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Hasil</p>
            <h2 className="heading-brand text-3xl md:text-4xl mt-3">
              Dari 1 warung jadi jaringan 12 cabang di Jawa Timur.
            </h2>
            <p className="mt-5 text-gray-700 leading-relaxed">
              Dalam 6 bulan, Dinastar membuka cabang baru di Sidoarjo, Malang, dan Gresik. Order
              volume total naik 340%. Yang lebih penting: waste stock turun 82% berkat data-driven stocking.
            </p>
            <div className="mt-8 bg-white rounded-3xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-sm">Monthly order volume (karton)</p>
                <span className="text-xs text-green-600 font-semibold">+340% YoY</span>
              </div>
              <div className="h-40 flex items-end gap-2">
                {[
                  { m: 'Sep', h: 15, c: 'bg-gray-200' },
                  { m: 'Okt', h: 25, c: 'bg-gray-200' },
                  { m: 'Nov', h: 38, c: 'bg-gray-200' },
                  { m: 'Des', h: 52, c: 'bg-gray-300' },
                  { m: 'Jan', h: 68, c: 'bg-brand-red/60' },
                  { m: 'Feb', h: 82, c: 'bg-brand-red/80' },
                  { m: 'Mar', h: 100, c: 'bg-brand-red' },
                ].map((b) => (
                  <div key={b.m} className="flex-1 flex flex-col items-center gap-1">
                    <div className={`w-full ${b.c} rounded-t`} style={{ height: `${b.h}%` }} />
                    <span className="text-[10px] text-gray-400">{b.m}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-brand-ink text-white rounded-3xl p-10">
            <svg className="w-10 h-10 text-brand-red/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
            </svg>
            <p className="mt-4 heading-brand text-2xl md:text-3xl leading-snug">
              Foodstocks bukan cuma supplier — mereka partner. Data dashboard-nya bikin saya berani
              scale. Kalau gak ada mereka, saya mungkin masih di 1 warung saja.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-semibold">IS</div>
              <div>
                <p className="font-semibold">Ibu Sari</p>
                <p className="text-sm text-white/60">Owner · Minimarket Dinastar · Surabaya</p>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* RELATED CASES */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[88rem] mx-auto px-6">
          <h2 className="heading-brand text-3xl md:text-4xl mb-10">Case study lainnya</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((r) => (
              <article key={r.name} className="bg-white rounded-3xl border border-gray-100 p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">{r.tag}</span>
                <h3 className="heading-brand text-xl mt-3">{r.name}</h3>
                <p className="mt-3 text-sm text-gray-600">{r.desc}</p>
                <p className="mt-4 heading-brand text-2xl text-brand-red">
                  {r.metric} <span className="text-sm text-gray-500">{r.unit}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Cerita berikutnya bisa Anda.</h2>
          <p className="mt-5 text-white/80 text-lg">
            Bergabung gratis, tanpa risiko. Mulai dari konsinyasi — nol modal awal.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Mulai Gratis →</Button>
            <Button href="#" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Ngobrol dengan Sales</Button>
          </div>
        </div>
      </section>
    </>
  );
}
