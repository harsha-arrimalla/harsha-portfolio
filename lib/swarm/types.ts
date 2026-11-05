/**
 * Swarm — type contracts shared by the scanner, the engine and the stage.
 *
 * The model is deliberately small: the page is already real, server-rendered
 * HTML. The swarm only measures it, hides it, and draws it back. Nothing here
 * describes content — only how a piece of the page gets built.
 */

export type ItemKind = 'rect' | 'text' | 'image' | 'line' | 'chip';

export type AgentShape = 'arrow' | 'cross' | 'ibeam' | 'pen' | 'dup';

/** A piece of the page the swarm has to build. Coordinates are document-space. */
export interface SwarmItem {
    id: number;
    el: HTMLElement;
    kind: ItemKind;
    x: number;
    y: number;
    w: number;
    h: number;
    /** Nearest registered ancestor — this item cannot start before it finishes. */
    parent: SwarmItem | null;
    /** Repeated-sibling group; the first member is the master, the rest are duplicates. */
    group: string | null;
    master: SwarmItem | null;
    /** Document order, used for tie-breaking and for the layer counter. */
    order: number;
    /** Layer name shown in the selection badge. */
    label: string;
    state: 'wait' | 'active' | 'done';
    doneAt: number;
    /** Word/char spans, prepared once for text items. */
    spans: HTMLElement[];
    /** Scroll position past which this item is allowed to start. */
    gate: number;
}

/** A ruler guide that text snaps onto. */
export interface Guide {
    id: number;
    axis: 'x' | 'y';
    at: number;
    /** Items that snap to this guide; it fades once they are all done. */
    deps: SwarmItem[];
    shown: boolean;
    shownAt: number;
    opacity: number;
    flash: number;
}

/** Transient vector decoration a working agent asks the stage to draw. */
export interface Overlay {
    box?: { x: number; y: number; w: number; h: number };
    badge?: string;
    handles?: boolean;
    caret?: { x: number; y: number; h: number };
    path?: { x: number; y: number }[];
    measure?: { x: number; y: number; w: number; h: number; text: string };
    accent?: string;
}

export interface Agent {
    id: number;
    name: string;
    color: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
    shape: AgentShape;
    /** 0..1, drives the click squash. */
    press: number;
    tilt: number;
    item: SwarmItem | null;
    gen: Generator<void, void, number> | null;
    overlay: Overlay | null;
    idleFor: number;
    leaving: boolean;
    worked: boolean;
    /** Duration multiplier: a mix of brisk and unhurried agents reads as a crowd, not a clock. */
    pace: number;
    orbit: number;
    curl: number;
    flocking: boolean;
    resident: boolean;
}

/**
 * How the run ends, in order. `flocking` is the payoff — the crew gathers
 * round the reader's pointer — and `leaving` walks them off the edges. They
 * are never faded out where they stand; a cursor dissolving in mid-air is the
 * one thing that breaks the illusion that someone was holding it.
 */
export type SwarmPhase = 'building' | 'flocking' | 'leaving' | 'gone';

export interface SwarmStats {
    done: number;
    total: number;
    agents: number;
    phase: SwarmPhase;
    /** Distinct agents that actually drew something, including ones that have left. */
    workers: number;
    /** Wall-clock seconds from first task to last. */
    seconds: number;
}
