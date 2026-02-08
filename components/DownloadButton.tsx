"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Links } from "./updatable";

const DownloadBtn = () => {
  const [device, setDevice] = useState<"desktop" | "android" | "ios">(
    "desktop",
  );

  useEffect(() => {
    const ua = navigator.userAgent;

    if (/Android/i.test(ua)) setDevice("android");
    else if (/iPhone|iPad|iPod/i.test(ua)) setDevice("ios");
  }, []);

  return (
    <nav className="flex space-x-[16px]" aria-label="Download options">
      {(device === "desktop" || device === "android") && (
        <a href={Links.playStore}>
          <Image
            src="/googlePlay.svg"
            alt="Google Play"
            width={135}
            height={40}
            className="w-[108px] md:w-[134px]"
          />
        </a>
      )}

      {(device === "desktop" || device === "ios") && (
        <a href={Links.appStore} target="_blank" rel="noopener noreferrer">
          <Image
            src="/appStore.svg"
            alt="App Store"
            width={135}
            height={40}
            className="w-[108px] md:w-[134px]"
          />
        </a>
      )}
    </nav>
  );
};

export default DownloadBtn;
