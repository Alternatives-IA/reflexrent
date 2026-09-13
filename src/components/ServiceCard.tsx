import { Truck, UserRound, CalendarRange, Plane } from 'lucide-react';

const icons = {
  Truck,
  UserRound,
  CalendarRange,
  Plane
};

export function ServiceCard({ 
  index, 
  title, 
  description, 
  iconName 
}: { 
  index: number, 
  title: string, 
  description: string, 
  iconName: keyof typeof icons 
}) {
  const Icon = icons[iconName];
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <div className="relative flex flex-col rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]">
      <div className="flex items-start justify-between mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/25">
          <Icon className="h-[22px] w-[22px] text-blue-400" strokeWidth={1.8} />
        </div>
        <span className="text-[11px] font-mono font-medium text-blue-400/80">{formattedIndex}</span>
      </div>
      
      <h3 className="text-lg font-semibold tracking-tight text-white mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}
