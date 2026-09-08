import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Harsha Arrimalla — Senior Product Designer',
  description: 'Senior product designer in Hyderabad designing enterprise and AI workflows across travel, policy, approvals, and recovery.',
  openGraph: { type: 'website', title: 'Harsha Arrimalla — Senior Product Designer', description: 'Senior product designer in Hyderabad designing enterprise and AI workflows across travel, policy, approvals, and recovery.' },
  twitter: { card: 'summary', title: 'Harsha Arrimalla — Senior Product Designer', description: 'Senior product designer in Hyderabad designing enterprise and AI workflows across travel, policy, approvals, and recovery.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navigation />{children}</body></html>;
}
