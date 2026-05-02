import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import Container from "@/app/components/layout/Container";
import { WixMadeForDisplayFont, SatoshiFont } from "@/app/fonts";
import type { Metadata } from "next";
import { canonicalPath } from "@/app/lib/site-config";
import {
  ShieldCheck,
  Droplet,
  Clock,
  Percent,
  LayoutGrid,
  WashingMachine,
  Shirt,
  Crown,
  Sparkles,
  Footprints,
  LayoutTemplate,
  Baby,
  Bed,
  Heart,
  Plus,
  Package,
  Truck,
  Zap,
  ShoppingBasket,
  ChevronRight,
  ArrowRight,
  Leaf
} from "lucide-react";

export const metadata: Metadata = {
  title: "Laundry Services",
  description: "Complete laundry care for every need.",
  alternates: { canonical: canonicalPath("/services/laundry") },
};

const serviceCards = [
  {
    id: "wash-fold",
    title: "Wash & Fold",
    description: "Everyday clothes washed, dried & neatly folded",
    price: "₹99",
    unit: "/ kg Onwards",
    icon: <ShoppingBasket className="w-8 h-8 text-[#F26B21]" strokeWidth={1.5} />,
    iconBg: "bg-[#FFF6F0]",
  },
  {
    id: "ironing",
    title: "Ironing Services",
    description: "Perfectly ironed clothes ready to wear",
    price: "₹20",
    unit: "/ piece Onwards",
    icon: <Zap className="w-8 h-8 text-[#4CAF50]" strokeWidth={1.5} />,
    iconBg: "bg-[#F0FDF4]",
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    description: "Gentle care for delicate & formal wear",
    price: "₹150",
    unit: "/ piece Onwards",
    icon: <Shirt className="w-8 h-8 text-[#3B82F6]" strokeWidth={1.5} />,
    iconBg: "bg-[#EFF6FF]",
  },
  {
    id: "premium",
    title: "Premium Laundry",
    description: "Deep cleaning for luxury, woolens & special fabrics",
    price: "₹199",
    unit: "/ piece Onwards",
    icon: <Crown className="w-8 h-8 text-[#8B5CF6]" strokeWidth={1.5} />,
    iconBg: "bg-[#F5F3FF]",
  },
  {
    id: "stain",
    title: "Stain Removal",
    description: "Tough stain treatment for a spotless clean",
    price: "₹50",
    unit: "/ item Onwards",
    icon: <Sparkles className="w-8 h-8 text-[#F97316]" strokeWidth={1.5} />,
    iconBg: "bg-[#FFF7ED]",
  },
  {
    id: "shoe",
    title: "Shoe Laundry",
    description: "Special care for all types of footwear",
    price: "₹199",
    unit: "/ pair Onwards",
    icon: <Footprints className="w-8 h-8 text-[#0EA5E9]" strokeWidth={1.5} />,
    iconBg: "bg-[#F0F9FF]",
  },
  {
    id: "curtains",
    title: "Curtains & Upholstery",
    description: "Cleans curtains, sofas, cushions & upholstery",
    price: "₹20",
    unit: "/ sq.ft. Onwards",
    icon: <LayoutTemplate className="w-8 h-8 text-[#6366F1]" strokeWidth={1.5} />,
    iconBg: "bg-[#EEF2FF]",
  },
  {
    id: "baby",
    title: "Baby Laundry",
    description: "Safe, gentle & chemical-free baby care",
    price: "₹99",
    unit: "/ kg Onwards",
    icon: <Baby className="w-8 h-8 text-[#10B981]" strokeWidth={1.5} />,
    iconBg: "bg-[#ECFDF5]",
  },
  {
    id: "bed-bath",
    title: "Bed & Bath Linen",
    description: "Bedsheets, pillow covers, towels & more",
    price: "₹120",
    unit: "/ piece Onwards",
    icon: <Bed className="w-8 h-8 text-[#D946EF]" strokeWidth={1.5} />,
    iconBg: "bg-[#FDF4FF]",
  },
  {
    id: "special",
    title: "Special Care",
    description: "Sarees, lehengas, ethnic wear & hand wash items",
    price: "₹250",
    unit: "/ piece Onwards",
    icon: <Heart className="w-8 h-8 text-[#E11D48]" strokeWidth={1.5} />,
    iconBg: "bg-[#FFF1F2]",
  },
];

