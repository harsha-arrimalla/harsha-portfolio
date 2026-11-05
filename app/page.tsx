import SwarmHome from '@/components/site/SwarmHome';
import { getRepoCards } from '@/lib/openSource';

// Live GitHub stats for the open-source section, refreshed hourly.
export const revalidate = 3600;

export default async function Page() {
    const repos = await getRepoCards();
    return <SwarmHome repos={repos} />;
}
