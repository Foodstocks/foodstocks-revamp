'use client';

import { useState } from 'react';

const items = [
  {
    q: 'Apakah saya harus punya toko fisik untuk jadi reseller?',
    a: 'Tidak. Anda bisa jadi reseller online, dropshipper dari rumah, atau owner toko fisik — semua bisa daftar. Pilihan model (wholesale/consignment/dropship) kami sesuaikan dengan kebutuhan Anda.',
  },
  {
    q: 'Berapa minimum order untuk wholesale?',
    a: 'Mulai 1 karton per SKU untuk harga wholesale. Reward points bertambah seiring volume order.',
  },
  {
    q: 'Bagaimana cara kerja FS OrderAgent?',
    a: 'Customer Anda cukup kirim order via WhatsApp/email/voice note — AI kami baca isinya (text/gambar/suara), cocokkan dengan katalog, dan otomatis buat order di sistem. Anda cukup konfirmasi.',
  },
  {
    q: 'Produk saya butuh BPOM/Halal — bisa didistribusikan?',
    a: 'Bisa. Semua produk yang masuk ke platform kami harus ada sertifikasi BPOM dan Halal MUI. Tim kami bantu verifikasi saat onboarding.',
  },
  {
    q: 'Apa saja tools yang bisa diintegrasikan?',
    a: 'Accurate, Jurnal, Mekari Talenta, Moka POS, Tokopedia, Shopee, dan WhatsApp Business API. Integrasi baru ditambah berkala — request via form contact.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-brand mt-4 text-4xl md:text-5xl">
            Pertanyaan yang sering ditanyakan
          </h2>
        </div>

        <div className="mt-12 space-y-2.5" role="list">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                role="listitem"
                className={`bg-white rounded-2xl overflow-hidden border transition-colors duration-200 ${
                  isOpen ? 'border-brand-red-200 shadow-[0_4px_20px_-4px_rgba(227,6,19,0.10)]' : 'border-gray-100'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-brand-ink">{item.q}</span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-250 ${
                      isOpen
                        ? 'bg-brand-red text-white rotate-45'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                    aria-hidden
                  >
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" d="M6 2v8M2 6h8" />
                    </svg>
                  </span>
                </button>

                {/* Smooth height via CSS grid trick */}
                <div className={`faq-body ${isOpen ? 'is-open' : ''}`}>
                  <div>
                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Masih ada pertanyaan?{' '}
            <a href="#" className="text-brand-red font-semibold hover:underline">
              Hubungi tim kami →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
