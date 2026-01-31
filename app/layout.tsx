import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harsha — UI/UX Designer & AI – Full Stack Developer',
  description: 'Designing AI experiences that users trust—from concept to code. Specializing in conversational AI, healthcare, and enterprise platforms.',
  keywords: ['UI/UX Designer', 'AI Developer', 'Full-Stack Developer', 'Conversational AI', 'Healthcare UX', 'Enterprise Design'],
  authors: [{ name: 'Harsha' }],
  openGraph: {
    title: 'Harsha — UI/UX Designer & AI – Full Stack Developer',
    description: 'Designing AI experiences that users trust—from concept to code',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsha — UI/UX Designer & AI – Full Stack Developer',
    description: 'Designing AI experiences that users trust—from concept to code',
  },
  robots: {
    index: true,
    follow: true,
  },
}

import CopilotWrapper from '@/components/CopilotWrapper'
import { LoadingProvider } from '@/components/LoadingContext'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import MouseFollower from '@/components/MouseFollower'
import OilPaintBackground from '@/components/OilPaintBackground'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LoadingProvider>
          <OilPaintBackground />
          <SmoothScroll>
            {/* Global Mouse Animations */}
            <CustomCursor />
            <MouseFollower />

            <CopilotWrapper>
              {children}
            </CopilotWrapper>
          </SmoothScroll>
        </LoadingProvider>
      </body>
    </html>
  )
}
