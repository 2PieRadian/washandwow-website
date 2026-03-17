"use client";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import { SatoshiFont } from "./fonts";

export default function Home() {
  return (
    <div
      className={`${SatoshiFont.variable}`}
      style={{ fontFamily: "var(--font-satoshi)" }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}
