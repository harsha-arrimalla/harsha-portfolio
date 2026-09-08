import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equora — Crypto Wallet Case Study | Harsha Arrimalla',
  description: 'A self-custody crypto wallet with friction proportional to irreversibility: onboarding, recovery phrase, market, and every core transaction end to end.',
  openGraph: { type: 'website', title: 'Equora — Crypto Wallet Case Study | Harsha Arrimalla', description: 'A self-custody crypto wallet with friction proportional to irreversibility: onboarding, recovery phrase, market, and every core transaction end to end.' },
  twitter: { card: 'summary', title: 'Equora — Crypto Wallet Case Study | Harsha Arrimalla', description: 'A self-custody crypto wallet with friction proportional to irreversibility: onboarding, recovery phrase, market, and every core transaction end to end.' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
