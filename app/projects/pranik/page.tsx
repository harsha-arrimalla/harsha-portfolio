'use client';

import { useInView as useIntersection } from '@/hooks/useInView';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function PranikCaseStudy() {
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

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-white text-black"
      >
        {/* Animated gradient orbs */}
        <div
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float-slow"
        />
        <div
          className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float-slower"
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
            AI Healthcare · Concept
          </span>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.95] tracking-tight text-black"
          >
            {'Pranik'.split('').map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-300 hover:text-purple-600 hover:-translate-y-2 ${heroInView ? 'animate-slide-up' : 'opacity-0'}`}
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
            Pranik is an AI-powered healthcare companion designed to make quality healthcare guidance accessible, trustworthy, and human—especially for underserved users.
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
              <div className="text-sm font-medium">Healthcare (Concept)</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Focus</div>
              <div className="text-sm font-medium">Trust-Centered UX</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Context</div>
              <div className="text-sm font-medium">Access & Empathy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="rounded-[40px] overflow-hidden shadow-2xl transition-all duration-1000 hover:scale-[1.01]">
            <img
              src="/images/projects/pranik.png"
              alt="Pranik Interface Preview"
              className="w-full h-auto object-cover"
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
              Pranik is a concept AI healthcare platform built around the idea of **“healthcare as a companion, not a system.”** It explores how AI can help people navigate healthcare with clarity and empathy, democratizing access for seniors and underserved users.
            </p>
          </div>

          <div ref={problemRef} className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 reveal ${problemInView ? 'active' : ''}`}>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">The Problem</h3>
              <p className="text-gray-400 leading-relaxed italic mb-6">"Healthcare systems today are difficult to navigate and clinical."</p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3">
                  <span className="text-purple-400">🚩</span>
                  Intimidating medical jargon causing anxiety.
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">🚩</span>
                  Language and tech barriers for non-urban users.
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">🚩</span>
                  Low trust in cold, transactional digital health tools.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Core Insight</h3>
              <p className="text-gray-400 leading-relaxed">
                People don’t want a digital hospital. They want a **healthcare companion** they can trust. Guidance should feel like a conversation with a friend who happens to be a doctor—calm, supportive, and non-judgmental.
              </p>
              <p className="mt-4 text-gray-400 font-medium italic">
                AI should provide the first layer of clarity, not just binary data.
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
              An AI-first companion that prioritizes reassurance and clarity over clinical reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-purple-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Conversational Guidance</h3>
              <p className="text-gray-400 text-sm">Explaining symptoms in simple language to remove fear from the diagnosis process.</p>
            </div>
            <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-pink-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-pink-400">Contextual Empathy</h3>
              <p className="text-gray-400 text-sm">Tailoring guidance based on age and life stages like pregnancy or senior care.</p>
            </div>
            <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-indigo-500/50 transition-colors lg:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-indigo-400">Regional Nuance</h3>
              <p className="text-gray-400 text-sm">Support for multilingual interactions to break across cultural and regional barriers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section ref={processRef} className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">How Pranik Works</h2>

          <div className="space-y-20">
            <div className={`transition-all duration-1000 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Entry via Conversation</h3>
                  <p className="text-gray-400">
                    Eliminating medical jargon from the start. Users describe their situation in natural language, and Pranik asks simple follow-up questions to understand the context.
                  </p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-150 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Trust-Building Logic</h3>
                  <p className="text-gray-400">
                    The AI focus is on progressive disclosure—revealing information step-by-step with gentle acknowledgments and clear disclaimers, encouraging professional consultation when necessary.
                  </p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Suggested Next Steps</h3>
                  <p className="text-gray-400">
                    Pranik doesn't just diagnose; it guides. It provides clear next steps—whether it's rest, home-care tips, or an urgent escalation to a healthcare provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section ref={resultsRef} className="py-32 px-8 bg-[#0F1117]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Outcome & Learnings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1E1E22] to-[#0F0F11] border border-[#2A2A2A]">
              <div className="text-xl font-bold text-purple-400 mb-2">Concept Validation</div>
              <p className="text-gray-400 text-sm">Demonstrated how trust-centered UX can increase adoption in sensitive domains.</p>
            </div>
            <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1E1E22] to-[#0F0F11] border border-[#2A2A2A]">
              <div className="text-xl font-bold text-gray-300 mb-2">Simplicity First</div>
              <p className="text-gray-400 text-sm">Learned that tone and language matter far more than complex features in healthcare.</p>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-purple-500/5 border border-purple-500/20">
            <p className="text-lg text-purple-100 italic">
              “Pranik explores how AI can make healthcare guidance more human, trustworthy, and accessible.”
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-8 border-t border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/projects/aarna"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Previous: Aarna
          </Link>
          <Link
            href="/projects/mondee"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Next: Mondee →
          </Link>
        </div>
      </section>
    </div>
  );
}
