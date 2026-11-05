/**
 * Swarm — the build engine.
 *
 * The page is real, server-rendered HTML. It is hidden on first paint (see the
 * `sw-armed` class), measured once, and then drawn back on screen by a crowd of
 * cursors: boxes dragged out with a crosshair, text typed with an I-beam, rules
 * pulled with the pen, repeated cards ⌥-dragged off a master.
 *
 * Nothing is reconstructed from a snapshot — every task ends by revealing the
 * element that was always there. That keeps the markup semantic, the content
 * crawlable, and the layout correct at the first frame, which is the part that
 * matters when the page is a portfolio someone is trying to read.
 *
 * Work unlocks against the scroll position, so the swarm never runs ahead of
 * the reader and never makes them wait: anything that falls behind the viewport
 * is completed instantly rather than queued.
 */

import {
    AGENT_COLORS,
    AGENT_NAMES,
    MEASURE_RED,
    SELECT_BLUE,
    cursorSprite,
    HOTSPOT,
} from './art';
import type { Agent, Guide, ItemKind, Overlay, SwarmItem, SwarmPhase, SwarmStats } from './types';

const MIN_AGENTS = 6;
const MAX_AGENTS = 34;
/** Agents that never walk off while there is still a page to build. */
const RESIDENTS = 2;
/** The crew gathers to this size for the finale before it disperses. */
const FLOCK_AGENTS = 22;
/** How long the flock orbits the reader's pointer before walking off. */
const FLOCK_SECONDS = 7;
/** How far below the fold work is allowed to start. */
const PREROLL = 260;
/** Past this distance above the viewport, unbuilt work is simply switched on. */
const CATCHUP = 160;

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

type Routine = Generator<void, void, number>;

export interface StageRefs {
    root: HTMLElement;
    vector: SVGSVGElement;
    cursors: HTMLElement;
    badges: HTMLElement;
}

export interface EngineOptions {
    onStats?: (s: SwarmStats) => void;
    onFinish?: () => void;
}

/* ------------------------------------------------------------------ text */

/**
 * Wraps each word of a text item in its own span so typing can reveal the real
 * glyphs progressively. Element structure (links, <em>, inline code) survives:
 * only text nodes are touched. Short strings are split per character, which is
 * what makes a headline feel typed rather than pasted.
 */
function prepareText(el: HTMLElement): HTMLElement[] {
    if (el.dataset.swPrepared) {
        return Array.from(el.querySelectorAll<HTMLElement>('.sw-u'));
    }
    const perChar = (el.textContent || '').trim().length <= 48;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const texts: Text[] = [];
    let n = walker.nextNode();
    while (n) {
        if (n.nodeValue && n.nodeValue.trim()) texts.push(n as Text);
        n = walker.nextNode();
    }

    for (const node of texts) {
        const parts = perChar
            ? Array.from(node.nodeValue || '')
            : (node.nodeValue || '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        for (const part of parts) {
            if (!part) continue;
            if (!part.trim()) {
                frag.appendChild(document.createTextNode(part));
                continue;
            }
            const span = document.createElement('span');
            span.className = 'sw-u';
            span.textContent = part;
            frag.appendChild(span);
        }
        node.parentNode?.replaceChild(frag, node);
    }

    el.dataset.swPrepared = '1';
    return Array.from(el.querySelectorAll<HTMLElement>('.sw-u'));
}

/* ------------------------------------------------------------------ scan */

export function scan(root: HTMLElement): { items: SwarmItem[]; guides: Guide[] } {
    const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-sw]'));
    const items: SwarmItem[] = [];
    const byEl = new Map<HTMLElement, SwarmItem>();
    const sy = window.scrollY;

    nodes.forEach((el, order) => {
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) return;

        const kind = (el.dataset.sw || 'rect') as ItemKind;
        let parent: SwarmItem | null = null;
        for (let p = el.parentElement; p && p !== root; p = p.parentElement) {
            const hit = byEl.get(p);
            if (hit) {
                parent = hit;
                break;
            }
        }

        const item: SwarmItem = {
            id: order,
            el,
            kind,
            x: r.left + window.scrollX,
            y: r.top + sy,
            w: r.width,
            h: r.height,
            parent,
            group: el.dataset.swGroup || null,
            master: null,
            order,
            label: el.dataset.swLabel || kind,
            state: 'wait',
            doneAt: 0,
            spans: kind === 'text' ? prepareText(el) : [],
            gate: 0,
        };
        item.gate = item.y;
        items.push(item);
        byEl.set(el, item);
    });

    // Repeated siblings: the first of a group is drawn properly, the rest are
    // ⌥-dragged copies of it, which is both faster and how it really works.
    const seen = new Map<string, SwarmItem>();
    for (const it of items) {
        if (!it.group) continue;
        const master = seen.get(it.group);
        if (!master) seen.set(it.group, it);
        else it.master = master;
    }

    // Guides: left edges shared by three or more items become a ruler guide
    // that the text visibly snaps onto.
    const columns = new Map<number, SwarmItem[]>();
    for (const it of items) {
        if (it.kind === 'line') continue;
        const key = Math.round(it.x);
        const bucket = columns.get(key) || [];
        bucket.push(it);
        columns.set(key, bucket);
    }
    const guides: Guide[] = [];
    let gid = 0;
    for (const [at, deps] of columns) {
        if (deps.length < 3 || guides.length >= 4) continue;
        guides.push({ id: gid++, axis: 'x', at, deps, shown: false, shownAt: 0, opacity: 0, flash: 0 });
    }

    return { items, guides };
}

