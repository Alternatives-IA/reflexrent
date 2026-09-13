'use client';

import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';

export function ReservationBar() {
  const t = useTranslations('reservation');

  return (
    <div id="reservation" className="relative -mt-20 z-30 container-x">
      <Reveal className="rounded-3xl border border-white/10 bg-[#0b0e15]/95 p-6 md:p-8 backdrop-blur-xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7)]">
        <div className="mb-6">
          <h2 className="text-xl font-semibold tracking-tight text-blue-400">{t('title')}</h2>
          <p className="mt-1 text-sm text-white/55">{t('subtitle')}</p>
        </div>

        <form className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-3 md:gap-4">
          
          <div className="flex flex-col justify-center rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 focus-within:border-blue-500/60 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="h-[18px] w-[18px] text-blue-400" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{t('pickupLocation')}</span>
            </div>
            <div className="text-sm font-medium text-white ml-[26px]">
              {t('pickupAddress')} <span className="text-white/40 text-xs font-normal">· {t('addressDetail')}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 focus-within:border-blue-500/60 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-[18px] w-[18px] text-blue-400" />
              <label htmlFor="pickup-date" className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{t('pickupDate')}</label>
            </div>
            <input 
              id="pickup-date"
              type="date" 
              className="ml-[26px] bg-transparent text-sm font-medium text-white outline-none cursor-pointer"
              style={{ colorScheme: 'dark' }}
            />
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 focus-within:border-blue-500/60 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-[18px] w-[18px] text-blue-400" />
              <label htmlFor="return-date" className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{t('returnDate')}</label>
            </div>
            <input 
              id="return-date"
              type="date" 
              className="ml-[26px] bg-transparent text-sm font-medium text-white outline-none cursor-pointer"
              style={{ colorScheme: 'dark' }}
            />
          </div>

          <button 
            type="button"
            className="flex h-full min-h-[64px] items-center justify-center gap-2 rounded-2xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            {t('cta')}
            <ArrowRight className="h-4 w-4" />
          </button>
          
        </form>
      </Reveal>
    </div>
  );
}
