import CaseStudy from '@/components/CaseStudy';
import { getCaseStudyBySlug } from '@/lib/caseStudiesData';
import { notFound } from 'next/navigation';

export default function AarnaPage() {
  const data = getCaseStudyBySlug('aarna');
  if (!data) notFound();
  return <CaseStudy data={data} />;
}
