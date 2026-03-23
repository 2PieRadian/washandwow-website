"use client";

import { useState } from "react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import Container from "@/app/components/layout/Container";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";
import OrangeGradientButton from "@/app/components/ui/buttons/OrangeGradientButton";
import {
  PageHeroAnimation,
  PageSectionsAnimation,
} from "@/app/components/animations/PageAnimations";
import {
  Shirt,
  Sparkles,
  Zap,
  Package,
  Truck,
  Shield,
  Star,
  ChevronRight,
  Check,
  Crown,
  Users,
  Gem,
  Droplets,
  Wind,
  Flame,
  SprayCan,
  Timer,
} from "lucide-react";

type PricingTab = "laundry" | "dryCleaning" | "subscription";

const laundryServices = [
  {
    title: "Wash & Fold",
    price: 59,
    unit: "kg",
    description:
      "Ideal for everyday wear like t-shirts, jeans, and home clothes.",
    features: [
      "Machine washed",
      "Tumble dried",
      "Neatly folded",
      "48-hour delivery",
    ],
    icon: <Package className="h-6 w-6" />,
    gradient: {
      from: "#D4B8AD",
      to: "#A68B7B",
      shadow: "rgba(166,139,123,0.3)",
    },
  },
  {
    title: "Wash & Iron",
    price: 89,
    unit: "kg",
    description: "Includes washing, drying, and professional steam ironing.",
    features: [
      "Machine washed",
      "Steam ironed",
      "Wrinkle-free finish",
      "48-hour delivery",
    ],
    icon: <Wind className="h-6 w-6" />,
    gradient: {
      from: "#98BCD6",
      to: "#6A9BC3",
      shadow: "rgba(106,155,195,0.3)",
    },
  },
  {
    title: "Premium Laundry",
    price: 119,
    unit: "kg",
    description: "Enhanced care with fabric softener and mild stain treatment.",
    features: [
      "Fabric softener",
      "Stain treatment",
      "Premium packaging",
      "48-hour delivery",
    ],
    icon: <Sparkles className="h-6 w-6" />,
    gradient: { from: "#FFAB5C", to: "#FF7700", shadow: "rgba(255,119,0,0.3)" },
    popular: true,
  },
  {
    title: "Express Laundry",
    price: 149,
    unit: "kg",
    description: "Priority processing with 24-hour delivery for urgent needs.",
    features: [
      "Priority processing",
      "24-hour delivery",
      "All premium features",
      "SMS updates",
    ],
    icon: <Zap className="h-6 w-6" />,
    gradient: {
      from: "#E6C29E",
      to: "#D4A574",
      shadow: "rgba(212,165,116,0.3)",
    },
  },
];

const dryCleaningCategories = [
  {
    title: "Upper Wear",
    icon: <Shirt className="h-5 w-5" />,
    items: [
      { name: "Shirt / T-shirt", price: "₹50" },
      { name: "Designer Shirt", price: "₹80" },
      { name: "Kurta / Kurti", price: "₹80–₹120" },
      { name: "Delicate Tops", price: "₹100–₹150" },
      { name: "Blouse", price: "₹70–₹120" },
    ],
  },
  {
    title: "Bottom Wear",
    icon: <Shirt className="h-5 w-5" />,
    items: [
      { name: "Jeans", price: "₹70" },
      { name: "Trouser / Pant", price: "₹70–₹100" },
      { name: "Palazzo", price: "₹100–₹150" },
      { name: "Leggings", price: "₹60" },
    ],
  },
  {
    title: "Winter Wear",
    icon: <Flame className="h-5 w-5" />,
    items: [
      { name: "Sweater", price: "₹120–₹180" },
      { name: "Jacket (Light)", price: "₹180" },
      { name: "Heavy Jacket", price: "₹250–₹350" },
      { name: "Coat", price: "₹300–₹400" },
    ],
  },
  {
    title: "Ethnic Wear",
    icon: <Gem className="h-5 w-5" />,
    items: [
      { name: "Saree (Basic)", price: "₹150" },
      { name: "Saree (Silk / Heavy)", price: "₹250–₹500" },
      { name: "Lehenga", price: "₹400–₹800" },
      { name: "Sherwani", price: "₹300–₹600" },
      { name: "Dupatta", price: "₹80–₹150" },
    ],
  },
  {
    title: "Formal Wear",
    icon: <Crown className="h-5 w-5" />,
    items: [
      { name: "Blazer", price: "₹200–₹300" },
      { name: "Suit (2-piece)", price: "₹300–₹400" },
      { name: "Suit (3-piece)", price: "₹400–₹500" },
      { name: "Tie", price: "₹50" },
    ],
  },
  {
    title: "Home & Bedding",
    icon: <Package className="h-5 w-5" />,
    items: [
      { name: "Bedsheet (Single)", price: "₹100" },
      { name: "Bedsheet (Double)", price: "₹150" },
      { name: "Blanket", price: "₹250–₹500" },
      { name: "Quilt / Razai", price: "₹300–₹600" },
      { name: "Pillow Cover", price: "₹30" },
    ],
  },
];

