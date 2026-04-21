import { ShopHeader } from '@/components/shop/shop-header';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ShopHeader />
      <main>{children}</main>
      <footer className="bg-gray-950 text-gray-400 py-8 mt-12 text-center text-xs">
        © 2026 PT Foodstocks Indonesia ·{' '}
        <a href="/" className="hover:text-white">Back to marketing site</a>
      </footer>
    </div>
  );
}
