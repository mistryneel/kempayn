import type { SectionLabelProps } from '../../types';

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      className="inline-block border border-neutral-800 px-3 py-1 mb-8 animate-reveal opacity-0"
      style={{ animationDelay: '200ms' }}
    >
      <span className="text-[9px] font-black tracking-[0.4em] text-amber-500 uppercase">
        {children}
      </span>
    </div>
  );
}
