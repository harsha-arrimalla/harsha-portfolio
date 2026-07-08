import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hita — Self-Initiated AI Travel Companion | Harsha Arrimalla',
  description: 'A self-initiated 12-agent AI travel companion, designed and built solo end-to-end with Next.js, Expo, Fastify, Supabase, and the Claude API.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
