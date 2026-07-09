// Single source of truth for case study order, titles, and taglines.
// The order here drives the homepage grid numbering and the
// previous/next navigation on every case study page.

export interface CaseStudyMeta {
    slug: string;
    title: string;
    tagline: string;
    href: string;
}

export const CASE_STUDIES: CaseStudyMeta[] = [
    {
        slug: 'miraee',
        title: 'Miraee',
        tagline: 'AI travel assistant for corporate teams',
        href: '/projects/miraee',
    },
    {
        slug: 'aarna',
        title: 'Aarna',
        tagline: 'AI travel marketplace — 10K+ users',
        href: '/projects/aarna',
    },
    {
        slug: 'hita',
        title: 'Hita',
        tagline: 'Self-initiated AI travel companion',
        href: '/projects/hita',
    },
    {
        slug: 'pranik',
        title: 'Pranik',
        tagline: 'AI healthcare companion built on trust',
        href: '/projects/pranik',
    },
    {
        slug: 'mondee',
        title: 'Mondee',
        tagline: 'Enterprise travel platforms at agent scale',
        href: '/projects/mondee',
    },
    {
        slug: 'equora',
        title: 'Equora',
        tagline: 'Self-custody crypto wallet',
        href: '/projects/equora',
    },
    {
        slug: 'qualifyze',
        title: 'Qualifyze',
        tagline: 'Supplier qualification UX study',
        href: '/projects/qualifyze',
    },
];
