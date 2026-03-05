import { Zap, Shield } from 'lucide-react';
import { PROTOCOLS, BENTO_FEATURES } from '../../constants/data';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'highlight';
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-40 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 animate-reveal">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-none">
            The Future <br /> is Unattended.
          </h2>
          <p className="text-neutral-500 max-w-lg font-medium tracking-tight text-lg">
            We've decoupled human labor from growth potential. Set your mission
            parameters and let Kempayn clusters execute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[320px]">
          <LargeFeatureCard />
          
          <FeatureCard
            Icon={Zap}
            title="Linear Scaling"
            description="Scale your outreach from 10 to 10,000 without increasing headcount by a single seat."
            variant="highlight"
          />
          
          <FeatureCard
            Icon={Shield}
            title="Secure Core"
            description="Enterprise-grade isolation for your business logic. Your proprietary strategies never leave the node."
          />

          <ProtocolBar />
        </div>
      </div>
    </section>
  );
}

function LargeFeatureCard() {
  const feature = BENTO_FEATURES[0];
  const Icon = feature.Icon;

  return (
    <div className="md:col-span-2 md:row-span-2 bg-neutral-900 border border-neutral-800 p-16 flex flex-col justify-end group hover:border-white transition-all duration-700">
      <Icon
        className="text-amber-500 mb-10 group-hover:rotate-12 transition-transform duration-500"
        size={40}
      />
      <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">
        {feature.title}
      </h3>
      <p className="text-neutral-500 max-w-md leading-relaxed text-sm font-medium">
        {feature.description}
      </p>
    </div>
  );
}

function FeatureCard({ Icon, title, description, variant = 'default' }: FeatureCardProps) {
  const iconClass = variant === 'highlight' ? 'text-amber-500' : 'text-white';
  const borderClass = variant === 'highlight' ? 'hover:border-amber-500' : 'hover:border-neutral-500';

  return (
    <div className={`bg-black border border-neutral-800 p-12 flex flex-col justify-between ${borderClass} transition-all duration-700 group`}>
      <Icon className={`${iconClass} group-hover:scale-125 transition-transform`} size={32} />
      <div>
        <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">{title}</h3>
        <p className="text-[11px] text-neutral-600 font-bold tracking-wide leading-relaxed uppercase">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProtocolBar() {
  return (
    <div className="md:col-span-3 border border-neutral-800 p-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-neutral-950/50">
      <div className="max-w-md text-center md:text-left">
        <h3 className="text-2xl font-bold mb-6 uppercase tracking-tighter">
          Universal Protocol Support
        </h3>
        <p className="text-neutral-500 text-sm font-medium leading-relaxed">
          Kempayn isn't a walled garden. It connects to your CRM, ad platforms,
          and social channels via native API hooks.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {PROTOCOLS.map((tag) => (
          <span
            key={tag}
            className="px-6 py-3 border border-neutral-800 text-[10px] font-black tracking-[0.2em] text-neutral-500 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