/* ---------------------------------------------------------------- engine */

export class SwarmEngine {
    private stage: StageRefs;
    private opts: EngineOptions;
    private items: SwarmItem[] = [];
    private guides: Guide[] = [];
    private agents: Agent[] = [];
    private nextId = 0;
    private frontier = 0;
    private time = 0;
    private raf = 0;
    private last = 0;
    private tempo = 1;
    private scrollVel = 0;
    private lastScroll = 0;
    private spawnCooldown = 0;
    private done = 0;
    private phase: SwarmPhase = 'building';
    private startedAt = 0;
    private endedAt = 0;
    private flockSince = 0;
    private retired = 0;
    private pointer: { x: number; y: number } | null = null;
    private vectorCache = '';
    private badgeCache = '';
    private sprites = new Map<number, HTMLElement>();

    speed = 1;

    constructor(stage: StageRefs, opts: EngineOptions = {}) {
        this.stage = stage;
        this.opts = opts;
    }

    /* -------------------------------------------------------- lifecycle */

    mount(root: HTMLElement) {
        const { items, guides } = scan(root);
        this.items = items;
        this.guides = guides;
        this.lastScroll = window.scrollY;
        this.frontier = window.scrollY + window.innerHeight;

        // Only a couple of agents are permanent. The rest arrive for the work
        // in front of them and walk off when it runs out — a crowd standing
        // around with nothing to draw is what makes the effect look fake.
        for (let i = 0; i < MIN_AGENTS; i++) {
            const left = i % 2 === 0;
            this.agents.push(
                this.makeAgent(
                    window.scrollX + (left ? -60 - rand(0, 220) : window.innerWidth + 60 + rand(0, 220)),
                    window.scrollY + rand(0.1, 0.9) * window.innerHeight,
                    i < RESIDENTS,
                ),
            );
        }

        window.addEventListener('pointermove', this.onPointer, { passive: true });
        this.startedAt = 0;
        this.last = performance.now();
        this.raf = requestAnimationFrame(this.frame);
        this.emit();
    }

    destroy() {
        cancelAnimationFrame(this.raf);
        window.removeEventListener('pointermove', this.onPointer);
        this.phase = 'gone';
        for (const el of this.sprites.values()) el.remove();
        this.sprites.clear();
    }

    /**
     * Re-measure everything still pending. A resize moves every box, and a
     * cursor drawing to a stale rectangle is the one artefact that reads as a
     * bug rather than a flourish.
     */
    remeasure() {
        const sy = window.scrollY;
        const sx = window.scrollX;
        for (const it of this.items) {
            if (it.state === 'done') continue;
            const r = it.el.getBoundingClientRect();
            it.x = r.left + sx;
            it.y = r.top + sy;
            it.w = r.width;
            it.h = r.height;
            it.gate = it.y;
        }
        for (const g of this.guides) {
            const first = g.deps[0];
            if (first) g.at = first.x;
        }
    }

    /** Switch everything on at once — the skip button, and the reduced-motion path. */
    revealAll() {
        for (const it of this.items) {
            if (it.state !== 'done') this.complete(it, true);
        }
        this.finish();
        // Skipping means the reader wants the page, not the show: send the
        // crew off immediately rather than making them orbit first.
        this.disperse();
    }

    /**
     * The build is done. The crew gathers round the reader's pointer and
     * stays there — this is the payoff, and the reference holds it until the
     * viewer dismisses it. Nothing is hidden and nothing fades yet.
     */
    private finish() {
        if (this.phase !== 'building') return;
        this.phase = 'flocking';
        this.endedAt = this.time;
        this.flockSince = this.time;
        document.documentElement.classList.add('sw-revealed');
        for (const a of this.agents) {
            a.flocking = true;
            a.leaving = false;
            a.gen = null;
            a.overlay = null;
            a.shape = 'arrow';
        }
        this.opts.onFinish?.();
        this.emit();
    }

