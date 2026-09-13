'use client';

import Image from 'next/image';
import { testimonials } from '@/data/vehicles';
import { useTranslations } from 'next-intl';

export function TestimonialsSection() {
  const t = useTranslations('home.testimonials');

  // Split testimonials for masonry layout
  const col1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const col2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
  const col3 = [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)];

  const TestimonialCard = ({ data }: { data: any }) => (
    <div className="mb-4 md:mb-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-blue-500/5 backdrop-blur-sm max-w-xs mx-auto w-full">
      <p className="text-sm leading-relaxed text-white/85 mb-6">"{data.text}"</p>
      <div className="flex items-center gap-3">
        <Image
          src={data.avatar}
          alt={data.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border border-white/10 object-cover"
        />
        <div>
          <div className="font-semibold text-white tracking-tight leading-5">{data.name}</div>
          <div className="text-xs text-white/55 tracking-tight leading-5">{data.role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-x py-24 md:py-32">
      <div className="text-center mb-16">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400 mb-4">
          {t('eyebrow')}
        </div>
        <h2 className="text-balance text-[clamp(34px,4.5vw,62px)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
          {t('title')}
        </h2>
        <p className="mt-4 text-balance text-[clamp(15px,1.3vw,18px)] text-white/60">
          {t('subtitle')}
        </p>
      </div>

      <div className="relative max-h-[680px] overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col animate-[scroll-up_25s_linear_infinite]">
            {col1.map((item, i) => (
              <TestimonialCard key={`col1-${i}`} data={item} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="hidden md:flex flex-col animate-[scroll-up_30s_linear_infinite] [animation-direction:reverse]">
            {col2.map((item, i) => (
              <TestimonialCard key={`col2-${i}`} data={item} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="hidden lg:flex flex-col animate-[scroll-up_20s_linear_infinite] [animation-delay:-5s]">
            {col3.map((item, i) => (
              <TestimonialCard key={`col3-${i}`} data={item} />
            ))}
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
}
