'use client';

import { useInView as useIntersection } from '@/hooks/useInView';
import Image from 'next/image';
import { AlertCircle } from 'lucide-react';
import CaseStudyNav from '@/components/CaseStudyNav';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

export default function HitaCaseStudy() {
    const [heroRef, heroInView] = useIntersection({ threshold: 0.1 });
    const [overviewRef, overviewInView] = useIntersection({ threshold: 0.1 });
    const [contextRef, contextInView] = useIntersection({ threshold: 0.1 });
    const [problemRef, problemInView] = useIntersection({ threshold: 0.1 });
    const [solutionRef, solutionInView] = useIntersection({ threshold: 0.1 });
    const [processRef, processInView] = useIntersection({ threshold: 0.1 });
    const [resultsRef, resultsInView] = useIntersection({ threshold: 0.1 });

    return (
        <div className="min-h-screen bg-white text-black">

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-screen flex items-center justify-center overflow-hidden bg-white text-black"
            >
                {/* Animated gradient orbs */}
                <div
                    className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-float-slow"
                />
                <div
                    className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-float-slower"
                />

                <div
                    className={`max-w-6xl mx-auto px-8 text-center z-10 transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="flex justify-center mb-8">
                        <div
                            className={`h-[2px] bg-black transition-all duration-1000 ${heroInView ? 'w-16' : 'w-0'}`}
                        />
                    </div>

                    <span
                        className={`block text-sm font-medium text-gray-500 uppercase tracking-[0.3em] mb-6 animate-fade-in-right ${heroInView ? 'opacity-100' : 'opacity-0'}`}
                    >
                        Self-Initiated Side Project · AI Travel · Not a Mondee Product
                    </span>

                    <h1
                        className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.95] tracking-tight text-black"
                    >
                        {'Hita'.split('').map((char, i) => (
                            <span
                                key={i}
                                className={`inline-block transition-all duration-300 hover:text-indigo-600 hover:-translate-y-2 ${heroInView ? 'animate-slide-up' : 'opacity-0'}`}
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
                        Hita is an AI travel companion that plans trips the way a friend would — conversational, contextual, and flexible.
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 ${heroInView ? 'opacity-50' : 'opacity-0'}`}>
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 pointer-events-none" />
            </section>

            {/* Project Info */}
            <section className="py-12 border-y border-gray-100 bg-gray-50">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Role</div>
                            <div className="text-sm font-medium text-black">Product Designer · AI Builder</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Type</div>
                            <div className="text-sm font-medium text-black">Self-Initiated Product</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Status</div>
                            <div className="text-sm font-medium text-black">Working Prototype</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Context</div>
                            <div className="text-sm font-medium text-black">Built End-to-End in 4 Days</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl transition-all duration-1000 hover:scale-[1.01] border border-gray-100">
                        <Image
                            src="/images/projects/hita.png"
                            alt="Hita Interface Preview"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Context & Problem */}
            <section ref={contextRef} className="py-32 px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className={`transition-all duration-1000 reveal ${contextInView ? 'active' : ''}`}>
                        <SectionHeading
                            kicker="The Context"
                            title="Designed and built end-to-end in four days"
                            description="Hita is a self-initiated product where I designed and built the entire app end-to-end in just 4 days. The goal was to explore how conversational AI could replace rigid, form-heavy trip-planning tools with something that accounts for heat, rain, and real-world fatigue."
                        />
                    </div>

                    <div ref={problemRef} className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 reveal ${problemInView ? 'active' : ''}`}>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-400">The Problem</h3>
                            <p className="text-gray-500 leading-relaxed italic mb-6">"Most travel tools feel form-heavy and mechanical."</p>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex gap-3 items-start">
                                    <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                                    <span>Rigid itineraries that don't adapt to weather or mood.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                                    <span>Impersonal and transactional booking flows.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                                    <span>Too many exhausting decisions required upfront.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-indigo-500">Core Insight</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Trip planning is not configuration — it’s conversation. People don't think in dates and checkboxes; they think in intents like **"We'll go out in the evening when it's cooler."**
                            </p>
                            <p className="mt-4 text-gray-800 font-medium italic">
                                AI should act as a travel buddy, not a rules engine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section ref={solutionRef} className="py-32 px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading
                        align="center"
                        kicker="The Solution"
                        title="A conversation-first experience"
                        description="Understands intent and adapts on the fly, instead of asking users to configure their trip upfront."
                        className="mb-20"
                    />

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-10 rounded-3xl bg-white border border-gray-200 hover:border-indigo-500/50 transition-colors shadow-sm">
                            <h3 className="text-xl font-bold mb-4 text-indigo-500">Intent Detection</h3>
                            <p className="text-gray-600 text-sm">Understands natural language "friend-like" requests instead of rigid filters.</p>
                        </div>
                        <div className="p-10 rounded-3xl bg-white border border-gray-200 hover:border-blue-500/50 transition-colors shadow-sm">
                            <h3 className="text-xl font-bold mb-4 text-blue-500">Context Awareness</h3>
                            <p className="text-gray-600 text-sm">Adapts suggestions based on weather, time of day, and predicted user fatigue.</p>
                        </div>
                        <div className="p-10 rounded-3xl bg-white border border-gray-200 hover:border-purple-500/50 transition-colors shadow-sm">
                            <h3 className="text-xl font-bold mb-4 text-purple-500">Dynamic Evolution</h3>
                            <p className="text-gray-600 text-sm">The plan evolves through casual conversation rather than static screens.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 12-agent architecture */}
            <section className="py-28 px-8 bg-[#0B0B14] text-white overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading
                        kicker="The System"
                        title="Twelve agents, one conversation"
                        description="Under the single chat surface, Hita runs an orchestrator that routes each turn to specialized agents. The user never sees the machinery — they see one companion that happens to know flights, weather, budgets, and when to say no."
                    />

                    {/* Orchestrator */}
                    <div className="rounded-2xl border border-indigo-400/40 bg-indigo-500/10 px-6 py-5 text-center mb-4">
                        <div className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-300 mb-1">Orchestrator</div>
                        <p className="text-sm text-white/60">Parses each turn, routes to agents, merges their outputs into one reply</p>
                    </div>
                    <div className="flex justify-center mb-4" aria-hidden="true">
                        <div className="w-px h-6 bg-indigo-400/40" />
                    </div>

                    {/* Agent lanes */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            {
                                lane: 'Understand',
                                agents: [
                                    ['Intent Parser', 'Turns "somewhere cool this evening" into structured intent'],
                                    ['Context & Memory', 'Carries the trip state and past preferences across turns'],
                                    ['Preference Profile', 'Learns pace, budget comfort, and food constraints'],
                                ],
                            },
                            {
                                lane: 'Plan',
                                agents: [
                                    ['Itinerary Planner', 'Builds and re-sequences the day around fixed anchors'],
                                    ['Weather & Time', 'Shifts outdoor plans around heat, rain, and daylight'],
                                    ['Local Discovery', 'Finds places and experiences near the current plan'],
                                ],
                            },
                            {
                                lane: 'Act',
                                agents: [
                                    ['Flights', 'Searches and holds flight options'],
                                    ['Stays', 'Matches stays to location, budget, and vibe'],
                                    ['Transport', 'Plans the last mile between plan items'],
                                ],
                            },
                            {
                                lane: 'Trust',
                                agents: [
                                    ['Budget Guard', 'Tracks spend against the stated budget before booking'],
                                    ['Safety & Guardrails', 'Blocks hallucinated places and impossible routings'],
                                    ['Summarizer', 'Compresses agent activity into the reply the user reads'],
                                ],
                            },
                        ].map((lane) => (
                            <div key={lane.lane} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300/80 mb-3 text-center">{lane.lane}</div>
                                <div className="space-y-3">
                                    {lane.agents.map(([name, desc]) => (
                                        <div key={name} className="rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-3">
                                            <div className="text-sm font-bold text-white mb-0.5">{name}</div>
                                            <div className="text-[11px] leading-relaxed text-white/50">{desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Conversation vs activity + stack */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                            <h3 className="text-lg font-bold mb-3 text-white">Conversation ≠ activity stream</h3>
                            <p className="text-sm text-white/60 leading-relaxed">
                                The chat only ever shows the Summarizer&apos;s human-readable reply. What the twelve
                                agents actually did each turn lives in a separate activity layer — inspectable when
                                you want proof, invisible when you want a friend. Merging the two made every answer
                                read like a server log; separating them is the core trust decision of the product.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                            <h3 className="text-lg font-bold mb-3 text-white">Designed and built solo</h3>
                            <p className="text-sm text-white/60 leading-relaxed mb-4">
                                The whole system — design, frontend, backend, and agent orchestration — is my own
                                build, shipped with an AI-first workflow (Claude Code for scaffolding and iteration,
                                Figma for the design system).
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Next.js 15', 'Expo React Native', 'Fastify', 'Supabase', 'Claude API', 'Claude Code'].map((t) => (
                                    <span key={t} className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-200">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section ref={processRef} className="py-32 px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading align="center" kicker="The Process" title="Execution & design" />

                    <div className="space-y-20">
                        <div className={`transition-all duration-1000 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-black">Conversation First</h3>
                                    <p className="text-gray-600">
                                        I replaced complex setup forms with a single chat interface. This reduces cognitive load and allows the AI to extract context naturally.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 delay-150 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-black">Contextual Scheduling</h3>
                                    <p className="text-gray-600">
                                        Unlike rigid calendars, Hita suggests activities based on real-world constraints—like suggesting indoor activities during afternoon heat or local snacks nearby when time is short.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 delay-300 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-black">Speed + Clarity</h3>
                                    <p className="text-gray-600">
                                        This was a 4-day build covering UX flows, AI behavior, and app structure. The goal was to prove that conversation is a powerful interface when designed intentionally.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact */}
            <section ref={resultsRef} className="py-32 px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeading align="center" kicker="The Outcome" title="What four days proved" />
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <div className="text-xl font-bold text-indigo-500 mb-2">Proof of Concept</div>
                            <p className="text-gray-500 text-sm italic">"Demonstrated how AI can make planning feel human."</p>
                        </div>
                        <div className="p-10 rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <div className="text-xl font-bold text-gray-800 mb-2">Fast Validation</div>
                            <p className="text-gray-500 text-sm">Validated that user trust increases with contextual reasoning.</p>
                        </div>
                    </div>

                    <div className="mt-16 p-8 rounded-2xl bg-indigo-50 border border-indigo-100">
                        <p className="text-lg text-indigo-800 italic">
                            “Hita explores how conversational AI can make travel planning feel human, flexible, and effortless.”
                        </p>
                    </div>
                </div>
            </section>

            {/* Previous / Next Navigation */}
            <CaseStudyNav current="hita" />

            <Footer />
        </div>
    );
}
