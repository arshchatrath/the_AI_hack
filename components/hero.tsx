"use client";

import { Button } from "@/components/ui/button";
import { CircuitBackground } from "./circuit-background";

export function Hero() {
  return (
    <section id="home" className="relative isolate bg-background py-20">
      <CircuitBackground />
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-20 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full flex flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold rounded-full border border-blue-200 px-4 py-1 bg-blue-100 mb-6 text-blue-800 shadow">
            Inclusive • Ethical • Impact
            <span
              className="inline-block h-2 w-2 rounded-full bg-blue-400"
              aria-hidden
            />
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-pretty leading-tight text-foreground drop-shadow-sm">
            AI for Inclusion Hackathon 2025
          </h1>
          <p className="mt-6 text-xl text-muted-foreground font-medium">
            Building bias-free AI solutions for an inclusive tomorrow.
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
