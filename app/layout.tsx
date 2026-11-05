import type { Metadata } from 'next';
import './globals.css';
import './case-study.css';
import './canvas.css';
import './swarm.css';
import Header from '@/components/Header';
import Smooth from '@/components/Smooth';
import Cursor from '@/components/Cursor';
import Preloader from '@/components/Preloader';
import SwarmStage from '@/components/swarm/SwarmStage';
import { Analytics } from '@vercel/analytics/next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.role}`,
  description:
    'Seven end-to-end case studies in AI, enterprise, fintech and healthcare product design, plus the open-source work behind them.',
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description:
      'Seven end-to-end case studies in AI, enterprise, fintech and healthcare product design.',
    type: 'website',
  },
};

// Applies the stored theme before first paint so the page never flashes.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('hx-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})()`;

// Decides, before the first pixel, whether the swarm builds this page. Hiding
// the content is the one thing that must not wait for hydration — otherwise
// the page flashes in and then gets drawn again. Every bail-out here leaves
// the page rendering normally: no JS, reduced motion, touch, narrow viewport,
// or a visitor who has already watched it once this session.
const SWARM_SCRIPT = `(function(){try{
if(!window.matchMedia)return;
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
if(!matchMedia('(pointer: fine)').matches)return;
if(innerWidth<900)return;
if(sessionStorage.getItem('sw:seen'))return;
document.documentElement.classList.add('sw-armed');
}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: SWARM_SCRIPT }} />
      </head>
      <body>
        <a className="hx-skip" href="#main">
          Skip to content
        </a>
        <Preloader />
        <Smooth />
        <Cursor />
        <SwarmStage />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
