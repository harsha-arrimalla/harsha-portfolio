import CaseStudy from '@/components/CaseStudy';
import { getCaseStudyBySlug } from '@/lib/caseStudiesData';
import { notFound } from 'next/navigation';

export default function EquoraPage() {
  const data = getCaseStudyBySlug('equora');
  if (!data) notFound();
  return <CaseStudy data={data} />;
}
