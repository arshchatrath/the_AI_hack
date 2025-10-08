"use client"

import { useRef, useEffect } from "react"

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    let raf = 0
    let prefersReduced = false

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    prefersReduced = mq.matches
    const onChange = () => (prefersReduced = mq.matches)
    mq.addEventListener?.("change", onChange)

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const nodes = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0015,
      vy: (Math.random() - 0.5) * 0.0015,
    }))

    function resize() {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    function step() {
      if (!prefersReduced) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // Draw lines
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i]
            const b = nodes[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 0.08) {
              ctx.beginPath()
              ctx.moveTo(a.x * canvas.width, a.y * canvas.height)
              ctx.lineTo(b.x * canvas.width, b.y * canvas.height)
              ctx.strokeStyle = "rgba(30,41,59,0.12)" // slate-800/10 for light bg
              ctx.lineWidth = 1.2
              ctx.stroke()
            }
          }
        }
        // Draw nodes
        for (const n of nodes) {
          ctx.beginPath()
          ctx.arc(n.x * canvas.width, n.y * canvas.height, 2.2 * DPR, 0, 2 * Math.PI)
          ctx.fillStyle = "rgba(30,41,59,0.18)" // darker dot for visibility
          ctx.fill()
        }
        // Animate
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          // Bounce off the edges (fix: use 0 and 1 as bounds, and reverse velocity only once per frame)
          if (n.x < 0) {
            n.x = 0
            n.vx *= -1
          }
          if (n.x > 1) {
            n.x = 1
            n.vx *= -1
          }
          if (n.y < 0) {
            n.y = 0
            n.vy *= -1
          }
          if (n.y > 1) {
            n.y = 1
            n.vy *= -1
          }
        }
      }
      raf = requestAnimationFrame(step)
    }
    step()
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <canvas ref={canvasRef} className="h-full w-full block" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(32,184,205,0.16),rgba(255,255,255,0.7)_80%,transparent_100%)] pointer-events-none mix-blend-multiply" />
    </div>
  )
}
