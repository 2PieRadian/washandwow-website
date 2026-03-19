"use client";

import { useState, useEffect } from "react";
import { WixMadeForDisplayFont } from "@/app/fonts";
import AppleIcon from "../icons/AppleIcon";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import DownloadAppSvg from "../svg/DownloadAppSvg";

function LeftContent() {
  return (
    <div className="max-w-[420px] flex flex-col gap-[10px] text-center min-[900px]:text-left relative z-10">
      <h2
        className={`text-2xl sm:text-3xl font-bold tracking-wide ${WixMadeForDisplayFont.className}`}
        style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
      >
        Get the app for a{" "}
        <span className="text-[#FFDAB6]">seamless experience</span>
      </h2>
      <p className="text-[16px] sm:text-md">
        Schedule picks, track orders, and manage your laundry - all from your
        phone. Available on iOS and Android.
      </p>

      <div className="flex flex-row items-center justify-center min-[900px]:justify-start gap-[10px] sm:gap-[20px] mt-[20px] mb-[50px] min-[900px]:mb-0">
        <button className="group relative flex items-center gap-[12px] rounded-[25px] bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] px-[18px] sm:px-[22px] py-[12px] sm:py-[14px] shadow-[0_4px_15px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] md:hover:shadow-[0_6px_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15),0_0_20px_rgba(255,255,255,0.1)] md:hover:scale-[1.05] md:active:scale-[0.98] md:transition-all md:duration-300 overflow-hidden cursor-pointer md:before:absolute md:before:inset-0 md:before:rounded-[25px] md:before:bg-gradient-to-r md:before:from-transparent md:before:via-white/20 md:before:to-transparent md:before:translate-x-[-200%] md:hover:before:translate-x-[200%] md:before:transition-transform md:before:duration-1000 border border-white/10 md:hover:border-white/20 justify-center sm:justify-start">
          <AppleIcon className="w-[35px] sm:w-[41px] md:group-hover:scale-110 md:transition-transform md:duration-300" />
          <div className="text-left relative z-10">
            <p className="text-[#999] text-[12px] sm:text-xs md:group-hover:text-[#ccc] md:transition-colors md:duration-300">
              Download on the
            </p>
            <h3 className="font-semibold text-white text-[16px] sm:text-base">
              App Store
            </h3>
          </div>
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
        </button>

        <button className="group relative flex items-center gap-[12px] rounded-[25px] bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] px-[18px] sm:px-[22px] py-[12px] sm:py-[14px] shadow-[0_4px_15px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] md:hover:shadow-[0_6px_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15),0_0_20px_rgba(255,255,255,0.1)] md:hover:scale-[1.05] md:active:scale-[0.98] md:transition-all md:duration-300 overflow-hidden cursor-pointer md:before:absolute md:before:inset-0 md:before:rounded-[25px] md:before:bg-gradient-to-r md:before:from-transparent md:before:via-white/20 md:before:to-transparent md:before:translate-x-[-200%] md:hover:before:translate-x-[200%] md:before:transition-transform md:before:duration-1000 border border-white/10 md:hover:border-white/20 justify-center sm:justify-start">
          <GooglePlayIcon className="w-[35px] sm:w-[41px] md:group-hover:scale-110 md:transition-transform md:duration-300" />
          <div className="text-left relative z-10">
            <p className="text-[#999] text-[12px] sm:text-xs md:group-hover:text-[#ccc] md:transition-colors md:duration-300">
              Get it on
            </p>
            <h3 className="font-semibold text-white text-[16px] sm:text-base">
              Google Play
            </h3>
          </div>
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
        </button>
      </div>
    </div>
  );
}

