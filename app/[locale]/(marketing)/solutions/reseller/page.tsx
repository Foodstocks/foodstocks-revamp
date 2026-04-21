import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';

export const metadata = {
  title: 'Untuk Reseller · 923+ SKU Camilan Harga Wholesale',
  description:
    'Stok camilan lengkap 923+ SKU. Wholesale, consignment, atau dropship — pilih yang cocok. Reward points tiap order.',
};

const models = [
  {
    n: '01',
    title: 'Wholesale',
    desc: 'Beli putus, harga termurah. Untuk toko dengan traffic stabil.',
    popular: false,
    rows: [
      ['Modal awal', 'Dibutuhkan'],
      ['Harga', 'Termurah'],
      ['Min. order', '1 karton'],
      ['Return', 'Tidak'],
      ['Cocok untuk', 'Minimarket · toko'],
    ] as [string, string][],
  },
  {
    n: '02',
    title: 'Consignment',
    desc: 'Zero modal awal. Bayar saat produk terjual. Risiko paling rendah.',
    popular: true,
    rows: [
      ['Modal awal', 'Tidak ada'],
      ['Harga', 'Medium'],
      ['Min. order', '1 karton'],
      ['Return', 'Ya, penuh'],
      ['Cocok untuk', 'Toko baru · trial'],
    ] as [string, string][],
  },
  {
    n: '03',
    title: 'Dropship',
    desc: 'Tanpa gudang. Kami kirim ke customer Anda dengan branding Anda.',
    popular: false,
    rows: [
      ['Modal awal', 'Per order'],
      ['Harga', 'Medium'],
      ['Min. order', '1 pcs'],
      ['Return', 'Partial'],
      ['Cocok untuk', 'Online seller'],
    ] as [string, string][],
  },
];

