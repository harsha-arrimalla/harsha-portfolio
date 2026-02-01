'use client';

import { useInView as useIntersection } from '@/hooks/useInView';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import BackButton from '@/components/BackButton';
import Image from 'next/image';

export default function HitaCaseStudy() {
    const [heroRef, heroInView] = useIntersection({ threshold: 0.1 });
    const [overviewRef, overviewInView] = useIntersection({ threshold: 0.1 });
    const [contextRef, contextInView] = useIntersection({ threshold: 0.1 });
    const [problemRef, problemInView] = useIntersection({ threshold: 0.1 });
    const [solutionRef, solutionInView] = useIntersection({ threshold: 0.1 });
    const [processRef, processInView] = useIntersection({ threshold: 0.1 });
    const [resultsRef, resultsInView] = useIntersection({ threshold: 0.1 });

    return (
        <div className="min-h-screen bg-[#0A0B10] text-white">
            <Navigation />
            <BackButton />

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
                        Personal Product · AI Travel Tech
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
            <section className="py-12 border-y border-[#2A2A2A] bg-[#0F1117]">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Role</div>
                            <div className="text-sm font-medium">Product Designer · AI Builder</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Timeline</div>
                            <div className="text-sm font-medium">Designed & Built in 3-4 Days</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Type</div>
                            <div className="text-sm font-medium">Personal Product / R&D</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Focus</div>
                            <div className="text-sm font-medium">Conversational UX</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl transition-all duration-1000 hover:scale-[1.01]">
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
            <section ref={contextRef} className="py-32 px-8">
                <div className="max-w-4xl mx-auto">
                    <div className={`transition-all duration-1000 reveal ${contextInView ? 'active' : ''}`}>
                        <h2 className="text-4xl font-bold mb-8">The Context</h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-16">
                            Hita is a self-initiated product where I designed and built the entire app end-to-end in just 4 days. The goal was to explore how conversational AI could replace rigid, form-heavy trip-planning tools with something that accounts for heat, rain, and real-world fatigue.
                        </p>
                    </div>

                    <div ref={problemRef} className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 reveal ${problemInView ? 'active' : ''}`}>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-400">The Problem</h3>
                            <p className="text-gray-400 leading-relaxed italic mb-6">"Most travel tools feel form-heavy and mechanical."</p>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex gap-3">
                                    <span className="text-orange-400">🚩</span>
                                    Rigid itineraries that don't adapt to weather or mood.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-orange-400">🚩</span>
                                    Impersonal and transactional booking flows.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-orange-400">🚩</span>
                                    Too many exhausting decisions required upfront.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-indigo-400">Core Insight</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Trip planning is not configuration — it’s conversation. People don't think in dates and checkboxes; they think in intents like **"We'll go out in the evening when it's cooler."**
                            </p>
                            <p className="mt-4 text-gray-400 font-medium italic">
                                AI should act as a travel buddy, not a rules engine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section ref={solutionRef} className="py-32 px-8 bg-[#0F1117]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold mb-6">The Solution</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A conversation-first experience that understands intent and adapts on the fly.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-indigo-500/50 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-indigo-400">Intent Detection</h3>
                            <p className="text-gray-400 text-sm">Understands natural language "friend-like" requests instead of rigid filters.</p>
                        </div>
                        <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-blue-500/50 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-blue-400">Context Awareness</h3>
                            <p className="text-gray-400 text-sm">Adapts suggestions based on weather, time of day, and predicted user fatigue.</p>
                        </div>
                        <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-purple-500/50 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-purple-400">Dynamic Evolution</h3>
                            <p className="text-gray-400 text-sm">The plan evolves through casual conversation rather than static screens.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section ref={processRef} className="py-32 px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Execution & Design</h2>

                    <div className="space-y-20">
                        <div className={`transition-all duration-1000 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Conversation First</h3>
                                    <p className="text-gray-400">
                                        I replaced complex setup forms with a single chat interface. This reduces cognitive load and allows the AI to extract context naturally.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 delay-150 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Contextual Scheduling</h3>
                                    <p className="text-gray-400">
                                        Unlike rigid calendars, Hita suggests activities based on real-world constraints—like suggesting indoor activities during afternoon heat or local snacks nearby when time is short.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 delay-300 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Speed + Clarity</h3>
                                    <p className="text-gray-400">
                                        This was a 4-day build covering UX flows, AI behavior, and app structure. The goal was to prove that conversation is a powerful interface when designed intentionally.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact */}
            <section ref={resultsRef} className="py-32 px-8 bg-[#0F1117]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16">Outcome</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1E1E22] to-[#0F0F11] border border-[#2A2A2A]">
                            <div className="text-xl font-bold text-indigo-400 mb-2">Proof of Concept</div>
                            <p className="text-gray-400 text-sm italic">"Demonstrated how AI can make planning feel human."</p>
                        </div>
                        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1E1E22] to-[#0F0F11] border border-[#2A2A2A]">
                            <div className="text-xl font-bold text-gray-300 mb-2">Fast Validation</div>
                            <p className="text-gray-400 text-sm">Validated that user trust increases with contextual reasoning.</p>
                        </div>
                    </div>

                    <div className="mt-16 p-8 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
                        <p className="text-lg text-indigo-100 italic">
                            “Hita explores how conversational AI can make travel planning feel human, flexible, and effortless.”
                        </p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-16 px-8 border-t border-[#2A2A2A]">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ← Back to Work
                    </Link>
                    <Link
                        href="/projects/miraee"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        Next: Miraee →
                    </Link>
                </div>
            </section>
        </div>
    );
}
