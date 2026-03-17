"use client";

import { WixMadeForDisplayFont } from "@/app/fonts";
import OrangeGradientButton from "../ui/buttons/OrangeGradientButton";

export default function Navbar() {
  const buttonStyles =
    "bg-gradient-to-l from-[#FF7700] via-[#FE922E] to-[#F8BB7A] shadow-[2px_2px_12.4px_-2px_#FD7801] rounded-[26px] px-6 py-3 text-white font-medium cursor-pointer";

  return (
    <div className="flex justify-between items-center py-[15px]">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <h1
          className={`${WixMadeForDisplayFont.className} text-lg font-bold text-brown`}
          style={{ fontFamily: "var(--font-wix-made-for-display)" }}
        >
          Wash & <span className="text-orange">Wow</span>
        </h1>

        <ul
          className={`flex gap-[30px] text-dark-blue font-medium text-sm items-center`}
        >
          <li>Home</li>
          <li>How It Works</li>
          <li>Services</li>
          <li>Reviews</li>
          <li className={buttonStyles}>Download App</li>
        </ul>
      </div>
    </div>
  );
}
