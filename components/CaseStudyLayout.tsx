'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/useInView';
import BackButton from '@/components/BackButton';
import type { CaseStudyTheme } from '@/lib/caseStudyTheme';

interface CaseStudyDate {
    role: string;
    type: string;
    timeline: string;
    team: string;
}

interface CaseStudyProps {
    theme: CaseStudyTheme;
    meta: {
        title: string;
        subtitle: string;
        description: string;
        tags: string[];
    };
    details: CaseStudyDate;
    heroImage: string;
    heroVideo?: string; // Optional hero video background
    sections: {
        id: string;
        title?: string;
        content: React.ReactNode;
        className?: string; // Custom class for section background
    }[];
    nextProject?: {
        title: string;
        href: string;
    };
}

// Fade-in Section Component
const RevealSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const [ref, inView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    return (
        <div ref={ref as any} className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}>
            {children}
        </div>
    );
};

export default function CaseStudyLayout({
    theme,
    meta,
    details,
    heroImage,
    heroVideo,
    sections,
    nextProject
}: CaseStudyProps) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="min-h-screen selection:text-white"
            style={{
                backgroundColor: theme.background,
                color: theme.text,
                ['--theme-primary' as any]: theme.primary,
                ['--theme-selection' as any]: theme.selection
            }}
        >
            <style jsx global>{`
        ::selection {
          background-color: var(--theme-selection);
        }
      `}</style>

            <Navigation />
            <BackButton />

            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 h-1 z-50 transition-all duration-300" style={{ width: `${scrollProgress * 100}%`, background: theme.primary }} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden">
                {/* Ambient Gradient Background */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-1000"
                    style={{ background: theme.gradient, transform: `translateY(${scrollProgress * 200}px)` }}
                />

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <RevealSection>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {meta.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors"
                                    style={{ borderColor: `${theme.primary}40`, color: theme.primary, background: `${theme.primary}10` }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-xs uppercase tracking-[0.4em] text-slate-400 mb-6">
                            {meta.subtitle}
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight mb-6">
                            {meta.title}
                        </h1>

                        <p className="text-lg md:text-2xl font-light leading-relaxed max-w-3xl text-slate-300 mb-12">
                            {meta.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 uppercase tracking-[0.2em]">
                                Open to hiring
                            </span>
                            <span className="opacity-70">Let’s build your next product together.</span>
                        </div>
                    </RevealSection>

                    {/* Project Details Grid */}
                    <RevealSection className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 mt-16">
                        <div>
                            <div className="text-xs uppercase tracking-widest opacity-50 mb-2">Role</div>
                            <div className="font-medium text-lg">{details.role}</div>
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-widest opacity-50 mb-2">Type</div>
                            <div className="font-medium text-lg">{details.type}</div>
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-widest opacity-50 mb-2">Timeline</div>
                            <div className="font-medium text-lg">{details.timeline}</div>
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-widest opacity-50 mb-2">Team</div>
                            <div className="font-medium text-lg">{details.team}</div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* Hero Image/Video - Full Width */}
            <section className="w-full px-4 md:px-8 mb-32">
                <RevealSection>
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        {heroVideo ? (
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                <source src={heroVideo} type="video/mp4" />
                            </video>
                        ) : (
                            <Image
                                src={heroImage}
                                alt={meta.title}
                                fill
                                className="object-cover transform hover:scale-105 transition-transform duration-1000"
                                priority
                            />
                        )}
                    </div>
                </RevealSection>
            </section>

            {/* Dynamic Sections */}
            {sections.map((section, index) => (
                <section
                    key={section.id}
                    id={section.id}
                    className={`py-24 px-6 md:px-12 lg:px-24 ${section.className || ''}`}
                >
                    <div className="max-w-7xl mx-auto">
                        <RevealSection>
                            {section.title && (
                                <div className="flex items-center gap-4 mb-16">
                                    <div className="h-px w-12 bg-current opacity-30" />
                                    <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">{section.title}</h2>
                                </div>
                            )}
                            {section.content}
                        </RevealSection>
                    </div>
                </section>
            ))}

            <section className="px-6 md:px-12 lg:px-24 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-12 text-center">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Hiring</p>
                        <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-50">
                            Looking for a product designer who ships with clarity?
                        </h3>
                        <p className="mt-4 text-lg text-slate-400">
                            Let’s connect and build a case study you can be proud of next.
                        </p>
                        <Link
                            href="/#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:bg-white/20"
                        >
                            Start a conversation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Next Project Footer */}
            {nextProject && (
                <section className="py-32 px-6 md:px-12 bg-black text-white relative overflow-hidden group cursor-pointer">
                    <Link href={nextProject.href} className="absolute inset-0 z-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="max-w-7xl mx-auto relative z-10 text-center">
                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Next Case Study</p>
                        <h2 className="text-6xl md:text-8xl font-black group-hover:scale-105 transition-transform duration-500">
                            {nextProject.title}
                        </h2>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}
