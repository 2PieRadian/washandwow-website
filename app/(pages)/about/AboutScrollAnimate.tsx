"use client";

import { useEffect, useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  getResponsiveConfig,
  ANIMATION_CONFIG,
} from "@/app/lib/animations";

/**
 * Per-section scroll reveals: every `.about-animate-item` inside each
 * `.about-animate-section` staggers in (DOM order), including nested children.
 */
export default function AboutScrollAnimate({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    if (prefersReducedMotion()) {
      root.querySelectorAll(".about-animate-item").forEach((el) => {
        el.classList.remove("opacity-0", "translate-y-6");
      });
      return;
    }

    const config = getResponsiveConfig();
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(".about-animate-section"),
      );

      sections.forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>(
          ":scope .about-animate-item",
        );
        if (items.length === 0) return;

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: Math.min(36, config.distance.large + 8),
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: config.duration.normal * 0.9,
            stagger: {
              each: 0.085,
              from: "start",
            },
            ease: ANIMATION_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
