"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="site-container mx-auto py-[24px] flex justify-between items-center">
        {/* Logo */}
        <button onClick={handleLogoClick}>
          <Image src="/logo.svg" alt="app logo" width={177} height={24} />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex text-[18px] space-x-[40px] text-secondary">
          <Link href="/#about">About</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#links">Links</Link>
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
          <Link href="/#about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/#features" onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link href="/#links" onClick={() => setOpen(false)}>
            Links
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
