'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';
import FlowGallery, { FlowStep } from '@/components/FlowGallery';

const ACCENT = '#3B82F6';

const flowSteps: FlowStep[] = [
    {
        src: '/images/projects/aarna/flow/01-intent.png',
        title: 'Open Intent',
        desc: '"What would you like to do?" — speak, type, or pick a prompt. The journey starts from intent, not from a search box.',
        phase: 'Intent',
    },
    {
        src: '/images/projects/aarna/flow/02-discover.jpg',
        title: 'Abhee Discover Feed',
        desc: 'The assistant curates a visual discovery feed of experiences matched to the stated mood and constraints.',
        phase: 'Discover',
    },
    {
        src: '/images/projects/aarna/flow/03-abhee-chat.png',
        title: 'Conversation with Abhee',
        desc: 'Refining the plan is a dialogue — budget, dates, and vibe get negotiated in chat instead of filter panels.',
        phase: 'Discover',
    },
    {
        src: '/images/projects/aarna/flow/08-destination-comparison.png',
        title: 'Destination Comparison',
        desc: 'Destinations are compared by match percentage and "moments you\'ll remember" — emotional criteria made scannable.',
        phase: 'Compare',
    },
    {
        src: '/images/projects/aarna/flow/09-plan-comparison.png',
        title: 'Plan Comparison',
        desc: 'Competing trip plans go side by side, so the tradeoff (cost vs. pace vs. depth) is an explicit choice.',
        phase: 'Compare',
    },
    {
        src: '/images/projects/aarna/flow/04-trip-plan.png',
        title: 'Day-wise Trip Planner',
        desc: 'The chosen plan becomes a morning / afternoon / evening itinerary with every item bookable in place.',
        phase: 'Plan',
    },
    {
        src: '/images/projects/aarna/flow/05-flights.png',
        title: 'Flights in the Plan',
        desc: 'Transport legs live inside the itinerary rather than a separate funnel — the plan stays the single source of truth.',
        phase: 'Plan',
    },
    {
        src: '/images/projects/aarna/flow/06-stays.png',
        title: 'Stays',
        desc: 'Stay options carry the same card grammar as experiences, keeping one mental model across the whole trip.',
        phase: 'Plan',
    },
    {
        src: '/images/projects/aarna/flow/07-cab.png',
        title: 'Local Transport',
        desc: 'Cabs and transfers slot into the same day-wise structure — the last unglamorous mile, designed anyway.',
        phase: 'Plan',
    },
    {
        src: '/images/projects/aarna/flow/10-infinite-scroll.png',
        title: 'Infinite Discovery',
        desc: 'An infinite scroll surface keeps inspiration flowing for undecided travelers without breaking the planning thread.',
        phase: 'Discover',
    },
    {
        src: '/images/projects/aarna/flow/11-my-plan.png',
        title: 'My Plan',
        desc: 'Everything confirmed lives in one place — the trip the user actually takes, assembled from the conversation.',
        phase: 'Own',
    },
];

