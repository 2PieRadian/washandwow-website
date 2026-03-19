import { WixMadeForDisplayFont } from "@/app/fonts";
import Container from "../layout/Container";

function Step({
  title,
  description,
  button,
  buttonBgColor,
  textColor = "#ffffff",
}: {
  title: string;
  description: string;
  button: string;
  buttonBgColor: string;
  textColor?: string;
}) {
  return (
    <div className="flex flex-col gap-[5px]">
      <h1
        className={`text-xl font-medium text-step-heading ${WixMadeForDisplayFont.className}`}
        style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
      >
        {title}
      </h1>
      <p className="text-step-text">{description}</p>
      <button
        className={`rounded-[28px] shadow-[2px_2px_5px_rgba(0,0,0,0.06),_inset_2px_2px_4.3px_rgba(255,255,255,0.4)] px-[15px] py-[5px] w-fit cursor-pointer`}
        style={{
          backgroundColor: buttonBgColor,
          color: textColor,
        }}
      >
        {button}
      </button>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <Container
      className="bg-gradient-to-b from-[#FFFBF6] to-[#E6DACD] mt-[80px] py-[100px]"
      isMaxWidth={false}
    >
      <div className="text-center flex flex-col gap-[5px]">
        <p className="text-xl">Simple Steps</p>
        <h1
          className={`text-3xl font-semibold ${WixMadeForDisplayFont.className}`}
          style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
        >
          How It Works
        </h1>
        <p className="text-dark-brown text-md">
          Here’s how we turn everyday laundry into something you’ll love.
        </p>
      </div>

      <Container
        isMaxWidth={true}
        className="mt-[60px] flex items-center gap-[100px] justify-center"
      >
        <div className="">
          <img
            src="/images/how-it-works/washing-machine.png"
            alt="How It Works"
            className="w-[400px]"
          />
        </div>

        <div className="flex flex-col gap-[30px] max-w-[400px] ">
          <Step
            title="Choose Your Service"
            description="Select the service that fits your needs."
            button="Continue to Schedule"
            buttonBgColor="#FF9431"
          />

          <Step
            title="Pick a Convenient Time"
            description="Select your preferred pickup date and time slot."
            button="Add Pickup Details"
            buttonBgColor="#BA9D91"
          />

          <Step
            title="Confirm Your Address"
            description="Tell us where to collect your laundry. Add delivery instructions if needed"
            button="Review Order"
            buttonBgColor="#FF9431"
          />

          <Step
            title="Review & Confirm"
            description="Double-check your service, schedule, and total amount. Once confirmed, we’ll take it from there."
            button="Confirm Pickup"
            buttonBgColor="#BA9D91"
          />
        </div>
      </Container>
    </Container>
  );
}
