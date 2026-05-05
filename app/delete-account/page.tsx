import {
  PageHeroAnimation,
  PageSectionsAnimation,
} from "@/app/components/animations/PageAnimations";
import Container from "@/app/components/layout/Container";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";
import { canonicalPath } from "@/app/lib/site-config";
import type { Metadata } from "next";
import {
  AlertTriangle,
  Clock,
  Mail,
  Smartphone,
  Trash2,
} from "lucide-react";

const SUPPORT_EMAIL = "support@washandwow.com";
const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "How to delete your Wash & Wow account and personal data from the mobile app. Permanent deletion, what we remove, processing time, and support.",
  alternates: { canonical: canonicalPath("/delete-account") },
  openGraph: {
    url: canonicalPath("/delete-account"),
    title: "Delete Your Wash & Wow Account",
    description:
      "Delete your account and personal data anytime from the Wash & Wow app. Steps, data removed, and support.",
  },
};

const STEPS = [
  "Open the Wash & Wow mobile app.",
  "Go to **Profile**.",
  "Navigate to **Account Privacy** or **Settings** (wording may vary slightly by app version).",
  'Tap **Request Account Deletion**.',
  "Confirm your request when prompted.",
] as const;

const DELETED_DATA = [
  "Name",
  "Phone number",
  "Address",
  "Booking history",
] as const;

