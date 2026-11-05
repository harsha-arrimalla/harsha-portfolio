import HomePage from '@/components/HomePage';
import { getRepoCards } from '@/lib/openSource';

/**
 * The previous homepage, kept reachable so the two directions can be
 * compared side by side before one of them is retired.
 */
export const revalidate = 3600;

export const metadata = { title: 'Harsha Arrimalla — previous homepage' };

export default async function ClassicPage() {
    const repos = await getRepoCards();
    return <HomePage repos={repos} />;
}
