import Image from '@/components/InspectableImage';
import CaseStudyNav from '@/components/CaseStudyNav';
import CaseOverview from '@/components/CaseOverview';
import Link from 'next/link';
import Footer from '@/components/Footer';

const decisions = [
  {
    number: '01',
    title: 'Slow down the moment a person becomes their own bank',
    image: '/images/projects/equora/flow/03-recovery-phrase.png',
    alt: 'Equora recovery phrase screen',
    evidence: 'Creating a self-custody wallet introduces an irreversible responsibility: the recovery phrase cannot be recreated by a support team. That moment is materially different from a routine account password.',
    decision: 'The recovery phrase is introduced as a deliberate security step with clear framing, rather than a technical detail people are expected to rush past during onboarding.',
    tradeoff: 'More explanation creates friction in the first session. Here the delay is intentional: comprehension is more valuable than a superficially faster activation.',
  },
  {
    number: '02',
    title: 'Lead with value, then reveal token complexity',
    image: '/images/projects/equora/flow/04-home.png',
    alt: 'Equora wallet home screen',
    evidence: 'Wallets often foreground token quantities, addresses, and trading signals at the same time. That makes a first-time holder decode the interface before understanding what they own.',
    decision: 'The home screen prioritises total value and a small set of actions. Holdings remain available, while addresses and deeper asset detail sit one intentional step away.',
    tradeoff: 'Frequent traders may want more density immediately. The composition gives the default experience a calmer hierarchy without preventing deeper inspection.',
  },
  {
    number: '03',
    title: 'Put friction where a mistake cannot be undone',
    image: '/images/projects/equora/flow/10-send.png',
    alt: 'Equora send transaction screen',
    evidence: 'Sending crypto is an irreversible action. Address, amount, rate, and fee information each change the meaning of the decision, and a rushed confirmation has no simple recovery path.',
    decision: 'The send flow makes the recipient, amount, and confirmation state explicit before funds move. Low-risk actions such as receiving remain intentionally light by comparison.',
    tradeoff: 'Extra review steps slow the fastest possible transfer. They are focused only on the moments where speed creates disproportionate harm.',
  },
];

const explorations = [
  { image: '/images/projects/equora/explorations/home-alt1.png', label: 'Compact balance', status: 'Explored', text: 'A dense balance-and-tabs direction that served frequent traders well but made the first view feel more technical.' },
  { image: '/images/projects/equora/explorations/home-alt2.png', label: 'Address-forward', status: 'Killed', text: 'A direction that elevated the wallet address. Useful for repeat copying, but too much noise for the default holder experience.' },
  { image: '/images/projects/equora/explorations/home-alt3.png', label: 'Calm action tiles', status: 'Evolved', text: 'A balance-first layout with clear actions. It improved composure, though the tiles consumed too much of the opening screen.' },
  { image: '/images/projects/equora/flow/04-home.png', label: 'Selected direction', status: 'Selected', text: 'The final design keeps the balance-first clarity and condenses actions so the holdings remain immediately visible.' },
];

const journey = [
  ['/images/projects/equora/flow/01-start-menu.png', 'Enter'],
  ['/images/projects/equora/flow/03-recovery-phrase.png', 'Secure'],
  ['/images/projects/equora/flow/04-home.png', 'Hold'],
  ['/images/projects/equora/flow/07-swap.png', 'Swap'],
  ['/images/projects/equora/flow/10-send.png', 'Send'],
];

function CaseFacts() {
  return <dl className="evidence-facts">
    <div><dt>Role</dt><dd>Product Designer<br />Independent concept</dd></div>
    <div><dt>Scope</dt><dd>Mobile wallet<br />Onboarding to transfer</dd></div>
    <div><dt>Timeline</dt><dd>4 weeks<br />Solo project</dd></div>
    <div><dt>Output</dt><dd>11 flow screens<br />4 home explorations</dd></div>
  </dl>;
}

