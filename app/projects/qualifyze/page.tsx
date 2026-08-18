import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const methods = [
  ['01', 'Product teardown', 'Mapped the supplier onboarding, audit request and execution, report lifecycle, and CAPA follow-up workflows.'],
  ['02', 'Domain + compliance scan', 'Reviewed GxP and regulated supply-chain constraints to understand traceability and data-integrity expectations.'],
  ['03', 'Comparative benchmark', 'Compared the product positioning with audit-management and broader QMS-style platforms.'],
];

const insights = [
  ['Onboarding', 'Onboarding remained the highest-friction stage despite the strength of the audit-library assets.'],
  ['Risk + CAPA', 'Risk and CAPA were logically connected but visually separated, increasing the effort needed to assess a supplier.'],
  ['Priority', 'Dashboards communicated status, but not always the action priority for time-sensitive work.'],
];

const artifacts = [
  { title: 'Research + workflow diagnosis', description: 'Methods, three research insights, and the supplier-qualification workflow mapped in the original independent study.', src: '/images/projects/qualifyze/evidence/research-and-workflow.png', width: 1105, height: 1430 },
  { title: 'Opportunity + concept direction', description: 'The prioritisation model and proposed unified supplier risk workspace, including risk, CAPA, and action layers.', src: '/images/projects/qualifyze/evidence/opportunity-and-direction.png', width: 1105, height: 1430 },
  { title: 'Validation + limitations', description: 'Success measures to test, the next research plan, and the boundaries of this secondary-research study.', src: '/images/projects/qualifyze/evidence/validation-and-limits.png', width: 1105, height: 1430 },
];

function CaseFacts() {
  return <dl className="evidence-facts">
    <div><dt>Role</dt><dd>Product Designer<br />Independent study</dd></div>
    <div><dt>Scope</dt><dd>Research, UX audit<br />and concept direction</dd></div>
    <div><dt>Timeline</dt><dd>1 week<br />Solo project</dd></div>
    <div><dt>Method</dt><dd>Secondary research<br />Public information</dd></div>
  </dl>;
}

