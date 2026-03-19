import { WixMadeForDisplayFont } from "@/app/fonts";
import { Mail, MapPin, Phone } from "lucide-react";
import AppleIcon from "../icons/AppleIcon";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import Link from "next/link";

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-[10px] text-brown-footer-contact-icon">
      {icon}
      <p className="text-md text-brown-footer-contact-text">{text}</p>
    </div>
  );
}

function AppleDownloadButton() {
  return (
    <div className="flex items-center justify-center gap-[10px] px-[15px] py-[8px] rounded-[10px] bg-brown-footer-download-apple-bg text-white w-fit shadow-lg cursor-pointer">
      <AppleIcon className="w-[40px]" />

      <div>
        <p className="text-xs">Download on the</p>
        <p className="font-bold">App Store</p>
      </div>
    </div>
  );
}

function GoogleDownloadButton() {
  return (
    <div className="flex items-center justify-center gap-[10px] bg-brown-footer-download-google-bg shadow-lg text-white px-[15px] py-[8px] rounded-[10px] w-fit cursor-pointer">
      <GooglePlayIcon className="w-[40px]" />

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

      <div className="mt-[10px]">
        {links.map((link) => (
          <p key={link} className="text-brown-footer-contact-text text-md">
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
                className={`text-xl font-bold text-brown ${WixMadeForDisplayFont.className}`}
                style={{ fontFamily: "var(--font-wix-made-for-display)" }}
              >
                Wash & <span className="text-orange">Wow</span>
              </h1>
              <p>Wash, dry, fold - freshness delivered</p>
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
            <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
            <Link href="/terms-and-conditions">Terms and Conditions </Link>
          </p>
        </div>
      </div>
    </>
  );
}
