/**
 * The end-to-end build story.
 *
 * Every figure here is drawn from the Hita case study in caseStudiesData.ts
 * — this file only reframes it as engineering evidence rather than restating
 * it. `BUILT_END_TO_END` marks the case studies that were engineered as well
 * as designed, which drives the badge on the work reel.
 */

export const BUILT_END_TO_END = new Set(['hita']);

export const BUILD = {
    slug: 'hita',
    kicker: 'Hita — self-initiated AI product',
    live: 'https://aihita.in',
    repo: 'https://github.com/harsha-arrimalla/AIGIS.HITA',
    narrative:
        'Hita is the proof. I designed the product and engineered the whole stack myself — the design system, the conversational UI on web and native, the Fastify backend, and the 12-agent orchestration runtime behind it. Working MVP in roughly six days, then two weekends of field testing with real travelers that moved SOS out of a nested menu and into the header.',
    design: [
        'Product strategy and 0→1 UX',
        'Design system and component library',
        'Conversational and voice interaction model',
        'Agent activity surface — inspectable, never in the reply',
    ],
    engineering: [
        'Next.js 15 web client',
        'Expo React Native app',
        'Fastify backend and Supabase data layer',
        '12-agent orchestration runtime on the Claude API',
    ],
    stack: [
        'TypeScript',
        'Next.js 15',
        'Expo React Native',
        'Fastify',
        'Supabase',
        'Claude API',
    ],
    counters: [
        { value: '6', label: 'Days to working MVP' },
        { value: '12', label: 'Agents orchestrated' },
        { value: '6', label: 'Field beta testers' },
    ],
} as const;
