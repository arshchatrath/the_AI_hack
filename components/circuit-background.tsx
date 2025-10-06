"use client"

import { useEffect, useRef } from "react"

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
        // background subtle grid dots
        ctx.fillStyle = "rgba(32,184,205,0.06)" // brand primary, very subtle
        nodes.forEach((n) => {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > 1) n.vx *= -1
          if (n.y < 0 || n.y > 1) n.vy *= -1
          const px = n.x * canvas.clientWidth
          const py = n.y * canvas.clientHeight
          ctx.beginPath()
          ctx.arc(px, py, 1.2, 0, Math.PI * 2)
          ctx.fill()
        })
        // connections
        ctx.strokeStyle = "rgba(186,223,222,0.15)" // brand-accent faint
        nodes.forEach((a, i) => {
          for (let j = i + 1; j < nodes.length; j++) {
            const b = nodes[j]
            const dx = (a.x - b.x) * canvas.clientWidth
            const dy = (a.y - b.y) * canvas.clientHeight
            const d2 = dx * dx + dy * dy
            if (d2 < 140 * 140) {
              ctx.globalAlpha = 1 - d2 / (140 * 140)
              ctx.beginPath()
              ctx.moveTo(a.x * canvas.clientWidth, a.y * canvas.clientHeight)
              ctx.lineTo(b.x * canvas.clientWidth, b.y * canvas.clientHeight)
              ctx.stroke()
            }
          }
        })
        ctx.globalAlpha = 1
      }
      raf = requestAnimationFrame(step)
    }
    step()
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      mq.removeEventListener?.("change", onChange)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <canvas ref={canvasRef} className="h-full w-full block" aria-hidden />
      {/* subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(32,184,205,0.08),transparent_60%)] pointer-events-none" />
    </div>
  )
}
