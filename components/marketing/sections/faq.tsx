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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Pertanyaan yang sering ditanyakan</h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold">{item.q}</span>
                  <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
