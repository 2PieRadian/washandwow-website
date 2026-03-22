"use client";

import { useEffect, useRef } from "react";
import { WixMadeForDisplayFont } from "@/app/fonts";
import Container from "../layout/Container";
import ServicesSvg from "../svg/ServicesSvg";
import {
  gsap,
  prefersReducedMotion,
  getResponsiveConfig,
  ANIMATION_CONFIG,
} from "@/app/lib/animations";

interface ServiceItemProps {
  image: React.ReactNode;
  title: string;
  description: string;
  price: number;
  unit?: string;
  buttonText: string;
  className?: string;
  imageDivClassName?: string;
  alignTop?: boolean;
  reverse?: boolean;
  noScale?: boolean;
}

function ServiceItem({
  image,
  title,
  description,
  price,
  unit = "kg",
  buttonText,
  className = "",
  imageDivClassName = "",
  alignTop = false,
  reverse = false,
  noScale = false,
}: ServiceItemProps) {
  return (
    <div
      className={`group bg-gradient-to-b from-[#F7F3EF] to-[#FFFFFF] border border-[#e4ddd8] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-[4px_4px_15px_2px_#F6F2EE,inset_4px_4px_30px_1px_#FFFFFF] hover:shadow-[6px_6px_25px_4px_rgba(217,205,192,0.5),inset_4px_4px_30px_1px_#FFFFFF] flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} ${alignTop ? "items-start" : "items-center"} justify-between gap-[15px] sm:gap-[20px] md:gap-[30px] overflow-hidden transition-shadow duration-[400ms] ${className}`}
    >
      <div
        className={`${imageDivClassName} ${reverse ? "md:rounded-r-[40px]" : "md:rounded-l-[40px]"} ${noScale ? "[&>img]:transition-transform [&>img]:duration-[400ms] [&>img]:group-hover:scale-[1.05]" : "[&>img]:scale-[0.7] [&>img]:transition-transform [&>img]:duration-[400ms] [&>img]:group-hover:scale-[0.75]"} w-full md:flex-1 md:max-w-[45%] overflow-hidden rounded-t-[24px] sm:rounded-t-[32px] md:rounded-t-none  `}
      >
        {image}
      </div>

      <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[15px] flex-1 p-[20px] sm:p-[25px] md:p-[35px]">
        <span className="text-[#FF9431] text-xs sm:text-sm font-medium uppercase tracking-wider">
          Premium Service
        </span>

        <h3
          className={`text-[#584E46] font-semibold text-xl sm:text-2xl md:text-3xl`}
          style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
        >
          {title}
        </h3>

        <p className="text-[#615449] text-base md:text-lg leading-relaxed max-w-[400px]">
          {description}
        </p>

        <div className="flex items-baseline gap-[5px] mt-[5px]">
          <span className="text-[#6B635C] text-base">Starting at</span>
          <span className="text-[#584E46] text-xl sm:text-2xl md:text-3xl font-bold">
            ₹{price}
          </span>
          <span className="text-[#6B635C] text-base">/{unit}</span>
        </div>

        <button className="group/btn relative select-none mt-[15px] sm:mt-[20px] w-full sm:w-fit px-[20px] sm:px-[25px] md:px-[30px] py-[12px] sm:py-[14px] md:py-[16px] bg-gradient-to-r from-[#D9C9C3] to-[#C5AEA5] border border-[#C8B1A8] rounded-full shadow-[3px_3px_12px_rgba(134,116,109,0.3),inset_1px_1px_3px_#FFFFFF] hover:shadow-[4px_4px_20px_rgba(134,116,109,0.4),inset_1px_1px_3px_#FFFFFF] text-white font-semibold cursor-pointer overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#C5AEA5] before:to-[#D9C9C3] before:rounded-full before:opacity-0 before:transition-opacity before:duration-[400ms] hover:before:opacity-100 hover:scale-[1.02] active:scale-[0.97] transition-[transform,box-shadow] duration-[200ms] text-sm sm:text-base">
          <span className="relative z-10 flex items-center justify-center gap-[8px]">
            {buttonText}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const config = getResponsiveConfig();

      gsap.fromTo(
        ".services-header",
        { opacity: 0, y: config.distance.medium },
        {
          opacity: 1,
          y: 0,
          duration: config.duration.normal * 1.3,
          ease: ANIMATION_CONFIG.ease.default,
          scrollTrigger: {
            trigger: ".services-header",
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".services-image",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: config.duration.slow * 1.3,
          ease: ANIMATION_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: ".services-image",
            start: "top 70%",
            once: true,
          },
        },
      );

      const serviceCards = gsap.utils.toArray(".service-card") as Element[];
      serviceCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 1.5 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: config.duration.normal * 1.2,
            ease: ANIMATION_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: card,
              start: "top 50%",
              once: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-[60px] sm:py-[80px] md:py-[120px] relative px-[20px]"
    >
      <ServicesSvg />

      <Container
        className="flex flex-col md:flex-row items-center justify-center max-w-[1200px] gap-[30px] md:gap-0"
        isMaxWidth={true}
      >
        <div className="services-image gsap-animate w-full md:w-auto flex items-center justify-center relative order-2 md:order-1 opacity-0">
          <img
            src="/images/services/racks.png"
            alt="Laundry racks"
            className="w-full max-w-[350px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[600px] md:pr-[60px] lg:pr-[110px] rounded-[20px] -ml-[55px] md:ml-0"
          />
        </div>

        <div className="services-header gsap-animate text-center md:text-right self-center md:self-start flex flex-col justify-center max-w-[500px] md:max-w-[450px] order-1 md:order-2 opacity-0">
          <span
            className="text-orange-services font-medium"
            style={{ fontSize: "clamp(1rem, 0.5rem + 2vw, 1.563rem)" }}
          >
            Our Services
          </span>
          <h2
            className="font-semibold text-brown-services mt-[10px]"
            style={{
              fontFamily: WixMadeForDisplayFont.style.fontFamily,
              fontSize: "clamp(1.8rem,5vw,3rem)",
            }}
          >
            Care Designed <br className="hidden md:block" /> for Every Fabric
          </h2>
          <p
            className="text-dark-brown mt-[15px] sm:mt-[20px] leading-relaxed"
            style={{ fontSize: "clamp(1rem, 0.6rem + 1.5vw, 1.25rem)" }}
          >
            From everyday laundry to delicate garments, we handle every piece
            with precision and care.
          </p>
        </div>
      </Container>

      <div className="service-cards flex flex-col gap-[25px] sm:gap-[35px] md:gap-[50px] max-w-[1000px] mx-auto mt-[60px] sm:mt-[80px] md:mt-[80px]">
        <div className="service-card gsap-animate opacity-0">
          <ServiceItem
            image={
              <img
                src="/images/services/washandfold.png"
                alt="Wash and Fold"
                className="w-full h-full object-contain"
              />
            }
            imageDivClassName="h-[200px] sm:h-[250px] md:h-[320px]"
            title="Wash and Fold"
            description="Professionally washed, gently dried, and neatly folded. Ideal for weekly laundry and daily essentials."
            price={79}
            buttonText="Book Now"
          />
        </div>

        <div className="service-card gsap-animate opacity-0">
          <ServiceItem
            image={
              <img
                src="/images/services/blazer.png"
                alt="Premium Dry Cleaning"
                className="w-full h-full object-contain"
              />
            }
            imageDivClassName="h-[300px] sm:h-[350px] md:h-[400px]"
            title="Premium Dry Cleaning"
            description="Expert cleaning for suits, dresses, and delicate fabrics. Includes hand finishing for a flawless, pressed look."
            price={199}
            buttonText="Schedule Service"
            reverse={true}
          />
        </div>

        <div className="service-card gsap-animate opacity-0">
          <ServiceItem
            image={
              <img
                src="/images/services/steampress.png"
                alt="Crisp Steam Press"
                className="w-full h-full object-contain"
              />
            }
            imageDivClassName="h-[280px] sm:h-[320px] md:h-[380px]"
            title="Crisp Steam Press"
            description="Precise steam pressing for crisp, wrinkle-free shirts, pants, and formal garments."
            price={15}
            unit="piece"
            buttonText="Get it Pressed"
            noScale={true}
          />
        </div>
      </div>

      {/* Browse All Services Button */}
      {/* <div className="flex justify-center mt-[40px] sm:mt-[50px] md:mt-[60px]">
        <OrangeGradientButton className="group rounded-full px-[28px] sm:px-[36px] py-[14px] sm:py-[16px] text-[15px] sm:text-base font-semibold flex items-center gap-[10px]">
          Browse All Services
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </OrangeGradientButton>
      </div> */}
    </section>
  );
}
