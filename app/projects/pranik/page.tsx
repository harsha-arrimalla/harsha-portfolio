'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';
import FlowGallery, { FlowStep } from '@/components/FlowGallery';

const flowSteps: FlowStep[] = [
    {
        src: '/images/projects/pranik/flow/01-onboarding.png',
        title: 'Onboarding',
        desc: 'A calm, low-jargon welcome that sets expectations: companion first, clinical tool second.',
        phase: 'Enter',
    },
    {
        src: '/images/projects/pranik/flow/02-signup.png',
        title: 'Sign Up',
        desc: 'Mobile-first sign-up asking only what care actually requires — trust starts with restraint.',
        phase: 'Enter',
    },
    {
        src: '/images/projects/pranik/flow/03-home.png',
        title: 'Health Home',
        desc: 'An in-depth summary of your medical history — reports, readings, and lifestyle guidance in plain language.',
        phase: 'Understand',
    },
    {
        src: '/images/projects/pranik/flow/04-ai-chat.png',
        title: 'AI Chat',
        desc: 'Users describe symptoms in their own words. No dropdown taxonomies — just "I feel dizzy."',
        phase: 'Converse',
    },
    {
        src: '/images/projects/pranik/flow/05-ai-chat-text.png',
        title: 'Progressive Disclosure',
        desc: 'The assistant reveals information step-by-step, checking understanding before adding complexity.',
        phase: 'Converse',
    },
    {
        src: '/images/projects/pranik/flow/06-select-avatar.png',
        title: 'Choose Your Companion',
        desc: 'Users pick the avatar they\'re most comfortable confiding in — tone and persona are a health feature.',
        phase: 'Converse',
    },
    {
        src: '/images/projects/pranik/flow/07-avatar-chat-overview.png',
        title: 'Avatar Conversation',
        desc: 'A face-to-face conversational mode for users who find typing about health intimidating.',
        phase: 'Converse',
    },
    {
        src: '/images/projects/pranik/flow/08-avatar-chat.png',
        title: 'Guided Voice Dialogue',
        desc: 'The avatar leads with questions and reassurance, mirroring how a good nurse triages.',
        phase: 'Converse',
    },
    {
        src: '/images/projects/pranik/flow/09-doctor-detail.png',
        title: 'Doctor Handoff',
        desc: 'When AI reaches its limits, the app hands off to a real doctor with full context — no dead ends.',
        phase: 'Act',
    },
    {
        src: '/images/projects/pranik/flow/10-appointments.png',
        title: 'Appointments',
        desc: 'Upcoming and past visits in one place, closing the loop between conversation and care.',
        phase: 'Act',
    },
    {
        src: '/images/projects/pranik/flow/11-reminders.png',
        title: 'Reminders',
        desc: 'Medication and follow-up reminders keep the companion useful between episodes of concern.',
        phase: 'Act',
    },
    {
        src: '/images/projects/pranik/flow/12-scanning.png',
        title: 'Report Scanning',
        desc: 'Scan a lab report and get it decoded into plain language — the jargon translator in action.',
        phase: 'Understand',
    },
];

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
      slug="pranik"
      sections={[
        {
          id: 'context',
          title: 'The Context',
          content: (
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
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
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-slate-900">Empathy Engine</h3>
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
          title: 'The Process',
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
          id: 'flow',
          className: 'bg-slate-50',
          content: (
            <FlowGallery
              eyebrow="Complete End-to-End Flow"
              title="From first hello to real care"
              description="The full journey as designed: a gentle entry, a home that decodes your health history, three ways to talk about symptoms — text, avatar, and voice — and a clean handoff to real doctors, appointments, and reminders."
              steps={flowSteps}
              accent="#7C3AED"
            />
          )
        },
        {
          id: 'impact',
          title: 'Reflection',
          className: 'bg-purple-900 text-white',
          content: (
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-12">Simplicity is the Feature</h3>
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
