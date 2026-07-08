import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Qualifyze — Supplier Qualification UX Case Study | Harsha Arrimalla',
  description: 'Enterprise B2B UX case study: simplifying supplier qualification workflows.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
