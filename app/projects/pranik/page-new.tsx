'use client';

import ProjectDetail from '@/components/ProjectDetail';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function PranikPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <ProjectDetail
        title="Pranik"
        category="Healthcare AI"
        role="Lead Product Designer"
        duration="12 months (2022-2023)"
        overview="A healthcare companion designed for India—speaking regional languages, respecting local context, and building trust where digital literacy is low."
        problem="Healthcare AI in India faces a paradox: the people who need it most trust it least. Existing apps are English-first, urban-focused, and ignore cultural stigma around health topics. Low digital literacy means complex UIs fail completely."
        solution="We built a voice-first AI that speaks 12+ Indian languages naturally, not just translated English. It starts with general questions to build trust, explicitly states its limitations, works offline, and connects to verified local doctors. Cultural sensitivity is built into every interaction."
        impact={[
          "92%: User trust rating",
          "12: Languages supported",
          "200K+: Symptom checks completed"
        ]}
      />
      <Footer />
    </>
  );
}
