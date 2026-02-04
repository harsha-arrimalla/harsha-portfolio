'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';
import { SectionHeading, FeatureGrid, MetricsGrid, ProcessTimeline, InsightCard } from '@/components/CaseStudyBlocks';
import { caseStudyTheme } from '@/lib/caseStudyTheme';
import { Bot, FileSearch, ShieldCheck } from 'lucide-react';

export default function AarnaCaseStudy() {
  const theme = caseStudyTheme;

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
            <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] items-start">
              <SectionHeading
                eyebrow="Context"
                title="Forms were failing creators. Experience creation felt chaotic."
                description="Aarna serves creators who want to host services and sell curated experiences. The onboarding barrier was high: inconsistent submissions, drop-offs in long forms, and heavy moderation."
                align="left"
              />
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  The product needed a structured path from “I do this” to a publishable listing. AI had to
                  help users articulate their value while keeping the process warm and conversational.
                </p>
                <p className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
                  <strong className="font-semibold text-slate-50">Core insight:</strong> users don’t need more
                  fields—they need guidance, confidence, and a clear story.
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
                  title="Conversational creation with guardrails"
                  description="We replaced static forms with guided prompts, helping creators narrate their experience while the system validated quality."
                />
              </div>

              <FeatureGrid
                items={[
                  {
                    title: 'Guided prompts',
                    description: 'The assistant asks the right questions to extract sellable, structured details.',
                    icon: Bot
                  },
                  {
                    title: 'Generate & verify',
                    description: 'OCR and AI draft listings from uploads, then surface gaps for validation.',
                    icon: FileSearch
                  },
                  {
                    title: 'Quality gate',
                    description: 'Automated scoring ensures every listing meets platform standards.',
                    icon: ShieldCheck
                  }
                ]}
              />
            </div>
          )
        },
        {
          id: 'process',
          title: 'How it Works',
          content: (
            <ProcessTimeline
              steps={[
                {
                  step: '01',
                  title: 'Prompt & upload',
                  description: 'Creators start with simple prompts or upload raw assets like PDFs and brochures.'
                },
                {
                  step: '02',
                  title: 'AI structuring',
                  description: 'The system organizes the information into a ready-to-publish listing with categories.'
                },
                {
                  step: '03',
                  title: 'Human review',
                  description: 'Creators refine tone and approve the final listing before submission.'
                }
              ]}
            />
          )
        },
        {
          id: 'impact',
          title: 'Impact',
          content: (
            <div className="space-y-10">
              <SectionHeading
                eyebrow="Outcome"
                title="Conversion climbed, quality improved."
                description="By reducing friction and clarifying expectations, the platform scaled with fewer moderation issues."
              />
              <MetricsGrid
                metrics={[
                  { value: '3x', label: 'Listing volume' },
                  { value: '-40%', label: 'Drop-off rate' },
                  { value: '10k+', label: 'Active users' }
                ]}
              />
              <InsightCard
                title="What hiring teams should know"
                description="I aligned product strategy with AI capabilities, balancing creator empathy with platform compliance."
              />
            </div>
          )
        }
      ]}
    />
  );
}
