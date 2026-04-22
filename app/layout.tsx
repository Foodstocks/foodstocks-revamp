import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://foodstocks.id'),
  title: 'Foodstocks',
  description: 'B2B snack distribution platform',
};

/**
 * Root layout — hanya html/body shell. Metadata + NextIntlClientProvider
 * ada di app/[locale]/layout.tsx untuk marketing routes. Studio routes
 * (/studio) inherit dari sini saja.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="bg-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-brand-ink overflow-x-hidden">{children}</body>
    </html>
  );
}
