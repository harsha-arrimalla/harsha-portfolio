export interface CaseStudyTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  muted: string;
  gradient: string;
  selection: string;
}

export const caseStudyTheme: CaseStudyTheme = {
  primary: '#6366F1',
  secondary: '#22D3EE',
  background: '#0B0F19',
  text: '#F8FAFC',
  muted: '#94A3B8',
  gradient:
    'radial-gradient(circle at 20% 0%, rgba(99, 102, 241, 0.18), transparent 60%), radial-gradient(circle at 90% 20%, rgba(34, 211, 238, 0.12), transparent 55%)',
  selection: '#6366F1'
};
