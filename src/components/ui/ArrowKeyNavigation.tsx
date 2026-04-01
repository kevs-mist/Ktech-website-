"use client";

import { useEffect } from "react";

/**
 * ArrowKeyNavigation — REVISION SPRINT 2.0
 * Optimized for high performance and speed.
 * Uses instantaneous scrollBy for zero-lag consistency.
 */
export default function ArrowKeyNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Delta to scroll. 400px provides a substantial, fast jump.
      const scrollAmount = 400;

      if (e.key === "ArrowDown") {
        window.scrollBy({ top: scrollAmount, behavior: "auto" });
      } else if (e.key === "ArrowUp") {
        window.scrollBy({ top: -scrollAmount, behavior: "auto" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
