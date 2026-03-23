"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  gsap,
  prefersReducedMotion,
  getResponsiveConfig,
  isMobile,
  ANIMATION_CONFIG,
} from "@/app/lib/animations";

interface PageHeroAnimationProps {
  children: React.ReactNode;
  variant?: "default" | "split" | "centered" | "none";
}

export function PageHeroAnimation({
  children,
  variant = "default",
}: PageHeroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    if (prefersReducedMotion()) return;

    // Parent page drives animation (e.g. pricing full-column sequence)
    if (variant === "none") return;

    const config = getResponsiveConfig();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: ANIMATION_CONFIG.ease.default },
      });

      if (variant === "split") {
        tl.fromTo(
          ".page-hero-left",
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: config.duration.normal * 1.2 },
        ).fromTo(
          ".page-hero-right",
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: config.duration.normal * 1.2 },
          "<",
        );
      } else if (variant === "centered") {
        tl.fromTo(
          ".page-hero-title",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: config.duration.normal,
            ease: ANIMATION_CONFIG.ease.smooth,
          },
        )
          .fromTo(
            ".page-hero-meta",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: config.duration.fast,
              ease: ANIMATION_CONFIG.ease.default,
            },
            "-=0.5",
          )
          .fromTo(
            ".page-hero-subtitle",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: config.duration.fast,
              ease: ANIMATION_CONFIG.ease.default,
            },
            "-=0.4",
          );
      } else {
        tl.fromTo(
          ".page-hero-content",
          { opacity: 0, y: config.distance.medium },
          { opacity: 1, y: 0, duration: config.duration.normal },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [pathname, variant]);

  return <div ref={containerRef}>{children}</div>;
}

interface PageSectionsAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export function PageSectionsAnimation({
  children,
  className = "",
}: PageSectionsAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let ctx: gsap.Context;

    const delayMs = isMobile() ? 1200 : 800;
    const heroDelay = setTimeout(() => {
      ctx = gsap.context(() => {
        const config = getResponsiveConfig();

        const sections = gsap.utils.toArray(".page-section") as Element[];
        sections.forEach((section, index) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: config.distance.medium },
            {
              opacity: 1,
              y: 0,
              duration: config.duration.normal * 1.3,
              ease: ANIMATION_CONFIG.ease.default,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
              },
            },
          );
        });

        const cards = gsap.utils.toArray(".page-card") as Element[];
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: config.distance.small, scale: 1.02 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: config.duration.normal * 1.2,
              ease: ANIMATION_CONFIG.ease.smooth,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            },
          );
        });

        const faqItems = gsap.utils.toArray(".page-faq-item") as Element[];
        faqItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: config.duration.fast * 1.2,
              ease: ANIMATION_CONFIG.ease.default,
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                once: true,
              },
            },
          );
        });
      }, containerRef);
    }, delayMs);

    return () => {
      clearTimeout(heroDelay);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

interface FooterAnimationProps {
  children: React.ReactNode;
}

export function FooterAnimation({ children }: FooterAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const config = getResponsiveConfig();

      gsap.fromTo(
        ".footer-main",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.normal * 1.3,
          ease: ANIMATION_CONFIG.ease.default,
          scrollTrigger: {
            trigger: ".footer-main",
            start: "top 90%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".footer-copyright",
        { opacity: 0 },
        {
          opacity: 1,
          duration: config.duration.fast,
          ease: ANIMATION_CONFIG.ease.default,
          scrollTrigger: {
            trigger: ".footer-copyright",
            start: "top 95%",
            once: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
