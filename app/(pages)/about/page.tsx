import Container from "@/app/components/layout/Container";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";
import type { Metadata } from "next";
import { StepVisual } from "./StepVisual";

export const metadata: Metadata = {
  title: "About Us | Wash & Wow",
  description:
    "Learn how Wash & Wow brings care and precision to your everyday laundry.",
};

const processStepBadgeShadow =
  "shadow-[2px_2px_20px_2px_rgba(170,199,238,0.3),inset_4px_4px_4.3px_rgba(255,255,255,0.4)]";

/** Scales down on narrow viewports; caps below old 54px pill look. */
const processStepCardRadius = "rounded-[clamp(25px,3.5vw,30px)]";

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
    "rounded-[5px] border border-black/[0.04] shadow-[4px_8px_30px_-4px_rgba(80,60,50,0.12)] sm:rounded-[10px] md:rounded-[20px]";
  const surface = surfaceClass ?? `${defaultSurface} ${bgClass}`.trim();

  return (
    <div
      className={`flex w-full flex-col overflow-hidden gap-6 p-6 sm:p-8 md:p-10 min-[600px]:flex-row-reverse min-[600px]:items-center min-[600px]:gap-[20px] ${surface} ${wide ? "max-w-full min-[1030px]:min-h-[220px] min-[1030px]:w-full" : ""}`}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-center">
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
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-[#5E5450] sm:text-[17px] md:max-w-none md:text-[18px]">
          {description}
        </p>
      </div>
      <div
        className={`flex w-full shrink-0 flex-col items-center justify-center self-center min-[600px]:w-auto min-[600px]:max-w-none min-[600px]:flex-none min-[600px]:shrink-0 min-[600px]:items-start min-[600px]:justify-center min-[600px]:self-start min-[600px]:pr-0`}
      >
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
            className="w-full max-w-[700px] cursor-default rounded-2xl"
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

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 min-[1030px]:grid-cols-2 min-[1030px]:gap-8">
            <ProcessStepCard
              step="Step 01"
              badgeClass={`border border-[#E49D81] bg-[#FF9421] ${processStepBadgeShadow}`}
              surfaceClass={`${processStepCardRadius} border border-[#F2E0F2] bg-[#FDF7FD] shadow-[0px_0px_30px_rgba(216,197,199,0.3),inset_0px_0px_9.6px_6px_#FFFFFF]`}
              title="Schedule Your Wash"
              description="Choose a convenient pickup slot in seconds. Our team arrives at your doorstep, right on time."
              visualVariant="schedule"
            />
            <ProcessStepCard
              step="Step 02"
              badgeClass={`border border-[#B6C8D4] bg-[#98BCD6] ${processStepBadgeShadow}`}
              surfaceClass={`${processStepCardRadius} border border-[#E6ECF1] bg-[rgba(231,237,240,0.69)] shadow-[0px_0px_42px_rgba(216,197,199,0.6),inset_0px_0px_9.6px_6px_#FFFFFF]`}
              title="We Care For Every Thread"
              description="Your clothes are sorted, washed, and treated according to fabric type for safe, effective cleaning."
              visualVariant="care"
            />
            <div className="w-full min-[1030px]:col-span-2">
              <ProcessStepCard
                step="Step 03"
                badgeClass={`border border-[#DDC5AD] bg-[#E6C29E] ${processStepBadgeShadow}`}
                surfaceClass={`${processStepCardRadius} border border-[#EEE5DB] bg-[#FCFAF8] shadow-[0px_0px_42px_rgba(216,197,199,0.6),inset_0px_0px_9.6px_6px_#FFFFFF]`}
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
