import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

const projects = [
  {
    number: '01', title: 'Miraee', type: 'Enterprise AI travel', href: '/projects/miraee',
    statement: 'An AI travel workspace that makes policy, approval, and recovery understandable.',
    image: '/images/projects/miraee/flow/03-workspace-flights.png', palette: 'miraee',
    logo: '/images/projects/miraee_logo.png',
    details: ['Product strategy', 'UX systems', 'Web + mobile'],
  },
  {
    number: '02', title: 'Aarna', type: 'AI travel marketplace', href: '/projects/aarna',
    statement: 'A planning experience that turns a loose feeling into a trip worth taking.',
    image: '/images/projects/aarna/flow/04-trip-plan.png', palette: 'aarna',
    logo: '/images/projects/aarna_logo.png',
    details: ['Product design', 'Discovery', 'iOS + web'],
  },
];

const archiveProjects = [
  { number: '03', title: 'Mondee', type: 'Travel operations', logo: '/images/projects/mondee_logo_v2.png', href: '/projects/mondee', status: 'View case study ↗' },
  { number: '04', title: 'Equora', type: 'Self-custody wallet', logo: '/images/projects/equora_logo-transparent.png', logoClass: 'folio-logo-ink', href: '/projects/equora', status: 'View case study ↗' },
  { number: '05', title: 'Pranik', type: 'Care companion', logo: '/images/projects/pranik_logo-transparent.png', href: '/projects/pranik', status: 'View case study ↗' },
  { number: '06', title: 'Qualifyze', type: 'B2B qualification', href: '/projects/qualifyze', status: 'View case study ↗' },
];

const capabilities = [
  { number: '01', title: 'Product ownership', description: 'Framing problems, researching behaviour, testing ideas, reading the funnel, and making the trade-off decisions that move a product forward.', tools: ['0→1 design', 'User research', 'Usability testing', 'Funnel analysis'] },
  { number: '02', title: 'Design craft', description: 'Clear systems and resilient interfaces for dense workflows, with attention to hierarchy, responsive behaviour, and the states people encounter in the real world.', tools: ['Design systems', 'Data-dense UI', 'Edge & error states', 'WCAG AA'] },
  { number: '03', title: 'AI workflows', description: 'Conversational and agentic experiences that make intelligence understandable, keep people in control, and turn AI output into a usable next step.', tools: ['Conversational UX', 'Agentic patterns', 'UX writing', 'Research synthesis'] },
  { number: '04', title: 'Build & handoff', description: 'Code-based prototyping and front-end delivery that make a decision testable before handoff, then legible to the team that ships it.', tools: ['React + Next.js', 'React Native', 'TypeScript', 'Agile + JIRA'] },
  { number: '05', title: 'Visual & motion', description: 'A visual-design foundation that brings pace and intention to product interactions without sacrificing the clarity of the system.', tools: ['Typography', 'Motion design', 'After Effects', 'Blender'] },
];

const toolkits = [
  { label: 'Product & design systems', items: ['Figma', 'Components + variants', 'Auto layout', 'Variables + tokens', 'Framer', 'Google Stitch'] },
  { label: 'Visual & motion', items: ['After Effects', 'Illustrator', 'Photoshop', 'Blender', 'Typography', 'Interaction design'] },
  { label: 'Build', items: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'HTML + CSS'] },
  { label: 'AI workflow', items: ['Claude Code', 'Cursor', 'Figma MCP', 'Code-based prototyping', 'UX writing', 'Research synthesis'] },
];

const journey = [
  { period: '2023 — now', role: 'Senior Product Designer', company: 'Mondee', description: 'Leading product design across AI travel, supplier workflows, design systems, and cross-platform delivery.' },
  { period: '2022 — 2023', role: 'UI/UX Designer', company: 'Virtusa', description: 'Delivered wireframes, high-fidelity product UI, prototypes, and design-system updates for client teams.' },
  { period: '2022', role: 'UI/UX Designer', company: 'GlobalLogic', description: 'Built interactive prototypes and component-based interfaces for complex web and mobile products.' },
  { period: 'Independent', role: 'AI Product Builder', company: 'Hita', description: 'Explored conversational travel planning through a self-initiated concept, from interaction model to working prototype.' },
];

const reviews = [
  { quote: 'Harsha designs like an engineer and ships like one too.', attribution: 'Product Manager, Mondee' },
  { quote: 'Rare designer who prototypes in production code.', attribution: 'Engineering Lead, Mondee' },
];

