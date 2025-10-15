"use client";

import { Button } from "@/components/ui/button";
import { CircuitBackground } from "./circuit-background";

export function Hero() {
  return (
    <section id="home" className="relative isolate bg-background py-20">
      <CircuitBackground />
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-20 flex flex-col items-center justify-center">
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 text-sm md:text-base font-semibold rounded-full border border-blue-200 px-5 py-1.5 bg-blue-100 mb-8 text-blue-800 shadow">
            Inclusive • Ethical • Impact
            <span
              className="inline-block h-2.5 w-2.5 rounded-full bg-blue-400"
              aria-hidden
            />
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-pretty leading-tight text-foreground drop-shadow-sm">
            Innovation Challenge 2026
          </h1>
          <h1 className="text-xl md:text-7xl text-pretty text-foreground drop-shadow-sm">
            SabkaAI: AI for Inclusion
          </h1>

          <p className="mt-6 text-xl text-muted-foreground font-medium">
            The Innovation Challenge, part of the IndiaAI Impact Summit,
            champions inclusive and culturally grounded AI solutions that are
            equitable, accessible, and impactful empowering people and
            accelerating progress through responsible AI.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-brand text-primary-foreground hover:bg-brand/90 text-lg px-8 py-6 shadow-lg font-semibold rounded-lg transition-all duration-200">
              Register Now
            </Button>
            <Button
              variant="outline"
              asChild
              className="text-base px-6 py-6 rounded-lg border-muted-foreground/30"
            >
              <a href="#problems">Explore Tracks</a>
            </Button>
          </div>
        </div>
      </div>
      {/* Edge-to-edge Event Highlights at the end */}
    </section>
  );
}
