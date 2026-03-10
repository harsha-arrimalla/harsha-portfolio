'use client';

type SkillCardProps = {
  name: string;
  level: string;
  category: string;
  description: string;
};

export function SkillCard({ name, level, category, description }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs uppercase tracking-wider text-emerald-700 font-semibold mb-2">{category}</p>
      <h4 className="text-base font-bold text-slate-900">{name}</h4>
      <p className="text-xs text-slate-500 mt-1">{level}</p>
      <p className="text-sm text-slate-600 mt-2 leading-relaxed">{description}</p>
    </div>
  );
}
