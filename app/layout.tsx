import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harsha Arrimalla — AI Product Design Engineer',
  description: 'AI product design engineer who ships. I design and build AI-native, conversational, and multi-agent experiences end-to-end — shipped enterprise AI travel assistants, a 10K+ user marketplace, and solo full-stack AI products.',
  keywords: ['AI Product Designer', 'Design Engineer', 'Conversational AI', 'Agentic UX', 'Multi-Agent UX', 'Product Designer', 'AI UX'],
  authors: [{ name: 'Harsha Arrimalla' }],
  openGraph: {
    title: 'Harsha Arrimalla — AI Product Design Engineer',
    description: 'I design and ship AI-native, conversational, and multi-agent experiences end-to-end.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsha Arrimalla — AI Product Design Engineer',
    description: 'I design and ship AI-native, conversational, and multi-agent experiences end-to-end.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

import { LoadingProvider } from '@/components/LoadingContext'
import dynamic from 'next/dynamic'

// CopilotWrapper and SmoothScroll wrap the page content, so they must be
// statically imported — a dynamic ssr:false import here would strip every page
// out of the server-rendered HTML (blank first paint, nothing for crawlers).
import CopilotWrapper from '@/components/CopilotWrapper'
import SmoothScroll from '@/components/SmoothScroll'

// Dynamically import heavy client-side overlays to reduce initial bundle size
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })
const MouseFollower = dynamic(() => import('@/components/MouseFollower'), { ssr: false })
const OilPaintBackground = dynamic(() => import('@/components/OilPaintBackground'), { ssr: false })
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false })
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })
const BackButton = dynamic(() => import('@/components/BackButton'), { ssr: false })

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
          <BackButton />
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
