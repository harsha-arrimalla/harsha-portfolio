'use client';

import { useInView as useIntersection } from '@/hooks/useInView';
import Image from 'next/image';
import { AlertCircle, ShieldCheck, Lock } from 'lucide-react';
import FlowGallery, { FlowStep } from '@/components/FlowGallery';
import CaseStudyNav from '@/components/CaseStudyNav';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import IterationStrip from '@/components/IterationStrip';

const ACCENT = '#EA580C'; // orange-600 — Miraee brand accent

const flowSteps: FlowStep[] = [
    {
        src: '/images/projects/miraee/flow/02-flight-search-card.png',
        title: 'Conversational Flight Search',
        desc: 'The assistant answers intent in-line with curated flight cards and a "Price to Beat" anchor, so users judge every option against a benchmark.',
        phase: 'Search',
    },
    {
        src: '/images/projects/miraee/flow/04-flight-details.png',
        title: 'Flight Details, Expanded In-Place',
        desc: 'Full fare, baggage, and segment details expand inside the conversation — no context switch to a separate results site.',
        phase: 'Search',
    },
    {
        src: '/images/projects/miraee/flow/05-reason-for-selection.png',
        title: 'Policy Check & Reasoning',
        desc: 'When the only viable option is out of policy, the assistant explains exactly why, shows the cost delta, and routes an approval — before booking.',
        phase: 'Govern',
    },
    {
        src: '/images/projects/miraee/flow/06-addons-chat.png',
        title: 'Add-ons in the Same Thread',
        desc: 'Seat, insurance, and trip-protection add-ons are offered as compact cards inside the chat instead of an upsell funnel.',
        phase: 'Refine',
    },
    {
        src: '/images/projects/miraee/flow/07-hotel-options.png',
        title: 'Hotel Options Overlay',
        desc: 'Hotels follow the same card grammar as flights — one pattern to learn, policy state visible on every option.',
        phase: 'Refine',
    },
    {
        src: '/images/projects/miraee/flow/08-hotel-map-view.png',
        title: 'Hotel Map View',
        desc: 'A map overlay grounds hotel choices in distance to the actual meeting location — the thing corporate travelers really optimize for.',
        phase: 'Refine',
    },
    {
        src: '/images/projects/miraee/flow/01-chat-intent.png',
        title: 'Group Booking Summary in Chat',
        desc: 'For team trips, the assistant assembles the entire multi-traveler booking into one reviewable summary within the conversation.',
        phase: 'Book',
    },
    {
        src: '/images/projects/miraee/flow/09-booking-summary.png',
        title: 'The Booking Summary Card',
        desc: 'One card holds the whole trip — flight, hotel, car, add-ons — each line item carrying its own policy state and price.',
        phase: 'Book',
    },
    {
        src: '/images/projects/miraee/flow/10-all-items-approved.png',
        title: 'Approval, With Reasons',
        desc: 'Approvals show the manager\'s reasoning and conditions ("client-facing trip, this trip only"), not just a green tick.',
        phase: 'Govern',
    },
    {
        src: '/images/projects/miraee/flow/11-cancellation-failed.png',
        title: 'When Payment Fails',
        desc: 'Failure states separate the conversation from the agent activity stream: what failed, what\'s paid, what\'s pending, and what the agent is retrying.',
        phase: 'Recover',
    },
    {
        src: '/images/projects/miraee/flow/03-workspace-flights.png',
        title: 'Workspace View',
        desc: 'A persistent workspace holds structured trip state next to the chat, so long conversations never bury the actual booking.',
        phase: 'System',
    },
    {
        src: '/images/projects/miraee/flow/12-light-theme.png',
        title: 'Theming & Accessibility',
        desc: 'The full component system works in light and dark themes with WCAG-AA contrast on every conversational surface.',
        phase: 'System',
    },
];

