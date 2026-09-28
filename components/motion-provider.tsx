"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

// Components use the lightweight `m` element; LazyMotion supplies only the
// animation/gesture/in-view features the site needs instead of the full bundle.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
