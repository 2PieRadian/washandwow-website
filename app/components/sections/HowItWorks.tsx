"use client";

import { useEffect, useRef } from "react";
import { WixMadeForDisplayFont } from "@/app/fonts";
import Container from "../layout/Container";
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  getResponsiveConfig,
  ANIMATION_CONFIG,
} from "@/app/lib/animations";

function Step({
  title,
  description,
  gradientFrom,
  gradientTo,
  shadowColor,
  stepNumber,
}: {
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  shadowColor: string;
  stepNumber: number;
}) {
  return (
    <div className="group flex items-start gap-[15px] sm:gap-[20px] p-[15px] sm:p-[20px] rounded-[20px] bg-white/40 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:hover:bg-white/50 md:hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-400 cursor-default">
      <span
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold md:group-hover:scale-110 transition-all duration-300 shrink-0 mt-[2px]"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          boxShadow: `0 4px 12px ${shadowColor}, inset 0 1px 1px rgba(255,255,255,0.3)`,
        }}
      >
        {stepNumber}
      </span>
      <div className="flex flex-col gap-[4px]">
        <h1
          className={`text-lg sm:text-xl font-medium text-step-heading md:group-hover:text-[#584E46] transition-colors duration-300`}
          style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
        >
          {title}
        </h1>
        <p className="text-[16px] sm:text-md text-step-text md:group-hover:text-[#6B635C] transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const config = getResponsiveConfig();

      gsap.fromTo(
        ".hiw-header",
        { opacity: 0, y: config.distance.medium },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.normal * 1.3,
          ease: ANIMATION_CONFIG.ease.default,
          scrollTrigger: {
            trigger: ".hiw-header",
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".hiw-image",
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: config.duration.slow * 1.3,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: ".hiw-image",
            start: "top 70%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".hiw-step",
        { opacity: 0, y: config.distance.large },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.normal * 1.3,
          stagger: config.stagger.relaxed,
          ease: ANIMATION_CONFIG.ease.default,
          scrollTrigger: {
            trigger: ".hiw-steps",
            start: "top 75%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef}>
      <Container
        className="bg-gradient-to-b from-[#FFFBF6] to-[#E6DACD] py-[90px] sm:py-[70px] md:py-[100px] px-[20px]"
        isMaxWidth={false}
      >
        <div className="hiw-header gsap-animate text-center flex flex-col gap-[5px] opacity-0">
          <p className="text-lg sm:text-xl">Simple Steps</p>
          <h1
            className="text-2xl sm:text-3xl font-semibold"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            How It Works
          </h1>
          <p className="text-dark-brown text-[16px] sm:text-md">
            Here's how we turn everyday laundry into something you'll love.
          </p>
        </div>

        <Container
          isMaxWidth={true}
          className="mt-[40px] sm:mt-[50px] md:mt-[60px] flex flex-col-reverse md:flex-row items-center gap-[40px] md:gap-[60px] lg:gap-[100px] justify-center"
        >
          <div className="hiw-image gsap-animate group hidden md:block opacity-0">
            <img
              src="/images/how-it-works/washing-machine.png"
              alt="How It Works"
              className="w-[350px] lg:w-[400px] group-hover:scale-[1.06] transition-all duration-700 drop-shadow-lg hover:drop-shadow-2xl"
            />
          </div>

          <div className="hiw-steps flex flex-col gap-[10px] sm:gap-[15px] max-w-[500px] w-full">
            <div className="hiw-step gsap-animate opacity-0">
              <Step
                title="Choose Your Service"
                description="Browse laundry options easily on our mobile app."
                gradientFrom="#FFAB5C"
                gradientTo="#FF7700"
                shadowColor="rgba(255,119,0,0.35)"
                stepNumber={1}
              />
            </div>

            <div className="hiw-step gsap-animate opacity-0">
              <Step
                title="Schedule Pickup"
                description="Select a convenient time directly from the app."
                gradientFrom="#D4B8AD"
                gradientTo="#A68B7B"
                shadowColor="rgba(166,139,123,0.35)"
                stepNumber={2}
              />
            </div>

            <div className="hiw-step gsap-animate opacity-0">
              <Step
                title="We Pick, Clean & Deliver"
                description="Sit back while we handle everything."
                gradientFrom="#FFAB5C"
                gradientTo="#FF7700"
                shadowColor="rgba(255,119,0,0.35)"
                stepNumber={3}
              />
            </div>

            <div className="hiw-step gsap-animate opacity-0">
              <Step
                title="Track & Relax 😌"
                description="Get real-time updates in the app."
                gradientFrom="#D4B8AD"
                gradientTo="#A68B7B"
                shadowColor="rgba(166,139,123,0.35)"
                stepNumber={4}
              />
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
