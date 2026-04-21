import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';
import { Link } from '@/i18n/navigation';

export const metadata = {
  title: 'Consignment · Zero Modal, Bayar Saat Laku',
  description:
    'Konsinyasi Foodstocks: nol modal awal, bayar hanya saat produk terjual, sisa stok bisa di-retur penuh. Cocok untuk toko baru & test pasar.',
};

const howSteps = [
  { no: '01', title: 'Terima barang', desc: 'Produk dikirim ke toko Anda, gratis ongkos pertama.' },
  { no: '02', title: 'Jual di toko', desc: 'Pajang produk, transaksi di POS/kasir Anda seperti biasa.' },
  { no: '03', title: 'Laporkan penjualan', desc: 'Update sales di portal (atau AI OrderAgent ambil dari sistem Anda).' },
  { no: '04', title: 'Bayar yang laku saja', desc: 'Settlement mingguan. Sisa stok bisa diretur penuh.' },
];

export default function ConsignmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-[88rem] mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Business Model · Consignment</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,4.5vw+1rem,4.75rem)]">
              Zero modal,
              <br /><span className="text-brand-red">bayar saat laku.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Paling populer untuk toko baru &amp; reseller test pasar. Terima barang, jual, bayar hanya yang laku.
              Sisa stok? Retur penuh, tanpa biaya.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#" size="lg">Mulai Konsinyasi →</Button>
              <Button href="/solutions/reseller" size="lg" variant="secondary">Bandingkan Model</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-gray-100 pt-6">
              <div><p className="heading-brand text-2xl text-brand-red">Rp 0</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Modal awal</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">100%</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Return policy</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">Weekly</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Settlement</p></div>
            </div>
          </Reveal>

          {/* Risk visualization */}
          <Reveal className="lg:col-span-5">
            <div className="bg-gradient-to-br from-brand-red/5 to-transparent rounded-3xl border-2 border-brand-red/20 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Risiko vs Return</p>
              <h3 className="heading-brand text-3xl mt-3">Paling rendah di industri.</h3>
              <div className="mt-8 space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-1.5"><span className="font-semibold">Modal awal</span><span className="text-brand-red font-bold">Rp 0</span></div>
                  <div className="h-1.5 bg-gray-100 rounded-full"><div className="h-full bg-brand-red rounded-full" style={{ width: '0%' }} /></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5"><span className="font-semibold">Risiko stok mati</span><span className="text-brand-red font-bold">0%</span></div>
                  <div className="h-1.5 bg-gray-100 rounded-full"><div className="h-full bg-brand-red rounded-full" style={{ width: '0%' }} /></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5"><span className="font-semibold">Margin reseller</span><span className="text-brand-red font-bold">15-25%</span></div>
                  <div className="h-1.5 bg-gray-100 rounded-full"><div className="h-full bg-brand-red rounded-full" style={{ width: '75%' }} /></div>
                </div>
              </div>
              <p className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-600 italic">
                &quot;Konsinyasi bikin saya berani coba produk baru. Kalau gak laku, tinggal retur.&quot;<br />
                <span className="text-gray-400">— Ibu Siti · Toko Aminah · Bandung</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Proses</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">4 langkah, no surprises.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-5 left-[12%] right-[12%] h-px bg-gray-200" />
            {howSteps.map((s) => (
              <div key={s.no} className="relative">
                <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-semibold text-sm relative z-10">
                  {s.no.replace('0', '')}
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] font-bold text-base">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TEASER */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="eyebrow">Cocok untuk</span>
            <h2 className="heading-brand mt-4 text-3xl md:text-4xl">Siapa yang paling untung dengan konsinyasi?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-3xl border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Ideal</p>
              <h3 className="heading-brand text-xl mt-2">Toko baru</h3>
              <p className="text-sm text-gray-600 mt-2">Modal terbatas, mau test produk mana yang laku di daerah Anda.</p>
            </div>
            <div className="bg-white rounded-3xl border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Ideal</p>
              <h3 className="heading-brand text-xl mt-2">Test SKU baru</h3>
              <p className="text-sm text-gray-600 mt-2">Sudah punya toko, mau coba produk baru tanpa risiko stok mati.</p>
            </div>
            <div className="bg-white rounded-3xl border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">Ideal</p>
              <h3 className="heading-brand text-xl mt-2">Ekspansi cabang</h3>
              <p className="text-sm text-gray-600 mt-2">Buka cabang baru? Stock-in tanpa upfront, scale pelan-pelan.</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Sudah stabil &amp; mau harga termurah? Lihat <Link href="/solutions/wholesale" className="text-brand-red underline">Wholesale</Link> atau
            <Link href="/solutions/dropship" className="text-brand-red underline"> Dropship</Link> untuk online seller.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Mulai tanpa risiko.</h2>
          <p className="mt-5 text-white/80 text-lg">Daftar gratis. Produk dikirim, Anda jual, kami bayar yang laku.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Daftar Consignment →</Button>
            <Button href="/solutions/reseller" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Bandingkan 3 Model</Button>
          </div>
        </div>
      </section>
    </>
  );
}