export default function LaundryServicePage() {
  return (
    <div className="overflow-x-hidden antialiased bg-[#FAFAFA]" style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <main className="pt-[60px] lg:pt-[80px]">
        {/* ─── HERO SECTION ──────────────────────────────────────────────────────── */}
        <section className="relative w-full pt-8 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-r from-[#FFFBF7] to-[#FDF4EA] overflow-hidden">
          <Container isMaxWidth className="relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[14px] text-[#7A7A7A] mb-8">
              <Link href="/" className="hover:text-[#F26B21] transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services" className="hover:text-[#F26B21] transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#F26B21] font-medium">Laundry</span>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Left Content */}
              <div className="w-full lg:w-3/5 lg:pr-10 z-10">
                <h1 
                  className="text-[clamp(40px,5vw,56px)] leading-[1.1] font-extrabold text-[#1A1A1A] tracking-tight mb-4"
                  style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                >
                  Complete Laundry<br />
                  <span className="text-[#F26B21]">Care for Every Need!✨</span>
                </h1>
                <p className="text-[18px] leading-relaxed text-[#5B5B5B] max-w-lg mb-10">
                  From everyday clothes to delicate fabrics,<br />
                  we clean, care and deliver freshness.
                </p>

                {/* Features Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50 inline-flex flex-wrap w-full">
                  <div className="flex items-start gap-3 p-2">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#FFF6F0] flex items-center justify-center border border-[#FCECE4]">
                      <ShieldCheck className="w-5 h-5 text-[#F26B21]" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#1A1A1A] leading-tight mb-1">Hygienic Wash</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight">Deep clean with care</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-2">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#FFF6F0] flex items-center justify-center border border-[#FCECE4]">
                      <Droplet className="w-5 h-5 text-[#F26B21]" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#1A1A1A] leading-tight mb-1">Safe for Fabrics</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight">Gentle on clothes, hard on stains</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#FFF6F0] flex items-center justify-center border border-[#FCECE4]">
                      <Clock className="w-5 h-5 text-[#F26B21]" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#1A1A1A] leading-tight mb-1">On-Time Delivery</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight">Picked up &amp; delivered as promised</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#FFF6F0] flex items-center justify-center border border-[#FCECE4]">
                      <Percent className="w-5 h-5 text-[#F26B21]" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#1A1A1A] leading-tight mb-1">No Hidden Charges</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight">Transparent pricing, always</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-2/5 mt-10 lg:mt-0 relative h-[350px] lg:h-[450px]">
                <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[120%] h-[120%] lg:w-[150%] lg:h-[150%] z-0 mix-blend-multiply opacity-90">
                  <Image src="/images/laundry/hero.png" alt="Folded towels and basket" fill className="object-contain object-right" priority quality={100} />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <div className="px-0 lg:px-8 pb-20 mt-8">
          <Container isMaxWidth>
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Sidebar */}
              <aside className="w-full lg:w-[280px] shrink-0">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-[#FFF6F0]">
                    <LayoutGrid className="w-5 h-5 text-[#F26B21]" />
                    <span className="font-bold text-[#F26B21] text-[15px]">All Laundry Services</span>
                  </div>
                  <ul className="flex flex-col">
                    {[
                      { icon: <WashingMachine size={18}/>, text: "Wash & Fold" },
                      { icon: <Zap size={18}/>, text: "Ironing Services" },
                      { icon: <Shirt size={18}/>, text: "Dry Cleaning" },
                      { icon: <Crown size={18}/>, text: "Premium Laundry" },
                      { icon: <Sparkles size={18}/>, text: "Stain Removal" },
                      { icon: <Footprints size={18}/>, text: "Shoe Laundry" },
                      { icon: <LayoutTemplate size={18}/>, text: "Curtains & Upholstery" },
                      { icon: <Heart size={18}/>, text: "Special Care" },
                      { icon: <Plus size={18}/>, text: "Add-ons" },
                    ].map((item, i) => (
                      <li key={i}>
                        <Link href="#" className="flex items-center gap-3 px-5 py-3.5 text-[#5B5B5B] hover:bg-gray-50 hover:text-[#F26B21] transition-colors border-b border-gray-50 text-[14px] font-medium">
                          <span className="text-[#9E9E9E]">{item.icon}</span>
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-[#EEF2FF] rounded-2xl p-5 border border-[#E0E7FF] flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-[#6366F1]">
                    <Package className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1A1A1A] text-[14px]">Have bulk laundry?</h4>
                    <p className="text-[12px] text-[#5B5B5B] mt-0.5">Contact us for special pricing</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#6366F1]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </aside>

              {/* Main Content Area */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-gray-200">
                  <div>
                    <h2 className="text-[28px] font-bold text-[#1A1A1A] leading-tight" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>
                      All Laundry Services
                    </h2>
                    <p className="text-[15px] text-[#7A7A7A] mt-1">
                      Choose from our wide range of professional laundry services.
                    </p>
                  </div>
                  <div className="flex items-center gap-6 mt-4 sm:mt-0">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-[#7A7A7A]" strokeWidth={1.5} />
                      <span className="text-[13px] font-medium text-[#5B5B5B]">Free Pickup &amp; Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#F26B21]" strokeWidth={1.5} />
                      <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-[#1A1A1A] leading-tight">Express Delivery</span>
                        <span className="text-[10px] text-[#7A7A7A] leading-tight">*T&amp;C Apply</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {serviceCards.map((card) => (
                    <div key={card.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col cursor-pointer">
                      <div className="flex items-start gap-4 mb-5">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${card.iconBg}`}>
                          {card.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#1A1A1A] text-[16px] leading-tight mb-1">{card.title}</h3>
                          <p className="text-[12px] text-[#7A7A7A] leading-snug">{card.description}</p>
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                        <div className="flex items-baseline gap-1">
                          <span className="text-[20px] font-bold text-[#F26B21]">{card.price}</span>
                          <span className="text-[12px] font-medium text-[#7A7A7A]">{card.unit}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#9E9E9E] group-hover:bg-[#F26B21] group-hover:border-[#F26B21] group-hover:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Container>
        </div>
        
        {/* Trust Badges Footer Area */}
        <section className="bg-[#FFFBF7] py-8 border-t border-[#F5EFEA]">
          <Container isMaxWidth>
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-[#FCECE4] bg-white flex items-center justify-center text-[#F26B21]">
                  <ShieldCheck strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-[14px]">100% Quality</h4>
                  <p className="text-[12px] text-[#7A7A7A]">Assurance</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-[#FCECE4] bg-white flex items-center justify-center text-[#F26B21]">
                  <Leaf strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-[14px]">Eco-friendly</h4>
                  <p className="text-[12px] text-[#7A7A7A]">Products</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-[#FCECE4] bg-white flex items-center justify-center text-[#F26B21]">
                  <Truck strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-[14px]">Free Pickup &amp;</h4>
                  <p className="text-[12px] text-[#7A7A7A]">Delivery</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-[#FCECE4] bg-white flex items-center justify-center text-[#F26B21]">
                  <ShieldCheck strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-[14px]">Satisfaction</h4>
                  <p className="text-[12px] text-[#7A7A7A]">Guaranteed</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}
