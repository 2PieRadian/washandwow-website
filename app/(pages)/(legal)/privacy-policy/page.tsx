import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";

export default function page() {
  return (
    <div>
      <Navbar />

      <div
        className={`overflow-x-hidden mt-[70px]`}
        style={{ fontFamily: SatoshiFont.style.fontFamily }}
      >
        <div>
          <h1
            className={`text-3xl font-semibold text-[#33302E]`}
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            Privacy Policy
          </h1>
          <p>Last updated: 22/03/2026</p>
        </div>

        <div className="w-[320px]">
          <img src="/images/privacy-policy/privacy-policy.png" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
