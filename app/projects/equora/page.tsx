'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout';
import FlowGallery, { FlowStep } from '@/components/FlowGallery';

const ACCENT = '#22C55E';

const flowSteps: FlowStep[] = [
    {
        src: '/images/projects/equora/flow/01-start-menu.png',
        title: 'Start',
        desc: 'Create a new wallet or restore an existing one — two paths, zero ambiguity about which is which.',
        phase: 'Onboard',
    },
    {
        src: '/images/projects/equora/flow/02-create-password.png',
        title: 'Create Password',
        desc: 'Local-only password creation with plain-language framing of what it protects (and what it can\'t recover).',
        phase: 'Onboard',
    },
    {
        src: '/images/projects/equora/flow/03-recovery-phrase.png',
        title: 'Recovery Phrase',
        desc: 'The highest-stakes moment in any wallet. The phrase is revealed deliberately, with explicit consequences before the user can proceed.',
        phase: 'Secure',
    },
    {
        src: '/images/projects/equora/flow/04-home.png',
        title: 'Portfolio Home',
        desc: 'Balance, holdings, and movement at a glance — value first, tokens second, noise nowhere.',
        phase: 'Hold',
    },
    {
        src: '/images/projects/equora/flow/05-market.png',
        title: 'Market',
        desc: 'Live market view with trends and movers, structured for quick scanning rather than day-trader density.',
        phase: 'Explore',
    },
    {
        src: '/images/projects/equora/flow/06-market-detail.png',
        title: 'Asset Detail',
        desc: 'A single asset\'s chart, stats, and actions — buy, sell, and swap reachable from the same screen that informs the decision.',
        phase: 'Explore',
    },
    {
        src: '/images/projects/equora/flow/07-swap.png',
        title: 'Swap',
        desc: 'Token swaps as a simple A-to-B statement with rate and fees visible before confirmation.',
        phase: 'Transact',
    },
    {
        src: '/images/projects/equora/flow/08-buy.png',
        title: 'Buy',
        desc: 'Amount-first buying: the user states value in their currency, the token math follows.',
        phase: 'Transact',
    },
    {
        src: '/images/projects/equora/flow/09-buy-payment.png',
        title: 'Payment',
        desc: 'Payment method selection kept inside the flow — no handoff to a web view that breaks trust mid-purchase.',
        phase: 'Transact',
    },
    {
        src: '/images/projects/equora/flow/10-send.png',
        title: 'Send',
        desc: 'Irreversible transfers get friction by design: address validation and amount confirmation before anything moves.',
        phase: 'Transact',
    },
    {
        src: '/images/projects/equora/flow/11-receive.png',
        title: 'Receive',
        desc: 'A scannable QR and copyable address — the simplest screen in the app, deliberately.',
        phase: 'Transact',
    },
];

export default function EquoraCaseStudy() {
    const theme = {
        primary: '#22C55E',
        secondary: '#0EA5E9',
        background: '#09090B',
        text: '#FAFAFA',
        muted: '#A1A1AA',
        gradient: 'radial-gradient(circle at 20% 0%, rgba(34, 197, 94, 0.15), transparent 50%), radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.12), transparent 50%)',
        selection: '#22C55E'
    };

    const meta = {
        title: 'Equora',
        subtitle: 'Crypto Wallet',
        description: 'A self-custody crypto wallet designed to make irreversible money feel safe to hold, move, and trade — onboarding, market, and transactions rebuilt around trust.',
        tags: ['Fintech', 'Mobile App', 'Trust Design']
    };

    const details = {
        role: 'Product Designer',
        type: 'Mobile App · Concept',
        timeline: '4 Weeks',
        team: 'Solo Project'
    };

    return (
        <CaseStudyLayout
            theme={theme}
            meta={meta}
            details={details}
            heroImage="/images/projects/equora/hero.jpg"
            nextProject={{ title: 'Qualifyze', href: '/projects/qualifyze' }}
            sections={[
                {
                    id: 'context',
                    content: (
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <h3 className="text-4xl font-bold leading-tight text-white">
                                In crypto, every mistake is permanent. The UI is the safety system.
                            </h3>
                            <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                                <p>
                                    Self-custody wallets ask ordinary people to be their own bank: guard a recovery
                                    phrase, verify addresses, and sign irreversible transactions. Most wallet UIs
                                    treat this as a power-user problem and bury the danger in fine print.
                                </p>
                                <p>
                                    <strong className="text-white">The design position:</strong> friction is not the
                                    enemy — <em>misplaced</em> friction is. Equora removes ceremony from safe actions
                                    (viewing, receiving) and concentrates it on irreversible ones (revealing the
                                    phrase, sending funds).
                                </p>
                            </div>
                        </div>
                    )
                },
                {
                    id: 'principles',
                    title: 'Design Principles',
                    className: 'bg-zinc-950',
                    content: (
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Danger-proportional friction', desc: 'Confirmation weight scales with irreversibility. Receive is one screen; send is a gauntlet.' },
                                { title: 'Value before tokens', desc: 'People think in their currency, not in coin quantities. Every amount leads with fiat value.' },
                                { title: 'Explain before commit', desc: 'Rates, fees, and consequences render on the same screen as the action — never on the receipt.' }
                            ].map((card) => (
                                <div key={card.title} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                    <h4 className="text-xl font-bold mb-3 text-white">{card.title}</h4>
                                    <p className="text-zinc-400 leading-relaxed text-sm">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    )
                },
                {
                    id: 'flow',
                    content: (
                        <FlowGallery
                            eyebrow="Complete End-to-End Flow"
                            title="From first launch to first transaction"
                            description="The full wallet journey: onboarding and recovery-phrase security, the portfolio home, market exploration, and the four core transactions — buy, sell, swap, send, and receive — each with friction proportional to its risk."
                            steps={flowSteps}
                            accent={ACCENT}
                            dark
                        />
                    )
                },
                {
                    id: 'reflection',
                    title: 'Learnings',
                    className: 'bg-zinc-950',
                    content: (
                        <div className="max-w-3xl">
                            <ul className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                                <li>
                                    <strong className="text-white">Explored alternatives on purpose.</strong> Every core
                                    screen was designed in three to four visual directions before committing — the
                                    surviving direction won on legibility under stress, not on aesthetics.
                                </li>
                                <li>
                                    <strong className="text-white">Trust patterns transfer.</strong> The
                                    danger-proportional-friction model I built here directly informed the policy and
                                    failure-state work in Miraee — different domain, same psychology.
                                </li>
                            </ul>
                        </div>
                    )
                }
            ]}
        />
    );
}
