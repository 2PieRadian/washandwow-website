import Container from "@/app/components/layout/Container";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";
import { CalendarDays, Droplets, Package, Smartphone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Wash & Wow",
  description:
    "Learn how Wash & Wow brings care and precision to your everyday laundry.",
};

const processStepBadgeShadow =
  "shadow-[2px_2px_20px_2px_rgba(170,199,238,0.3),inset_4px_4px_4.3px_rgba(255,255,255,0.4)]";

function StepVisual({ variant }: { variant: "schedule" | "care" | "deliver" }) {
  if (variant === "schedule") {
    return (
      <div className="relative flex h-[180px] w-full max-w-[220px] items-center justify-center sm:h-[200px] sm:max-w-[260px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-services/15 to-transparent blur-2xl" />
        <div className="relative flex items-end gap-2">
          <div className="flex h-[140px] w-[72px] flex-col items-center rounded-[20px] border-2 border-[#E8DFD6] bg-white p-2 shadow-lg shadow-black/5">
            <div className="mt-2 h-2 w-10 rounded-full bg-[#33302E]/10" />
            <CalendarDays
              className="mt-4 h-12 w-12 text-orange-services"
              strokeWidth={1.5}
            />
            <div className="mt-3 h-2 w-8 rounded bg-orange-services/30" />
          </div>
          <Smartphone
            className="h-[120px] w-[68px] text-[#584E46] drop-shadow-md"
            strokeWidth={1.25}
          />
        </div>
      </div>
    );
  }
  if (variant === "care") {
    return (
      <div className="relative flex h-[180px] w-full max-w-[240px] items-center justify-center sm:h-[200px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200/40 to-transparent blur-2xl" />
        <div className="relative">
          <div className="rounded-2xl border border-sky-100 bg-white/90 px-6 py-8 shadow-lg shadow-sky-900/5">
            <div className="mx-auto flex h-20 w-16 items-center justify-center rounded-lg border border-[#E8DFD6] bg-gradient-to-b from-white to-sky-50">
              <span className="text-4xl" aria-hidden>
                👔
              </span>
            </div>
          </div>
          <Droplets
            className="absolute -right-2 top-2 h-10 w-10 text-sky-400/80"
            strokeWidth={1.5}
          />
          <Droplets
            className="absolute -left-1 bottom-4 h-8 w-8 text-sky-300/70"
            strokeWidth={1.5}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex h-[180px] w-full max-w-[280px] items-center justify-center gap-4 sm:h-[200px]">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4C4B8]/30 to-transparent blur-2xl" />
      <Package
        className="relative h-24 w-24 text-[#9A8578]"
        strokeWidth={1.25}
      />
      <div className="relative flex flex-col gap-1">
        <div className="h-3 w-20 rounded-sm bg-white shadow-sm ring-1 ring-[#E8DFD6]" />
        <div className="h-3 w-24 rounded-sm bg-sky-50 shadow-sm ring-1 ring-sky-100" />
        <div className="h-3 w-16 rounded-sm bg-white shadow-sm ring-1 ring-[#E8DFD6]" />
      </div>
    </div>
  );
}

function ProcessStepCard({
  step,
  badgeClass,
  bgClass = "",
  surfaceClass,
  title,
  description,
  visualVariant,
  wide,
}: {
  step: string;
  badgeClass: string;
  bgClass?: string;
  /** When set, replaces default border, shadow, radius, and bgClass surface. */
  surfaceClass?: string;
  title: string;
  description: string;
  visualVariant: "schedule" | "care" | "deliver";
  wide?: boolean;
}) {
  const defaultSurface =
    "rounded-[24px] border border-black/[0.04] shadow-[4px_8px_30px_-4px_rgba(80,60,50,0.12)] sm:rounded-[28px] md:rounded-[32px]";
  const surface = surfaceClass ?? `${defaultSurface} ${bgClass}`.trim();

  return (
    <div
      className={`flex flex-col overflow-hidden lg:flex-row lg:items-center ${surface} ${wide ? "lg:min-h-[220px]" : ""}`}
    >
      <div
        className={`flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-10 ${wide ? "lg:max-w-[55%]" : ""}`}
      >
        <span
          className={`mb-4 inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-white sm:text-sm ${badgeClass}`}
        >
          {step}
        </span>
        <h3
          className="text-xl font-semibold text-[#645853] sm:text-2xl md:text-[26px]"
          style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
        >
          {title}
        </h3>
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-[#5E5450] sm:text-[17px] md:text-[18px]">
          {description}
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center px-6 pb-8 pt-2 lg:justify-end lg:pb-0 lg:pr-8 lg:pt-0">
        <StepVisual variant={visualVariant} />
      </div>
    </div>
  );
}

export default function page() {
  return (
    <div style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <Container
        isMaxWidth={true}
        className="mt-[70px] flex min-h-[calc(70svh-70px)] flex-col items-center justify-center gap-10 px-[20px] pb-6 pt-10 min-[950px]:flex-row min-[950px]:items-center min-[950px]:justify-between min-[950px]:gap-16 md:pb-8 md:pt-14"
      >
        <div>
          <h1
            className="text-3xl font-semibold text-[#33302E] sm:text-4xl"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            About Us
          </h1>

          <p className="mt-4 text-[18px] leading-relaxed text-dark-blue">
            At Wash &amp; Wow, we believe laundry isn&apos;t just a chore —
            it&apos;s a part of your everyday life that deserves care,
            precision, and respect.
          </p>
        </div>

        <div>
          <img
            src="/images/about/about.png"
            alt="About Wash & Wow"
            className="w-full max-w-[700px] cursor-default rounded-2xl transition-transform duration-500 ease-out will-change-transform hover:-translate-y-3 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
          />
        </div>
      </Container>

      <section className="bg-white px-[20px] py-[60px] sm:py-[80px] md:py-[100px]">
        <Container isMaxWidth={true} className="max-w-[1200px]">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 md:mb-20">
            <h2
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-[#33302E]"
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              From Wash to <span className="text-orange-services">Wow</span>
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[#5E5450] sm:text-[18px] md:text-[19px]">
              <span className="font-medium text-orange-services">
                Three simple steps.
              </span>{" "}
              One spotless result. Here&apos;s how we turn everyday laundry into
              something you&apos;ll love.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <ProcessStepCard
              step="Step 01"
              badgeClass={`border border-[#E49D81] bg-[#FF9421] ${processStepBadgeShadow}`}
              surfaceClass="rounded-[54px] border border-[#F2E0F2] bg-[#FDF7FD] shadow-[0px_0px_30px_rgba(216,197,199,0.3),inset_0px_0px_9.6px_6px_#FFFFFF]"
              title="Schedule Your Wash"
              description="Choose a convenient pickup slot in seconds. Our team arrives at your doorstep, right on time."
              visualVariant="schedule"
            />
            <ProcessStepCard
              step="Step 02"
              badgeClass={`border border-[#B6C8D4] bg-[#98BCD6] ${processStepBadgeShadow}`}
              surfaceClass="rounded-[54px] border border-[#E6ECF1] bg-[rgba(231,237,240,0.69)] shadow-[0px_0px_42px_rgba(216,197,199,0.6),inset_0px_0px_9.6px_6px_#FFFFFF]"
              title="We Care For Every Thread"
              description="Your clothes are sorted, washed, and treated according to fabric type for safe, effective cleaning."
              visualVariant="care"
            />
            <div className="lg:col-span-2">
              <ProcessStepCard
                step="Step 03"
                badgeClass={`border border-[#DDC5AD] bg-[#E6C29E] ${processStepBadgeShadow}`}
                surfaceClass="rounded-[54px] border border-[#EEE5DB] bg-[#FCFAF8] shadow-[0px_0px_42px_rgba(216,197,199,0.6),inset_0px_0px_9.6px_6px_#FFFFFF]"
                title="Get Ready for the Wow"
                description="Fresh, folded, and delivered back to you within 24–48 hours."
                visualVariant="deliver"
                wide
              />
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
