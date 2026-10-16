/**
 * Project logos.
 *
 * The source files are raster and inconsistent: some are drawn in white for
 * dark backgrounds, some in black for light ones, and one project has no logo
 * at all. `on` records the background each piece of artwork was made for, so
 * the renderer can sit it on a matching chip instead of letting it vanish in
 * one of the two themes.
 *
 * Replacing any of these with an SVG is the real fix — drop it in
 * public/images/projects/ and point `src` at it.
 */

export interface LogoAsset {
    src: string;
    /** Background the artwork needs: 'any' means it reads on both. */
    on: 'dark' | 'light' | 'any';
    /** Set for files that already bake in their own background. */
    opaque?: boolean;
    /**
     * Exact plate colour for opaque files, so the baked-in background
     * disappears into the card behind it.
     */
    plate?: string;
    /**
     * Hard width cap in px for low-resolution sources, so they are never
     * scaled past their native size and go soft.
     */
    cap?: number;
}

export const LOGOS: Record<string, LogoAsset | null> = {
    // Only 338px wide at source — capped so it stays crisp.
    miraee: { src: '/images/projects/miraee_logo.png', on: 'any', cap: 340 },
    aarna: { src: '/images/projects/aarna_logo.png', on: 'dark' },
    // Alpha channel present but the background is solid white, so the
    // plate matches it exactly.
    hita: {
        src: '/images/projects/hita_logo.png',
        on: 'light',
        opaque: true,
        plate: '#ffffff',
    },
    mondee: { src: '/images/projects/mondee_logo_v2.png', on: 'any' },
    equora: { src: '/images/projects/equora_logo-transparent.png', on: 'dark' },
    // The '-transparent' cut of this one has a broken alpha key, so the flat
    // cream original is used instead.
    pranik: {
        src: '/images/projects/pranik_logo.png',
        on: 'light',
        opaque: true,
        plate: '#f8f0e1',
    },
    // No logo asset exists — qualifyze_logo.png is a page screenshot, not a
    // mark. Renders as a type-set wordmark until a real file is supplied.
    qualifyze: null,
};

export function getLogo(slug: string): LogoAsset | null {
    return LOGOS[slug] ?? null;
}

/**
 * How a project's brand plate should be painted: 'light' plates carry
 * artwork drawn in black, everything else sits on the dark field.
 */
export function getPlate(slug: string): {
    logo: LogoAsset | null;
    tone: 'light' | 'dark';
    color?: string;
} {
    const logo = getLogo(slug);
    if (!logo) return { logo: null, tone: 'dark' };
    return {
        logo,
        tone: logo.on === 'light' ? 'light' : 'dark',
        color: logo.plate,
    };
}
