/**
 * Cursor sprites, drawn on a 24×24 grid.
 *
 * Each shape returns inner SVG markup; the stage wraps it in one <svg> and
 * offsets it by the hotspot so the point of the cursor lands on the position
 * the engine reports rather than the top-left of its box.
 */

import type { AgentShape } from './types';

/** Where the business end of each sprite sits inside its 24×24 box. */
export const HOTSPOT: Record<AgentShape, [number, number]> = {
    arrow: [4, 3],
    dup: [4, 3],
    cross: [12, 12],
    ibeam: [12, 12],
    pen: [3.5, 3.5],
};

/**
 * The multiplayer pointer.
 *
 * Four points — tip, right shoulder, inner notch, tail — carried by a round
 * line join rather than hand-placed corners. That join is what gives these
 * cursors their soft, slightly inflated silhouette in a design tool; the same
 * polygon with a mitre and a hairline reads as a diagram of a cursor instead
 * of a cursor. The white casing is a second stroke underneath, so the sprite
 * stays legible on artwork of any colour.
 */
const POINTER = 'M4 3 L20 10.1 L12.9 12.7 L10.3 20.3 Z';

function pointer(color: string, opacity = 1): string {
    return (
        `<path d="${POINTER}" fill="#fff" stroke="#fff" stroke-width="2.7" stroke-linejoin="round" opacity="${opacity}"/>` +
        `<path d="${POINTER}" fill="${color}" stroke="${color}" stroke-width="1.1" stroke-linejoin="round" opacity="${opacity}"/>`
    );
}

export function cursorSprite(shape: AgentShape, color: string): string {
    switch (shape) {
        case 'arrow':
            return pointer(color);

        case 'dup':
            // The pointer plus a ghost of itself: the ⌥-drag copy cursor.
            return (
                `<g transform="translate(5 4.5)">${pointer(color, 0.4)}</g>` +
                pointer(color) +
                `<g stroke-linecap="round" fill="none">` +
                `<path d="M19 17 V23 M16 20 H22" stroke="#fff" stroke-width="3.2"/>` +
                `<path d="M19 17 V23 M16 20 H22" stroke="${color}" stroke-width="1.5"/></g>`
            );

        case 'cross': {
            const d = 'M12 2.5 V21.5 M2.5 12 H21.5';
            return (
                `<g stroke-linecap="round" fill="none">` +
                `<path d="${d}" stroke="#fff" stroke-width="3.6"/>` +
                `<path d="${d}" stroke="${color}" stroke-width="1.5"/></g>`
            );
        }

        case 'ibeam': {
            const d =
                'M8.8 4 H10.6 Q12 4 12 5.4 Q12 4 13.4 4 H15.2 M12 5.4 V18.6 ' +
                'M8.8 20 H10.6 Q12 20 12 18.6 Q12 20 13.4 20 H15.2';
            return (
                `<g fill="none" stroke-linecap="round">` +
                `<path d="${d}" stroke="#fff" stroke-width="3.6"/>` +
                `<path d="${d}" stroke="${color}" stroke-width="1.5"/></g>`
            );
        }

        case 'pen': {
            const nib = 'M3.5 3.5 L12.4 7.1 L16.8 11.5 L11.5 16.8 L7.1 12.4 Z';
            const tail = 'M16.8 11.5 L20.4 15.1 L15.1 20.4 L11.5 16.8 Z';
            return (
                `<path d="${nib}" fill="${color}" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>` +
                `<path d="${tail}" fill="${color}" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>` +
                `<path d="M4.4 4.4 L9.6 9.6" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>` +
                `<circle cx="10.9" cy="10.9" r="1.7" fill="none" stroke="#fff" stroke-width="1.2"/>`
            );
        }
    }
}

/**
 * Agent identities. Named after people whose work this portfolio's subject
 * actually stands on — type, interaction and systems design.
 */
export const AGENT_NAMES = [
    'Ada', 'Grace', 'Radia', 'Hedy', 'Katherine', 'Margaret', 'Frances', 'Joan',
    'Dorothy', 'Mary', 'Anita', 'Sophie', 'Jean', 'Lynn', 'Barbara', 'Ida',
    'Alan', 'Linus', 'Dennis', 'Ken', 'Guido', 'Bjarne', 'Tim', 'Rob',
];

/** Figma's multiplayer palette, which is the visual reference for all of this. */
export const AGENT_COLORS = [
    '#F24E1E', '#A259FF', '#1ABCFE', '#0ACF83', '#FF7262', '#FFC700',
    '#9747FF', '#E8467C', '#14AE5C', '#0D99FF', '#FF8A00', '#00B5CE',
];

export const SELECT_BLUE = '#0D99FF';
export const MEASURE_RED = '#F24822';
