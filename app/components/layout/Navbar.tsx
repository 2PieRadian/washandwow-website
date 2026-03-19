"use client";

import { useState, useEffect } from "react";
import { WixMadeForDisplayFont } from "@/app/fonts";
import OrangeGradientButton from "../ui/buttons/OrangeGradientButton";
import { Download, Menu, X } from "lucide-react";
import Container from "./Container";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "bg-white backdrop-blur-sm shadow-sm" : "bg-white"}`}
    >
      <Container
        isMaxWidth={true}
        className="flex justify-between items-center py-[15px] px-[20px] relative"
      >
        <div className="flex items-center justify-between w-full">
          <h1
            className={`text-lg font-bold ${WixMadeForDisplayFont.className} cursor-pointer hover:scale-[1.05] transition-transform duration-300`}
            style={{ fontFamily: "var(--font-wix-made-for-display)" }}
          >
            <span className="text-brown hover:text-dark-brown transition-colors duration-300">
              Wash
            </span>
            <span className="text-brown hover:text-dark-brown transition-colors duration-300">
              {" "}
              &
            </span>{" "}
            <span className="text-orange hover:text-[#FF7700] transition-colors duration-300">
              Wow
            </span>
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-[15px] text-dark-blue font-medium text-sm items-center">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="group cursor-pointer px-4 py-2 rounded-full hover:text-[#FF7700] active:scale-[0.95] transition-all duration-200 relative overflow-hidden before:absolute before:inset-[2px] before:rounded-full before:bg-gradient-to-b before:from-white/90 before:via-[#fff3ea]/60 before:to-[#ffe8d6]/40 before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300 before:ease-out before:shadow-[inset_0_-2px_4px_rgba(255,148,49,0.15),inset_0_2px_4px_rgba(255,255,255,0.8)] after:absolute after:top-[3px] after:left-[15%] after:w-[70%] after:h-[40%] after:rounded-full after:bg-gradient-to-b after:from-white/80 after:to-transparent after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 hover:shadow-[0_2px_8px_rgba(255,148,49,0.2)]"
              >
                <span className="relative z-10">{item.name}</span>
              </li>
            ))}
            <li>
              <OrangeGradientButton
                className="rounded-[20px] px-4 py-2 flex justify-center items-center gap-[5px]"
                onClick={() => scrollToSection("#download-app")}
              >
                <Download size={20} />
                Download App
              </OrangeGradientButton>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-blue p-2 cursor-pointer hover:text-orange hover:scale-110 active:scale-95 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-full left-0 right-0 bg-gradient-to-b from-white to-[#fdfbf9] shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-b-[24px] overflow-hidden transition-all duration-400 ease-out md:hidden z-50 ${
            isMenuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col text-dark-blue font-medium text-base p-[24px] gap-[8px]">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className="group relative cursor-pointer px-5 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-transparent hover:border-orange/20 active:scale-[0.97] active:bg-gradient-to-r active:from-orange/15 active:to-orange/5 transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(255,148,49,0.15)] overflow-hidden"
                onClick={() => scrollToSection(item.href)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange/0 via-orange/5 to-orange/0 translate-x-[-100%] group-active:translate-x-[100%] transition-transform duration-500"></div>
                <div className="flex items-center justify-between relative z-10">
                  <span className="group-active:text-orange transition-colors duration-200">
                    {item.name}
                  </span>
                  <svg
                    className="w-4 h-4 text-[#ccc] group-active:text-orange group-active:translate-x-1 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </li>
            ))}

            <li className="pt-[12px]">
              <OrangeGradientButton
                className="rounded-2xl px-5 py-4 flex justify-center items-center gap-[8px] w-full text-base font-semibold shadow-[0_4px_20px_rgba(255,148,49,0.3)] active:shadow-[0_2px_10px_rgba(255,148,49,0.4)] active:scale-[0.98] transition-all duration-200"
                onClick={() => scrollToSection("#download-app")}
              >
                <Download size={20} />
                Download App
              </OrangeGradientButton>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
