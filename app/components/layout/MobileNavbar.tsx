"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WixMadeForDisplayFont } from "@/app/fonts";
import OrangeGradientButton from "../ui/buttons/OrangeGradientButton";
import { Download, Menu, X, ChevronDown } from "lucide-react";
import { scrollToSection as scrollToSectionUtil } from "@/app/utils/scrollToSection";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Reviews", href: "#reviews" },
  ];

  const footerLinks = {
    left: [
      { name: "About us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#careers" },
      { name: "FAQs", href: "#faqs" },
    ],
    right: [
      { name: "Support", href: "#support" },
      { name: "App Help", href: "#app-help" },
      { name: "Sitemap", href: "#sitemap" },
      { name: "Legal", href: "#legal" },
    ],
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    scrollToSectionUtil(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] min-[900px]:hidden">
      {/* Top Bar */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-[20px] h-[70px]">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg font-bold cursor-pointer`}
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            <span className="text-brown">Wash</span>
            <span className="text-brown"> &</span>{" "}
            <span className="text-orange">Wow</span>
          </Link>

          <button
            className="text-dark-blue p-2 cursor-pointer select-none active:scale-95 transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[101] flex flex-col transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Logo and Close */}
        <div className="flex items-center justify-between px-[20px] h-[70px] border-b border-gray-100">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg font-bold`}
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            <span className="text-brown">Wash</span>
            <span className="text-brown"> &</span>{" "}
            <span className="text-orange">Wow</span>
          </Link>
          <button
            className="text-gray-500 p-2 cursor-pointer select-none hover:text-gray-700 active:scale-95 transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-[20px] py-[16px]">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="group cursor-pointer border-b border-gray-100 last:border-b-0"
                onClick={() => scrollToSection(item.href)}
              >
                <div className="flex items-center justify-between py-[16px] text-gray-900 font-medium text-[16px] active:text-orange transition-colors duration-200">
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={20}
                      className="text-gray-400 group-active:rotate-180 transition-transform duration-200"
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Download App Button - right after navlinks */}
          <div className="mt-[20px]">
            <OrangeGradientButton
              className="rounded-[10px] px-5 py-[14px] flex justify-center items-center gap-[8px] w-full text-[16px] font-semibold active:scale-[0.98] transition-all duration-200"
              onClick={() => scrollToSection("#download-app")}
            >
              <Download size={20} />
              Download App
            </OrangeGradientButton>
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-[20px] py-[20px] border-t border-gray-100">
          <div className="grid grid-cols-2 gap-x-[40px] gap-y-[12px] mb-[24px]">
            <div className="flex flex-col gap-[12px]">
              {footerLinks.left.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left select-none text-gray-600 text-[14px] hover:text-gray-900 active:text-orange transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-[12px]">
              {footerLinks.right.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left select-none text-gray-600 text-[14px] hover:text-gray-900 active:text-orange transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Us Button */}
          <button
            className="w-full py-[14px] text-[16px] font-semibold select-none text-gray-700 border border-gray-200 rounded-[10px] active:scale-[0.98] active:bg-gray-50 transition-all duration-200"
            onClick={() => scrollToSection("#contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
