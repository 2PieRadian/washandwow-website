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
  ShieldAlert,
  ShieldCheck,
  Leaf,
  UserCheck,
  Shield,
  ArrowRight,
  PlayCircle,
  Check,
  BugOff,
  CalendarCheck,
  Clock,
  BadgeCheck,
  Home,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pest Control Services",
  description: "Safe, effective and eco-friendly pest control solutions for a healthier home and worry-free living.",
  alternates: { canonical: canonicalPath("/services/pest-control") },
};

const pestCards = [
  {
    id: "cockroach",
    title: "Cockroach Control",
    description: "Eliminate cockroaches & prevent re-infestation",
  },
  {
    id: "rodent",
    title: "Rodent Control",
    description: "Effective solution to keep rats & mice away",
  },
  {
    id: "termite",
    title: "Termite Control",
    description: "Protect your home from termites & structural damage",
  },
  {
    id: "bed-bug",
    title: "Bed Bug Treatment",
    description: "Advanced treatment to eliminate bed bugs",
  },
  {
    id: "mosquito",
    title: "Mosquito Control",
    description: "Reduce mosquito breeding & enjoy a peaceful home",
  },
  {
    id: "fly",
    title: "Fly Control",
    description: "Hygienic treatment to eliminate flies",
  },
  {
    id: "other",
    title: "Other Pests",
    description: "Ants, lizards, spiders & other common pests",
  },
];

