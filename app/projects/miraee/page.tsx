import CaseStudy from '@/components/CaseStudy';
import { getCaseStudyBySlug } from '@/lib/caseStudiesData';
import { notFound } from 'next/navigation';

export default function MiraeePage() {
  const data = getCaseStudyBySlug('miraee');
  if (!data) notFound();
  return <CaseStudy data={data} />;
}