export default function Qualifyze() {
  return <main className="case-page case-qualifyze">
    <section className="case-cover qualifyze-cover">
      <div className="case-cover-mark">Q</div>
      <div className="folio-wrap case-cover-wrap case-cover-text-only">
        <div className="case-cover-heading">
          <p className="folio-eyebrow">05 / Independent UX study</p>
          <h1>Qualifyze</h1>
          <p>A research-led case study on supplier qualification in life sciences, focused on making risk, CAPA, and the next action easier to assess together.</p>
        </div>
        <div className="case-cover-statement"><span>Decision clarity under regulatory risk</span><b>05</b></div>
        <div className="case-cover-facts"><span>Enterprise UX</span><span>Compliance systems</span><span>Research + strategy</span></div>
      </div>
    </section>

    <section className="case-intro qualifyze-intro evidence-intro">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Opening snapshot</p>
        <div>
          <h2>In compliance, a dashboard is useful only when it makes the next decision less ambiguous.</h2>
          <p className="folio-body-copy">This independent UX study examined Qualifyze’s public product ecosystem through supplier onboarding, audits, CAPAs, and risk monitoring. I looked for the moments where a team has information but still lacks a decision-ready view of what needs attention now.</p>
          <CaseFacts />
          <aside className="evidence-disclosure"><b>Integrity note.</b> This is not Qualifyze client or employee work. It is based on secondary research and public product information; the recommendations are directional and require primary research and usability testing before roadmap use.</aside>
        </div>
      </div>
    </section>

    <section className="evidence-section qualifyze-ink">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">Problem framing</p>
        <div>
          <h2 className="evidence-title">Supplier qualification demands speed without relaxing the evidence trail.</h2>
          <div className="evidence-columns">
            <div><h3>Business problem</h3><p>Qualification delays increase operational and regulatory risk. Teams need to reach a supplier decision faster without compromising compliance quality.</p></div>
            <div><h3>User problem</h3><p>QA and procurement users can lack one place to connect supplier risk, audit status, and CAPA progress in a decision-ready format.</p></div>
          </div>
          <div className="success-model"><p className="folio-eyebrow">Study question</p><div><span>Opportunity</span><strong>Where can the product reduce analysis overhead without concealing the evidence needed for accountability?</strong></div><div><span>Experience outcome</span><strong>Make the supplier’s current risk and next action easier to understand together.</strong></div><div><span>Guardrail</span><strong>Keep assumptions explicit; do not present secondary research as validated customer insight.</strong></div></div>
        </div>
      </div>
    </section>

    <section className="evidence-section qualifyze-methods">
      <div className="folio-wrap"><p className="folio-eyebrow">Research approach</p><h2 className="evidence-title">I started by following the workflow where risk changes hands.</h2>
        <div className="evidence-metric-grid qualifyze-method-grid">{methods.map(([number, title, description]) => <article key={number}><strong>{number}</strong><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="qualifyze-flow"><span>Supplier identified</span><b>→</b><span>Audit data search</span><b>→</b><span>Audit decision</span><b>→</b><span>Findings + CAPA</span><b>→</b><span>Risk reassessment</span></div>
      </div>
    </section>

    <section className="evidence-section evidence-ownership qualifyze-insights">
      <div className="folio-wrap folio-split">
        <p className="folio-eyebrow">What I learned</p>
        <div>
          <h2 className="evidence-title">The strongest opportunities were connections between existing information, not another dashboard.</h2>
          <div className="evidence-columns evidence-ownership-grid">{insights.map(([title, description]) => <div key={title}><h3>{title}</h3><p>{description}</p></div>)}</div>
          <p className="evidence-collaboration">This was a solo study, so the next step is deliberately collaborative: validate the hypotheses with QA leads, procurement managers, auditors, and product stakeholders who own the operational reality.</p>
        </div>
      </div>
    </section>

    <section className="evidence-section qualifyze-direction">
      <div className="folio-wrap"><p className="folio-eyebrow">Concept direction</p><h2 className="evidence-title">Unify the supplier signal before asking a person to decide.</h2>
        <div className="evidence-columns"><article><h3>Risk layer</h3><p>Current score, trend, and the trigger explanation so the person can understand why a supplier’s status changed.</p></article><article><h3>CAPA layer</h3><p>Open items, owners, due windows, and blocker visibility so remediation work is part of the decision—not a separate destination.</p></article><article><h3>Action layer</h3><p>A clear prompt to monitor, re-audit, or escalate, with the decision supported by the visible risk and CAPA context.</p></article></div>
        <div className="evidence-note"><b>Prioritisation:</b> a unified supplier risk + CAPA workspace, action-first sorting with urgency states, and guided supplier onboarding were treated as high-impact directions. Role-based saved filters, overdue CAPA reminders, and confidence labels for AI risk scoring were lower-effort supporting opportunities.</div>
      </div>
    </section>

    <section className="evidence-section qualifyze-artifacts-section">
      <div className="folio-wrap"><p className="folio-eyebrow">Study evidence</p><h2 className="evidence-title">The original audit artifacts make the reasoning inspectable.</h2>
        <div className="qualifyze-artifact-grid">{artifacts.map((artifact, index) => <article key={artifact.src}><div className="qualifyze-artifact-meta"><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{artifact.title}</h3><p>{artifact.description}</p></div></div><figure><Image src={artifact.src} alt={artifact.title} width={artifact.width} height={artifact.height} sizes="(max-width: 800px) 90vw, 45vw" /></figure></article>)}</div>
      </div>
    </section>

    <section className="evidence-section qualifyze-ink evidence-validation">
      <div className="folio-wrap"><p className="folio-eyebrow">Validation plan</p><h2 className="evidence-title">The concept should be tested as a decision aid, not judged as a static dashboard.</h2>
        <div className="evidence-validation-grid"><article><span>01</span><h3>Interview the decision owners</h3><p>Conduct 8 to 12 interviews across QA leads, procurement managers, and auditors to understand how risk and CAPA evidence are actually combined.</p></article><article><span>02</span><h3>Test prioritisation tasks</h3><p>Run task-based usability testing on supplier prioritisation and CAPA follow-up scenarios before treating the workspace as a roadmap answer.</p></article><article><span>03</span><h3>Evaluate AI interpretability</h3><p>Test trust in risk explanations and confidence labels, particularly where an AI-derived signal could influence a regulated decision.</p></article></div>
        <div className="evidence-flow"><p className="folio-eyebrow">If implemented, measure</p><p>Time to qualified supplier <b>→</b> On-time CAPA closure <b>→</b> Decision confidence</p></div>
      </div>
    </section>

    <section className="evidence-section evidence-outcome qualifyze-outcome">
      <div className="folio-wrap"><p className="folio-eyebrow">Study output</p><h2 className="evidence-title">A testable product hypothesis, not a claimed product outcome.</h2><div className="evidence-outcome-grid"><article><strong>3</strong><h3>Research methods<br /><small>Product teardown, compliance scan, and comparative benchmark</small></h3></article><article><strong>3</strong><h3>Connected decision layers<br /><small>Risk, CAPA, and recommended action at the supplier level</small></h3></article><article><strong>0</strong><h3>Invented performance claims<br /><small>All proposed measures remain hypotheses until tested</small></h3></article></div><p className="evidence-caption">A detailed PDF of the original independent study remains available for readers who want to inspect the full source, workflow mapping, and references.</p><a className="qualifyze-download" href="/case-studies/Harsha_Qualifyze_UX_Case_Study_v2.pdf" download="Harsha_Qualifyze_UX_Case_Study_v2.pdf">Download the full study <span>↓</span></a></div>
    </section>

    <section className="case-closing qualifyze-closing"><div className="folio-wrap"><p className="folio-eyebrow">Reflection</p><p>Compliance UX is not just about showing status. It is about reducing uncertainty at the moment a person needs to act.</p><div className="evidence-reflection"><p>The study’s strongest recommendation is not a bigger dashboard. It is a decision surface where risk, remediation, and ownership can be understood together—and then validated with the people who carry the consequences.</p></div><Link href="/projects/miraee">Return to selected work / Miraee <span>↗</span></Link></div></section>
    <Footer />
  </main>;
}
