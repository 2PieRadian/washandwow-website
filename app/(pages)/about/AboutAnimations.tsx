"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  gsap,
  prefersReducedMotion,
  getResponsiveConfig,
  ANIMATION_CONFIG,
} from "@/app/lib/animations";

export function AboutHeroAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    if (prefersReducedMotion()) {
      containerRef.current
        ?.querySelectorAll(".about-hero-item")
        .forEach((el) => {
          el.classList.remove("opacity-0");
        });
      return;
    }

    const config = getResponsiveConfig();

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        containerRef.current?.querySelectorAll(".about-hero-item") ?? [],
      );

      if (items.length > 0) {
        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: config.distance.large,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: config.duration.normal * 1.05,
            stagger: {
              each: 0.11,
              from: "start",
            },
            ease: ANIMATION_CONFIG.ease.smooth,
            delay: 0.08,
          },
        );
        return;
      }

      const tl = gsap.timeline();
      tl.fromTo(
        ".about-hero-text",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: config.duration.normal },
      ).fromTo(
        ".about-hero-image",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: config.duration.normal,
          ease: ANIMATION_CONFIG.ease.smooth,
        },
        "<",
      );
    }, containerRef);

    return () => ctx.revert();
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}

export function AboutSectionAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const config = getResponsiveConfig();

      gsap.fromTo(
        ".about-section-header",
        { opacity: 0, y: config.distance.medium },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.normal * 1.3,
          ease: ANIMATION_CONFIG.ease.default,
          scrollTrigger: {
            trigger: ".about-section-header",
            start: "top 75%",
            once: true,
          },
        },
      );

      const processCards = gsap.utils.toArray(
        ".about-process-card",
      ) as Element[];
      processCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: config.distance.medium, scale: 1.05 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: config.duration.normal * 1.3,
            ease: ANIMATION_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              once: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-[20px] py-[60px] sm:py-[80px] md:py-[100px]"
    >
      {children}
    </section>
  );
}
