import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const research = [
  ['~12', 'Support calls observed', 'Screen-share sessions with travel agents over two weeks.'],
  ['4', 'Travel-admin interviews', '45-minute conversations across two client companies.'],
  ['~18', 'Beta users', 'A six-week weekly feedback loop with internal dogfood users.'],
  ['~200', 'Failure tickets reviewed', 'Every booking-failure ticket from the preceding quarter.'],
];

const decisions = [
  {
    number: '01',
    title: 'Use a price anchor, not a comparison table',
    image: '/images/projects/miraee/flow/02-flight-search-card.png',
    alt: 'Miraee flight option showing a price benchmark',
    evidence: 'Support tickets repeatedly asked “is this a good price?” Three of four travel admins said their agents were taking screenshots of comparison fares to reassure travelers.',
    decision: 'I put one “Price to Beat” benchmark at the top of the result conversation. Each option is judged against one clear reference point instead of asking people to decode a matrix.',
    tradeoff: 'A full table offered more detail but collapsed on mobile. The anchor deliberately keeps the decision one-dimensional: beat it, or explain why not.',
  },
  {
    number: '02',
    title: 'Make the trip the object of approval',
    image: '/images/projects/miraee/flow/09-booking-summary.png',
    alt: 'Miraee booking summary with trip items',
    evidence: 'Admins described reconstructing one trip from three separate confirmation emails before they could approve it.',
    decision: 'One expandable summary holds flight, hotel, car, and add-ons. Every line carries its own policy state, so the booking summary is also the compliance view.',
    tradeoff: 'Expanding in place costs some detail density, but the decision and confirm action never leave the person’s sight.',
  },
  {
    number: '03',
    title: 'Treat policy explanation as a trust feature',
    image: '/images/projects/miraee/flow/05-reason-for-selection.png',
    alt: 'Miraee screen explaining the reason for a selected option',
    evidence: 'Two beta users abandoned bookings after an unexplained policy rejection. Both expressed the same concern: they did not know what they had done wrong.',
    decision: 'Exception states state the rule, the exact cost difference, and the assistant’s rationale. Approval replies include the manager’s reason and any conditions.',
    tradeoff: 'This adds vertical bulk to chat. I kept the normal path terse and intentionally over-explained the exceptions.',
  },
  {
    number: '04',
    title: 'Design the recovery conversation',
    image: '/images/projects/miraee/flow/11-cancellation-failed.png',
    alt: 'Miraee cancellation and failure state',
    evidence: 'An early silent failure state prompted people to refresh mid-booking, producing 14 duplicate-hold incidents in the first beta week.',
    decision: 'The conversation explains the human consequence—what is paid, pending, or needs action—while a separate activity stream reveals what the agent is retrying.',
    tradeoff: 'Two surfaces duplicate a little status information. Combining them made the chat read like a server log, so separation was the clearer choice.',
  },
];

function CaseFacts() {
  return <dl className="evidence-facts">
    <div><dt>Role</dt><dd>Senior Product Designer<br />Sole designer, AI booking pod</dd></div>
    <div><dt>Scope</dt><dd>Enterprise travel · Mobile<br />Concept to GA</dd></div>
    <div><dt>Timeline</dt><dd>~7 months<br />In production</dd></div>
    <div><dt>Team</dt><dd>2 PMs · 6 engineers<br />2 AI/ML engineers</dd></div>
  </dl>;
}

