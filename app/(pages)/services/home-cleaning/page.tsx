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
  Sparkles,
  ShieldCheck,
  Leaf,
  Clock,
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  ArrowRightCircle,
  Armchair,
  SprayCan,
  CookingPot,
  Bath,
  Home,
  Package,
  CalendarClock,
  Wallet,
  Smile,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Home Cleaning Services",
  description: "Professional home cleaning services for a spotless, healthy and happy home.",
  alternates: { canonical: canonicalPath("/services/home-cleaning") },
};

const cleaningCards = [
  {
    id: "basic",
    title: "Basic Home Cleaning",
    description: "General cleaning for a fresh and tidy home.",
    price: "₹399",
    icon: <Armchair className="w-8 h-8 text-[#22C55E]" strokeWidth={1.5} />,
    iconBg: "bg-[#F0FDF4]",
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    description: "Thorough cleaning for every nook and corner.",
    price: "₹999",
    icon: <SprayCan className="w-8 h-8 text-[#3B82F6]" strokeWidth={1.5} />,
    iconBg: "bg-[#EFF6FF]",
  },
  {
    id: "kitchen",
    title: "Kitchen Cleaning",
    description: "Deep clean & degrease your modular kitchen.",
    price: "₹599",
    icon: <CookingPot className="w-8 h-8 text-[#F97316]" strokeWidth={1.5} />,
    iconBg: "bg-[#FFF7ED]",
  },
  {
    id: "bathroom",
    title: "Bathroom Cleaning",
    description: "Sanitize & disinfect for a hygienic bathroom.",
    price: "₹499",
    icon: <Bath className="w-8 h-8 text-[#0EA5E9]" strokeWidth={1.5} />,
    iconBg: "bg-[#F0F9FF]",
  },
  {
    id: "full",
    title: "Full Home Cleaning",
    description: "Complete home cleaning for a sparkling home.",
    price: "₹1,499",
    icon: <Home className="w-8 h-8 text-[#A855F7]" strokeWidth={1.5} />,
    iconBg: "bg-[#FAF5FF]",
  },
  {
    id: "move",
    title: "Move In / Move Out",
    description: "Perfect cleaning for a fresh new start.",
    price: "₹1,199",
    icon: <Package className="w-8 h-8 text-[#EAB308]" strokeWidth={1.5} />,
    iconBg: "bg-[#FEFCE8]",
  },
];

