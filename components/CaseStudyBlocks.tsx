'use client';

import type { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center'
}: SectionHeadingProps) {
  const alignClasses = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col gap-4 ${alignClasses}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p>
      <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">{title}</h3>
      {description ? (
        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">{description}</p>
      ) : null}
    </div>
  );
}

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureGridProps {
  items: FeatureItem[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-slate-50">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h4 className="mt-5 text-xl font-semibold text-slate-50">{item.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="space-y-10">
      {steps.map((item) => (
        <div key={item.step} className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-slate-100">
            {item.step}
          </div>
          <div className="space-y-3">
            <h4 className="text-2xl font-semibold text-slate-50">{item.title}</h4>
            <p className="text-lg leading-relaxed text-slate-400">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

interface MetricItem {
  value: string;
  label: string;
}

interface MetricsGridProps {
  metrics: MetricItem[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center"
        >
          <p className="text-4xl font-semibold text-slate-50">{metric.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

interface InsightCardProps {
  title: string;
  description: string;
}

export function InsightCard({ title, description }: InsightCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h4 className="text-2xl font-semibold text-slate-50">{title}</h4>
      <p className="mt-4 text-lg leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}
