import CaseStudy from '@/components/CaseStudy';
import { getCaseStudyBySlug } from '@/lib/caseStudiesData';
import { notFound } from 'next/navigation';

export default function HitaPage() {
  const data = getCaseStudyBySlug('hita');
  if (!data) notFound();
  return <CaseStudy data={data} />;
}
