import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/marketing/reveal';

export const metadata = {
  title: 'FS OrderAgent · AI Tangkap Order dari WhatsApp & Email',
  description:
    'AI yang baca orderan customer Anda dari WhatsApp, email, voice note, dan foto PO tulisan tangan — otomatis masuk ke sistem dalam hitungan detik.',
};

const inputs = [
  { title: 'WhatsApp', desc: 'Text biasa, bahasa campur, typo — AI tetap ngerti.', icon: 'M20.52 3.449C12.831-3.984.192 1.407.168 11.858c0 2.096.551 4.14 1.593 5.945L.068 24l6.355-1.645a11.882 11.882 0 0 0 5.676 1.446h.005c10.804 0 16.224-13.027 8.416-20.352z', filled: true },
  { title: 'Email', desc: 'Forward email order ke alamat khusus — auto-parsed.', icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' },
  { title: 'Voice Note', desc: 'Customer kirim VN di WA — kami transkrip & parse order.', icon: 'M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z' },
  { title: 'Foto PO', desc: 'Foto PO cetak atau tulisan tangan — OCR + AI extract.', icon: 'M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316zM16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z' },
  { title: 'SMS/Text', desc: 'SMS gateway atau platform chat lain — semua masuk.', icon: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' },
];

const howSteps = [
  {
    no: '01',
    label: 'Receive',
    title: 'Message masuk',
    desc: 'WhatsApp Business API, email webhook, atau upload manual. Semua channel terpusat di satu inbox.',
  },
  {
    no: '02',
    label: 'Parse',
    title: 'AI extract data',
    desc: 'Identifikasi produk (cocokkan dengan katalog), jumlah, alamat, payment method. Akurasi 98.4%.',
  },
  {
    no: '03',
    label: 'Confirm',
    title: 'Review & ship',
    desc: 'Anda review struktur order yang di-suggest, 1-click confirm. Order langsung masuk pipeline.',
  },
];

export default function OrderAgentPage() {
  return (
    <>
      {/* HERO: live demo */}
      <section className="relative bg-white">
        <div className="max-w-[88rem] mx-auto px-6 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Fitur Baru · AI-Powered</span>
            <h1 className="heading-brand mt-6 text-[clamp(2.5rem,5vw+1rem,5rem)]">
              AI yang <span className="text-brand-red">baca orderan</span> kamu.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              WhatsApp, email, voice note, foto PO tulisan tangan — FS OrderAgent baca semuanya
              dan otomatis buat order di sistem. Zero typo, zero copy-paste.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#" size="lg">Aktifkan OrderAgent →</Button>
              <Button href="#demo" size="lg" variant="secondary">Lihat demo live</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg border-t border-gray-100 pt-6">
              <div><p className="heading-brand text-2xl text-brand-red">0.8s</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Avg parse time</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">98.4%</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Akurasi</p></div>
              <div><p className="heading-brand text-2xl text-brand-red">3h</p><p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Hemat/hari</p></div>
            </div>
          </Reveal>

          {/* Live demo mockup */}
          <Reveal className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-3">
              {/* WhatsApp chat */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)] overflow-hidden">
                <div className="bg-emerald-600 text-white px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">Customer: Warung Bu Dewi</p>
                    <p className="text-[10px] text-white/80">online</p>
                  </div>
                </div>
                <div className="p-3 space-y-2 bg-[#E4DDD2] min-h-[280px]">
                  {[
                    'Pak, tolong kirim 10 karton Chitato Keju 68g ya',
                    'Sama 5 dus Indomie goreng',
                    'Kirim ke alamat biasa ya, bayar COD',
                  ].map((msg, i) => (
                    <div key={i} className="ml-auto max-w-[85%] bg-[#DCF8C6] rounded-xl rounded-tr-sm p-2.5">
                      <p className="text-[11px]">{msg}</p>
                      <p className="text-[9px] text-gray-500 text-right mt-1">09:42 ✓✓</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parsed order */}
              <div className="bg-white rounded-3xl border border-brand-red shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)] overflow-hidden">
                <div className="bg-brand-red text-white px-4 py-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-xs font-semibold">FS OrderAgent · Parsed</p>
                </div>
                <div className="p-4 space-y-3 min-h-[280px]">
                  <div className="text-[10px] flex items-center gap-1 text-green-600 font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Parsed in 0.8s
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-wider">Customer</p>
                    <p className="text-xs font-semibold mt-0.5">Warung Bu Dewi</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-wider">Items</p>
                    <div className="mt-1 space-y-1.5">
                      <div className="flex justify-between text-[11px] bg-gray-50 rounded-lg p-2">
                        <span className="font-medium">Chitato Keju 68g</span>
                        <span className="font-bold text-brand-red">10 ktn</span>
                      </div>
                      <div className="flex justify-between text-[11px] bg-gray-50 rounded-lg p-2">
                        <span className="font-medium">Indomie Goreng</span>
                        <span className="font-bold text-brand-red">5 dus</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-wider">Payment</p>
                    <p className="text-xs font-semibold mt-0.5">COD · alamat default</p>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <button className="w-full bg-brand-red text-white rounded-lg py-2 text-[11px] font-semibold">
                      Konfirmasi Order #2843
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 border border-gray-100 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)]">
              <svg className="w-5 h-5 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INPUT SOURCES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Input sources</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">5 jenis order, 1 AI.</h2>
            <p className="mt-4 text-gray-600">
              Kami parse apapun format order customer Anda — tidak perlu mereka ubah cara pesan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {inputs.map((item) => (
              <article key={item.title} className="bg-white border border-gray-100 rounded-3xl p-6">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-5">
                  {item.filled ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={item.icon} /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-xs text-gray-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="demo" className="py-24">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Cara kerja</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Dari pesan ke order dalam 3 langkah.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {howSteps.map((s) => (
              <article key={s.no} className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">{s.no} · {s.label}</p>
                <h3 className="heading-brand text-2xl mt-3">{s.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIME SAVED COMPARISON */}
      <section className="py-24 bg-brand-ink text-white">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow" style={{ background: 'rgba(227,6,19,0.15)', color: '#FCA5A5' }}>Impact</span>
            <h2 className="heading-brand mt-4 text-4xl md:text-5xl">Hemat jam kerja, kurangi typo.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Manual (sebelum)</p>
              <p className="heading-brand text-5xl text-white/60">5-8 menit</p>
              <p className="text-sm text-white/70 mt-3">
                Per order: baca WA → buka sistem → cari produk → input qty → verify → save.
                Rentan typo &amp; miss info.
              </p>
            </div>
            <div className="bg-brand-red/20 border border-brand-red rounded-3xl p-8">
              <p className="text-xs uppercase tracking-widest text-brand-red mb-2">Dengan OrderAgent</p>
              <p className="heading-brand text-5xl">0.8 detik</p>
              <p className="text-sm text-white/80 mt-3">
                AI parse otomatis, tinggal review &amp; 1-click confirm. Hemat 3 jam per hari untuk
                tim yang handle 40+ order/hari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-brand text-4xl md:text-6xl">Stop input order manual.</h2>
          <p className="mt-5 text-white/80 text-lg">Aktifkan FS OrderAgent, auto-parse order dari semua channel.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="#" size="lg" variant="inverted">Aktifkan Sekarang →</Button>
            <Button href="#" size="lg" className="bg-transparent text-white border border-white/30 hover:bg-white/10">Request Live Demo</Button>
          </div>
        </div>
      </section>
    </>
  );
}
