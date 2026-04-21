import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';
import { Link } from '@/i18n/navigation';

export const metadata = {
  title: 'Supplier Portal · Dashboard Real-time untuk Brand Anda',
  description:
    'Portal supplier Foodstocks: sales analytics real-time, demand forecast AI, inventory tracking multi-kota, mobile-ready. Dibuat untuk brand yang scale.',
};

const features = [
  {
    title: 'Sales Analytics Real-time',
    desc: 'Revenue, orders, SKU performance per kota — update detik-per-detik. Export ke Excel / BI tool Anda.',
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  },
  {
    title: 'Demand Forecasting AI',
    desc: 'Prediksi permintaan per SKU per kota 30-90 hari ke depan. Berbasis historical + trend musiman.',
    icon: 'M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Inventory Transparency',
    desc: 'Lihat stock per gudang, expiry date, movement rate. Auto-alert kalau ada SKU slow-moving atau near expiry.',
    icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
  },
  {
    title: 'Multi-user & Role',
    desc: 'Owner, finance, marketing, ops — akses sesuai role. Audit log tiap action. Mobile app iOS + Android.',
    icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
  },
];

export default function SupplierPortalPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-[88rem] mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Untuk Supplier · Dashboard</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,4.5vw+1rem,4.75rem)]">
              Dashboard <span className="text-brand-red">real-time</span>
              <br />untuk brand Anda.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Lihat performance produk Anda di semua kota, dengan data sedetik lalu. Demand
              forecast AI, inventory transparan, team collaboration — semua di satu portal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#" size="lg">Request Demo Portal →</Button>
              <Button href="#" size="lg" variant="secondary">Download Sample Report (PDF)</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-gray-100 pt-6">
              <div><p className="heading-brand text-2xl text-brand-red">Real-time</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Data refresh</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">iOS+Android</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Mobile app</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">99.9%</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Uptime</p></div>
            </div>
          </Reveal>

          {/* Full dashboard mockup (wider) */}
          <Reveal className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)]">
              {/* browser chrome */}
              <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1 px-3 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] text-gray-500 font-mono truncate">
                  shop.foodstocks.id/supplier/analytics
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Brand Dashboard</p>
                    <p className="font-semibold text-sm mt-0.5">Keripik Pedas Oom</p>
                  </div>
                  <div className="flex gap-1.5">
                    <button className="text-[10px] px-2 py-1 rounded-full bg-brand-red text-white font-semibold">30D</button>
                    <button className="text-[10px] px-2 py-1 rounded-full bg-white border border-gray-100 text-gray-500 font-semibold">90D</button>
                    <button className="text-[10px] px-2 py-1 rounded-full bg-white border border-gray-100 text-gray-500 font-semibold">YTD</button>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-white rounded-xl border border-gray-100 p-3">
                    <p className="text-[9px] text-gray-500 uppercase tracking-wider">Revenue</p>
                    <p className="heading-brand text-base mt-1 text-brand-red">Rp 248jt</p>
                    <p className="text-[9px] text-green-600 font-semibold">+42%</p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-3">
                    <p className="text-[9px] text-gray-500 uppercase tracking-wider">Orders</p>
                    <p className="heading-brand text-base mt-1">1.240</p>
                    <p className="text-[9px] text-green-600 font-semibold">+18%</p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-3">
                    <p className="text-[9px] text-gray-500 uppercase tracking-wider">Reseller</p>
                    <p className="heading-brand text-base mt-1">247</p>
                    <p className="text-[9px] text-green-600 font-semibold">+32</p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-3">
                    <p className="text-[9px] text-gray-500 uppercase tracking-wider">Stok hari</p>
                    <p className="heading-brand text-base mt-1">18 hr</p>
                    <p className="text-[9px] text-amber-600 font-semibold">Low</p>
                  </div>
                </div>

                {/* Line chart area */}
                <div className="bg-white rounded-xl border border-gray-100 p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold">Revenue trend</span>
                    <span className="text-[10px] text-gray-400">30 hari terakhir</span>
                  </div>
                  <svg viewBox="0 0 400 80" className="w-full h-20">
                    <defs>
                      <linearGradient id="fill1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E30613" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 60 L 40 55 L 80 58 L 120 45 L 160 50 L 200 38 L 240 42 L 280 28 L 320 32 L 360 20 L 400 15 L 400 80 L 0 80 Z" fill="url(#fill1)" />
                    <path d="M 0 60 L 40 55 L 80 58 L 120 45 L 160 50 L 200 38 L 240 42 L 280 28 L 320 32 L 360 20 L 400 15" fill="none" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Top cities */}
                <div className="bg-white rounded-xl border border-gray-100 p-4">
                  <p className="text-xs font-semibold mb-3">Top performing kota</p>
                  <div className="space-y-2">
                    {[
                      { city: 'Surabaya', pct: 92 },
                      { city: 'Jakarta', pct: 78 },
                      { city: 'Bandung', pct: 65 },
                      { city: 'Medan', pct: 52 },
                    ].map((c) => (
                      <div key={c.city} className="flex items-center gap-3">
                        <span className="text-[11px] font-semibold w-20">{c.city}</span>
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-brand-red" style={{ width: `${c.pct}%` }} /></div>
                        <span className="text-[10px] text-gray-500 w-10 text-right">{c.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Features</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Semua data, satu tempat.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <article key={f.title} className="bg-white border border-gray-100 rounded-3xl p-7">
                <svg className="w-8 h-8 text-brand-red mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="eyebrow">Use cases</span>
            <h2 className="heading-brand mt-4 text-3xl md:text-4xl">Siapa yang pakai portal ini.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Owner / Founder</p>
              <h3 className="heading-brand text-xl mt-2">Keputusan strategis</h3>
              <p className="text-sm text-gray-600 mt-2">Lihat ROI per SKU, kota mana untuk ekspansi, produk mana untuk di-phase out.</p>
            </div>
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Ops / Produksi</p>
              <h3 className="heading-brand text-xl mt-2">Forecast produksi</h3>
              <p className="text-sm text-gray-600 mt-2">Data demand 30 hari depan → jadwalkan produksi tanpa overstock / stockout.</p>
            </div>
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Marketing</p>
              <h3 className="heading-brand text-xl mt-2">Campaign efficiency</h3>
              <p className="text-sm text-gray-600 mt-2">Lihat uplift penjualan post-campaign, ROI promo, engagement AR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="heading-brand text-2xl md:text-3xl">Berjalan di atas infra:</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Link href="/solutions/distribution-network" className="card-hover bg-white border border-gray-100 rounded-2xl p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Network</p>
              <h4 className="font-[family-name:var(--font-display)] font-bold mt-2">Distribution Network</h4>
              <p className="text-xs text-gray-500 mt-1">30+ kota coverage</p>
            </Link>
            <Link href="/solutions/quality-warehousing" className="card-hover bg-white border border-gray-100 rounded-2xl p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Infra</p>
              <h4 className="font-[family-name:var(--font-display)] font-bold mt-2">Quality Warehousing</h4>
              <p className="text-xs text-gray-500 mt-1">Food-grade + WMS</p>
            </Link>
            <Link href="/technology/order-agent" className="card-hover bg-white border border-gray-100 rounded-2xl p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">AI</p>
              <h4 className="font-[family-name:var(--font-display)] font-bold mt-2">FS OrderAgent</h4>
              <p className="text-xs text-gray-500 mt-1">Order auto-parsing</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Lihat data bisnis Anda, hidup.</h2>
          <p className="mt-5 text-white/80 text-lg">Request demo gratis. 30 menit tour personal dengan tim kami.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Request Demo →</Button>
            <Button href="/solutions/supplier" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Overview Supplier</Button>
          </div>
        </div>
      </section>
    </>
  );
}
