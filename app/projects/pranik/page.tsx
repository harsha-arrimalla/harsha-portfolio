import Image from '@/components/InspectableImage';
import CaseStudyNav from '@/components/CaseStudyNav';
import CaseOverview from '@/components/CaseOverview';
import Link from 'next/link';
import Footer from '@/components/Footer';

const decisions = [
  {
    number: '01',
    title: 'Start with the concern, not a clinical form',
    image: '/images/projects/pranik/flow/04-ai-chat.png',
    alt: 'Pranik symptom conversation screen',
    evidence: 'The patient flow begins with a plain-language conversation rather than a catalogue of medical terms. That choice makes the first interaction feel closer to describing a concern than completing intake paperwork.',
    decision: 'I used a conversational entry point with clear prompts, so people can begin with what they feel and be guided toward useful context and actions.',
    tradeoff: 'Conversation is less dense than a clinical form. The design reserves structured details for the moments where they make the next action clearer.',
  },
  {
    number: '02',
    title: 'Keep the care path visible after the chat',
    image: '/images/projects/pranik/flow/10-appointments.png',
    alt: 'Pranik appointment and follow-up screen',
    evidence: 'The patient experience includes appointments, reminders, records, and report scanning. That set of surfaces shows a need that lasts beyond one question-and-answer moment.',
    decision: 'I designed the home, appointment, reminder, and report surfaces as one care-continuity layer—not separate utility features.',
    tradeoff: 'A fuller home needs careful prioritisation. The most immediate follow-up is given prominence while longer-term information stays available without taking over.',
  },
  {
    number: '03',
    title: 'Treat language as a core path, not a preference toggle',
    image: '/images/projects/pranik/flow/03-home.png',
    alt: 'Pranik health home screen',
    evidence: 'I designed dedicated Hindi and Telugu experiences alongside patient and doctor views. Localisation is therefore a product surface, not a post-launch translation exercise.',
    decision: 'The same information architecture is carried across patient, clinician, Hindi, and Telugu views so the service can remain legible across people and contexts.',
    tradeoff: 'Each language adds content and QA work. Reusing one interaction grammar protects consistency while allowing the language itself to do the communicating.',
  },
];

const artifacts = [
  { title: 'Patient’s view', description: 'The patient-facing care journey, from concern to follow-up.', src: '/images/projects/pranik/designs/patients-view.png', width: 2200, height: 1540 },
  { title: 'Doctor’s view', description: 'A care-team view designed to preserve the context behind the patient’s next step.', src: '/images/projects/pranik/designs/doctors-view.png', width: 2200, height: 1186 },
  { title: 'Hindi experience', description: 'A dedicated Hindi interface for the same care journey.', src: '/images/projects/pranik/designs/hindi.png', width: 1800, height: 2432 },
  { title: 'Telugu experience', description: 'A dedicated Telugu interface, designed as a first-class product path.', src: '/images/projects/pranik/designs/telugu.webp', width: 2200, height: 1017 },
];

const journey = [
  ['/images/projects/pranik/flow/01-onboarding.png', 'Enter'],
  ['/images/projects/pranik/flow/03-home.png', 'Understand'],
  ['/images/projects/pranik/flow/04-ai-chat.png', 'Ask'],
  ['/images/projects/pranik/flow/09-doctor-detail.png', 'Connect'],
  ['/images/projects/pranik/flow/11-reminders.png', 'Continue'],
];

function CaseFacts() {
  return <dl className="evidence-facts">
    <div><dt>Role</dt><dd>Product Designer<br />End-to-end experience</dd></div>
    <div><dt>Scope</dt><dd>Care companion<br />Patient and clinician</dd></div>
    <div><dt>Timeline</dt><dd>3-week concept<br />Mobile product</dd></div>
    <div><dt>Output</dt><dd>Patient, doctor, Hindi<br />and Telugu views</dd></div>
  </dl>;
}

