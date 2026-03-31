import Container from "@/app/components/layout/Container";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";
import type { Metadata } from "next";
import { canonicalPath } from "@/app/lib/site-config";
import { AboutHeroAnimation } from "./AboutAnimations";
import AboutScrollAnimate from "./AboutScrollAnimate";
import {
  CheckCircle2,
  CircleCheck,
  Clock,
  Leaf,
  Package,
  Shirt,
  Smartphone,
  Sparkles,
  Sprout,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Wash & Wow — transforming how India cleans, cares, and lives fresh. Doorstep laundry, cleaning, car wash, pest control, eco-friendly care, and tech-enabled booking.",
  alternates: { canonical: canonicalPath("/about") },
  openGraph: {
    url: canonicalPath("/about"),
    description:
      "Tech-enabled laundry and home services across India — convenience, hygiene, and premium quality at your doorstep.",
  },
};

/** Scroll-stagger targets (see AboutScrollAnimate). */
const item =
  "about-animate-item opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100";

function SectionShell({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`about-animate-section px-[20px] py-14 sm:py-16 md:py-20 lg:py-24 ${className}`}
    >
      <Container isMaxWidth={true} className="max-w-6xl">
        {children}
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div
      className="overflow-x-hidden bg-[#FFFBF6]"
      style={{ fontFamily: SatoshiFont.style.fontFamily }}
    >
      <Navbar />

      <AboutHeroAnimation>
        <Container
          isMaxWidth={true}
          className="mt-[70px] max-w-6xl px-[20px] pb-12 pt-10 md:pb-14 md:pt-12"
        >
          <div className="flex flex-col gap-10 min-[1024px]:flex-row min-[1024px]:items-center min-[1024px]:gap-14">
            <div className="about-hero-text min-w-0 flex-1 space-y-6">
              <p
                className={`about-hero-item inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF9431] opacity-0 motion-reduce:opacity-100`}
              >
                <span className="text-lg" aria-hidden>
                  🌊
                </span>
                About Wash &amp; Wow
              </p>
              <h1
                className="about-hero-item text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.12] text-[#33302E] opacity-0 motion-reduce:opacity-100"
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                Transforming How India Cleans, Cares &amp; Lives Fresh
              </h1>
              <div className="space-y-4 text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]">
                <p className="about-hero-item opacity-0 motion-reduce:opacity-100">
                  Wash &amp; Wow is India&apos;s fast-growing, tech-enabled
                  laundry and home service brand, redefining how modern
                  households manage everyday chores.
                </p>
                <p className="about-hero-item opacity-0 motion-reduce:opacity-100">
                  We provide doorstep laundry, dry-cleaning, household cleaning,
                  car wash, and pest control services — all designed to deliver
                  convenience, hygiene, and premium quality, right at your home.
                </p>
                <p className="about-hero-item opacity-0 motion-reduce:opacity-100">
                  With a strong focus on technology, eco-friendly practices, and
                  customer experience, Wash &amp; Wow transforms routine
                  services into a seamless, reliable, and time-saving lifestyle
                  solution.
                </p>
              </div>
              <p
                className="about-hero-item rounded-[20px] border border-[#FF9431]/20 bg-gradient-to-br from-white to-[#FFF8F2] px-5 py-4 text-[16px] font-medium leading-relaxed text-[#584E46] shadow-[0_12px_40px_-12px_rgba(255,148,49,0.25)] opacity-0 motion-reduce:opacity-100 sm:px-7 sm:py-6 sm:text-[18px]"
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                <span className="mr-2" aria-hidden>
                  ✨
                </span>
                We don&apos;t just clean — we care, we simplify, and we elevate
                your everyday life.
              </p>
            </div>
            <div className="about-hero-image w-full shrink-0 min-[1024px]:max-w-[min(46%,520px)]">
              <div className="about-hero-item relative opacity-0 motion-reduce:opacity-100">
                <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-gradient-to-br from-[#FF9431]/15 via-transparent to-[#98BCD6]/20 blur-2xl" />
                <img
                  src="/images/about/about.png"
                  alt="Wash and Wow team and service experience"
                  className="relative w-full rounded-[24px] shadow-[0_20px_60px_-15px_rgba(80,60,50,0.25)] ring-1 ring-[#E8DFD6]/80"
                />
              </div>
            </div>
          </div>
        </Container>
      </AboutHeroAnimation>

      <AboutScrollAnimate>
        {/* Who we are */}
        <SectionShell className="bg-white">
          <div className="space-y-9">
            <div className="max-w-3xl space-y-4">
              <h2
                className={`${item} flex flex-wrap items-center gap-3 text-[clamp(1.65rem,3.5vw,2.35rem)] font-semibold text-[#33302E]`}
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                <span className="text-3xl sm:text-4xl" aria-hidden>
                  🧠
                </span>
                Who We Are
              </h2>
              <p
                className={`${item} text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]`}
              >
                At Wash &amp; Wow, we believe that life should not revolve
                around chores.
              </p>
              <p
                className={`${item} text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]`}
              >
                We are building a smart service ecosystem where everything —
                from laundry pickup to home cleaning — is handled with
                precision, professionalism, and consistency.
              </p>
            </div>

            <div>
              <p
                className={`${item} mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#FF9431]`}
              >
                By combining
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: <Zap className="h-6 w-6" strokeWidth={1.75} />,
                    t: "Smart scheduling & logistics",
                  },
                  {
                    icon: <Sparkles className="h-6 w-6" strokeWidth={1.75} />,
                    t: "Fabric-care science & cleaning expertise",
                  },
                  {
                    icon: <Sprout className="h-6 w-6" strokeWidth={1.75} />,
                    t: "Eco-friendly products",
                  },
                  {
                    icon: <Users className="h-6 w-6" strokeWidth={1.75} />,
                    t: "Trained service professionals",
                  },
                ].map((row) => (
                  <div
                    key={row.t}
                    className={`${item} flex gap-3 rounded-[20px] border border-[#E8DFD6]/80 bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] p-5 shadow-[6px_8px_28px_rgba(209,199,189,0.2)] sm:p-6`}
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFAB5C] to-[#FF7700] text-white shadow-lg"
                      aria-hidden
                    >
                      {row.icon}
                    </span>
                    <div className="flex min-w-0 items-center">
                      <p className="text-lg font-semibold leading-snug text-[#33302E]">
                        {row.t}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p
              className={`${item} max-w-3xl text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]`}
            >
              …we ensure that every service meets modern standards of hygiene,
              safety, and quality.
            </p>
            <p
              className={`${item} max-w-3xl text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]`}
            >
              From busy professionals to families and businesses, Wash &amp; Wow
              is designed for anyone who values time, cleanliness, and
              reliability.
            </p>
          </div>
        </SectionShell>

        {/* What we offer */}
        <SectionShell className="bg-gradient-to-b from-[#FFFBF6] to-[#FDFBF9]">
          <div className="space-y-9">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className={`${item} flex flex-wrap items-center justify-center gap-3 text-[clamp(1.65rem,3.5vw,2.35rem)] font-semibold text-[#33302E]`}
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                <span className="text-3xl sm:text-4xl" aria-hidden>
                  🚀
                </span>
                What We Offer
              </h2>
              <p
                className={`${item} mt-3 text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]`}
              >
                Wash &amp; Wow is not just a laundry brand — it&apos;s a
                complete home service platform.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:gap-7">
              {[
                {
                  emoji: "\u{1F9FA}",
                  title: "Laundry & Dry Cleaning",
                  body: "Premium washing, stain removal, and fabric-safe dry cleaning using modern machines and gentle detergents.",
                  ring: "from-[#FF9431]/12",
                },
                {
                  emoji: "\u{1F3E0}",
                  title: "Household Cleaning",
                  body: "Deep cleaning for homes, kitchens, bathrooms, sofas, and more — ensuring a hygienic living space.",
                  ring: "from-[#98BCD6]/20",
                },
                {
                  emoji: "\u{1F697}",
                  title: "Doorstep Car Wash",
                  body: "Water-efficient, scratch-free cleaning at your doorstep with professional-grade tools.",
                  ring: "from-[#E6C29E]/25",
                },
                {
                  emoji: "\u{1F41C}",
                  title: "Pest Control Services",
                  body: "Safe and effective pest management solutions for a healthier, worry-free home.",
                  ring: "from-[#C5AEA5]/25",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className={`${item} group relative overflow-hidden rounded-[22px] border border-[#E8DFD6]/70 bg-white p-6 shadow-[8px_12px_40px_-12px_rgba(80,60,50,0.12)] transition-shadow duration-300 hover:shadow-[12px_20px_48px_-14px_rgba(255,148,49,0.15)] sm:p-8`}
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${card.ring} to-transparent blur-2xl`}
                  />
                  <p className="text-4xl" aria-hidden>
                    {card.emoji}
                  </p>
                  <h3
                    className="mt-3 text-xl font-semibold text-[#33302E] sm:text-2xl"
                    style={{
                      fontFamily: WixMadeForDisplayFont.style.fontFamily,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>

        {/* Why choose */}
        <SectionShell className="bg-white">
          <div className="space-y-9">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className={`${item} flex flex-wrap items-center justify-center gap-3 text-[clamp(1.65rem,3.5vw,2.35rem)] font-semibold text-[#33302E]`}
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                <span className="text-3xl sm:text-4xl" aria-hidden>
                  💎
                </span>
                Why Choose Wash &amp; Wow
              </h2>
              <p
                className={`${item} mt-3 text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]`}
              >
                Choosing Wash &amp; Wow means choosing peace of mind.
              </p>
              <p
                className={`${item} mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#FF9431]`}
              >
                We focus on delivering
              </p>
            </div>
            <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 md:gap-6">
              {[
                {
                  icon: <Package className="h-5 w-5" strokeWidth={2} />,
                  label: "Doorstep Pickup & Delivery",
                  sub: "No more running around",
                },
                {
                  icon: <Clock className="h-5 w-5" strokeWidth={2} />,
                  label: "On-Time Service",
                  sub: "Because your schedule matters",
                },
                {
                  icon: <Smartphone className="h-5 w-5" strokeWidth={2} />,
                  label: "Real-Time Tracking",
                  sub: "Always know your service status",
                },
                {
                  icon: <Leaf className="h-5 w-5" strokeWidth={2} />,
                  label: "Eco-Friendly Solutions",
                  sub: "Safe for clothes, home, and environment",
                },
                {
                  icon: <Shirt className="h-5 w-5" strokeWidth={2} />,
                  label: "Fabric & Surface Care Expertise",
                  sub: "Professional handling of every item",
                },
                {
                  icon: <CircleCheck className="h-5 w-5" strokeWidth={2} />,
                  label: "Quality Checks",
                  sub: "Spotless and consistent results",
                },
              ].map((row) => (
                <li
                  key={row.label}
                  className={`${item} flex gap-3 rounded-[18px] border border-[#E8DFD6]/60 bg-[#FDFBF9]/80 px-5 py-5 sm:px-6 sm:py-5`}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFAB5C] to-[#FF7700] text-white shadow-md"
                    aria-hidden
                  >
                    {row.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-[#33302E] sm:text-lg">
                      {row.label}
                    </p>
                    <p className="mt-2 text-[16px] leading-relaxed text-[#6B635C] sm:text-[18px]">
                      {row.sub}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p
              className={`${item} mx-auto max-w-2xl text-center text-[16px] font-medium leading-relaxed text-[#584E46] sm:text-[18px] md:text-xl`}
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              <span className="text-[#FF9431]" aria-hidden>
                💬{" "}
              </span>
              Seamless | Smart | Spotless — that&apos;s the Wash &amp; Wow
              promise.
            </p>
          </div>
        </SectionShell>

        {/* Process */}
        <SectionShell className="bg-gradient-to-b from-[#F5EDE6]/40 via-[#FFFBF6] to-white">
          <div className="space-y-9">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className={`${item} flex flex-wrap items-center justify-center gap-3 text-[clamp(1.65rem,3.5vw,2.35rem)] font-semibold text-[#33302E]`}
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                <span className="text-3xl sm:text-4xl" aria-hidden>
                  ⚙️
                </span>
                Our Process – How Wash &amp; Wow Works
              </h2>
            </div>

            <ol className="relative mx-auto max-w-3xl space-y-0">
              <div className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-[#FF9431]/50 via-[#E8DFD6] to-[#E8DFD6] sm:left-[22px]" />
              {[
                {
                  n: "1",
                  emoji: "\u{1F4F1}",
                  title: "Easy Booking",
                  body: "Book your service through our website, app, or WhatsApp in just a few clicks.",
                },
                {
                  n: "2",
                  emoji: "\u{1F69A}",
                  title: "Doorstep Pickup / Visit",
                  body: "Our team arrives on schedule to collect items or perform services at your location.",
                },
                {
                  n: "3",
                  emoji: "\u{1F9FC}",
                  title: "Smart Processing",
                  body: null,
                  extra: [
                    "Clothes are sorted by fabric and color",
                    "Cleaning is done using eco-friendly detergents",
                    "Advanced machines ensure deep and hygienic cleaning",
                  ],
                  extraTitle: "For laundry",
                  homeTitle: "For home services",
                  homeBullets: [
                    "Professional tools and safe chemicals are used",
                    "Trained experts follow standardized cleaning protocols",
                  ],
                },
                {
                  n: "4",
                  emoji: "\u{1F50D}",
                  title: "Quality Check",
                  body: "Every item and service goes through multi-step inspection to ensure perfection.",
                },
                {
                  n: "5",
                  emoji: "\u2728",
                  title: "Finishing Touch",
                  body: "Steam ironing, polishing, sanitization, and detailing for a premium finish.",
                },
                {
                  n: "6",
                  emoji: "\u{1F6AA}",
                  title: "Doorstep Delivery",
                  body: "Timely delivery or service completion with a satisfaction-first approach.",
                },
              ].map((step) => {
                const liClass =
                  "relative flex gap-5 pb-10 pl-0 sm:gap-7 sm:pb-12 last:pb-0";
                const badgeCol = `${item} relative z-1 flex shrink-0 flex-col items-center`;
                const badge =
                  "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FFAB5C] to-[#FF7700] text-sm font-bold text-white shadow-[0_6px_20px_rgba(255,119,0,0.35)] ring-4 ring-[#FFFBF6] sm:h-11 sm:w-11 sm:text-base";

                if ("extra" in step && step.extra && step.homeBullets) {
                  return (
                    <li key={step.n} className={liClass}>
                      <div className={badgeCol}>
                        <span className={badge}>{step.n}</span>
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <h3
                          className={`${item} flex flex-wrap items-center gap-2 text-xl font-semibold text-[#33302E] sm:text-2xl`}
                          style={{
                            fontFamily: WixMadeForDisplayFont.style.fontFamily,
                          }}
                        >
                          <span aria-hidden>{step.emoji}</span>
                          {step.title}
                        </h3>
                        <p
                          className={`${item} mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#FF9431]`}
                        >
                          {step.extraTitle}
                        </p>
                        <ul className="mt-3 space-y-2.5 text-[16px] leading-relaxed text-[#5E5450] sm:text-[18px]">
                          {step.extra.map((line) => (
                            <li key={line} className={`${item} flex gap-2`}>
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-[#FF9431]"
                                strokeWidth={2}
                              />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                        <p
                          className={`${item} mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#98BCD6]`}
                        >
                          {step.homeTitle}
                        </p>
                        <ul className="mt-3 space-y-2.5 text-[16px] leading-relaxed text-[#5E5450] sm:text-[18px]">
                          {step.homeBullets.map((line) => (
                            <li key={line} className={`${item} flex gap-2`}>
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-[#6A9BC3]"
                                strokeWidth={2}
                              />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={step.n} className={liClass}>
                    <div className={badgeCol}>
                      <span className={badge}>{step.n}</span>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3
                        className={`${item} flex flex-wrap items-center gap-2 text-xl font-semibold text-[#33302E] sm:text-2xl`}
                        style={{
                          fontFamily: WixMadeForDisplayFont.style.fontFamily,
                        }}
                      >
                        <span aria-hidden>{step.emoji}</span>
                        {step.title}
                      </h3>
                      {step.body ? (
                        <p
                          className={`${item} mt-3 text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]`}
                        >
                          {step.body}
                        </p>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </SectionShell>

        {/* Focus / Mission / Vision */}
        <SectionShell className="bg-white">
          <div className="grid gap-7 md:grid-cols-3 md:gap-8">
            {[
              {
                emoji: "\u{1F3AF}",
                title: "Our Focus",
                text: "To lead India’s shift towards tech-enabled, eco-friendly, and on-demand home services, making everyday living smarter and stress-free.",
              },
              {
                emoji: "\u{1F3AF}",
                title: "Our Mission",
                text: "To provide reliable, affordable, and high-quality laundry and home services that save time, ensure hygiene, and deliver complete customer satisfaction.",
              },
              {
                emoji: "\u{1F52E}",
                title: "Our Vision",
                text: "To become India’s most trusted home-service and laundry brand, expanding across cities and empowering entrepreneurs through a scalable, tech-driven service model.",
              },
            ].map((block) => (
              <article
                key={block.title}
                className={`${item} flex flex-col rounded-[20px] border border-[#E8DFD6]/60 bg-gradient-to-b from-[#FEFEFE] to-[#F8F5F2] p-6 shadow-[6px_10px_32px_-8px_rgba(80,60,50,0.1)] sm:p-8`}
              >
                <p className="text-2xl sm:text-3xl" aria-hidden>
                  {block.emoji}
                </p>
                <h3
                  className="mt-3 text-lg font-semibold text-[#33302E] sm:text-xl"
                  style={{
                    fontFamily: WixMadeForDisplayFont.style.fontFamily,
                  }}
                >
                  {block.title}
                </h3>
                <p className="mt-4 flex-1 text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]">
                  {block.text}
                </p>
              </article>
            ))}
          </div>
        </SectionShell>

        {/* Franchise */}
        <SectionShell className="bg-[#1a314b] text-white">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#1a314b] via-[#243a52] to-[#1a314b] p-8 shadow-[0_24px_80px_-20px_rgba(26,49,75,0.6)] sm:p-10 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className={`${item} text-[clamp(1.4rem,3vw,1.95rem)] font-semibold`}
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                <span className="mr-2" aria-hidden>
                  💼
                </span>
                Business &amp; Franchise Opportunity
              </h2>
              <p
                className={`${item} mt-6 text-[16px] leading-[1.65] text-white/85 sm:text-[18px]`}
              >
                Thinking of entering the multi-billion home services industry?
                Wash &amp; Wow offers a low-investment, high-growth business
                opportunity with:
              </p>
            </div>
            <ul className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 md:gap-6">
              {[
                { emoji: "\u{1F3EA}", text: "Complete setup support" },
                {
                  emoji: "\u{1F4E3}",
                  text: "Marketing & branding assistance",
                },
                { emoji: "\u{1F393}", text: "Training & operational guidance" },
                {
                  emoji: "\u2699\uFE0F",
                  text: "Technology & logistics support",
                },
              ].map((row) => (
                <li
                  key={row.text}
                  className={`${item} flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-left text-[16px] font-medium text-white/95 backdrop-blur-sm sm:text-[18px]`}
                >
                  <span className="text-2xl leading-none" aria-hidden>
                    {row.emoji}
                  </span>
                  <span>{row.text}</span>
                </li>
              ))}
            </ul>
            <p
              className={`${item} mx-auto mt-8 max-w-2xl text-center text-[16px] leading-[1.65] text-white/80 sm:text-[18px]`}
            >
              Build a profitable business while becoming part of a future-ready
              service ecosystem.
            </p>
          </div>
        </SectionShell>

        {/* Sustainability */}
        <SectionShell className="bg-gradient-to-b from-[#FFFBF6] to-white">
          <div className="max-w-3xl space-y-7">
            <h2
              className={`${item} flex flex-wrap items-center gap-3 text-[clamp(1.65rem,3.5vw,2.35rem)] font-semibold text-[#33302E]`}
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              <span className="text-3xl sm:text-4xl" aria-hidden>
                🌱
              </span>
              Our Commitment to Sustainability
            </h2>
            <p
              className={`${item} text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]`}
            >
              We care about more than just cleanliness.
            </p>
            <p
              className={`${item} text-sm font-semibold uppercase tracking-[0.14em] text-[#FF9431]`}
            >
              Wash &amp; Wow is committed to:
            </p>
            <ul className="space-y-3.5">
              {[
                "Using eco-friendly detergents and chemicals",
                "Reducing water wastage with efficient processes",
                "Promoting sustainable cleaning practices",
                "Minimizing environmental impact at every step",
              ].map((line) => (
                <li
                  key={line}
                  className={`${item} flex gap-3 rounded-[14px] border border-[#E8DFD6]/60 bg-white px-5 py-4 text-[16px] leading-snug text-[#5E5450] sm:text-[18px]`}
                >
                  <Leaf
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#FF9431]"
                    strokeWidth={2}
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </SectionShell>

        {/* Final word */}
        <SectionShell className="bg-white pb-16 sm:pb-20 md:pb-24">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h2
              className={`${item} text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#33302E]`}
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              <span className="mr-2" aria-hidden>
                💬
              </span>
              Final Word
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.65] text-[#5E5450] sm:text-[18px]">
              <p className={item}>
                In a world that moves fast, your time is your most valuable
                asset.
              </p>
              <p className={item}>
                Wash &amp; Wow exists to give that time back to you. No stress.
                No hassle. Just clean clothes, clean spaces, and a cleaner life.
              </p>
            </div>
            <p
              className={`${item} rounded-[20px] bg-gradient-to-r from-[#FF9431] via-[#FF7700] to-[#FFAB5C] px-6 py-5 text-[clamp(1.05rem,2.2vw,1.3rem)] font-semibold leading-snug text-white shadow-[0_16px_48px_-12px_rgba(255,119,0,0.45)] sm:px-8 sm:py-6`}
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              🌊 Wash the stress away. Experience the Wow.
            </p>
          </div>
        </SectionShell>
      </AboutScrollAnimate>

      <Footer />
    </div>
  );
}
