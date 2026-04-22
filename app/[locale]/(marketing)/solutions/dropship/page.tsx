import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';
import { Link } from '@/i18n/navigation';

export const metadata = {
  title: 'Dropship · Tanpa Stok, Tanpa Gudang',
  description:
    'Dropship Foodstocks: order masuk, kami kirim langsung ke customer Anda dengan packaging brand Anda. Custom branding, real-time tracking, 923+ SKU.',
};

const perks = [
  { title: 'Tanpa gudang', desc: 'Tidak perlu simpan stok. Jual apa saja, kami yang urus logistik.' },
  { title: 'Custom packaging', desc: 'Pakai nama toko &amp; branding Anda. Customer tidak tahu kami di belakangnya.' },
  { title: 'Real-time tracking', desc: 'Status kirim otomatis update ke customer. Minim komplain.' },
  { title: 'Per-pcs pricing', desc: 'Order 1 pcs pun bisa. Cocok untuk seller marketplace.' },
];

export default function DropshipPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-[82rem] mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow">Business Model · Dropship</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,4.5vw+1rem,4.75rem)]">
              Tanpa stok,
              <br /><span className="text-brand-red">tanpa gudang.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Order masuk di Tokopedia / Shopee / WhatsApp Anda → kami kirim langsung ke customer
              dengan packaging brand Anda. Zero inventory risk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#" size="lg">Mulai Dropship →</Button>
              <Button href="/solutions/reseller" size="lg" variant="secondary">Bandingkan Model</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-gray-100 pt-6">
              <div><p className="heading-brand text-2xl text-brand-red">1 pcs</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Min. order</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">Custom</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Branding</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">Live</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Tracking</p></div>
            </div>
          </Reveal>

          {/* Flow visualization */}
          <Reveal className="lg:col-span-5">
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Flow dropship</p>
              <div className="mt-6 space-y-4">
                <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-sm">1</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Customer order di toko online Anda</p>
                    <p className="text-xs text-gray-500">Tokopedia, Shopee, TikTok Shop, WA</p>
                  </div>
                </div>
                <div className="flex justify-center text-gray-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414 6.707 8.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3zm0 6a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 11.414 6.707 14.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 9z" transform="rotate(180 10 10)"/></svg>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-sm">2</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Forward ke Foodstocks</p>
                    <p className="text-xs text-gray-500">Manual, API, atau via FS OrderAgent AI</p>
                  </div>
                </div>
                <div className="flex justify-center text-gray-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414 6.707 8.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3zm0 6a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 11.414 6.707 14.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 9z" transform="rotate(180 10 10)"/></svg>
                </div>
                <div className="bg-white rounded-xl border-2 border-brand-red p-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-brand-red">Kami kirim ke customer Anda</p>
                    <p className="text-xs text-gray-500">Dengan packaging branding Anda</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Benefit</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Kenapa dropship di Foodstocks.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p) => (
              <article key={p.title} className="bg-white border border-gray-100 rounded-3xl p-7">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: p.desc }} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="eyebrow">Integrasi marketplace</span>
            <h2 className="heading-brand mt-4 text-3xl md:text-4xl">Order masuk otomatis.</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Connect dengan toko online Anda — kami baca order otomatis dari marketplace,
              proses &amp; kirim tanpa copy-paste.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Tokopedia', 'Shopee', 'TikTok Shop', 'WhatsApp Business', 'Lazada', 'Bukalapak', 'Moka POS', 'Accurate'].map((brand) => (
              <span key={brand} className="px-5 py-2.5 bg-white border border-gray-100 rounded-full text-sm font-semibold">{brand}</span>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Butuh integrasi custom? <Link href="/technology/order-agent" className="text-brand-red underline">FS OrderAgent AI</Link> bisa parse order dari hampir semua source.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Jual online tanpa stok.</h2>
          <p className="mt-5 text-white/80 text-lg">Daftar gratis, siapkan branding, mulai dropship 923+ SKU.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Daftar Dropship →</Button>
            <Button href="/solutions/reseller" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Bandingkan 3 Model</Button>
          </div>
        </div>
      </section>
    </>
  );
}
