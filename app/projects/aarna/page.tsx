'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';

export default function AarnaCaseStudy() {
  const theme = {
    primary: '#3B82F6',   // Bright Blue
    secondary: '#14B8A6', // Teal
    background: '#0B0F19', // Deep Navy/Black
    text: '#F8FAFC',       // Off-white
    muted: '#94A3B8',      // Slate-400
    gradient: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%), radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.15), transparent 50%)',
    selection: '#3B82F6'
  };

  const meta = {
    title: 'Aarna',
    subtitle: 'AI Public Platform',
    description: 'An AI-assisted platform that helps users create and publish travel experiences through guided conversations instead of complex forms.',
    tags: ['AI Product', 'System Design', 'Public Platform']
  };

  const details = {
    role: 'Lead Product Designer',
    type: 'Web Platform',
    timeline: '4 Months',
    team: '2 Designers, 4 Devs'
  };

  return (
    <CaseStudyLayout
      theme={theme}
      meta={meta}
      details={details}
      heroImage="/images/projects/aarna.png"
      nextProject={{ title: 'Pranik', href: '/projects/pranik' }}
      sections={[
        {
          id: 'context',
          content: (
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <h3 className="text-4xl font-bold leading-tight">
                Forms were failing users. Experience creation was chaos.
              </h3>
              <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                <p>
                  Aarna is designed for creators who want to host services and manage digital stores.
                  However, the existing entry barrier was massive: inconsistent formats (PDFs, raw text),
                  high drop-off rates on complex forms, and a moderation nightmare for admins.
                </p>
                <p>
                  <strong className="text-white">The Core Insight:</strong> Brief forms aren't enough. Users don't know *how* to sell themselves.
                  AI needed to bridge the gap between "I do this" and a sellable product listing.
                </p>
              </div>
            </div>
          )
        },
        {
          id: 'solution',
          title: 'The Solution',
          className: 'bg-white/5',
          content: (
            <div>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h3 className="text-5xl font-bold mb-6">Conversational Creation</h3>
                <p className="text-xl text-slate-400">
                  Replacing static inputs with an intelligent, guided dialogue that learns from the user.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Guided Prompts", desc: "AI asks the right questions to extract sellable details.", icon: "💬" },
                  { title: "Generate & Verify", desc: "OCR extracts data from brochure uploads to prefill drafts.", icon: "⚡" },
                  { title: "Quality Gate", desc: "Automated scoring ensures listings meet platform standards.", icon: "🛡️" }
                ].map((card, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-4xl mb-6">{card.icon}</div>
                    <h4 className="text-xl font-bold mb-3 text-white">{card.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        },
        {
          id: 'process',
          title: 'How it Works',
          content: (
            <div className="space-y-32">
              {[
                {
                  step: "01",
                  title: "Prompt & Upload",
                  text: "Users upload raw assets (PDFs, images) or answer simple prompts about their service."
                },
                {
                  step: "02",
                  title: "AI Structuring",
                  text: "The system processes unstructured data, writing marketing copy and tagging categories automatically."
                },
                {
                  step: "03",
                  title: "Human Review",
                  text: "Users review the generated listing, tweak the tone, and submit for final approval."
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-20 items-start group">
                  <div className="text-8xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors">
                    {item.step}
                  </div>
                  <div className="pt-4 max-w-xl">
                    <h4 className="text-3xl font-bold mb-4">{item.title}</h4>
                    <p className="text-xl text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        },
        {
          id: 'impact',
          title: 'Impact',
          className: 'bg-blue-600',
          content: (
            <div className="text-center">
              <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
                <div>
                  <div className="text-6xl font-black mb-2">3x</div>
                  <div className="text-blue-200 font-medium tracking-wide">Listing Volume</div>
                </div>
                <div>
                  <div className="text-6xl font-black mb-2">-40%</div>
                  <div className="text-blue-200 font-medium tracking-wide">Drop-off Rate</div>
                </div>
                <div>
                  <div className="text-6xl font-black mb-2">10k+</div>
                  <div className="text-blue-200 font-medium tracking-wide">Active Users</div>
                </div>
              </div>
            </div>
          )
        }
      ]}
    />
  );
}