export default function HomeCleaningPage() {
  return (
    <div className="overflow-x-hidden antialiased bg-[#FFFFFF]" style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <main className="pt-[60px] lg:pt-[80px]">
        {/* ─── HERO SECTION ──────────────────────────────────────────────────────── */}
        <section className="relative w-full pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Background Split */}
          <div className="absolute inset-0 z-0 flex">
            <div className="w-full lg:w-[45%] bg-white h-full"></div>
            <div className="w-full lg:w-[55%] h-full relative hidden lg:block">
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-1/3"></div>
               <Image src="/images/home-cleaning/hero.png" alt="Professional home cleaning" fill className="object-cover object-left" priority quality={100} />
            </div>
          </div>

          <Container isMaxWidth className="relative z-10 w-full flex-1">
            <div className="flex flex-col lg:flex-row justify-between h-full w-full">
              
              {/* Left Content */}
              <div className="w-full lg:w-[55%] z-10 pb-10 lg:pb-0 pt-6">
                
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[14px] text-[#7A7A7A] mb-8 bg-[#FFF6F0] px-4 py-2 rounded-full w-fit">
                  <Link href="/" className="hover:text-[#F26B21] transition-colors flex items-center gap-1"><Home className="w-3.5 h-3.5" /> Home</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#F26B21] font-medium">Home Cleaning</span>
                </div>
                
                <h1 
                  className="text-[clamp(46px,5vw,64px)] leading-[1.05] font-extrabold text-[#1A1A1A] tracking-tight mb-5"
                  style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                >
                  A Cleaner Home,<br />
                  <span className="text-[#F26B21] flex items-center gap-3">A Better Life. <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-[#F26B21] opacity-70" strokeWidth={1.5} /></span>
                </h1>
                
                <p className="text-[18px] lg:text-[20px] leading-relaxed text-[#5B5B5B] max-w-md mb-10">
                  Professional home cleaning services<br className="hidden md:block"/>
                  for a spotless, healthy and happy home.
                </p>

                {/* Features Highlights */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-6 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-green-200 bg-white shadow-sm flex items-center justify-center text-green-600"><ShieldCheck className="w-5 h-5" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[12px] font-bold text-[#1A1A1A] leading-tight">Trained &amp; Verified</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight mt-0.5">Professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-green-200 bg-white shadow-sm flex items-center justify-center text-green-600"><Leaf className="w-5 h-5" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[12px] font-bold text-[#1A1A1A] leading-tight">Eco-Friendly</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight mt-0.5">Products</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#FCECE4] bg-white shadow-sm flex items-center justify-center text-[#F26B21]"><Clock className="w-5 h-5" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[12px] font-bold text-[#1A1A1A] leading-tight">On-Time</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight mt-0.5">Service</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#FCECE4] bg-white shadow-sm flex items-center justify-center text-[#F26B21]"><ShieldCheck className="w-5 h-5" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[12px] font-bold text-[#1A1A1A] leading-tight">Satisfaction</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight mt-0.5">Guaranteed</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <button className="bg-[#F26B21] text-white px-7 py-3.5 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-[#D95D1A] transition-colors shadow-md">
                    Book Home Cleaning <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-white border border-[#FCECE4] text-[#F26B21] px-7 py-3.5 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                    How It Works <PlayCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Floating Card */}
              <div className="w-full lg:w-[40%] flex justify-end items-center mt-12 lg:mt-0 relative z-20">
                <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col min-w-[320px]">
                  
                  <div className="flex items-center gap-2 bg-[#FFF6F0] text-[#F26B21] px-4 py-1.5 rounded-full text-[12px] font-bold mb-6 w-fit border border-[#FCECE4]">
                    <ShieldCheck size={14} strokeWidth={2.5} /> Book with Confidence
                  </div>

                  <p className="text-[14px] font-bold text-[#1A1A1A] mb-1">Starting at</p>
                  <div className="flex items-start mb-6">
                    <span className="text-[56px] font-extrabold text-[#F26B21] leading-none tracking-tight">₹399</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-[14px] font-medium text-[#1A1A1A]">
                      <CheckCircle2 className="w-5 h-5 text-green-500" strokeWidth={2.5} /> Deep &amp; Detailed Cleaning
                    </li>
                    <li className="flex items-center gap-3 text-[14px] font-medium text-[#1A1A1A]">
                      <CheckCircle2 className="w-5 h-5 text-green-500" strokeWidth={2.5} /> No Hidden Charges
                    </li>
                    <li className="flex items-center gap-3 text-[14px] font-medium text-[#1A1A1A]">
                      <CheckCircle2 className="w-5 h-5 text-green-500" strokeWidth={2.5} /> Safe for Kids &amp; Pets
                    </li>
                    <li className="flex items-center gap-3 text-[14px] font-medium text-[#1A1A1A]">
                      <CheckCircle2 className="w-5 h-5 text-green-500" strokeWidth={2.5} /> Flexible Scheduling
                    </li>
                  </ul>

                  <button className="w-full bg-[#F26B21] text-white py-4 rounded-xl text-[16px] font-bold flex items-center justify-center gap-2 hover:bg-[#D95D1A] transition-colors shadow-md">
                    Book Now <ArrowRightCircle className="w-5 h-5" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </Container>
          
          {/* Mobile only image */}
          <div className="w-full h-[350px] relative lg:hidden mt-8">
             <Image src="/images/home-cleaning/hero.png" alt="Professional home cleaning" fill className="object-cover object-left" priority />
          </div>
        </section>

        {/* ─── CARDS SECTION ─────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white relative z-20 border-t border-gray-50">
          <Container isMaxWidth>
            <div className="text-center mb-16">
              <h2 className="text-[clamp(32px,4vw,40px)] font-bold text-[#1A1A1A] leading-tight mb-3" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>
                Our Home Cleaning Services
              </h2>
              <p className="text-[16px] text-[#5B5B5B]">
                Tailored cleaning solutions for every corner of your home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {cleaningCards.map((card) => (
                <div key={card.id} className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all relative flex flex-col items-center p-8 text-center group cursor-pointer h-full">
                  
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  
                  <h3 className="font-bold text-[#1A1A1A] text-[16px] leading-tight mb-3">{card.title}</h3>
                  <p className="text-[12px] text-[#7A7A7A] leading-relaxed mb-8 flex-1">{card.description}</p>
                  
                  <div className="mt-auto w-full flex items-center justify-between border-t border-gray-50 pt-4">
                    <div className="flex flex-col items-start">
                       <span className="text-[11px] text-[#7A7A7A]">Starting at</span>
                       <span className="text-[16px] font-bold text-[#F26B21]">{card.price}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#FFF6F0] bg-[#FFF6F0] flex items-center justify-center text-[#F26B21] group-hover:bg-[#F26B21] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── TRUST BADGES ──────────────────────────────────────────────────────── */}
        <section className="pb-24 bg-white">
          <Container isMaxWidth>
            <div className="bg-[#FCFBF9] rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-green-600 border border-green-100 shadow-sm">
                    <ShieldCheck strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Background Verified</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">&amp; Trained Professionals</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-green-600 border border-green-100 shadow-sm">
                    <Leaf strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Eco-Friendly</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">Cleaning Products</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#F26B21] border border-[#FCECE4] shadow-sm">
                    <CalendarClock strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Flexible Scheduling</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">As Per Your Convenience</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-blue-500 border border-blue-100 shadow-sm">
                    <Wallet strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Transparent Pricing</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">No Hidden Charges</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-purple-500 border border-purple-100 shadow-sm">
                    <Smile strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">100% Satisfaction</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">Guaranteed</p>
                  </div>
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
