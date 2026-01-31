'use client';

import { useEffect, useRef } from 'react';

export default function OilPaintBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#F97316', '#22C55E', '#06B6D4', '#F59E0B'];
    let currentColor = colors[0];
    let colorIndex = 0;

    let lastX = 0;
    let lastY = 0;
    let isFirst = true;

    // Store strokes with their opacity for fading
    interface Stroke {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      color: string;
      size: number;
      opacity: number;
      splatters: { x: number; y: number; r: number }[];
    }

    const strokes: Stroke[] = [];

    const addStroke = (x1: number, y1: number, x2: number, y2: number) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const speed = Math.min(dist, 40);
      const brushSize = Math.max(3, 10 - (speed / 40) * 6);

      // Generate splatters
      const splatters: { x: number; y: number; r: number }[] = [];
      const steps = Math.max(1, Math.floor(dist / 8));
      for (let i = 0; i < steps; i++) {
        const t = i / steps;
        splatters.push({
          x: x1 + dx * t + (Math.random() - 0.5) * brushSize * 2,
          y: y1 + dy * t + (Math.random() - 0.5) * brushSize * 2,
          r: brushSize * 0.3 + Math.random() * 2,
        });
      }

      strokes.push({
        x1, y1, x2, y2,
        color: currentColor,
        size: brushSize,
        opacity: 1,
        splatters,
      });
    };

    const draw = () => {
      // Clear canvas completely (transparent)
      // Note: we use canvas.width/height which are absolute dimensions
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // Draw all strokes with their current opacity
      for (let i = strokes.length - 1; i >= 0; i--) {
        const stroke = strokes[i];

        // Fade out
        stroke.opacity -= 0.02;

        if (stroke.opacity <= 0) {
          strokes.splice(i, 1);
          continue;
        }

        // Draw main stroke
        ctx.beginPath();
        ctx.moveTo(stroke.x1, stroke.y1);
        ctx.lineTo(stroke.x2, stroke.y2);
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.size;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = stroke.opacity * 0.7;
        ctx.stroke();

        // Draw splatters
        ctx.globalAlpha = stroke.opacity * 0.4;
        for (const splat of stroke.splatters) {
          ctx.beginPath();
          ctx.arc(splat.x, splat.y, splat.r, 0, Math.PI * 2);
          ctx.fillStyle = stroke.color;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (isFirst) {
        lastX = x;
        lastY = y;
        isFirst = false;
        return;
      }

      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 2) {
        addStroke(lastX, lastY, x, y);

        if (Math.random() < 0.03) {
          colorIndex = (colorIndex + 1) % colors.length;
          currentColor = colors[colorIndex];
        }

        lastX = x;
        lastY = y;
      }
    };

    const onResize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    // Start animation loop
    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 40,
        pointerEvents: 'none',
        mixBlendMode: 'difference',
        opacity: 0.6
      }}
    />
  );
}