export default function Equora() {
  return <main id="main-content" tabIndex={-1} className="case-page case-equora">
    <section className="case-cover equora-cover">
      <div className="case-cover-mark">E</div>
      <div className="folio-wrap case-cover-wrap case-cover-text-only">
        <div className="case-cover-heading">
          <p className="folio-eyebrow">04 / Self-custody wallet</p>
          <h1>Equora</h1>
          <p>A self-custody crypto wallet designed to make irreversible money feel understandable before people are asked to act.</p>
        </div>
        <div className="case-cover-statement"><span>Trust is a product behavior, not a disclaimer</span><b>04</b></div>
        <div className="case-cover-facts"><span>Trust design</span><span>Mobile fintech</span><span>Independent concept</span></div>
      </div>
    </section>
    <CaseOverview slug="equora" />

    <section id="overview" className="case-intro equora-intro evidence-intro">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Opening snapshot</p>
        <div>
          <h2>In self-custody, the interface becomes part of the safety system.</h2>
          <p className="folio-body-copy">Equora is a concept for people who need to hold, explore, and move crypto without being treated as expert traders on day one. I designed it around risk-aware friction: effortless for safe actions, deliberate for actions that cannot be reversed.</p>
          <CaseFacts />
          <aside className="evidence-disclosure"><b>Portfolio note.</b> Equora is an independent concept. The case study documents design rationale and prototypes, not production behaviour, custody advice, or financial performance.</aside>
        </div>
      </div>
    </section>

    <section className="evidence-section equora-ink">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Context + framing</p>
        <div>
          <h2 className="evidence-title">A wallet should remove ceremony from safe actions and add it to irreversible ones.</h2>
          <div className="evidence-columns">
            <div><h3>What makes the category hard</h3><p>People must protect a recovery phrase, judge the meaning of network and recipient details, and confirm transactions that cannot simply be recalled.</p></div>
            <div><h3>How I framed the design</h3><p>The goal was not zero friction. It was friction in proportion to risk, paired with an interface that explains what is happening before the person commits.</p></div>
          </div>
          <div className="success-model"><p className="folio-eyebrow">Design model</p><div><span>Product objective</span><strong>Make the consequences of a wallet action legible before the action becomes final.</strong></div><div><span>Experience outcome</span><strong>Let a new holder understand their value and choices without learning a trading terminal.</strong></div><div><span>Guardrail</span><strong>Never make a high-risk step feel as casual as a low-risk one.</strong></div></div>
        </div>
      </div>
    </section>

    <section className="evidence-section evidence-ownership equora-ownership">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Scope + system</p>
        <div>
          <h2 className="evidence-title">The product had to teach, orient, and protect within the same mobile flow.</h2>
          <div className="evidence-columns evidence-ownership-grid">
            <div><h3>Secure entry</h3><p>Start state, password creation, and recovery-phrase handling framed to signal both responsibility and the limits of recovery.</p></div>
            <div><h3>Calm orientation</h3><p>A holdings home and market surfaces organised around value, context, and inspectable detail instead of day-trader density.</p></div>
            <div><h3>Risk-aware action</h3><p>Swap, buy, payment, send, and receive paths that make the relevant confirmation weight match the consequence of each action.</p></div>
          </div>
          <p className="evidence-collaboration">As a solo concept project, I owned the framing, interaction architecture, visual system, and prototype decisions across the complete mobile journey.</p>
        </div>
      </div>
    </section>

    <section id="decisions" className="evidence-section evidence-decisions equora-decisions">
      <div className="folio-wrap"><p className="folio-eyebrow">Decision log</p><h2 className="evidence-title">The product earns trust through placement, hierarchy, and intentional delay.</h2>
        <div className="evidence-decision-list">{decisions.map((item) => <article className="evidence-decision" key={item.number}>
          <div className="evidence-decision-copy"><span>{item.number}</span><h3>{item.title}</h3><dl><div><dt>Rationale</dt><dd>{item.evidence}</dd></div><div><dt>Decision</dt><dd>{item.decision}</dd></div><div><dt>Tradeoff</dt><dd>{item.tradeoff}</dd></div></dl></div>
          <figure><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 90vw, 46vw" className="object-cover object-top" /></figure>
        </article>)}</div>
      </div>
    </section>

    <section className="evidence-section equora-explorations">
      <div className="folio-wrap"><p className="folio-eyebrow">Alternatives + tradeoffs</p><h2 className="evidence-title">The home screen was explored as a question of trust, not decoration.</h2>
        <div className="evidence-explorations">{explorations.map((item) => <article key={item.label}><figure><Image src={item.image} alt={`${item.label} home-screen exploration`} fill sizes="(max-width: 800px) 82vw, 42vw" className="object-cover object-top" /></figure><div><span>{item.status}</span><h3>{item.label}</h3><p>{item.text}</p></div></article>)}</div>
      </div>
    </section>

    <section className="evidence-section equora-journey-section">
      <div className="folio-wrap"><p className="folio-eyebrow">Core journey</p><h2 className="evidence-title">The interface shifts its weight as the risk of the action changes.</h2>
        <div className="evidence-columns"><div><h3>Low-friction orientation</h3><p>Getting started, understanding a balance, and receiving funds preserve focus and move quickly. These moments should feel calm and self-explanatory.</p></div><div><h3>High-intent confirmation</h3><p>Recovery, swap, and send paths bring the person closer to the information that makes the decision consequential before they confirm it.</p></div></div>
        <div className="evidence-journey">{journey.map(([image, label], index) => <figure key={label}><Image src={image} alt={`Equora ${label} screen`} fill sizes="(max-width: 800px) 68vw, 25vw" className="object-cover object-top" /><figcaption><b>{String(index + 1).padStart(2, '0')}</b> {label}</figcaption></figure>)}</div>
      </div>
    </section>

    <section id="outcome" className="evidence-section evidence-outcome equora-outcome">
      <div className="folio-wrap"><p className="folio-eyebrow">Delivered concept</p><h2 className="evidence-title">A complete mobile wallet grammar for trust-aware decisions.</h2><div className="evidence-outcome-grid"><article><strong>11</strong><h3>Designed flow screens<br /><small>From first launch through holdings and the primary transaction paths</small></h3></article><article><strong>4</strong><h3>Home-screen directions<br /><small>Explored before selecting a calmer balance-first hierarchy</small></h3></article><article><strong>1</strong><h3>Risk model<br /><small>Low-friction action where safe; deliberate confirmation where irreversible</small></h3></article></div><p className="evidence-caption">This project is a design concept. It does not provide financial advice or claim production adoption, custody security, or transaction performance.</p></div>
    </section>

    <section className="case-closing equora-closing"><div className="folio-wrap"><p className="folio-eyebrow">Reflection</p><p>In a product where mistakes are permanent, calmness is not minimalism. It is a form of clarity.</p><div className="evidence-reflection"><p>I would validate the risk language and recovery-phrase comprehension with first-time wallet holders before advancing the product. The next design question is whether people recognise the difference between a reassuring interface and a genuinely understood decision.</p></div><Link href="/projects/qualifyze">Next story / Qualifyze <span>↗</span></Link></div></section>
    <CaseStudyNav current="equora" />
    <Footer />
  </main>;
}
