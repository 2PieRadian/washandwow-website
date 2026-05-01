"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";
import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion, getResponsiveConfig, ANIMATION_CONFIG } from "@/app/lib/animations";

const wix = { fontFamily: "" as string };

function Overline({ children }: { children: React.ReactNode }) {
  return <p className="ab-reveal opacity-0 text-[11px] font-bold uppercase tracking-[0.26em] text-[#FF9431] mb-3">{children}</p>;
}
function Heading1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="ab-reveal opacity-0 text-[clamp(2rem,5vw,3.1rem)] font-bold leading-[1.1] text-[#2C2118] mb-5" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>
      {children}
    </h1>
  );
}
function Heading2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`ab-reveal opacity-0 text-[clamp(1.65rem,3.8vw,2.4rem)] font-bold leading-[1.15] text-[#2C2118] ${className}`} style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>
      {children}
    </h2>
  );
}
function Divider() {
  return <div className="mx-auto max-w-[1160px] px-5"><div className="h-px bg-gradient-to-r from-transparent via-[#E5DDD6] to-transparent" /></div>;
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><polyline points="20 6 9 17 4 12" /></svg>;
}
function ArrowRight() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
}

const stats = [
  { icon: "😊", value: "10K+", label: "Happy Customers" },
  { icon: "📦", value: "25K+", label: "Loads Delivered" },
  { icon: "⏰", value: "99%", label: "On-Time Delivery" },
  { icon: "⭐", value: "4.9/5", label: "Customer Rating" },
];

const services = [
  {
    tag: "Laundry & Dry Cleaning",
    color: "#FF9431",
    bg: "#FFF0E0",
    image: "/images/about/service-laundry.png",
    alt: "Fresh folded laundry service",
    heading: "Your Clothes, Cared For Like Our Own.",
    body: "We pick up your laundry right from your doorstep, wash it with premium, fabric-safe detergents, carefully fold every piece, and deliver it back — fresh, crisp, and smelling amazing. Whether it's delicate silks, everyday casuals, or heavy woollens, our trained professionals handle each item with the precision it deserves. No more laundry stress. Just clean clothes, on time, every time.",
    bullets: ["Pickup & doorstep delivery", "Fabric-safe premium detergents", "Dry cleaning & steam ironing", "Stain treatment specialists"],
    floatCard: "Fresh. Crisp.\nDelivered.",
  },
  {
    tag: "Home Cleaning",
    color: "#3E8FD4",
    bg: "#EBF4FC",
    image: "/images/about/service-home-cleaning.png",
    alt: "Professional home cleaning service",
    heading: "A Spotless Home, Effortlessly.",
    body: "Your home is your sanctuary — and it deserves to look, feel, and smell its best. Our professional home cleaning teams arrive equipped with commercial-grade tools and eco-friendly products to deep-clean every corner of your space. From gleaming marble floors and sparkling bathrooms to dust-free shelves and sanitized kitchens, we leave your home looking brand new. Scheduled cleaning or one-time deep cleans — we've got you covered.",
    bullets: ["Full home deep cleaning", "Kitchen & bathroom sanitization", "Sofa & carpet cleaning", "Eco-friendly, family-safe products"],
    floatCard: "Deep Clean.\nEvery Corner.",
  },
  {
    tag: "Pest Control",
    color: "#4CAF85",
    bg: "#E8F6F0",
    image: "/images/about/service-pest-control.png",
    alt: "Professional pest control service",
    heading: "Protect Your Family. Reclaim Your Space.",
    body: "Pests are more than a nuisance — they're a health risk. Our certified pest control experts use government-approved, family-safe treatments that are tough on pests but gentle on your home and loved ones. From cockroaches and termites to rodents and bed bugs, we diagnose the problem and eliminate it at the root. We'll help you take back your home — safely, efficiently, and with zero disruption to your daily life.",
    bullets: ["Government-approved chemicals", "Child & pet-safe treatments", "Cockroach, termite & rodent control", "Post-treatment follow-up"],
    floatCard: "Safe Home.\nHappy Family.",
  },
  {
    tag: "Doorstep Car Wash",
    color: "#E87B3E",
    bg: "#FDF0E8",
    image: "/images/about/service-car-wash.png",
    alt: "Doorstep car wash service",
    heading: "Showroom Shine, Right at Your Doorstep.",
    body: "Why drive to a car wash when we can bring the car wash to you? Our trained technicians arrive with all the equipment needed to give your vehicle a thorough, scratch-free clean — exterior wash, interior vacuuming, dashboard wipe-down, and tyre shine included. We use water-efficient methods that protect both your car and the environment. Book a slot, and we'll handle the rest while you enjoy your morning chai.",
    bullets: ["Exterior & interior detailing", "Water-efficient techniques", "Scratch-free microfiber wash", "Flexible scheduling, any time"],
    floatCard: "Shine On.\nNo Effort.",
  },
];

