import { WixMadeForDisplayFont } from "@/app/fonts";
import AppleIcon from "../icons/AppleIcon";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import DownloadAppSvg from "../svg/DownloadAppSvg";

function LeftContent() {
  return (
    <div className="max-w-[420px] flex flex-col gap-[10px]">
      <h2
        className={`text-3xl font-bold tracking-wide ${WixMadeForDisplayFont.className}`}
        style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
      >
        Get the app for a{" "}
        <span className="text-[#FFDAB6]">seamless experience</span>
      </h2>
      <p className="text-md">
        Schedule picks, track orders, and manage your laundry - all from your
        phone. Available on iOS and Andriod.
      </p>

      <div className="flex items-center gap-[20px] mt-[20px]">
        <button className="flex items-center gap-[10px] rounded-[25px] bg-black px-[20px] py-[12px] shadow-[inset_4px_4px_10px_1px_rgba(255,255,255,0.25)]">
          <AppleIcon className="w-[40px]" />
          <div className="text-left">
            <p className="text-[#CCCCCC] text-xs">Download on the</p>
            <h3 className="font-medium">App Store</h3>
          </div>
        </button>

        <button className="flex items-center gap-[10px] rounded-[25px] bg-black px-[20px] py-[12px] shadow-[inset_4px_4px_10px_1px_rgba(255,255,255,0.25)]">
          <GooglePlayIcon className="w-[40px]" />

          <div className="text-left">
            <p className="text-[#CCCCCC] text-xs">Get it on</p>
            <h3 className="font-medium">Google Play</h3>
          </div>
        </button>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="bg-gradient-to-b from-[#cac2bb] to-[#a1978d] w-[330px] h-[600px] rounded-[20px] p-[8px] scale-[0.8] shadow-2xl">
      <div className="relative bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#000000] overflow-hidden w-[314px] h-[584px] rounded-[20px] p-[10px]">
        {/* Shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>

        <div className="bg-white rounded-[20px] w-[50%] mx-auto h-[20px]"></div>
      </div>
    </div>
  );
}

export default function DownloadApp() {
  return (
    <div className="relative bg-gradient-to-b from-[#897B6E] to-[#4A4139] flex items-center justify-center py-[50px]">
      <DownloadAppSvg />

      <div className="absolute top-[50%] left-[50%] w-full h-full translate-x-[-50%] translate-y-[-50%] max-w-[1200px] text-white py-[100px]">
        <div className="text-center">
          <h1
            className={`text-3xl font-semibold ${WixMadeForDisplayFont.className}`}
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            Download Our App
          </h1>
          <p className="text-md font-light">Manage your laundry on the go</p>
        </div>

        <div className="flex items-center justify-center mt-[20px] gap-[100px]">
          <LeftContent />
          <Phone />
        </div>
      </div>
    </div>
  );
}