export default function Pranik() {
  return <main id="main-content" tabIndex={-1} className="case-page case-pranik">
    <section className="case-cover pranik-cover">
      <div className="case-cover-mark">P</div>
      <div className="folio-wrap case-cover-wrap case-cover-text-only">
        <div className="case-cover-heading">
          <p className="folio-eyebrow">05 / Care companion</p>
          <h1>Pranik</h1>
          <p>A care companion designed to make the next health step feel clearer, calmer, and easier to follow through.</p>
        </div>
        <div className="case-cover-statement"><span>Care that keeps people in context</span><b>03</b></div>
        <div className="case-cover-facts"><span>Product design</span><span>Mobile care journeys</span><span>Patient + clinician</span></div>
      </div>
    </section>
    <CaseOverview slug="pranik" />

    <section id="overview" className="case-intro pranik-intro evidence-intro">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Opening snapshot</p>
        <div>
          <h2>Health questions do not end when a chat does.</h2>
          <p className="folio-body-copy">Pranik explores care as an ongoing relationship: a person needs a way to describe a concern, understand what comes next, retain context, and connect with a clinician when it matters. I designed the product as a continuous path rather than a single symptom-checking interaction.</p>
          <CaseFacts />
          <aside className="evidence-disclosure"><b>Portfolio note.</b> This case study documents a concept project through its product concepts. It focuses on the design decisions and artifacts rather than clinical or adoption claims.</aside>
        </div>
      </div>
    </section>

    <section className="evidence-section pranik-ink">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Context + framing</p>
        <div>
          <h2 className="evidence-title">The hard part is turning uncertainty into a next step people can act on.</h2>
          <div className="evidence-columns">
            <div><h3>Patient moment</h3><p>A person may arrive with only a feeling, a report, or an unanswered question. The product must make room for that ambiguity before asking for precise information.</p></div>
            <div><h3>Care moment</h3><p>A useful companion cannot stop at explanation. It needs to maintain context across conversations, follow-up, appointments, reminders, and clinician connection.</p></div>
          </div>
          <div className="success-model"><p className="folio-eyebrow">Design model</p><div><span>Product objective</span><strong>Make a health concern easier to express, understand, and carry forward.</strong></div><div><span>Experience outcome</span><strong>One coherent path from a first question to a more informed next step.</strong></div><div><span>Guardrail</span><strong>Do not imply diagnosis or certainty where the product cannot provide it.</strong></div></div>
        </div>
      </div>
    </section>

    <section className="evidence-section evidence-ownership pranik-ownership">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Scope + system</p>
        <div>
          <h2 className="evidence-title">One care system, designed for the people on both sides of the conversation.</h2>
          <div className="evidence-columns evidence-ownership-grid">
            <div><h3>Patient journey</h3><p>Onboarding, health home, symptom conversation, avatar guidance, appointments, reminders, and report scanning.</p></div>
            <div><h3>Clinician context</h3><p>A parallel doctor view that supports continuity rather than asking patients to retell their situation at every handoff.</p></div>
            <div><h3>Language access</h3><p>Hindi and Telugu are included as designed experiences, ensuring the product story is not limited to one language path.</p></div>
          </div>
          <p className="evidence-collaboration">The design challenge was not to add more screens. It was to give each actor the right context without making the care experience feel administrative.</p>
        </div>
      </div>
    </section>

    <section id="decisions" className="evidence-section evidence-decisions pranik-decisions">
      <div className="folio-wrap"><p className="folio-eyebrow">Decision log</p><h2 className="evidence-title">The experience makes room for uncertainty, then turns it into a path forward.</h2>
        <div className="evidence-decision-list">{decisions.map((item) => <article className="evidence-decision" key={item.number}>
          <div className="evidence-decision-copy"><span>{item.number}</span><h3>{item.title}</h3><dl><div><dt>Rationale</dt><dd>{item.evidence}</dd></div><div><dt>Decision</dt><dd>{item.decision}</dd></div><div><dt>Tradeoff</dt><dd>{item.tradeoff}</dd></div></dl></div>
          <figure><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 90vw, 46vw" className="object-cover object-top" /></figure>
        </article>)}</div>
      </div>
    </section>

    <section className="evidence-section pranik-artifacts-section">
      <div className="folio-wrap">
        <p className="folio-eyebrow">Design evidence</p>
        <h2 className="evidence-title">The work extends beyond one mobile flow.</h2>
        <p className="pranik-artifacts-intro">These design exports show the product across patient and doctor contexts, with Hindi and Telugu as dedicated care experiences. Explore each view to inspect the full design.</p>
        <div className="pranik-artifact-grid">{artifacts.map((artifact, index) => <article key={artifact.src}>
          <div className="pranik-artifact-meta"><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{artifact.title}</h3><p>{artifact.description}</p></div></div>
          <figure><Image src={artifact.src} alt={`${artifact.title} design export`} width={artifact.width} height={artifact.height} sizes="(max-width: 800px) 90vw, 45vw" /></figure>
        </article>)}</div>
      </div>
    </section>

    <section className="evidence-section pranik-ink evidence-validation">
      <div className="folio-wrap"><p className="folio-eyebrow">The care path</p><h2 className="evidence-title">The interaction moves from concern to continuity—not from form to dead end.</h2>
        <div className="evidence-columns"><div><h3>Give the first step a human scale</h3><p>Conversational entry, avatars, and plain-language prompts create a softer start for a subject that can be intimidating or deeply personal.</p></div><div><h3>Keep the next action in view</h3><p>Health home, appointment, reminder, and doctor surfaces make care feel like a path with memory rather than an isolated interaction.</p></div></div>
        <div className="evidence-journey">{journey.map(([image, label], index) => <figure key={label}><Image src={image} alt={`Pranik ${label} screen`} fill sizes="(max-width: 800px) 68vw, 25vw" className="object-cover object-top" /><figcaption><b>{String(index + 1).padStart(2, '0')}</b> {label}</figcaption></figure>)}</div>
      </div>
    </section>

    <section id="outcome" className="evidence-section evidence-outcome pranik-outcome">
      <div className="folio-wrap"><p className="folio-eyebrow">Delivered system</p><h2 className="evidence-title">A concept with a complete care grammar.</h2><div className="evidence-outcome-grid"><article><strong>4</strong><h3>Role and language views<br /><small>Patient, doctor, Hindi, and Telugu</small></h3></article><article><strong>5</strong><h3>Connected journey moments<br /><small>Enter, understand, ask, connect, and continue</small></h3></article><article><strong>1</strong><h3>Shared care context<br /><small>Designed to move with the person, not disappear after a conversation</small></h3></article></div><p className="evidence-caption">The portfolio documents the designed system and outputs. It does not represent clinical validation, medical guidance, or production performance.</p></div>
    </section>

    <section className="case-closing pranik-closing"><div className="folio-wrap"><p className="folio-eyebrow">Reflection</p><p>A care companion earns trust by making the next step clearer without pretending to have every answer.</p><div className="evidence-reflection"><p>The strongest move in the work is its breadth: patient, clinician, and language-specific views all belong to one product story. The next phase would be to validate the moments where people need human reassurance most.</p></div><Link href="/projects/miraee">Next story / Miraee <span>↗</span></Link></div></section>
    <CaseStudyNav current="pranik" />
    <Footer />
  </main>;
}
