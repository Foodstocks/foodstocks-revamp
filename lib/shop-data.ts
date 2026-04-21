/**
 * Dummy data untuk shop portal preview.
 * Nanti diganti fetch dari backend Foodstocks (API) atau Sanity.
 */

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  unit: string;
  price: number;
  priceBefore?: number;
  rating: number;
  sold: number;
  ar?: boolean;
  new?: boolean;
  badge?: string;
};

export const products: Product[] = [
  { slug: 'chitato-keju-68g', name: 'Chitato Keju 68g', brand: 'Indofood', category: 'Keripik', unit: '1 karton · 24 pcs', price: 185000, priceBefore: 210000, rating: 4.9, sold: 342, ar: true, badge: '-12%' },
  { slug: 'indomie-goreng', name: 'Indomie Goreng', brand: 'Indofood', category: 'Mie Instant', unit: '1 dus · 40 pcs', price: 125000, rating: 5.0, sold: 1200 },
  { slug: 'roma-marie-susu', name: 'Roma Marie Susu', brand: 'Mayora', category: 'Biskuit', unit: '1 karton · 60 pcs', price: 210000, rating: 4.8, sold: 186, ar: true },
  { slug: 'taro-net-rumput-laut', name: 'Taro Net Rumput Laut', brand: 'Garuda Food', category: 'Keripik', unit: '1 karton · 30 pcs', price: 155000, rating: 4.7, sold: 94 },
  { slug: 'richeese-nabati-keju', name: 'Richeese Nabati Keju', brand: 'Nabati', category: 'Wafer', unit: '1 karton · 48 pcs', price: 168000, rating: 4.9, sold: 52, new: true },
  { slug: 'khong-guan-assorted', name: 'Khong Guan Assorted Tin', brand: 'Khong Guan', category: 'Biskuit', unit: '1 dus · 12 kaleng', price: 340000, rating: 4.8, sold: 68, new: true },
  { slug: 'siantar-french-fries', name: 'French Fries 2000', brand: 'Siantar Top', category: 'Keripik', unit: '1 karton · 36 pcs', price: 98000, rating: 4.6, sold: 124, new: true },
  { slug: 'monde-butter-cookies', name: 'Monde Butter Cookies', brand: 'Monde', category: 'Biskuit', unit: '1 dus · 10 kaleng', price: 285000, rating: 4.9, sold: 42, new: true },
  { slug: 'kobe-tepung-bumbu', name: 'Kobe Tepung Bumbu Serbaguna', brand: 'Kobe', category: 'Bumbu', unit: '1 dus · 72 pcs', price: 108000, rating: 4.7, sold: 203, new: true },
  { slug: 'tango-wafer-chocolate', name: 'Wafer Tango Chocolate', brand: 'Orang Tua', category: 'Wafer', unit: '1 karton · 48 pcs', price: 175000, rating: 4.8, sold: 156, new: true },
];

export const brands = [
  { name: 'Keripik Pedas Oom', skuCount: 24 },
  { name: 'Indofood', skuCount: 87 },
  { name: 'Mayora', skuCount: 64 },
  { name: 'Nabati', skuCount: 38 },
  { name: 'Garuda Food', skuCount: 52 },
  { name: 'Wings', skuCount: 43 },
];

export const categories = ['Semua', 'Keripik', 'Biskuit', 'Wafer & Cokelat', 'Mie Instant', 'Minuman', 'Snack Sehat', 'Bumbu & Masak', 'Snack Lokal'];

export type OrderStatus = 'Diproses' | 'Dikirim' | 'Selesai';
export type RecentOrder = { id: string; date: string; product: string; total: number; status: OrderStatus };

export const recentOrders: RecentOrder[] = [
  { id: 'FS-2842', date: '21 Mar · 09:42', product: 'Chitato Keju · 10 ktn', total: 1850000, status: 'Diproses' },
  { id: 'FS-2841', date: '21 Mar · 08:15', product: 'Indomie Goreng · 5 dus', total: 625000, status: 'Dikirim' },
  { id: 'FS-2834', date: '20 Mar', product: 'Mixed · 8 items', total: 2420000, status: 'Selesai' },
  { id: 'FS-2830', date: '19 Mar', product: 'Roma Marie · 3 ktn', total: 630000, status: 'Selesai' },
  { id: 'FS-2821', date: '17 Mar', product: 'Mixed · 12 items', total: 3120000, status: 'Selesai' },
];

export const orderAgentInbox = [
  { from: 'Warung Bu Dewi', time: '9:42 AM', message: 'Pak tolong kirim 10 karton Chitato...', orderId: '#2843' },
  { from: 'Minimarket Sinar', time: '8:15 AM', message: 'Indomie 5 dus sama Roma 3 ktn...', orderId: '#2842' },
];

export const recommendations = [
  { slug: 'richeese-nabati-keju', name: 'Richeese Nabati Keju', reason: 'Trend +220% di Surabaya', price: 168000 },
  { slug: 'khong-guan-assorted', name: 'Khong Guan Tin', reason: 'Demand tinggi Ramadan', price: 340000 },
  { slug: 'taro-net-rumput-laut', name: 'Taro Rumput Laut', reason: 'Pair dengan Chitato', price: 155000 },
];

export function formatRupiah(n: number): string {
  if (n >= 1_000_000) return `Rp ${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}jt`;
  if (n >= 1_000) return `Rp ${(n / 1_000).toFixed(0)}K`;
  return `Rp ${n.toLocaleString('id-ID')}`;
}

export function formatRupiahFull(n: number): string {
  return `Rp ${n.toLocaleString('id-ID')}`;
}