    /** Walk every cursor off the nearest edge. The only way they ever exit. */
    disperse() {
        if (this.phase === 'leaving' || this.phase === 'gone') return;
        this.phase = 'leaving';
        for (const a of this.agents) {
            a.flocking = false;
            a.leaving = true;
            a.overlay = null;
            a.shape = 'arrow';
            a.gen = this.leave(a);
        }
        this.emit();
    }

    private onPointer = (e: PointerEvent) => {
        this.pointer = { x: e.clientX + window.scrollX, y: e.clientY + window.scrollY };
    };

    private emit() {
        this.opts.onStats?.({
            done: this.done,
            total: this.items.length,
            agents: this.agents.filter((a) => !a.leaving).length,
            phase: this.phase,
            workers: this.retired + this.agents.filter((a) => a.worked).length,
            seconds: (this.endedAt || this.time) - this.startedAt,
        });
    }

    /* ------------------------------------------------------------ agents */

    private makeAgent(x: number, y: number, resident = false): Agent {
        const id = this.nextId++;
        const quick = Math.random() < 0.3;
        return {
            id,
            name: AGENT_NAMES[id % AGENT_NAMES.length],
            color: AGENT_COLORS[id % AGENT_COLORS.length],
            x,
            y,
            vx: 0,
            vy: 0,
            shape: 'arrow',
            press: 0,
            tilt: 0,
            item: null,
            gen: null,
            overlay: null,
            idleFor: 0,
            leaving: false,
            worked: false,
            pace: quick ? rand(1.15, 1.45) : rand(0.78, 1.08),
            orbit: rand(90, 200),
            curl: rand(-1, 1),
            flocking: false,
            resident,
        };
    }

    /* ------------------------------------------------------------- tasks */

    private available(): SwarmItem[] {
        const out: SwarmItem[] = [];
        const limit = this.frontier + PREROLL;
        for (const it of this.items) {
            if (it.state !== 'wait') continue;
            if (it.gate > limit) continue;
            if (it.parent && it.parent.state !== 'done') continue;
            if (it.master && it.master.state !== 'done') continue;
            out.push(it);
        }
        return out;
    }

    private backlog(): number {
        let n = 0;
        const limit = this.frontier + PREROLL;
        for (const it of this.items) if (it.state !== 'done' && it.gate <= limit) n++;
        return n;
    }

    /** Pick the task that reads as the natural next thing for this agent. */
    private claim(a: Agent, pool: SwarmItem[]): SwarmItem | null {
        let best: SwarmItem | null = null;
        let bestScore = Infinity;
        const top = window.scrollY;
        const bottom = top + window.innerHeight;
        for (const it of pool) {
            const onScreen = it.y >= top - 80 && it.y <= bottom;
            const dist = Math.hypot(it.x - a.x, it.y - a.y);
            const score = (onScreen ? 0 : 1e6) + it.y * 0.25 + dist * 0.5;
            if (score < bestScore) {
                bestScore = score;
                best = it;
            }
        }
        return best;
    }

    private complete(it: SwarmItem, instant = false) {
        if (it.state === 'done') return;
        it.state = 'done';
        it.doneAt = this.time;
        it.el.classList.add('sw-on');
        if (instant) it.el.classList.add('sw-instant');
        it.el.style.removeProperty('--sw-p');
        for (const s of it.spans) s.classList.add('on');
        this.done++;
    }

    /* -------------------------------------------------------------- loop */

    private frame = (now: number) => {
        const dt = Math.min((now - this.last) / 1000, 0.05);
        this.last = now;
        this.raf = requestAnimationFrame(this.frame);
        this.tick(dt);
        this.render();
    };