export default function ResellerPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white">
        <div className="max-w-[88rem] mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Untuk Reseller &amp; Minimarket</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,4.5vw+1rem,4.75rem)]">
              Stok camilan lengkap,
              <br /><span className="text-brand-red">harga wholesale.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              923+ SKU camilan terverifikasi dalam satu katalog. Pilih wholesale, konsinyasi, atau
              dropship — sesuai modal &amp; skala toko Anda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#" size="lg">Mulai Belanja →</Button>
              <Button href="#models" size="lg" variant="secondary">Bandingkan Model</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-gray-100 pt-6">
              <div><p className="heading-brand text-2xl text-brand-red">923+</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">SKU tersedia</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">1 ktn</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Min. order</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">24h</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Delivery Jabodetabek</p></div>
            </div>
          </Reveal>

          {/* Shop preview mockup */}
          <Reveal className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)]">
              <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1 px-3 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] text-gray-500 font-mono truncate">
                  shop.foodstocks.id
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-white rounded-xl border border-gray-100 p-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <span className="text-xs text-gray-400">Cari 923+ camilan...</span>
                </div>
                <div className="flex gap-1.5 overflow-hidden">
                  <span className="text-[10px] px-2 py-1 bg-brand-red text-white rounded-full whitespace-nowrap">Semua</span>
                  <span className="text-[10px] px-2 py-1 bg-white border border-gray-100 rounded-full whitespace-nowrap">Keripik</span>
                  <span className="text-[10px] px-2 py-1 bg-white border border-gray-100 rounded-full whitespace-nowrap">Wafer</span>
                  <span className="text-[10px] px-2 py-1 bg-white border border-gray-100 rounded-full whitespace-nowrap">Biskuit</span>
                  <span className="text-[10px] px-2 py-1 bg-white border border-gray-100 rounded-full whitespace-nowrap">Mie</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Chitato Keju 68g', unit: '1 karton / 24 pcs', price: 'Rp 185.000', ar: true },
                    { name: 'Indomie Goreng', unit: '1 dus / 40 pcs', price: 'Rp 125.000' },
                    { name: 'Roma Marie Susu', unit: '1 karton / 60 pcs', price: 'Rp 210.000' },
                    { name: 'Taro Net Rumput Laut', unit: '1 karton / 30 pcs', price: 'Rp 155.000' },
                  ].map((p) => (
                    <div key={p.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                        {p.ar && <span className="absolute top-1.5 left-1.5 text-[8px] bg-white text-brand-red font-semibold px-1.5 py-0.5 rounded-full">AR</span>}
                      </div>
                      <div className="p-2">
                        <p className="text-[10px] font-semibold truncate">{p.name}</p>
                        <p className="text-[9px] text-gray-500">{p.unit}</p>
                        <p className="text-[11px] font-bold text-brand-red mt-0.5">{p.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-white rounded-xl border border-gray-100 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] px-3 py-2 hidden sm:block">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Reward Points</p>
              <p className="heading-brand text-lg text-brand-red">12,450 <span className="text-xs text-gray-500">pts</span></p>
            </div>
            <div className="absolute -top-3 -right-3 bg-white rounded-xl border border-gray-100 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] px-3 py-2 hidden sm:block">
              <p className="text-[10px] font-semibold bg-brand-red/10 text-brand-red px-2 py-0.5 rounded-full inline-block">Gold Partner</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BUSINESS MODEL COMPARISON */}
      <section id="models" className="py-24 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Pilih modelmu</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">3 cara untuk mulai</h2>
            <p className="mt-4 text-gray-600">Bisa kombinasi — tidak harus pilih satu saja.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            {models.map((m) => (
              <article
                key={m.title}
                className={`bg-white rounded-3xl p-7 ${m.popular ? 'border-2 border-brand-red relative' : 'border border-gray-100'}`}
              >
                {m.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-brand-red text-white px-3 py-1 rounded-full">
                    Paling Populer
                  </span>
                )}
                <p className={`text-xs font-semibold uppercase tracking-widest ${m.popular ? 'text-brand-red' : 'text-gray-400'}`}>{m.n}</p>
                <h3 className="heading-brand text-2xl mt-2">{m.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{m.desc}</p>
                <dl className="mt-6 pt-6 border-t border-gray-100 space-y-2.5 text-sm">
                  {m.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <dt className="text-gray-500">{k}</dt>
                      <dd className={`font-semibold ${v === 'Tidak ada' || v === 'Termurah' || v === 'Ya, penuh' ? 'text-brand-red' : ''}`}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REWARD SYSTEM */}
      <section className="py-24">
        <div className="max-w-[88rem] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow">Reward system</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">
              Makin sering order,<br />makin banyak untung.
            </h2>
            <p className="mt-5 text-gray-600 text-lg">
              Setiap Rp 10.000 = 1 point. Tukar dengan diskon, gratis ongkir, atau exclusive
              products. Tier naik otomatis dengan volume.
            </p>
            <ul className="mt-8 space-y-3">
              <li className="flex gap-3 text-sm"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span> Tier: Bronze → Silver → Gold → Platinum</li>
              <li className="flex gap-3 text-sm"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span> Bonus point di hari besar (Lebaran, Natal, 17 Agustus)</li>
              <li className="flex gap-3 text-sm"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span> Referral bonus: ajak reseller baru, dapat 5.000 pts</li>
            </ul>
          </Reveal>
          <Reveal className="bg-gray-50 rounded-3xl border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Your balance</p>
                <p className="heading-brand text-4xl text-brand-red mt-1">12,450 <span className="text-lg text-gray-500">pts</span></p>
              </div>
              <span className="text-xs font-semibold bg-brand-red/10 text-brand-red px-3 py-1 rounded-full">Gold Partner</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-gray-500">Gold</span>
                  <span className="text-gray-500">Platinum · 17,550 pts</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-brand-red" style={{ width: '70%' }} />
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Order Rp 510.000 lagi untuk naik ke Platinum — diskon 15% + free shipping national.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-3 text-center">
              <div><p className="heading-brand text-xl">42</p><p className="text-[10px] text-gray-500 uppercase tracking-wider">Orders</p></div>
              <div><p className="heading-brand text-xl">8</p><p className="text-[10px] text-gray-500 uppercase tracking-wider">Referrals</p></div>
              <div><p className="heading-brand text-xl">3</p><p className="text-[10px] text-gray-500 uppercase tracking-wider">Rewards</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Siap mulai belanja?</h2>
          <p className="mt-5 text-white/80 text-lg">
            923+ SKU menunggu. Gratis daftar, harga wholesale mulai 1 karton.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Belanja Sekarang →</Button>
            <Button href="#" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Download Katalog (PDF)</Button>
          </div>
        </div>
      </section>
    </>
  );
}
