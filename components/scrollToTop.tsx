"use client";
import { ArrowBigUp, ArrowBigUpDash } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollTopBtn = () => {
  const [visible, setVisible] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 200) {
        setVisible(true); // scrolling down
      } else {
        setVisible(false); // scrolling up
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 
        size-9
      bg-primary-blue text-white 
      flex justify-center items-center
     rounded-full shadow-lg
      transition-all duration-300
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <ArrowBigUpDash className="size-4" />
    </button>
  );
};

export default ScrollTopBtn;
