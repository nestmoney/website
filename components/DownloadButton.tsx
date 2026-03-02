"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Links } from "./updatable";

type DownloadBtnProps = {
  isFooter?: boolean;
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
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
    <motion.nav
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex space-x-[16px]"
      aria-label="Download options"
    >
      {!Links.playStore && !Links.appStore && (
        <motion.p
          variants={item}
          className="font-medium rounded-md text-center py-2 px-4 md:text-[16px] text-[10px] bg-secondary text-white"
        >
          Launching Soon
        </motion.p>
      )}

      {Links.playStore && (device === "desktop" || device === "android") && (
        <motion.a
          variants={item}
          href={Links.playStore}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/googlePlay.svg"
            alt="Google Play"
            width={135}
            height={40}
            className="w-[100px] md:w-[134px] h-auto"
          />
        </motion.a>
      )}

      {Links.appStore && (device === "desktop" || device === "ios") && (
        <motion.a
          variants={item}
          href={Links.appStore}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/appStore.svg"
            alt="App Store"
            width={135}
            height={40}
            className="w-[100px] md:w-[134px] h-auto"
          />
        </motion.a>
      )}
    </motion.nav>
  );
};

export default DownloadBtn;
