"use client";

import { useEffect } from "react";

/**
 * RootCleanup - attempts to remove known extension attributes 
 * (e.g., Grammarly, Savee) that cause hydration mismatch.
 */
export default function RootCleanup() {
  useEffect(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    // Common attributes injected by some browser extensions
    const attributesToRemove = [
      "data-gr-ext-installed",
      "data-new-gr-c-s-check-loaded",
      "data-savee-read",
    ];

    // Remove from <html> and <body>
    attributesToRemove.forEach((attr) => {
      if (htmlEl.hasAttribute(attr)) htmlEl.removeAttribute(attr);
      if (bodyEl.hasAttribute(attr)) bodyEl.removeAttribute(attr);
    });

    // If the extension injects style with custom CSS variables:
    if (htmlEl.hasAttribute("style")) {
      const styleVal = htmlEl.getAttribute("style");
      // Example check for '--transcript-star-color'
      if (styleVal && styleVal.includes("--transcript-star-color")) {
        htmlEl.removeAttribute("style");
      }
    }
  }, []);

  // Renders nothing
  return null;
}
