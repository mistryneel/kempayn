import { CheckCircle2 } from 'lucide-react';
import type { PricingCardProps } from '../../types';

export function PricingCard({ plan }: PricingCardProps) {
  const containerClasses = plan.highlight
    ? 'bg-neutral-900 border-amber-500 z-10'
    : 'bg-black border-neutral-900 hover:border-neutral-700';

  const buttonClasses = plan.highlight
    ? 'bg-amber-500 text-black hover:bg-white'
    : 'bg-white text-black hover:bg-neutral-200';

  const checkIconClass = plan.highlight ? 'text-amber-500' : 'text-neutral-700';

  return (
    <div
      className={`group relative p-12 border transition-all duration-700 ${containerClasses}`}
    >
      {plan.highlight && <RecommendedBadge />}
      
      <h3 className="text-[10px] font-black tracking-[0.4em] text-neutral-500 mb-8 uppercase">
        {plan.name}
      </h3>
      
      <PriceDisplay price={plan.price} />
      
      <p className="text-neutral-400 text-sm mb-12 leading-relaxed min-h-[3rem]">
        {plan.description}
      </p>

      <ul className="space-y-6 mb-16">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-4 text-[11px] font-bold text-neutral-300 uppercase tracking-wider"
          >
            <CheckCircle2
              size={14}
              className={`shrink-0 mt-0.5 ${checkIconClass}`}
            />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-5 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] ${buttonClasses}`}
      >
        {plan.cta}
      </button>
    </div>
  );
}

function RecommendedBadge() {
  return (
    <div className="absolute -top-3 left-12 bg-amber-500 text-black text-[8px] font-black px-4 py-1.5 tracking-[0.3em] uppercase">
      Recommended
    </div>
  );
}

interface PriceDisplayProps {
  price: string;
}

function PriceDisplay({ price }: PriceDisplayProps) {
  const isCustom = price === 'CUSTOM';
  const displayPrice = isCustom ? price : `$${price}`;

  return (
    <div className="flex items-baseline gap-2 mb-6">
      <span className="text-6xl font-black tracking-tighter leading-none">
        {displayPrice}
      </span>
      {!isCustom && (
        <span className="text-neutral-600 text-[10px] font-black tracking-widest">
          /MO
        </span>
      )}
    </div>
  );
}
