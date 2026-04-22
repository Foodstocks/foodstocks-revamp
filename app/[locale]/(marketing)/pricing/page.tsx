import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Pricing · Foodstocks',
  description: 'Informasi paket dan harga Foodstocks segera hadir.',
};

export default function PricingPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-lg mx-auto px-6 py-24">
        <div className="w-16 h-16 rounded-2xl bg-brand-red-50 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
        <h1 className="heading-brand text-4xl">Segera Hadir</h1>
        <p className="mt-4 text-gray-500 leading-relaxed">
          Halaman pricing sedang dalam penyesuaian. Untuk informasi paket dan harga,
          silakan hubungi tim kami langsung.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button href="/contact">Hubungi Kami →</Button>
          <Button href="/" variant="secondary">Kembali ke Beranda</Button>
        </div>
      </div>
    </section>
  );
}
