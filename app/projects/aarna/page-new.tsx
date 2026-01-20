'use client';

import ProjectDetail from '@/components/ProjectDetail';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function AarnaPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <ProjectDetail
        title="Aarna"
        category="AI Product Design"
        role="Lead UI/UX Designer & AI Interaction Designer"
        duration="8 months (2023)"
        overview="An AI assistant that helps users design their perfect trip through natural conversation—without forms, filters, or decision fatigue."
        problem="Travel planning is overwhelming. Most platforms force users to make dozens of decisions upfront before they know what they want. This leads to decision fatigue, abandoned bookings, and distrust in recommendations."
        solution="We built a conversational AI that asks the right questions, learns preferences over time, and suggests complete itineraries through natural dialogue. Users commit gradually—first destination, then dates, then budget. The AI explains its reasoning and allows human handoff for complex requests."
        impact={[
          "85%: Task completion rate",
          "50K+: Conversations processed",
          "4.6/5: User trust rating"
        ]}
      />
      <Footer />
    </>
  );
}
