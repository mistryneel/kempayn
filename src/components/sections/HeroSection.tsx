import { Play } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { AgentTerminal } from '../features/AgentTerminal';

export function HeroSection() {
  return (
    <section className="relative pt-56 pb-32 px-8 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <SectionLabel>Status: Active Orchestration</SectionLabel>

        <h1
          className="text-7xl md:text-[10rem] font-black tracking-[-0.04em] leading-[0.85] mb-12 uppercase animate-reveal opacity-0"
          style={{ animationDelay: '300ms' }}
        >
          Growth <br />
          <span className="text-neutral-800 transition-colors duration-1000 hover:text-white">
            Autonomy.
          </span>
        </h1>

        <p
          className="max-w-xl mx-auto text-base md:text-lg text-neutral-500 mb-16 leading-relaxed font-medium tracking-tight animate-reveal opacity-0"
          style={{ animationDelay: '400ms' }}
        >
          Kempayn is a product-agnostic Multi-Agent System. We deploy autonomous
          digital clusters to manage your entire business growth cycle from
          strategy to closing.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal opacity-0"
          style={{ animationDelay: '500ms' }}
        >
          <button className="w-full sm:w-auto px-14 py-6 bg-white text-black font-black text-[10px] tracking-[0.2em] uppercase hover:bg-amber-500 transition-all active:scale-95 shadow-xl">
            Start Building
          </button>
          <button className="w-full sm:w-auto px-14 py-6 bg-neutral-900 text-white font-black text-[10px] tracking-[0.2em] uppercase border border-neutral-800 hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 active:scale-95">
            <Play size={12} className="fill-white" /> Technical Spec
          </button>
        </div>

        <AgentTerminal />
      </div>
    </section>
  );
}
