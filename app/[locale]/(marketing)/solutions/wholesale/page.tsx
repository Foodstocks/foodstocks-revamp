import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';
import { Link } from '@/i18n/navigation';

export const metadata = {
  title: 'Wholesale · Beli Putus Harga Distributor',
  description:
    'Wholesale dengan harga termurah untuk toko, minimarket, dan bisnis FMCG. Minimum order 1 karton, reward points tiap pembelian.',
};

const perks = [
  { title: 'Harga termurah', desc: 'Lebih rendah dari semua model lain. Cocok untuk toko dengan traffic stabil.' },
  { title: 'Min. 1 karton', desc: 'Tidak perlu pesan dalam jumlah besar — 1 karton per SKU sudah bisa.' },
  { title: 'Reward points', desc: 'Setiap Rp 10.000 = 1 pt. Tier naik → diskon makin besar.' },
  { title: 'Pembayaran fleksibel', desc: 'Transfer bank, virtual account, QRIS, atau kredit (verifikasi).' },
];

export default function WholesalePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-[88rem] mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Business Model · Wholesale</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,4.5vw+1rem,4.75rem)]">
              Beli putus,
              <br /><span className="text-brand-red">harga terbaik.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Cocok untuk toko, minimarket, dan bisnis FMCG yang mau harga paling rendah. Order 1 karton,
              dibayar langsung, stok jadi milik Anda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#" size="lg">Mulai Wholesale →</Button>
              <Button href="/solutions/reseller" size="lg" variant="secondary">Bandingkan Model</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-gray-100 pt-6">
              <div><p className="heading-brand text-2xl text-brand-red">1 ktn</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Min. order</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">Termurah</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Harga</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">1 pt / 10K</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Reward</p></div>
            </div>
          </Reveal>

          {/* Price comparison visual */}
          <Reveal className="lg:col-span-5">
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Perbandingan harga · Chitato Keju 68g</p>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">Retail (1 pcs)</span>
                    <span className="text-gray-500">Rp 11.000</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">Dropship (1 pcs)</span>
                    <span className="text-gray-500">Rp 9.500</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-gray-400" style={{ width: '86%' }} /></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">Consignment (1 ktn)</span>
                    <span className="text-gray-500">Rp 8.200 / pcs</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-gray-500" style={{ width: '75%' }} /></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-brand-red">Wholesale (1 ktn)</span>
                    <span className="font-bold text-brand-red">Rp 7.708 / pcs</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-brand-red" style={{ width: '70%' }} /></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-gray-100">
                Hemat hingga <b className="text-brand-red">30%</b> vs harga retail per unit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Kenapa Wholesale</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Untuk toko yang stabil &amp; pasti laku.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p) => (
              <article key={p.title} className="bg-white border border-gray-100 rounded-3xl p-7">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="eyebrow">Cocok untuk</span>
            <h2 className="heading-brand mt-4 text-3xl md:text-4xl">Bukan untuk semua — dan itu OK.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl border border-gray-100 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">✓ Cocok untuk</p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span> Minimarket dengan omzet stabil</li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span> Toko grosir / cabang reseller</li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span> Warung yang sudah hafal produk laku</li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs">✓</span> Bisnis katering / HoReCa</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">✗ Pertimbangkan model lain kalau</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs">—</span> Baru mulai &amp; modal terbatas → <Link href="/solutions/consignment" className="text-brand-red underline">Consignment</Link></li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs">—</span> Jual online, tidak mau stok → <Link href="/solutions/dropship" className="text-brand-red underline">Dropship</Link></li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs">—</span> Masih test pasar produk baru</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Siap order wholesale?</h2>
          <p className="mt-5 text-white/80 text-lg">923+ SKU siap dikirim. Harga paling rendah mulai 1 karton.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Mulai Order →</Button>
            <Button href="/solutions/reseller" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Bandingkan 3 Model</Button>
          </div>
        </div>
      </section>
    </>
  );
}
