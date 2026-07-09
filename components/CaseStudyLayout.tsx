'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import CaseStudyNav from '@/components/CaseStudyNav';
import SectionHeading from '@/components/SectionHeading';
import { useInView } from '@/hooks/useInView';
import OilPaintBackground from '@/components/OilPaintBackground';

interface CaseStudyTheme {
    primary: string;           // Main accent color (e.g., button backgrounds)
    secondary: string;         // Secondary accent (e.g., gradients)
    background: string;        // Page background
    text: string;             // Main text color
    muted: string;            // Secondary text
    gradient: string;         // Hero gradient string
    selection: string;        // Selection color
}

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
    /** Case study slug — drives the shared previous/next navigation footer */
    slug: string;
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
    slug
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

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8">
                            {meta.title}
                        </h1>

                        <p className="text-xl md:text-3xl font-light leading-relaxed max-w-4xl opacity-80 mb-16">
                            {meta.description}
                        </p>
                    </RevealSection>

                    {/* Project Details Grid */}
                    <RevealSection className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-500/30 pt-12">
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
                            {section.title && <SectionHeading kicker={section.title} />}
                            {section.content}
                        </RevealSection>
                    </div>
                </section>
            ))}

            {/* Previous / Next Navigation */}
            <CaseStudyNav current={slug} />

            <Footer />
        </div>
    );
}
