import { Header } from '@/components/marketing/header';
import { Footer } from '@/components/marketing/footer';
import { TopBar } from '@/components/marketing/top-bar';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
