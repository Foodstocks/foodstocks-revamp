import { Button } from '@/components/ui/button';

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  mockupPath?: string;
};

/**
 * Placeholder untuk halaman-halaman yang akan di-port penuh di iterasi berikutnya.
 * Sementara, halaman ini menampilkan judul + link ke mockup HTML sebagai referensi.
 */
export function StubPage({ eyebrow, title, description, mockupPath }: Props) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="heading-brand mt-6 text-4xl md:text-6xl">{title}</h1>
        <p className="mt-6 text-lg text-gray-600">{description}</p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Button href="/">← Kembali ke Homepage</Button>
          {mockupPath && (
            <a
              href={mockupPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-sm font-semibold hover:border-brand-ink transition"
            >
              Lihat Mockup Reference →
            </a>
          )}
        </div>
        <p className="mt-12 text-xs text-gray-400 uppercase tracking-widest">
          Halaman ini akan di-port penuh dari mockup di iterasi Phase 2 berikutnya.
        </p>
      </div>
    </section>
  );
}
