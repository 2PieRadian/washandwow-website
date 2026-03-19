"use client";

import Navbar from "./components/layout/Navbar";
import DownloadApp from "./components/sections/DownloadApp";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Services from "./components/sections/Services";
import { SatoshiFont } from "./fonts";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div
      className={`${SatoshiFont.variable}`}
      style={{ fontFamily: "var(--font-satoshi)" }}
    >
      <Navbar />
      <div className="pt-[60px]">
        <Hero />
        <HowItWorks />
        <Services />
        <DownloadApp />
        <Footer />
      </div>
    </div>
  );
}
