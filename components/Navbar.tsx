"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    <header className="top-0 left-0 right-0 z-50 bg-white">
      <nav className="site-container mx-auto py-[24px] flex justify-between items-center" aria-label="Primary">
        {/* Logo */}
        <Link href="/" aria-label="Nest Money home">
          <Image src="/logo.svg" alt="Nest Money" width={177} height={24} />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex text-[18px] space-x-[40px] text-secondary">
          <li>
            <Link
              href="/#about"
              className="relative after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-secondary 
             after:transition-all after:duration-300 
             hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#features"
              className="relative after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-secondary 
             after:transition-all after:duration-300 
             hover:after:w-full"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/#links"
              className="relative after:absolute after:left-0 after:-bottom-1 
             after:h-[2px] after:w-0 after:bg-secondary 
             after:transition-all after:duration-300 
             hover:after:w-full"
            >
              Links
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu />
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-secondary text-[18px]">
          <li>
            <Link href="/#about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#features" onClick={() => setOpen(false)}>
              Features
            </Link>
          </li>
          <li>
            <Link href="/#links" onClick={() => setOpen(false)}>
              Links
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
