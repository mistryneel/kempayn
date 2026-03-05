import { Cpu, Globe, BarChart3, Layers, Zap, Shield } from 'lucide-react';
import type { PricingPlan, WorkflowStep, FooterSection } from '../types';

export const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
] as const;

export const BRANDS = ['OPENAI', 'ANTHROPIC', 'MISTRAL', 'META', 'GROQ'] as const;

export const PROTOCOLS = ['WEBHOOKS', 'REST', 'GRAPHQL', 'AUTH_O', 'GRPC'] as const;

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Logic Mapping',
    description: 'Sync your brand documents and goals into our state-management core.',
    Icon: Globe,
  },
  {
    step: '02',
    title: 'Node Ignition',
    description: 'Activate specialized agent roles across your chosen communication channels.',
    Icon: Cpu,
  },
  {
    step: '03',
    title: 'Autonomous Scale',
    description: 'Monitor the system as it self-optimizes growth loops based on real-time feedback.',
    Icon: BarChart3,
  },
];

export const BENTO_FEATURES = [
  {
    id: 'multi-agent',
    title: 'Multi-Agent Clusters',
    description: 'Unlike basic chatbots, Kempayn agents communicate horizontally. Strategy agents instruct execution agents, creating a self-correcting feedback loop.',
    Icon: Layers,
    colSpan: 2,
    rowSpan: 2,
    variant: 'default' as const,
  },
  {
    id: 'linear-scaling',
    title: 'Linear Scaling',
    description: 'Scale your outreach from 10 to 10,000 without increasing headcount by a single seat.',
    Icon: Zap,
    variant: 'highlight' as const,
  },
  {
    id: 'secure-core',
    title: 'Secure Core',
    description: 'Enterprise-grade isolation for your business logic. Your proprietary strategies never leave the node.',
    Icon: Shield,
    variant: 'default' as const,
  },
] as const;

export const getPricingPlans = (isYearly: boolean): PricingPlan[] => [
  {
    name: 'Standard',
    price: isYearly ? '39' : '49',
    description: 'Essential orchestration for individual builders and solo founders.',
    features: ['3 Autonomous Agents', 'Base Logic Gates', '500 Task Cycles/mo', 'Community Support'],
    cta: 'Initialize',
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: isYearly ? '119' : '149',
    description: 'Unrestricted MAS deployment for high-velocity scaling teams.',
    features: ['15 Autonomous Agents', 'Custom Decision Trees', 'Unlimited Cycles', 'Direct API Hooks', 'Dedicated Slack'],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Custom',
    price: 'CUSTOM',
    description: 'Bespoke system architecture for industry-scale operations.',
    features: ['Unlimited Nodes', 'On-Prem Deployment', 'SLA Guarantees', 'Custom Model Tuning'],
    cta: 'Consultation',
    highlight: false,
  },
];

export const AGENT_SIMULATION_STEPS = [
  { text: "> Agent 'Stratos' online: Strategy Protocol Alpha", type: 'agent' as const },
  { text: '> Analyzing market liquidity and sentiment...', type: 'process' as const },
  { text: "> Agent 'CopySmith' active: Drafting variants...", type: 'agent' as const },
  { text: '> Cross-agent validation: Logic check 100% pass', type: 'system' as const },
  { text: '> Execution: Injecting autonomous growth loop.', type: 'success' as const },
  { text: '> Metric: Conversion velocity increased +18%', type: 'success' as const },
  { text: '> Status: System autonomous. Human override idle.', type: 'system' as const },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Marketplace' },
      { label: 'Node Studio' },
      { label: 'API Docs' },
      { label: 'Integrations' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy' },
      { label: 'Service' },
      { label: 'Security' },
      { label: 'Enterprise' },
    ],
  },
];

export const SOCIAL_ICONS = ['Twitter', 'Github', 'Linkedin'] as const;
