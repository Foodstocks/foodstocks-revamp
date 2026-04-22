import { Link } from '@/i18n/navigation';
import { ProductCard } from '@/components/shop/product-card';
import { products, brands } from '@/lib/shop-data';

export const metadata = {
  title: 'Shop · Katalog 923+ Camilan Wholesale',
  description: 'Belanja camilan dengan harga wholesale. 923+ SKU dari brand terpercaya.',
};

export default function ShopHomePage() {
  const bestsellers = products.filter((p) => !p.new).slice(0, 5);
  const newArrivals = products.filter((p) => p.new).slice(0, 5);

  return (
    <>
      {/* PROMO BANNER */}
      <section className="max-w-[82rem] mx-auto px-6 pt-6">
        <div className="rounded-3xl bg-brand-red text-white p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex-1">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/15 px-2 py-1 rounded-full">
              Promo Ramadan
            </span>
            <h1 className="heading-brand text-3xl md:text-5xl mt-4">
              Paket Hampers Camilan
              <br />diskon 25%.
            </h1>
            <p className="mt-3 text-white/80">Plus gratis ongkir untuk order di atas Rp 500.000.</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-brand-red font-semibold text-sm hover:bg-gray-100">
              Belanja Sekarang →
            </a>
          </div>
          <div className="relative w-full md:w-80 aspect-square bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center">
            <span className="heading-brand text-6xl opacity-80">25%</span>
            <span className="absolute top-5 right-5 text-xs font-bold uppercase tracking-wider bg-white text-brand-red px-2 py-1 rounded-full">
              OFF
            </span>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="max-w-[82rem] mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="eyebrow">Best Sellers</span>
            <h2 className="heading-brand text-3xl md:text-4xl mt-3">Paling laku minggu ini</h2>
          </div>
          <a href="#" className="text-sm text-brand-red font-semibold">Lihat semua →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* BRAND SPOTLIGHT */}
      <section className="max-w-[82rem] mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="eyebrow">Brand Spotlight</span>
            <h2 className="heading-brand text-3xl md:text-4xl mt-3">Brand lokal unggulan</h2>
          </div>
          <a href="#" className="text-sm text-brand-red font-semibold">Lihat semua →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {brands.map((b) => (
            <a key={b.name} href="#" className="card-hover bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <div className="w-12 h-12 rounded-xl bg-gray-100 mx-auto" />
              <p className="text-xs font-semibold mt-3">{b.name}</p>
              <p className="text-[10px] text-gray-500">{b.skuCount} SKU</p>
            </a>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="max-w-[82rem] mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="eyebrow">New Arrivals</span>
            <h2 className="heading-brand text-3xl md:text-4xl mt-3">Produk baru di katalog</h2>
          </div>
          <a href="#" className="text-sm text-brand-red font-semibold">Lihat semua →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {newArrivals.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
