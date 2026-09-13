import Image from 'next/image';
import { Users, Briefcase, Gauge } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Vehicle } from '@/data/vehicles';
import { useTranslations } from 'next-intl';

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const t = useTranslations('common');

  return (
    <Link 
      href={`/catalogue/${vehicle.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/[0.03] ring-1 ring-white/[0.08] transition-all duration-300 hover:-translate-y-1 hover:ring-blue-500/40 hover:shadow-[0_24px_80px_-20px_rgba(33,150,243,0.4)]"
    >
      <div className="absolute right-4 top-4 z-10 rounded-full bg-blue-500/15 px-2.5 py-1 text-[10px] font-semibold text-blue-300 ring-1 ring-blue-500/30 backdrop-blur-md">
        {vehicle.category}
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
          {vehicle.brand}
        </div>
        <h3 className="mt-1 text-lg font-semibold tracking-tight text-white md:text-xl">
          {vehicle.model}
        </h3>
        <p className="mt-1 text-sm text-white/55">
          {vehicle.bodyType} · {vehicle.transmission}
        </p>

        <div className="mt-5 flex items-center gap-4">
          <div className="flex items-center gap-1.5" title={`${vehicle.seats} places`}>
            <Users className="h-[14px] w-[14px] text-blue-400" />
            <span className="text-[13px] text-white/65">{vehicle.seats}</span>
          </div>
          <div className="flex items-center gap-1.5" title={`${vehicle.luggage} bagages`}>
            <Briefcase className="h-[14px] w-[14px] text-blue-400" />
            <span className="text-[13px] text-white/65">{vehicle.luggage}</span>
          </div>
          <div className="flex items-center gap-1.5" title={`${vehicle.hp} chevaux`}>
            <Gauge className="h-[14px] w-[14px] text-blue-400" />
            <span className="text-[13px] text-white/65">{vehicle.hp} ch</span>
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between border-t border-white/[0.06] pt-4">
          <div>
            <div className="text-[10px] text-white/45 uppercase tracking-wider mb-0.5">{t('fromPrice')}</div>
            <div className="flex items-baseline">
              <span className="font-mono text-2xl font-bold text-blue-400">{vehicle.pricePerDay}€</span>
              <span className="ml-1 text-xs text-white/55">{t('perDay')}</span>
            </div>
          </div>
          
          <div className="rounded-full bg-blue-500/15 px-3 py-1.5 text-[11px] font-semibold text-blue-300 ring-1 ring-blue-500/30 transition-colors group-hover:bg-blue-500 group-hover:text-white">
            {t('reserve')} →
          </div>
        </div>
      </div>
    </Link>
  );
}
