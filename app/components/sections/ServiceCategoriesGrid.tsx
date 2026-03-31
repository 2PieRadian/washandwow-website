"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WixMadeForDisplayFont } from "@/app/fonts";
import Container from "../layout/Container";
import { SERVICE_CATEGORIES, categoryPath } from "@/app/lib/service-categories";
import {
  gsap,
  prefersReducedMotion,
  getResponsiveConfig,
  ANIMATION_CONFIG,
} from "@/app/lib/animations";

type Props = {
  /** When set, wraps the section with this id (e.g. home hash navigation). */
  sectionId?: string;
  /** Show section eyebrow + title (hub page can use its own hero). */
  showHeader?: boolean;
  /**
   * When true (e.g. /services hub), staggers every card child (emoji, title, teaser, …)
   * in one scroll-triggered sequence instead of animating whole cards only.
   */
  deepStagger?: boolean;
  /** Tighter section + grid gaps (e.g. /services hub). */
  compactSpacing?: boolean;
};

export default function ServiceCategoriesGrid({
  sectionId,
  showHeader = true,
  deepStagger = false,
  compactSpacing = false,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(".scg-header", { opacity: 1, y: 0 });
      gsap.set(".scg-header-line", { opacity: 1, y: 0 });
      gsap.set(".scg-card", { opacity: 1 });
      gsap.set(".scg-card-ch", { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const config = getResponsiveConfig();

      if (showHeader) {
        gsap.fromTo(
          ".scg-header-line",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: config.duration.normal,
            stagger: config.stagger.normal,
            ease: ANIMATION_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: ".scg-header",
              start: "top 78%",
              once: true,
            },
          },
        );
      }

      /* Opacity-only so GSAP never writes inline `transform` — CSS hover scale/translate can transition. */
      if (deepStagger) {
        gsap.fromTo(
          ".scg-card-ch",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.52,
            stagger: 0.062,
            ease: ANIMATION_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: ".scg-grid",
              start: "top 78%",
              once: true,
            },
          },
        );
      } else {
        const cards = gsap.utils.toArray(".scg-card") as HTMLElement[];
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0 },
            {
              opacity: 1,
              duration: config.duration.normal,
              delay: index * 0.08,
              ease: ANIMATION_CONFIG.ease.smooth,
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [showHeader, deepStagger]);

  const sectionPad = compactSpacing
    ? "py-8 sm:py-10 md:py-12"
    : "py-[60px] sm:py-[80px] md:py-[100px]";
  const gridGap = compactSpacing ? "gap-4 sm:gap-5" : "gap-5 sm:gap-6";
  const cardPad = compactSpacing ? "p-6 sm:p-8" : "p-8 sm:p-10";
  const headerMb = compactSpacing ? "mb-6 sm:mb-8" : "mb-10 sm:mb-14";

  const inner = (
    <>
      {showHeader ? (
        <div className={`scg-header mx-auto max-w-2xl text-center ${headerMb}`}>
          <span className="scg-header-line block text-sm font-medium uppercase tracking-[0.2em] text-[#FF9431] opacity-0 sm:text-base">
            What we offer
          </span>
          <h2
            className="scg-header-line mt-3 text-[clamp(1.65rem,4vw,2.5rem)] font-semibold leading-tight text-[#33302E] opacity-0"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            Services for a cleaner home &amp; life
          </h2>
          <p className="scg-header-line mt-4 text-[16px] leading-[1.65] text-[#423933] opacity-0 sm:text-[18px]">
            Four categories, one trusted partner — book everything you need from
            a single app.
          </p>
        </div>
      ) : null}

      <div className={`scg-grid grid grid-cols-1 md:grid-cols-2 ${gridGap}`}>
        {SERVICE_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={categoryPath(cat.slug)}
            scroll={false}
            className={`scg-card group relative isolate block translate-y-0 overflow-hidden rounded-[24px] border border-[#E8DFD6]/70 bg-gradient-to-br from-[#FEFEFE] via-[#FDFCFA] to-[#F6F1EC] shadow-[6px_10px_32px_rgba(209,199,189,0.28),inset_0_1px_0_rgba(255,255,255,0.95)] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] will-change-transform hover:-translate-y-2 hover:border-[#FF9431]/40 hover:shadow-[0_28px_56px_-16px_rgba(255,148,49,0.22),0_14px_28px_-10px_rgba(88,78,70,0.14),inset_0_1px_0_rgba(255,255,255,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9431] active:translate-y-[-6px] motion-reduce:transition-[box-shadow,border-color] motion-reduce:duration-300 motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 ${cardPad} ${
              deepStagger ? "" : "opacity-0"
            }`}
          >
            <span
              className="pointer-events-none absolute inset-x-8 bottom-0 z-0 h-[3px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#FF9431] via-[#FF7700] to-[#FF9431] transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-x-100 motion-reduce:scale-x-0"
              aria-hidden
            />
            <div
              className={`pointer-events-none absolute -right-10 -top-10 z-0 h-40 w-40 scale-100 rounded-full bg-gradient-to-br from-[#FF9431]/15 via-[#FF9431]/5 to-transparent blur-2xl transition-[transform,top,right] duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:-right-6 group-hover:-top-6 group-hover:scale-125 group-hover:from-[#FF9431]/25 group-hover:via-[#FF9431]/12 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
                deepStagger ? "scg-card-ch opacity-0" : ""
              }`}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#FF9431]/5 via-transparent to-[#FF7700]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[24px]"
              aria-hidden
            >
              <div className="absolute inset-y-0 -left-1/3 w-1/2 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:translate-x-[280%] group-hover:opacity-100 motion-reduce:hidden" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <span
                className={`flex h-14 w-14 shrink-0 origin-center scale-100 rotate-0 transform-gpu items-center justify-center rounded-2xl bg-white text-2xl shadow-[0_4px_16px_rgba(209,199,189,0.4)] ring-1 ring-[#E8DFD6]/50 transition-[transform,box-shadow,ring-color] duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_8px_24px_rgba(255,148,49,0.2)] group-hover:ring-[#FF9431]/35 sm:h-16 sm:w-16 sm:text-[1.75rem] motion-reduce:transition-shadow motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0 ${
                  deepStagger ? "scg-card-ch opacity-0" : ""
                }`}
                aria-hidden
              >
                {cat.emoji}
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 origin-center scale-100 rotate-0 transform-gpu items-center justify-center rounded-full border border-[#E8DFD6]/80 bg-white/95 text-[#584E46] shadow-sm transition-[transform,box-shadow,border-color,background-color,color] duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-110 group-hover:-rotate-12 group-hover:border-[#FF9431]/45 group-hover:bg-gradient-to-br group-hover:from-[#FFF8F2] group-hover:to-white group-hover:text-[#FF7700] group-hover:shadow-[0_6px_20px_rgba(255,148,49,0.2)] motion-reduce:transition-[color,background-color,border-color,box-shadow] motion-reduce:duration-300 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0 ${
                  deepStagger ? "scg-card-ch opacity-0" : ""
                }`}
              >
                <ArrowUpRight
                  className="h-5 w-5 translate-x-0 translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                  strokeWidth={2}
                />
              </span>
            </div>
            <h3
              className={`relative z-10 text-xl font-semibold text-[#33302E] transition-colors duration-300 group-hover:text-[#2C2825] sm:text-2xl ${
                compactSpacing ? "mt-4" : "mt-5"
              } ${deepStagger ? "scg-card-ch opacity-0" : ""}`}
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              {cat.cardTitle}
            </h3>
            <p
              className={`relative z-10 mt-2 text-[16px] leading-[1.65] text-[#423933] transition-colors duration-300 group-hover:text-[#3a332f] sm:text-[18px] ${
                deepStagger ? "scg-card-ch opacity-0" : ""
              }`}
            >
              {cat.teaser}
            </p>
            <span
              className={`relative z-10 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF9431] transition-all duration-300 group-hover:gap-2 group-hover:text-[#FF7700] ${
                compactSpacing ? "mt-4" : "mt-5"
              } ${deepStagger ? "scg-card-ch opacity-0" : ""}`}
            >
              View details
              <ArrowUpRight
                className="h-3.5 w-3.5 translate-x-0 translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                strokeWidth={2.5}
                aria-hidden
              />
            </span>
          </Link>
        ))}
      </div>
    </>
  );

  if (sectionId) {
    return (
      <section
        id={sectionId}
        ref={sectionRef}
        className={`${sectionPad} px-[20px] bg-gradient-to-b from-[#FFFBF6] to-white`}
      >
        <Container isMaxWidth={true} className="max-w-[1000px]">
          {inner}
        </Container>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={`${sectionPad} px-[20px] bg-gradient-to-b from-[#FFFBF6] to-white`}
    >
      <Container isMaxWidth={true} className="max-w-[1000px]">
        {inner}
      </Container>
    </section>
  );
}
