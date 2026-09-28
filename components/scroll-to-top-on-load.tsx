"use client";

import { useEffect } from "react";

// Ensure page starts at top on initial load/reload (not when navigating to a section)
export function ScrollToTopOnLoad() {
  useEffect(() => {
    if (window.location.hash === "" || window.location.hash === "#home") {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      });
    }
  }, []);

  return null;
}
