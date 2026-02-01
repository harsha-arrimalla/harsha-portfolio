'use client';

import { useInView as useIntersection } from '@/hooks/useInView';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import BackButton from '@/components/BackButton';
import Image from 'next/image';

export default function MiraeeCaseStudy() {
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
                    className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float-slow"
                />
                <div
                    className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-float-slower"
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
                        AI Product · Enterprise Travel
                    </span>

                    <h1
                        className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.95] tracking-tight text-black"
                    >
                        {'Miraee'.split('').map((char, i) => (
                            <span
                                key={i}
                                className={`inline-block transition-all duration-300 hover:text-blue-600 hover:-translate-y-2 ${heroInView ? 'animate-slide-up' : 'opacity-0'}`}
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
                        AI-powered travel companion for corporate employees that brings structure, transparency, and outcomes to business travel.
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
                            <div className="text-sm font-medium">UI/UX · AI Product Designer</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Type</div>
                            <div className="text-sm font-medium">Enterprise Travel</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Status</div>
                            <div className="text-sm font-medium">In Production</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Context</div>
                            <div className="text-sm font-medium">Corporate Workspaces</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl transition-all duration-1000 hover:scale-[1.01]">
                        <Image
                            src="/images/projects/miraee.png"
                            alt="Miraee Interface Preview"
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
                            Miraee is designed for corporate employees who frequently travel for meetings, client visits, and team offsites. It acts as a single system to plan travel, manage expenses, and capture outcomes for both employees and company heads.
                        </p>
                    </div>

                    <div ref={problemRef} className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 reveal ${problemInView ? 'active' : ''}`}>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-red-400">The Problem</h3>
                            <p className="text-gray-400 leading-relaxed italic mb-6">"Business travel was unsystematic and poorly governed."</p>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex gap-3">
                                    <span className="text-red-400">🚩</span>
                                    No clear hierarchy or planning for trips.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-red-400">🚩</span>
                                    Unnecessary extensions (2-day trips becoming 6-day stays).
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-red-400">🚩</span>
                                    High costs without clear justification or outcomes.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Core Insight</h3>
                            <p className="text-gray-400 leading-relaxed">
                                The real problem wasn’t booking travel — it was **decision-making and accountability**. Company heads lacked visibility, and employees lacked a system that considered their comfort alongside policy.
                            </p>
                            <p className="mt-4 text-gray-400 font-medium">
                                AI should act as a decision-support system, not just an automation tool.
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
                            A balanced ecosystem that provides freedom for employees and control for management.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-blue-500/50 transition-colors">
                            <h3 className="text-2xl font-bold mb-6 text-blue-400">For Employees</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li>• Plan trips based on purpose</li>
                                <li>• Independent booking (flights, hotels, cabs)</li>
                                <li>• Manage all expenses in one place</li>
                                <li>• Capture outcomes via voice or text</li>
                            </ul>
                        </div>
                        <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-purple-500/50 transition-colors">
                            <h3 className="text-2xl font-bold mb-6 text-purple-400">For Company Heads</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li>• Track real-time travel costs</li>
                                <li>• View trip outcomes, not just bills</li>
                                <li>• Approve requests with full context</li>
                                <li>• Measure real ROI of business travel</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section ref={processRef} className="py-32 px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">How Miraee Works</h2>

                    <div className="space-y-20">
                        <div className={`transition-all duration-1000 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Trip Initiation</h3>
                                    <p className="text-gray-400 mb-4">Miraee uses a dual-mode approach to capture intent:</p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-[#161821] p-4 rounded-xl border border-[#2A2A2A]">
                                            <div className="font-bold text-sm mb-2 text-blue-300">Proactive</div>
                                            <p className="text-xs text-gray-500">Detects meetings via calendar and generates smart plans automatically.</p>
                                        </div>
                                        <div className="bg-[#161821] p-4 rounded-xl border border-[#2A2A2A]">
                                            <div className="font-bold text-sm mb-2 text-blue-300">Reactive</div>
                                            <p className="text-xs text-gray-500">Employees start trips manually by entering intent and purpose.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 delay-150 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Planning & Policy Handling</h3>
                                    <p className="text-gray-400">
                                        Miraee suggests plans that balance employee preferences with company policy. Within-policy bookings are confirmed instantly, while exceptions are routed for context-aware approval.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 delay-300 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Outcome Capture</h3>
                                    <p className="text-gray-400">
                                        Post-trip, employees record outcomes via text or voice. Miraee's AI summarizes these insights, updating the company dashboard to reflect the trip's actual value.
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
                    <h2 className="text-4xl font-bold mb-16">Outcome & Impact</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1E1E22] to-[#0F0F11] border border-[#2A2A2A]">
                            <div className="text-5xl font-bold text-blue-400 mb-2">Live</div>
                            <div className="text-xl font-semibold mb-2">In Production</div>
                            <p className="text-gray-400 text-sm">Successfully deployed to corporate clients</p>
                        </div>
                        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1E1E22] to-[#0F0F11] border border-[#2A2A2A]">
                            <div className="text-2xl font-bold text-gray-300 mb-2">Unbiased</div>
                            <div className="text-xl font-semibold mb-2">Approval Flow</div>
                            <p className="text-gray-400 text-sm">Transparent decision-making for management</p>
                        </div>
                    </div>

                    <div className="mt-16 p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                        <p className="text-lg text-blue-100 italic">
                            “Miraee connects business travel decisions with real outcomes using AI-assisted, conversational UX.”
                        </p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-16 px-8 border-t border-[#2A2A2A]">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link
                        href="/projects/hita"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ← Previous: Hita
                    </Link>
                    <Link
                        href="/projects/aarna"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        Next: Aarna →
                    </Link>
                </div>
            </section>
        </div>
    );
}