const subscriptionPlans = [
  {
    title: "Basic",
    price: 999,
    period: "month",
    kgLimit: "20 kg",
    features: [
      "20 kg laundry",
      "Free pickup & delivery",
      "Standard processing",
    ],
    icon: <Package className="h-6 w-6" />,
    gradient: {
      from: "#D4B8AD",
      to: "#A68B7B",
      shadow: "rgba(166,139,123,0.3)",
    },
  },
  {
    title: "Standard",
    price: 1799,
    period: "month",
    kgLimit: "40 kg",
    features: [
      "40 kg laundry",
      "Priority service",
      "Free pickup & delivery",
      "Better value",
    ],
    icon: <Star className="h-6 w-6" />,
    gradient: { from: "#FFAB5C", to: "#FF7700", shadow: "rgba(255,119,0,0.3)" },
    popular: true,
  },
  {
    title: "Family",
    price: 3299,
    period: "month",
    kgLimit: "80 kg",
    features: [
      "80 kg laundry",
      "Shared usage",
      "Priority service",
      "Ideal for households",
    ],
    icon: <Users className="h-6 w-6" />,
    gradient: {
      from: "#98BCD6",
      to: "#6A9BC3",
      shadow: "rgba(106,155,195,0.3)",
    },
  },
  {
    title: "Premium",
    price: 4599,
    period: "month",
    kgLimit: "120 kg",
    features: [
      "120 kg laundry",
      "Premium services included",
      "Maximum savings",
      "VIP support",
    ],
    icon: <Crown className="h-6 w-6" />,
    gradient: {
      from: "#E6C29E",
      to: "#D4A574",
      shadow: "rgba(212,165,116,0.3)",
    },
  },
];

const addOnServices = [
  {
    title: "Steam Ironing",
    price: "₹10–₹20",
    unit: "per item",
    icon: <Wind className="h-5 w-5" />,
  },
  {
    title: "Stain Removal",
    price: "₹20–₹50",
    unit: "per garment",
    icon: <Droplets className="h-5 w-5" />,
  },
  {
    title: "Fabric Softener",
    price: "₹5",
    unit: "per kg",
    icon: <SprayCan className="h-5 w-5" />,
  },
  {
    title: "Antiseptic Wash",
    price: "₹5",
    unit: "per kg",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Perfumed Finish",
    price: "₹5",
    unit: "per kg",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Express Delivery",
    price: "Additional",
    unit: "charges apply",
    icon: <Timer className="h-5 w-5" />,
  },
];

