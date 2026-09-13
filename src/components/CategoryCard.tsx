import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function CategoryCard({ category, index }: { category: { name: string, count: number }, index: number }) {
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <Link 
      href={`/catalogue?category=${encodeURIComponent(category.name)}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 transition-all duration-300 hover:border-blue-500/40 hover:from-blue-500/[0.08]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[10px] font-mono font-medium text-white/40">{formattedIndex}</span>
        <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:rotate-[10deg] group-hover:text-blue-400" />
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">{category.name}</h3>
        <p className="mt-1 text-sm text-white/55">{category.count} modèles</p>
      </div>
    </Link>
  );
}
