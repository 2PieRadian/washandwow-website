import { WixMadeForDisplayFont } from "@/app/fonts";
import Container from "../layout/Container";

function Step({
  title,
  description,
  button,
  buttonBgColor,
  textColor = "#ffffff",
  stepNumber,
}: {
  title: string;
  description: string;
  button: string;
  buttonBgColor: string;
  textColor?: string;
  stepNumber: number;
}) {
  return (
    <div className="group flex flex-col gap-[5px] p-[15px] sm:p-[20px] rounded-[20px] bg-white/40 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:hover:bg-white/50 md:hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-400 cursor-default">
      <div className="flex items-center gap-[25px]">
        <span
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold md:group-hover:scale-110 transition-transform duration-300 shrink-0"
          style={{ backgroundColor: buttonBgColor }}
        >
          {stepNumber}
        </span>
        <h1
          className={`text-lg sm:text-xl font-medium text-step-heading md:group-hover:text-[#584E46] transition-colors duration-300 ${WixMadeForDisplayFont.className}`}
          style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
        >
          {title}
        </h1>
      </div>
      <p className="text-[16px] sm:text-step-text ml-[52px] sm:ml-[57px] md:group-hover:text-[#6B635C] transition-colors duration-300">
        {description}
      </p>
      <button
        className={`group/btn relative select-none rounded-[28px] shadow-[2px_2px_5px_rgba(0,0,0,0.06),_inset_2px_2px_4.3px_rgba(255,255,255,0.4)] md:hover:shadow-[4px_4px_12px_rgba(0,0,0,0.15),_inset_2px_2px_4.3px_rgba(255,255,255,0.4)] px-[12px] sm:px-[15px] py-[5px] w-fit cursor-pointer overflow-hidden md:hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 ml-[52px] sm:ml-[57px] mt-[5px] flex items-center gap-[8px] text-[14px] sm:text-base`}
        style={{
          backgroundColor: buttonBgColor,
          color: textColor,
        }}
      >
        <span className="relative z-10">{button}</span>
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 md:group-hover/btn:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <Container
        className="bg-gradient-to-b from-[#FFFBF6] to-[#E6DACD] py-[90px] sm:py-[70px] md:py-[100px] px-[20px]"
        isMaxWidth={false}
      >
        <div className="text-center flex flex-col gap-[5px]">
          <p className="text-lg sm:text-xl">Simple Steps</p>
          <h1
            className={`text-2xl sm:text-3xl font-semibold ${WixMadeForDisplayFont.className}`}
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            How It Works
          </h1>
          <p className="text-dark-brown text-[16px] sm:text-md">
            Here’s how we turn everyday laundry into something you’ll love.
          </p>
        </div>

        <Container
          isMaxWidth={true}
          className="mt-[40px] sm:mt-[50px] md:mt-[60px] flex flex-col-reverse md:flex-row items-center gap-[40px] md:gap-[60px] lg:gap-[100px] justify-center"
        >
          <div className="group hidden md:block">
            <img
              src="/images/how-it-works/washing-machine.png"
              alt="How It Works"
              className="w-[350px] lg:w-[400px] group-hover:scale-[1.02] transition-transform duration-500 drop-shadow-lg hover:drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-[10px] sm:gap-[15px] max-w-[500px] w-full">
            <Step
              title="Choose Your Service (in the App)"
              description="Select the service that fits your needs."
              button="Continue to Schedule"
              buttonBgColor="#FF9431"
              stepNumber={1}
            />

            <Step
              title="Pick a Convenient Time"
              description="Select your preferred pickup date and time slot."
              button="Add Pickup Details"
              buttonBgColor="#BA9D91"
              stepNumber={2}
            />

            <Step
              title="Confirm Your Address"
              description="Tell us where to collect your laundry. Add delivery instructions if needed"
              button="Review Order"
              buttonBgColor="#FF9431"
              stepNumber={3}
            />

            <Step
              title="Review & Confirm"
              description="Double-check your service, schedule, and total amount. Once confirmed, we’ll take it from there."
              button="Confirm Pickup"
              buttonBgColor="#BA9D91"
              stepNumber={4}
            />
          </div>
        </Container>
      </Container>
    </section>
  );
}