    private tick(dt: number) {
        this.time += dt;

        const sy = window.scrollY;
        const instant = Math.abs(sy - this.lastScroll) / Math.max(dt, 0.001);
        this.lastScroll = sy;
        this.scrollVel = Math.max(this.scrollVel * Math.exp(-dt * 1.4), this.scrollVel * 0.7 + instant * 0.3);
        this.frontier = Math.max(this.frontier, sy + window.innerHeight);

        // Anything the reader has already scrolled past is switched on rather
        // than queued — the swarm is decoration, never a gate on reading.
        for (const it of this.items) {
            if (it.state === 'wait' && it.y + it.h < sy - CATCHUP) this.complete(it, true);
        }

        const pool = this.available();
        this.tempo =
            this.phase === 'leaving'
                ? 1
                : clamp(2.2 + this.scrollVel / 850 + pool.length * 0.05, 2.2, 5) * this.speed;

        if (this.phase === 'building' && this.done >= this.items.length) this.finish();

        // Once the crew has orbited the pointer for a beat, it walks off.
        if (this.phase === 'flocking' && this.time - this.flockSince > FLOCK_SECONDS) this.disperse();

        this.updateGuides(dt);

        this.spawnCooldown -= dt;
        const alive = this.agents.filter((a) => !a.leaving).length;

        // Crew size follows the work actually in front of it. With no tasks
        // unlocked the floor collapses to the residents, so an idle stretch
        // empties the screen instead of leaving a dozen cursors loitering.
        let want: number;
        if (this.phase === 'flocking') want = FLOCK_AGENTS;
        else if (this.phase !== 'building') want = 0;
        else if (pool.length === 0) want = RESIDENTS;
        else want = clamp(MIN_AGENTS + Math.floor(pool.length / 2) + Math.floor(this.scrollVel / 55), MIN_AGENTS, MAX_AGENTS);

        if (alive < want && this.spawnCooldown <= 0 && this.phase !== 'leaving' && this.phase !== 'gone') {
            const left = Math.random() < 0.5;
            const fresh = this.makeAgent(
                window.scrollX + (left ? -50 : window.innerWidth + 50),
                sy + rand(0.15, 0.85) * window.innerHeight,
            );
            // Latecomers to the finale join the orbit rather than hunting work.
            if (this.phase === 'flocking') fresh.flocking = true;
            this.agents.push(fresh);
            this.spawnCooldown = 0.05;
        }

        for (const a of this.agents) {
            if (a.item || a.leaving || a.flocking) continue;
            const it = this.claim(a, pool);
            if (!it) continue;
            pool.splice(pool.indexOf(it), 1);
            it.state = 'active';
            a.item = it;
            a.worked = true;
            a.idleFor = 0;
            a.gen = this.routineFor(a, it);
        }

        for (const a of [...this.agents]) {
            a.press = Math.max(0, a.press - dt * 6);
            a.tilt *= 1 - Math.min(1, dt * 9);

            if (a.flocking) {
                this.flock(a, dt);
                continue;
            }
            if (!a.item) {
                a.idleFor += dt;
                const crowd = this.agents.filter((m) => !m.leaving).length;
                if (!a.leaving && !a.resident && a.idleFor > 1.1 && crowd > want) {
                    a.leaving = true;
                    a.gen = null;
                }
                if (!a.gen) a.gen = a.leaving ? this.leave(a) : this.wander(a);
            }
            if (a.gen && a.gen.next(dt).done) {
                if (a.item) {
                    this.complete(a.item);
                    a.item = null;
                    a.overlay = null;
                    a.shape = 'arrow';
                }
                a.gen = null;
                if (a.leaving) {
                    if (a.worked) this.retired++;
                    this.agents.splice(this.agents.indexOf(a), 1);
                    this.sprites.get(a.id)?.remove();
                    this.sprites.delete(a.id);
                }
            }
        }

        if (this.phase === 'leaving' && this.agents.length === 0) this.phase = 'gone';

        this.emit();
    }

    private updateGuides(dt: number) {
        for (const g of this.guides) {
            if (!g.shown) continue;
            if (g.flash > 0) g.flash = Math.max(0, g.flash - dt * 1.6);
            const busy = g.deps.some((d) => d.state === 'active');
            const allDone = g.deps.every((d) => d.state === 'done');
            if (!busy && (allDone || this.time - g.shownAt > 6)) {
                g.opacity = Math.max(0, g.opacity - dt * 1.3);
            } else {
                g.opacity = Math.min(1, g.opacity + dt * 4);
            }
        }
    }

    /* -------------------------------------------------------- primitives */

    private *pause(seconds: number): Routine {
        let t = 0;
        while (t < seconds) t += (yield) * this.tempo;
    }

    /** Wall-clock pause. The exit should not speed up because the build did. */
    private *realPause(seconds: number): Routine {
        let t = 0;
        while (t < seconds) t += yield;
    }

    private *moveTo(
        a: Agent,
        tx: number,
        ty: number,
        o: { drag?: boolean; ease?: number; onStep?: () => void } = {},
    ): Routine {
        const sx = a.x;
        const sy = a.y;
        const dx = tx - sx;
        const dy = ty - sy;
        const dist = Math.hypot(dx, dy);
        if (dist < 0.5) {
            a.x = tx;
            a.y = ty;
            o.onStep?.();
            return;
        }

        // Duration grows with the SQUARE ROOT of the distance and is capped
        // hard. A hand crossing the screen does not take ten times as long as
        // one crossing a card — it just moves faster. Scaling linearly is what
        // makes long travel read as a slow tween instead of a person.
        const duration = clamp(0.12 + Math.sqrt(dist) * 0.021, 0.14, 0.9) / (o.ease ?? 1) / a.pace;

        // A bounded perpendicular arc. Capped in pixels, not as a fraction of
        // the distance, so a long move bows gently instead of swinging wide.
        const bend = o.drag ? 0 : (Math.random() < 0.5 ? -1 : 1) * rand(0.04, 0.13) * Math.min(dist, 620);

        let t = 0;
        while (t < duration) {
            const dt = yield;
            t = Math.min(duration, t + dt * this.tempo);
            const k = t / duration;
            // Ease in out of rest, ease out into the target. A pure easeOut
            // starts at full speed, which is the single biggest tell.
            const e = o.drag || k < 0.15 ? easeInOut(k) : easeOut(k);
            const off = Math.sin(Math.PI * e) * bend;
            const px = sx + dx * e - (dy / dist) * off;
            const py = sy + dy * e + (dx / dist) * off;
            // Tilt eases toward the direction of travel rather than snapping
            // to this frame's delta, which otherwise jitters at high tempo.
            a.tilt += (clamp((px - a.x) * 1.4, -11, 11) - a.tilt) * 0.25;
            a.x = px;
            a.y = py;
            o.onStep?.();
        }
        a.x = tx;
        a.y = ty;
        o.onStep?.();
    }

