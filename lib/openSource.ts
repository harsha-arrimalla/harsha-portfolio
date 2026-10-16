import { SITE } from './site';

/**
 * Open-source work shown on the homepage.
 *
 * `FEATURED` is the curated order and the hand-written blurb for each repo.
 * Stars, language and the last-pushed date are pulled live from the GitHub
 * API at build time and refreshed hourly, so they never go stale in source.
 * If the API is unreachable (offline build, rate limit) the curated entries
 * still render — only the live stats are dropped.
 *
 * To add a repo: append its name here. To change wording: edit `blurb`.
 */

export interface FeaturedRepo {
    name: string;
    blurb: string;
    role: string;
}

export const FEATURED: FeaturedRepo[] = [
    {
        name: 'AIGIS.HITA',
        blurb:
            'Product site for Hita, the 12-agent conversational travel companion. Built alongside the case study on this site.',
        role: 'Design & build',
    },
    {
        name: 'indmoney-weekly-pulse',
        blurb:
            'A Python job that pulls Play Store reviews each week and summarises the themes with an LLM, so product signal arrives without manual triage.',
        role: 'Build',
    },
    {
        name: 'hita',
        blurb:
            'Working application repo for Hita — agent orchestration, itinerary state and the conversational surface.',
        role: 'Design & build',
    },
    {
        name: 'urum-silk-ecommerce',
        blurb: 'Storefront for a silk label: catalogue, product pages and checkout flow.',
        role: 'Design & build',
    },
    {
        name: 'amilionn-website',
        blurb: 'Marketing site build for Amilionn.',
        role: 'Design & build',
    },
    {
        name: 'harsha-portfolio',
        blurb:
            'This portfolio. Next.js, no template, MIT licensed — the case study data model is reusable if you want to fork it.',
        role: 'Design & build',
    },
];

export interface RepoCard extends FeaturedRepo {
    url: string;
    homepage: string | null;
    language: string | null;
    stars: number | null;
    pushedAt: string | null;
}

interface GitHubRepo {
    name: string;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    pushed_at: string;
}

/**
 * Merges the curated list with live GitHub metadata. Never throws: a failed
 * fetch degrades to the curated entries with no stats.
 */
export async function getRepoCards(): Promise<RepoCard[]> {
    let live: Record<string, GitHubRepo> = {};

    try {
        const res = await fetch(
            `https://api.github.com/users/${SITE.github}/repos?per_page=100&sort=updated`,
            {
                headers: { Accept: 'application/vnd.github+json' },
                next: { revalidate: 3600 },
            }
        );
        if (res.ok) {
            const repos: GitHubRepo[] = await res.json();
            live = Object.fromEntries(repos.map((r) => [r.name.toLowerCase(), r]));
        }
    } catch {
        /* offline or rate limited — curated entries still render */
    }

    return FEATURED.map((entry) => {
        const repo = live[entry.name.toLowerCase()];
        return {
            ...entry,
            url: repo?.html_url ?? `https://github.com/${SITE.github}/${entry.name}`,
            homepage: repo?.homepage || null,
            language: repo?.language ?? null,
            stars: repo ? repo.stargazers_count : null,
            pushedAt: repo?.pushed_at ?? null,
        };
    });
}
