type RateLimitConfig = {
    interval: number; // Window size in milliseconds
    limit: number;    // Max requests per window
};

const trackers = new Map<string, { count: number; expiresAt: number }>();

export function rateLimit(ip: string, config: RateLimitConfig = { interval: 60 * 1000, limit: 10 }) {
    const now = Date.now();
    const cleanUp = () => {
        for (const [key, value] of trackers.entries()) {
            if (value.expiresAt < now) {
                trackers.delete(key);
            }
        }
    };

    // Lazy cleanup (optimization)
    if (Math.random() < 0.1) cleanUp();

    const tracker = trackers.get(ip) || { count: 0, expiresAt: now + config.interval };

    if (now > tracker.expiresAt) {
        tracker.count = 0;
        tracker.expiresAt = now + config.interval;
    }

    if (tracker.count >= config.limit) {
        return { success: false, limit: config.limit, remaining: 0, reset: tracker.expiresAt };
    }

    tracker.count++;
    trackers.set(ip, tracker);

    return {
        success: true,
        limit: config.limit,
        remaining: config.limit - tracker.count,
        reset: tracker.expiresAt
    };
}