export default function PestControlPage() {
  return (
    <div className="overflow-x-hidden antialiased bg-[#FFFFFF]" style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <main className="pt-[60px] lg:pt-[80px]">
        {/* ─── HERO SECTION ──────────────────────────────────────────────────────── */}
        <section className="relative w-full pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Background Split - Left White, Right Image Gradient */}
          <div className="absolute inset-0 z-0 flex">
            <div className="w-full lg:w-1/2 bg-white h-full"></div>
            <div className="w-full lg:w-1/2 h-full relative hidden lg:block">
               {/* Fade from white to transparent to blend image */}
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-1/3"></div>
               <Image src="/images/pest-control/hero.png" alt="Pest control technician at work" fill className="object-cover object-left" priority quality={100} />
            </div>
          </div>

          <Container isMaxWidth className="relative z-10 w-full flex-1">
            <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full">
              
              {/* Left Content */}
              <div className="w-full lg:w-[55%] z-10 pb-10 lg:pb-0 pt-4">
                
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[14px] text-[#7A7A7A] mb-8 bg-[#FFF6F0] px-4 py-2 rounded-full w-fit">
                  <Link href="/" className="hover:text-[#F26B21] transition-colors flex items-center gap-1"><Home className="w-3.5 h-3.5" /> Home</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <Link href="/services" className="hover:text-[#F26B21] transition-colors">Services</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#F26B21] font-medium">Pest Control</span>
                </div>

                <div className="flex items-center gap-2 bg-[#FFF6F0] border border-[#FCECE4] text-[#F26B21] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wide w-fit mb-6 shadow-sm">
                  <ShieldAlert size={16} strokeWidth={2.5} /> Pest Control
                </div>
                
                <h1 
                  className="text-[clamp(40px,5vw,56px)] leading-[1.1] font-extrabold text-[#1A1A1A] tracking-tight mb-5"
                  style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
                >
                  Protect Your Home.<br />
                  Protect Your <span className="text-[#F26B21]">Loved Ones.</span>
                </h1>
                
                <p className="text-[18px] lg:text-[20px] leading-relaxed text-[#5B5B5B] max-w-lg mb-10">
                  Safe, effective and eco-friendly pest control solutions<br className="hidden md:block"/>
                  for a healthier home and worry-free living.
                </p>

                {/* Features Highlights */}
                <div className="flex flex-wrap items-start gap-x-8 gap-y-5 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFF6F0] flex items-center justify-center text-[#F26B21] border border-[#FCECE4]"><Leaf className="w-5 h-5" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#1A1A1A] leading-tight">Eco-Friendly</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight mt-0.5">Safe for kids, pets<br/>and environment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFF6F0] flex items-center justify-center text-[#F26B21] border border-[#FCECE4]"><ShieldCheck className="w-5 h-5" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#1A1A1A] leading-tight">Safe &amp; Odourless</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight mt-0.5">Advanced treatment<br/>with no bad smell</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFF6F0] flex items-center justify-center text-[#F26B21] border border-[#FCECE4]"><UserCheck className="w-5 h-5" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#1A1A1A] leading-tight">Expert Technicians</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight mt-0.5">Trained, verified &amp;<br/>experienced pros</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFF6F0] flex items-center justify-center text-[#F26B21] border border-[#FCECE4]"><Shield className="w-5 h-5" strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#1A1A1A] leading-tight">Service Warranty</h4>
                      <p className="text-[11px] text-[#7A7A7A] leading-tight mt-0.5">Guaranteed protection<br/>with every service</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <button className="bg-[#F26B21] text-white px-7 py-3.5 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-[#D95D1A] transition-colors shadow-md">
                    Book Pest Control <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-white border border-gray-200 text-[#F26B21] px-7 py-3.5 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                    How It Works <PlayCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Floating Card */}
              <div className="w-full lg:w-[45%] flex justify-end mt-12 lg:mt-0 relative z-20">
                <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-8 flex flex-col min-w-[280px]">
                  <p className="text-[14px] font-bold text-[#1A1A1A] mb-1">Starting at</p>
                  <div className="flex items-start mb-6">
                    <span className="text-[52px] font-extrabold text-[#F26B21] leading-none tracking-tight">₹499</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-[14px] font-medium text-[#5B5B5B]">
                      <div className="bg-[#FFF6F0] rounded-full p-1"><Check className="w-3.5 h-3.5 text-[#F26B21]" strokeWidth={3} /></div> Free Inspection
                    </li>
                    <li className="flex items-center gap-3 text-[14px] font-medium text-[#5B5B5B]">
                      <div className="bg-[#FFF6F0] rounded-full p-1"><Check className="w-3.5 h-3.5 text-[#F26B21]" strokeWidth={3} /></div> No Hidden Charges
                    </li>
                    <li className="flex items-center gap-3 text-[14px] font-medium text-[#5B5B5B]">
                      <div className="bg-[#FFF6F0] rounded-full p-1"><Check className="w-3.5 h-3.5 text-[#F26B21]" strokeWidth={3} /></div> Safe &amp; Odourless
                    </li>
                    <li className="flex items-center gap-3 text-[14px] font-medium text-[#5B5B5B]">
                      <div className="bg-[#FFF6F0] rounded-full p-1"><Check className="w-3.5 h-3.5 text-[#F26B21]" strokeWidth={3} /></div> Warranty on Service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
          
          {/* Mobile only image */}
          <div className="w-full h-[300px] relative lg:hidden mt-8">
             <Image src="/images/pest-control/hero.png" alt="Pest control technician at work" fill className="object-cover object-left" priority />
          </div>
        </section>

        {/* ─── CARDS SECTION ─────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white relative z-20">
          <Container isMaxWidth>
            <div className="text-center mb-16">
              <h2 className="text-[clamp(32px,4vw,40px)] font-bold text-[#1A1A1A] leading-tight mb-3" style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}>
                Our Pest Control Services
              </h2>
              <p className="text-[16px] text-[#5B5B5B]">
                Customized solutions for every pest problem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pestCards.map((card) => (
                <div key={card.id} className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all relative flex flex-col items-center p-8 text-center group cursor-pointer h-full">
                  
                  <div className="w-16 h-16 rounded-full bg-[#FFF6F0] flex items-center justify-center mb-6 text-[#F26B21]">
                    <BugOff className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-bold text-[#1A1A1A] text-[18px] leading-tight mb-3">{card.title}</h3>
                  <p className="text-[14px] text-[#7A7A7A] leading-relaxed mb-6 flex-1">{card.description}</p>
                  
                  <div className="mt-auto self-end">
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#F26B21] group-hover:bg-[#F26B21] group-hover:border-[#F26B21] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── TRUST BADGES ──────────────────────────────────────────────────────── */}
        <section className="pb-20">
          <Container isMaxWidth>
            <div className="bg-[#FAFAFA] rounded-3xl border border-gray-100 p-8 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#F26B21] border border-[#FCECE4]">
                    <BadgeCheck strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Trained Professionals</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">Background verified<br/>&amp; well trained</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#F26B21] border border-[#FCECE4]">
                    <Leaf strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Eco-Friendly Products</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">Safe for your family,<br/>pets &amp; environment</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#F26B21] border border-[#FCECE4]">
                    <CalendarCheck strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Long Lasting Results</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">Effective treatment<br/>with lasting protection</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#F26B21] border border-[#FCECE4]">
                    <Clock strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">On-Time Service</h4>
                    <p className="text-[11px] text-[#7A7A7A] leading-snug">We respect your time<br/>&amp; schedule</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#F26B21] border border-[#FCECE4]">
                    <ShieldCheck strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-[13px] leading-tight mb-1">Satisfaction Guarantee</h4>
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
