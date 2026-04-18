"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import Container from "@/app/components/layout/Container";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";
import OrangeGradientButton from "@/app/components/ui/buttons/OrangeGradientButton";
import {
  PageHeroAnimation,
  PageSectionsAnimation,
} from "@/app/components/animations/PageAnimations";
import { scrollToSection } from "@/app/utils/scrollToSection";
import { ScrollTrigger } from "@/app/lib/animations";
import {
  Shirt,
  Sparkles,
  Package,
  Truck,
  Shield,
  Star,
  ChevronRight,
  ChevronDown,
  Check,
  Crown,
  Users,
  Gem,
  Droplets,
  Wind,
  Flame,
  SprayCan,
  Timer,
  PartyPopper,
} from "lucide-react";

type PricingTab = "laundry" | "dryCleaning" | "subscription";

const WHATSAPP_NUMBER_E164 = "7078497263";
const WHATSAPP_PREFILL_MESSAGE =
  "Hi! I'd like to schedule a laundry pickup with Wash & Wow.";
const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(WHATSAPP_PREFILL_MESSAGE)}`;

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
    gradient: { from: "#FFAB5C", to: "#FF7700", shadow: "rgba(255,119,0,0.3)" },
    popular: true,
  },
];

const dryCleaningCategories = [
  {
    title: "Everyday Wear",
    description: "Regular garments requiring gentle cleaning.",
    icon: <Shirt className="h-5 w-5" />,
    items: [
      { name: "Shirt / T-shirt", price: "₹50" },
      { name: "Jeans / Trouser", price: "₹70" },
      { name: "Kurta / Kurti", price: "₹80–₹120" },
    ],
    features: ["Fabric-safe cleaning", "Color protection", "Neat finishing"],
    gradient: { from: "#D4B8AD", to: "#A68B7B" },
  },
  {
    title: "Ethnic & Delicate Wear",
    description: "Traditional and delicate garments needing special care.",
    icon: <Gem className="h-5 w-5" />,
    items: [
      { name: "Saree (Basic)", price: "₹150" },
      { name: "Saree (Silk / Heavy)", price: "₹250–₹500" },
      { name: "Lehenga", price: "₹400–₹800" },
      { name: "Dupatta", price: "₹80–₹150" },
    ],
    features: ["Gentle cleaning", "Hand finishing", "Premium care"],
    gradient: { from: "#E6C29E", to: "#D4A574" },
  },
  {
    title: "Winter & Heavy Wear",
    description: "Bulky garments requiring deep cleaning.",
    icon: <Flame className="h-5 w-5" />,
    items: [
      { name: "Sweater", price: "₹120–₹180" },
      { name: "Jacket", price: "₹180–₹350" },
      { name: "Coat", price: "₹300–₹400" },
    ],
    features: ["Deep cleaning", "Shape retention", "Odor removal"],
    gradient: { from: "#98BCD6", to: "#6A9BC3" },
  },
  {
    title: "Formal Wear",
    description: "Structured garments needing professional care.",
    icon: <Crown className="h-5 w-5" />,
    items: [
      { name: "Blazer", price: "₹200–₹300" },
      { name: "Suit (2-piece)", price: "₹300–₹400" },
      { name: "Suit (3-piece)", price: "₹400–₹500" },
    ],
    features: ["Structure preservation", "Professional finish"],
    gradient: { from: "#FFAB5C", to: "#FF7700" },
  },
  {
    title: "Home & Bedding",
    description: "Large household fabrics.",
    icon: <Package className="h-5 w-5" />,
    items: [
      { name: "Bedsheet (Single)", price: "₹100" },
      { name: "Bedsheet (Double)", price: "₹150" },
      { name: "Blanket", price: "₹250–₹500" },
      { name: "Quilt / Razai", price: "₹300–₹600" },
      { name: "Pillow Cover", price: "₹30" },
    ],
    features: ["Hygienic cleaning", "Deep wash", "Fresh finish"],
    gradient: { from: "#D4B8AD", to: "#A68B7B" },
  },
];

const subscriptionPlans = [
  {
    title: "Basic",
    price: 999,
    period: "month",
    kgLimit: "20 kg",
    features: ["20 kg laundry", "Free pickup & delivery", "Wash & Fold"],
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
      "Wash & Iron",
      "10% savings",
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
    features: ["80 kg laundry", "Shared usage", "Faster processing"],
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
      "Premium laundry included",
      "Priority pickup",
      "Best value",
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
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative isolate flex min-h-[48px] cursor-pointer items-center justify-center rounded-full px-5 text-sm font-semibold sm:min-h-[52px] sm:px-6 sm:text-base ${
        active
          ? "bg-gradient-to-r from-[#FF7700] to-[#FFAB5C] text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.35),0_7px_0_0_#B84700,0_12px_28px_rgba(255,119,0,0.42)] transition-[transform,box-shadow,filter] duration-200 ease-out will-change-transform hover:brightness-[1.03] active:translate-y-1 active:scale-[0.97] active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.18),0_2px_0_0_#8F3600,0_4px_14px_rgba(255,119,0,0.3)] motion-reduce:transition-none motion-reduce:active:translate-y-0 motion-reduce:active:scale-100"
          : "border border-[#E0D5CC] bg-gradient-to-b from-white to-[#FAF7F4] text-[#5E5450] shadow-[inset_0_2px_0_rgba(255,255,255,0.95),0_7px_0_0_#C9BDB2,0_10px_24px_rgba(120,100,90,0.12)] transition-[transform,box-shadow,filter] duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:shadow-[inset_0_2px_0_rgba(255,255,255,1),0_8px_0_0_#C9BDB2,0_14px_30px_rgba(120,100,90,0.14)] active:translate-y-1.5 active:scale-[0.96] active:shadow-[inset_0_3px_6px_rgba(100,85,75,0.12),0_2px_0_0_#B0A69C,0_4px_12px_rgba(120,100,90,0.1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 motion-reduce:active:scale-100"
      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-services/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFBF6]`}
    >
      {children}
    </button>
  );
}

