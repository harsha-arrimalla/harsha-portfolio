import Image from '@/components/InspectableImage';
import CaseStudyNav from '@/components/CaseStudyNav';
import CaseOverview from '@/components/CaseOverview';
import Link from 'next/link';
import Footer from '@/components/Footer';

const explorations = [
  { image: '/images/projects/aarna/iterations/discover-v1.jpg', label: 'Mood-first feed', status: 'Evolved', text: 'Mood chips scoped the feed before inventory appeared. It was the strongest route from a fuzzy feeling to a useful filter.' },
  { image: '/images/projects/aarna/iterations/discover-v2.jpg', label: 'Proactive planner', status: 'Evolved', text: 'Ready-made plans answered the empty state well, but a permanently proactive assistant felt too pushy as the default.' },
  { image: '/images/projects/aarna/iterations/discover-v3.jpg', label: 'Avatar companion', status: 'Killed', text: 'It was charismatic, but median response was 6.5s vs 1.8s for text at roughly 9× the session cost. I kept it for chat, not Discover.' },
  { image: '/images/projects/aarna/flow/02-discover.jpg', label: 'Shipped direction', status: 'Shipped', text: 'A mood-scoped feed with occasional proactive suggestions, while the companion stays one tap away.' },
];

const journey = [
  ['/images/projects/aarna/flow/01-intent.png', 'Intent'],
  ['/images/projects/aarna/flow/02-discover.jpg', 'Discover'],
  ['/images/projects/aarna/flow/08-destination-comparison.png', 'Compare'],
  ['/images/projects/aarna/flow/04-trip-plan.png', 'Plan'],
  ['/images/projects/aarna/flow/11-my-plan.png', 'Own'],
];

function CaseFacts() {
  return <dl className="evidence-facts">
    <div><dt>Role</dt><dd>Lead Product Designer<br />One of two designers</dd></div>
    <div><dt>Scope</dt><dd>Web and mobile platform<br />Creator to traveler</dd></div>
    <div><dt>Timeline</dt><dd>4 months<br />AI marketplace</dd></div>
    <div><dt>Team</dt><dd>2 designers<br />4 engineers</dd></div>
  </dl>;
}