export default function Miraee() {
  return <main className="case-page case-miraee">
    <section className="case-cover miraee-cover">
      <div className="case-cover-mark">M</div>
      <div className="folio-wrap case-cover-wrap case-cover-text-only">
        <div className="case-cover-heading">
          <p className="folio-eyebrow">01 / Enterprise AI travel</p>
          <h1>Miraee</h1>
          <p>An AI travel assistant where search, policy, booking, approval, and recovery happen in one conversation.</p>
        </div>
        <div className="case-cover-statement"><span>Decision support, not booking automation</span><b>01</b></div>
        <div className="case-cover-facts"><span>Senior product design</span><span>AI decision systems</span><span>Web and mobile</span></div>
      </div>
    </section>

    <section className="case-intro evidence-intro">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Opening snapshot</p>
        <div>
          <h2>Business travel was not a booking problem. It was a decision and accountability problem.</h2>
          <p className="folio-body-copy">Miraee sits between traveler intent and company governance. I designed the booking experience and trust layer so price, policy, approvals, and recovery were understood together—not discovered after a mistake.</p>
          <CaseFacts />
          <aside className="evidence-disclosure"><b>Confidentiality note.</b> This is company work. Screens are recreated for portfolio use; proprietary performance data and unreleased details are omitted.</aside>
        </div>
      </div>
    </section>

    <section className="evidence-section evidence-ink">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Context + stakes</p>
        <div>
          <h2 className="evidence-title">A disconnected system created avoidable risk.</h2>
          <div className="evidence-columns">
            <div><h3>What was happening</h3><p>Booking, policy, and approval lived in separate tools. Policy was usually enforced after the traveler had committed; approvers saw high costs with little of the reasoning behind them.</p></div>
            <div><h3>How I reframed it</h3><p>The assistant needed to make a recommendation legible, not merely execute one. Policy, price context, and approval reasoning had to travel with the conversation.</p></div>
          </div>
          <div className="success-model"><p className="folio-eyebrow">Success model</p><div><span>Product objective</span><strong>Turn a fragmented booking flow into one accountable decision.</strong></div><div><span>User outcome</span><strong>Travelers and approvers can act with the same context.</strong></div><div><span>Guardrail</span><strong>No silent policy, payment, or partial-booking state.</strong></div></div>
        </div>
      </div>
    </section>

    <section className="evidence-section evidence-research">
      <div className="folio-wrap">
        <div className="evidence-section-heading"><p className="folio-eyebrow">Discovery evidence</p><h2 className="evidence-title">I started with the places the service was already breaking.</h2></div>
        <div className="evidence-metric-grid">{research.map(([number, label, detail]) => <article key={label}><strong>{number}</strong><h3>{label}</h3><p>{detail}</p></article>)}</div>
        <div className="evidence-note"><b>Constraint that changed the design:</b> corporate travel purpose gates real policy rules. The intake could not be generic; “client meeting” and “offsite” have different permission and approval paths.</div>
      </div>
    </section>

    <section className="evidence-section evidence-ownership">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Ownership + collaboration</p>
        <div>
          <h2 className="evidence-title">I owned the conversational product, from intent to recovery.</h2>
          <div className="evidence-columns evidence-ownership-grid">
            <div><h3>Booking system</h3><p>Conversation architecture, flight/hotel/car cards, overlays, add-ons, and the booking summary.</p></div>
            <div><h3>Policy and trust</h3><p>Policy checks, exception rationale, approvals, and the information each actor needs to make a decision.</p></div>
            <div><h3>Failure and recovery</h3><p>Partial bookings, payment failures, cancellations, and the agent activity stream.</p></div>
          </div>
          <p className="evidence-collaboration">I worked with two PMs, six engineers, and two AI/ML engineers. Conversational architecture and model behavior were shared decisions; I owned the visual and interaction system.</p>
        </div>
      </div>
    </section>

    <section className="evidence-section evidence-decisions">
      <div className="folio-wrap"><p className="folio-eyebrow">Decision log</p><h2 className="evidence-title">The UI follows the evidence, including where it says “don’t add more UI.”</h2>
        <div className="evidence-decision-list">{decisions.map((item) => <article className="evidence-decision" key={item.number}>
          <div className="evidence-decision-copy"><span>{item.number}</span><h3>{item.title}</h3><dl><div><dt>Evidence</dt><dd>{item.evidence}</dd></div><div><dt>Decision</dt><dd>{item.decision}</dd></div><div><dt>Tradeoff</dt><dd>{item.tradeoff}</dd></div></dl></div>
          <figure><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 90vw, 46vw" className="object-cover object-top" /></figure>
        </article>)}</div>
      </div>
    </section>

    <section className="evidence-section evidence-ink evidence-validation">
      <div className="folio-wrap folio-split"><p className="folio-eyebrow">Validation + delivery</p><div>
        <h2 className="evidence-title">The product had to handle the messy middle before it could earn trust.</h2>
        <div className="evidence-validation-grid"><article><span>01</span><h3>Make intent parseable</h3><p>Early open-ended prompts produced roughly 40% unparseable answers in internal logs. I replaced them with contextual quick replies wherever structured input could do the work.</p></article><article><span>02</span><h3>Test attention, then move the signal</h3><p>In five moderated pre-ship sessions, people missed the policy badge above fare. I moved it inline with price; on retest, all five participants noticed it.</p></article><article><span>03</span><h3>Validate with the people who govern the trip</h3><p>A three-week UAT with two pilot client companies tested approval and recovery paths, not just the traveler’s happy path.</p></article></div>
        <div className="evidence-flow"><p className="folio-eyebrow">Shipped system</p><p>Intent <b>→</b> Search with price context <b>→</b> Booking summary <b>→</b> Policy and approval <b>→</b> Explicit recovery</p></div>
      </div></div>
    </section>

    <section className="evidence-section evidence-outcome">
      <div className="folio-wrap"><p className="folio-eyebrow">Outcome</p><h2 className="evidence-title">Shipped as a coherent decision system.</h2><div className="evidence-outcome-grid"><article><strong>6</strong><h3>Corporate clients live in the first quarter after GA</h3></article><article><strong>1</strong><h3>Component grammar for flights, hotels, cars, add-ons, and approvals</h3></article><article><strong>0</strong><h3>Silent policy decisions by design: blocks, exceptions, and approvals carry reasoning</h3></article></div><p className="evidence-caption">Adoption and efficiency metrics are measured internally and remain NDA-restricted. The visible outcome here is the product behavior and operating model that shipped.</p></div>
    </section>

    <section className="case-closing miraee-closing"><div className="folio-wrap"><p className="folio-eyebrow">Reflection</p><p>Failure states should have been the starting point, not a retrofit to the happy path.</p><div className="evidence-reflection"><p>Next time, I would prototype earlier with live model output and spend more iteration budget on the approver’s exception path—not only on the traveler’s journey.</p></div><Link href="/projects/aarna">Next story / Aarna <span>↗</span></Link></div></section>
    <Footer />
  </main>;
}
