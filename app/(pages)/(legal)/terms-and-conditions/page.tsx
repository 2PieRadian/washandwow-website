import Container from "@/app/components/layout/Container";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";

export default function page() {
  return (
    <div style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <Container
        isMaxWidth={true}
        className="mt-[70px] flex items-center justify-between px-[20px] min-h-[calc(70svh-70px)]"
      >
        <div>
          <h1
            className={`text-3xl font-semibold text-[#33302E]`}
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            Terms and Conditions
          </h1>

          <p className="text-dark-blue text-[16px] sm:text-md mt-[10px]">
            A few clear guidelines to keep everything fair and hassle-free.
          </p>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
