import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function Footer() {
  const t = useTranslations('footer');
  const m = useTranslations('megaMenu');

  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 pb-10">
      <div className="max-w-[88rem] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-gray-800">
          <div className="lg:col-span-2">
            <Image src="/logo.png" alt="Foodstocks" width={120} height={40} className="h-10 w-auto bg-white rounded-xl p-2" />
            <p className="mt-5 text-sm max-w-sm">{t('tagline')}</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-red flex items-center justify-center text-xs font-semibold">IG</a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-red flex items-center justify-center text-xs font-semibold">TT</a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-red flex items-center justify-center text-xs font-semibold">LI</a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-red flex items-center justify-center text-xs font-semibold">YT</a>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 text-sm">{t('solutions')}</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions/supplier" className="hover:text-white">{m('forSuppliers')}</Link></li>
              <li><Link href="/solutions/reseller" className="hover:text-white">{m('forResellers')}</Link></li>
              <li><Link href="/solutions/wholesale" className="hover:text-white">{m('wholesale')}</Link></li>
              <li><Link href="/solutions/consignment" className="hover:text-white">{m('consignment')}</Link></li>
              <li><Link href="/solutions/dropship" className="hover:text-white">{m('dropship')}</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 text-sm">{t('technology')}</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/technology/order-agent" className="hover:text-white">{m('orderAgentTitle')}</Link></li>
              <li><Link href="/technology/ar" className="hover:text-white">AR Product Viz</Link></li>
              <li><a href="#" className="hover:text-white">{t('smartWms')}</a></li>
              <li><a href="#" className="hover:text-white">{t('analytics')}</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 text-sm">{t('company')}</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">{t('about')}</a></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-white">{t('blog')}</Link></li>
              <li><a href="#" className="hover:text-white">{t('careers')}</a></li>
              <li><a href="#" className="hover:text-white">{t('press')}</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 text-sm">{t('newsletter')}</p>
            <p className="text-sm mb-4">{t('newsletterDesc')}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t('newsletterPlaceholder')}
                className="flex-1 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-sm focus:border-brand-red outline-none"
              />
              <button className="bg-brand-red text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-brand-red-700">→</button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap justify-between items-center gap-4 text-xs">
          <p>{t('copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">{t('privacy')}</a>
            <a href="#" className="hover:text-white">{t('terms')}</a>
            <a href="#" className="hover:text-white">{t('security')}</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] px-2 py-1 bg-gray-900 rounded">BPOM</span>
            <span className="text-[10px] px-2 py-1 bg-gray-900 rounded">Halal MUI</span>
            <span className="text-[10px] px-2 py-1 bg-gray-900 rounded">BBI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
