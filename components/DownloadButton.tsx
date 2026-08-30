"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Links } from "./updatable";

type DownloadBtnProps = {
  isFooter?: boolean;
};

const DownloadBtn = ({ isFooter = false }: DownloadBtnProps) => {
  const [mounted, setMounted] = useState(false);
  const [device, setDevice] = useState<"desktop" | "android" | "ios">("desktop");

  useEffect(() => {
    // 1. Mark as mounted to prevent hydration glitches
    setMounted(true);

    // 2. Check device
    const ua = navigator.userAgent;
    if (/Android/i.test(ua)) setDevice("android");
    else if (/iPhone|iPad|iPod/i.test(ua)) setDevice("ios");
  }, []);

  // 3. Return a placeholder until client-side JS kicks in to prevent layout shift
  if (!mounted) {
    return <div className="h-[40px] w-full max-w-[316px]" aria-hidden="true" />;
  }

  return (
    <nav
      data-footer={isFooter}
      className="flex space-x-4 min-h-[40px]"
      aria-label="Download options"
    >
      {!Links.playStore && !Links.appStore && (
        <p className="font-medium rounded-md text-center py-2 px-4 md:text-[16px] text-[10px] bg-secondary text-white">
          Launching Soon
        </p>
      )}

      {Links.playStore && (device === "desktop" || device === "android") && (
        <a href={Links.playStore} target="_blank" rel="noopener noreferrer">
          <Image
            src="/googlePlay.svg"
            alt="Google Play"
            width={135}
            height={40}
            className="w-[150px] h-auto"
            priority
          />
        </a>
      )}

      {Links.appStore && (device === "desktop" || device === "ios") && (
        <a href={Links.appStore} target="_blank" rel="noopener noreferrer">
          <Image
            src="/appStore.svg"
            alt="App Store"
            width={135}
            height={40}
            className="w-[150px] h-auto"
            priority
          />
        </a>
      )}
    </nav>
  );
};

export default DownloadBtn;