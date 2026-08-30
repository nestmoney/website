"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const NewBadge = () => (
  <span className="relative inline-flex items-center overflow-hidden rounded bg-green px-2 py-1 text-[12px] font-medium tracking-wide text-white leading-none">
    New
    {/* Shine sweep — animates `left` so the beam travels clean left→right */}
    <span
      className="pointer-events-none absolute inset-y-0"
      style={{
        left: "-75%",
        width: "50%",
        background:
          "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.65) 50%, transparent 100%)",
        transform: "skewX(-15deg)",
        animation: "shine 1.5s ease-in-out infinite",
      }}
    />
    <style>{`
      @keyframes shine {
        0%   { left: -75%; }
        60%  { left: 125%; }
        100% { left: 125%; }
      }
    `}</style>
  </span>
);

const NAV_ITEMS = ["nest", "Offerings", "links"] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const hideNavLinks =
    pathname.includes("terms") || pathname.includes("privacy") || pathname.includes("coins");

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
                {NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/#${item}`}
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="relative flex items-center gap-1.5 after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-secondary
                        after:transition-all after:duration-300
                        hover:after:w-full"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      {/*{item === "fixed deposit" && <NewBadge />}*/}
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
                ${
                  open
                    ? "translate-y-0 opacity-100 scale-100"
                    : "-translate-y-6 opacity-0 scale-95 pointer-events-none"
                }`}
            >
              <ul className="flex flex-col w-full py-6 text-secondary text-[18px]">
                {NAV_ITEMS.map((item) => (
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
                      className="flex items-center justify-center gap-1.5 w-full py-4 hover:bg-gray-100 transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      {/* {item === "fixed deposit" && <NewBadge />}*/}
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