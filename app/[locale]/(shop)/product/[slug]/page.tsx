import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { ProductCard } from '@/components/shop/product-card';
import { products, formatRupiahFull } from '@/lib/shop-data';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string; locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} · ${product.unit}`,
    description: `${product.name} wholesale. BPOM, Halal MUI. ${product.ar ? 'Preview AR 3D tersedia.' : ''}`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug && p.category === product.category).slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[82rem] mx-auto px-6 pt-6 text-xs text-gray-500">
        <Link href="/shop" className="hover:text-brand-red">Shop</Link>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-brand-red">{product.category}</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-brand-red">{product.brand}</a>
        <span className="mx-2">/</span>
        <span className="text-brand-ink">{product.name}</span>
      </div>

      {/* DETAIL */}
      <section className="max-w-[82rem] mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-1 space-y-2">
              <button className="aspect-square w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-brand-red" />
              <button className="aspect-square w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-100" />
              <button className="aspect-square w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-100" />
              <button className="aspect-square w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-100 relative">
                <svg className="w-4 h-4 absolute top-1 right-1 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                <span className="absolute bottom-1 right-1 text-[9px] bg-white px-1 rounded">0:24</span>
              </button>
            </div>
            <div className="col-span-5 relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
              {product.ar && (
                <span className="absolute top-4 left-4 text-xs bg-white text-brand-red font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                  Preview AR
                </span>
              )}
              {product.badge && (
                <span className="absolute top-4 right-4 text-[11px] bg-brand-red text-white font-bold px-3 py-1 rounded-full">{product.badge}</span>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-56 bg-gradient-to-b from-red-500 to-red-700 rounded-xl shadow-2xl transform rotate-6">
                  <div className="p-5 text-white text-center">
                    <p className="text-[10px] uppercase tracking-wider">{product.category}</p>
                    <p className="heading-brand text-xl mt-1">{product.name.split(' ')[0]}</p>
                    <p className="text-xs">{product.name.split(' ').slice(1, 3).join(' ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="lg:col-span-5">
          <p className="text-xs text-gray-500 uppercase tracking-wider">{product.brand} · {product.category}</p>
          <h1 className="heading-brand text-3xl md:text-4xl mt-2">{product.name}</h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span className="text-amber-500">★★★★★</span>
              <span className="font-semibold text-gray-700">{product.rating}</span>
            </div>
            <span>•</span>
            <span>{product.sold} terjual</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">✓ BPOM</span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">✓ Halal MUI</span>
            {product.ar && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">AR Ready</span>
            )}
          </div>

          <div className="mt-6 p-5 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-end gap-3">
              <p className="heading-brand text-4xl text-brand-red">{formatRupiahFull(product.price)}</p>
              {product.priceBefore && (
                <p className="text-lg text-gray-400 line-through mb-1">{formatRupiahFull(product.priceBefore)}</p>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">per {product.unit.split('·')[0].trim()}</p>
            <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-green-700"><span>✓</span> Stok: 1.240 karton</div>
              <div className="flex items-center gap-2 text-gray-600"><span>🚚</span> Jabodetabek 24 jam</div>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Model pembelian</p>
            <div className="grid grid-cols-3 gap-2">
              <button className="p-3 rounded-xl border-2 border-brand-red bg-brand-red/5 text-left">
                <p className="font-semibold text-sm">Wholesale</p>
                <p className="text-xs text-gray-500">Beli putus</p>
              </button>
              <button className="p-3 rounded-xl border border-gray-200 text-left hover:border-brand-red transition">
                <p className="font-semibold text-sm">Consignment</p>
                <p className="text-xs text-gray-500">Bayar saat laku</p>
              </button>
              <button className="p-3 rounded-xl border border-gray-200 text-left hover:border-brand-red transition">
                <p className="font-semibold text-sm">Dropship</p>
                <p className="text-xs text-gray-500">Per pcs</p>
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-2">
              <button className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-semibold">−</button>
              <span className="w-12 text-center font-semibold">1</span>
              <button className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-semibold">+</button>
            </div>
            <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-red text-white font-semibold hover:bg-brand-red-700 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272" />
              </svg>
              Tambah ke Keranjang
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-500 flex items-center gap-1.5">
            <svg className="w-3 h-3 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Dapatkan <b className="text-brand-red ml-1">{Math.round(product.price / 100)} reward points</b> dari pembelian ini
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="max-w-[82rem] mx-auto px-6 pb-12">
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-100 flex gap-6 px-6 overflow-x-auto">
            <button className="py-4 text-sm font-semibold border-b-2 border-brand-red text-brand-red whitespace-nowrap">Deskripsi</button>
            <button className="py-4 text-sm font-semibold text-gray-500 hover:text-brand-red whitespace-nowrap">Info Nutrisi</button>
            <button className="py-4 text-sm font-semibold text-gray-500 hover:text-brand-red whitespace-nowrap">Pengiriman</button>
            <button className="py-4 text-sm font-semibold text-gray-500 hover:text-brand-red whitespace-nowrap">Ulasan ({product.sold})</button>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                {product.name} dari {product.brand}, kualitas terjamin dengan sertifikasi BPOM dan Halal MUI.
                Cocok untuk snack bar, kantin, reseller online, dan toko retail.
              </p>
              <h4 className="heading-brand text-xl mt-6">Detail</h4>
              <ul className="space-y-1.5">
                <li>• Brand: {product.brand}</li>
                <li>• Kategori: {product.category}</li>
                <li>• Kemasan: {product.unit}</li>
                <li>• Shelf life: 12 bulan</li>
                <li>• Penyimpanan: tempat sejuk, kering, jauhi sinar matahari</li>
              </ul>
            </div>
            <aside className="bg-gray-50 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Tentang Supplier</p>
              <p className="font-[family-name:var(--font-display)] font-bold mt-2">{product.brand}</p>
              <p className="text-xs text-gray-500 mt-1">Supplier resmi sejak 2018</p>
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-gray-500">Respon rata-rata</span><span className="font-semibold">2 jam</span></div>
                <div className="flex justify-between"><span className="text-gray-500">On-time delivery</span><span className="font-semibold text-green-600">99.2%</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Rating supplier</span><span className="font-semibold">4.9 / 5</span></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="max-w-[82rem] mx-auto px-6 pb-16">
          <h2 className="heading-brand text-2xl md:text-3xl mb-6">Produk terkait</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
