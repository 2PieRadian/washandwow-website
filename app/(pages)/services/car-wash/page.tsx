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
  CarFront,
  ShieldCheck,
  Droplet,
  Clock,
  ThumbsUp,
  ArrowRight,
  PlayCircle,
  Check,
  Sparkles,
  Shield,
  Wind,
  Bike,
  UserCheck,
  Leaf
} from "lucide-react";

export const metadata: Metadata = {
  title: "Doorstep Car Wash",
  description: "Professional car wash, at your doorstep. We come to you with water-saving technology, premium products & expert care.",
  alternates: { canonical: canonicalPath("/services/car-wash") },
};

const washCards = [
  {
    id: "basic",
    title: "Basic Wash",
    description: "Exterior wash to remove dust & dirt",
    price: "₹299",
    time: "30 mins",
    icon: <CarFront className="w-8 h-8 text-[#F26B21]" strokeWidth={1.5} />,
    iconBg: "bg-[#FFF6F0]",
    isPopular: false,
  },
  {
    id: "standard",
    title: "Standard Wash",
    description: "Exterior + Interior vacuum & dashboard cleaning",
    price: "₹499",
    time: "45 mins",
    icon: <CarFront className="w-8 h-8 text-[#F26B21]" strokeWidth={1.5} />,
    iconBg: "bg-[#FFF6F0]",
    isPopular: true,
  },
  {
    id: "premium",
    title: "Premium Wash",
    description: "Exterior + Interior deep cleaning & polishing",
    price: "₹799",
    time: "60 mins",
    icon: <Sparkles className="w-8 h-8 text-[#F26B21]" strokeWidth={1.5} />,
    iconBg: "bg-[#FFF6F0]",
    isPopular: false,
  },
  {
    id: "ceramic",
    title: "Ceramic Wash",
    description: "Premium wash with ceramic coating for long protection",
    price: "₹1,299",
    time: "90 mins",
    icon: <Shield className="w-8 h-8 text-[#4CAF50]" strokeWidth={1.5} />,
    iconBg: "bg-[#F0FDF4]",
    isPopular: false,
  },
  {
    id: "steam",
    title: "Steam Wash",
    description: "High temperature steam cleaning & sanitization",
    price: "₹999",
    time: "60 mins",
    icon: <Wind className="w-8 h-8 text-[#8B5CF6]" strokeWidth={1.5} />,
    iconBg: "bg-[#F5F3FF]",
    isPopular: true,
  },
  {
    id: "two-wheeler",
    title: "Two Wheeler Wash",
    description: "Complete bike/scooter wash & polish",
    price: "₹199",
    time: "20 mins",
    icon: <Bike className="w-8 h-8 text-[#3B82F6]" strokeWidth={1.5} />,
    iconBg: "bg-[#EFF6FF]",
    isPopular: false,
  },
];