function TabButton({
  active,
  onClick,
  children,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer ${
        active
          ? "bg-gradient-to-r from-[#FF7700] to-[#FFAB5C] text-white shadow-[0_4px_20px_rgba(255,119,0,0.35)]"
          : "bg-white/80 text-[#5E5450] border border-[#E8DFD6] hover:bg-white hover:border-[#D4B8AD] hover:shadow-[0_2px_12px_rgba(80,60,50,0.08)]"
      }`}
    >
      <span className={active ? "text-white" : "text-[#91776C]"}>{icon}</span>
      {children}
    </button>
  );
}

function LaundryCard({ service }: { service: (typeof laundryServices)[0] }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border ${
        service.popular ? "border-orange/30" : "border-[#E8DFD6]/50"
      } bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] p-6 sm:p-8 shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(209,199,189,0.15)] transition-all duration-300 hover:shadow-[8px_8px_20px_rgba(209,199,189,0.5),-8px_-8px_20px_rgba(255,255,255,0.95),inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(209,199,189,0.2)]`}
    >
      {service.popular && (
        <div className="absolute -right-8 top-6 rotate-45 bg-gradient-to-r from-[#FF7700] to-[#FFAB5C] px-10 py-1 text-xs font-semibold text-white shadow-md">
          Most Popular
        </div>
      )}

      <div
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: `linear-gradient(135deg, ${service.gradient.from}, ${service.gradient.to})`,
        }}
      />

      <div className="relative">
        <div className="mb-4 flex items-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${service.gradient.from} 0%, ${service.gradient.to} 100%)`,
              boxShadow: `0 4px 14px ${service.gradient.shadow}, inset 0 1px 1px rgba(255,255,255,0.3)`,
            }}
          >
            {service.icon}
          </span>
          <div>
            <h3
              className="text-xl font-semibold text-[#33302E] sm:text-2xl"
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              {service.title}
            </h3>
          </div>
        </div>

        <p className="mb-5 text-[15px] leading-relaxed text-[#5E5450] sm:text-[16px]">
          {service.description}
        </p>

        <div className="mb-5 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-[#33302E] sm:text-4xl">
            ₹{service.price}
          </span>
          <span className="text-[#91776C]">/{service.unit}</span>
        </div>

        <ul className="mb-6 space-y-2.5">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-[15px] text-[#5E5450]"
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${service.gradient.from}30, ${service.gradient.to}20)`,
                }}
              >
                <Check
                  className="h-3 w-3"
                  style={{ color: service.gradient.to }}
                />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <button className="group/btn w-full rounded-full border border-[#E8DFD6] bg-white px-6 py-3 font-medium text-[#5E5450] shadow-[3px_3px_8px_rgba(209,199,189,0.3),-3px_-3px_8px_rgba(255,255,255,0.8)] transition-all duration-300 hover:border-orange/30 hover:text-orange hover:shadow-[4px_4px_12px_rgba(209,199,189,0.35),-4px_-4px_12px_rgba(255,255,255,0.85)]">
          <span className="flex items-center justify-center gap-2">
            Select Plan
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </span>
        </button>
      </div>
    </div>
  );
}

function DryCleaningCategory({
  category,
}: {
  category: (typeof dryCleaningCategories)[0];
}) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E8DFD6]/50 bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] shadow-[5px_5px_12px_rgba(209,199,189,0.4),-5px_-5px_12px_rgba(255,255,255,0.88),inset_1px_1px_2px_rgba(255,255,255,0.7)]">
      <div className="flex items-center gap-3 border-b border-[#E8DFD6]/40 bg-gradient-to-r from-[#F8F5F2] to-[#FEFEFE] px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange/20 to-orange/10 text-orange">
          {category.icon}
        </span>
        <h3
          className="text-lg font-semibold text-[#33302E]"
          style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
        >
          {category.title}
        </h3>
      </div>
      <div className="divide-y divide-[#E8DFD6]/30">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between px-5 py-3 transition-colors hover:bg-white/50"
          >
            <span className="text-[15px] text-[#5E5450]">{item.name}</span>
            <span className="font-medium text-[#33302E]">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubscriptionCard({ plan }: { plan: (typeof subscriptionPlans)[0] }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border ${
        plan.popular ? "border-orange/30" : "border-[#E8DFD6]/50"
      } bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] p-6 sm:p-8 shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(209,199,189,0.15)] transition-all duration-300 hover:shadow-[8px_8px_20px_rgba(209,199,189,0.5),-8px_-8px_20px_rgba(255,255,255,0.95),inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(209,199,189,0.2)]`}
    >
      {plan.popular && (
        <div className="absolute -right-8 top-6 rotate-45 bg-gradient-to-r from-[#FF7700] to-[#FFAB5C] px-10 py-1 text-xs font-semibold text-white shadow-md">
          Most Popular
        </div>
      )}

      <div
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: `linear-gradient(135deg, ${plan.gradient.from}, ${plan.gradient.to})`,
        }}
      />

      <div className="relative">
        <div className="mb-4 flex items-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${plan.gradient.from} 0%, ${plan.gradient.to} 100%)`,
              boxShadow: `0 4px 14px ${plan.gradient.shadow}, inset 0 1px 1px rgba(255,255,255,0.3)`,
            }}
          >
            {plan.icon}
          </span>
          <div>
            <h3
              className="text-xl font-semibold text-[#33302E] sm:text-2xl"
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              {plan.title}
            </h3>
            <span className="text-sm font-medium text-orange">
              {plan.kgLimit}
            </span>
          </div>
        </div>

        <div className="mb-5 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-[#33302E] sm:text-4xl">
            ₹{plan.price.toLocaleString()}
          </span>
          <span className="text-[#91776C]">/{plan.period}</span>
        </div>

        <ul className="mb-6 space-y-2.5">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-[15px] text-[#5E5450]"
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${plan.gradient.from}30, ${plan.gradient.to}20)`,
                }}
              >
                <Check
                  className="h-3 w-3"
                  style={{ color: plan.gradient.to }}
                />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <button className="group/btn w-full rounded-full border border-[#E8DFD6] bg-white px-6 py-3 font-medium text-[#5E5450] shadow-[3px_3px_8px_rgba(209,199,189,0.3),-3px_-3px_8px_rgba(255,255,255,0.8)] transition-all duration-300 hover:border-orange/30 hover:text-orange hover:shadow-[4px_4px_12px_rgba(209,199,189,0.35),-4px_-4px_12px_rgba(255,255,255,0.85)]">
          <span className="flex items-center justify-center gap-2">
            Subscribe Now
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </span>
        </button>
      </div>
    </div>
  );
}

function AddOnCard({ service }: { service: (typeof addOnServices)[0] }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-[#E8DFD6]/40 bg-gradient-to-br from-[#FEFEFE] to-[#F6F3F0] p-4 shadow-[3px_3px_8px_rgba(209,199,189,0.35),-3px_-3px_8px_rgba(255,255,255,0.85),inset_1px_1px_1px_rgba(255,255,255,0.6)] transition-all duration-200 hover:shadow-[4px_4px_10px_rgba(209,199,189,0.4),-4px_-4px_10px_rgba(255,255,255,0.9)]">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange/15 to-orange/5 text-orange">
        {service.icon}
      </span>
      <div className="flex-1">
        <p className="font-medium text-[#33302E]">{service.title}</p>
        <p className="text-sm text-[#91776C]">{service.unit}</p>
      </div>
      <span className="font-semibold text-[#33302E]">{service.price}</span>
    </div>
  );
}

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<PricingTab>("laundry");

  return (
    <div style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <PageHeroAnimation variant="centered">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFFBF6] via-[#FDF9F5] to-white" />
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-gradient-to-bl from-[#98BCD6]/10 to-transparent blur-3xl" />

          <Container
            isMaxWidth={true}
            className="relative mt-[70px] flex min-h-[calc(50svh-70px)] flex-col items-center justify-center px-[20px] pb-8 pt-12 text-center md:pb-12 md:pt-16"
          >
            <h1
              className="page-hero-title gsap-animate text-3xl font-bold text-[#33302E] opacity-0 sm:text-4xl md:text-5xl"
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              Affordable Laundry &{" "}
              <span className="text-orange-services">Dry Cleaning</span>
            </h1>

            <p className="page-hero-meta gsap-animate mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-[#5E5450] opacity-0 sm:text-[18px]">
              Transparent pricing, no hidden charges, free pickup & delivery.
              Quality cleaning at prices that make sense.
            </p>

            <div className="page-hero-meta gsap-animate mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-gradient-to-r from-emerald-50/80 to-emerald-50/40 px-5 py-2.5 opacity-0">
              <Truck className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                No Delivery Charges on Orders Above ₹299
              </span>
            </div>
          </Container>
        </div>
      </PageHeroAnimation>

      <PageSectionsAnimation>
        <Container isMaxWidth={true} className="px-[20px] pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl">
            {/* Pricing Tabs */}
            <div className="page-section gsap-animate mb-10 flex flex-wrap justify-center gap-3 opacity-0 sm:mb-12">
              <TabButton
                active={activeTab === "laundry"}
                onClick={() => setActiveTab("laundry")}
                icon={<Package className="h-4 w-4" />}
              >
                Laundry (Per Kg)
              </TabButton>
              <TabButton
                active={activeTab === "dryCleaning"}
                onClick={() => setActiveTab("dryCleaning")}
                icon={<Sparkles className="h-4 w-4" />}
              >
                Dry Cleaning
              </TabButton>
              <TabButton
                active={activeTab === "subscription"}
                onClick={() => setActiveTab("subscription")}
                icon={<Star className="h-4 w-4" />}
              >
                Subscriptions
              </TabButton>
            </div>

            {/* Laundry Section */}
            {activeTab === "laundry" && (
              <div className="page-section gsap-animate opacity-0">
                <div className="mb-8 text-center">
                  <h2
                    className="text-2xl font-semibold text-[#33302E] sm:text-3xl"
                    style={{
                      fontFamily: WixMadeForDisplayFont.style.fontFamily,
                    }}
                  >
                    Laundry Services
                  </h2>
                  <p className="mt-2 text-[#5E5450]">
                    Simple per-kg pricing for everyday clothes
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {laundryServices.map((service) => (
                    <LaundryCard key={service.title} service={service} />
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#E8DFD6]/40 bg-gradient-to-r from-[#F8F5F2] to-[#FEFEFE] p-5 text-center">
                  <p className="text-[15px] text-[#5E5450]">
                    <span className="font-medium text-[#33302E]">
                      Suitable items:
                    </span>{" "}
                    T-shirts, shirts, jeans, trousers, nightwear, gym wear, and
                    casual clothing.
                  </p>
                </div>
              </div>
            )}

            {/* Dry Cleaning Section */}
            {activeTab === "dryCleaning" && (
              <div className="page-section gsap-animate opacity-0">
                <div className="mb-8 text-center">
                  <h2
                    className="text-2xl font-semibold text-[#33302E] sm:text-3xl"
                    style={{
                      fontFamily: WixMadeForDisplayFont.style.fontFamily,
                    }}
                  >
                    Dry Cleaning Services
                  </h2>
                  <p className="mt-2 text-[#5E5450]">
                    Professional care for delicate & premium garments
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {dryCleaningCategories.map((category) => (
                    <DryCleaningCategory
                      key={category.title}
                      category={category}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Subscription Section */}
            {activeTab === "subscription" && (
              <div className="page-section gsap-animate opacity-0">
                <div className="mb-8 text-center">
                  <h2
                    className="text-2xl font-semibold text-[#33302E] sm:text-3xl"
                    style={{
                      fontFamily: WixMadeForDisplayFont.style.fontFamily,
                    }}
                  >
                    Monthly Laundry Plans
                  </h2>
                  <p className="mt-2 text-[#5E5450]">
                    Save more with our subscription plans
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {subscriptionPlans.map((plan) => (
                    <SubscriptionCard key={plan.title} plan={plan} />
                  ))}
                </div>
              </div>
            )}

            {/* Add-On Services */}
            <div className="page-section gsap-animate mt-16 opacity-0">
              <div className="mb-8 text-center">
                <h2
                  className="text-2xl font-semibold text-[#33302E] sm:text-3xl"
                  style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                >
                  Add-On Services
                </h2>
                <p className="mt-2 text-[#5E5450]">
                  Enhance your laundry experience
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {addOnServices.map((service) => (
                  <AddOnCard key={service.title} service={service} />
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="page-section gsap-animate mt-16 overflow-hidden rounded-[28px] border border-[#E8DFD6]/50 bg-gradient-to-br from-[#FFFBF6] to-[#F8F5F2] p-8 text-center shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8)] sm:p-12 opacity-0">
              <h2
                className="text-2xl font-semibold text-[#33302E] sm:text-3xl"
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                Ready to Experience{" "}
                <span className="text-orange-services">Hassle-Free</span>{" "}
                Laundry?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#5E5450]">
                Schedule your pickup now and enjoy clean, fresh clothes without
                the effort.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <OrangeGradientButton className="rounded-full px-8 py-4 text-base font-semibold">
                  <span className="flex items-center gap-2">
                    Start Your Laundry Pickup
                    <ChevronRight className="h-5 w-5" />
                  </span>
                </OrangeGradientButton>
              </div>
            </div>
          </div>
        </Container>
      </PageSectionsAnimation>

      <Footer />
    </div>
  );
}
