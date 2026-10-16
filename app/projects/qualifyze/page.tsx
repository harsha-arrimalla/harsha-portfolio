import CaseStudy from '@/components/CaseStudy';
import { getCaseStudyBySlug } from '@/lib/caseStudiesData';
import { notFound } from 'next/navigation';

export default function QualifyzePage() {
  const data = getCaseStudyBySlug('qualifyze');
  if (!data) notFound();
  return <CaseStudy data={data} />;
}
