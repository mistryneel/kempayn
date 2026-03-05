import { useState } from 'react';
import { PricingCard } from '../features/PricingCard';
import { getPricingPlans } from '../../constants/data';

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = getPricingPlans(isYearly);

  return (
    <section id="pricing" className="py-40 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-black tracking-tighter mb-8 uppercase">
            Flexible Infrastructure
          </h2>
          <BillingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BillingToggleProps {
  isYearly: boolean;
  onToggle: () => void;
}

function BillingToggle({ isYearly, onToggle }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-8 mt-12">
      <ToggleLabel active={!isYearly}>MONTHLY</ToggleLabel>
      
      <button
        onClick={onToggle}
        className="w-16 h-8 bg-neutral-900 border border-neutral-800 rounded-full p-1.5 relative transition-all active:scale-95"
      >
        <div
          className={`w-4 h-4 bg-amber-500 rounded-none transition-transform duration-500 ${
            isYearly ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </button>
      
      <ToggleLabel active={isYearly}>
        ANNUAL <span className="text-amber-500 ml-3">SAVE 20%</span>
      </ToggleLabel>
    </div>
  );
}

import type { ReactNode } from 'react';

function ToggleLabel({ active, children }: { active: boolean; children: ReactNode }) {
  return (
    <span
      className={`text-[10px] font-black tracking-[0.3em] transition-colors ${
        active ? 'text-white' : 'text-neutral-600'
      }`}
    >
      {children}
    </span>
  );
}
