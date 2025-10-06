"use client"

import { Button } from "@/components/ui/button"
import { CircuitBackground } from "./circuit-background"

function EventHighlights() {
  const items = [
    "6 Innovation Tracks",
    "₹1,00,000 Prize Pool",
    "Global Participation Welcome",
    "Focus on Rural & Accessibility Solutions",
  ]
  // Duplicate list for seamless marquee
  const list = [...items, ...items, ...items]
  return (
    <div className="overflow-hidden border rounded-md bg-card">
      <div className="marquee px-4 py-2 text-sm">
        {list.map((t, i) => (
          <span key={i} className="px-6 py-1 rounded-full border bg-secondary/30">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative isolate bg-background">
      <CircuitBackground />
      <div className="container mx-auto px-4 pt-16 md:pt-24 pb-16">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium rounded-full border px-3 py-1 bg-secondary/40 mb-4">
            Inclusive • Ethical • Impact
            <span className="inline-block h-2 w-2 rounded-full bg-warm-1" aria-hidden />
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-pretty leading-tight">AI for Inclusion Hackathon 2025</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Building bias-free AI solutions for an inclusive tomorrow.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Button className="bg-brand text-primary-foreground hover:bg-brand/90 text-base px-6 py-6">
              Register Now
            </Button>
            <Button variant="outline" asChild>
              <a href="#problems">Explore Tracks</a>
            </Button>
          </div>

          <div className="mt-8">
            <EventHighlights />
          </div>
        </div>
      </div>
    </section>
  )
}
