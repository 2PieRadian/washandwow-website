import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont } from "@/app/fonts";

export default function page() {
  return (
    <div style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <div>
        <h1>Pricing</h1>
      </div>

      <Footer />
    </div>
  );
}
