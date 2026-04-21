import { Link } from '@/i18n/navigation';
import { formatRupiah, type Product } from '@/lib/shop-data';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="card-hover bg-white rounded-3xl border border-gray-100 overflow-hidden block"
    >
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
        {product.ar && (
          <span className="absolute top-2 left-2 text-[10px] bg-white text-brand-red font-bold px-2 py-0.5 rounded-full">AR</span>
        )}
        {product.badge && (
          <span className="absolute top-2 right-2 text-[10px] bg-brand-red text-white font-bold px-2 py-0.5 rounded-full">{product.badge}</span>
        )}
        {product.new && !product.badge && (
          <span className="absolute top-2 right-2 text-[10px] bg-brand-red text-white font-bold px-2 py-0.5 rounded-full">NEW</span>
        )}
      </div>
      <div className="p-4">
        <p className="text-[10px] text-gray-500 uppercase tracking-wider">{product.brand} · {product.category}</p>
        <h3 className="font-[family-name:var(--font-display)] font-bold text-sm mt-1 truncate">{product.name}</h3>
        <p className="text-[10px] text-gray-500 mt-0.5">{product.unit}</p>
        <div className="mt-2 flex items-end gap-2">
          <p className="heading-brand text-lg text-brand-red">{formatRupiah(product.price)}</p>
          {product.priceBefore && (
            <p className="text-[10px] text-gray-400 line-through mb-0.5">{formatRupiah(product.priceBefore)}</p>
          )}
        </div>
        <div className="mt-2 text-[10px] text-gray-500 flex items-center gap-2">
          <span className="text-amber-500">★</span> {product.rating} · {product.sold >= 1000 ? `${(product.sold / 1000).toFixed(1)}K` : product.sold} sold
        </div>
      </div>
    </Link>
  );
}
