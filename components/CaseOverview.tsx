import Image from './InspectableImage';
import { CASE_STUDIES } from '@/lib/projects';

export default function CaseOverview({ slug }: { slug: string }) {
  const project = CASE_STUDIES.find((entry) => entry.slug === slug);
  if (!project) return null;
  return <section className="case-preview" aria-label={`${project.title} at a glance`}>
    <div className="folio-wrap case-preview-grid">
      <div><p className="folio-eyebrow">{project.status}</p><h2>{project.tagline}</h2><nav className="case-jump-links" aria-label="Case study sections"><a href="#overview">Overview</a><a href="#decisions">Design decisions</a><a href="#outcome">Outcome</a><a href="/#work">All work</a></nav></div>
      <figure><Image src={project.image} alt={`${project.title}: ${project.tagline}`} fill sizes="(max-width: 800px) 90vw, 45vw" className="object-contain" priority /></figure>
    </div>
  </section>;
}
