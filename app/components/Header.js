'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import WhatsappIcon from "./WhatsappIcon";
import { Instagram } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] py-3">
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.webp"
            alt="PROMOFIX Logo"
            width={140}
            height={48}
            priority
            className="h-[50px] lg:h-[60px] w-auto max-w-full"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 xl:gap-8 text-[#005470] text-[1rem] xl:text-[1.05rem] max-[1250px]:ml-auto">
          <a href="#start" className="font-semibold">Início</a>
          <a href="#about" className="font-semibold">Sobre</a>
          <a href="#portfolio" className="font-semibold">Portfólio</a>
          <a href="#news" className="font-semibold">Novidades</a>
          <a href="#clients" className="font-semibold">Clientes</a>
          <a href="#contact" className="font-semibold">Contato</a>
        </nav>

        <div className="hidden md:flex items-center gap-4 2xl:gap-3">
          <a
            href="https://api.whatsapp.com/send/?phone=5511974459797&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[44px] px-7 rounded-[999px] bg-[#005470] text-white font-semibold hover:bg-[#007b9c] flex items-center justify-center transition-colors text-[0.95rem] max-[1250px]:hidden"
          >
            Orçamento
            <WhatsappIcon className="ml-2 w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/promofix.com.br/"
            target="_blank"
            className="text-[#005470] max-[1250px]:hidden"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a href="#start" className="text-[#005470] text-[0.95rem] max-[1250px]:hidden">
            (11) 5686-9059
          </a>
        </div>

        <div className="md:hidden max-[1250px]:block">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="p-2">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" fill="none" stroke="#005470" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" fill="none" stroke="#005470" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Fechar Menu">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" fill="none" stroke="#005470" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col mt-4 gap-6 px-6 text-[#005470] text-lg font-semibold">
          <li><a href="#start" onClick={toggleMenu}>Início</a></li>
          <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfólio</a></li>
          <li><a href="#news" onClick={toggleMenu}>Novidades</a></li>
          <li><a href="#clients" onClick={toggleMenu}>Clientes</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
          <li className="flex items-center gap-2">
            <a
              href="https://api.whatsapp.com/send/?phone=5511974459797&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[44px] px-4 rounded-[12px] bg-[#005470] text-white font-semibold hover:bg-[#007b9c] flex items-center justify-center transition-colors"
            >
              Orçamento
              <WhatsappIcon className="ml-2 w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/promofix.com.br/"
              target="_blank"
              className="text-[#005470]"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>

      {isMenuOpen && <div onClick={toggleMenu} className="fixed inset-0 bg-black/30 z-40"></div>}
    </header>
  );
}