function LaundryCard({ service }: { service: (typeof laundryServices)[0] }) {
  return (
    <div
      className={`group relative flex max-sm:h-fit sm:h-full min-h-0 w-full flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] border ${
        service.popular
          ? "border-orange/30 hover:border-orange/50"
          : "border-[#E8DFD6]/50 hover:border-[#D2C7BC]"
      } bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] p-6 sm:p-8 shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(209,199,189,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[10px_14px_28px_rgba(209,199,189,0.55),-8px_-8px_24px_rgba(255,255,255,0.98),inset_1px_1px_3px_rgba(255,255,255,0.95),inset_-1px_-1px_3px_rgba(209,199,189,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:hover:-translate-y-1.5`}
    >
      {service.popular && (
        <div className="absolute -right-8 top-6 rotate-45 bg-gradient-to-r from-[#FF7700] to-[#FFAB5C] px-10 py-1 text-xs font-semibold text-white opacity-75 shadow-[0_0_8px_rgba(255,119,0,0.28),0_0_14px_rgba(255,171,92,0.14)]">
          Most Popular
        </div>
      )}

      <div
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: `linear-gradient(135deg, ${service.gradient.from}, ${service.gradient.to})`,
        }}
      />

      <div className="relative flex min-h-0 flex-col max-sm:flex-none sm:flex-1">
        <div className="flex flex-col">
          <div className="mb-4 shrink-0">
            <h3
              className="text-xl font-semibold text-[#33302E] sm:text-2xl"
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              {service.title}
            </h3>
          </div>

          <p className="text-[15px] leading-relaxed text-[#5E5450] sm:text-[16px]">
            {service.description}
          </p>
        </div>

        <div className="my-6 flex shrink-0 items-baseline gap-1">
          <span className="text-3xl font-bold text-[#33302E] sm:text-4xl">
            ₹{service.price}
          </span>
          <span className="text-[#91776C]">/{service.unit}</span>
        </div>

        <ul className="flex min-h-0 flex-col space-y-2.5 max-sm:flex-none sm:flex-1">
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
    <div className="group flex h-auto min-h-0 w-full flex-col overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#E8DFD6]/50 bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] shadow-[5px_5px_12px_rgba(209,199,189,0.4),-5px_-5px_12px_rgba(255,255,255,0.88),inset_1px_1px_2px_rgba(255,255,255,0.7)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D2C7BC] hover:shadow-[9px_12px_26px_rgba(209,199,189,0.52),-7px_-7px_22px_rgba(255,255,255,0.95),inset_1px_1px_2px_rgba(255,255,255,0.85)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:hover:-translate-y-1.5 md:h-full">
      {/* Header */}
      <div className="relative shrink-0 border-b border-[#E8DFD6]/40 bg-gradient-to-r from-[#F8F5F2] to-[#FEFEFE] px-5 py-4 sm:px-6 sm:py-5">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
          style={{
            background: `linear-gradient(135deg, ${category.gradient.from}, ${category.gradient.to})`,
          }}
        />
        <div className="relative flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md"
            style={{
              background: `linear-gradient(135deg, ${category.gradient.from} 0%, ${category.gradient.to} 100%)`,
            }}
          >
            {category.icon}
          </span>
          <div>
            <h3
              className="text-lg font-semibold text-[#33302E] sm:text-xl"
              style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
            >
              {category.title}
            </h3>
            <p className="text-[13px] text-[#91776C] sm:text-[14px]">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Items List: flex-1 only when card is row-stretched (md+ 2-col); single-col uses content height */}
      <div className="min-h-0 divide-y divide-[#E8DFD6]/30 md:flex-1">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-white/60 sm:px-6"
          >
            <span className="text-[15px] text-[#5E5450]">{item.name}</span>
            <span className="font-semibold text-[#33302E]">{item.price}</span>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mt-auto shrink-0 border-t border-[#E8DFD6]/40 bg-gradient-to-r from-[#FEFEFE] to-[#F8F5F2] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {category.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium sm:text-[13px]"
              style={{
                backgroundColor: `${category.gradient.from}15`,
                color: category.gradient.to,
              }}
            >
              <Check className="h-3 w-3" />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SubscriptionCard({ plan }: { plan: (typeof subscriptionPlans)[0] }) {
  return (
    <div
      className={`group relative flex max-sm:h-fit sm:h-full min-h-0 w-full flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] border ${
        plan.popular
          ? "border-orange/30 hover:border-orange/50"
          : "border-[#E8DFD6]/50 hover:border-[#D2C7BC]"
      } bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] p-6 sm:p-8 shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(209,199,189,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[10px_14px_28px_rgba(209,199,189,0.55),-8px_-8px_24px_rgba(255,255,255,0.98),inset_1px_1px_3px_rgba(255,255,255,0.95),inset_-1px_-1px_3px_rgba(209,199,189,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:hover:-translate-y-1.5`}
    >
      {plan.popular && (
        <div className="absolute -right-8 top-6 rotate-45 bg-gradient-to-r from-[#FF7700] to-[#FFAB5C] px-10 py-1 text-xs font-semibold text-white opacity-75 shadow-[0_0_8px_rgba(255,119,0,0.28),0_0_14px_rgba(255,171,92,0.14)]">
          Most Popular
        </div>
      )}

      <div
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: `linear-gradient(135deg, ${plan.gradient.from}, ${plan.gradient.to})`,
        }}
      />

      <div className="relative flex min-h-0 flex-col max-sm:flex-none sm:flex-1">
        <div className="flex shrink-0 items-start gap-3">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${plan.gradient.from} 0%, ${plan.gradient.to} 100%)`,
              boxShadow: `0 4px 14px ${plan.gradient.shadow}, inset 0 1px 1px rgba(255,255,255,0.3)`,
            }}
          >
            {plan.icon}
          </span>
          <div className="min-w-0">
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

        <div className="my-6 flex shrink-0 items-baseline gap-1">
          <span className="text-3xl font-bold text-[#33302E] sm:text-4xl">
            ₹{plan.price.toLocaleString()}
          </span>
          <span className="text-[#91776C]">/{plan.period}</span>
        </div>

        <ul className="flex min-h-0 flex-col space-y-2.5 max-sm:flex-none sm:flex-1">
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
      </div>
    </div>
  );
}

function AddOnCard({ service }: { service: (typeof addOnServices)[0] }) {
  return (
    <div className="group flex max-sm:h-fit max-sm:self-start sm:h-full min-h-0 w-full items-center gap-4 rounded-xl border border-[#E8DFD6]/40 bg-gradient-to-br from-[#FEFEFE] to-[#F6F3F0] p-4 shadow-[3px_3px_8px_rgba(209,199,189,0.35),-3px_-3px_8px_rgba(255,255,255,0.85),inset_1px_1px_1px_rgba(255,255,255,0.6)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#D2C7BC] hover:shadow-[6px_8px_18px_rgba(209,199,189,0.45),-5px_-5px_14px_rgba(255,255,255,0.92),inset_1px_1px_2px_rgba(255,255,255,0.75)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:hover:-translate-y-1">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange/15 to-orange/5 text-orange shadow-sm transition-transform duration-300 ease-out group-hover:scale-110 group-hover:shadow-md motion-reduce:group-hover:scale-100">
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
  const [hasUserSwitchedTab, setHasUserSwitchedTab] = useState(false);

  const selectTab = useCallback((tab: PricingTab) => {
    setActiveTab((prev) => {
      if (prev === tab) return prev;
      setHasUserSwitchedTab(true);
      return tab;
    });
  }, []);

  const scrollToPricingTabs = useCallback(() => {
    scrollToSection("#pricing-tabs", 70);
  }, []);

  useEffect(() => {
    let cancelled = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });
    });
    return () => {
      cancelled = true;
    };
  }, [activeTab]);

  return (
    <div style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <PageHeroAnimation variant="centeredSequential">
        <div className="relative mt-[70px] flex min-h-[calc(100svh-70px)] flex-col overflow-x-clip overflow-y-visible">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFFBF6] via-[#FDF9F5] to-white" />
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-gradient-to-bl from-[#98BCD6]/10 to-transparent blur-3xl" />

          <Container
            isMaxWidth={true}
            className="relative z-1 flex min-h-0 w-full flex-1 flex-col px-[20px] pb-14 pt-8 md:pb-20 md:pt-12"
          >
            <div className="flex min-h-0 flex-1 flex-col justify-center">
              <div className="max-w-3xl text-center mx-auto w-full">
                <h1
                  className="page-hero-title gsap-animate text-3xl font-bold text-[#33302E] opacity-0 sm:text-4xl md:text-5xl"
                  style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                >
                  Affordable Laundry &{" "}
                  <span className="text-orange-services">Dry Cleaning</span>
                </h1>

                <p className="page-hero-meta gsap-animate mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-[#5E5450] opacity-0 sm:text-[18px]">
                  Transparent pricing, no hidden charges, free pickup &
                  delivery. Quality cleaning at prices that make sense.
                </p>

                <div className="pricing-delivery-badge-wrap page-hero-subtitle gsap-animate mx-auto mt-6 inline-block w-fit max-w-full opacity-0 mt-[40px]">
                  <span
                    className="pricing-delivery-particle-anchor pricing-delivery-particle-anchor--1"
                    aria-hidden
                  >
                    <PartyPopper className="pricing-delivery-particle-icon size-4 text-amber-500" />
                  </span>
                  <span
                    className="pricing-delivery-particle-anchor pricing-delivery-particle-anchor--2"
                    aria-hidden
                  >
                    <Star className="pricing-delivery-particle-icon size-3.5 fill-amber-400/35 text-amber-500" />
                  </span>
                  <span
                    className="pricing-delivery-particle-anchor pricing-delivery-particle-anchor--3"
                    aria-hidden
                  >
                    <PartyPopper className="pricing-delivery-particle-icon size-3.5 text-emerald-600" />
                  </span>
                  <span
                    className="pricing-delivery-particle-anchor pricing-delivery-particle-anchor--4"
                    aria-hidden
                  >
                    <Star className="pricing-delivery-particle-icon size-3 fill-emerald-500/40 text-emerald-600" />
                  </span>
                  <span
                    className="pricing-delivery-particle-anchor pricing-delivery-particle-anchor--5"
                    aria-hidden
                  >
                    <PartyPopper className="pricing-delivery-particle-icon size-3.5 text-[#FF9431]" />
                  </span>
                  <span
                    className="pricing-delivery-confetti pricing-delivery-confetti--a"
                    aria-hidden
                  />
                  <span
                    className="pricing-delivery-confetti pricing-delivery-confetti--b"
                    aria-hidden
                  />
                  <span
                    className="pricing-delivery-confetti pricing-delivery-confetti--c"
                    aria-hidden
                  />
                  <div className="relative z-[2] flex w-fit max-w-full items-center gap-2 rounded-full border border-emerald-200/60 bg-gradient-to-r from-emerald-50/80 to-emerald-50/40 px-3 py-1.5 text-left text-[13px] text-emerald-700 shadow-sm backdrop-blur-[2px] sm:text-base sm:px-4">
                    <Truck
                      className="h-4 w-4 shrink-0 text-emerald-600"
                      aria-hidden
                    />
                    <span className="leading-snug">
                      No Delivery Charges on Orders Above ₹299
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-hero-cta gsap-animate flex shrink-0 flex-col items-center justify-end pt-6 pb-2 opacity-0">
              <div className="pricing-hero-cta-wrap">
                <button
                  type="button"
                  onClick={scrollToPricingTabs}
                  className="group relative z-10 isolate w-full cursor-pointer rounded-full bg-gradient-to-r from-[#FF7700] via-[#FF9431] to-[#F8BB7A] px-8 py-4 text-center text-base font-semibold text-white shadow-[0_10px_40px_rgba(255,119,0,0.42),0_2px_8px_rgba(255,148,49,0.25)] ring-2 ring-white/70 ring-offset-2 ring-offset-[#FDF9F5] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_48px_rgba(255,119,0,0.52),0_4px_12px_rgba(255,148,49,0.3)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9431] focus-visible:ring-offset-4 sm:px-12 sm:py-[1.125rem] sm:text-lg motion-reduce:transition-none motion-reduce:hover:scale-100"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100 motion-reduce:hidden" />
                  </span>
                  <span className="relative z-10 flex items-center justify-center gap-2.5">
                    <span className="tracking-tight">View plans & pricing</span>
                    <ChevronDown
                      className="pricing-hero-cta-chevron size-5 shrink-0"
                      aria-hidden
                    />
                  </span>
                </button>
              </div>
              <p className="mt-8 max-w-xs text-center text-[13px] text-[#91776C] sm:mt-10 sm:text-sm">
                Compare laundry, dry cleaning & subscription rates
              </p>
            </div>
          </Container>
        </div>
      </PageHeroAnimation>

      <PageSectionsAnimation sequentialSections>
        <Container isMaxWidth={true} className="px-[20px] pb-20 md:pb-32">
          <div className="mx-auto max-w-6xl">
            {/* Scroll-in: sequential stagger via PageSectionsAnimation sequentialSections */}
            {/* Tabs + tab title share one scroll section so the headline appears with the controls on first view */}
            <div
              id="pricing-tabs"
              className="page-section gsap-animate my-10 flex flex-col items-center opacity-0 sm:mt-12 mb-10 md:mb-12 gap-10 scroll-mt-[88px]"
            >
              <div className="mt-[70px] flex flex-wrap justify-center gap-x-3 gap-y-5 sm:gap-3">
                <TabButton
                  active={activeTab === "laundry"}
                  onClick={() => selectTab("laundry")}
                >
                  Laundry (Per Kg)
                </TabButton>
                <TabButton
                  active={activeTab === "dryCleaning"}
                  onClick={() => selectTab("dryCleaning")}
                >
                  Dry Cleaning
                </TabButton>
                <TabButton
                  active={activeTab === "subscription"}
                  onClick={() => selectTab("subscription")}
                >
                  Subscriptions
                </TabButton>
              </div>

              <div
                className={` w-full max-w-3xl text-center ${
                  hasUserSwitchedTab ? "tab-header-animate" : ""
                }`}
                key={
                  hasUserSwitchedTab
                    ? `pricing-tab-header-${activeTab}`
                    : "pricing-tab-header-initial"
                }
              >
                {activeTab === "laundry" && (
                  <>
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
                  </>
                )}
                {activeTab === "dryCleaning" && (
                  <>
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
                  </>
                )}
                {activeTab === "subscription" && (
                  <>
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
                  </>
                )}
              </div>
            </div>

            <div className="page-section gsap-animate opacity-0">
              <div
                className={hasUserSwitchedTab ? "tab-content-animate" : ""}
                key={hasUserSwitchedTab ? activeTab : "initial"}
              >
                {activeTab === "laundry" && (
                  <>
                    <div className="grid auto-rows-auto grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                      {laundryServices.map((service, index) => (
                        <div
                          key={service.title}
                          className={`flex max-sm:h-auto max-sm:self-start min-h-0 sm:h-full ${
                            index === laundryServices.length - 1
                              ? "sm:col-span-2 md:col-span-1"
                              : ""
                          } ${hasUserSwitchedTab ? "tab-card-animate" : ""}`}
                          style={
                            hasUserSwitchedTab
                              ? { animationDelay: `${index * 100}ms` }
                              : undefined
                          }
                        >
                          <LaundryCard service={service} />
                        </div>
                      ))}
                    </div>

                    <div
                      className={`mt-10 rounded-2xl border border-[#E8DFD6]/40 bg-gradient-to-r from-[#F8F5F2] to-[#FEFEFE] p-5 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#D2C7BC] hover:shadow-[6px_10px_22px_rgba(209,199,189,0.38),-5px_-5px_16px_rgba(255,255,255,0.92),inset_1px_1px_2px_rgba(255,255,255,0.88)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:mt-12 md:mt-14 ${
                        hasUserSwitchedTab ? "tab-card-animate" : ""
                      }`}
                      style={
                        hasUserSwitchedTab
                          ? { animationDelay: "450ms" }
                          : undefined
                      }
                    >
                      <p className="text-[15px] text-[#5E5450]">
                        <span className="font-medium text-[#33302E]">
                          Suitable items:
                        </span>{" "}
                        T-shirts, shirts, jeans, trousers, nightwear, gym wear,
                        and casual clothing.
                      </p>
                    </div>
                  </>
                )}

                {activeTab === "dryCleaning" && (
                  <>
                    <div className="grid auto-rows-auto gap-5 sm:gap-6 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-2">
                      {dryCleaningCategories
                        .slice(0, 4)
                        .map((category, index) => (
                          <div
                            key={category.title}
                            className={`flex min-h-0 items-stretch max-md:h-auto md:h-full ${
                              hasUserSwitchedTab ? "tab-card-animate" : ""
                            }`}
                            style={
                              hasUserSwitchedTab
                                ? { animationDelay: `${index * 100}ms` }
                                : undefined
                            }
                          >
                            <DryCleaningCategory category={category} />
                          </div>
                        ))}
                    </div>

                    <div
                      className={`mt-10 flex min-h-0 sm:mt-12 md:mt-14 ${
                        hasUserSwitchedTab ? "tab-card-animate" : ""
                      }`}
                      style={
                        hasUserSwitchedTab
                          ? { animationDelay: "400ms" }
                          : undefined
                      }
                    >
                      <DryCleaningCategory
                        category={dryCleaningCategories[4]}
                      />
                    </div>

                    <div
                      className={`mt-10 rounded-2xl border border-[#E8DFD6]/40 bg-gradient-to-r from-[#F8F5F2] to-[#FEFEFE] p-5 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#D2C7BC] hover:shadow-[6px_10px_22px_rgba(209,199,189,0.38),-5px_-5px_16px_rgba(255,255,255,0.92),inset_1px_1px_2px_rgba(255,255,255,0.88)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:mt-12 md:mt-14 ${
                        hasUserSwitchedTab ? "tab-card-animate" : ""
                      }`}
                      style={
                        hasUserSwitchedTab
                          ? { animationDelay: "500ms" }
                          : undefined
                      }
                    >
                      <p className="text-[15px] text-[#5E5450]">
                        <span className="font-medium text-[#33302E]">
                          Note:
                        </span>{" "}
                        Prices may vary based on fabric type, embellishments,
                        and garment condition.
                      </p>
                    </div>
                  </>
                )}

                {activeTab === "subscription" && (
                  <div className="grid auto-rows-auto gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {subscriptionPlans.map((plan, index) => (
                      <div
                        key={plan.title}
                        className={`flex max-sm:h-auto max-sm:self-start min-h-0 sm:h-full ${
                          hasUserSwitchedTab ? "tab-card-animate" : ""
                        }`}
                        style={
                          hasUserSwitchedTab
                            ? { animationDelay: `${index * 100}ms` }
                            : undefined
                        }
                      >
                        <SubscriptionCard plan={plan} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Add-On Services */}
            <div className="page-section gsap-animate mt-20 opacity-0 md:mt-28">
              <div className="mb-10 text-center sm:mb-12 md:mb-14">
                <h2
                  className="text-2xl font-semibold text-[#33302E] sm:text-3xl"
                  style={{
                    fontFamily: WixMadeForDisplayFont.style.fontFamily,
                  }}
                >
                  Add-On Services
                </h2>
                <p className="mt-2 text-[#5E5450]">
                  Enhance your laundry experience
                </p>
              </div>

              <div className="grid auto-rows-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {addOnServices.map((service) => (
                  <AddOnCard key={service.title} service={service} />
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="page-section gsap-animate mt-20 overflow-hidden rounded-[28px] border border-[#E8DFD6]/50 bg-gradient-to-br from-[#FFFBF6] to-[#F8F5F2] p-8 text-center shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D2C7BC] hover:shadow-[10px_16px_32px_rgba(209,199,189,0.5),-8px_-8px_26px_rgba(255,255,255,0.96),inset_1px_1px_3px_rgba(255,255,255,0.9)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-12 sm:hover:-translate-y-1.5 opacity-0 md:mt-28">
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
                <OrangeGradientButton
                  className="rounded-full px-8 py-4 text-base font-semibold"
                  onClick={() => {
                    window.open(
                      WHATSAPP_CHAT_URL,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                >
                  <span className="flex items-center gap-3">
                    <Image
                      src="/gifs/whatsapp.gif"
                      alt=""
                      width={50}
                      height={50}
                      unoptimized
                      className="h-10 w-10 shrink-0 rounded-md object-contain ring-2 ring-white/40"
                    />
                    <span className="whitespace-nowrap">
                      Schedule via WhatsApp
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0 opacity-90" />
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
