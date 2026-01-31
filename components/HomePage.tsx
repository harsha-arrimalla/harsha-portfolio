'use client';

import Navigation from './Navigation';
import HeroSection from './HeroSection';
import NewAboutSection from './NewAboutSection';
import ProjectsGrid from './ProjectsGrid';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import LatestWorksSection from './LatestWorksSection';
import CTASection from './CTASection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import PageLoader from './PageLoader';
import { useInView } from '@/hooks/useInView';

// Seamless section wrapper with smooth reveal using native IntersectionObserver
function Section({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ threshold: 0.01, rootMargin: '400px' });

  return (
    <div
      ref={ref as any}
      className={`reveal ${inView ? 'active' : ''} ${delay ? `delay-${delay * 1000}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <PageLoader>
        <main className="relative min-h-screen">
          <Navigation />

          <Section>
            <HeroSection />
          </Section>

          <Section>
            <NewAboutSection />
          </Section>

          <Section>
            <ProjectsGrid />
          </Section>

          <Section delay={0.05}>
            <SkillsSection />
          </Section>

          <Section delay={0.05}>
            <ExperienceSection />
          </Section>

          <Section delay={0.1}>
            <LatestWorksSection />
          </Section>

          <Section delay={0.1}>
            <CTASection />
          </Section>

          <Section delay={0.1}>
            <ContactForm />
          </Section>

          <Footer />
        </main>
      </PageLoader>
    </>
  );
}
