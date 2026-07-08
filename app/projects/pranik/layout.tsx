import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pranik — AI Healthcare Companion Case Study | Harsha Arrimalla',
  description: 'An AI healthcare companion designed for trust: symptom conversation, avatar-led dialogue, report decoding, and real-doctor handoff — the complete end-to-end flow.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
