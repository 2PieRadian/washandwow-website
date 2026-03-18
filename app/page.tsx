"use client";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import { SatoshiFont } from "./fonts";

export default function Home() {
  return (
    <div
      className={`${SatoshiFont.variable}`}
      style={{ fontFamily: "var(--font-satoshi)" }}
    >
      <Navbar />
      <Hero />
      <HowItWorks />
    </div>
  );
}
