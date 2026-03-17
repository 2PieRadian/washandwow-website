"use client";

import { Calendar } from "lucide-react";
import OrangeGradientButton from "../ui/buttons/OrangeGradientButton";

export default function Hero() {
  return (
    <div className="mt-20 ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-dark-brown">
          Fresh and Easy <br /> Laundry Service
        </h1>
        <p className="text-brown text-lg mt-[20px]">
          Fast, reliable, and affordable laundry <br /> service at your
          fingertips.
        </p>
      </div>

      <div className="flex gap-[20px] mt-[40px] justify-center">
        <OrangeGradientButton className="flex items-center gap-[10px]">
          <Calendar />
          Schedule a Pickup
        </OrangeGradientButton>

        <button className="bg-[#F5F5F5] text-[#6E6E6E] px-[40px] py-[15px] rounded-[26px] font-medium cursor-pointer hover:bg-[#e9e9e9] transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
// background: linear-gradient(270deg, #FF7700 0%, #FE922E 51.92%, #F8BB7A 100%);
// box-shadow: 2px 2px 12.4px -2px #FD7801;
// border-radius: 26px;
