"use client";

import { useRef, useEffect } from "react";

const NODE_COUNT = 80;
const LINK_DIST_SQ = 0.08 * 0.08;

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let visible = false;
    let width = 0;
    let height = 0;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReduced = mq.matches;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0015,
      vy: (Math.random() - 0.5) * 0.0015,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Batch every link into one path and every node into another, so the
      // canvas does two draw calls per frame instead of hundreds.
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (dx * dx + dy * dy < LINK_DIST_SQ) {
            ctx.moveTo(a.x * width, a.y * height);
            ctx.lineTo(b.x * width, b.y * height);
          }
        }
      }
      ctx.strokeStyle = "rgba(30,41,59,0.12)"; // slate-800/10 for light bg
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      for (const n of nodes) {
        const x = n.x * width;
        const y = n.y * height;
        ctx.moveTo(x + 2.2, y);
        ctx.arc(x, y, 2.2, 0, 2 * Math.PI);
      }
      ctx.fillStyle = "rgba(30,41,59,0.18)"; // darker dot for visibility
      ctx.fill();
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    // Only run the animation loop while the hero is on screen and motion is allowed.
    function sync() {
      cancelAnimationFrame(raf);
      raf = 0;
      if (prefersReduced) draw();
      else if (visible) raf = requestAnimationFrame(step);
    }

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      draw();
    }

    const onMotionChange = () => {
      prefersReduced = mq.matches;
      sync();
    };
    mq.addEventListener?.("change", onMotionChange);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(canvas);

    return () => {
      ro.disconnect();
      io.disconnect();
      mq.removeEventListener?.("change", onMotionChange);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <canvas ref={canvasRef} className="h-full w-full block" aria-hidden />
      {/* Updated gradient to match the orange brand color */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(32,184,205,0.16),rgba(255,255,255,0.7)_80%,transparent_100%)] pointer-events-none mix-blend-multiply" />
    </div>
  );
}
