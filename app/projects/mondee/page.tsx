'use client';

import { useInView as useIntersection } from '@/hooks/useInView';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import BackButton from '@/components/BackButton';
import Image from 'next/image';

export default function MondeeCaseStudy() {
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
                    className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-float-slow"
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
                        Enterprise Product · Travel Tech
                    </span>

                    <h1
                        className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.95] tracking-tight text-black"
                    >
                        {'Mondee'.split('').map((char, i) => (
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
                        Designed scalable UI/UX solutions for enterprise travel platforms handling complex booking, partner, and operational workflows.
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
                            <div className="text-sm font-medium">UI/UX Designer</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Type</div>
                            <div className="text-sm font-medium">Enterprise Product</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Company</div>
                            <div className="text-sm font-medium">Mondee</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Focus</div>
                            <div className="text-sm font-medium">Scalable Systems</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl transition-all duration-1000 hover:scale-[1.01]">
                        <Image
                            src="/images/projects/mondee.png"
                            alt="Mondee Interface Preview"
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
                            Mondee is a global enterprise travel platform that supports complex travel bookings, partner integrations, and large-scale operational workflows. As a UI/UX Designer, I worked on improving clarity, usability, and consistency across enterprise-grade systems used by internal teams and partners.
                        </p>
                    </div>

                    <div ref={problemRef} className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 reveal ${problemInView ? 'active' : ''}`}>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-400">The Problem</h3>
                            <p className="text-gray-400 leading-relaxed italic mb-6">"Enterprise travel platforms face challenges very different from consumer apps."</p>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex gap-3">
                                    <span className="text-orange-400">🚩</span>
                                    Dense information and data-heavy screens causing cognitive overload.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-orange-400">🚩</span>
                                    Complex workflows with many operational edge cases.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-orange-400">🚩</span>
                                    High risk of errors due to poor UX clarity in high-pressure environments.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-400">Core Insight</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Enterprise users don’t want more features — they want **clarity and predictability**. In high-pressure environments, clear hierarchy and consistency matter more than novelty. UX should reduce thinking, not add to it.
                            </p>
                            <p className="mt-4 text-gray-400 font-medium italic">
                                Design for reliability, not just aesthetics.
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
                            Focusing on scalable UI patterns that enhance operational efficiency and system reliability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-8 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-orange-500/50 transition-colors">
                            <h3 className="text-lg font-bold mb-3 text-orange-400">Operational Flow</h3>
                            <p className="text-gray-400 text-sm">Simplifying complex travel operations into intuitive, predictable user flows.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-orange-500/50 transition-colors">
                            <h3 className="text-lg font-bold mb-3 text-orange-400">Data Hierarchy</h3>
                            <p className="text-gray-400 text-sm">Improving information density on screens to reduce eye strain and error rates.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-orange-500/50 transition-colors">
                            <h3 className="text-lg font-bold mb-3 text-orange-400">Pattern Consistency</h3>
                            <p className="text-gray-400 text-sm">Creating universal UI components to reduce learning curves across modules.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-orange-500/50 transition-colors">
                            <h3 className="text-lg font-bold mb-3 text-orange-400">System Alignment</h3>
                            <p className="text-gray-400 text-sm">Ensuring design decisions respect backend logic and operational constraints.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section ref={processRef} className="py-32 px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Design Approach</h2>

                    <div className="space-y-20">
                        <div className={`transition-all duration-1000 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Understanding Constraints</h3>
                                    <p className="text-gray-400">
                                        Worked within existing system architecture while considering backend dependencies, ensuring that every design solution was practical and shippable.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 delay-150 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Flow & Interaction Design</h3>
                                    <p className="text-gray-400">
                                        Focused on simplified workflows that reduced unnecessary actions. Task completion efficiency was the primary metric for success in data-heavy screens.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 delay-300 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Stakeholder Collaboration</h3>
                                    <p className="text-gray-400">
                                        Iterated designs based on constant feedback from product managers, engineers, and operational stakeholders to balance speed, accuracy, and system flexibility.
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
                            <div className="text-xl font-bold text-orange-400 mb-2">Operational Efficiency</div>
                            <p className="text-gray-400 text-sm">Reduced operational bottlenecks through clearer information hierarchy.</p>
                        </div>
                        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1E1E22] to-[#0F0F11] border border-[#2A2A2A]">
                            <div className="text-xl font-bold text-gray-300 mb-2">System Consistency</div>
                            <p className="text-gray-400 text-sm">Contributed to a more unified user experience across diverse platform modules.</p>
                        </div>
                    </div>

                    <div className="mt-16 p-8 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                        <p className="text-lg text-orange-100 italic">
                            “Designing reliable, scalable UX for enterprise travel systems under real-world constraints.”
                        </p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-16 px-8 border-t border-[#2A2A2A]">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link
                        href="/projects/pranik"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ← Previous: Pranik
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        Back to Work →
                    </Link>
                </div>
            </section>
        </div>
    );
}
