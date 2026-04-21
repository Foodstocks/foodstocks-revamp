'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export function TopBar() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('topBar');

  const toggleLocale = () => {
    const next = locale === 'id' ? 'en' : 'id';
    router.replace(pathname, { locale: next });
  };

  return (
    <div className="bg-brand-ink text-white text-xs">
      <div className="max-w-[88rem] mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4 text-white/80">
          <button
            onClick={toggleLocale}
            className={cn('font-semibold hover:text-brand-red-300 transition uppercase')}
          >
            {locale}
          </button>
          <span className="text-white/20">|</span>
          <a href={`tel:${t('phone').replace(/\s/g, '')}`} className="hidden sm:inline hover:text-brand-red-300">
            {t('phone')}
          </a>
          <span className="text-white/20 hidden sm:inline">•</span>
          <a href={`mailto:${t('email')}`} className="hidden md:inline hover:text-brand-red-300">
            {t('email')}
          </a>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" className="hover:text-brand-red-300">IG</a>
          <a href="#" className="hover:text-brand-red-300">TikTok</a>
          <a href="#" className="hover:text-brand-red-300">LinkedIn</a>
          <a href="#" className="hover:text-brand-red-300">YT</a>
        </div>
      </div>
    </div>
  );
}
