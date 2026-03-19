"use client";

import { Calendar } from "lucide-react";
import OrangeGradientButton from "../ui/buttons/OrangeGradientButton";
import Container from "../layout/Container";
import { WixMadeForDisplayFont } from "@/app/fonts";

function FadedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative max-w-7xl mx-auto">
      <img
        src={src}
        alt={alt}
        className="w-full object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%),linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] mask-intersect"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <Container isMaxWidth={true} className="mt-20">
      <div className="text-center ">
        <h1
          className={`text-6xl font-bold text-dark-brown ${WixMadeForDisplayFont.className}`}
          style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
        >
          Fresh and Easy <br /> Laundry Service
        </h1>
        <p className="text-brown text-lg mt-[20px]">
          Fast, reliable, and affordable laundry <br /> service at your
          fingertips.
        </p>
      </div>

      <div className="flex gap-[20px] mt-[40px] justify-center">
        <OrangeGradientButton className="flex items-center gap-[10px] px-6 py-3 rounded-[26px]">
          <Calendar />
          Schedule a Pickup
        </OrangeGradientButton>

        <button className="bg-[#F5F5F5] text-[#6E6E6E] px-[40px] py-[15px] rounded-[26px] font-medium cursor-pointer hover:bg-[#e9e9e9] transition-all duration-300">
          Learn More
        </button>
      </div>

      <div className="mt-[10px] ">
        <FadedImage src="/images/hero/bg.png" alt="Hero Image" />
      </div>
    </Container>
  );
}
