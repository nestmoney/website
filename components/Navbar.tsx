"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="site-container mx-auto py-[24px] flex justify-between items-center">
        {/* Logo */}
        <a href="#">
          <Image src="/logo.svg" alt="app logo" width={177} height={24} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex text-[18px] space-x-[40px] text-secondary">
          <a
            href="#about"
            className="relative cursor-pointer inline-block
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-secondary
    after:transition-all after:duration-300
    hover:after:w-full"
          >
            About
          </a>
          <a
            href="#features"
            className="relative cursor-pointer inline-block
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-secondary
    after:transition-all after:duration-300
    hover:after:w-full"
          >
            Features
          </a>
          <a
            href="#links"
            className="relative cursor-pointer inline-block
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-secondary
    after:transition-all after:duration-300
    hover:after:w-full"
          >
            Links
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6 text-secondary text-[18px]">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="flex w-full justify-center "
          >
            About
          </a>
          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="flex w-full justify-center "
          >
            Features
          </a>
          <a
            href="#links"
            onClick={() => setOpen(false)}
            className="flex w-full justify-center "
          >
            Links
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
