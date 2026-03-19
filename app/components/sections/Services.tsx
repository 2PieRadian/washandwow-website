import { WixMadeForDisplayFont } from "@/app/fonts";
import Container from "../layout/Container";
import ServicesSvg from "../svg/ServicesSvg";

export default function Services() {
  return (
    <div className="py-[100px] relative">
      <ServicesSvg />

      <Container
        className="flex items-center justify-center max-w-[1200px]"
        isMaxWidth={true}
      >
        <div className="w-fit flex items-center justify-center relative">
          <img
            src="/images/services/racks.png"
            alt=""
            className="w-[600px] pr-[110px]"
          />
        </div>

        <div className="text-right self-start mt-[20px] flex flex-col justify-center max-w-[400px]">
          <h1 className="text-2xl text-orange-services">Our Services</h1>
          <h2
            className={`text-4xl font-semibold text-brown-services ${WixMadeForDisplayFont.className}`}
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            Care Designed <br /> for Every Fabric
          </h2>
          <p className="text-dark-brown text-md mt-[20px]">
            From everyday laundry to delicate garments, we handle every piece
            with precision and care.
          </p>
        </div>
      </Container>
    </div>
  );
}
