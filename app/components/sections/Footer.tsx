import { WixMadeForDisplayFont } from "@/app/fonts";
import { Mail, MapPin, Phone } from "lucide-react";
import AppleIcon from "../icons/AppleIcon";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import Link from "next/link";

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="group flex items-center gap-[10px] text-brown-footer-contact-icon cursor-pointer hover:text-orange transition-colors duration-300">
      <span className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <p className="text-md text-brown-footer-contact-text group-hover:text-[#584E46] transition-colors duration-300">
        {text}
      </p>
    </div>
  );
}

function AppleDownloadButton() {
  return (
    <div className="group flex items-center justify-center gap-[10px] px-[15px] py-[8px] rounded-[10px] bg-brown-footer-download-apple-bg text-white w-fit shadow-lg cursor-pointer hover:scale-[1.05] hover:shadow-xl active:scale-[0.98] transition-all duration-300">
      <AppleIcon className="w-[40px] group-hover:scale-110 transition-transform duration-300" />

      <div>
        <p className="text-xs">Download on the</p>
        <p className="font-bold">App Store</p>
      </div>
    </div>
  );
}

function GoogleDownloadButton() {
  return (
    <div className="group flex items-center justify-center gap-[10px] bg-brown-footer-download-google-bg shadow-lg text-white px-[15px] py-[8px] rounded-[10px] w-fit cursor-pointer hover:scale-[1.05] hover:shadow-xl active:scale-[0.98] transition-all duration-300">
      <GooglePlayIcon className="w-[40px] group-hover:scale-110 transition-transform duration-300" />

      <div>
        <p className="text-[#746159] text-xs">Get it on</p>
        <p className="text-[#91776C] font-bold">Google Play</p>
      </div>
    </div>
  );
}

function LinkItem({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h1 className="text-[#91776C] font-bold text-lg">{title}</h1>

      <div className="mt-[10px] flex flex-col gap-[5px]">
        {links.map((link) => (
          <p
            key={link}
            className="text-brown-footer-contact-text text-md cursor-pointer hover:text-orange hover:translate-x-1 transition-all duration-300"
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      {/* Background Div */}
      <div className="bg-[#FBF6F2] py-[80px] px-[20px]">
        {/* Container Div */}
        <div className="w-full max-w-[1200px] mx-auto flex items-start justify-between">
          {/* Left Content */}
          <div>
            {/* Logo and Description */}
            <div>
              <h1
                className={`text-xl font-bold ${WixMadeForDisplayFont.className} cursor-pointer hover:scale-[1.05] transition-transform duration-300`}
                style={{ fontFamily: "var(--font-wix-made-for-display)" }}
              >
                <span className="text-brown hover:text-dark-brown transition-colors duration-300">
                  Wash
                </span>
                <span className="text-brown hover:text-dark-brown transition-colors duration-300">
                  {" "}
                  &
                </span>{" "}
                <span className="text-orange hover:text-[#FF7700] transition-colors duration-300">
                  Wow
                </span>
              </h1>
              <p className="text-[#5E5450]">
                Wash, dry, fold - freshness delivered
              </p>
            </div>

            {/* Contact Items */}
            <div className="mt-[30px] flex flex-col gap-[10px]">
              <ContactItem icon={<Phone />} text="9318387705" />
              <ContactItem icon={<Mail />} text="support@washandwow.in" />
              <ContactItem icon={<MapPin />} text="123, Location Here" />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex gap-[80px] items-start">
            <LinkItem
              title="Services"
              links={["Laundry", "Dry Cleaning", "Pricing"]}
            />

            <LinkItem
              title="Company"
              links={["About Us", "Our Team", "Careers"]}
            />

            <LinkItem title="Help" links={["FAQs", "Contact", "App Support"]} />

            <div>
              <h1 className="text-[#91776C] font-bold text-lg">Get Our App</h1>

              <div className="flex flex-col gap-[10px] mt-[10px]">
                <GoogleDownloadButton />
                <AppleDownloadButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright  */}
      <div className="bg-[#F3EDE8] border-t border-[#DDD2C8] text-[#5E5450] px-[20px]">
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between py-[30px]">
          <p>© 2026 Wash and Wow. All Rights Reserved</p>
          <p>
            <Link
              href="/privacy-policy"
              className="hover:text-orange hover:underline transition-all duration-300"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/terms-and-conditions"
              className="hover:text-orange hover:underline transition-all duration-300"
            >
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
