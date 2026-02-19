"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToSection() {
  const params = useSearchParams();

  useEffect(() => {
    const section = params.get("section");

    if (!section) return;

    const el = document.getElementById(section);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [params]);

  return null;
}