const patterns = [
    {
        title: '"Price to Beat" — an anchor, not a filter',
        image: '/images/projects/miraee/flow/02-flight-search-card.png',
        evidence:
            'Support tickets showed travelers repeatedly asking "is this a good price?" — and 3 of the 4 travel admins I interviewed confirmed agents were manually screenshotting comparison fares to reassure them.',
        problem: 'Corporate travelers don\'t want 200 flight results. They want to know: is this a fair price?',
        decision:
            'I put a single benchmark price — the "Price to Beat" — inline at the top of the results conversation instead of burying comparison in a separate matrix screen. Every card is judged against one number.',
        tradeoff:
            'I chose an inline anchor over a full comparison table because in a chat surface, horizontal comparison collapses on mobile. The anchor keeps the decision one-dimensional: beat it, or justify it.',
    },
    {
        title: 'The Booking Summary card system',
        image: '/images/projects/miraee/flow/09-booking-summary.png',
        evidence:
            'Admin interviews kept returning to the same complaint: approvers were reconstructing trips from three separate confirmation emails before they could say yes to anything.',
        problem: 'A trip is many bookings — flight, hotel, car, add-ons — but the traveler and the approver both think of it as one thing.',
        decision:
            'One collapsible card holds the entire trip. Each line item carries its own policy chip (in policy / out of policy / flex), so the summary doubles as the compliance view.',
        tradeoff:
            'Line items expand in place rather than deep-linking to sub-screens. That costs some detail density but means the confirm action never leaves the user\'s sight.',
    },
    {
        title: 'Policy transparency — the trust layer',
        image: '/images/projects/miraee/flow/05-reason-for-selection.png',
        evidence:
            'I watched two beta users abandon bookings after a policy rejection that carried no explanation. Both said versions of the same thing: "I don\'t know what I did wrong."',
        problem: 'AI that silently books (or silently blocks) destroys trust on the first exception.',
        decision:
            'Every policy decision is surfaced with its reasoning: what rule fired, the exact cost delta, and why the assistant still recommends the option. Approvals return with the manager\'s reason and conditions attached.',
        tradeoff:
            'Showing reasoning adds vertical bulk to the chat. I accepted that cost on exception paths only — the happy path stays terse, the exception path over-explains. That asymmetry is deliberate.',
    },
    {
        title: 'Designing for failure',
        image: '/images/projects/miraee/flow/11-cancellation-failed.png',
        evidence:
            'The early silent-failure version made users refresh mid-booking — we logged 14 duplicate-hold incidents in the first week of beta. Silence wasn\'t neutral; it was actively creating errors.',
        problem: 'Multi-step agent bookings fail in the middle: one of three bookings succeeds, payment locks, providers time out.',
        decision:
            'Failures split into two channels — the conversation explains the human consequence (what\'s paid, what\'s pending), while a separate agent activity stream shows what the system is doing about it ("retrying payment… attempting again automatically").',
        tradeoff:
            'Separating conversation from activity stream duplicates some status information, but merging them made the chat read like a server log. Humans get the summary; the stream is there for the skeptical.',
    },
];

