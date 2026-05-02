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
      
      <main className="pt-[70px] lg:pt-[90px] px-5">
        
        {/* ─── Hero Section ────────────────────────────────────────────────────────── */}
        <section className="relative w-full pb-16 sm:pb-24 lg:pb-48 pt-8 lg:pt-0">
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
              <div className="pt-0 pr-0">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] font-medium text-[#7A7A7A] mb-6 bg-[#FFF6F0] px-3 py-1.5 rounded-full w-fit">
                  <Link href="/" className="hover:text-black transition-colors">Home</Link>
                  <span>&gt;</span>
                  <span className="text-[#F26B21]">Services</span>
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
              <div className="relative h-[300px] sm:h-[420px] lg:h-[600px] w-full flex justify-end items-end">
                {/* Main Worker Image */}
                <div className="relative h-[95%] w-full lg:w-[95%] lg:ml-auto lg:right-[-5%] bottom-[0%] z-10">
                  <Image 
                    src="/images/services/services_hero_worker.png" 
                    alt="Wash and Wow Professional Cleaner" 
                    fill 
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
                
                {/* Floating Badges — hidden on mobile, clickable links */}
                <Link
                  href="/services/laundry"
                  className="hidden sm:flex absolute top-[10%] left-[5%] lg:-left-[10%] z-20 items-center gap-3 bg-white rounded-full pr-4 pl-2 py-2 shadow-xl border border-gray-100 cursor-pointer group/badge transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#F26B21]/30 hover:bg-[#FFFBF8]"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#F5EBE1] group-hover/badge:bg-[#FFF6F0] transition-colors duration-300">
                    <Image src="/images/services/laundry.png" alt="Laundry icon" width={24} height={24} className="opacity-80 group-hover/badge:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1A1A1A] leading-none group-hover/badge:text-[#F26B21] transition-colors duration-200">Laundry</p>
                    <p className="text-[12px] text-[#7A7A7A] mt-0.5">Fresh &amp; Clean</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F26B21] opacity-0 -translate-x-1 group-hover/badge:opacity-100 group-hover/badge:translate-x-0 transition-all duration-200" />
                </Link>

                <Link
                  href="/services/pest-control"
                  className="hidden sm:flex absolute top-[25%] right-0 lg:-right-[5%] z-20 items-center gap-3 bg-white rounded-full pr-4 pl-2 py-2 shadow-xl border border-gray-100 cursor-pointer group/badge2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#F26B21]/30 hover:bg-[#FFFBF8]"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#F5EBE1] group-hover/badge2:bg-[#FFF6F0] transition-colors duration-300">
                    <Image src="/images/services/pest-control.png" alt="Pest Control icon" width={24} height={24} className="opacity-80 group-hover/badge2:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1A1A1A] leading-none group-hover/badge2:text-[#F26B21] transition-colors duration-200">Pest Control</p>
                    <p className="text-[12px] text-[#7A7A7A] mt-0.5">Safe &amp; Effective</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F26B21] opacity-0 -translate-x-1 group-hover/badge2:opacity-100 group-hover/badge2:translate-x-0 transition-all duration-200" />
                </Link>

                <Link
                  href="/services/car-wash"
                  className="hidden lg:flex absolute top-[50%] left-[-5%] lg:-left-[15%] z-20 items-center gap-3 bg-white rounded-full pr-4 pl-2 py-2 shadow-xl border border-gray-100 cursor-pointer group/badge3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#F26B21]/30 hover:bg-[#FFFBF8]"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#F5EBE1] group-hover/badge3:bg-[#FFF6F0] transition-colors duration-300">
                    <Image src="/images/services/car-wash.png" alt="Car Wash icon" width={24} height={24} className="opacity-80 group-hover/badge3:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1A1A1A] leading-none group-hover/badge3:text-[#F26B21] transition-colors duration-200">Car Wash</p>
                    <p className="text-[12px] text-[#7A7A7A] mt-0.5">Spotless Shine</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F26B21] opacity-0 -translate-x-1 group-hover/badge3:opacity-100 group-hover/badge3:translate-x-0 transition-all duration-200" />
                </Link>

                <Link
                  href="/services/home-cleaning"
                  className="hidden sm:flex absolute bottom-[10%] right-[-5%] lg:-right-[10%] z-20 items-center gap-3 bg-white rounded-full pr-4 pl-2 py-2 shadow-xl border border-gray-100 cursor-pointer group/badge4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#F26B21]/30 hover:bg-[#FFFBF8]"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#F5EBE1] group-hover/badge4:bg-[#FFF6F0] transition-colors duration-300">
                    <Image src="/images/services/home-cleaning.png" alt="Home Cleaning icon" width={24} height={24} className="opacity-80 group-hover/badge4:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1A1A1A] leading-none group-hover/badge4:text-[#F26B21] transition-colors duration-200">Home Cleaning</p>
                    <p className="text-[12px] text-[#7A7A7A] mt-0.5">Neat &amp; Tidy</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F26B21] opacity-0 -translate-x-1 group-hover/badge4:opacity-100 group-hover/badge4:translate-x-0 transition-all duration-200" />
                </Link>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:h-[650px] -mx-5 sm:mx-0 px-5 sm:px-0">
              
              {/* Laundry Block - Full Height */}
              <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden sm:col-span-2 lg:col-span-1 lg:row-span-2 h-[440px] sm:h-[440px] lg:h-full">
                <Image src="/images/services/laundry_service_img.png" alt="Laundry Service" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 bg-white text-black px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-5">
                      <span className="text-[#F26B21]">★</span> MOST POPULAR
                    </span>
                    <h3 className="text-3xl font-medium text-white mb-3" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>Laundry<br/>Service</h3>
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
              <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden h-[240px] sm:h-[280px] lg:h-auto lg:col-span-1 lg:row-span-1">
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
              <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden h-[240px] sm:h-[280px] lg:h-auto lg:col-span-1 lg:row-span-1 bg-black">
                <Image src="/images/services/pest-control.png" alt="Pest Control Background" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[2rem] leading-tight font-medium text-white mb-2" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>Pest Control</h3>
                    <p className="text-white/80 text-[14px] max-w-[220px]">Safe, effective and long-lasting solutions for a pest-free home.</p>
                  </div>
                  <Link href="/services/pest-control" className="bg-white text-black px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 self-start hover:bg-gray-100 transition-colors w-fit">
                    Book Pest Control <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Home Cleaning Block */}
              <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden h-[240px] sm:h-[280px] lg:h-auto sm:col-span-2 lg:col-span-2 lg:row-span-1 bg-black">
                <Image src="/images/services/home-cleaning.png" alt="Home Cleaning Background" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[2rem] leading-tight font-medium text-white mb-2" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>Home Cleaning</h3>
                    <p className="text-white/80 text-[14px] max-w-[240px]">A cleaner home for a healthier you. Sit back and relax.</p>
                  </div>
                  <Link href="/services/home-cleaning" className="bg-white text-black px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 self-start hover:bg-gray-100 transition-colors w-fit">
                    Book Home Cleaning <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ─── Why Choose Us ────────────────────────────────────────────────── */}
        <section className="py-12 md:py-20 bg-[#FAFAFA]">
          <Container isMaxWidth>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
              
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                
                <div className="flex flex-col items-center text-center">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-3 md:mb-4">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-[#1A1A1A]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A] text-[13px] md:text-[15px] mb-1 md:mb-2 leading-tight">Trained &<br/>Verified Experts</h4>
                  <p className="text-[12px] md:text-[13px] text-[#7A7A7A] leading-relaxed">Skilled professionals you can rely on.</p>
                </div>

                <div className="flex flex-col items-center text-center md:border-l border-gray-200/50 md:pl-8">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-3 md:mb-4">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-[#1A1A1A]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A] text-[13px] md:text-[15px] mb-1 md:mb-2 leading-tight">On-Time,<br/>Every Time</h4>
                  <p className="text-[12px] md:text-[13px] text-[#7A7A7A] leading-relaxed">Punctual service that respects your time.</p>
                </div>

                <div className="flex flex-col items-center text-center md:border-l border-gray-200/50 md:pl-8">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-3 md:mb-4">
                    <Leaf className="h-5 w-5 md:h-6 md:w-6 text-[#1A1A1A]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A] text-[13px] md:text-[15px] mb-1 md:mb-2 leading-tight">Safe &<br/>Eco-Friendly</h4>
                  <p className="text-[12px] md:text-[13px] text-[#7A7A7A] leading-relaxed">Safe for you and the environment.</p>
                </div>

                <div className="flex flex-col items-center text-center md:border-l border-gray-200/50 md:pl-8">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full border border-gray-200 flex items-center justify-center bg-white mb-3 md:mb-4">
                    <Smile className="h-5 w-5 md:h-6 md:w-6 text-[#1A1A1A]" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A] text-[13px] md:text-[15px] mb-1 md:mb-2 leading-tight">Satisfaction<br/>Guaranteed</h4>
                  <p className="text-[12px] md:text-[13px] text-[#7A7A7A] leading-relaxed">We&apos;re not happy until you are.</p>
                </div>

              </div>
            </div>
          </Container>
        </section>

        {/* ─── CTA Download Banner ────────────────────────────────────────────────── */}
        <section className="pt-16 bg-white">
          <Container isMaxWidth>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F26B21] via-[#F4813E] to-[#FBAB70] p-8 md:p-12 lg:p-14">
              
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 pointer-events-none" />
              <div className="absolute top-1/2 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-1/2 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                
                {/* Left — Text */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full w-fit mb-6">
                    ✦ Download our app
                  </div>
                  <p className="text-white/80 text-[14px] font-medium mb-3">Your time is precious.</p>
                  <h2
                    className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white leading-[1.1] mb-5"
                    style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                  >
                    Let us take care<br/>of the rest.
                  </h2>
                  <p className="text-white/85 text-[15px] mb-6 max-w-sm leading-relaxed">
                    Book your service in seconds and enjoy a cleaner, happier home — right from your phone.
                  </p>

                  {/* Star rating */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-300 text-[18px]">★</span>
                      ))}
                    </div>
                    <span className="text-white/80 text-[13px] font-medium">4.9 · 10,000+ happy customers</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link href="/services" className="bg-white text-[#F26B21] px-6 py-3.5 rounded-full text-[14px] font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-lg">
                      Book a Service <ArrowRight className="w-4 h-4" />
                    </Link>
                    <div className="flex gap-2">
                      <div className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer px-3 py-2 rounded-xl flex items-center gap-2">
                        <Apple className="w-4 h-4 text-white" />
                        <div>
                          <p className="text-white/70 text-[8px] leading-none">Download on the</p>
                          <p className="text-white text-[11px] font-bold leading-tight">App Store</p>
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer px-3 py-2 rounded-xl flex items-center gap-2">
                        <Play className="w-4 h-4 text-white" />
                        <div>
                          <p className="text-white/70 text-[8px] leading-none">Get it on</p>
                          <p className="text-white text-[11px] font-bold leading-tight">Google Play</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right — Phone Mockup fully contained, no overflow */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="relative w-[220px] h-[420px] bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-white/80 overflow-hidden flex flex-col">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-5 bg-[#F8F8F8] rounded-b-2xl z-10" />
                    {/* Status bar */}
                    <div className="bg-[#F8F8F8] px-5 pt-3 pb-2 flex items-center justify-between shrink-0">
                      <span className="text-[10px] font-bold text-gray-500">9:41</span>
                      <div className="w-[30%] h-3 bg-gray-200 rounded-full" />
                      <div className="flex gap-1 items-center">
                        <div className="w-3 h-1.5 bg-gray-400 rounded-[2px]" />
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      </div>
                    </div>

                    {/* App content */}
                    <div className="flex-1 overflow-hidden bg-white px-4 pt-3 pb-3 flex flex-col gap-3">
                      <div>
                        <p className="text-[10px] text-gray-400">Hi, Neha 👋</p>
                        <h4 className="text-[14px] font-extrabold text-black leading-tight" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>
                          What service<br/>do you need?
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { src: "/images/services/laundry.png", label: "Laundry" },
                          { src: "/images/services/car-wash.png", label: "Car Wash" },
                          { src: "/images/services/pest-control.png", label: "Pest Control" },
                          { src: "/images/services/home-cleaning.png", label: "Home Cleaning" },
                        ].map((s) => (
                          <div key={s.label} className="bg-gray-50 aspect-square rounded-xl flex flex-col items-center justify-center border border-gray-100 p-2">
                            <Image src={s.src} alt={s.label} width={28} height={28} />
                            <span className="text-[9px] font-bold mt-1.5 text-center leading-tight text-gray-700">{s.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Mini booking card */}
                      <div className="bg-[#FFF6F0] rounded-xl p-3 border border-[#FCECE4]">
                        <p className="text-[9px] text-[#7A7A7A] font-medium mb-1.5">Next booking</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-bold text-[#1A1A1A]">Laundry Service</p>
                            <p className="text-[9px] text-[#F26B21]">Today, 11:00 AM</p>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-[#F26B21] flex items-center justify-center shrink-0">
                            <ArrowRight className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav bar */}
                    <div className="bg-white px-6 py-2.5 flex items-center justify-around border-t border-gray-100 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F26B21]" />
                      <div className="w-10 h-1.5 rounded-full bg-gray-200" />
                      <div className="w-3.5 h-3.5 rounded border-[1.5px] border-gray-300" />
                    </div>
                  </div>
                  {/* Subtle shadow beneath phone */}
                  <div className="w-[130px] h-3 bg-black/10 blur-md rounded-full mt-1" />
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