function StepText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const inner = part.slice(2, -2);
          return (
            <strong key={i} className="font-semibold text-[#3F3936]">
              {inner}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

export default function DeleteAccountPage() {
  return (
    <div style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <PageHeroAnimation variant="centeredSequential">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#FFFBF6] via-[#FDF9F5] to-white" />
          <Container
            isMaxWidth={true}
            className="relative mt-[70px] flex min-h-[calc(36svh-70px)] items-center justify-center px-[20px] pb-8 pt-12 md:pb-12 md:pt-16"
          >
            <div className="max-w-3xl text-center">
              <div className="page-hero-subtitle gsap-animate mb-4 inline-flex items-center gap-2 rounded-full border border-[#E8DFD6] bg-white/80 px-4 py-2 text-sm text-[#7B6F69] opacity-0">
                <Trash2 className="h-4 w-4" aria-hidden />
                Account &amp; data
              </div>
              <h1
                className="page-hero-title gsap-animate text-3xl font-bold tracking-tight text-[#33302E] opacity-0 sm:text-4xl md:text-[2.75rem] md:leading-tight"
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                Delete Your Wash &amp; Wow Account
              </h1>
              <p className="page-hero-meta gsap-animate mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-[#5E5450] opacity-0 sm:text-[17px]">
                You can delete your Wash &amp; Wow account and associated
                personal data at any time directly from the mobile app. This
                page explains how, what we remove, and how to get help if you
                need it.
              </p>
            </div>
          </Container>
        </div>
      </PageHeroAnimation>

      <PageSectionsAnimation sequentialSections>
        <Container isMaxWidth={true} className="px-[20px] pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl space-y-6">
            <section
              id="steps"
              className="page-section gsap-animate scroll-mt-28 rounded-[24px] border border-[#E8DFD6]/50 bg-linear-to-br from-[#FEFEFE] to-[#F8F5F2] p-6 opacity-0 shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9)] sm:rounded-[28px] sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-orange to-[#FF7700] text-white shadow-[0_6px_14px_rgba(255,119,0,0.28)]">
                  <Smartphone className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <h2
                  className="text-xl font-semibold text-[#33302E] sm:text-2xl"
                  style={{
                    fontFamily: WixMadeForDisplayFont.style.fontFamily,
                  }}
                >
                  Delete your account in the app
                </h2>
              </div>
              <p className="mb-6 text-[15px] leading-relaxed text-[#5E5450] sm:text-[16px]">
                Account deletion is initiated only inside the official Wash
                &amp; Wow app so we can verify your identity and complete your
                request securely.
              </p>
              <ol className="grid gap-3">
                {STEPS.map((step, index) => (
                  <li
                    key={index}
                    className="flex gap-3 rounded-xl border border-[#E8DFD6]/60 bg-white/90 px-4 py-3.5 text-[15px] leading-relaxed text-[#5E5450] shadow-[2px_2px_8px_rgba(209,199,189,0.22)] sm:text-[16px]"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FFF5EE] text-sm font-semibold text-[#C45C2A]"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <span className="pt-0.5">
                      <StepText text={step} />
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section
              id="data-handling"
              className="page-section gsap-animate scroll-mt-28 rounded-[24px] border border-[#E8DFD6]/50 bg-linear-to-br from-[#FEFEFE] to-[#F8F5F2] p-6 opacity-0 shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9)] sm:rounded-[28px] sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-orange to-[#FF7700] text-white shadow-[0_6px_14px_rgba(255,119,0,0.28)]">
                  <Trash2 className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <h2
                  className="text-xl font-semibold text-[#33302E] sm:text-2xl"
                  style={{
                    fontFamily: WixMadeForDisplayFont.style.fontFamily,
                  }}
                >
                  What data is deleted
                </h2>
              </div>
              <p className="mb-4 text-[15px] leading-relaxed text-[#5E5450] sm:text-[16px]">
                When your account deletion is completed, we remove personal
                information tied to your profile, including:
              </p>
              <ul className="mb-6 grid gap-2">
                {DELETED_DATA.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl bg-white/85 px-4 py-3 text-[15px] text-[#5E5450] shadow-[2px_2px_8px_rgba(209,199,189,0.3),-2px_-2px_8px_rgba(255,255,255,0.9)] sm:text-[16px]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-4 rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4 sm:p-5">
                <div className="flex gap-3">
                  <AlertTriangle
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden
                  />
                  <p className="text-[15px] leading-relaxed text-[#5E5450] sm:text-[16px]">
                    <strong className="font-semibold text-[#3F3936]">
                      Deletion is permanent.
                    </strong>{" "}
                    You will not be able to recover your account, preferences,
                    or the data listed above after the process is finished.
                  </p>
                </div>
                <div className="flex gap-3 border-t border-amber-200/70 pt-4">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                    aria-hidden
                  />
                  <p className="text-[15px] leading-relaxed text-[#5E5450] sm:text-[16px]">
                    <strong className="font-semibold text-[#3F3936]">
                      Processing time.
                    </strong>{" "}
                    We typically complete account deletion and associated data
                    removal within{" "}
                    <strong className="font-semibold text-[#3F3936]">
                      7 business days
                    </strong>{" "}
                    of a confirmed in-app request. We may retain certain
                    information only where required by law (for example, limited
                    records for taxes, fraud prevention, or disputes), in line
                    with our Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="support"
              className="page-section gsap-animate scroll-mt-28 rounded-[24px] border border-[#E8DFD6]/50 bg-linear-to-br from-[#FEFEFE] to-[#F8F5F2] p-6 opacity-0 shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9)] sm:rounded-[28px] sm:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-orange to-[#FF7700] text-white shadow-[0_6px_14px_rgba(255,119,0,0.28)]">
                  <Mail className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <h2
                  className="text-xl font-semibold text-[#33302E] sm:text-2xl"
                  style={{
                    fontFamily: WixMadeForDisplayFont.style.fontFamily,
                  }}
                >
                  Need help?
                </h2>
              </div>
              <p className="text-[15px] leading-relaxed text-[#5E5450] sm:text-[16px]">
                If you cannot find the option in your app version, the
                confirmation fails, or you have questions about your request,
                contact our support team at{" "}
                <a
                  href={SUPPORT_MAILTO}
                  className="font-semibold text-[#C45C2A] underline decoration-orange/40 underline-offset-2 transition hover:text-orange"
                >
                  {SUPPORT_EMAIL}
                </a>
                . Please include the phone number or email associated with your
                Wash &amp; Wow account so we can assist you quickly.
              </p>
            </section>

            <p className="page-section gsap-animate px-1 text-center text-[13px] leading-relaxed text-[#8A7E78] opacity-0 sm:text-sm">
              This information is provided to help you exercise your choices
              about your Wash &amp; Wow account. For full details on how we
              handle personal data, see our{" "}
              <a
                href={canonicalPath("/privacy-policy")}
                className="font-medium text-[#C45C2A] underline decoration-orange/30 underline-offset-2 hover:text-orange"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </Container>
      </PageSectionsAnimation>

      <Footer />
    </div>
  );
}
