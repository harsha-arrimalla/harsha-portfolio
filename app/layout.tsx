import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Harsha's Portfolio",
  description: 'Designing AI experiences that users trust—from concept to code. Specializing in conversational AI, healthcare, and enterprise platforms.',
  keywords: ['UI/UX Designer', 'AI Developer', 'Full-Stack Developer', 'Conversational AI', 'Healthcare UX', 'Enterprise Design'],
  authors: [{ name: 'Harsha' }],
  openGraph: {
    title: "Harsha's Portfolio",
    description: 'Designing AI experiences that users trust—from concept to code',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Harsha's Portfolio",
    description: 'Designing AI experiences that users trust—from concept to code',
  },
  robots: {
    index: true,
    follow: true,
  },
}

import dynamic from 'next/dynamic'

// Dynamically import heavy client-side components to reduce initial bundle size
const CopilotWrapper = dynamic(() => import('@/components/CopilotWrapper'), { ssr: false })
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })
const MouseFollower = dynamic(() => import('@/components/MouseFollower'), { ssr: false })
const OilPaintBackground = dynamic(() => import('@/components/OilPaintBackground'), { ssr: false })
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false })
const LoadingProvider = dynamic(() => import('@/components/LoadingContext').then(mod => mod.LoadingProvider), { ssr: false })
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })

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
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LoadingProvider>
          <LoadingScreen />
          <OilPaintBackground />
          <Navigation />
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
