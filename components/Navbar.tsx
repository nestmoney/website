"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Hide nav links on terms or privacy pages
  const hideNavLinks =
    pathname.includes("terms") || pathname.includes("privacy");

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <div className="site-container mx-auto px-[20px] md:px-[0px]">
        <div ref={navRef} className="relative">
          {/* NAV */}
          <nav className="site-container mx-auto py-6 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" aria-label="Nest Money home">
              <Image
                src="/logo.svg"
                alt="Nest Money"
                width={177}
                height={24}
                className="h-[20px] w-[150px] md:h-[24px] md:w-[177px]"
              />
            </Link>

            {/* Desktop Links */}
            {!hideNavLinks && (
              <ul className="hidden md:flex text-[18px] space-x-10 text-secondary">
                {["nest", "features", "links"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/#${item}`}
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="relative after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-secondary
                    after:transition-all after:duration-300
                    hover:after:w-full"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {!hideNavLinks && (
              <button
                className="md:hidden"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
              >
                <Menu className="size-[20px] md:size-[24px]" />
              </button>
            )}
          </nav>

          {!hideNavLinks && (
            <div
              className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${open
                  ? "translate-y-0 opacity-100 scale-100"
                  : "-translate-y-6 opacity-0 scale-95 pointer-events-none"
                }`}
            >
              <ul className="flex flex-col w-full py-6 text-secondary text-[18px]">
                {["nest", "features", "links"].map((item) => (
                  <li key={item} className="w-full">
                    <Link
                      href={`/#${item}`}
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        setOpen(false);
                      }}
                      className="block w-full text-center py-4 hover:bg-gray-100 transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