function Phone() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta !== null && event.gamma !== null) {
        const x = Math.max(-20, Math.min(20, (event.beta - 45) * 0.3));
        const y = Math.max(-20, Math.min(20, event.gamma * 0.3));
        setRotation({ x, y });
      }
    };

    const requestPermission = async () => {
      if (typeof window === "undefined") return;

      // Check if DeviceOrientationEvent exists and has requestPermission (iOS 13+)
      const DeviceOrientationEventTyped = DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<"granted" | "denied">;
      };

      if (typeof DeviceOrientationEventTyped.requestPermission === "function") {
        try {
          const permission =
            await DeviceOrientationEventTyped.requestPermission();
          if (permission === "granted") {
            setPermissionGranted(true);
            window.addEventListener("deviceorientation", handleOrientation);
          }
        } catch (error) {
          console.log("Gyroscope permission denied");
        }
      } else {
        // Non-iOS devices or older iOS - just add listener
        setPermissionGranted(true);
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    // Auto-request on component mount for non-iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (!isIOS) {
      requestPermission();
    }

    // For iOS, we'll add a click handler to request permission
    const handleClick = () => {
      if (!permissionGranted) {
        requestPermission();
      }
    };

    document.addEventListener("click", handleClick, { once: true });

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      document.removeEventListener("click", handleClick);
    };
  }, [permissionGranted]);

  // Mouse tracking for desktop - tracks across viewport
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = ((e.clientY - centerY) / centerY) * 40;
      const y = ((e.clientX - centerX) / centerX) * 100;
      setRotation({ x, y });
    };

    // Only add mouse tracking on desktop (non-touch devices)
    const isTouchDevice = "ontouchstart" in window;
    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="group relative" style={{ perspective: "1000px" }}>
      {/* Outer div - handles tilt rotation */}
      <div
        className="transition-transform duration-150 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Inner div - handles floating animation */}
        <div className="animate-[float_6s_ease-in-out_infinite]">
          {/* Glow effect behind phone */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF9431]/20 to-transparent blur-3xl scale-150 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Phone frame */}
          <div className="relative bg-gradient-to-b from-[#d4ccc5] via-[#c5bdb6] to-[#a1978d] w-[290px] h-[580px] rounded-[45px] p-[4px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_40px_rgba(0,0,0,0.3)] md:group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6),0_0_60px_rgba(255,148,49,0.2)] transition-all duration-500 md:group-hover:scale-[1.03]">
            {/* Side buttons */}
            <div className="absolute -left-[3px] top-[100px] w-[3px] h-[30px] bg-gradient-to-b from-[#b5ada6] to-[#9a918a] rounded-l-sm"></div>
            <div className="absolute -left-[3px] top-[150px] w-[3px] h-[60px] bg-gradient-to-b from-[#b5ada6] to-[#9a918a] rounded-l-sm"></div>
            <div className="absolute -right-[3px] top-[130px] w-[3px] h-[50px] bg-gradient-to-b from-[#b5ada6] to-[#9a918a] rounded-r-sm"></div>

            {/* Screen */}
            <div className="relative bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-[#000000] overflow-hidden w-full h-full rounded-[42px]">
              {/* Dynamic Island */}
              <div className="absolute top-[12px] left-1/2 -translate-x-1/2 bg-black w-[100px] h-[28px] rounded-full z-20 flex items-center justify-center gap-[8px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a1a] ring-1 ring-[#2a2a2a]"></div>
                <div className="w-[6px] h-[6px] rounded-full bg-[#0c4a6e] opacity-60"></div>
              </div>

              {/* App UI mockup */}
              <div className="absolute inset-0 pt-[50px] px-[15px] pb-[20px]">
                {/* Status bar */}
                <div className="flex justify-between items-center text-white/60 text-[10px] mb-[15px] px-[5px]">
                  <span>9:41</span>
                  <div className="flex gap-[4px] items-center">
                    <div className="w-[15px] h-[8px] border border-white/60 rounded-[2px] relative">
                      <div className="absolute inset-[1px] right-[3px] bg-white/60 rounded-[1px]"></div>
                    </div>
                  </div>
                </div>

                {/* App header */}
                <div className="bg-gradient-to-r from-[#FF9431] to-[#FF7700] rounded-[15px] p-[12px] mb-[12px] shadow-lg">
                  <p className="text-white/80 text-[8px]">Welcome back!</p>
                  <p className="text-white font-semibold text-[12px]">
                    Schedule Pickup
                  </p>
                </div>

                {/* Service cards */}
                <div className="space-y-[8px]">
                  <div className="bg-white/10 backdrop-blur rounded-[12px] p-[10px] flex items-center gap-[10px] group-hover:bg-white/15 transition-colors duration-300">
                    <div className="w-[35px] h-[35px] rounded-[10px] bg-gradient-to-br from-[#FF9431]/30 to-[#FF7700]/30 flex items-center justify-center">
                      <div className="w-[18px] h-[18px] rounded-full bg-[#FF9431]"></div>
                    </div>
                    <div>
                      <p className="text-white text-[10px] font-medium">
                        Wash & Fold
                      </p>
                      <p className="text-white/50 text-[8px]">₹79/kg</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-[12px] p-[10px] flex items-center gap-[10px] group-hover:bg-white/15 transition-colors duration-300">
                    <div className="w-[35px] h-[35px] rounded-[10px] bg-gradient-to-br from-[#a78bfa]/30 to-[#8b5cf6]/30 flex items-center justify-center">
                      <div className="w-[18px] h-[18px] rounded-full bg-[#a78bfa]"></div>
                    </div>
                    <div>
                      <p className="text-white text-[10px] font-medium">
                        Dry Cleaning
                      </p>
                      <p className="text-white/50 text-[8px]">₹199/kg</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-[12px] p-[10px] flex items-center gap-[10px] group-hover:bg-white/15 transition-colors duration-300">
                    <div className="w-[35px] h-[35px] rounded-[10px] bg-gradient-to-br from-[#34d399]/30 to-[#10b981]/30 flex items-center justify-center">
                      <div className="w-[18px] h-[18px] rounded-full bg-[#34d399]"></div>
                    </div>
                    <div>
                      <p className="text-white text-[10px] font-medium">
                        Steam Press
                      </p>
                      <p className="text-white/50 text-[8px]">₹15/piece</p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="absolute bottom-[25px] left-[15px] right-[15px]">
                  <div className="bg-gradient-to-r from-[#FF9431] to-[#FF7700] rounded-full py-[10px] text-center shadow-lg shadow-[#FF9431]/30">
                    <p className="text-white text-[11px] font-semibold">
                      Book Now
                    </p>
                  </div>
                </div>
              </div>

              {/* Screen shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>

              {/* Animated shine sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[2000ms] pointer-events-none"></div>
            </div>

            {/* Frame shine */}
            <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div className="absolute -bottom-[80px] left-1/2 -translate-x-1/2 w-[200px] h-[80px] bg-gradient-to-b from-white/10 to-transparent blur-xl rounded-full"></div>
    </div>
  );
}

export default function DownloadApp() {
  return (
    <section
      id="download-app"
      className="relative bg-gradient-to-b from-[#897B6E] to-[#4A4139] py-[50px]"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <DownloadAppSvg />
      </div>

      <div className="max-w-[1200px] mx-auto text-white py-[50px] sm:py-[70px] min-[900px]:py-[100px] px-[20px] min-[900px]:px-[40px]">
        <div className="text-center relative z-10">
          <h1
            className={`text-2xl sm:text-3xl font-semibold ${WixMadeForDisplayFont.className}`}
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            Download Our App
          </h1>
          <p className="text-[16px] sm:text-md font-light">
            Manage your laundry on the go
          </p>
        </div>

        <div className="flex flex-col min-[900px]:flex-row items-center justify-center mt-[40px] sm:mt-[60px] min-[900px]:mt-[80px] gap-[40px] min-[900px]:gap-[100px]">
          <LeftContent />
          <div className=" min-[900px]:block">
            <Phone />
          </div>
        </div>
      </div>
    </section>
  );
}