    private *click(a: Agent): Routine {
        a.press = 1;
        yield* this.pause(0.07);
    }

    /**
     * Resting. A slow drift to somewhere inside the readable middle of the
     * viewport, then a beat. Random walks relative to the current position
     * let cursors wander off the page and read as drift rather than waiting.
     */
    private *wander(a: Agent): Routine {
        const top = window.scrollY;
        const height = window.innerHeight;
        yield* this.moveTo(
            a,
            window.scrollX + rand(0.18, 0.82) * window.innerWidth,
            top + rand(0.2, 0.8) * height,
            { ease: 0.34 },
        );
        yield* this.pause(rand(0.4, 1.4));
    }

    private *leave(a: Agent): Routine {
        const left = a.x < window.scrollX + window.innerWidth / 2;
        // Staggered in wall-clock time, so a dispersing crew drains off the
        // edges over a couple of seconds instead of leaving on one frame.
        yield* this.realPause(rand(0, 1.1));
        yield* this.moveTo(
            a,
            window.scrollX + (left ? -80 : window.innerWidth + 80),
            a.y + rand(-90, 90),
            { ease: 0.5 },
        );
    }

    /* ----------------------------------------------------------- flocking */

    private flock(a: Agent, dt: number) {
        const target = this.pointer ?? {
            x: window.scrollX + window.innerWidth / 2,
            y: window.scrollY + window.innerHeight * 0.5,
        };

        // Agents hold document coordinates, so a reader who scrolls after the
        // build finishes would otherwise strand the flock a screen or more
        // away, chasing. Anyone left well outside the viewport re-enters from
        // the nearest edge instead of making the trip.
        const top = window.scrollY - 220;
        const bottom = window.scrollY + window.innerHeight + 220;
        if (a.y < top || a.y > bottom) {
            a.y = a.y < top ? top + rand(0, 90) : bottom - rand(0, 90);
            a.x = clamp(a.x, window.scrollX + 20, window.scrollX + window.innerWidth - 20);
            a.vx = 0;
            a.vy = 0;
        }
        const dx = target.x - a.x;
        const dy = target.y - a.y;
        const dist = Math.hypot(dx, dy) || 1;
        // Orbit rather than collapse: steer toward a ring around the pointer.
        const want = a.orbit;
        const pull = (dist - want) * 2.2;
        const nx = dx / dist;
        const ny = dy / dist;
        const tangentX = -ny * a.curl * 1.6;
        const tangentY = nx * a.curl * 1.6;
        a.vx += (nx * pull + tangentX * want) * dt;
        a.vy += (ny * pull + tangentY * want) * dt;

        // Light separation so the ring does not fuse into one blob.
        for (const other of this.agents) {
            if (other === a) continue;
            const ox = a.x - other.x;
            const oy = a.y - other.y;
            const d2 = ox * ox + oy * oy;
            // Keep roughly a name-tag apart, or the labels stack into a block.
            if (d2 > 0 && d2 < 6400) {
                const f = (6400 - d2) / 6400;
                a.vx += (ox / Math.sqrt(d2)) * f * 560 * dt;
                a.vy += (oy / Math.sqrt(d2)) * f * 560 * dt;
            }
        }

        const damp = Math.exp(-dt * 3.1);
        a.vx *= damp;
        a.vy *= damp;
        a.tilt = clamp(a.vx * 0.02, -10, 10);
        a.x += a.vx * dt;
        a.y += a.vy * dt;
    }

    /* ----------------------------------------------------------- routines */

    private routineFor(a: Agent, it: SwarmItem): Routine {
        if (it.master) return this.duplicate(a, it);
        switch (it.kind) {
            case 'text':
                return this.typeText(a, it);
            case 'image':
                return this.drawImage(a, it);
            case 'line':
                return this.drawLine(a, it);
            case 'chip':
                return this.popChip(a, it);
            default:
                return this.drawRect(a, it);
        }
    }

