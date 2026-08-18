import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const decisions = [
  {
    number: '01',
    title: 'Optimise the result row for scanning, not browsing',
    image: '/images/projects/mondee/flow/02-search-results.png',
    alt: 'Mondee flight search results',
    evidence: 'The search surface holds airline, schedule, fare, rules, and partner-specific information at once. Agents need to compare options repeatedly, often before the traveller is ready to decide.',
    decision: 'I organised every result around a strict scan order: route and time first, fare and availability next, then the details that require a deliberate inspection.',
    tradeoff: 'Some information moves one interaction deeper. The alternative—making every row fully self-contained—would make comparison slower and create more visual noise.',
  },
  {
    number: '02',
    title: 'Bring fare flexibility into the choice',
    image: '/images/projects/mondee/flow/03-flexible-ticket.png',
    alt: 'Mondee flexible ticket options',
    evidence: 'Change, cancellation, and protection conditions affect the value of a fare, but they are easy to miss when treated as a footnote after selection.',
    decision: 'Flexible ticket options are surfaced at the decision point as a comparable layer of the flight choice, with the rule and price relationship visible together.',
    tradeoff: 'This asks an agent to make one more decision in a time-sensitive flow. It is preferable to a later surprise when the fare cannot be changed or refunded.',
  },
  {
    number: '03',
    title: 'Use one layout grammar across travel products',
    image: '/images/projects/mondee/flow/04-packages.png',
    alt: 'Mondee travel packages interface',
    evidence: 'Flights and packages have different inventories, but agents move between them inside the same working day. A new product line should not require a new interaction model.',
    decision: 'Packages inherit the same hierarchy, comparison patterns, and action placement as flights, allowing the product to extend without forcing a fresh learning curve.',
    tradeoff: 'A shared grammar limits some product-specific expression. The gain is a more predictable system that is easier to learn, build, and maintain.',
  },
];

const journey = [
  ['/images/projects/mondee/flow/01-home.jpg', 'Home'],
  ['/images/projects/mondee/flow/02-search-results.png', 'Search'],
  ['/images/projects/mondee/flow/03-flexible-ticket.png', 'Decide'],
  ['/images/projects/mondee/flow/04-packages.png', 'Extend'],
  ['/images/projects/mondee/flow/05-mobile-checkout.png', 'Checkout'],
];

function CaseFacts() {
  return <dl className="evidence-facts">
    <div><dt>Role</dt><dd>UI/UX Designer<br />Enterprise travel</dd></div>
    <div><dt>Scope</dt><dd>Agent booking platform<br />Search to checkout</dd></div>
    <div><dt>Status</dt><dd>Shipped company work<br />Details NDA-protected</dd></div>
    <div><dt>System</dt><dd>Flights, fares, packages<br />and mobile checkout</dd></div>
  </dl>;
}

