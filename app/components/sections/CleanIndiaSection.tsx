"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { WixMadeForDisplayFont } from "@/app/fonts";
import Container from "../layout/Container";
import { CheckCircle2, Leaf, Sparkles } from "lucide-react";
import {
  gsap,
  prefersReducedMotion,
  getResponsiveConfig,
  ANIMATION_CONFIG,
} from "@/app/lib/animations";

const contributions = [
  {
    iconSrc: "/icons/clean-india/icon-sprout.svg",
    title: "Eco-Friendly Cleaning Solutions",
    body: "We use safe, biodegradable detergents and chemicals that protect both your home and the environment.",
  },
  {
    iconSrc: "/icons/clean-india/icon-droplet.svg",
    title: "Water-Efficient Processes",
    body: "Our laundry and car wash services are designed to minimize water wastage while maintaining high cleaning standards.",
  },
  {
    iconSrc: "/icons/clean-india/icon-home.svg",
    title: "Promoting Hygienic Living Spaces",
    body: "Deep cleaning and sanitization services help reduce germs, bacteria, and allergens in homes.",
  },
  {
    iconSrc: "/icons/clean-india/icon-shield-check.svg",
    title: "Safe Pest Control Practices",
    body: "We use government-approved, family-safe pest control methods to ensure effective and responsible treatment.",
  },
  {
    iconSrc: "/icons/clean-india/icon-package.svg",
    title: "Responsible Handling & Waste Reduction",
    body: "Efficient processes to reduce unnecessary waste and ensure proper disposal practices.",
  },
] as const;

const whyBullets = [
  "Better hygiene",
  "Sustainable practices",
  "A cleaner, greener India",
] as const;

const bodyClass = "text-[16px] leading-[1.65] text-[#423933] sm:text-[18px]";

/** Nature photo — lives under `public/images/clean-india/` */
const CLEAN_INDIA_NATURE_IMAGE = "/images/clean-india/clean-india.png";

function contribCardGridClass(index: number) {
  const xlSpan = index === 0 || index === 1 ? "xl:col-span-6" : "xl:col-span-4";
  if (index === 4) {
    return `${xlSpan} md:col-span-2 md:max-w-xl md:justify-self-center xl:max-w-none xl:justify-self-stretch`;
  }
  return xlSpan;
}