export default function CarWashPage() {
  return (
    <div className="overflow-x-hidden antialiased bg-[#FAFAFA]" style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <main className="pt-[60px] lg:pt-[80px]">
        {/* ─── HERO SECTION ──────────────────────────────────────────────────────── */}
        <section className="relative w-full pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-r from-[#FFF9F5] to-[#F2E8DF] overflow-hidden">
          <Container isMaxWidth className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              
              {/* Left Content */}
              <div className="w-full lg:w-1/2 z-10">
                <div className="flex items-center gap-2 bg-[#FFF6F0] border border-[#FCECE4] text-[#F26B21] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wide w-fit mb-6 shadow-sm">
                  <CarFront size={16} strokeWidth={2.5} /> Doorstep Car Wash
                </div>
                
                <h1 
                  className="text-[clamp(40px,5vw,56px)] leading-[1.1] font-extrabold text-[#1A1A1A] tracking-tight mb-5"
                  style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                >
                  Professional Car Wash,<br />
                  <span className="text-[#F26B21]">At Your Doorstep.</span>
                </h1>
                
                <p className="text-[18px] lg:text-[20px] leading-relaxed text-[#5B5B5B] max-w-lg mb-10">
                  We come to you with water-saving technology,<br className="hidden md:block"/>
                  premium products &amp; expert care.
                </p>

                {/* Features Highlights */}
                <div className="flex flex-wrap items-start gap-x-8 gap-y-5 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="text-[#F26B21]"><Droplet className="w-6 h-6" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#1A1A1A] leading-tight">Saves Water</h4>
                      <p className="text-[12px] text-[#7A7A7A] leading-tight mt-0.5">Eco-friendly wash</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-[#F26B21]"><Clock className="w-6 h-6" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#1A1A1A] leading-tight">Saves Time</h4>
                      <p className="text-[12px] text-[#7A7A7A] leading-tight mt-0.5">We come to you</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-[#F26B21]"><ShieldCheck className="w-6 h-6" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#1A1A1A] leading-tight">Premium Care</h4>
                      <p className="text-[12px] text-[#7A7A7A] leading-tight mt-0.5">Best quality products</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-[#F26B21]"><ThumbsUp className="w-6 h-6" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#1A1A1A] leading-tight">100% Safe</h4>
                      <p className="text-[12px] text-[#7A7A7A] leading-tight mt-0.5">No scratches</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <button className="bg-[#F26B21] text-white px-7 py-3.5 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-[#D95D1A] transition-colors shadow-md">
                    Book Car Wash <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-white border border-gray-200 text-[#1A1A1A] px-7 py-3.5 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                    How It Works <PlayCircle className="w-5 h-5 text-[#F26B21]" />
                  </button>
                </div>
              </div>

              {/* Right Content / Image Area */}
              <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative h-[400px] lg:h-[500px]">
                <div className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[140%] h-[120%] lg:w-[150%] lg:h-[130%] z-0 mix-blend-multiply opacity-95 pointer-events-none">
                  <Image src="/images/car-wash/hero.png" alt="Car wash professional at doorstep" fill className="object-contain object-right" priority quality={100} />
                </div>
                
                {/* Floating Pricing Card */}
                <div className="absolute bottom-[-10%] left-[5%] lg:bottom-10 lg:left-[-10%] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-8 z-20">
                  <div>
                    <p className="text-[14px] font-medium text-[#7A7A7A] mb-1">Starting at</p>
                    <div className="flex items-start">
                      <span className="text-[42px] font-extrabold text-[#F26B21] leading-none tracking-tight">₹299</span>
                    </div>
                  </div>
                  <div className="w-px h-16 bg-gray-100 hidden sm:block"></div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[13px] font-medium text-[#5B5B5B]">
                      <div className="bg-[#FFF6F0] rounded-full p-0.5"><Check className="w-3 h-3 text-[#F26B21]" strokeWidth={3} /></div> Free Pickup &amp; Delivery
                    </li>
                    <li className="flex items-center gap-2 text-[13px] font-medium text-[#5B5B5B]">
                      <div className="bg-[#FFF6F0] rounded-full p-0.5"><Check className="w-3 h-3 text-[#F26B21]" strokeWidth={3} /></div> No Hidden Charges
                    </li>
                    <li className="flex items-center gap-2 text-[13px] font-medium text-[#5B5B5B]">
                      <div className="bg-[#FFF6F0] rounded-full p-0.5"><Check className="w-3 h-3 text-[#F26B21]" strokeWidth={3} /></div> Satisfaction Guaranteed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── CARDS SECTION ─────────────────────────────────────────────────────── */}
        <section className="py-20 relative z-20">
          <Container isMaxWidth>
            <div className="text-center mb-16">
              <h2 className="text-[clamp(32px,4vw,40px)] font-bold text-[#1A1A1A] leading-tight mb-3" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>
                Our Doorstep Car Wash Services
              </h2>
              <p className="text-[16px] text-[#5B5B5B]">
                Choose the perfect wash for your car
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
              {washCards.map((card) => (
                <div key={card.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow relative flex flex-col items-center p-6 pt-8 text-center group">
                  {card.isPopular && (
                    <div className="absolute top-0 right-4 bg-[#F26B21] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-lg shadow-sm">
                      Popular
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  
                  <h3 className="font-bold text-[#1A1A1A] text-[16px] leading-tight mb-2">{card.title}</h3>
                  <p className="text-[12px] text-[#7A7A7A] leading-snug mb-6 flex-1 px-2">{card.description}</p>
                  
                  <div className="w-full flex items-center justify-between mb-5 px-2">
                    <span className="text-[20px] font-bold text-[#F26B21] leading-none">{card.price}</span>
                    <div className="flex items-center gap-1.5 text-[#7A7A7A]">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[12px] font-medium">{card.time}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-2.5 rounded-full border border-[#F26B21] text-[#F26B21] font-bold text-[14px] hover:bg-[#F26B21] hover:text-white transition-colors bg-transparent">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── TRUST BADGES ──────────────────────────────────────────────────────── */}
        <section className="pb-20">
          <Container isMaxWidth>
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFF6F0] flex items-center justify-center text-[#F26B21] border border-[#FCECE4]">
                    <UserCheck strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Verified Professionals</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">Trained &amp; background<br/>verified experts</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#F0FDF4] flex items-center justify-center text-[#4CAF50] border border-[#DCFCE7]">
                    <Leaf strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Eco-Friendly Products</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">Safe for your car &amp;<br/>environment</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#F0F9FF] flex items-center justify-center text-[#0EA5E9] border border-[#E0F2FE]">
                    <Droplet strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Water Saving Technology</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">Uses 90% less water<br/>than regular wash</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#F97316] border border-[#FFEDD5]">
                    <Clock strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">On-Time Service</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">We value your time,<br/>always on schedule</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFF6F0] flex items-center justify-center text-[#F26B21] border border-[#FCECE4]">
                    <ShieldCheck strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Satisfaction Guaranteed</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">Not happy? We&apos;ll<br/>make it right</p>
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
