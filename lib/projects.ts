export interface CaseStudyMeta {
  slug: string; title: string; tagline: string; href: string; status: string; image: string;
}
export const CASE_STUDIES: CaseStudyMeta[] = [
  { slug: 'miraee', title: 'Miraee', tagline: 'Policy, approval and recovery in one travel workspace', status: 'Company work · In production', image: '/images/projects/miraee/flow/03-workspace-flights.png', href: '/projects/miraee' },
  { slug: 'aarna', title: 'Aarna', tagline: 'Conversational creation and traveler discovery', status: 'Marketplace · Launched', image: '/images/projects/aarna/flow/04-trip-plan.png', href: '/projects/aarna' },
  { slug: 'mondee', title: 'Mondee', tagline: 'Search and comparison for travel operations', status: 'Shipped company work', image: '/images/projects/mondee/flow/02-search-results.png', href: '/projects/mondee' },
  { slug: 'equora', title: 'Equora', tagline: 'Mobile wallet interaction and trust', status: 'Independent concept', image: '/images/projects/equora/flow/04-home.png', href: '/projects/equora' },
  { slug: 'pranik', title: 'Pranik', tagline: 'Patient, clinician and language journeys', status: 'Care concept', image: '/images/projects/pranik/flow/03-home.png', href: '/projects/pranik' },
  { slug: 'qualifyze', title: 'Qualifyze', tagline: 'Supplier qualification and action prioritisation', status: 'Independent UX study', image: '/images/projects/qualifyze/evidence/opportunity-and-direction.png', href: '/projects/qualifyze' },
  { slug: 'hita', title: 'Hita', tagline: 'A self-initiated conversational travel prototype', status: 'Independent prototype', image: '/images/projects/hita.png', href: '/projects/hita' },
];
