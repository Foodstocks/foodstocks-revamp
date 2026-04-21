import { PricingTabs } from '@/components/marketing/sections/pricing-tabs';
import { FAQ } from '@/components/marketing/sections/faq';

export const metadata = {
  title: 'Pricing · Paket Fleksibel untuk Supplier & Reseller',
  description: 'Harga transparan. Starter gratis selamanya. Growth & Enterprise untuk skala yang lebih besar.',
};

const compareFeatures: [string, string, string, string][] = [
  ['Katalog SKU', '923+', '923+', '923+'],
  ['Wholesale & Consignment', '✓', '✓', '✓'],
  ['Dropship module', '—', '✓', '✓'],
  ['FS OrderAgent AI', '—', '500/bln', 'Unlimited'],
  ['Reward multiplier', '1×', '2×', '3×'],
  ['Multi-branch', '—', '—', '✓'],
  ['ERP/POS integration', '—', '—', '✓'],
  ['Support', 'Email', 'WhatsApp', 'Dedicated AM'],
];

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="eyebrow">Pricing</span>
          <h1 className="heading-brand mt-6 text-[clamp(2.5rem,5vw+1rem,4.75rem)]">
            Harga transparan,
            <br />
            tumbuh <span className="text-brand-red">sesuai kebutuhan</span>.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Gratis untuk mulai. Upgrade kapan saja. Tanpa kontrak jangka panjang.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="pb-24">
        <div className="max-w-[88rem] mx-auto px-6 flex flex-col items-center">
          <PricingTabs />
        </div>
      </section>

      {/* COMPARISON TABLE (reseller only as example) */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="eyebrow">Bandingkan</span>
            <h2 className="heading-brand mt-4 text-3xl md:text-4xl">Feature breakdown (Reseller)</h2>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold text-center">Starter</th>
                  <th className="p-4 font-semibold text-center text-brand-red">Growth</th>
                  <th className="p-4 font-semibold text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {compareFeatures.map((row) => (
                  <tr key={row[0]}>
                    <td className="p-4">{row[0]}</td>
                    {row.slice(1).map((cell, i) => (
                      <td key={i} className={`p-4 text-center ${cell === '—' ? 'text-gray-300' : cell === '✓' ? 'text-brand-red' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
