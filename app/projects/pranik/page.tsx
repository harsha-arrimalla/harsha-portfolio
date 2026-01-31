'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function PranikCaseStudy() {
  const theme = {
    primary: '#7C3AED',   // Violet/Purple
    secondary: '#EC4899', // Pink
    background: '#FFFFFF', // Clean White for Medical/Trust
    text: '#1E293B',       // Slate-800
    muted: '#64748B',      // Slate-500
    gradient: 'radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.08), transparent 50%), radial-gradient(circle at 100% 0%, rgba(236, 72, 153, 0.08), transparent 50%)',
    selection: '#7C3AED'
  };

  const meta = {
    title: 'Pranik',
    subtitle: 'AI Healthcare Companion',
    description: 'An AI-powered healthcare companion designed to make quality healthcare guidance accessible, trustworthy, and human—especially for underserved users.',
    tags: ['AI Healthcare', 'Trust Design', 'Mobile App']
  };

  const details = {
    role: 'Product Designer',
    type: 'Concept App',
    timeline: '3 Weeks',
    team: 'Solo Project'
  };

  return (
    <CaseStudyLayout
      theme={theme}
      meta={meta}
      details={details}
      heroImage="/images/projects/pranik.png"
      nextProject={{ title: 'Mondee', href: '/projects/mondee' }}
      sections={[
        {
          id: 'context',
          content: (
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <h3 className="text-4xl font-bold leading-tight text-slate-900">
                Healthcare is clinical. People need compassion.
              </h3>
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Pranik explores the idea of **“healthcare as a companion.”**
                  Existing systems are full of jargon, intimidating for non-native speakers,
                  and feel transactional.
                </p>
                <p>
                  <strong className="text-purple-600">The Challenge:</strong> How do we use AI to decode medical complexity without losing the human touch?
                  The goal was to build trust first, diagnosis second.
                </p>
              </div>
            </div>
          )
        },
        {
          id: 'solution',
          title: 'The Solution',
          className: 'bg-slate-50',
          content: (
            <div>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h3 className="text-5xl font-bold mb-6 text-slate-900">Empathy Engine</h3>
                <p className="text-xl text-slate-500">
                  Prioritizing reassurance and clarity over raw clinical reporting.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "No Jargon", desc: "Translating 'myocardial infarction' to 'heart concerns' automatically.", icon: "🗣️" },
                  { title: "Context Aware", desc: "Adjusting tone for seniors, pregnancy, or emergency scenarios.", icon: "🧠" },
                  { title: "Regional Nuance", desc: "Support for local languages to break cultural barriers.", icon: "🌏" }
                ].map((card, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-6">{card.icon}</div>
                    <h4 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        },
        {
          id: 'process',
          title: 'User Journey',
          content: (
            <div className="space-y-24">
              {[
                {
                  step: "01",
                  title: "Natural Entry",
                  text: "Users describe symptoms in their own words. No drop-down menus or form fields. Just 'I feel dizzy'."
                },
                {
                  step: "02",
                  title: "Progressive Disclosure",
                  text: "Pranik reveals information step-by-step. It checks for understanding before adding more complexity."
                },
                {
                  step: "03",
                  title: "Clear Next Steps",
                  text: "Ending uncertainty. Every interaction concludes with a clear action: 'Rest', 'Monitor', or 'Visit Clinic'."
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
                  <div className="w-24 h-24 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-3xl font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-4 text-slate-900">{item.title}</h4>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        },
        {
          id: 'impact',
          title: 'Learnings',
          className: 'bg-purple-900 text-white',
          content: (
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold mb-12">Simplicity is the Feature</h3>
              <p className="text-2xl font-light opacity-90 leading-relaxed mb-12">
                "In healthcare, complex features often increase anxiety. The most powerful thing an AI can do is be clear, calm, and present."
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-6 py-2 rounded-full bg-white/10 border border-white/20">Trust-First Design</span>
                <span className="px-6 py-2 rounded-full bg-white/10 border border-white/20">Inclusive UX</span>
              </div>
            </div>
          )
        }
      ]}
    />
  );
}
