"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WixMadeForDisplayFont } from "@/app/fonts";
import Container from "../layout/Container";
import {
  gsap,
  prefersReducedMotion,
  getResponsiveConfig,
  ANIMATION_CONFIG,
} from "@/app/lib/animations";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const contributions = [
  {
    imageSrc: "/images/clean-india/new-eco-friendly.png",
    imageAlt: "Eco-friendly natural cleaning products on marble",
    tag: "Green Cleaning",
    title: "Eco-Friendly Solutions",
    body: "Safe, biodegradable detergents and chemicals that protect your home and the planet.",
    accent: "#4CAF85",
    accentBg: "rgba(76,175,133,0.10)",
  },
  {
    imageSrc: "/images/clean-india/new-water-efficient.png",
    imageAlt: "Water-efficient laundry processes",
    tag: "Water Smart",
    title: "Water-Efficient Processes",
    body: "Laundry and car wash services engineered to minimize water wastage without compromise.",
    accent: "#3E8FD4",
    accentBg: "rgba(62,143,212,0.10)",
  },
  {
    imageSrc: "/images/clean-india/new-hygienic-home.png",
    imageAlt: "Professional home cleaning service in modern Indian home",
    tag: "Deep Clean",
    title: "Hygienic Living Spaces",
    body: "Deep cleaning and sanitization that eliminates germs, allergens, and bacteria.",
    accent: "#FF9431",
    accentBg: "rgba(255,148,49,0.10)",
  },
  {
    imageSrc: "/images/clean-india/new-pest-control.png",
    imageAlt: "Professional pest control in a modern kitchen",
    tag: "Family Safe",
    title: "Safe Pest Control",
    body: "Government-approved, family-safe methods for effective and responsible pest treatment.",
    accent: "#E87B3E",
    accentBg: "rgba(232,123,62,0.10)",
  },
  {
    imageSrc: "/images/clean-india/new-fresh-laundry.png",
    imageAlt: "Fresh folded laundry with lavender",
    tag: "Zero Waste",
    title: "Responsible Handling",
    body: "Efficient processes that reduce unnecessary waste and ensure proper disposal at every step.",
    accent: "#A07BD6",
    accentBg: "rgba(160,123,214,0.10)",
  },
  {
    imageSrc: "/images/clean-india/new-swachh-bharat.png",
    imageAlt: "Clean India community — Swachh Bharat inspired",
    tag: "Community",
    title: "Building Cleaner Cities",
    body: "Inspired by Swachh Bharat, we contribute to healthier communities every single day.",
    accent: "#E84040",
    accentBg: "rgba(232,64,64,0.08)",
  },
] as const;

const stats = [
  { value: 10000, suffix: "+", label: "Homes Cleaned" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 50, suffix: "%", label: "Less Water Used" },
  { value: 100, suffix: "%", label: "Eco Chemicals" },
];

/* ─── Animated Counter ─────────────────────────────────────────────────── */

function AnimatedCounter({
  target,
  suffix,
  triggered,
}: {
  target: number;
  suffix: string;
  triggered: boolean;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!triggered) return;
    if (prefersReducedMotion()) { setCount(target); return; }
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(ease * target));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [triggered, target]);

  return <>{count}{suffix}</>;
}

/* ─── Contribution Card ────────────────────────────────────────────────── */

function ContribCard({ c, index }: { c: typeof contributions[number]; index: number }) {
  return (
    <article
      className="ci-card group relative overflow-hidden rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(0,0,0,0.18)] opacity-0 cursor-pointer"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Full-bleed image */}
      <Image
        src={c.imageSrc}
        alt={c.imageAlt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
      />

      {/* Rich dark gradient — bottom two-thirds */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,6,4,0.92) 0%, rgba(10,6,4,0.72) 32%, rgba(10,6,4,0.18) 62%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Subtle top scrim so tag stays readable */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 100%)" }}
        aria-hidden
      />

      {/* Tag pill — top left */}
      <span
        className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.15em] backdrop-blur-md"
        style={{
          background: `${c.accent}28`,
          color: "#fff",
          border: `1px solid ${c.accent}60`,
          textShadow: "0 1px 3px rgba(0,0,0,0.4)",
        }}
      >
        {c.tag}
      </span>

      {/* Accent dot — top right */}
      <div
        className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full ring-2 ring-white/20"
        style={{ background: c.accent }}
        aria-hidden
      />

      {/* Text content — overlaid at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        {/* Accent bar */}
        <div
          className="mb-3 h-[2.5px] w-7 rounded-full transition-all duration-500 group-hover:w-12"
          style={{ background: c.accent }}
          aria-hidden
        />
        <h3
          className="text-[1rem] font-bold leading-snug text-white drop-shadow-sm sm:text-[1.08rem]"
          style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
        >
          {c.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-white/72 sm:text-[13.5px]">
          {c.body}
        </p>
      </div>
    </article>
  );
}

