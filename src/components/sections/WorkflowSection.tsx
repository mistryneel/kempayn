import { SectionLabel } from '../ui/SectionLabel';
import { WORKFLOW_STEPS } from '../../constants/data';

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="py-40 bg-neutral-950 border-y border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-8 text-center">
        <SectionLabel>Deployment Cycle</SectionLabel>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-24 uppercase">
          Integration Flow
        </h2>

        <div className="grid md:grid-cols-3 gap-24 relative">
          {WORKFLOW_STEPS.map((item) => (
            <WorkflowStep key={item.step} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { WorkflowStep } from '../../types';
import type { LucideIcon } from 'lucide-react';

interface WorkflowStepProps extends WorkflowStep {
  Icon: LucideIcon;
}

function WorkflowStep({ step, title, description, Icon }: WorkflowStepProps) {
  return (
    <div className="group">
      <div className="w-20 h-20 bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-10 group-hover:border-amber-500 transition-all duration-500 group-hover:-translate-y-2">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-amber-500 font-black text-[10px] mb-4 tracking-[0.4em]">
        {step}
      </div>
      <h3 className="text-xl font-bold mb-5 uppercase tracking-tighter">{title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed font-medium px-4">
        {description}
      </p>
    </div>
  );
}
