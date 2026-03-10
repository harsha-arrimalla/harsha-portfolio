'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function QualifyzeCaseStudy() {
  const theme = {
    primary: '#0E7C66',
    secondary: '#2EA58C',
    background: '#F8FAF9',
    text: '#0F172A',
    muted: '#5B6B7A',
    gradient:
      'radial-gradient(circle at 15% 0%, rgba(14,124,102,0.18), transparent 52%), radial-gradient(circle at 92% 8%, rgba(46,165,140,0.15), transparent 45%)',
    selection: '#0E7C66',
  };

  const meta = {
    title: 'Qualifyze',
    subtitle: 'Independent UX Case Study',
    description:
      'A product and UX case study on supplier qualification in life sciences, focused on audit workflows, CAPA visibility, and decision-ready risk prioritization.',
    tags: ['Enterprise UX', 'Compliance', 'UX Research'],
  };

  const details = {
    role: 'Product Designer (Independent Study)',
    type: 'UX Research + Product Strategy',
    timeline: '1 Week',
    team: 'Solo',
  };

  return (
    <CaseStudyLayout
      theme={theme}
      meta={meta}
      details={details}
      heroImage="/images/projects/qualifyze.png"
      nextProject={{ title: 'Hita', href: '/projects/hita' }}
      sections={[
        {
          id: 'context',
          content: (
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <h3 className="text-4xl font-bold leading-tight text-slate-900">
                Compliance teams need clarity, not just more dashboards.
              </h3>
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  In life sciences, supplier qualification is high-stakes and regulation-heavy. Teams must move fast while preserving traceability, data integrity, and audit readiness.
                </p>
                <p>
                  This independent case study evaluates how Qualifyze currently supports those workflows and where UX can reduce decision friction for QA and procurement users.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: 'problem',
          title: 'Problem Framing',
          className: 'bg-white',
          content: (
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Business Problem</h4>
                <p className="text-slate-600 leading-relaxed">
                  Qualification delays increase operational and regulatory risk. Organizations need faster supplier decisions without compromising compliance rigor.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">User Problem</h4>
                <p className="text-slate-600 leading-relaxed">
                  QA and procurement teams often lack a single decision-ready view of supplier risk, audit progress, and CAPA status.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: 'approach',
          title: 'Research Approach',
          className: 'bg-slate-50',
          content: (
            <div className="space-y-6">
              {[
                {
                  title: 'Product Teardown',
                  text: 'Mapped onboarding, audit execution, report lifecycle, and CAPA follow-up.',
                },
                {
                  title: 'Compliance Context Scan',
                  text: 'Reviewed domain constraints for traceability, integrity, and role-based accountability.',
                },
                {
                  title: 'Comparative Benchmark',
                  text: 'Assessed differentiators versus audit-management and QMS-style platforms.',
                },
              ].map((item, i) => (
                <div key={i} className="grid md:grid-cols-[72px_1fr] gap-6 p-7 rounded-2xl bg-white border border-slate-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 font-black text-xl flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          id: 'insights',
          title: 'Key Insights',
          content: (
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Onboarding remains the highest-friction stage despite strong audit-library assets.',
                'Risk and CAPA are logically connected but visually separated in decision moments.',
                'Status visibility exists, but action-priority clarity is still inconsistent.',
              ].map((insight, i) => (
                <div key={i} className="p-8 rounded-2xl border border-slate-200 bg-white">
                  <p className="text-xs tracking-[0.18em] uppercase font-bold text-emerald-700 mb-3">Insight {i + 1}</p>
                  <p className="text-slate-700 leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          id: 'direction',
          title: 'Proposed Product Direction',
          className: 'bg-emerald-700 text-white',
          content: (
            <div>
              <h3 className="text-4xl font-bold mb-6">Unified Supplier Risk Workspace</h3>
              <p className="text-xl leading-relaxed text-emerald-100 max-w-4xl">
                Consolidate risk score trends, open CAPAs, audit history, and recommended next actions into one supplier-level command view.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="p-6 rounded-2xl border border-white/20 bg-white/5">
                  <h4 className="font-bold text-lg mb-2">Risk Layer</h4>
                  <p className="text-emerald-100">Current score, trend signals, and clear trigger explanation.</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/20 bg-white/5">
                  <h4 className="font-bold text-lg mb-2">CAPA Layer</h4>
                  <p className="text-emerald-100">Open items, owners, due windows, and blocker visibility.</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/20 bg-white/5">
                  <h4 className="font-bold text-lg mb-2">Action Layer</h4>
                  <p className="text-emerald-100">Decision prompt: monitor, re-audit, or escalate.</p>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 'reflection',
          title: 'Limitations and Reflection',
          content: (
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                This study is based on secondary research and public product information. It is directional and should be validated with interviews and usability testing before roadmap decisions.
              </p>
              <p>
                Core takeaway: in compliance products, users need decision clarity under risk, not only more metrics on screen.
              </p>
            </div>
          ),
        },
        {
          id: 'artifact',
          title: 'Case Study Artifact',
          className: 'bg-slate-50',
          content: (
            <div className="p-8 rounded-3xl border border-slate-200 bg-white">
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Download PDF Version</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                A polished shareable version of this case study is available as PDF.
              </p>
              <a
                href="/case-studies/Harsha_Qualifyze_UX_Case_Study_v2.pdf"
                download="Harsha_Qualifyze_UX_Case_Study_v2.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-colors"
              >
                Download PDF
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          ),
        },
      ]}
    />
  );
}
