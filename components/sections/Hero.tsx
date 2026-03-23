"use client";

import Image from "next/image";
import DownloadBtn from "../DownloadButton";
import { Links } from "../updatable";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const Hero = () => {
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const getActiveVideo = () =>
      window.innerWidth >= 768 ? desktopRef.current : mobileRef.current;

    const resumeVideo = () => {
      if (document.visibilityState !== "visible") return;
      const video = getActiveVideo();
      if (!video) return;
      if (video.paused) {
        setTimeout(() => {
          video.play().catch(() => {});
        }, 200);
      }
    };

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) resumeVideo();
    };

    document.addEventListener("visibilitychange", resumeVideo);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      document.removeEventListener("visibilitychange", resumeVideo);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <section
      className=" mb-[64px] md:mb-[128px] xl:mb-[160px] px-[10px] md:px-[0px]"
      aria-labelledby="hero-title"
    >
      <link rel="preload" as="image" href="/heroAnimePlaceholder.png" />
      <link rel="preload" as="image" href="/heroAnimeMobPlaceholder.png" />

      {Links.playStore && Links.appStore && (
        <aside
          className="fixed bottom-[12px] right-[12px] z-50 hidden md:flex bg-white
    size-26 rounded-xl 
    items-center justify-center
    transition-transform duration-300 ease-out
    border-[3px] border-[#2b78ff33]
    origin-bottom-right
    hover:scale-200"
          aria-label="Download QR code"
        >
          <div className="relative size-[95%] rounded-xl overflow-hidden">
            <Image
              src="/qr_code.png"
              alt="Download QR code"
              fill
              className="object-contain size-full"
            />
          </div>
        </aside>
      )}

      {/* Main Content */}
      <div className=" flex flex-col items-center justify-between pt-5">
        <header className="flex flex-col items-center space-y-5 md:space-y-0 mb-[128px] xl:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="hero-title"
            className="font-bold  mt-[32px] text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] text-secondary pb-0 md:pb-10 text-center"
          >
            A home for your{" "}
            <span className="text-primary-blue">
              <br className="md:hidden" /> family finances
            </span>
          </motion.h1>
          <DownloadBtn />
        </header>

        <figure className="w-full">
          <div className="hidden md:block w-full aspect-[2048/700]">
          <video
            ref={desktopRef}
            src="/heroAnime.mp4"
            poster="/heroAnimePlaceholder.png"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          </div>

         <div className="md:hidden w-full aspect-[1536/720]">
          <video
            ref={mobileRef}
            src="/heroAnimeMob.mp4"
            poster="/heroAnimeMobPlaceholder.png"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
