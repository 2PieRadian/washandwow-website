import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import ServiceCategoriesGrid from "@/app/components/sections/ServiceCategoriesGrid";
import ServicesPageHeader from "@/app/components/sections/ServicesPageHeader";
import ServicesHubBlurb from "@/app/components/sections/ServicesHubBlurb";
import { SatoshiFont } from "@/app/fonts";
import type { Metadata } from "next";
import { canonicalPath } from "@/app/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Laundry, home cleaning, doorstep car wash, and pest control — explore Wash & Wow services and book from the app.",
  alternates: { canonical: canonicalPath("/services") },
  openGraph: {
    url: canonicalPath("/services"),
    description:
      "One partner for laundry, home cleaning, car care, and pest control.",
  },
};

export default function ServicesHubPage() {
  return (
    <div
      className="overflow-x-hidden antialiased"
      style={{ fontFamily: SatoshiFont.style.fontFamily }}
    >
      <Navbar />
      <div className="pt-[60px]">
        <ServicesPageHeader />

        <ServicesHubBlurb />

        <ServiceCategoriesGrid showHeader={false} deepStagger compactSpacing />

        <Footer />
      </div>
    </div>
  );
}
