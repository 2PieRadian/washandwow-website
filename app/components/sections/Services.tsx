import { WixMadeForDisplayFont } from "@/app/fonts";
import Container from "../layout/Container";
import ServicesSvg from "../svg/ServicesSvg";

function ServiceItem({
  image,
  title,
  description,
  price,
  buttonText,
  steamPress = false,
}: {
  image: React.ReactNode;
  title: string;
  description: string;
  price: number;
  buttonText: string;
  steamPress?: boolean;
}) {
  const steamPressClass = steamPress
    ? "pt-[20px] pr-[20px] pb-[20px] pl-[5px]"
    : "px-[20px] py-[20px]";

  const steamPressImageDivClass = steamPress
    ? "flex-3"
    : "max-w-[250px] min-w-[100px]";

  return (
    <div
      className={`bg-gradient-to-b from-[#F7F3EF] to-[#FFFFFF] border border-[#D9CDC0] rounded-[40px] shadow-[4px_4px_15px_2px_#F6F2EE,inset_4px_4px_30px_1px_#FFFFFF] flex items-center ${steamPressClass} gap-[20px]`}
    >
      <div className={`${steamPressImageDivClass}`}>{image}</div>

      <div className={`flex flex-col gap-[10px] ${steamPress ? "flex-2" : ""}`}>
        <h3 className="text-[#584E46] font-semibold text-xl">{title}</h3>
        <p className="text-[#615449] text-md">{description}</p>
        <p className="text-[#6B635C] text-md">
          Starting at <span className="font-bold">₹{price}/kg</span>
        </p>

        <button className="w-fit px-[20px] py-[10px] bg-gradient-to-r from-[#D9C9C3] to-[#C5AEA5] border border-[#C8B1A8] rounded-[57px] shadow-[3px_3px_12px_rgba(134,116,109,0.3),inset_1px_1px_3px_#FFFFFF] text-white font-semibold">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

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

      <div className="grid grid-cols-2 gap-[20px] max-w-[1200px] mx-auto mt-[100px]">
        <ServiceItem
          image={
            <img
              src="/images/services/washandfold.png"
              alt="Wash and Fold"
              className="w-full object-cover"
            />
          }
          title="Wash and Fold"
          description="Professionally washed, gently dried, and neatly folded. Ideal for weekly laundry and daily essentials."
          price={79}
          buttonText="Get it Pressed"
        />

        <ServiceItem
          image={
            <img
              src="/images/services/blazer.png"
              alt="Premium Dry Cleaning"
              className="w-full object-cover"
            />
          }
          title="Premium Dry Cleaning"
          description="Experts cleaning for suits, dresses, and delicate fabrics. Includes hand finishing for a flawless, pressed look."
          price={199}
          buttonText="Schedule Service"
        />

        <ServiceItem
          image={
            <img
              src="/images/services/steampress.png"
              alt="Crisp Steam Press"
              className="w-full object-cover"
            />
          }
          title="Crisp Steam Press"
          description="Precise Steam Pressing for crisp, wrinkle-free shirts, pants, and garments."
          price={15}
          buttonText="Get it Pressed"
          steamPress={true}
        />

        <ServiceItem
          image={
            <img
              src="/images/services/washandfold.png"
              alt="Laundry"
              className="w-full object-cover"
            />
          }
          title="Everyday Wash and Fold"
          description="Professionally washed, gently dried, and neatly folded. Ideal for weekly laundry and daily essentials."
          price={79}
          buttonText="Get it Pressed"
        />
      </div>
    </div>
  );
}
