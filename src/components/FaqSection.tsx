'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Reveal, StaggerGroup } from './Reveal';

export function FaqSection() {
  const t = useTranslations('home.faq');
  const items = t.raw('items') as { q: string; a: string }[];
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#06090f]/60 border-y border-white/[0.05] py-24 md:py-32">
      <div className="container-x max-w-4xl">
        <div className="text-center mb-16">
          <Reveal>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400 mb-4">
              {t('eyebrow')}
            </div>
            <h2 className="text-balance text-[clamp(34px,4.5vw,62px)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
              {t('title')}
            </h2>
          </Reveal>
        </div>

        <div className="space-y-2.5">
          <StaggerGroup staggerDelay={0.08}>
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={index} index={index}>
                  <div 
                    className={`rounded-2xl border bg-white/[0.02] backdrop-blur-sm transition-colors duration-300 ${
                      isOpen ? 'border-blue-500/30' : 'border-white/[0.07] hover:border-white/10'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base md:text-lg font-medium text-white tracking-tight">{item.q}</span>
                      <ChevronDown 
                        className={`h-5 w-5 shrink-0 text-blue-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <div 
                      className="grid transition-all duration-300 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-[15px] leading-relaxed text-white/65">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
