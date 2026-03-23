import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Wash & Wow - Affordable Laundry & Dry Cleaning Services",
  description:
    "Transparent pricing for laundry, dry cleaning, and garment care services. Per kg laundry starting at ₹59, dry cleaning per item, and monthly subscription plans. Free pickup & delivery.",
  keywords: [
    "laundry pricing",
    "dry cleaning prices",
    "laundry service cost",
    "wash and fold price",
    "laundry subscription",
    "affordable laundry",
    "laundry near me",
  ],
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
