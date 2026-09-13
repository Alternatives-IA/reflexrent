import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function FinalCtaSection() {
  const t = useTranslations('home.finalCta');

  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 opacity-60 blur-[120px] mix-blend-screen" />
      </div>

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <h2 className="text-balance text-[clamp(42px,6vw,84px)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
          {t('title')}
        </h2>
        <p className="mt-6 text-balance text-[clamp(16px,1.4vw,20px)] text-white/60">
          {t('subtitle')}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/#reservation"
            className="group flex h-14 items-center gap-2 rounded-full bg-blue-500 px-8 text-[15px] font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-[0_12px_40px_-8px_rgba(33,150,243,0.5)] hover:scale-105"
          >
            {t('button')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/33612292906"
            target="_blank"
            rel="noreferrer"
            className="flex h-14 items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-8 text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:ring-white/20"
          >
            <MessageCircle className="h-5 w-5 text-[#25d366]" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
