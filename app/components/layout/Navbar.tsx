"use client";

import { useEffect, useState } from "react";
import { WixMadeForDisplayFont } from "@/app/fonts";
import OrangeGradientButton from "../ui/buttons/OrangeGradientButton";
import { Download } from "lucide-react";
import Container from "./Container";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Pricing", href: "#pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 70;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 hidden min-[900px]:block ${isScrolled ? "bg-white backdrop-blur-sm shadow-sm" : "bg-white"}`}
    >
      <Container
        isMaxWidth={true}
        className="flex justify-between items-center h-[70px] px-[20px]"
      >
        <div className="flex items-center justify-between w-full">
          <h1
            className={`text-lg font-bold ${WixMadeForDisplayFont.className} cursor-pointer hover:scale-[1.05] transition-transform duration-300`}
            style={{ fontFamily: "var(--font-wix-made-for-display)" }}
            onClick={() => scrollToSection("#home")}
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
          <ul className="flex text-dark-blue font-medium text-sm items-center">
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
        </div>
      </Container>
    </nav>
  );
}
