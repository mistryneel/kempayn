import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface SectionLabelProps {
  children: ReactNode;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  icon?: LucideIcon;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

export interface PricingCardProps {
  plan: PricingPlan;
}

export interface AgentLog {
  id: number;
  text: string;
  type: 'system' | 'process' | 'agent' | 'success';
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export type Brand = string;

export interface BentoFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  variant?: 'default' | 'highlight' | 'accent';
}

export interface Protocol {
  name: string;
}
