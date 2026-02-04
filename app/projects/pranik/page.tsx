'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';
import { FeatureGrid, InsightCard, ProcessTimeline, SectionHeading } from '@/components/CaseStudyBlocks';
import { caseStudyTheme } from '@/lib/caseStudyTheme';
import { HeartHandshake, Languages, Sparkles } from 'lucide-react';

export default function PranikCaseStudy() {
  const theme = caseStudyTheme;

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
            <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] items-start">
              <SectionHeading
                eyebrow="Context"
                title="Healthcare is clinical. People need compassion."
                description="Pranik reframes healthcare as a companion. Existing systems feel transactional, overloaded with jargon, and intimidating for non-native speakers."
                align="left"
              />
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  The challenge: translate medical complexity into human language without losing trust.
                  The product needed to earn confidence before offering a diagnosis.
                </p>
                <p className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
                  <strong className="font-semibold text-slate-50">Design focus:</strong> calm, clear, and actionable
                  interactions at every step.
                </p>
              </div>
            </div>
          )
        },
        {
          id: 'solution',
          title: 'The Solution',
          content: (
            <div>
              <div className="mb-16">
                <SectionHeading
                  eyebrow="Solution"
                  title="Empathy engine"
                  description="Reassurance, clarity, and trust—before raw clinical output."
                />
              </div>

              <FeatureGrid
                items={[
                  {
                    title: 'No jargon',
                    description: "Translate 'myocardial infarction' into 'heart concerns' automatically.",
                    icon: Sparkles
                  },
                  {
                    title: 'Context aware',
                    description: 'Adjust tone for seniors, pregnancy, or emergency scenarios.',
                    icon: HeartHandshake
                  },
                  {
                    title: 'Regional nuance',
                    description: 'Support for local languages to break cultural barriers.',
                    icon: Languages
                  }
                ]}
              />
            </div>
          )
        },
        {
          id: 'process',
          title: 'User Journey',
          content: (
            <ProcessTimeline
              steps={[
                {
                  step: '01',
                  title: 'Natural entry',
                  description: "Users describe symptoms in their own words. No drop-down menus—just 'I feel dizzy.'"
                },
                {
                  step: '02',
                  title: 'Progressive disclosure',
                  description: 'The experience reveals information step-by-step and checks for understanding.'
                },
                {
                  step: '03',
                  title: 'Clear next steps',
                  description: "Every interaction ends with a calm action: 'Rest', 'Monitor', or 'Visit clinic.'"
                }
              ]}
            />
          )
        },
        {
          id: 'impact',
          title: 'Learnings',
          content: (
            <div className="space-y-10">
              <SectionHeading
                eyebrow="Learning"
                title="Simplicity is the feature."
                description="In healthcare, complex features increase anxiety. The most powerful thing an AI can do is be clear, calm, and present."
              />
              <div className="grid gap-6 md:grid-cols-2">
                <InsightCard
                  title="Trust-first design"
                  description="Lead with reassurance and clarity to build confidence before presenting outcomes."
                />
                <InsightCard
                  title="Inclusive UX"
                  description="Local language support and tone adjustments reduce barriers for underserved users."
                />
              </div>
            </div>
          )
        }
      ]}
    />
  );
}
