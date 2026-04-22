import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';
import { Link } from '@/i18n/navigation';

export const metadata = {
  title: 'Distribution Network · Jaringan Logistik 30+ Kota',
  description:
    'Jaringan distribusi Foodstocks: 30+ kota, 500+ reseller, route optimization AI, last-mile delivery 24 jam Jabodetabek.',
};

const features = [
  {
    title: 'Nationwide Coverage',
    desc: 'Sumatra sampai Papua — 30+ kota strategis dengan gudang lokal di setiap regional.',
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5',
  },
  {
    title: 'Route Optimization',
    desc: 'AI hitung rute terpendek per armada → efisiensi BBM naik 30%, delivery time turun 25%.',
    icon: 'M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z',
  },
  {
    title: 'Last-Mile Delivery',
    desc: 'Partnership dengan kurir lokal + armada kami. 24 jam Jabodetabek, 1-3 hari nasional.',
    icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
  },
  {
    title: '99.9% On-Time SLA',
    desc: 'Tracking real-time per shipment. Insurance otomatis untuk order di atas Rp 5jt.',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
  },
];

const regions = [
  { name: 'Sumatra', cities: 6, color: 'bg-brand-red/60' },
  { name: 'Jawa & Bali', cities: 12, color: 'bg-brand-red' },
  { name: 'Kalimantan', cities: 4, color: 'bg-brand-red/50' },
  { name: 'Sulawesi', cities: 4, color: 'bg-brand-red/40' },
  { name: 'NTB/NTT', cities: 2, color: 'bg-brand-red/30' },
  { name: 'Maluku/Papua', cities: 3, color: 'bg-brand-red/25' },
];

