import { Link } from '@/i18n/navigation';
import { recentOrders, orderAgentInbox, recommendations, formatRupiahFull } from '@/lib/shop-data';

export const metadata = { title: 'Dashboard Reseller' };

const statusStyles: Record<string, string> = {
  Diproses: 'bg-amber-50 text-amber-700',
  Dikirim: 'bg-blue-50 text-blue-700',
  Selesai: 'bg-green-50 text-green-700',
};

export default function DashboardPage() {
  return (
    <>
      {/* Top bar */}
      <header className="bg-white border-b border-gray-100 px-6 lg:px-10 py-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-gray-500">Jumat, 21 Maret 2026</p>
          <h1 className="heading-brand text-2xl">Halo, Ibu Sari 👋</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" placeholder="Cari..." className="pl-9 pr-4 py-2 rounded-full border border-gray-200 focus:border-brand-red focus:outline-none text-sm w-64" />
          </div>
          <button className="p-2 hover:bg-gray-50 rounded-full relative" aria-label="Notification">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-red rounded-full" />
          </button>
          <div className="flex items-center gap-2 pl-2 pr-3 py-1.5 bg-gray-50 rounded-full">
            <div className="w-7 h-7 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center font-semibold text-xs">IS</div>
            <span className="text-sm font-semibold hidden sm:inline">Ibu Sari</span>
          </div>
        </div>
      </header>

      <div className="p-6 lg:p-10 space-y-6">
        {/* Stats */}
        <section className="grid md:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl border border-gray-100 p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Orders bulan ini</p>
              <span className="text-xs text-green-600 font-semibold">+18%</span>
            </div>
            <p className="heading-brand text-3xl mt-2">42</p>
            <p className="text-xs text-gray-500 mt-1">vs Feb: 36</p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Revenue</p>
              <span className="text-xs text-green-600 font-semibold">+24%</span>
            </div>
            <p className="heading-brand text-3xl mt-2 text-brand-red">Rp 12,4jt</p>
            <p className="text-xs text-gray-500 mt-1">Rata-rata Rp 295K/order</p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Reward Points</p>
              <span className="text-xs bg-brand-red/10 text-brand-red font-semibold px-2 py-0.5 rounded-full">Gold</span>
            </div>
            <p className="heading-brand text-3xl mt-2">12,450 <span className="text-base text-gray-500">pts</span></p>
            <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand-red" style={{ width: '70%' }} />
            </div>
            <p className="text-[10px] text-gray-500 mt-1">70% ke Platinum</p>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wider">SKU dibeli</p>
            <p className="heading-brand text-3xl mt-2">87</p>
            <p className="text-xs text-gray-500 mt-1">dari 923+ tersedia</p>
          </div>
        </section>

        {/* Chart + OrderAgent */}
        <section className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="heading-brand text-xl">Penjualan 7 hari terakhir</h2>
                <p className="text-xs text-gray-500 mt-1">Rata-rata 6 order/hari</p>
              </div>
              <div className="flex gap-1 text-xs">
                <button className="px-3 py-1.5 rounded-full bg-brand-red text-white font-semibold">7D</button>
                <button className="px-3 py-1.5 rounded-full hover:bg-gray-50 font-semibold text-gray-500">30D</button>
                <button className="px-3 py-1.5 rounded-full hover:bg-gray-50 font-semibold text-gray-500">90D</button>
              </div>
            </div>
            <div className="h-48 relative">
              <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartfill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E30613" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0 120 L 60 100 L 120 110 L 180 80 L 240 90 L 300 50 L 360 60 L 400 40 L 400 160 L 0 160 Z" fill="url(#chartfill)" />
                <path d="M 0 120 L 60 100 L 120 110 L 180 80 L 240 90 L 300 50 L 360 60 L 400 40" fill="none" stroke="#E30613" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-gray-400">
                <span>Sab</span><span>Min</span><span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span>
              </div>
            </div>
          </div>

          {/* OrderAgent inbox */}
          <div className="bg-white rounded-3xl border-2 border-brand-red p-6 relative">
            <span className="absolute -top-3 left-6 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              OrderAgent · 2 baru
            </span>
            <div className="flex items-center gap-2 mb-5">
              <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h2 className="heading-brand text-xl">Inbox AI</h2>
            </div>
            <div className="space-y-3">
              {orderAgentInbox.map((item) => (
                <div key={item.orderId} className="p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-xs font-semibold">{item.from}</p>
                    <span className="text-[10px] text-gray-400 whitespace-nowrap">{item.time}</span>
                  </div>
                  <p className="text-[11px] text-gray-600 italic">&quot;{item.message}&quot;</p>
                  <div className="mt-2 flex items-center justify-between text-[10px]">
                    <span className="text-brand-red font-semibold">✓ Parsed · Order {item.orderId}</span>
                    <button className="font-semibold text-brand-red hover:underline">Review →</button>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="mt-4 block text-center text-xs text-brand-red font-semibold">Buka inbox lengkap →</a>
          </div>
        </section>

        {/* Orders table + Recommendations */}
        <section className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="heading-brand text-xl">Pesanan terbaru</h2>
              <a href="#" className="text-xs text-brand-red font-semibold">Lihat semua →</a>
            </div>
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-sm">
                <thead className="text-xs text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <tr>
                    <th className="text-left pb-3 font-semibold">Order</th>
                    <th className="text-left pb-3 font-semibold">Produk</th>
                    <th className="text-left pb-3 font-semibold">Total</th>
                    <th className="text-left pb-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentOrders.map((o) => (
                    <tr key={o.id}>
                      <td className="py-3">
                        <p className="font-semibold">#{o.id}</p>
                        <p className="text-xs text-gray-500">{o.date}</p>
                      </td>
                      <td className="py-3">{o.product}</td>
                      <td className="py-3 font-semibold">{formatRupiahFull(o.total)}</td>
                      <td className="py-3">
                        <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${statusStyles[o.status]}`}>
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 p-6">
            <h2 className="heading-brand text-xl">Rekomendasi AI</h2>
            <p className="text-xs text-gray-500 mt-1">Produk laku di Surabaya, cocok untuk toko Anda.</p>
            <div className="mt-5 space-y-3">
              {recommendations.map((r) => (
                <Link
                  key={r.slug}
                  href={`/product/${r.slug}`}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:border-brand-red border border-transparent transition"
                >
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">{r.name}</p>
                    <p className="text-[10px] text-gray-500">{r.reason}</p>
                  </div>
                  <p className="text-xs font-bold text-brand-red whitespace-nowrap">{formatRupiahFull(r.price).replace('Rp ', 'Rp')}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