export default function MiraeeCaseStudy() {
    const [heroRef, heroInView] = useIntersection({ threshold: 0.1 });
    const [contextRef, contextInView] = useIntersection({ threshold: 0.1 });
    const [problemRef, problemInView] = useIntersection({ threshold: 0.1 });
    const [ownedRef, ownedInView] = useIntersection({ threshold: 0.1 });
    const [patternsRef, patternsInView] = useIntersection({ threshold: 0.05 });
    const [resultsRef, resultsInView] = useIntersection({ threshold: 0.1 });
    const [reflectionRef, reflectionInView] = useIntersection({ threshold: 0.1 });

    return (
        <div className="min-h-screen bg-white text-black">

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-screen flex items-center justify-center overflow-hidden bg-white text-black"
            >
                <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-float-slower" />

                <div
                    className={`max-w-6xl mx-auto px-8 text-center z-10 transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="flex justify-center mb-8">
                        <div className={`h-[2px] bg-black transition-all duration-1000 ${heroInView ? 'w-16' : 'w-0'}`} />
                    </div>

                    <span className={`block text-sm font-medium text-gray-500 uppercase tracking-[0.3em] mb-6 animate-fade-in-right ${heroInView ? 'opacity-100' : 'opacity-0'}`}>
                        Flagship Case Study · AI Travel Assistant · Shipped
                    </span>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.95] tracking-tight text-black">
                        {'Miraee'.split('').map((char, i) => (
                            <span
                                key={i}
                                className={`inline-block transition-all duration-300 hover:text-orange-600 hover:-translate-y-2 ${heroInView ? 'animate-slide-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${i * 0.05}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>

                    <p
                        className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up ${heroInView ? 'active' : ''}`}
                        style={{ animationDelay: '0.4s' }}
                    >
                        Designing an AI travel assistant where corporate travel — search, policy,
                        booking, approval, and recovery — happens inside one conversation.
                    </p>
                </div>

                <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 ${heroInView ? 'opacity-50' : 'opacity-0'}`}>
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Project Info */}
            <section className="py-12 border-y border-gray-100 bg-gray-50">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Role</div>
                            <div className="text-sm font-medium text-black">Senior Product Designer — sole designer, AI booking pod</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Type</div>
                            <div className="text-sm font-medium text-black">Enterprise Travel · Mobile</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Timeline</div>
                            <div className="text-sm font-medium text-black">~7 Months, Concept → GA</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Status</div>
                            <div className="text-sm font-medium text-black">In Production</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NDA note */}
            <section className="py-6 bg-white">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-amber-50 border border-amber-200">
                        <Lock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-900 leading-relaxed">
                            <strong>A note on confidentiality.</strong> Miraee is company work and parts of it are
                            covered by NDA. The screens below are recreated for portfolio use, proprietary numbers
                            and unreleased features are omitted, and I describe patterns rather than internal data.
                            A deeper walkthrough is available on request.
                        </p>
                    </div>
                </div>
            </section>

            {/* Context & Problem */}
            <section ref={contextRef} className="py-24 px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className={`transition-all duration-1000 reveal ${contextInView ? 'active' : ''}`}>
                        <SectionHeading
                            kicker="The Context"
                            title="Business travel, without a system"
                            description="Miraee is an AI assistant for corporate employees who travel for meetings, client visits, and offsites. Instead of a booking site plus an expense tool plus an approval email chain, the entire trip lives in one conversational surface — for the traveler and for the people governing the budget."
                        />
                    </div>

                    <div ref={problemRef} className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 reveal ${problemInView ? 'active' : ''}`}>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-red-500">The Problem</h3>
                            <p className="text-gray-500 leading-relaxed italic mb-6">&quot;Business travel was unsystematic and poorly governed.&quot;</p>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex gap-3 items-start">
                                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                    <span>Booking, policy, and approval lived in different tools with no shared context.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                    <span>Policy was enforced after the fact — travelers found out a booking was non-compliant when finance rejected it.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                    <span>High costs without clear justification, and approvers deciding with zero context.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-600">Core Insight</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The real problem wasn&apos;t booking travel — it was <strong className="text-gray-900">decision-making and accountability</strong>.
                                If the assistant could carry policy, price context, and approval reasoning
                                <em> inside</em> the conversation, both sides could trust the outcome.
                            </p>
                            <p className="mt-4 text-gray-800 font-medium">
                                AI should act as a decision-support system, not just an automation tool.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research inputs */}
            <section className="py-24 px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading
                        kicker="The Research"
                        title="Grounded in calls, tickets, and a beta that argued back"
                        description="Before and during design, I went to where the failures already were — support conversations, admin workflows, and a long-running internal beta."
                    />
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { stat: '~12', label: 'Support calls observed', desc: 'Screen-share sessions with travel agents over two weeks, watching real bookings stall.' },
                            { stat: '4', label: 'Admin interviews', desc: '45-minute interviews with corporate travel admins across two client companies.' },
                            { stat: '~18', label: 'Beta users, 6 weeks', desc: 'A weekly feedback loop with internal dogfood users through the entire beta.' },
                            { stat: '~200', label: 'Failure tickets reviewed', desc: 'Every support ticket tagged "booking-failure" from the previous quarter.' },
                        ].map((item) => (
                            <div key={item.label} className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                                <div className="text-4xl font-black text-orange-600 mb-1">{item.stat}</div>
                                <div className="text-sm font-bold text-black mb-2">{item.label}</div>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What I owned */}
            <section ref={ownedRef} className="py-24 px-8 bg-gray-50 border-y border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className={`transition-all duration-1000 reveal ${ownedInView ? 'active' : ''}`}>
                        <SectionHeading kicker="My Role" title="What I owned" />
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'The conversational booking experience',
                                    desc: 'End-to-end interaction design of the chat surface — flight, hotel, and car search cards, overlays, add-ons, and the booking summary system.',
                                },
                                {
                                    title: 'The policy & trust layer',
                                    desc: 'How policy checks, out-of-policy reasoning, approvals, and exceptions are surfaced in conversation — designed with PM and engineering against real policy rules.',
                                },
                                {
                                    title: 'Failure & recovery states',
                                    desc: 'The messy middle: partial bookings, payment failures, cancellations, and the agent activity stream that shows what the system is doing about them.',
                                },
                            ].map((item) => (
                                <div key={item.title} className="p-7 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                    <ShieldCheck className="w-6 h-6 text-orange-600 mb-4" />
                                    <h3 className="font-bold text-black mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-sm text-gray-500">
                            I was the sole designer on the AI booking pod, working with 2 PMs, 6 engineers,
                            and 2 AI/ML engineers. Conversational architecture and model behavior were shared
                            decisions — the interaction patterns and visual system below are mine.
                        </p>
                    </div>
                </div>
            </section>

            {/* The messy middle — working iterations */}
            <section className="py-28 px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading
                        kicker="The Process"
                        title="The messy middle"
                        description="AI products don't fail in polished mockups — they fail in the turns between them. Two threads of working material: the intake conversation that shapes every trip, and the failure family that ended up defining the trust model."
                    />

                    <div className="space-y-20">
                        <IterationStrip
                            heading="Scripting the conversation before the UI"
                            intro="Before any visual design, I scripted the intake dialogue turn by turn — destination, dates, duration, search scope, travelers, purpose. The first version asked open-ended questions, and internal logs showed ~40% of free-text answers were unparseable by the intent classifier. Switching every turn to structured quick-reply chips cut that to near zero — the rule became: never ask open-ended when chips can carry the answer."
                            items={[
                                {
                                    src: '/images/projects/miraee/iterations/flight-options-v1.png',
                                    label: 'Turns 1–3',
                                    verdict: 'Destination, dates, and duration — each confirmed back to the user before moving on, so a wrong assumption never travels three turns deep.',
                                    status: 'evolved',
                                },
                                {
                                    src: '/images/projects/miraee/iterations/flight-options-v2.png',
                                    label: 'Traveler count',
                                    verdict: 'The clarifying turn: group trips need explicit traveler counts (adults, children, infants) before search — asking later invalidates results.',
                                    status: 'evolved',
                                },
                                {
                                    src: '/images/projects/miraee/iterations/flight-options-v3.png',
                                    label: 'Trip purpose',
                                    verdict: 'Purpose ("client meeting" vs "offsite") became an intake question once we realized policy rules depend on it — it gates the whole downstream flow.',
                                    status: 'shipped',
                                },
                            ]}
                        />

                        <IterationStrip
                            heading="The failure family"
                            intro="Multi-step agent bookings fail partially: one of three items succeeds, payment locks, a provider times out. I designed failure as a severity ladder rather than one generic error — each level answers what's paid, what's pending, and what happens next."
                            items={[
                                {
                                    src: '/images/projects/miraee/iterations/failure-v2.png',
                                    label: 'Total failure',
                                    verdict: 'Nothing booked: a single failed state, total amount held, and the agent stream showing the automatic retry.',
                                    status: 'evolved',
                                },
                                {
                                    src: '/images/projects/miraee/iterations/failure-v1.png',
                                    label: 'Partial failure',
                                    verdict: 'The hard case — flight succeeded, hotel failed, retry exhausted. Per-item states, paid vs. pending split, and escalation to a human support agent.',
                                    status: 'evolved',
                                },
                                {
                                    src: '/images/projects/miraee/flow/11-cancellation-failed.png',
                                    label: 'Shipped state',
                                    verdict: 'The final model: conversation explains the human consequence, the agent activity stream shows the recovery work — two channels, one truth.',
                                    status: 'shipped',
                                },
                            ]}
                        />

                        {/* Tested before ship */}
                        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
                            <h4 className="text-xl font-bold text-black mb-3">Tested before ship — and caught by it</h4>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                Five moderated usability sessions pre-ship, then a 3-week UAT with two pilot client
                                companies. The biggest catch: users missed the policy badge entirely — it sat above
                                the fare where nobody looked. I moved it inline next to the price and re-tested:
                                5 of 5 participants noticed it. Small move, but it&apos;s the reason the compliance
                                layer works at all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pattern teardowns */}
            <section ref={patternsRef} className="py-28 px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className={`max-w-3xl mb-8 transition-all duration-1000 ${patternsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <SectionHeading
                            kicker="Decisions &amp; Tradeoffs"
                            title="Four patterns that carry the product"
                            description="Each pattern below states the problem, the decision, and the tradeoff I made — because in AI UX the interesting part is never the happy path."
                        />
                    </div>

                    <div className="space-y-24">
                        {patterns.map((pattern, i) => (
                            <div
                                key={pattern.title}
                                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
                            >
                                <div className="relative aspect-[9/16] max-w-[340px] mx-auto w-full rounded-[28px] overflow-hidden border border-gray-200 bg-gray-50 shadow-lg">
                                    <Image
                                        src={pattern.image}
                                        alt={pattern.title}
                                        fill
                                        sizes="(max-width: 768px) 90vw, 340px"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <span className="text-sm font-black text-orange-600 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                                    <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-6 text-black">{pattern.title}</h3>
                                    <dl className="space-y-5">
                                        <div>
                                            <dt className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Problem</dt>
                                            <dd className="text-gray-600 leading-relaxed">{pattern.problem}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Evidence</dt>
                                            <dd className="text-gray-600 leading-relaxed">{pattern.evidence}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">Decision</dt>
                                            <dd className="text-gray-600 leading-relaxed">{pattern.decision}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs font-bold uppercase tracking-widest text-orange-600/70 mb-1.5">Tradeoff</dt>
                                            <dd className="text-gray-700 leading-relaxed font-medium">{pattern.tradeoff}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete E2E flow */}
            <section className="py-28 px-8 bg-gray-50 border-y border-gray-100 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <FlowGallery
                        eyebrow="Complete End-to-End Flow"
                        title="From intent to recovery, in one conversation"
                        description="The full journey as shipped: search with a price anchor, refine with add-ons and hotels, book through the summary card, govern through policy and approvals — and recover when the real world fails mid-booking."
                        steps={flowSteps}
                        accent={ACCENT}
                    />
                </div>
            </section>

            {/* Impact */}
            <section ref={resultsRef} className="py-28 px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeading align="center" kicker="The Outcome" title="Shipped, and built to be trusted" />
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-10 rounded-2xl bg-gray-50 border border-gray-200">
                            <div className="text-4xl font-black text-orange-600 mb-2">6 Clients</div>
                            <div className="text-lg font-semibold mb-2 text-black">Live in the First Quarter</div>
                            <p className="text-gray-500 text-sm">Six corporate clients in production within the first quarter after GA.</p>
                        </div>
                        <div className="p-10 rounded-2xl bg-gray-50 border border-gray-200">
                            <div className="text-4xl font-black text-black mb-2">1 System</div>
                            <div className="text-lg font-semibold mb-2 text-black">Card Grammar</div>
                            <p className="text-gray-500 text-sm">Flights, hotels, cars, add-ons, and approvals share one component grammar — new booking types slot in without new patterns.</p>
                        </div>
                        <div className="p-10 rounded-2xl bg-gray-50 border border-gray-200">
                            <div className="text-4xl font-black text-black mb-2">0 Silent</div>
                            <div className="text-lg font-semibold mb-2 text-black">Policy Decisions</div>
                            <p className="text-gray-500 text-sm">Every block, exception, and approval carries visible reasoning — the trust layer is the product.</p>
                        </div>
                    </div>

                    <figure className="mt-12 p-8 rounded-2xl bg-gray-50 border border-gray-200 text-left">
                        <blockquote className="text-xl md:text-2xl font-medium text-black leading-relaxed">
                            &ldquo;This is the first tool our agents don&apos;t complain about.&rdquo;
                        </blockquote>
                        <figcaption className="mt-3 text-sm text-gray-500">VP of Operations, client company</figcaption>
                    </figure>

                    <p className="mt-8 text-sm text-gray-400">
                        Adoption and efficiency metrics are measured internally and NDA-restricted — I walk
                        through them in interviews.
                    </p>
                </div>
            </section>

            {/* Reflection */}
            <section ref={reflectionRef} className="py-28 px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <div className={`transition-all duration-1000 reveal ${reflectionInView ? 'active' : ''}`}>
                        <SectionHeading kicker="Reflection" title="What I'd do differently" />
                        <ul className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <li>
                                <strong className="text-black">Design the failure states first.</strong> I designed the
                                happy path, then retrofitted recovery. The payment-failure work ended up defining the
                                product&apos;s trust model — it should have been the starting point.
                            </li>
                            <li>
                                <strong className="text-black">Prototype with the real model earlier.</strong> Static
                                mocks hid how variable AI responses stretch card layouts. Testing with live model output
                                sooner would have saved a layout-system rework.
                            </li>
                            <li>
                                <strong className="text-black">Push harder on the approver&apos;s side.</strong> Most of my
                                iteration budget went to the traveler. The approval experience shipped well, but it
                                deserved the same depth of exception-path design.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Previous / Next Navigation */}
            <CaseStudyNav current="miraee" />

            <Footer />
        </div>
    );
}
