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
            <p>Senior product designer creating expressive systems for people making consequential decisions.</p>
            <a href="#work" className="folio-round-link">Scroll to<br />selected work <b>↓</b></a>
          </div>
        </div>
        <p className="folio-side-label">Design / Direction / Systems /</p>
      </section>

      <section className="folio-manifesto" id="about">
        <div className="folio-wrap folio-split"><p className="folio-eyebrow">What I care about</p><div><p className="folio-quote">Products can have personality <em>and</em> precision.</p><p className="folio-body-copy">I work where real-world complexity meets a human moment: travel, money, policy, health, and AI. The job is to make the system feel legible without flattening what makes it useful.</p></div></div>
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
      <Footer />
    </main>
  );
}