const whyCards = [
  { emoji: "❤️", title: "Care in Every Step", body: "We treat every item, surface, and space like it belongs to us — with attention, care, and genuine pride." },
  { emoji: "📅", title: "Flexible & Convenient", body: "Book any service in minutes. Choose your slot. We show up on time, every time — no chasing required." },
  { emoji: "🏷️", title: "Affordable Pricing", body: "Premium quality doesn't have to cost a fortune. Our transparent pricing means no surprises on your bill." },
  { emoji: "✅", title: "Satisfaction Guaranteed", body: "Not 100% happy? We'll come back and make it right — because your satisfaction is our reputation." },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  wix.fontFamily = WixMadeForDisplayFont.style.fontFamily;

  useEffect(() => {
    if (prefersReducedMotion()) { gsap.set(".ab-reveal", { opacity: 1, y: 0 }); return; }
    const ctx = gsap.context(() => {
      const config = getResponsiveConfig();
      (gsap.utils.toArray<Element>(".ab-reveal")).forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: config.distance.medium }, {
          opacity: 1, y: 0, duration: config.duration.normal * 1.2,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
          onComplete() { gsap.set(el, { clearProps: "transform" }); },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="overflow-x-hidden bg-[#FDFAF7]" style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-[80px] pb-16 sm:pt-[100px] sm:pb-20 px-5">
        <div className="mx-auto max-w-[1160px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1 min-w-0">
              <Overline>About Us</Overline>
              <Heading1>
                We&apos;re Here to Make Life Easier,{" "}
                <span className="text-[#FF9431]">One Service at a Time.</span>
              </Heading1>
              <p className="ab-reveal opacity-0 text-[15px] leading-relaxed text-[#6B5E54] max-w-lg mb-8">
                At Wash &amp; Wow, we believe a clean home, fresh laundry, a pest-free space, and a sparkling car shouldn&apos;t eat into your precious time. That&apos;s why we bring premium home services right to your doorstep — reliable, affordable, and always designed around you.
              </p>
              <div className="ab-reveal opacity-0 flex flex-wrap gap-3 mb-10">
                <Link href="#" className="group inline-flex items-center gap-2 rounded-full bg-[#FF9431] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(255,148,49,0.35)] transition-all duration-300 hover:bg-[#FF7700] hover:-translate-y-0.5">
                  Book a Service
                </Link>
                <Link href="#services" className="group inline-flex items-center gap-2 rounded-full border border-[#E0D5CC] bg-white px-6 py-3 text-[14px] font-semibold text-[#4A3D35] transition-all duration-300 hover:border-[#FF9431]/40 hover:bg-[#FFF8F2] hover:-translate-y-0.5">
                  Explore Services <ArrowRight />
                </Link>
              </div>
              <div className="ab-reveal opacity-0 flex flex-wrap gap-5">
                {[
                  { emoji: "🧺", label: "Laundry & Dry Cleaning" },
                  { emoji: "🏠", label: "Home Cleaning" },
                  { emoji: "🐛", label: "Pest Control" },
                  { emoji: "🚗", label: "Doorstep Car Wash" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2 text-[13px] font-medium text-[#5E5450]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF0E0] text-base">{f.emoji}</span>
                    {f.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="ab-reveal opacity-0 lg:w-[46%] lg:shrink-0">
              <div className="relative">
                <div className="pointer-events-none absolute -right-4 -top-4 h-[calc(100%+32px)] w-[calc(100%+32px)] rounded-[32px] border-2 border-dashed border-[#FF9431]/25" aria-hidden />
                <div className="pointer-events-none absolute -right-2 top-1/3 h-3 w-3 rounded-full bg-[#FF9431]" aria-hidden />
                <div className="overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                  <Image src="/images/about/hero-towels.png" alt="Wash and Wow services" width={600} height={520} className="w-full object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── VALUES + STATS ───────────────────────────────── */}
      <section id="values" className="py-16 sm:py-20 px-5">
        <div className="mx-auto max-w-[1160px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="ab-reveal opacity-0 lg:w-[40%] lg:shrink-0">
              <div className="overflow-hidden rounded-[22px] shadow-[0_16px_48px_rgba(0,0,0,0.10)]" style={{ aspectRatio: "4/5" }}>
                <Image src="/images/about/woman-laundry.png" alt="Happy customer with fresh laundry" width={480} height={600} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex-1 min-w-0 space-y-8">
              <div>
                <Overline>Our Values</Overline>
                <Heading2 className="mb-4">Built on Trust.<br />Focused on You.</Heading2>
                <p className="ab-reveal opacity-0 text-[15px] leading-relaxed text-[#6B5E54] max-w-md">
                  From the moment you book to the moment we deliver, every single step is handled with care, professionalism, and genuine respect for your time. Across laundry, cleaning, pest control, and car wash — your satisfaction drives everything we do.
                </p>
              </div>
              <div className="ab-reveal opacity-0 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="group rounded-[16px] border border-[#EDE5DC] bg-white p-4 text-center shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(255,148,49,0.12)] sm:p-5">
                    <div className="mb-2 text-xl">{s.icon}</div>
                    <div className="text-[1.5rem] font-bold text-[#FF9431] sm:text-[1.7rem]" style={{ fontFamily: wix.fontFamily }}>{s.value}</div>
                    <p className="mt-1 text-[12px] font-medium text-[#8A7B72] leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="py-16 sm:py-20 px-5">
        <div className="mx-auto max-w-[1160px]">
          <div className="text-center mb-12">
            <Overline>What We Do</Overline>
            <Heading2 className="text-center mb-4">Four Services. One App.<br /><span className="text-[#FF9431]">Endless Convenience.</span></Heading2>
            <p className="ab-reveal opacity-0 text-[15px] leading-relaxed text-[#6B5E54] max-w-xl mx-auto">
              Everything your home needs — cleaned, cared for, and delivered — without you lifting a finger.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            {services.map((svc, i) => (
              <div key={svc.tag} className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="ab-reveal opacity-0 lg:w-[45%] lg:shrink-0">
                  <div className="relative">
                    <div className="pointer-events-none absolute -inset-3 rounded-[28px] opacity-40 blur-2xl" style={{ background: `radial-gradient(circle, ${svc.color}40, transparent)` }} aria-hidden />
                    <div className="relative overflow-hidden rounded-[22px] shadow-[0_16px_48px_rgba(0,0,0,0.10)]" style={{ aspectRatio: "4/3" }}>
                      <Image src={svc.image} alt={svc.alt} fill className="object-cover transition-transform duration-700 hover:scale-[1.03]" sizes="(max-width:1024px) 100vw, 520px" />
                      {/* floating card */}
                      <div className="absolute bottom-5 left-5 rounded-[14px] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.15)]" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)", border: `1px solid ${svc.color}30` }}>
                        <div className="mb-1 h-1 w-5 rounded-full" style={{ background: svc.color }} />
                        <p className="text-[13px] font-bold leading-snug whitespace-pre-line text-[#2C2118]" style={{ fontFamily: wix.fontFamily }}>{svc.floatCard}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Copy */}
                <div className="flex-1 min-w-0">
                  <span className="ab-reveal opacity-0 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ background: svc.bg, color: svc.color }}>
                    {svc.tag}
                  </span>
                  <h3 className="ab-reveal opacity-0 text-[clamp(1.4rem,3vw,2rem)] font-bold leading-[1.2] text-[#2C2118] mb-4" style={{ fontFamily: wix.fontFamily }}>
                    {svc.heading}
                  </h3>
                  <p className="ab-reveal opacity-0 text-[15px] leading-relaxed text-[#6B5E54] mb-6">{svc.body}</p>
                  <ul className="ab-reveal opacity-0 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-[14px] font-medium text-[#4A3D35]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white" style={{ background: svc.color }}>
                          <CheckIcon />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5">
        <div className="mx-auto max-w-[1160px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-[35%] lg:shrink-0 lg:pt-2">
              <Overline>Why Choose Us</Overline>
              <Heading2>A Home Service<br />You Can Rely On</Heading2>
              <p className="ab-reveal opacity-0 mt-4 text-[15px] leading-relaxed text-[#6B5E54]">
                Across every service we offer — laundry, home cleaning, pest control, or car wash — these four promises never change.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {whyCards.map((f) => (
                <div key={f.title} className="ab-reveal opacity-0 group flex flex-col gap-3 rounded-[18px] border border-[#EDE5DC] bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF9431]/30 hover:shadow-[0_12px_32px_rgba(255,148,49,0.10)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF0E0] text-xl transition-all duration-300 group-hover:bg-[#FF9431] group-hover:scale-110">{f.emoji}</span>
                  <h3 className="text-[15px] font-bold text-[#2C2118]" style={{ fontFamily: wix.fontFamily }}>{f.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#7A6E68]">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION BANNER ───────────────────────────────── */}
      <section className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1160px]">
          <div className="ab-reveal opacity-0 relative overflow-hidden rounded-[28px]" style={{ background: "linear-gradient(135deg,#FFF8F1 0%,#FFF3E8 50%,#FFF8F1 100%)" }}>
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#FF9431]/50 to-transparent" aria-hidden />
            <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
              <div className="flex flex-col justify-center gap-6 px-8 py-12 lg:w-[48%] lg:px-12 lg:py-14">
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#FF9431]">Our Mission</p>
                <h2 className="text-[clamp(1.65rem,3.5vw,2.3rem)] font-bold leading-[1.2] text-[#2C2118]" style={{ fontFamily: wix.fontFamily }}>
                  Simplifying Your Day<br />With Services{" "}
                  <span className="text-[#FF9431]">You Can Feel.</span>
                </h2>
                <p className="text-[15px] leading-relaxed text-[#6B5E54] max-w-sm">
                  Our mission is to deliver home services that are seamless, dependable, and delightful — covering every corner of your life so you can focus on what truly matters.
                </p>
                <ul className="space-y-2.5">
                  {["Free pickup & doorstep delivery", "Eco-certified products across all services", "One app for laundry, cleaning, pest & car wash", "Happiness guaranteed, always"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14px] font-medium text-[#4A3D35]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF9431] text-white"><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <Link href="#" className="group inline-flex items-center gap-2 rounded-full bg-[#FF9431] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(255,148,49,0.35)] transition-all duration-300 hover:bg-[#FF7700] hover:-translate-y-0.5">
                    Join Our Journey <ArrowRight />
                  </Link>
                </div>
              </div>
              <div className="relative flex-1 min-h-[300px] lg:min-h-0">
                <Image src="/images/about/mission-banner.png" alt="Our mission — all services" fill className="object-cover object-center" sizes="(max-width:1024px) 100vw,600px" />
                <div className="absolute bottom-8 right-8 rounded-[18px] px-6 py-5 shadow-[0_16px_48px_rgba(0,0,0,0.18)]" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,148,49,0.2)" }}>
                  <div className="mb-1 h-1.5 w-6 rounded-full bg-[#FF9431]" />
                  <p className="text-[1rem] font-bold leading-snug text-[#2C2118] sm:text-[1.1rem]" style={{ fontFamily: wix.fontFamily }}>
                    We Clean &amp; Care<br />So You Can<br />Live More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <Footer />
    </div>
  );
}
