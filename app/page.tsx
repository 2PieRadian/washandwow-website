import Navbar from "./components/layout/Navbar";
import MobileNavbar from "./components/layout/MobileNavbar";
import DownloadApp from "./components/sections/DownloadApp";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Services from "./components/sections/Services";
import Reviews from "./components/sections/Reviews";
import { SatoshiFont } from "./fonts";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div
      className={`${SatoshiFont.variable} overflow-x-hidden`}
      style={{ fontFamily: "var(--font-satoshi)" }}
    >
      <Navbar />
      <MobileNavbar />

      <div className="pt-[60px]">
        <Hero />
        <HowItWorks />
        <Services />
        <Reviews />
        <DownloadApp />
        <Footer />
      </div>
    </div>
  );
}
