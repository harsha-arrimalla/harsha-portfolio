/**
 * Homepage copy, lifted out of the old component so both the canvas site and
 * the classic one read from a single source. Figures here are the ones cleared
 * for public use — anything interview-only stays out of this repo entirely.
 */

export const MARQUEE = [
    'Agentic AI',
    'Design systems',
    '0 → 1 product',
    'Enterprise UX',
    'Fintech',
    'Healthcare',
    'Prototyping in code',
];

export const HERO = {
    lines: [
        [{ t: 'Design' }, { t: 'systems', style: 'outline' as const }],
        [{ t: 'that' }, { t: 'decide', style: 'accent' as const }],
        [{ t: 'with people' }],
    ],
    lead:
        'I’m Harsha. I design AI, enterprise and fintech products — and for my own, I build and ship the whole thing: web, native and the agent runtime behind it.',
};

export const STATEMENT =
    'I design the decision, not just the screen. States, failure paths and the rules behind them come first — then the surface that makes all of it obvious.';

export const ABOUT_BODY =
    'Four years designing products that ship: an enterprise AI platform at Mondee, a two-sided marketplace, a 12-agent consumer product built solo. Nothing here is a template — each system is built from the ground up, and I prototype in production code whenever a static mock would hide the thing that actually matters.';

export interface Capability {
    num: string;
    title: string;
    description: string;
    evidence: string;
    stack: string[];
}

export const CAPABILITIES: Capability[] = [
    {
        num: '01',
        title: 'Agentic & conversational AI',
        description:
            'AI interfaces built for complete decision clarity and human control—pairing natural conversation with price benchmarks, inline policy rationale, and explicit recovery states.',
        evidence: 'Miraee — shipped to 6 corporate clients',
        stack: ['Agent UX', 'Decision clarity', 'Recovery states'],
    },
    {
        num: '02',
        title: 'Marketplaces & discovery',
        description:
            'Marketplace architecture designed around both supply creators and everyday consumers, turning unstructured brochures and moods into bookable itineraries.',
        evidence: 'Aarna — 3× monthly published listings',
        stack: ['Supply tooling', 'Discovery', 'Trust'],
    },
    {
        num: '03',
        title: 'Enterprise & fintech density',
        description:
            'Motion and hierarchy have a purpose. I design risk-proportional interfaces that guide users, protect irreversible actions, and make dense B2B or Web3 workflows effortless to scan.',
        evidence: 'Equora & Mondee — self-custody and B2B ops',
        stack: ['Design systems', 'Risk-proportional UX', 'Data density'],
    },
    {
        num: '04',
        title: 'Shipping it, not just speccing it',
        description:
            'Static design tools stop where the hard part starts. On my own products I write the production code too — web and native clients, the backend behind them, and the agent runtime that makes them work.',
        evidence: 'Hita — designed and engineered solo, MVP in ~6 days',
        stack: ['Next.js', 'React Native', 'Fastify', 'Claude API'],
    },
];

export interface Role {
    period: string;
    role: string;
    company: string;
    detail: string;
}

export const EXPERIENCE: Role[] = [
    {
        period: 'Jul 2023 — Present',
        role: 'Senior Product Designer',
        company: 'Mondee',
        detail:
            'Sole designer across Aarna AI and Miraee. Rebuilt a dense multi-step supplier flow as a conversation-first experience — listing volume tripled, drop-off fell 40%, and the product scaled past 10K active users. Own the design system behind both: tokens, component library and interaction patterns across 50+ screens and two platforms.',
    },
    {
        period: '2026 · Self-initiated',
        role: 'Designer & Builder — Hita',
        company: 'Independent',
        detail:
            'Sole designer on a live consumer AI product, then implemented and shipped it myself in Next.js, React Native, Supabase and the Claude API. Evidence I can take an ambiguous problem all the way to deployed, validated software.',
    },
    {
        period: 'Nov 2022 — Jul 2023',
        role: 'UI/UX Designer',
        company: 'Virtusa',
        detail:
            'Owned 3–4 end-to-end regulated banking workflows — requirements through wireframes, high-fidelity UI, prototypes and annotated specs for an offshore engineering team, where accuracy, hierarchy and error prevention were critical.',
    },
    {
        period: 'Feb 2022 — Nov 2022',
        role: 'UI Designer',
        company: 'GlobalLogic',
        detail:
            'Delivered 30+ UI screens and interactive prototypes for an enterprise product across 6+ Agile sprints, contributing reusable patterns back to the shared design library.',
    },
    {
        period: 'Jan 2019 — Dec 2021',
        role: 'Graphic & Motion Designer',
        company: 'Prime Pixel',
        detail:
            'Motion graphics and visual design in After Effects, Illustrator and Blender — the typography, hierarchy and visual-communication foundation behind the interface work that followed.',
    },
];

/** Frame names down the left gutter, matching the section order. */
export const FRAMES = [
    { id: 'cover', label: 'Cover' },
    { id: 'about', label: 'About' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'work', label: 'Selected work' },
    { id: 'build', label: 'Built end to end' },
    { id: 'open-source', label: 'Open source' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];
