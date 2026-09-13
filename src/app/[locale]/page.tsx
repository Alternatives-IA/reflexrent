import { useTranslations } from 'next-intl';
import { Hero3D } from '@/components/Hero3D';
import { ReservationBar } from '@/components/ReservationBar';
import { VehicleCard } from '@/components/VehicleCard';
import { CategoryCard } from '@/components/CategoryCard';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FaqSection } from '@/components/FaqSection';
import { FinalCtaSection } from '@/components/FinalCtaSection';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { Reveal, StaggerGroup } from '@/components/Reveal';
import { featuredVehicles, categories } from '@/data/vehicles';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      <Navbar />
      <main>
        <Hero3D />
        <ReservationBar />

        {/* Section Vehicules */}
        <section id="vehicles" className="container-x py-24 md:py-32">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div className="max-w-2xl">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400 mb-4">
                  {t('vehicles.eyebrow')}
                </div>
                <h2 className="text-balance text-[clamp(34px,4.5vw,62px)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
                  {t('vehicles.title')}
                </h2>
                <p className="mt-4 text-[clamp(15px,1.3vw,18px)] text-white/60">
                  {t('vehicles.subtitle')}
                </p>
              </div>
              <button className="shrink-0 rounded-full bg-white/5 ring-1 ring-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                {t('vehicles.seeAll')}
              </button>
            </div>
          </Reveal>

          <StaggerGroup staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
              {featuredVehicles.map((vehicle, index) => (
                <Reveal key={vehicle.slug} index={index}>
                  <VehicleCard vehicle={vehicle} />
                </Reveal>
              ))}
            </div>
          </StaggerGroup>
        </section>

        {/* Section Categories */}
        <section id="categories" className="container-x py-24 md:py-32">
          <Reveal>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400 mb-4">
              {t('categories.eyebrow')}
            </div>
            <h2 className="text-balance text-[clamp(34px,4.5vw,62px)] font-semibold leading-[1.02] tracking-[-0.035em] text-white mb-12">
              {t('categories.title')}
            </h2>
          </Reveal>

          <StaggerGroup staggerDelay={0.06}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {categories.map((category, index) => (
                <Reveal key={category.name} index={index}>
                  <CategoryCard category={category} index={index} />
                </Reveal>
              ))}
            </div>
          </StaggerGroup>
        </section>

        {/* Section Histoire */}
        <section id="histoire" className="bg-[#06090f]/80 border-y border-white/[0.05] py-24 md:py-32 overflow-hidden">
          <div className="container-x">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Reveal>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400 mb-4">
                    {t('history.eyebrow')}
                  </div>
                  <h2 className="text-balance text-[clamp(34px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.03em] text-white mb-8">
                    {t('history.title')}
                  </h2>
                </Reveal>
                <StaggerGroup staggerDelay={0.15}>
                  <Reveal index={0}><p className="text-white/70 leading-relaxed text-[17px] mb-6">{t('history.p1')}</p></Reveal>
                  <Reveal index={1}><p className="text-white/70 leading-relaxed text-[17px] mb-6">{t('history.p2')}</p></Reveal>
                  <Reveal index={2}><p className="text-white/70 leading-relaxed text-[17px]">{t('history.p3')}</p></Reveal>
                </StaggerGroup>
              </div>
              <Reveal direction="left">
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                  <Image src="/branding/founders.jpg" alt="Fondateurs" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section Services */}
        <section id="services" className="container-x py-24 md:py-32">
          <Reveal className="text-center mb-16">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400 mb-4">
              {t('services.eyebrow')}
            </div>
            <h2 className="text-balance text-[clamp(34px,4.5vw,62px)] font-semibold leading-[1.02] tracking-[-0.035em] text-white mb-4">
              {t('services.title')}
            </h2>
            <p className="text-[clamp(15px,1.3vw,18px)] text-white/60">
              {t('services.subtitle')}
            </p>
          </Reveal>

          <StaggerGroup staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.raw('services.items').map((item: any, i: number) => {
                const iconNames = ['Truck', 'UserRound', 'CalendarRange', 'Plane'] as const;
                return (
                  <Reveal key={i} index={i}>
                    <ServiceCard index={i} title={item.title} description={item.desc} iconName={iconNames[i]} />
                  </Reveal>
                );
              })}
            </div>
          </StaggerGroup>
        </section>

        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
