"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="flex space-x-[16px]">
      {(device === "desktop" || device === "android") && (
        <Image
          src="/googlePlay.svg"
          alt="Google Play"
          width={135}
          height={40}
        />
      )}

      {(device === "desktop" || device === "ios") && (
        <Image src="/appStore.svg" alt="App Store" width={135} height={40} />
      )}
    </div>
  );
};

export default DownloadBtn;
