"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { WixMadeForDisplayFont } from "@/app/fonts";
import Container from "../layout/Container";
import { CheckCircle2, Sparkles } from "lucide-react";
import {
  gsap,
  prefersReducedMotion,
  getResponsiveConfig,
  ANIMATION_CONFIG,
} from "@/app/lib/animations";

const contributions = [
  {
    iconSrc: "/icons/clean-india/icon-sparkles.svg",
    imageSrc: "/images/clean-india/contrib-eco-friendly.png",
    imageAlt:
      "Natural detergents and soft towels — eco-friendly cleaning products in warm light",
    title: "Eco-Friendly Cleaning Solutions",
    body: "We use safe, biodegradable detergents and chemicals that protect both your home and the environment.",
  },
  {
    iconSrc: "/icons/clean-india/icon-droplet.svg",
    imageSrc: "/images/clean-india/contrib-water-efficient.png",
    imageAlt:
      "Modern laundry with efficient washing — water-smart cleaning in a warm-toned space",
    title: "Water-Efficient Processes",
    body: "Our laundry and car wash services are designed to minimize water wastage while maintaining high cleaning standards.",
  },
  {
    iconSrc: "/icons/clean-india/icon-home.svg",
    imageSrc: "/images/clean-india/contrib-hygienic-home.png",
    imageAlt:
      "Bright, freshly cleaned living space — hygienic home interior with warm accents",
    title: "Promoting Hygienic Living Spaces",
    body: "Deep cleaning and sanitization services help reduce germs, bacteria, and allergens in homes.",
  },
  {
    iconSrc: "/icons/clean-india/icon-shield-check.svg",
    imageSrc: "/images/clean-india/contrib-pest-control.png",
    imageAlt:
      "Professional, family-safe pest care — trained specialist in a modern home",
    title: "Safe Pest Control Practices",
    body: "We use government-approved, family-safe pest control methods to ensure effective and responsible treatment.",
  },
  {
    iconSrc: "/icons/clean-india/icon-package.svg",
    imageSrc: "/images/clean-india/contrib-waste-reduction.png",
    imageAlt:
      "Neatly packaged laundry and towels — responsible handling and minimal waste",
    title: "Responsible Handling & Waste Reduction",
    body: "Efficient processes to reduce unnecessary waste and ensure proper disposal practices.",
  },
] as const;

const whyBullets = [
  "Better hygiene",
  "Sustainable practices",
  "A cleaner, brighter India",
] as const;

const bodyClass = "text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]";

