import type { Metadata } from "next";
import Navbar from "./components/layout/Navbar";
import HomeHashScroll from "./components/HomeHashScroll";
import OrganizationJsonLd from "./components/seo/OrganizationJsonLd";
import DownloadApp from "./components/sections/DownloadApp";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Reviews from "./components/sections/Reviews";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import { SatoshiFont } from "./fonts";
import { canonicalPath } from "./lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: canonicalPath("/") },
  openGraph: { url: canonicalPath("/") },
};

export default function Home() {
  return (
    <div
      className={`overflow-x-hidden`}
      style={{ fontFamily: SatoshiFont.style.fontFamily }}
    >
      <OrganizationJsonLd />
      <Navbar />
      <HomeHashScroll />

      <div className="pt-[60px]">
        <Hero />
        <HowItWorks />
        <Services />
        <Reviews />
        <WhyChooseUs />
        <DownloadApp />
        <Footer />
      </div>
    </div>
  );
}
