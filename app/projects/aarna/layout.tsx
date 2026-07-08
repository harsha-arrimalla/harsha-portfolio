import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aarna — AI Travel Marketplace Case Study | Harsha Arrimalla',
  description: '3x listing volume, 40% lower drop-off, 10K+ users: how conversational creation and an end-to-end traveler flow with Abhee turned fuzzy intent into bookable trips.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
