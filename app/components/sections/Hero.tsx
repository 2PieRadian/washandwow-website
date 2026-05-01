"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import OrangeGradientButton from "../ui/buttons/OrangeGradientButton";
import Container from "../layout/Container";
import { WixMadeForDisplayFont } from "@/app/fonts";
import DownloadAppModal from "../ui/modals/DownloadAppModal";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import { scrollToSection } from "@/app/utils/scrollToSection";
import {
  gsap,
  prefersReducedMotion,
  getResponsiveConfig,
  ANIMATION_CONFIG,
} from "@/app/lib/animations";

function FadedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative -mx-[20px] overflow-hidden md:mx-auto md:max-w-7xl">
      <img
        src={src}
        alt={alt}
        className="h-[350px] w-full object-cover mask-[linear-gradient(to_bottom,black_70%,transparent_100%),linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] mask-intersect sm:h-[400px] md:h-auto md:scale-100"
      />
    </div>
  );
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    if (prefersReducedMotion()) return;

    const config = getResponsiveConfig();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: ANIMATION_CONFIG.ease.default },
      });

      tl.fromTo(
        ".hero-headline-1",
        { opacity: 0, y: config.distance.medium },
        { opacity: 1, y: 0, duration: config.duration.normal },
      )
        .fromTo(
          ".hero-headline-2",
          { opacity: 0, y: config.distance.medium },
          { opacity: 1, y: 0, duration: config.duration.normal },
          "-=0.6",
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: config.distance.small },
          { opacity: 1, y: 0, duration: config.duration.fast },
          "-=0.5",
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: config.distance.small },
          { opacity: 1, y: 0, duration: config.duration.fast },
          "-=0.4",
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, scale: 1.03 },
          {
            opacity: 1,
            scale: 1,
            duration: config.duration.slow,
            ease: ANIMATION_CONFIG.ease.smooth,
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <section id="home" ref={sectionRef}>
      <Container isMaxWidth={true} className="mt-20 px-[20px]">
        <div className="text-center">
          <div
            className="font-bold text-dark-brown"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            <h1 className="flex flex-col overflow-visible leading-[1.2] sm:leading-[1.18] md:leading-[1.15]">
              <span className="hero-headline-1 gsap-animate text-[clamp(2rem,5.5vw,3.35rem)] opacity-0">
                Everything Clean.
              </span>
              <span className="hero-headline-2 gsap-animate overflow-visible pb-[0.2em] text-[clamp(2rem,5.5vw,3.35rem)] opacity-0">
                <span className="gradient-text-wrap">
                  <span className="gradient-text">Everything Wow.</span>
                </span>
              </span>
            </h1>
          </div>
          <p className="hero-subtitle gsap-animate text-brown text-[clamp(1rem,0.8rem+1vw,1.25rem)] mt-[20px] max-w-2xl mx-auto opacity-0">
            Laundry, doorstep car wash, home services, and pest control — all
            delivered with care, convenience, and trusted quality in one
            seamless experience.
          </p>
        </div>

        <div className="hero-buttons gsap-animate relative z-10 flex flex-col sm:flex-row gap-[15px] mt-[30px] sm:mt-[40px] justify-center items-center px-[20px] sm:px-0 opacity-0">
          <OrangeGradientButton
            className="flex items-center justify-center gap-[8px] sm:gap-[10px] px-[24px] sm:px-[30px] py-[12px] sm:py-[15px] rounded-[26px] w-full sm:w-auto text-sm sm:text-base"
            onClick={() => setIsModalOpen(true)}
          >
            Order Now
          </OrangeGradientButton>

          <button
            className="group relative select-none bg-[#faf8f8] border border-[hsl(0,0%,86%)] text-[#6E6E6E] px-[24px] sm:px-[30px] py-[12px] sm:py-[15px] rounded-[26px] font-medium cursor-pointer hover:bg-[#f2f2f2] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto text-sm sm:text-base overflow-hidden"
            onClick={() => scrollToSection("#how-it-works")}
          >
            <span className="flex items-center justify-center gap-2">
              <span>See How It Works</span>
              <ChevronRightIcon className="w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
            </span>
          </button>
        </div>

        <div className="hero-image gsap-animate relative z-0 mt-[10px] opacity-0">
          <FadedImage src="/images/hero/bg.png" alt="Hero Image" />
        </div>
      </Container>

      <DownloadAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Section divider */}
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <div className="h-px bg-linear-to-r from-transparent via-[#E5DDD6] to-transparent" />
      </div>
    </section>
  );
}
