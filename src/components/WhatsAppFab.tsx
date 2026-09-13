'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function WhatsAppFab() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('whatsapp');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/33612292906"
      target="_blank"
      rel="noreferrer"
      aria-label={t('ariaLabel')}
      className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_36px_-6px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5b] ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366]/40"></span>
    </a>
  );
}