export default function HomePage() {
  return (
    <main>
      <section className="folio-hero">
        <div className="folio-hero-grid" aria-hidden="true" />
        <span className="folio-hero-slash" aria-hidden="true" />
        <div className="folio-wrap folio-hero-content">
          <div className="folio-kicker"><span>Independent practice</span><span>2026 / Hyderabad, IN</span></div>
          <h1 className="folio-title"><span>HARSHA</span><span>ARRIMALLA</span></h1>
          <div className="folio-hero-bottom">
            <div className="folio-hero-copy"><p>Senior product designer creating expressive systems for people making consequential decisions.</p><a className="folio-hero-resume" href="/Harshavardhan-Arrimalla-Product-Designer-Resume.pdf" download>Download résumé <span>↓</span></a></div>
            <a href="#work" className="folio-round-link">Scroll to<br />selected work <b>↓</b></a>
          </div>
        </div>
        <p className="folio-side-label">Design / Direction / Systems /</p>
      </section>

      <section className="folio-manifesto" id="about">
        <div className="folio-wrap folio-split"><p className="folio-eyebrow">What I care about</p><div><p className="folio-quote">Products can have personality <em>and</em> precision.</p><p className="folio-body-copy">I work where real-world complexity meets a human moment: travel, money, policy, health, and AI. The job is to make the system feel legible without flattening what makes it useful.</p></div></div>
      </section>

      <section className="folio-capabilities" id="skills">
        <div className="folio-wrap">
          <div className="folio-section-heading"><p className="folio-eyebrow">Capabilities / 05</p><h2>From the first question<br />to the shipped detail.</h2></div>
          <div className="folio-capability-list">{capabilities.map((capability) => <article key={capability.number} className="folio-capability"><span>{capability.number}</span><h3>{capability.title}</h3><p>{capability.description}</p><ul>{capability.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></article>)}</div>
          <div className="folio-toolbelt"><p className="folio-eyebrow">Toolset, in practice</p><div>{toolkits.map((toolkit) => <article key={toolkit.label}><h3>{toolkit.label}</h3><ul>{toolkit.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div>
        </div>
      </section>

      <section className="folio-work" id="work">
        <div className="folio-wrap"><div className="folio-work-heading"><p className="folio-eyebrow">Selected work / 02</p><h2>Stories built<br />from the inside out.</h2></div>
          <div className="folio-projects">
            {projects.map((project) => (
              <Link href={project.href} key={project.title} className={`folio-project folio-project-${project.palette}`}>
                <div className="folio-project-meta"><span>{project.number}</span><span>{project.type}</span><span>View project ↗</span></div>
                <div className="folio-project-main"><div><div className="folio-project-logo"><Image src={project.logo} alt={project.title + ' logo'} width={380} height={120} /></div><h3 className="sr-only">{project.title}</h3><p>{project.statement}</p></div><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
                <div className="folio-product-frame"><div className="folio-product-glow" /><Image src={project.image} alt={`${project.title} product screen`} fill sizes="(max-width: 768px) 90vw, 62vw" className="object-cover object-top" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="folio-archive"><div className="folio-wrap"><p className="folio-eyebrow">Also in the archive</p><div className="folio-archive-grid">{archiveProjects.map((project) => { const card = <><span>{project.number}</span><div className={project.logo ? 'folio-archive-logo' : 'folio-archive-logo folio-archive-wordmark'}>{project.logo ? <Image className={project.logoClass} src={project.logo} alt={project.title + ' logo'} width={310} height={120} /> : project.title}</div><p>{project.type}</p><b>{project.status ?? 'In development'}</b></>; return project.href ? <Link href={project.href} key={project.title} className="folio-archive-card">{card}</Link> : <article key={project.title}>{card}</article>; })}</div></div></section>

      <section className="folio-journey" id="journey">
        <div className="folio-wrap">
          <div className="folio-section-heading"><p className="folio-eyebrow">Career journey</p><h2>Built in teams.<br />Sharpened in practice.</h2></div>
          <div className="folio-timeline">{journey.map((entry) => <article key={`${entry.company}-${entry.period}`}><p>{entry.period}</p><div><h3>{entry.role}</h3><strong>{entry.company}</strong></div><p>{entry.description}</p></article>)}</div>
        </div>
      </section>

      <section className="folio-reviews" id="reviews">
        <div className="folio-wrap">
          <p className="folio-eyebrow">Selected feedback</p>
          <div className="folio-review-grid">{reviews.map((review) => <figure key={review.attribution}><blockquote>“{review.quote}”</blockquote><figcaption>{review.attribution}</figcaption></figure>)}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
