import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';

export const metadata = {
  title: 'Kontak · Foodstocks',
  description: 'Hubungi tim Foodstocks untuk kemitraan supplier, reseller, atau pertanyaan teknologi platform B2B distribusi snack Indonesia.',
};

const channels = [
  {
    icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
    label: 'Telepon',
    value: '+62 21 1234 5678',
    href: 'tel:+622112345678',
    sub: 'Senin–Jumat, 09.00–17.00 WIB',
  },
  {
    icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
    label: 'Email',
    value: 'hello@foodstocks.id',
    href: 'mailto:hello@foodstocks.id',
    sub: 'Balasan dalam 1×24 jam',
  },
  {
    icon: 'M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z',
    label: 'WhatsApp Business',
    value: '+62 812-3456-7890',
    href: 'https://wa.me/6281234567890',
    sub: 'Response time < 1 jam (jam kerja)',
  },
];

const offices = [
  {
    city: 'Jakarta (HQ)',
    address: 'Jl. Sudirman Kav. 21, Setiabudi, Jakarta Selatan 12930',
    flag: '🇮🇩',
  },
  {
    city: 'Surabaya',
    address: 'Jl. Basuki Rahmat No. 45, Genteng, Surabaya 60271',
    flag: '🇮🇩',
  },
  {
    city: 'Bandung',
    address: 'Jl. Ir. H. Djuanda No. 99, Coblong, Bandung 40135',
    flag: '🇮🇩',
  },
];

const topics = [
  'Ingin menjadi Supplier',
  'Ingin menjadi Reseller',
  'Partnership / KOL',
  'Demo Supplier Portal',
  'Demo AR Product',
  'Pertanyaan teknis',
  'Lainnya',
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white bg-dot-grid overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-brand-red-50/60 to-transparent" />
        </div>
        <div className="relative max-w-[82rem] mx-auto px-6 pt-20 pb-24 text-center">
          <Reveal>
            <span className="eyebrow">Hubungi Kami</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.75rem,5vw+1rem,5rem)]">
              Siap membantu bisnis Anda
              <span className="text-gradient-red"> tumbuh bersama.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Tim kami siap mendiskusikan kebutuhan distribusi, kemitraan, atau demo platform.
              Hubungi kami melalui saluran yang paling nyaman untuk Anda.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CHANNELS + FORM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[82rem] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left: channels + offices */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="heading-brand text-2xl">Saluran Kontak</h2>
                <div className="mt-6 space-y-4">
                  {channels.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 p-5 hover:border-brand-red-200 hover:shadow-[0_4px_20px_-4px_rgba(227,6,19,0.08)] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red-100 transition-colors">
                        <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">{c.label}</p>
                        <p className="font-[family-name:var(--font-display)] font-bold text-brand-ink mt-0.5">{c.value}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{c.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="heading-brand text-2xl">Lokasi Kantor</h2>
                <div className="mt-6 space-y-3">
                  {offices.map((o) => (
                    <div key={o.city} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0" aria-hidden="true">{o.flag}</span>
                      <div>
                        <p className="font-[family-name:var(--font-display)] font-bold text-sm">{o.city}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{o.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <Reveal className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)] p-8 md:p-10">
                <h2 className="heading-brand text-2xl">Kirim Pesan</h2>
                <p className="mt-2 text-sm text-gray-500">Isi form di bawah dan tim kami akan menghubungi Anda dalam 1×24 jam.</p>

                <form className="mt-8 space-y-5" action="#" method="POST">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nama Lengkap <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Budi Santoso"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nama Perusahaan / Brand
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        autoComplete="organization"
                        placeholder="PT Snack Nusantara"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="budi@perusahaan.com"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        placeholder="+62 812 3456 7890"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Topik <span className="text-brand-red">*</span>
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors bg-white appearance-none"
                    >
                      <option value="" disabled>Pilih topik...</option>
                      {topics.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Pesan <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full justify-center" size="lg">
                    Kirim Pesan →
                  </Button>

                  <p className="text-center text-xs text-gray-400">
                    Dengan mengirim form ini, Anda menyetujui{' '}
                    <a href="/privacy" className="underline hover:text-brand-red">Kebijakan Privasi</a> kami.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[82rem] mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Ikuti kami di media sosial</p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            {[
              { label: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              { label: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { label: 'TikTok', href: '#', icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 text-sm font-medium text-gray-700 hover:border-brand-red-200 hover:text-brand-red hover:bg-brand-red-50 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.icon} />
                </svg>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
