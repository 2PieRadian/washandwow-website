"use client";

import { useEffect } from "react";

export default function SmoothScrollEnabler() {
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      document.documentElement.classList.add("smooth-scroll");
    });

    return () => {
      cancelAnimationFrame(timer);
      document.documentElement.classList.remove("smooth-scroll");
    };
  }, []);

  return null;
}
