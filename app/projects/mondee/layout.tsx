import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mondee — Enterprise Travel Platforms Case Study | Harsha Arrimalla',
  description: 'Redesigning dense enterprise travel workflows for scan speed and error prevention — home, search, fare flexibility, and packages at agent scale.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