export default function DistributionNetworkPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-[82rem] mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Untuk Supplier · Distribution</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,4.5vw+1rem,4.75rem)]">
              <span className="text-brand-red">30+ kota</span>,
              <br />satu jaringan terpadu.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Produk Anda terdistribusi ke 500+ reseller di seluruh Indonesia via armada
              terintegrasi. Route optimization AI, last-mile delivery, tracking real-time —
              tanpa Anda pikirkan logistik.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#" size="lg">Distribusikan Produk Anda →</Button>
              <Button href="#coverage" size="lg" variant="secondary">Lihat Coverage Map</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-gray-100 pt-6">
              <div><p className="heading-brand text-2xl text-brand-red">30+</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Kota</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">500+</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Reseller</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">99.9%</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">On-time SLA</p></div>
            </div>
          </Reveal>

          {/* Shipment tracker mockup */}
          <Reveal className="lg:col-span-5">
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Live Shipment</p>
                <span className="text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  In Transit
                </span>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-4">
                <p className="text-xs text-gray-500">Order #FS-2842</p>
                <p className="font-semibold text-sm mt-0.5">Chitato Keju · 10 karton</p>
                <p className="text-xs text-gray-500 mt-0.5">Surabaya → Malang</p>
              </div>
              <div className="mt-5 relative">
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-200" />
                {[
                  { label: 'Gudang Surabaya', time: 'Kemarin 16:20', done: true },
                  { label: 'Transit Sidoarjo', time: 'Hari ini 08:15', done: true },
                  { label: 'Kurir delivery', time: 'Hari ini 14:30', done: true, current: true },
                  { label: 'Diterima customer', time: 'Est. 16:00', done: false },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3 pb-4 relative">
                    <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 relative z-10 ${s.current ? 'bg-brand-red ring-4 ring-brand-red/20' : s.done ? 'bg-brand-red' : 'bg-gray-200'}`} />
                    <div>
                      <p className={`text-sm font-semibold ${s.done ? '' : 'text-gray-400'}`}>{s.label}</p>
                      <p className="text-xs text-gray-500">{s.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Infrastruktur logistik</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Dibangun untuk skala nasional.</h2>
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

      {/* COVERAGE */}
      <section id="coverage" className="py-24">
        <div className="max-w-[82rem] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">Jangkauan</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Dari Sabang sampai Merauke.</h2>
            <p className="mt-5 text-gray-600 text-lg">
              31 kota aktif, 8 regional hub. Terus ekspansi ke kota-kota tier 2 &amp; 3 setiap kuartal.
            </p>
            <div className="mt-8 space-y-3">
              {regions.map((r) => (
                <div key={r.name} className="flex items-center gap-4">
                  <span className="text-sm font-semibold w-32">{r.name}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${r.color}`} style={{ width: `${(r.cities / 12) * 100}%` }} />
                  </div>
                  <span className="text-sm text-gray-500 w-16 text-right">{r.cities} kota</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
            <div className="aspect-[4/3] relative">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <g fill="#E30613" opacity="0.08">
                  <ellipse cx="60" cy="150" rx="35" ry="15" />
                  <ellipse cx="140" cy="170" rx="55" ry="18" />
                  <ellipse cx="210" cy="155" rx="30" ry="12" />
                  <ellipse cx="260" cy="170" rx="30" ry="18" />
                  <ellipse cx="320" cy="160" rx="35" ry="20" />
                  <ellipse cx="360" cy="175" rx="25" ry="15" />
                </g>
                <g>
                  {[
                    [55, 145], [70, 158], [130, 172], [155, 180], [175, 182],
                    [215, 150], [240, 165], [270, 170], [300, 150], [360, 170],
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="4" fill="#E30613">
                      <animate attributeName="opacity" values="1;0.4;1" dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
                    </circle>
                  ))}
                </g>
                <g fill="none" stroke="#E30613" strokeWidth="1" strokeDasharray="3,3" opacity="0.3">
                  <path d="M55 145 Q 100 120 130 172" />
                  <path d="M130 172 Q 200 130 270 170" />
                  <path d="M270 170 Q 330 140 360 170" />
                </g>
              </svg>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-3 text-center">
              <div><p className="heading-brand text-xl text-brand-red">31</p><p className="text-[10px] text-gray-500 uppercase tracking-wider">Kota</p></div>
              <div><p className="heading-brand text-xl text-brand-red">8</p><p className="text-[10px] text-gray-500 uppercase tracking-wider">Regional hub</p></div>
              <div><p className="heading-brand text-xl text-brand-red">Q3 '26</p><p className="text-[10px] text-gray-500 uppercase tracking-wider">Next ekspansi</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="heading-brand text-2xl md:text-3xl">Network ini juga di-power oleh:</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Link href="/solutions/quality-warehousing" className="card-hover bg-white border border-gray-100 rounded-2xl p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Infra</p>
              <h4 className="font-[family-name:var(--font-display)] font-bold mt-2">Quality Warehousing</h4>
              <p className="text-xs text-gray-500 mt-1">30+ gudang food-grade</p>
            </Link>
            <Link href="/solutions/supplier-portal" className="card-hover bg-white border border-gray-100 rounded-2xl p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Tool</p>
              <h4 className="font-[family-name:var(--font-display)] font-bold mt-2">Supplier Portal</h4>
              <p className="text-xs text-gray-500 mt-1">Dashboard real-time</p>
            </Link>
            <Link href="/technology/order-agent" className="card-hover bg-white border border-gray-100 rounded-2xl p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">AI</p>
              <h4 className="font-[family-name:var(--font-display)] font-bold mt-2">FS OrderAgent</h4>
              <p className="text-xs text-gray-500 mt-1">Auto order capture</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Jangkau Indonesia tanpa repot.</h2>
          <p className="mt-5 text-white/80 text-lg">Kami urus seluruh jaringan distribusi. Anda fokus produksi &amp; brand.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Daftar Supplier →</Button>
            <Button href="/solutions/supplier" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Overview Supplier</Button>
          </div>
        </div>
      </section>
    </>
  );
}
