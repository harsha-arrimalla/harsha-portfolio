'use client';

import { useInView as useIntersection } from '@/hooks/useInView';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function AarnaCaseStudy() {
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
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-float-slow"
        />
        <div
          className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-r from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl animate-float-slower"
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
            AI Product · Public Platform
          </span>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.95] tracking-tight text-black"
          >
            {'Aarna'.split('').map((char, i) => (
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
            Aarna is an AI-assisted platform that helps users create and publish travel experiences through guided conversations instead of complex forms.
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
              <div className="text-sm font-medium">AI Public Platform</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Platform</div>
              <div className="text-sm font-medium">Experience Market</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Focus</div>
              <div className="text-sm font-medium">System Scaling</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="rounded-[40px] overflow-hidden shadow-2xl transition-all duration-1000 hover:scale-[1.01]">
            <img
              src="/images/projects/aarna.png"
              alt="Aarna Interface Preview"
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
              Aarna is a public-facing platform designed for creators who want to host services and manage digital stores. The system supports both regular users creating experiences and admins managing quality control.
            </p>
          </div>

          <div ref={problemRef} className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 reveal ${problemInView ? 'active' : ''}`}>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">The Problem</h3>
              <p className="text-gray-400 leading-relaxed italic mb-6">"Forms were not enough. Experience creation was unstructured and exhausting."</p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3">
                  <span className="text-blue-400">🚩</span>
                  Inconsistent formats (PDFs, Videos, Raw Text).
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">🚩</span>
                  High drop-off rates due to complex, manual forms.
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">🚩</span>
                  Difficulties in scaling moderation for admins.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Core Insight</h3>
              <p className="text-gray-400 leading-relaxed">
                Most users don't know what information matters or how to structure it. Forms still demand high human effort. **AI can reduce friction by prefilling known data and guiding users through smart prompts.**
              </p>
              <p className="mt-4 text-gray-400 font-medium italic">
                AI is the bridge between raw content and publish-ready listings.
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
              A conversational creation flow that turns raw uploads into structured experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Guided Prompts</h3>
              <p className="text-gray-400 text-sm">Replacing long forms with intelligent conversational prompts that help users learn by example.</p>
            </div>
            <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-teal-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-teal-400">Generate then Verify</h3>
              <p className="text-gray-400 text-sm">AI extracts data from images and files via OCR, creating listings first for users to refine later.</p>
            </div>
            <div className="p-10 rounded-3xl bg-[#161821] border border-[#2A2A2A] hover:border-emerald-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Admin Controls</h3>
              <p className="text-gray-400 text-sm">A dedicated layer for moderation and quality control, ensuring platform trust at scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section ref={processRef} className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Execution Flow</h2>

          <div className="space-y-20">
            <div className={`transition-all duration-1000 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Prompt & Upload</h3>
                  <p className="text-gray-400">
                    Users start by chatting or uploading raw materials like brochures, videos, or photos of their experience.
                  </p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-150 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">AI Structuring</h3>
                  <p className="text-gray-400">
                    The AI performs processing to extract key details, prefill listings, and suggest optimal descriptions to maximize user appeal.
                  </p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${processInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Verification & Approval</h3>
                  <p className="text-gray-400">
                    Users stay in control by reviewing and editing AI outputs before submitting to admins for final moderation.
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
              <div className="text-xl font-bold text-blue-400 mb-2">Faster Onboarding</div>
              <p className="text-gray-400 text-sm">Significant reduction in creation time and drop-off during user signup.</p>
            </div>
            <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1E1E22] to-[#0F0F11] border border-[#2A2A2A]">
              <div className="text-xl font-bold text-gray-300 mb-2">Platform Scalability</div>
              <p className="text-gray-400 text-sm">Enabled admins to handle 3x more listings with automated quality checks.</p>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20">
            <p className="text-lg text-blue-100 italic">
              “Aarna uses AI-assisted conversational UX to turn unstructured content into high-quality, publish-ready travel experiences.”
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-8 border-t border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/projects/miraee"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Previous: Miraee
          </Link>
          <Link
            href="/projects/pranik"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Next: Pranik →
          </Link>
        </div>
      </section>
    </div>
  );
}