    /** Where a drag should finish so an oversized box doesn't throw the cursor off screen. */
    private dragCorner(it: SwarmItem) {
        const maxX = window.scrollX + window.innerWidth - 28;
        const maxY = window.scrollY + window.innerHeight - 28;
        return { x: Math.min(it.x + it.w, maxX), y: Math.min(it.y + it.h, maxY) };
    }

    private *drawRect(a: Agent, it: SwarmItem): Routine {
        a.shape = 'cross';
        yield* this.moveTo(a, it.x, it.y);
        yield* this.click(a);

        const corner = this.dragCorner(it);
        const paint = (w: number, h: number) => {
            a.overlay = {
                box: { x: it.x, y: it.y, w, h },
                badge: `${Math.round(w)} × ${Math.round(h)}`,
                accent: a.color,
            };
        };
        paint(0, 0);
        yield* this.moveTo(a, corner.x, corner.y, {
            drag: true,
            ease: 0.8,
            onStep: () => paint(Math.max(0, a.x - it.x), Math.max(0, a.y - it.y)),
        });

        // If the box was clipped by the viewport, let it finish growing on its own.
        if (corner.x < it.x + it.w - 1 || corner.y < it.y + it.h - 1) {
            const w0 = a.x - it.x;
            const h0 = a.y - it.y;
            let k = 0;
            while (k < 1) {
                k = Math.min(1, k + ((yield) * this.tempo) / 0.45);
                const e = easeOut(k);
                paint(w0 + (it.w - w0) * e, h0 + (it.h - h0) * e);
            }
        }

        a.shape = 'arrow';
        a.overlay = { box: { x: it.x, y: it.y, w: it.w, h: it.h }, handles: true, accent: SELECT_BLUE };
        yield* this.pause(0.12);
        this.complete(it);
        yield* this.pause(0.22);
    }

    private *drawImage(a: Agent, it: SwarmItem): Routine {
        a.shape = 'cross';
        yield* this.moveTo(a, it.x, it.y);
        yield* this.click(a);

        const corner = this.dragCorner(it);
        yield* this.moveTo(a, corner.x, corner.y, {
            drag: true,
            ease: 0.7,
            onStep: () => {
                a.overlay = {
                    box: { x: it.x, y: it.y, w: Math.max(0, a.x - it.x), h: Math.max(0, a.y - it.y) },
                    badge: `${Math.round(Math.max(0, a.x - it.x))} × ${Math.round(Math.max(0, a.y - it.y))}`,
                    accent: a.color,
                };
            },
        });

        a.shape = 'arrow';
        a.overlay = { box: { x: it.x, y: it.y, w: it.w, h: it.h }, handles: true, accent: SELECT_BLUE };
        it.el.classList.add('sw-on');
        // The picture sweeps in top to bottom, the way a slow image used to load.
        let p = 0;
        while (p < 1) {
            p = Math.min(1, p + ((yield) * this.tempo) / 0.55);
            it.el.style.setProperty('--sw-p', String(easeOut(p)));
        }
        it.el.style.setProperty('--sw-p', '1');
        this.complete(it);
        yield* this.pause(0.2);
    }

    private *drawLine(a: Agent, it: SwarmItem): Routine {
        a.shape = 'pen';
        const horizontal = it.w >= it.h;
        const x2 = horizontal ? it.x + it.w : it.x;
        const y2 = horizontal ? it.y : it.y + it.h;
        yield* this.moveTo(a, it.x, it.y);
        yield* this.click(a);
        a.overlay = { path: [{ x: it.x, y: it.y }, { x: it.x, y: it.y }], accent: a.color };
        it.el.classList.add('sw-on');
        yield* this.moveTo(a, x2, y2, {
            drag: true,
            ease: 1.3,
            onStep: () => {
                a.overlay = { path: [{ x: it.x, y: it.y }, { x: a.x, y: a.y }], accent: a.color };
                const travelled = horizontal
                    ? clamp((a.x - it.x) / Math.max(it.w, 1), 0, 1)
                    : clamp((a.y - it.y) / Math.max(it.h, 1), 0, 1);
                it.el.style.setProperty('--sw-p', String(travelled));
            },
        });
        it.el.style.setProperty('--sw-p', '1');
        yield* this.click(a);
        this.complete(it);
        a.shape = 'arrow';
    }

    private *popChip(a: Agent, it: SwarmItem): Routine {
        yield* this.moveTo(a, it.x + it.w / 2, it.y + it.h / 2, { ease: 1.3 });
        yield* this.click(a);
        this.complete(it);
        yield* this.pause(0.1);
    }