export default function CleanIndiaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(
        ".cic-hero-bit, .cic-tagline, .cic-nature-photo, .cic-contrib-card, .cic-matters-bit, .cic-promise-block, .cic-cta-banner",
        { opacity: 1, y: 0, scale: 1 },
      );
      return;
    }

    const ctx = gsap.context(() => {
      const config = getResponsiveConfig();

      gsap.fromTo(
        ".cic-hero-bit",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.11,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: ".cic-hero",
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".cic-tagline",
        { opacity: 0, y: 24, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: ".cic-tagline",
            start: "top 86%",
            once: true,
          },
          onComplete() {
            gsap.set(".cic-tagline", { clearProps: "transform" });
          },
        },
      );

      gsap.fromTo(
        ".cic-nature-photo",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: ".cic-nature-photo",
            start: "top 86%",
            once: true,
          },
          onComplete() {
            gsap.set(".cic-nature-photo", { clearProps: "transform" });
          },
        },
      );

      const cards = gsap.utils.toArray(".cic-contrib-card") as HTMLElement[];
      cards.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: config.distance.large },
          {
            opacity: 1,
            y: 0,
            duration: config.duration.normal * 1.1,
            delay: i * 0.09,
            ease: ANIMATION_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
            onComplete() {
              gsap.set(el, { clearProps: "transform" });
            },
          },
        );
      });

      gsap.fromTo(
        ".cic-matters-bit",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: ANIMATION_CONFIG.ease.default,
          scrollTrigger: {
            trigger: ".cic-matters",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".cic-promise-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: ".cic-promise-block",
            start: "top 85%",
            once: true,
          },
          onComplete() {
            gsap.set(".cic-promise-block", { clearProps: "transform" });
          },
        },
      );

      gsap.fromTo(
        ".cic-cta-banner",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: ANIMATION_CONFIG.ease.snappy,
          scrollTrigger: {
            trigger: ".cic-cta-banner",
            start: "top 88%",
            once: true,
          },
          onComplete() {
            gsap.set(".cic-cta-banner", { clearProps: "transform" });
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="clean-india-commitment"
      ref={sectionRef}
      className="relative overflow-hidden px-[20px] py-[60px] sm:py-[80px] md:py-[100px]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#F4FCF7] via-[#FFFBF6] to-white"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 z-0 h-[420px] w-[420px] rounded-full bg-[#138808]/[0.05] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 z-0 h-[380px] w-[380px] rounded-full bg-[#FF9933]/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-px w-[min(92%,640px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#138808]/20 to-transparent"
        aria-hidden
      />

      <Container isMaxWidth={true} className="relative z-10 max-w-[1200px]">
        <div className="cic-hero">
          {/* Title only — full width, separated from content below */}
          <header className="text-center lg:text-left">
            <p className="cic-hero-bit text-xs font-bold uppercase tracking-[0.22em] text-[#138808] opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:text-sm">
              Our pledge
            </p>
            <div className="cic-hero-bit mt-3 border-b border-[#E8DFD6]/70 pb-6 sm:pb-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100">
              <h2
                className="flex flex-nowrap items-center justify-center gap-3 sm:gap-4 lg:justify-start"
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                <Image
                  src="/icons/clean-india/flag-india.svg"
                  alt=""
                  width={45}
                  height={25}
                  unoptimized
                  className="h-11 w-auto shrink-0 self-center rounded-[4px] object-contain shadow-sm ring-1 ring-black/5 sm:h-12 md:h-[52px]"
                  aria-hidden
                />
                <span className="min-w-0 whitespace-nowrap text-[clamp(1rem,3.4vw,2.45rem)] font-semibold leading-none tracking-tight text-[#33302E]">
                  Clean India Commitment – Wash &amp; Wow
                </span>
              </h2>
            </div>
          </header>

          {/* Copy (left) + nature image (right) */}
          <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:mt-12 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="mx-auto max-w-prose space-y-4 text-center lg:mx-0 lg:max-w-none lg:text-left">
              <p className="cic-hero-bit inline-flex items-center justify-center gap-2 text-base font-medium text-[#FF7700] opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:text-lg lg:justify-start">
                <Leaf
                  className="h-5 w-5 shrink-0 text-[#138808]"
                  strokeWidth={2}
                />
                Supporting a Cleaner, Healthier India
              </p>
              <p
                className={`cic-hero-bit ${bodyClass} opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100`}
              >
                At Wash &amp; Wow, cleanliness is not just a service — it&apos;s
                a responsibility. Inspired by the vision of Swachh Bharat
                Mission, we are committed to creating cleaner homes, healthier
                environments, and a more sustainable future for our communities.
              </p>
              <p
                className={`cic-hero-bit ${bodyClass} opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100`}
              >
                Through our daily services — from laundry and home cleaning to
                car wash and pest control — we actively contribute towards
                improving hygiene standards and promoting responsible living
                across India.
              </p>
            </div>

            <figure className="cic-nature-photo relative w-full opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 lg:max-w-none">
              <div className="relative aspect-[5/3] w-full min-h-[200px] overflow-hidden rounded-[24px] border border-[#E8DFD6]/60 shadow-[6px_10px_28px_-8px_rgba(19,136,8,0.12),6px_6px_16px_rgba(209,199,189,0.25)] sm:aspect-[2/1] sm:rounded-[28px] sm:max-h-[min(56vw,380px)] lg:max-h-[420px]">
                <Image
                  src={CLEAN_INDIA_NATURE_IMAGE}
                  alt="Green natural landscape — a cleaner, healthier environment"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority={false}
                />
              </div>
              <figcaption className="sr-only">
                Nature imagery supporting our commitment to sustainability and a
                cleaner India.
              </figcaption>
            </figure>
          </div>

          {/* Our mantra — below the copy + image row */}
          {/* <div
            className="cic-tagline relative mt-8 overflow-hidden rounded-[24px] border border-[#E8DFD6]/60 bg-gradient-to-br from-white via-[#FFFCF8] to-[#F0FAF4]/50 opacity-0 shadow-[6px_6px_16px_rgba(209,199,189,0.35),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.85)] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 sm:mt-10 lg:mt-12"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FF9933]/[0.06] via-transparent to-[#138808]/[0.08]" />
            <div className="relative px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
              <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFAB5C] to-[#FF7700] text-white shadow-md">
                  <Sparkles className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5E5450]">
                  Our mantra
                </span>
              </div>
              <p className="text-center text-[clamp(1.1rem,2.4vw,1.4rem)] font-semibold leading-snug text-[#33302E] lg:text-left">
                Clean Homes. Healthy Living. A Cleaner India.
              </p>
              <div className="mx-auto mt-5 h-px max-w-[200px] bg-gradient-to-r from-transparent via-[#138808]/25 to-transparent lg:mx-0" />
              <p className="mt-5 text-center text-sm leading-relaxed text-[#5E5450] lg:text-left">
                Inspired by Swachh Bharat — everyday services that raise hygiene
                and care for communities across India.
              </p>
            </div>
          </div> */}
        </div>

        {/* Contributions */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="mx-auto mb-10 max-w-2xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
            <h3
              className="text-[clamp(1.35rem,3vw,1.9rem)] font-semibold text-[#33302E]"
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              <span
                className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F5EC] to-[#D4EDDA] sm:h-11 sm:w-11"
                aria-hidden
              >
                <Image
                  src="/icons/clean-india/icon-bubbles.svg"
                  alt=""
                  width={22}
                  height={22}
                  unoptimized
                  className="h-[22px] w-[22px] object-contain sm:h-[24px] sm:w-[24px]"
                />
              </span>
              How Wash &amp; Wow Contributes
            </h3>
            <p
              className={`mt-3 max-w-xl lg:max-w-2xl ${bodyClass} text-[#5E5450] lg:mx-0 lg:mr-auto`}
            >
              We align our services with modern cleanliness and sustainability
              practices:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12 xl:gap-6">
            {contributions.map((c, i) => (
              <article
                key={c.title}
                className={`cic-contrib-card group flex h-full flex-col rounded-[22px] border border-[#E8DFD6]/50 bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] p-5 opacity-0 shadow-[6px_6px_16px_rgba(209,199,189,0.4),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8)] transition-[box-shadow,border-color] duration-300 motion-reduce:translate-y-0 motion-reduce:opacity-100 hover:border-[#138808]/25 hover:shadow-[8px_8px_20px_rgba(209,199,189,0.45),-8px_-8px_20px_rgba(255,255,255,0.95)] sm:p-6 ${contribCardGridClass(i)}`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-md sm:h-16 sm:w-16"
                    style={{
                      background:
                        "linear-gradient(145deg, #1aad4a 0%, #138808 45%, #0d5c2a 100%)",
                      boxShadow:
                        "0 6px 18px rgba(0,0,0,0.14), inset 0 1px 2px rgba(255,255,255,0.35)",
                    }}
                    aria-hidden
                  >
                    <Image
                      src={c.iconSrc}
                      alt=""
                      width={28}
                      height={28}
                      unoptimized
                      className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                    />
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h4
                      className="text-base font-semibold leading-snug text-[#33302E] sm:text-lg"
                      style={{
                        fontFamily: WixMadeForDisplayFont.style.fontFamily,
                      }}
                    >
                      {c.title}
                    </h4>
                    <p className={`mt-2 ${bodyClass}`}>{c.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Why it matters */}
        <div className="cic-matters mx-auto mt-16 max-w-4xl sm:mt-20 md:mt-24 lg:max-w-none">
          <div className="rounded-[28px] border border-[#E8DFD6]/50 bg-gradient-to-br from-white to-[#FAFCFA] p-6 shadow-[6px_6px_20px_rgba(209,199,189,0.3),-4px_-4px_16px_rgba(255,255,255,0.85)] sm:p-8 md:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
              <div className="cic-matters-bit text-center opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 lg:text-left">
                <h3
                  className="text-[clamp(1.35rem,3vw,1.9rem)] font-semibold text-[#33302E]"
                  style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                >
                  <span
                    className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E8F4FC] sm:h-11 sm:w-11"
                    aria-hidden
                  >
                    <Image
                      src="/icons/clean-india/icon-globe.svg"
                      alt=""
                      width={22}
                      height={22}
                      unoptimized
                      className="h-[22px] w-[22px] object-contain sm:h-[24px] sm:w-[24px]"
                    />
                  </span>
                  Why It Matters
                </h3>
                <p className={`mt-4 ${bodyClass}`}>
                  Clean surroundings are directly linked to better health,
                  improved quality of life, and a stronger community.
                </p>
                <p className={`mt-3 ${bodyClass}`}>
                  By choosing Wash &amp; Wow, you&apos;re not just booking a
                  service — you&apos;re participating in a larger movement
                  towards:
                </p>
              </div>

              <ul className="space-y-0 divide-y divide-[#E8DFD6]/80 rounded-2xl border border-[#E8DFD6]/60 bg-white/80 px-1 py-1 shadow-inner">
                {whyBullets.map((line) => (
                  <li
                    key={line}
                    className="cic-matters-bit flex items-center gap-3 px-4 py-3.5 opacity-0 first:rounded-t-[14px] last:rounded-b-[14px] motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:px-5 sm:py-4"
                  >
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-[#138808] sm:h-6 sm:w-6"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span
                      className="text-[16px] font-semibold text-[#33302E] sm:text-[17px]"
                      style={{
                        fontFamily: WixMadeForDisplayFont.style.fontFamily,
                      }}
                    >
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Promise + CTA */}
        <div className="mt-12 grid gap-5 sm:mt-14 md:mt-16 lg:grid-cols-12 lg:gap-6">
          <div
            className="cic-promise-block relative overflow-hidden rounded-[24px] border border-[#E8DFD6]/50 bg-gradient-to-br from-[#FEFEFE] via-white to-[#F0FAF4]/35 p-6 opacity-0 shadow-[6px_6px_18px_rgba(209,199,189,0.35)] motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:p-8 lg:col-span-7"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#FF9431]/10 blur-2xl" />
            <div className="relative flex flex-wrap items-center gap-3 text-[clamp(1.15rem,2.5vw,1.45rem)] font-semibold text-[#33302E]">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F0FAF4] to-[#D4EDDA] shadow-sm"
                aria-hidden
              >
                <Image
                  src="/icons/clean-india/icon-handshake.svg"
                  alt=""
                  width={22}
                  height={22}
                  unoptimized
                  className="h-[22px] w-[22px] object-contain"
                />
              </span>
              Our Promise
            </div>
            <p className={`relative mt-4 max-w-xl ${bodyClass}`}>
              We are continuously improving our processes, technology, and
              practices to ensure that every service we deliver contributes
              positively to both your home and the environment.
            </p>
          </div>

          <div
            className="cic-cta-banner relative flex min-h-[180px] flex-col items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#138808] via-[#0f7a36] to-[#0d5c2a] px-6 py-8 text-center opacity-0 shadow-[0_20px_50px_-12px_rgba(19,136,8,0.35)] motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:px-8 lg:col-span-5 lg:min-h-0 lg:self-stretch"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.12] to-transparent" />
            <p className="relative flex max-w-[20ch] flex-wrap items-center justify-center gap-2 text-[clamp(1.05rem,2.5vw,1.3rem)] font-semibold leading-snug text-white sm:max-w-none">
              <Image
                src="/icons/clean-india/flag-india.svg"
                alt=""
                width={36}
                height={24}
                unoptimized
                className="h-6 w-auto shrink-0 rounded-sm object-contain shadow-md ring-1 ring-white/20"
                aria-hidden
              />
              <span>
                Together, let&apos;s build cleaner homes and a cleaner India.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
