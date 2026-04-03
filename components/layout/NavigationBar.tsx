"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Projects", "Certificates", "Skills"];

  return (
    <>
      <header
        className={`fixed top-2.5 left-1/2 -translate-x-1/2 md:max-w-7xl md:w-fit w-11/12 mx-auto rounded-full z-50 transition-shadow duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-10 py-4 gap-10">
          {/* Logo */}
          <button className="flex gap-4.5 justify-center items-center text-white font-semibold text-lg tracking-wide mr-16">
            <Image src="/logo.svg" alt="Logo" width={30} height={30} />
            MHM.
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-secondary">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="relative hover:text-white transition duration-300 group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-51 transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <button
          className="fixed top-4 right-4 text-white text-xl z-99"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-64 h-full bg-background shadow-xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-8 p-8 mt-16 text-white text-lg">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
