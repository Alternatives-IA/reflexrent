import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer id="contact" className="relative border-t border-white/[0.06] bg-[#06080d]/80 backdrop-blur-sm">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          
          <div className="md:col-span-5">
            <Image
              src="/branding/logo-480.png"
              alt="ReflexRent"
              width={240}
              height={128}
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm text-white/55">{t('tagline')}</p>
            <p className="mt-3 text-xs text-white/40">L'art de rouler autrement.</p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400">
              {t('nav')}
            </div>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li><Link className="transition-colors hover:text-white" href="/#vehicles">Nos véhicules</Link></li>
              <li><Link className="transition-colors hover:text-white" href="/#services">Services</Link></li>
              <li><Link className="transition-colors hover:text-white" href="/#histoire">Notre histoire</Link></li>
              <li><Link className="transition-colors hover:text-white" href="/mentions-legales">{t('legal')}</Link></li>
              <li><Link className="transition-colors hover:text-white" href="/cgv">{t('cgv')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400">
              {t('contact')}
            </div>
            <div className="mt-5 space-y-4 text-sm text-white/65">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">{t('address')}</div>
                <address className="mt-1 not-italic">
                  2 Avenue de la Porte de Saint-Cloud<br />
                  75016 Paris<br />
                  France
                </address>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">{t('hours')}</div>
                <div className="mt-1">
                  Lundi – Dimanche<br />
                  9h – 20h
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">WhatsApp</div>
                <a href="https://wa.me/33612292906" target="_blank" rel="noreferrer" className="mt-1 inline-block text-white/85 transition-colors hover:text-white">
                  +33 6 12 29 29 06
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-[11px] text-white/40">
          <div>{t('credits', { year: new Date().getFullYear() })}</div>
          <div className="font-mono">
            Reflex Rent Boulogne · SARL au capital de 100 000 € · RCS Paris 788 498 350 · SIRET 788 498 350 00024
          </div>
        </div>
      </div>
    </footer>
  );
}