/* ─── Main Section ─────────────────────────────────────────────────────── */

export default function CleanIndiaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsTriggered, setStatsTriggered] = useState(false);

  useEffect(() => {
    // Stats counter trigger via IntersectionObserver
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsTriggered(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(".ci-reveal, .ci-card, .ci-stat", { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const config = getResponsiveConfig();

      // Hero block
      gsap.fromTo(".ci-hero-text", { opacity: 0, y: config.distance.medium }, {
        opacity: 1, y: 0, duration: config.duration.normal * 1.2, stagger: 0.12,
        ease: ANIMATION_CONFIG.ease.smooth,
        scrollTrigger: { trigger: ".ci-hero-block", start: "top 75%", once: true },
      });

      gsap.fromTo(".ci-hero-img", { opacity: 0, scale: 1.03 }, {
        opacity: 1, scale: 1, duration: config.duration.slow * 1.1,
        ease: ANIMATION_CONFIG.ease.smooth,
        scrollTrigger: { trigger: ".ci-hero-img", start: "top 72%", once: true },
        onComplete() { gsap.set(".ci-hero-img", { clearProps: "transform" }); },
      });

      // Stats
      gsap.fromTo(".ci-stat", { opacity: 0, y: config.distance.medium }, {
        opacity: 1, y: 0, duration: config.duration.normal, stagger: 0.1,
        ease: ANIMATION_CONFIG.ease.smooth,
        scrollTrigger: { trigger: ".ci-stats-row", start: "top 80%", once: true },
      });

      // Cards
      const cards = gsap.utils.toArray(".ci-card") as Element[];
      cards.forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: config.distance.large }, {
          opacity: 1, y: 0, duration: config.duration.normal * 1.1,
          delay: i * 0.08,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
          onComplete() { gsap.set(card, { clearProps: "transform" }); },
        });
      });

      // CTA
      gsap.fromTo(".ci-cta-block", { opacity: 0, y: config.distance.medium }, {
        opacity: 1, y: 0, duration: config.duration.normal * 1.3,
        ease: ANIMATION_CONFIG.ease.smooth,
        scrollTrigger: { trigger: ".ci-cta-block", start: "top 80%", once: true },
        onComplete() { gsap.set(".ci-cta-block", { clearProps: "transform" }); },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="clean-india-commitment"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFBF6 0%, #FFFFFF 30%, #FFF8F2 70%, #FFFFFF 100%)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[500px] w-[500px] rounded-full opacity-40 blur-[90px]" style={{ background: "radial-gradient(circle, #FF9431 0%, transparent 70%)" }} aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full opacity-30 blur-[80px]" style={{ background: "radial-gradient(circle, #F1A486 0%, transparent 70%)" }} aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full opacity-20 blur-[100px]" style={{ background: "radial-gradient(circle, #FF9431 0%, transparent 70%)" }} aria-hidden />

      {/* Top divider line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,640px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF9431]/30 to-transparent" aria-hidden />

      <Container isMaxWidth className="relative z-10 max-w-[1200px] px-5 py-[70px] sm:py-[90px] md:py-[110px]">

        {/* ── Hero Block ───────────────────────────────────────────────── */}
        <div className="ci-hero-block">
          {/* Overline */}
          <div className="ci-hero-text flex items-center justify-center gap-3 opacity-0 md:justify-start">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#FF9431]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF9431]">
              Our Pledge to India
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#FF9431]" />
          </div>

          {/* Heading */}
          <div className="ci-hero-text mt-4 opacity-0 text-center md:text-left">
            <h2
              className="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-[#1E1916]"
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              Clean India{" "}
              <span
                className="rounded-xl px-4 py-1 text-white"
                style={{ background: "linear-gradient(135deg, #FF9431 0%, #FF7700 100%)" }}
              >
                Commitment
              </span>
            </h2>
            <p className="ci-hero-text mt-5 max-w-2xl text-center text-[clamp(1rem,1.8vw,1.15rem)] leading-relaxed text-[#5E5450] md:text-left opacity-0">
              At Wash &amp; Wow, cleanliness isn&apos;t just a service — it&apos;s a responsibility.
              Inspired by the Swachh Bharat Mission, we&apos;re committed to creating cleaner homes,
              healthier environments, and a more sustainable India, one service at a time.
            </p>
          </div>

          {/* Hero Image */}
          <div className="ci-hero-img mt-10 w-full overflow-hidden rounded-[28px] opacity-0 shadow-[0_24px_60px_-16px_rgba(255,120,0,0.25)] sm:rounded-[32px] md:mt-12">
            <div className="relative w-full" style={{ aspectRatio: "21/8" }}>
              <Image
                src="/images/clean-india/new-hero.png"
                alt="Clean, warm modern Indian home interior — our Clean India commitment"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority={false}
              />
              {/* Gradient overlay for text readability */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(90deg, rgba(15,10,5,0.55) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)" }}
                aria-hidden
              />
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10">
                <p
                  className="text-[clamp(1rem,2.5vw,1.5rem)] font-semibold text-white/95 drop-shadow-lg"
                  style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                >
                  Supporting a Cleaner, Healthier India
                </p>
                <p className="mt-1 text-[clamp(0.8rem,1.4vw,0.95rem)] text-white/75">
                  Every service we offer moves the mission forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Row ────────────────────────────────────────────────── */}
        <div ref={statsRef} className="ci-stats-row mt-14 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="ci-stat group relative overflow-hidden rounded-[20px] border border-[#F0E8E0] bg-white p-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,120,0,0.14)] opacity-0 sm:p-6 md:p-7"
              >
                {/* Background glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,148,49,0.08) 0%, transparent 70%)" }}
                  aria-hidden
                />
                <div
                  className="relative text-[clamp(1.8rem,4vw,2.6rem)] font-bold tabular-nums leading-none"
                  style={{
                    fontFamily: WixMadeForDisplayFont.style.fontFamily,
                    background: "linear-gradient(135deg, #FF9431 0%, #FF6B00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <AnimatedCounter target={s.value} suffix={s.suffix} triggered={statsTriggered} />
                </div>
                <p className="relative mt-2 text-[13px] font-medium uppercase tracking-[0.1em] text-[#8C7B72] sm:text-[14px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section Heading — Contributions ─────────────────────────── */}
        <div className="mt-16 text-center sm:mt-20 md:mt-24">
          <span className="inline-block rounded-full border border-[#FF9431]/20 bg-[#FF9431]/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF7700]">
            How We Contribute
          </span>
          <h2
            className="mt-4 text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold leading-[1.15] text-[#1E1916]"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            Six Pillars of a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF9431 0%, #FF6B00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Cleaner India
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#6B5E58] sm:text-[16px]">
            Every service we provide is designed to align with modern cleanliness, sustainability, and community well-being.
          </p>
        </div>

        {/* ── Contributions Grid ──────────────────────────────────────── */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {contributions.map((c, i) => (
            <ContribCard key={c.title} c={c} index={i} />
          ))}
        </div>

        {/* ── CTA Band ─────────────────────────────────────────────────── */}
        <div className="ci-cta-block mt-16 overflow-hidden rounded-[28px] opacity-0 sm:mt-20 md:mt-24">
          <div
            className="relative flex flex-col items-center gap-6 overflow-hidden px-6 py-14 text-center sm:px-10 sm:py-16 md:py-20 lg:flex-row lg:justify-between lg:text-left lg:px-14"
            style={{ background: "linear-gradient(125deg, #1E1916 0%, #2E2318 40%, #3D2A18 70%, #2E1F10 100%)" }}
          >
            {/* Decorative orbs */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #FF9431, transparent)" }} aria-hidden />
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-56 w-56 rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle, #FF6B00, transparent)" }} aria-hidden />
            <div className="pointer-events-none absolute left-1/3 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#FF9431]/40 to-transparent" aria-hidden />

            {/* Left: text */}
            <div className="relative z-10 max-w-xl">
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Image
                  src="/icons/clean-india/flag-india.svg"
                  alt=""
                  width={32}
                  height={21}
                  unoptimized
                  className="h-6 w-auto rounded-sm object-contain shadow-lg ring-1 ring-white/20"
                  aria-hidden
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#FF9431]">
                  Swachh Bharat Mission
                </span>
              </div>
              <h3
                className="mt-4 text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-[1.2] text-white"
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                Together, let&apos;s build cleaner homes<br className="hidden sm:block" /> and a{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #FF9431, #FFBA6B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  cleaner India.
                </span>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                By choosing Wash &amp; Wow, you participate in a larger movement — better hygiene, sustainable practices, and a brighter future.
              </p>
            </div>

            {/* Right: promise cards */}
            <div className="relative z-10 flex flex-col gap-3 lg:min-w-[280px]">
              {[
                { emoji: "🌿", text: "Eco-certified cleaning" },
                { emoji: "💧", text: "50% less water usage" },
                { emoji: "🏠", text: "Healthier homes, happier families" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-2xl px-5 py-3.5 text-left"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
                >
                  <span className="text-xl leading-none">{item.emoji}</span>
                  <span className="text-[14px] font-medium text-white/85">{item.text}</span>
                  <svg className="ml-auto h-4 w-4 shrink-0 text-[#FF9431]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="20 6 9 17 4 12" /></svg>
                </div>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
