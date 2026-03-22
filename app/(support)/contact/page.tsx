import Container from "@/app/components/layout/Container";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

const SUPPORT_EMAIL = "support@washandwow.in";
const SUPPORT_PHONE = "9318387705";
const BUSINESS_EMAIL = "support@washandwow.in";
const BUSINESS_ADDRESS = "123, Location Here";
const SUPPORT_HOURS = "9:00 AM – 8:00 PM, All Days";

export const metadata: Metadata = {
  title: "Contact Us | Wash & Wow",
  description:
    "Reach Wash & Wow for customer support, order help, partnerships, and general questions.",
};

function Section({
  emoji,
  title,
  children,
}: {
  emoji: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-28 border-t border-[#E8DFD6] pt-10 first:border-0 first:pt-0">
      <h2
        className="mb-5 flex flex-wrap items-center gap-2 text-xl font-semibold text-[#33302E] sm:text-2xl"
        style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
      >
        <span aria-hidden className="select-none">
          {emoji}
        </span>
        {title}
      </h2>
      <div className="space-y-4 text-[18px] leading-relaxed text-[#5E5450]">
        {children}
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = href ? (
    <a
      href={href}
      className="font-medium text-[#33302E] underline decoration-[#DDD2C8] underline-offset-2 transition-colors hover:text-orange hover:decoration-orange"
    >
      {value}
    </a>
  ) : (
    <span className="font-medium text-[#33302E]">{value}</span>
  );
  return (
    <div className="flex gap-3 rounded-xl border border-[#E8DFD6] bg-white px-4 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FBF6F2] text-orange">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[#91776C]">
          {label}
        </p>
        <p className="mt-1 text-[18px] leading-snug">{inner}</p>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="ml-1 space-y-2 border-l-2 border-[#E8DFD6] pl-4">
      {items.map((item) => (
        <li key={item} className="relative text-[18px] leading-relaxed">
          <span className="absolute -left-[21px] top-2 h-1.5 w-1.5 rounded-full bg-orange" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function page() {
  return (
    <div style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <Container
        isMaxWidth={true}
        className="mt-[70px] flex min-h-[calc(70svh-70px)] items-center justify-between gap-16 px-[20px] pb-6 pt-10 md:pb-8 md:pt-14"
      >
        <div>
          <h1
            className="text-3xl font-semibold text-[#33302E] sm:text-4xl"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            Contact Us
          </h1>
          <p className="mt-4 text-[18px] leading-relaxed text-dark-blue">
            We&apos;re here to help! Whether you have a question, need support,
            or just want to say hello — the Wash &amp; Wow team is always ready
            to assist you.
          </p>
        </div>

        <div className="hidden shrink-0 min-[950px]:block">
          <img
            src="/images/contact/contact.png"
            alt="Contact illustration"
            className="max-w-[400px] cursor-default transition-transform duration-500 ease-out will-change-transform hover:-translate-y-3 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
          />
        </div>
      </Container>

      <Container isMaxWidth={true} className="px-[20px] pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <Section emoji="📱" title="Customer Support">
            <p>Have questions about your order, pickup, or delivery?</p>
            <div className="mt-4 flex flex-col gap-3">
              <InfoRow
                icon={<Mail className="h-5 w-5" aria-hidden />}
                label="Email"
                value={SUPPORT_EMAIL}
                href={`mailto:${SUPPORT_EMAIL}`}
              />
              <InfoRow
                icon={<Phone className="h-5 w-5" aria-hidden />}
                label="Phone"
                value={SUPPORT_PHONE}
                href={`tel:${SUPPORT_PHONE}`}
              />
              <InfoRow
                icon={<Clock className="h-5 w-5" aria-hidden />}
                label="Support hours"
                value={SUPPORT_HOURS}
              />
            </div>
          </Section>

          <Section emoji="📍" title="Our Location">
            <p className="font-semibold text-[#33302E]">Wash &amp; Wow</p>
            <div className="flex gap-3 rounded-xl border border-[#E8DFD6] bg-[#FBF6F2]/60 px-4 py-4">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-orange"
                aria-hidden
              />
              <p className="text-[18px] text-[#5E5450]">{BUSINESS_ADDRESS}</p>
            </div>
          </Section>

          <Section emoji="💬" title="Get in Touch">
            <p>You can also reach out to us by filling out the form below:</p>
            <p className="text-[16px] text-[#91776C]">
              We usually respond within 24 hours.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Section>

          <Section emoji="📦" title="Order Support">
            <p>For faster assistance, please include:</p>
            <BulletList
              items={[
                "Your registered phone number",
                "Order ID (if applicable)",
              ]}
            />
            <p className="pt-2 text-[17px] text-[#5E5450]">
              This helps us resolve your issue quickly 🚀
            </p>
          </Section>

          <Section emoji="📲" title="App Support">
            <p>
              Since all services are managed through our mobile application, we
              recommend:
            </p>
            <BulletList
              items={[
                "Checking order status in the app",
                "Using in-app support (if available)",
              ]}
            />
          </Section>

          <Section emoji="🤝" title="Business & Partnerships">
            <p>Interested in partnering with Wash &amp; Wow?</p>
            <div className="mt-4 space-y-3 rounded-xl border border-[#E8DFD6] bg-white p-4 sm:p-5">
              <p className="flex flex-wrap items-center gap-2 text-[18px]">
                <span className="font-semibold text-[#33302E]">📧 Email:</span>
                <a
                  href={`mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent("Partnership Inquiry")}`}
                  className="font-medium text-orange underline decoration-orange/40 underline-offset-2 hover:decoration-orange"
                >
                  {BUSINESS_EMAIL}
                </a>
              </p>
              <p className="text-[16px] text-[#91776C]">
                Subject: Partnership Inquiry
              </p>
            </div>
          </Section>

          <Section emoji="⚠️" title="Important Note">
            <BulletList
              items={[
                "Please do not hand over garments without a confirmed booking in the app",
                "For urgent issues, we recommend calling instead of emailing",
              ]}
            />
          </Section>

          <Section emoji="💙" title="We’re Here For You">
            <p>
              At Wash &amp; Wow, we believe in making laundry effortless and
              stress-free. If something isn&apos;t right, we&apos;ll do our best
              to fix it — quickly and fairly.
            </p>
          </Section>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
