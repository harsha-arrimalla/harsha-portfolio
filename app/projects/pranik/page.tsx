import CaseStudy from '@/components/CaseStudy';
import { getCaseStudyBySlug } from '@/lib/caseStudiesData';
import { notFound } from 'next/navigation';

export default function PranikPage() {
  const data = getCaseStudyBySlug('pranik');
  if (!data) notFound();
  return <CaseStudy data={data} />;
}
