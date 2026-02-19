"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Links } from "./updatable";

type DownloadBtnProps = {
  isFooter?: boolean;
};

const DownloadBtn = ({ isFooter = false }: DownloadBtnProps) => {
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
      {/* If no links available */}
      {!Links.playStore && !Links.appStore && (
        <p
        className={`font-medium rounded-md text-center py-2 px-4 md:text-[16px] text-[10px]
          ${
            isFooter
            ? "bg-secondary text-white"
            : "bg-secondary text-white"
            }`}
            > Launching Soon
          </p>
      )}

      {/* Play Store */}
      {Links.playStore && (device === "desktop" || device === "android") && (
        <a href={Links.playStore} target="_blank" rel="noopener noreferrer">
          <Image
            src="/googlePlay.svg"
            alt="Google Play"
            width={135}
            height={40}
            className="w-[100px] md:w-[134px] h-auto"
          />
        </a>
      )}

      {/* App Store */}
      {Links.appStore && (device === "desktop" || device === "ios") && (
        <a href={Links.appStore} target="_blank" rel="noopener noreferrer">
          <Image
            src="/appStore.svg"
            alt="App Store"
            width={135}
            height={40}
            className="w-[100px] md:w-[134px] h-auto"
          />
        </a>
      )}
    </nav>
  );
};

export default DownloadBtn;
//  <p className="font-medium rounded-md text-lg text-center text-white bg-secondary p-2">
//           Launching Soon
//         </p>
