import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harsha Virat — UI/UX Designer & AI Full-Stack Developer',
  description: 'Designing AI experiences that users trust—from concept to code. Specializing in conversational AI, healthcare, and enterprise platforms.',
  keywords: ['UI/UX Designer', 'AI Developer', 'Full-Stack Developer', 'Conversational AI', 'Healthcare UX', 'Enterprise Design'],
  authors: [{ name: 'Harsha Virat' }],
  openGraph: {
    title: 'Harsha Virat — UI/UX Designer & AI Full-Stack Developer',
    description: 'Designing AI experiences that users trust—from concept to code',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsha Virat — UI/UX Designer & AI Full-Stack Developer',
    description: 'Designing AI experiences that users trust—from concept to code',
  },
  robots: {
    index: true,
    follow: true,
  },
}

import Chatbot from '@/src/components/ui/Chatbot'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
