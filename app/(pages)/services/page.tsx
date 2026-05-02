import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import Container from "@/app/components/layout/Container";
import { WixMadeForDisplayFont, SatoshiFont } from "@/app/fonts";
import type { Metadata } from "next";
import { canonicalPath } from "@/app/lib/site-config";
import { ShieldCheck, Clock, Leaf, Headphones, Users, Smile, ArrowRight, Apple, Play, Droplet } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Laundry, home cleaning, doorstep car wash, and pest control — explore Wash & Wow services and book from the app.",
  alternates: { canonical: canonicalPath("/services") },
};

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden antialiased bg-white" style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />
      
      <main className="pt-[20px] lg:pt-[70px]">
        
        {/* ─── Hero Section ────────────────────────────────────────────────────────── */}
        <section className="relative w-full pb-32 lg:pb-48 pt-0">
          {/* Background Curve Right Side */}
          <div className="absolute right-0 top-0 h-full w-[80%] lg:w-[60%] z-0 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[#F8F1EB]">
              <path d="M100,0 L100,100 L0,100 C20,70 50,40 20,0 Z" />
            </svg>
          </div>
          
          {/* Bottom Wave to transition out of hero */}
          <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none translate-y-[1px]">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-white fill-current">
              <path d="M0 120L1440 120L1440 0C1440 0 1100 80 720 80C340 80 0 0 0 0L0 120Z"/>
            </svg>
          </div>

          <Container isMaxWidth className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Left Content */}
              <div className="pt-0 pr-0 lg:pr-10">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] font-medium text-[#7A7A7A] mb-8">
                  <Link href="/" className="hover:text-black transition-colors">Home</Link>
                  <span>&gt;</span>
                  <span className="text-black">Services</span>
                </div>

                <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F26B21] mb-5">
                  OUR SERVICES
                </div>
                
                <h1 
                  className="text-[clamp(3rem,5vw,4.5rem)] leading-[1.05] font-extrabold text-[#1A1A1A] tracking-tight mb-6"
                  style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                >
                  Care for every<br />
                  corner of <span className="text-[#F26B21]">your home.</span>
                </h1>
                
                <p className="text-[16px] lg:text-[18px] leading-relaxed text-[#5B5B5B] max-w-md mb-10">
                  From laundry to pest control, we bring professional care right to your doorstep. Reliable. Convenient. Hassle-free.
                </p>

                {/* 4 Feature Items Inline */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-x-6 gap-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-200 bg-white">
                      <ShieldCheck className="h-4 w-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[12px] font-bold text-[#1A1A1A] leading-tight">Background<br/>Verified Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-200 bg-white">
                      <Clock className="h-4 w-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[12px] font-bold text-[#1A1A1A] leading-tight">On-Time<br/>Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-200 bg-white">
                      <Leaf className="h-4 w-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[12px] font-bold text-[#1A1A1A] leading-tight">Safe & Eco<br/>Friendly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-200 bg-white">
                      <Headphones className="h-4 w-4 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[12px] font-bold text-[#1A1A1A] leading-tight">Hassle-free<br/>Support</span>
                  </div>
                </div>
              </div>

              {/* Right Image Container */}
              <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full flex justify-end items-end">
                {/* Main Worker Image */}
                <div className="relative h-[95%] w-[95%] ml-auto right-[0%] lg:right-[-5%] bottom-[0%] z-10">
                  <Image 
                    src="/images/services/services_hero_worker.png" 
                    alt="Wash and Wow Professional Cleaner" 
                    fill 
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
                
                {/* Floating Badges */}
                <div className="absolute top-[10%] left-[5%] lg:-left-[10%] z-20 flex items-center gap-3 bg-white rounded-full pr-5 pl-2 py-2 shadow-xl border border-gray-100">
                   <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#F5EBE1]">
                     <Image src="/images/services/laundry.png" alt="Laundry icon" width={24} height={24} className="opacity-80" />
                   </div>
                   <div>
                     <p className="text-[14px] font-bold text-[#1A1A1A] leading-none">Laundry</p>
                     <p className="text-[12px] text-[#7A7A7A] mt-0.5">Fresh & Clean</p>
                   </div>
                </div>

                <div className="absolute top-[25%] right-0 lg:-right-[5%] z-20 flex items-center gap-3 bg-white rounded-full pr-5 pl-2 py-2 shadow-xl border border-gray-100">
                   <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#F5EBE1]">
                     <Image src="/images/services/pest-control.png" alt="Pest Control icon" width={24} height={24} className="opacity-80" />
                   </div>
                   <div>
                     <p className="text-[14px] font-bold text-[#1A1A1A] leading-none">Pest Control</p>
                     <p className="text-[12px] text-[#7A7A7A] mt-0.5">Safe & Effective</p>
                   </div>
                </div>

                <div className="absolute top-[50%] left-[-5%] lg:-left-[15%] z-20 flex items-center gap-3 bg-white rounded-full pr-5 pl-2 py-2 shadow-xl border border-gray-100">
                   <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#F5EBE1]">
                     <Image src="/images/services/car-wash.png" alt="Car Wash icon" width={24} height={24} className="opacity-80" />
                   </div>
                   <div>
                     <p className="text-[14px] font-bold text-[#1A1A1A] leading-none">Car Wash</p>
                     <p className="text-[12px] text-[#7A7A7A] mt-0.5">Spotless Shine</p>
                   </div>
                </div>

                <div className="absolute bottom-[10%] right-[-5%] lg:-right-[10%] z-20 flex items-center gap-3 bg-white rounded-full pr-5 pl-2 py-2 shadow-xl border border-gray-100">
                   <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#F5EBE1]">
                     <Image src="/images/services/home-cleaning.png" alt="Home Cleaning icon" width={24} height={24} className="opacity-80" />
                   </div>
                   <div>
                     <p className="text-[14px] font-bold text-[#1A1A1A] leading-none">Home Cleaning</p>
                     <p className="text-[12px] text-[#7A7A7A] mt-0.5">Neat & Tidy</p>
                   </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── Our Premium Services Grid ────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <Container isMaxWidth>
            <div className="text-center mb-12">
              <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F26B21] mb-3">
                WHAT WE OFFER
              </div>
              <h2 
                className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-[#1A1A1A]"
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                Our Premium Services
              </h2>
              <div className="w-12 h-1 bg-[#F26B21] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:h-[650px]">
              
              {/* Laundry Block - Full Height */}
              <div className="relative group rounded-3xl overflow-hidden md:col-span-1 lg:col-span-1 lg:row-span-2 h-[400px] lg:h-full">
                <Image src="/images/services/laundry_service_img.png" alt="Laundry Service" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 bg-white text-black px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-5">
                      <span className="text-[#F26B21]">★</span> MOST POPULAR
                    </span>
                    <h3 className="text-4xl font-medium text-white mb-3" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>Laundry<br/>Service</h3>
                    <p className="text-white/80 text-[15px] max-w-[200px] leading-relaxed">
                      Fresh, clean and perfectly cared for. We handle your laundry with care.
                    </p>
                  </div>
                  <div>
                    {/* Tiny icons row */}
                    <div className="flex items-center gap-4 mb-6">
                       <div className="flex flex-col items-center gap-1.5">
                         <div className="w-10 h-10 border border-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"><Image src="/images/services/laundry.png" alt="icon" width={18} height={18} className="brightness-0 invert" /></div>
                         <span className="text-[10px] text-white font-medium text-center leading-tight">Premium<br/>Detergents</span>
                       </div>
                       <div className="flex flex-col items-center gap-1.5">
                         <div className="w-10 h-10 border border-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"><Image src="/images/services/steampress.png" alt="icon" width={18} height={18} className="brightness-0 invert" /></div>
                         <span className="text-[10px] text-white font-medium text-center leading-tight">Steam<br/>Ironing</span>
                       </div>
                       <div className="flex flex-col items-center gap-1.5">
                         <div className="w-10 h-10 border border-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"><Droplet className="w-4 h-4 text-white" /></div>
                         <span className="text-[10px] text-white font-medium text-center leading-tight">Stain<br/>Treatment</span>
                       </div>
                    </div>
                    <Link href="/services/laundry" className="bg-white text-black px-6 py-3 rounded-full text-[14px] font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors w-fit">
                      Book Laundry <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Car Wash Block */}
              <div className="relative group rounded-3xl overflow-hidden h-[300px] lg:h-auto lg:col-span-1 lg:row-span-1">
                <Image src="/images/services/car_wash_img.png" alt="Car Wash" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[2rem] leading-tight font-medium text-white mb-2" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>Door to Door<br/>Car Wash</h3>
                    <p className="text-white/80 text-[14px] max-w-[200px]">Spotless shine, right at your doorstep.</p>
                  </div>
                  <Link href="/services/car-wash" className="bg-white text-black px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 self-start hover:bg-gray-100 transition-colors w-fit">
                    Book Car Wash <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Pest Control Block */}
              <div className="relative group rounded-3xl overflow-hidden h-[300px] lg:h-auto lg:col-span-1 lg:row-span-1 bg-black">
                <Image src="/images/services/pest-control.png" alt="Pest Control Background" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[2rem] leading-tight font-medium text-white mb-2" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>Pest Control</h3>
                    <p className="text-white/80 text-[14px] max-w-[220px]">Safe, effective and long-lasting solutions for a pest-free home.</p>
                  </div>
                  <button className="bg-white text-black px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 self-start hover:bg-gray-100 transition-colors">
                    Book Pest Control <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Home Cleaning Block */}
              <div className="relative group rounded-3xl overflow-hidden h-[300px] lg:h-auto md:col-span-2 lg:col-span-2 lg:row-span-1 bg-black">
                <Image src="/images/services/home-cleaning.png" alt="Home Cleaning Background" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[2rem] leading-tight font-medium text-white mb-2" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>Home Cleaning</h3>
                    <p className="text-white/80 text-[14px] max-w-[240px]">A cleaner home for a healthier you. Sit back and relax.</p>
                  </div>
                  <button className="bg-white text-black px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 self-start hover:bg-gray-100 transition-colors">
                    Book Home Cleaning <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ─── Why Choose Us ──────────────────────────────────────────────────────── */}
        <section className="py-20 bg-[#FAFAFA] mt-10">
          <Container isMaxWidth>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
              
              {/* Left Side */}
              <div>
                <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F26B21] mb-3">
                  WHY CHOOSE US
                </div>
                <h2 
                  className="text-[clamp(2.2rem,3.5vw,3rem)] font-bold text-[#1A1A1A] leading-[1.1] mb-4"
                  style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                >
                  Trusted care.<br/>Every time.
                </h2>
                <p className="text-[#5B5B5B] text-[15px] leading-relaxed">
                  We go the extra mile to deliver an experience that&apos;s reliable, seamless and worth coming back to.
                </p>
              </div>

              {/* Right Side Icons Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-4">
                    <Users className="h-6 w-6 text-[#1A1A1A]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A] text-[15px] mb-2 leading-tight">Trained &<br/>Verified Experts</h4>
                  <p className="text-[13px] text-[#7A7A7A] leading-relaxed">Skilled professionals you can rely on.</p>
                </div>

                <div className="flex flex-col items-center text-center border-l border-gray-200/50 pl-0 md:pl-8">
                  <div className="h-16 w-16 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-4">
                    <Clock className="h-6 w-6 text-[#1A1A1A]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A] text-[15px] mb-2 leading-tight">On-Time,<br/>Every Time</h4>
                  <p className="text-[13px] text-[#7A7A7A] leading-relaxed">Punctual service that respects your time.</p>
                </div>

                <div className="flex flex-col items-center text-center md:border-l border-gray-200/50 pl-0 md:pl-8">
                  <div className="h-16 w-16 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-4">
                    <Leaf className="h-6 w-6 text-[#1A1A1A]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A] text-[15px] mb-2 leading-tight">Safe &<br/>Eco-Friendly</h4>
                  <p className="text-[13px] text-[#7A7A7A] leading-relaxed">Products and methods that are safe for you and the environment.</p>
                </div>

                <div className="flex flex-col items-center text-center border-l border-gray-200/50 pl-0 md:pl-8">
                  <div className="h-16 w-16 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-4">
                    <Smile className="h-6 w-6 text-[#1A1A1A]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A] text-[15px] mb-2 leading-tight">Satisfaction<br/>Guaranteed</h4>
                  <p className="text-[13px] text-[#7A7A7A] leading-relaxed">We&apos;re not happy until you are.</p>
                </div>

              </div>
            </div>
          </Container>
        </section>

        {/* ─── CTA Download Banner ────────────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <Container isMaxWidth>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#F4813E] to-[#FCD2B2] p-10 md:p-14 min-h-[300px] flex items-center">
              
              {/* Overlay Background image if available */}
              <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                <Image src="/images/services/laundry_service_img.png" alt="Texture" fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="relative z-10 grid md:grid-cols-2 w-full">
                <div>
                  <p className="text-white/90 text-[14px] font-medium mb-2">Your time is precious.</p>
                  <h2 
                    className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white leading-[1.1] mb-4"
                    style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                  >
                    Let us take care<br/>of the rest.
                  </h2>
                  <p className="text-white/90 text-[15px] mb-8 max-w-sm">
                    Book your service in seconds and enjoy a cleaner, happier home.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <button className="bg-[#1A1A1A] text-white px-6 py-3.5 rounded-full text-[14px] font-bold flex items-center gap-2 hover:bg-black transition-colors">
                      Book a Service <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-black/80 font-medium text-[14px] px-2">or Download the App</span>
                    <div className="flex gap-2">
                      <div className="bg-black/10 p-2 rounded-full"><Apple className="w-4 h-4 text-[#1A1A1A]" /></div>
                      <div className="bg-black/10 p-2 rounded-full"><Play className="w-4 h-4 text-[#1A1A1A]" /></div>
                    </div>
                  </div>
                </div>

                {/* Right side phone mockup */}
                <div className="hidden md:block absolute right-[10%] bottom-[-20%] w-[250px] h-[500px]">
                  {/* Phone Mockup Frame shape */}
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-100 overflow-hidden pt-10 px-5 flex flex-col items-center">
                    {/* Top Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-6 bg-gray-100 rounded-b-xl"></div>
                    
                    <div className="w-full text-left mb-6">
                      <p className="text-[12px] text-gray-500">Hi, Neha 👋</p>
                      <h4 className="text-[18px] font-bold text-black leading-tight">What service<br/>do you need?</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full">
                       <div className="bg-gray-50 aspect-square rounded-2xl flex flex-col items-center justify-center border border-gray-100">
                         <Image src="/images/services/laundry.png" alt="Laundry" width={32} height={32} />
                         <span className="text-[10px] font-bold mt-2">Laundry</span>
                       </div>
                       <div className="bg-gray-50 aspect-square rounded-2xl flex flex-col items-center justify-center border border-gray-100">
                         <Image src="/images/services/car-wash.png" alt="Car Wash" width={32} height={32} />
                         <span className="text-[10px] font-bold mt-2">Car Wash</span>
                       </div>
                       <div className="bg-gray-50 aspect-square rounded-2xl flex flex-col items-center justify-center border border-gray-100">
                         <Image src="/images/services/pest-control.png" alt="Pest Control" width={32} height={32} />
                         <span className="text-[10px] font-bold mt-2">Pest Control</span>
                       </div>
                       <div className="bg-gray-50 aspect-square rounded-2xl flex flex-col items-center justify-center border border-gray-100">
                         <Image src="/images/services/home-cleaning.png" alt="Home Cleaning" width={32} height={32} />
                         <span className="text-[10px] font-bold mt-2 text-center">Home<br/>Cleaning</span>
                       </div>
                    </div>
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