export default function AarnaCaseStudy() {
    const theme = {
        primary: '#3B82F6',
        secondary: '#14B8A6',
        background: '#FFFFFF',
        text: '#0F172A',
        muted: '#475569',
        gradient: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%), radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.15), transparent 50%)',
        selection: '#3B82F6'
    };

    const meta = {
        title: 'Aarna',
        subtitle: 'AI Travel Marketplace',
        description: 'An AI-assisted travel platform where creators publish experiences through guided conversation — and travelers discover, compare, and book them through Abhee, the AI assistant.',
        tags: ['AI Product', 'Consumer Travel', '10K+ Users']
    };

    const details = {
        role: 'Lead Product Designer',
        type: 'Web & Mobile Platform',
        timeline: '4 Months',
        team: '2 Designers, 4 Devs'
    };

    return (
        <CaseStudyLayout
            theme={theme}
            meta={meta}
            details={details}
            heroImage="/images/projects/aarna.png"
            slug="aarna"
            sections={[
                {
                    id: 'impact',
                    className: 'bg-blue-600 text-white',
                    content: (
                        <div className="text-center">
                            <p className="text-sm uppercase tracking-[0.3em] text-blue-100/70 font-bold mb-14">Outcomes — each tied to a design decision</p>
                            <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
                                <div className="pt-8 md:pt-0 md:px-6">
                                    <div className="text-7xl md:text-8xl font-black mb-3">3×</div>
                                    <div className="text-blue-50 font-semibold tracking-wide mb-3">Listing Volume</div>
                                    <p className="text-sm text-blue-100/70 leading-relaxed">
                                        Replacing the listing form with a guided AI conversation meant creators no longer
                                        needed to know how to sell themselves — the assistant extracted it.
                                    </p>
                                </div>
                                <div className="pt-8 md:pt-0 md:px-6">
                                    <div className="text-7xl md:text-8xl font-black mb-3">−40%</div>
                                    <div className="text-blue-50 font-semibold tracking-wide mb-3">Drop-off Rate</div>
                                    <p className="text-sm text-blue-100/70 leading-relaxed">
                                        OCR pre-fill from uploaded brochures and PDFs cut the empty-field problem that
                                        killed most sessions at the first screen.
                                    </p>
                                </div>
                                <div className="pt-8 md:pt-0 md:px-6">
                                    <div className="text-7xl md:text-8xl font-black mb-3">10K+</div>
                                    <div className="text-blue-50 font-semibold tracking-wide mb-3">Active Users</div>
                                    <p className="text-sm text-blue-100/70 leading-relaxed">
                                        An automated quality gate kept AI-generated listings to a consistent standard, so
                                        the traveler side stayed trustworthy as supply tripled.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    id: 'context',
                    title: 'The Problem',
                    content: (
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <h3 className="text-4xl font-bold leading-tight text-slate-900">
                                Forms were failing creators. Search was failing travelers.
                            </h3>
                            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                                <p>
                                    Aarna is a two-sided travel marketplace. On the supply side, creators hosting
                                    experiences faced a massive entry barrier: inconsistent formats (PDFs, raw text),
                                    complex forms with high drop-off, and a moderation nightmare for admins. On the
                                    demand side, travelers had inventory but no way to decide.
                                </p>
                                <p>
                                    <strong className="text-slate-900">The core insight:</strong> both sides had the same
                                    problem — turning fuzzy intent into a structured, bookable thing. That&apos;s exactly
                                    what a conversational AI layer is good at. So I designed one assistant, Abhee, to
                                    work both sides of the marketplace.
                                </p>
                            </div>
                        </div>
                    )
                },
                {
                    id: 'creator-side',
                    title: 'Supply Side — Conversational Creation',
                    className: 'bg-slate-50',
                    content: (
                        <div>
                            <div className="text-center max-w-3xl mx-auto mb-20">
                                <h3 className="text-5xl font-bold mb-6 text-slate-900">From &quot;I do this&quot; to a sellable listing</h3>
                                <p className="text-xl text-slate-600">
                                    Replacing static inputs with an intelligent, guided dialogue that learns from the creator.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { title: 'Guided Prompts', desc: 'The assistant asks the questions a marketer would — extracting sellable details creators didn\'t know mattered.', metric: 'Drove the 3× listing volume' },
                                    { title: 'Generate & Verify', desc: 'OCR extracts data from brochure uploads to pre-fill drafts; creators verify instead of typing from scratch.', metric: 'Drove the 40% drop-off reduction' },
                                    { title: 'Quality Gate', desc: 'Automated scoring holds listings to platform standards before a human moderator ever sees them.', metric: 'Kept quality flat while supply tripled' }
                                ].map((card, i) => (
                                    <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-500/50 transition-colors shadow-sm flex flex-col">
                                        <h4 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-1">{card.desc}</p>
                                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">{card.metric}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                },
                {
                    id: 'flow',
                    content: (
                        <FlowGallery
                            eyebrow="Demand Side — Complete End-to-End Flow"
                            title="Intent → Discover → Compare → Plan → Book"
                            description="The traveler journey as designed: a single conversation with Abhee carries the user from an open-ended wish to a fully booked, day-wise trip — with comparison as a first-class step, because choosing is the hardest part of travel."
                            steps={flowSteps}
                            accent={ACCENT}
                        />
                    )
                },
                {
                    id: 'decisions',
                    title: 'Decisions & Tradeoffs',
                    className: 'bg-slate-50',
                    content: (
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Comparison as a first-class surface',
                                    text: 'Most travel products optimize browsing; travelers actually stall at choosing. I gave destination and plan comparison their own screens — match scores, moods, and costs side by side — rather than burying comparison in back-and-forth chat. Tradeoff: two extra surfaces to maintain, but the conversion moment deserved dedicated UI.'
                                },
                                {
                                    title: 'The plan is the source of truth',
                                    text: 'Flights, stays, and cabs render inside the day-wise plan instead of separate booking funnels. That constrained how much inventory detail each card can show — a real cost — but it means users never lose the trip while booking its parts.'
                                },
                                {
                                    title: 'One assistant, two sides',
                                    text: 'Abhee guides creators through listing and travelers through planning with the same conversational grammar. Reusing the pattern halved design and build effort — and made the marketplace feel like one product instead of two bolted together.'
                                },
                                {
                                    title: 'Emotion made scannable',
                                    text: '"Moments you\'ll remember" and match percentages translate fuzzy desire into comparable signals. It risks feeling reductive — so the underlying reasoning is always one tap away in the conversation.'
                                }
                            ].map((item) => (
                                <div key={item.title} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                                    <h4 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    )
                },
                {
                    id: 'reflection',
                    title: 'What I\'d Do Differently',
                    content: (
                        <div className="max-w-3xl">
                            <ul className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <li>
                                    <strong className="text-slate-900">Instrument the comparison step from day one.</strong>{' '}
                                    We measured listing creation rigorously but shipped the traveler comparison surfaces
                                    on intuition. I&apos;d want the same decision-level analytics on both sides.
                                </li>
                                <li>
                                    <strong className="text-slate-900">Test the quality gate with adversarial creators.</strong>{' '}
                                    A scoring system invites gaming. We caught this late; red-teaming the gate earlier
                                    would have hardened the listing standards before scale hit.
                                </li>
                            </ul>
                        </div>
                    )
                }
            ]}
        />
    );
}