export default function Aarna() {
  return <main id="main-content" tabIndex={-1} className="case-page case-aarna">
    <section className="case-cover aarna-cover">
      <div className="case-cover-mark">A</div>
      <div className="folio-wrap case-cover-wrap case-cover-text-only">
        <div className="case-cover-heading"><p className="folio-eyebrow">02 / AI travel marketplace</p><h1>Aarna</h1><p>An AI marketplace that turns rough ideas into experiences people can create, choose, and book.</p></div>
        <div className="case-cover-statement"><span>One assistant, two marketplace sides</span><b>02</b></div>
        <div className="case-cover-facts"><span>Lead product design</span><span>Discovery and planning</span><span>iOS and web</span></div>
      </div>
    </section>
    <CaseOverview slug="aarna" />

    <section id="overview" className="case-intro aarna-intro evidence-intro">
      <div className="folio-wrap folio-split"><p className="folio-eyebrow">Opening snapshot</p><div>
        <h2>Forms were failing creators. Search was failing travelers.</h2>
        <p className="folio-body-copy">Aarna is a two-sided travel marketplace. I helped design Abhee, a conversational layer that creates structure from fuzzy intent—for people publishing experiences and people trying to choose one.</p>
        <CaseFacts />
      </div></div>
    </section>

    <section className="evidence-section evidence-aarna-dark">
      <div className="folio-wrap folio-split"><p className="folio-eyebrow">Context + framing</p><div>
        <h2 className="evidence-title">Both sides needed help turning an unstructured thought into a bookable thing.</h2>
        <div className="evidence-columns"><div><h3>Supply-side friction</h3><p>A 14-field listing form and a media-upload step that lost 48% of sessions. Creator materials arrived as raw text and PDFs; manual approval had a three-day backlog.</p></div><div><h3>Demand-side friction</h3><p>Travelers had inventory, but not a clear way to compare, imagine, and decide. Browsing did not turn into a plan people could own.</p></div></div>
        <div className="success-model"><p className="folio-eyebrow">Success model</p><div><span>Product objective</span><strong>Make marketplace supply easier to create and demand easier to decide.</strong></div><div><span>Measured user outcome</span><strong>More completed listings; less creator abandonment; credible traveler growth.</strong></div><div><span>Guardrail</span><strong>Keep quality consistent as AI-assisted inventory grows.</strong></div></div>
      </div></div>
    </section>

    <section className="evidence-section evidence-research aarna-research"><div className="folio-wrap"><div className="evidence-section-heading"><p className="folio-eyebrow">Research + constraints</p><h2 className="evidence-title">The failure pattern was visible in the funnel and in the creator workflow.</h2></div><div className="evidence-metric-grid"><article><strong>14</strong><h3>Fields in the original creator form</h3><p>Too much blank-page work before a creator could demonstrate value.</p></article><article><strong>48%</strong><h3>Sessions lost at media upload</h3><p>The original funnel exposed a specific point of abandonment.</p></article><article><strong>6</strong><h3>Creator interviews</h3><p>Plus a day shadowing a marketplace moderator handling inconsistent input.</p></article><article><strong>8</strong><h3>Creators in a two-week pilot</h3><p>Enough to expose where conversation needed an escape hatch.</p></article></div></div></section>

    <section className="evidence-section evidence-ownership"><div className="folio-wrap folio-split"><p className="folio-eyebrow">Role + collaboration</p><div><h2 className="evidence-title">I led the experience across both sides of the marketplace.</h2><div className="evidence-columns evidence-ownership-grid"><div><h3>Creator intake</h3><p>A guided dialogue that collects the details a creator does not know they need to sell.</p></div><div><h3>Traveler discovery</h3><p>Abhee’s discovery, comparison, and trip-planning experience.</p></div><div><h3>Reliable delivery</h3><p>Worked with four engineers on what the AI could extract or generate reliably, and with the second designer on the visual system.</p></div></div><p className="evidence-collaboration">The unifying move was not two different chatbots. It was one conversational grammar adapted for two audiences.</p></div></div></section>

    <section id="decisions" className="evidence-section evidence-decisions aarna-decisions"><div className="folio-wrap"><p className="folio-eyebrow">Supply-side solution</p><h2 className="evidence-title">Conversation to create. A form to correct.</h2><div className="evidence-columns evidence-ownership-grid"><article><h3>Guided prompts</h3><p>The assistant asks the questions a marketer would, drawing out details that turn a creator’s expertise into a listing.</p></article><article><h3>Generate and verify</h3><p>OCR reads brochures and PDFs to prefill a draft. The creator verifies rather than types from zero.</p></article><article><h3>Quality gate</h3><p>Automated scoring holds a consistent listing standard before moderator review.</p></article></div><div className="evidence-note"><b>Pilot finding → shipped change:</b> three of eight creators wanted to amend one field without replaying the whole conversation. The answer was an “edit as form” escape hatch.</div></div></section>

    <section className="evidence-section evidence-aarna-dark"><div className="folio-wrap"><p className="folio-eyebrow">Alternatives + tradeoffs</p><h2 className="evidence-title">Discover was explored as different product strategies, not cosmetic variants.</h2><div className="evidence-explorations">{explorations.map((item) => <article key={item.label}><figure><Image src={item.image} alt={`${item.label} exploration`} fill sizes="(max-width: 800px) 82vw, 42vw" className="object-cover object-top" /></figure><div><span>{item.status}</span><h3>{item.label}</h3><p>{item.text}</p></div></article>)}</div></div></section>

    <section className="evidence-section evidence-validation"><div className="folio-wrap"><p className="folio-eyebrow">Demand-side delivery</p><h2 className="evidence-title">Comparison became a first-class moment, because choosing is the hard part of travel.</h2><div className="evidence-columns"><div><h3>Dedicated comparison</h3><p>Destination and plan comparisons expose match score, mood, and cost side-by-side rather than burying the decision inside chat. The tradeoff: additional screens to build and maintain.</p></div><div><h3>One plan as source of truth</h3><p>Flights, stays, and cabs resolve into an inline itinerary instead of disconnected booking funnels. It sacrifices some inventory density but preserves the trip the person is actually building.</p></div></div><div className="evidence-journey">{journey.map(([image, label], index) => <figure key={label}><Image src={image} alt={`Aarna ${label} screen`} fill sizes="(max-width: 800px) 68vw, 25vw" className="object-cover object-top" /><figcaption><b>{String(index + 1).padStart(2, '0')}</b> {label}</figcaption></figure>)}</div></div></section>

    <section id="outcome" className="evidence-section evidence-outcome aarna-outcome"><div className="folio-wrap"><p className="folio-eyebrow">Measured outcome</p><h2 className="evidence-title">Marketplace results reported after launch.</h2><div className="evidence-outcome-grid"><article><strong>~3×</strong><h3>Listing volume<br /><small>~350 → ~1,100 listings/month; three months pre vs. post launch</small></h3></article><article><strong>−40%</strong><h3>Step-two abandonment<br /><small>62% → 37%; 25 percentage points lower, ~40% relative reduction. GA4 funnel, same windows</small></h3></article><article><strong>10K+</strong><h3>Signups in six months<br /><small>10,400 cumulative signups at the six-month mark</small></h3></article></div><p className="evidence-caption">These are pre/post launch observations, not an isolated estimate of design impact. Signups are cumulative registrations, not active users.</p></div></section>

    <section className="case-closing aarna-closing"><div className="folio-wrap"><p className="folio-eyebrow">Reflection</p><p>Ship comparison analytics from day one—and red-team a quality gate before the marketplace scales.</p><div className="evidence-reflection"><p>We measured listing creation rigorously, but the traveler comparison surfaces launched with too much intuition. A scoring system also invites gaming; adversarial testing should have happened earlier.</p></div><Link href="/projects/miraee">Previous story / Miraee <span>↗</span></Link></div></section>
    <CaseStudyNav current="aarna" />
    <Footer />
  </main>;
}
