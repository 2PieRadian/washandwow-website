"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import OrangeGradientButton from "../ui/buttons/OrangeGradientButton";
import Container from "../layout/Container";
import { WixMadeForDisplayFont } from "@/app/fonts";
import DownloadAppModal from "../ui/modals/DownloadAppModal";

function FadedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative md:max-w-7xl mx-auto overflow-hidden -mx-[20px] md:mx-auto">
      <img
        src={src}
        alt={alt}
        className="w-full object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%),linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] mask-intersect md:scale-100 h-[350px] sm:h-[400px] md:h-auto"
      />
    </div>
  );
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home">
      <Container isMaxWidth={true} className="mt-20 px-[20px]">
        <div className="text-center ">
          <div
            className={`font-bold text-dark-brown ${WixMadeForDisplayFont.className}`}
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            <h1 className="flex flex-col `text-[clamp(2.441rem,4vw,7rem)] leading-[45px] sm:leading-[50px] md:leading-[56px] lg:leading-[65px] xl:leading-[70px]">
              <span className="text-[clamp(2.441rem,6vw,4rem)]">
                Fresh and Easy
              </span>
              <span className="text-[clamp(2.441rem,6vw,4rem)]">
                Laundry Service
              </span>
            </h1>
          </div>
          <p className="text-brown text-[clamp(1rem,0.8rem+1vw,1.25rem)] mt-[20px] ">
            Fast, reliable, and affordable laundry <br /> service at your
            fingertips.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-[15px] mt-[30px] sm:mt-[40px] justify-center items-center px-[20px] sm:px-0">
          <OrangeGradientButton
            className="flex items-center justify-center gap-[8px] sm:gap-[10px] px-[24px] sm:px-[30px] py-[12px] sm:py-[15px] rounded-[26px] w-full sm:w-auto text-sm sm:text-base"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </OrangeGradientButton>

          <button className="group relative select-none bg-[#faf8f8] border border-[hsl(0,0%,86%)] text-[#6E6E6E] px-[24px] sm:px-[30px] py-[12px] sm:py-[15px] rounded-[26px] font-medium cursor-pointer hover:bg-[#f2f2f2] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto text-sm sm:text-base overflow-hidden">
            <span className="flex items-center justify-center gap-2">
              <span>Learn More</span>
              <svg
                className="w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="relative z-0 mt-[10px]">
          <FadedImage src="/images/hero/bg.png" alt="Hero Image" />
        </div>
      </Container>

      <DownloadAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Section divider */}
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#E5DDD6] to-transparent" />
      </div>
    </section>
  );
}