/** Section imagery — `public/images/clean-india/` */
const CLEAN_INDIA_HERO_IMAGE = "/images/clean-india/clean-india-hero.png";
const CLEAN_INDIA_SPOTLIGHT_IMAGE =
  "/images/clean-india/clean-india-spotlight.png";

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
        ".cic-hero-bit, .cic-hero-photo, .cic-contrib-card, .cic-matters-bit, .cic-promise-block, .cic-cta-banner",
        { opacity: 1, y: 0, scale: 1 },
      );
      return;
    }

    const ctx = gsap.context(() => {
      const config = getResponsiveConfig();

      /* Same pattern as HowItWorks / Reviews: per-block fromTo + scrollTrigger on that block */
      gsap.fromTo(
        ".cic-hero-bit",
        { opacity: 0, y: config.distance.medium },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.normal * 1.3,
          stagger: 0.11,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: ".cic-hero",
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".cic-hero-photo",
        { opacity: 0, y: config.distance.medium },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.slow * 1.3,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: ".cic-hero-photo",
            start: "top 70%",
            once: true,
          },
          onComplete() {
            gsap.set(".cic-hero-photo", { clearProps: "transform" });
          },
        },
      );

      gsap.fromTo(
        ".cic-contrib-card",
        { opacity: 0, y: config.distance.large },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.normal * 1.3,
          stagger: config.stagger.relaxed,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: ".cic-contrib-grid",
            start: "top 75%",
            once: true,
          },
          onComplete() {
            gsap.set(".cic-contrib-card", { clearProps: "transform" });
          },
        },
      );

      gsap.fromTo(
        ".cic-matters-bit",
        { opacity: 0, y: config.distance.small },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.normal * 1.2,
          stagger: 0.1,
          ease: ANIMATION_CONFIG.ease.default,
          scrollTrigger: {
            trigger: ".cic-matters",
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".cic-promise-block",
        { opacity: 0, y: config.distance.medium },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.normal * 1.3,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: ".cic-promise-block",
            start: "top 75%",
            once: true,
          },
          onComplete() {
            gsap.set(".cic-promise-block", { clearProps: "transform" });
          },
        },
      );

      gsap.fromTo(
        ".cic-cta-banner",
        { opacity: 0, y: config.distance.small },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.normal * 1.3,
          delay: 0.2,
          ease: ANIMATION_CONFIG.ease.default,
          scrollTrigger: {
            trigger: ".cic-cta-banner",
            start: "top 78%",
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
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#FFF8F2] via-[#FFFBF8] to-white"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 z-0 h-[420px] w-[420px] rounded-full bg-[#FF9431]/[0.09] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 z-0 h-[380px] w-[380px] rounded-full bg-[#F1A486]/[0.12] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-px w-[min(92%,640px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF9431]/30 to-transparent"
        aria-hidden
      />

      <Container isMaxWidth={true} className="relative z-10 max-w-[1200px]">
        <div className="cic-hero">
          {/* Title only — full width, separated from content below */}
          <header className="text-center lg:text-left">
            <p className="cic-hero-bit gsap-animate text-xs font-bold uppercase tracking-[0.22em] text-[#FF9431] opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:text-sm">
              Our pledge
            </p>
            <div className="cic-hero-bit gsap-animate mt-3 border-b border-[#E8DFD6]/70 pb-6 sm:pb-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100">
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

          {/* Copy (left) + hero image (right) */}
          <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:mt-12 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="mx-auto max-w-prose space-y-4 text-center lg:mx-0 lg:max-w-none lg:text-left">
              <p className="cic-hero-bit gsap-animate inline-flex items-center justify-center gap-2 text-base font-medium text-[#FF7700] opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:text-lg lg:justify-start">
                <Sparkles
                  className="h-5 w-5 shrink-0 text-[#FF9431]"
                  strokeWidth={2}
                  aria-hidden
                />
                Supporting a Cleaner, Healthier India
              </p>
              <p
                className={`cic-hero-bit gsap-animate ${bodyClass} opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100`}
              >
                At Wash &amp; Wow, cleanliness is not just a service — it&apos;s
                a responsibility. Inspired by the vision of Swachh Bharat
                Mission, we are committed to creating cleaner homes, healthier
                environments, and a more sustainable future for our communities.
              </p>
              <p
                className={`cic-hero-bit gsap-animate ${bodyClass} opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100`}
              >
                Through our daily services — from laundry and home cleaning to
                car wash and pest control — we actively contribute towards
                improving hygiene standards and promoting responsible living
                across India.
              </p>
            </div>

            <figure className="cic-hero-photo gsap-animate relative w-full opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 lg:max-w-none">
              <div className="relative aspect-[5/3] w-full min-h-[200px] overflow-hidden rounded-[24px] border border-[#E8DFD6]/65 shadow-[0_18px_42px_-20px_rgba(255,148,49,0.5),6px_6px_16px_rgba(209,199,189,0.25)] sm:aspect-[2/1] sm:rounded-[28px] sm:max-h-[min(56vw,380px)] lg:max-h-[420px]">
                <Image
                  src={CLEAN_INDIA_HERO_IMAGE}
                  alt="Bright, freshly cleaned modern home interior with warm light"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority={false}
                />
              </div>
              <figcaption className="sr-only">
                Warm, clean home imagery reflecting our hygiene and care
                standards.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Contributions */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="mx-auto mb-10 max-w-2xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
            <h3
              className="text-[clamp(1.35rem,3vw,1.9rem)] font-semibold text-dark-brown"
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              <span
                className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFE4CC] to-[#FFD4A8] sm:h-11 sm:w-11"
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
              className={`mt-3 max-w-xl lg:max-w-2xl ${bodyClass} lg:mx-0 lg:mr-auto`}
            >
              We align our services with modern cleanliness and sustainability
              practices:
            </p>
          </div>

          <div className="cic-contrib-grid grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12 xl:gap-7">
            {contributions.map((c, i) => (
              <article
                key={c.title}
                className={`cic-contrib-card gsap-animate group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E8DFD6]/55 bg-white opacity-0 shadow-[6px_10px_28px_rgba(209,199,189,0.32),-4px_-4px_18px_rgba(255,255,255,0.95),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-500 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none hover:-translate-y-1.5 hover:border-[#FF9431]/35 hover:shadow-[12px_20px_44px_-12px_rgba(255,148,49,0.22),8px_12px_32px_rgba(209,199,189,0.35)] motion-reduce:hover:translate-y-0 ${contribCardGridClass(i)}`}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[3px] bg-gradient-to-r from-transparent via-[#FF9431]/88 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-[5/3]">
                  <Image
                    src={c.imageSrc}
                    alt={c.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.05] motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 520px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1a1410]/25 via-transparent to-transparent"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#FEFCFB] via-[#FEFCFB]/88 to-transparent"
                    aria-hidden
                  />
                  <span
                    className="absolute left-4 top-4 z-[1] flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-[0_8px_24px_rgba(255,119,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] ring-1 ring-white/25 backdrop-blur-[2px] sm:left-5 sm:top-5 sm:h-14 sm:w-14"
                    style={{
                      background:
                        "linear-gradient(145deg, #ffb066 0%, #ff9431 42%, #ff7700 100%)",
                    }}
                    aria-hidden
                  >
                    <Image
                      src={c.iconSrc}
                      alt=""
                      width={26}
                      height={26}
                      unoptimized
                      className="h-[26px] w-[26px] object-contain sm:h-7 sm:w-7"
                    />
                  </span>
                </div>

                <div className="relative z-[1] -mt-10 flex flex-1 flex-col bg-gradient-to-b from-[#FEFCFB] to-white px-5 pb-5 pt-3 sm:-mt-11 sm:px-6 sm:pb-6 sm:pt-4">
                  <h4
                    className="text-[1.05rem] font-semibold leading-snug tracking-tight text-dark-brown sm:text-lg md:text-[1.125rem]"
                    style={{
                      fontFamily: WixMadeForDisplayFont.style.fontFamily,
                    }}
                  >
                    {c.title}
                  </h4>
                  <p
                    className={`mt-2.5 border-t border-[#E8DFD6]/70 pt-3 text-[15px] leading-relaxed text-[#5E5450] sm:text-[16px]`}
                  >
                    {c.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Why it matters */}
        <div className="cic-matters mx-auto mt-16 max-w-4xl sm:mt-20 md:mt-24 lg:max-w-none">
          <div className="rounded-[28px] border border-[#E8DFD6]/60 bg-gradient-to-br from-white via-[#FFFDFC] to-[#FFF7EF] p-6 shadow-[8px_10px_24px_rgba(209,199,189,0.28),-4px_-4px_16px_rgba(255,255,255,0.85)] sm:p-8 md:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
              <div className="flex flex-col gap-6">
                <div className="cic-matters-bit gsap-animate text-center opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 lg:text-left">
                  <h3
                    className="text-[clamp(1.35rem,3vw,1.9rem)] font-semibold text-dark-brown"
                    style={{
                      fontFamily: WixMadeForDisplayFont.style.fontFamily,
                    }}
                  >
                    <span
                      className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFE9D6] to-[#FFDAB6] sm:h-11 sm:w-11"
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

                <ul className="space-y-0 divide-y divide-[#E8DFD6]/80 rounded-2xl border border-[#E8DFD6]/70 bg-white/90 px-1 py-1 text-left shadow-inner lg:max-w-xl">
                  {whyBullets.map((line) => (
                    <li
                      key={line}
                      className="cic-matters-bit gsap-animate flex items-center gap-3 px-4 py-3.5 opacity-0 first:rounded-t-[14px] last:rounded-b-[14px] motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:px-5 sm:py-4"
                    >
                      <CheckCircle2
                        className="h-5 w-5 shrink-0 text-[#FF9431] sm:h-6 sm:w-6"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span
                        className="text-[16px] font-semibold text-dark-brown sm:text-[17px]"
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

                <figure className="cic-matters-bit gsap-animate relative w-full opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E8DFD6]/70 shadow-[0_14px_36px_-16px_rgba(255,148,49,0.45)] sm:rounded-[24px]">
                  <Image
                    src={CLEAN_INDIA_SPOTLIGHT_IMAGE}
                    alt="Fresh, sparkling clean surfaces with a warm peach glow"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>

        {/* Promise + CTA */}
        <div className="mt-12 grid gap-5 sm:mt-14 md:mt-16 lg:grid-cols-12 lg:gap-6">
          <div
            className="cic-promise-block gsap-animate relative overflow-hidden rounded-[24px] border border-[#E8DFD6]/60 bg-gradient-to-br from-[#FFFCFA] via-white to-[#FFF4E8] p-6 opacity-0 shadow-[6px_8px_20px_rgba(209,199,189,0.3)] motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:p-8 lg:col-span-7"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#FF9431]/15 blur-2xl" />
            <div className="relative flex flex-wrap items-center gap-3 text-[clamp(1.15rem,2.5vw,1.45rem)] font-semibold text-dark-brown">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFE9D6] to-[#FFD0A2] shadow-sm"
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
            className="cic-cta-banner gsap-animate relative flex min-h-[180px] flex-col items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#FFB066] via-[#FF9431] to-[#FF7700] px-6 py-8 text-center opacity-0 shadow-[0_20px_50px_-12px_rgba(255,119,0,0.45)] motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:px-8 lg:col-span-5 lg:min-h-0 lg:self-stretch"
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
