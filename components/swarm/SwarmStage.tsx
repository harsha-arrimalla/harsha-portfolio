'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SwarmEngine } from '@/lib/swarm/engine';
import type { SwarmStats } from '@/lib/swarm/types';

/**
 * Mounts the swarm over the live page.
 *
 * Whether it runs at all is decided before first paint by the inline script in
 * the layout, which adds `sw-armed` to <html>. This component only trusts that
 * class — so the no-JS, reduced-motion, touch and already-seen paths all render
 * the finished page with no flash and no work done here.
 *
 * The stage is never faded out while cursors are still on it. They walk off
 * the edges first; only then does the layer go.
 */

const EMPTY: SwarmStats = { done: 0, total: 0, agents: 0, phase: 'building', workers: 0, seconds: 0 };

export default function SwarmStage() {
    const stageRef = useRef<HTMLDivElement>(null);
    const vectorRef = useRef<SVGSVGElement>(null);
    const cursorsRef = useRef<HTMLDivElement>(null);
    const badgesRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<SwarmEngine | null>(null);

    const [armed, setArmed] = useState(false);
    const [stats, setStats] = useState<SwarmStats>(EMPTY);
    const [speed, setSpeed] = useState(1);

    const run = useCallback(() => {
        const stage = stageRef.current;
        const vector = vectorRef.current;
        const cursors = cursorsRef.current;
        const badges = badgesRef.current;
        const main = document.getElementById('main');
        if (!stage || !vector || !cursors || !badges || !main) return;

        const engine = new SwarmEngine(
            { root: stage, vector, cursors, badges },
            {
                onStats: setStats,
                onFinish: () => {
                    try {
                        sessionStorage.setItem('sw:seen', '1');
                    } catch {
                        /* private window — the swarm simply plays again */
                    }
                },
            },
        );
        engineRef.current = engine;
        engine.mount(main);
        // Debug handle: lets the build be inspected from the console.
        (window as unknown as { __swarm?: SwarmEngine }).__swarm = engine;
    }, []);

    // Decided before paint by the inline script; this only reads the verdict.
    useEffect(() => {
        if (document.documentElement.classList.contains('sw-armed')) setArmed(true);
    }, []);

    // Starts only once `armed` has rendered the stage, so the refs exist.
    // Two frames on top of that lets fonts and layout settle before anything
    // is measured — a box drawn to a pre-webfont rectangle is visibly wrong.
    useEffect(() => {
        if (!armed) return;
        let id = 0;
        id = window.requestAnimationFrame(() => {
            id = window.requestAnimationFrame(run);
        });
        return () => {
            window.cancelAnimationFrame(id);
            engineRef.current?.destroy();
            engineRef.current = null;
        };
    }, [armed, run]);

    // A resize invalidates every measurement, so re-measure what is still pending.
    useEffect(() => {
        if (!armed) return;
        let t = 0;
        const onResize = () => {
            window.clearTimeout(t);
            t = window.setTimeout(() => engineRef.current?.remeasure(), 180);
        };
        window.addEventListener('resize', onResize);
        return () => {
            window.clearTimeout(t);
            window.removeEventListener('resize', onResize);
        };
    }, [armed]);

    // Everyone has walked off: stop the loop and drop the layer.
    useEffect(() => {
        if (stats.phase !== 'gone') return;
        const t = window.setTimeout(() => engineRef.current?.destroy(), 400);
        return () => window.clearTimeout(t);
    }, [stats.phase]);

    const dismiss = useCallback(() => {
        const engine = engineRef.current;
        if (!engine) return;
        try {
            sessionStorage.setItem('sw:seen', '1');
        } catch {
            /* ignore */
        }
        // Mid-build this reveals the page and sends the crew off; after the
        // build it just sends them off.
        if (stats.phase === 'building') engine.revealAll();
        else engine.disperse();
    }, [stats.phase]);

    const cycleSpeed = () => {
        const next = speed >= 3 ? 1 : speed + 1;
        setSpeed(next);
        if (engineRef.current) engineRef.current.speed = next;
    };

    useEffect(() => {
        if (!armed) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') dismiss();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [armed, dismiss]);

    if (!armed || stats.phase === 'gone') return null;

    const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    const built = stats.phase !== 'building';

    return (
        <div className="sw-stage" ref={stageRef} aria-hidden="true">
            <div className="sw-rulers" data-hidden={built || undefined}>
                <div className="sw-ruler sw-ruler-x" />
                <div className="sw-ruler sw-ruler-y" />
            </div>

            <svg className="sw-vector" ref={vectorRef} />
            <div className="sw-badges" ref={badgesRef} />
            <div className="sw-cursors" ref={cursorsRef} />

            <div className="sw-hud" data-hidden={stats.phase === 'leaving' || undefined}>
                {built ? (
                    <>
                        <span className="sw-hud-live">
                            <i />
                            Rebuilt by <strong>{stats.workers}</strong> agents in{' '}
                            <strong>{stats.seconds.toFixed(1)}s</strong>
                        </span>
                        <button type="button" onClick={dismiss} className="sw-hud-btn sw-hud-skip">
                            Done
                        </button>
                    </>
                ) : (
                    <>
                        <span className="sw-hud-live">
                            <i />
                            {stats.agents} building
                        </span>
                        <span className="sw-hud-sep" />
                        <span className="sw-hud-count">
                            <strong>{stats.done}</strong> / {stats.total} layers
                        </span>
                        <span className="sw-hud-bar">
                            <i style={{ transform: `scaleX(${pct / 100})` }} />
                        </span>
                        <button type="button" onClick={cycleSpeed} className="sw-hud-btn">
                            {speed}×
                        </button>
                        <button type="button" onClick={dismiss} className="sw-hud-btn sw-hud-skip">
                            Skip
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