    private *typeText(a: Agent, it: SwarmItem): Routine {
        const guide = this.guides.find((g) => Math.abs(g.at - it.x) < 1.5);

        // Pull the ruler guide out first, then snap the text box onto it.
        if (guide && !guide.shown) {
            guide.shown = true;
            guide.shownAt = this.time;
            guide.opacity = 0;
            guide.flash = 1;
        }

        a.shape = 'ibeam';
        yield* this.moveTo(a, it.x, it.y);
        yield* this.click(a);
        if (guide) guide.flash = 1;

        const corner = this.dragCorner(it);
        yield* this.moveTo(a, corner.x, Math.min(it.y + it.h, corner.y), {
            drag: true,
            ease: 1.1,
            onStep: () => {
                a.overlay = {
                    box: { x: it.x, y: it.y, w: Math.max(0, a.x - it.x), h: Math.max(0, a.y - it.y) },
                    accent: a.color,
                };
            },
        });

        it.el.classList.add('sw-on');
        const spans = it.spans;
        const total = spans.length || 1;
        // Longer copy types faster per unit, or a paragraph would outstay its welcome.
        const perUnit = clamp(0.5 / Math.sqrt(total), 0.012, 0.085);

        let shown = 0;
        let acc = 0;
        let dtLast = 1 / 60;
        while (shown < total) {
            dtLast = yield;
            acc += dtLast * this.tempo;
            while (acc >= perUnit && shown < total) {
                acc -= perUnit;
                spans[shown]?.classList.add('on');
                shown++;
            }
            const cur = spans[Math.max(0, shown - 1)];
            if (cur) {
                const r = cur.getBoundingClientRect();
                const cx = r.right + window.scrollX;
                const cy = r.top + window.scrollY;
                // Glide to the caret instead of snapping to it. Assigning the
                // position directly teleports the I-beam one word at a time,
                // which is the jerkiest thing in the whole build.
                const k = Math.min(1, dtLast * 26);
                a.x += (cx - a.x) * k;
                a.y += (cy + r.height * 0.5 - a.y) * k;
                a.tilt += (clamp((cx - a.x) * 0.5, -7, 7) - a.tilt) * 0.2;
                a.overlay = {
                    box: { x: it.x, y: it.y, w: it.w, h: it.h },
                    caret: { x: cx, y: cy, h: r.height },
                    accent: a.color,
                };
            }
        }

        a.shape = 'arrow';
        a.overlay = { box: { x: it.x, y: it.y, w: it.w, h: it.h }, handles: true, accent: SELECT_BLUE };
        this.complete(it);
        yield* this.pause(0.18);
    }

    /**
     * A repeated card: select the master, ⌥-drag a copy into place with the
     * red spacing measurement between them, then let the copy's own content in.
     */
    private *duplicate(a: Agent, it: SwarmItem): Routine {
        const master = it.master!;
        a.shape = 'arrow';
        yield* this.moveTo(a, master.x + master.w / 2, master.y + master.h / 2);
        yield* this.click(a);
        a.overlay = { box: { x: master.x, y: master.y, w: master.w, h: master.h }, handles: true, accent: SELECT_BLUE };
        yield* this.pause(0.12);

        a.shape = 'dup';
        const gapX = it.x - (master.x + master.w);
        const gapY = it.y - (master.y + master.h);
        const horizontal = Math.abs(it.x - master.x) > Math.abs(it.y - master.y);

        yield* this.moveTo(a, it.x + it.w / 2, it.y + it.h / 2, {
            drag: true,
            ease: 0.85,
            onStep: () => {
                const ox = a.x - (master.x + master.w / 2);
                const oy = a.y - (master.y + master.h / 2);
                a.overlay = {
                    box: { x: master.x + ox, y: master.y + oy, w: master.w, h: master.h },
                    accent: MEASURE_RED,
                    measure: horizontal
                        ? {
                              x: master.x + master.w,
                              y: master.y + master.h / 2,
                              w: Math.max(0, ox - master.w / 2),
                              h: 0,
                              text: String(Math.max(0, Math.round(gapX))),
                          }
                        : {
                              x: master.x + master.w / 2,
                              y: master.y + master.h,
                              w: 0,
                              h: Math.max(0, oy - master.h / 2),
                              text: String(Math.max(0, Math.round(gapY))),
                          },
                };
            },
        });

        a.shape = 'arrow';
        a.overlay = { box: { x: it.x, y: it.y, w: it.w, h: it.h }, handles: true, accent: SELECT_BLUE };
        this.complete(it);
        yield* this.pause(0.16);
    }

    /* ------------------------------------------------------------ render */

