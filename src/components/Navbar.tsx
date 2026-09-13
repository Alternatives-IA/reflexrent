'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import Image from 'next/image';

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 border-b ${
          scrolled
            ? 'bg-[#0a0c10]/80 backdrop-blur-xl border-white/[0.06]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-3 md:h-20 md:gap-6">
          <Link href="/" className="relative inline-flex shrink-0 items-center">
            <Image
              src="/branding/logo-240.png"
              alt="ReflexRent"
              width={120}
              height={64}
              className="h-9 w-auto md:h-11"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-white/70">
            <li><Link className="transition-colors hover:text-white" href="/#vehicles">{t('catalog')}</Link></li>
            <li><Link className="transition-colors hover:text-white" href="/#categories">{t('categories')}</Link></li>
            <li><Link className="transition-colors hover:text-white" href="/#services">{t('services')}</Link></li>
            <li><Link className="transition-colors hover:text-white" href="/#histoire">{t('history')}</Link></li>
            <li><Link className="transition-colors hover:text-white" href="/#contact">{t('contact')}</Link></li>
          </ul>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 text-[11px] font-semibold tracking-widest backdrop-blur-md p-0.5">
              <button
                onClick={() => switchLocale('fr')}
                className={`rounded-full px-3 py-1.5 transition-colors ${locale === 'fr' ? 'bg-blue-500 text-white' : 'text-white/55 hover:text-white'}`}
              >
                FR
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`rounded-full px-3 py-1.5 transition-colors ${locale === 'en' ? 'bg-blue-500 text-white' : 'text-white/55 hover:text-white'}`}
              >
                EN
              </button>
            </div>
            
            <Link
              href="/#reservation"
              className="hidden sm:inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-[0_8px_28px_-4px_rgba(33,150,243,0.6)]"
            >
              {t('reserve')}
            </Link>

            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm border-l border-white/10 bg-[#0a0c10] p-8 transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          
          <div className="mt-16 flex flex-col gap-1" onClick={() => setMobileMenuOpen(false)}>
            <Link className="flex h-12 items-center text-lg font-medium tracking-tight text-white/80 hover:text-white" href="/#vehicles">{t('catalog')}</Link>
            <Link className="flex h-12 items-center text-lg font-medium tracking-tight text-white/80 hover:text-white" href="/#categories">{t('categories')}</Link>
            <Link className="flex h-12 items-center text-lg font-medium tracking-tight text-white/80 hover:text-white" href="/#services">{t('services')}</Link>
            <Link className="flex h-12 items-center text-lg font-medium tracking-tight text-white/80 hover:text-white" href="/#histoire">{t('history')}</Link>
            <Link className="flex h-12 items-center text-lg font-medium tracking-tight text-white/80 hover:text-white" href="/#contact">{t('contact')}</Link>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <div className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 text-[11px] font-semibold tracking-widest backdrop-blur-md p-0.5">
              <button
                onClick={() => switchLocale('fr')}
                className={`rounded-full px-3 py-1.5 transition-colors ${locale === 'fr' ? 'bg-blue-500 text-white' : 'text-white/55 hover:text-white'}`}
              >
                FR
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`rounded-full px-3 py-1.5 transition-colors ${locale === 'en' ? 'bg-blue-500 text-white' : 'text-white/55 hover:text-white'}`}
              >
                EN
              </button>
            </div>
            
            <Link
              href="/#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t('reserve')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