export default function Mondee() {
  return <main className="case-page case-mondee">
    <section className="case-cover mondee-cover">
      <div className="case-cover-mark">M</div>
      <div className="folio-wrap case-cover-wrap case-cover-text-only">
        <div className="case-cover-heading">
          <p className="folio-eyebrow">03 / Travel operations</p>
          <h1>Mondee</h1>
          <p>An enterprise travel platform designed to help agents compare complex inventory, explain fare rules, and complete bookings with confidence.</p>
        </div>
        <div className="case-cover-statement"><span>Operational speed without hiding the details</span><b>03</b></div>
        <div className="case-cover-facts"><span>Enterprise travel</span><span>Information systems</span><span>Web + mobile</span></div>
      </div>
    </section>

    <section className="case-intro mondee-intro evidence-intro">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Opening snapshot</p>
        <div>
          <h2>A travel agent does not need fewer choices. They need a faster way to make the right one.</h2>
          <p className="folio-body-copy">Mondee supports travel agents and partners working through high-volume, detail-heavy booking flows. I designed the core experience around an operational reality: people need to scan, compare, explain, and act without losing the rules that make a booking viable.</p>
          <CaseFacts />
          <aside className="evidence-disclosure"><b>Confidentiality note.</b> This is shipped company work. Screens are shown for portfolio use; customer data, internal performance metrics, and partner-specific business rules are omitted.</aside>
        </div>
      </div>
    </section>

    <section className="evidence-section evidence-ink mondee-ink">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Context + stakes</p>
        <div>
          <h2 className="evidence-title">Travel operations are a comparison problem under real constraints.</h2>
          <div className="evidence-columns">
            <div><h3>What agents are balancing</h3><p>Schedules, availability, fare conditions, price, traveller needs, and partner context coexist in one decision. Density is not a bug here; unclear hierarchy is.</p></div>
            <div><h3>How I framed the work</h3><p>The system should help an agent move quickly while keeping the fare logic visible enough to explain the decision to someone else.</p></div>
          </div>
          <div className="success-model"><p className="folio-eyebrow">Design model</p><div><span>Product objective</span><strong>Turn high-density travel inventory into a fast, defensible agent decision.</strong></div><div><span>Experience outcome</span><strong>Key fare and rule information stays legible while choices remain comparable.</strong></div><div><span>Guardrail</span><strong>Do not trade operational clarity for superficial simplification.</strong></div></div>
        </div>
      </div>
    </section>

    <section className="evidence-section evidence-ownership mondee-ownership">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Scope + collaboration</p>
        <div>
          <h2 className="evidence-title">I worked on the surfaces agents return to throughout the booking day.</h2>
          <div className="evidence-columns evidence-ownership-grid">
            <div><h3>Search and comparison</h3><p>Dense result rows, filters, fare hierarchy, and action placement designed for repeated comparison rather than consumer-style exploration.</p></div>
            <div><h3>Fare decision support</h3><p>Flexible ticket details and booking information made visible where a choice is made, not after a rule has already created a problem.</p></div>
            <div><h3>Product consistency</h3><p>A shared layout grammar across flights, packages, and checkout so the platform can grow without resetting the agent’s mental model.</p></div>
          </div>
          <p className="evidence-collaboration">The work was shaped with product, engineering, and operations stakeholders. Each design decision had to respect inventory logic, partner dependencies, and the edge cases of real bookings.</p>
        </div>
      </div>
    </section>

    <section className="evidence-section evidence-decisions mondee-decisions">
      <div className="folio-wrap"><p className="folio-eyebrow">Decision log</p><h2 className="evidence-title">The UI reduces the time to compare without pretending the work is simple.</h2>
        <div className="evidence-decision-list">{decisions.map((item) => <article className="evidence-decision" key={item.number}>
          <div className="evidence-decision-copy"><span>{item.number}</span><h3>{item.title}</h3><dl><div><dt>Evidence</dt><dd>{item.evidence}</dd></div><div><dt>Decision</dt><dd>{item.decision}</dd></div><div><dt>Tradeoff</dt><dd>{item.tradeoff}</dd></div></dl></div>
          <figure><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 90vw, 46vw" className="object-cover object-top" /></figure>
        </article>)}</div>
      </div>
    </section>

    <section className="evidence-section mondee-flow-section">
      <div className="folio-wrap"><p className="folio-eyebrow">Shipped journey</p><h2 className="evidence-title">One booking grammar, from the first search to mobile checkout.</h2>
        <div className="evidence-columns"><div><h3>Compare before committing</h3><p>The early surfaces focus on a quick, stable hierarchy for searching and weighing options, with fare flexibility attached to the decision instead of buried in rules.</p></div><div><h3>Carry context to completion</h3><p>Packages and checkout retain the same visual grammar so the decision made upstream survives the rest of the workflow.</p></div></div>
        <div className="evidence-journey">{journey.map(([image, label], index) => <figure key={label}><Image src={image} alt={`Mondee ${label} screen`} fill sizes="(max-width: 800px) 68vw, 25vw" className="object-cover object-top" /><figcaption><b>{String(index + 1).padStart(2, '0')}</b> {label}</figcaption></figure>)}</div>
      </div>
    </section>

    <section className="evidence-section evidence-outcome mondee-outcome">
      <div className="folio-wrap"><p className="folio-eyebrow">Delivered system</p><h2 className="evidence-title">A clearer operating model for complex travel inventory.</h2><div className="evidence-outcome-grid"><article><strong>5</strong><h3>Connected booking surfaces<br /><small>Home, search, fare flexibility, packages, and checkout</small></h3></article><article><strong>1</strong><h3>Reusable comparison grammar<br /><small>Designed to move across product lines and device contexts</small></h3></article><article><strong>0</strong><h3>Invented portfolio metrics<br /><small>Operational performance remains private; the visible outcome is the shipped system</small></h3></article></div><p className="evidence-caption">The work shipped as part of a broader enterprise platform. Company metrics and partner-specific outcomes are not disclosed here.</p></div>
    </section>

    <section className="case-closing mondee-closing"><div className="folio-wrap"><p className="folio-eyebrow">Reflection</p><p>In enterprise work, clarity is not the absence of information. It is the ability to find the information that changes the decision.</p><div className="evidence-reflection"><p>The system works best when consistent patterns absorb operational complexity instead of forcing an agent to remember how every category behaves. Given more space, I would expose more of the decision-support rationale at the moment of comparison.</p></div><Link href="/projects/pranik">Next story / Pranik <span>↗</span></Link></div></section>
    <Footer />
  </main>;
}
