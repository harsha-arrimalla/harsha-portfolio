import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miraee — AI Travel Assistant Case Study | Harsha Arrimalla',
  description: 'Designing a shipped AI travel assistant: conversational booking, policy transparency, approvals, and failure recovery — a complete end-to-end flow with pattern teardowns and tradeoffs.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
