import CaseStudy from '@/components/CaseStudy';
import { getCaseStudyBySlug } from '@/lib/caseStudiesData';
import { notFound } from 'next/navigation';

export default function MondeePage() {
  const data = getCaseStudyBySlug('mondee');
  if (!data) notFound();
  return <CaseStudy data={data} />;
}