    private render() {
        const ox = window.scrollX;
        const oy = window.scrollY;

        // --- cursors
        for (const a of this.agents) {
            let el = this.sprites.get(a.id);
            if (!el) {
                el = document.createElement('div');
                el.className = 'sw-cursor';
                el.innerHTML =
                    `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">${cursorSprite(a.shape, a.color)}</svg>` +
                    `<span class="sw-tag" style="background:${a.color}">${a.name}</span>`;
                el.dataset.shape = a.shape;
                this.stage.cursors.appendChild(el);
                this.sprites.set(a.id, el);
            }
            if (el.dataset.shape !== a.shape) {
                el.dataset.shape = a.shape;
                const svg = el.firstElementChild as SVGElement;
                svg.innerHTML = cursorSprite(a.shape, a.color);
            }
            const [hx, hy] = HOTSPOT[a.shape];
            const scale = 1 - a.press * 0.16;
            el.style.transform =
                `translate3d(${(a.x - ox - hx).toFixed(2)}px,${(a.y - oy - hy).toFixed(2)}px,0) ` +
                `rotate(${a.tilt.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        }

        // --- vectors (selection boxes, guides, pen paths, measurements)
        const parts: string[] = [];
        for (const g of this.guides) {
            if (g.opacity <= 0.01) continue;
            const x = g.at - ox;
            parts.push(
                `<line x1="${x}" y1="0" x2="${x}" y2="100%" stroke="${MEASURE_RED}" stroke-width="1" opacity="${(g.opacity * (0.45 + g.flash * 0.55)).toFixed(2)}"/>`,
            );
        }
        for (const a of this.agents) {
            const o = a.overlay;
            if (!o) continue;
            const accent = o.accent || a.color;
            if (o.box) {
                const { x, y, w, h } = o.box;
                parts.push(
                    `<rect x="${(x - ox).toFixed(1)}" y="${(y - oy).toFixed(1)}" width="${Math.max(0, w).toFixed(1)}" height="${Math.max(0, h).toFixed(1)}" fill="none" stroke="${accent}" stroke-width="1"/>`,
                );
                if (o.handles) {
                    for (const [cx, cy] of [
                        [x, y],
                        [x + w, y],
                        [x, y + h],
                        [x + w, y + h],
                    ]) {
                        parts.push(
                            `<rect x="${(cx - ox - 2.5).toFixed(1)}" y="${(cy - oy - 2.5).toFixed(1)}" width="5" height="5" fill="#fff" stroke="${accent}" stroke-width="1"/>`,
                        );
                    }
                }
            }
            if (o.caret) {
                parts.push(
                    `<rect class="sw-caret" x="${(o.caret.x - ox).toFixed(1)}" y="${(o.caret.y - oy).toFixed(1)}" width="1.6" height="${o.caret.h.toFixed(1)}" fill="${accent}"/>`,
                );
            }
            if (o.path && o.path.length > 1) {
                const d = o.path.map((p, i) => `${i ? 'L' : 'M'}${(p.x - ox).toFixed(1)} ${(p.y - oy).toFixed(1)}`).join(' ');
                parts.push(`<path d="${d}" fill="none" stroke="${accent}" stroke-width="1.4"/>`);
                for (const p of o.path) {
                    parts.push(
                        `<rect x="${(p.x - ox - 2.5).toFixed(1)}" y="${(p.y - oy - 2.5).toFixed(1)}" width="5" height="5" fill="#fff" stroke="${accent}" stroke-width="1"/>`,
                    );
                }
            }
            if (o.measure) {
                const m = o.measure;
                const x1 = m.x - ox;
                const y1 = m.y - oy;
                parts.push(
                    `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${(x1 + m.w).toFixed(1)}" y2="${(y1 + m.h).toFixed(1)}" stroke="${MEASURE_RED}" stroke-width="1"/>`,
                );
            }
        }
        const vector = parts.join('');
        if (vector !== this.vectorCache) {
            this.stage.vector.innerHTML = vector;
            this.vectorCache = vector;
        }

        // --- badges (size readouts and spacing numbers)
        const badges: string[] = [];
        for (const a of this.agents) {
            const o = a.overlay;
            if (!o) continue;
            if (o.badge && o.box) {
                badges.push(
                    `<i style="transform:translate3d(${(o.box.x - ox + o.box.w / 2).toFixed(1)}px,${(o.box.y - oy + o.box.h + 8).toFixed(1)}px,0);background:${o.accent || a.color}">${o.badge}</i>`,
                );
            }
            if (o.measure) {
                badges.push(
                    `<i class="sw-measure" style="transform:translate3d(${(o.measure.x - ox + o.measure.w / 2).toFixed(1)}px,${(o.measure.y - oy + o.measure.h / 2).toFixed(1)}px,0)">${o.measure.text}</i>`,
                );
            }
        }
        const badgeHtml = badges.join('');
        if (badgeHtml !== this.badgeCache) {
            this.stage.badges.innerHTML = badgeHtml;
            this.badgeCache = badgeHtml;
        }
    }
}
