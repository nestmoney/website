"use client";

import Image from "next/image";
import DownloadBtn from "../DownloadButton";
import { Links } from "../updatable";
import { useEffect, useRef } from "react";

const Hero = () => {
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const resumeVideo = () => {
      const video =
        window.innerWidth >= 768 ? desktopRef.current : mobileRef.current;

      if (video && video.paused) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", resumeVideo);
    window.addEventListener("pageshow", resumeVideo);
    window.addEventListener("focus", resumeVideo);

    return () => {
      document.removeEventListener("visibilitychange", resumeVideo);
      window.removeEventListener("pageshow", resumeVideo);
      window.removeEventListener("focus", resumeVideo);
    };
  }, []);

  return (
    <section
      className=" mb-[64px] md:mb-[128px] xl:mb-[160px] px-[10px] md:px-[0px]"
      aria-labelledby="hero-title"
    >
      {Links.playStore && Links.appStore && (
        <aside
          className="fixed bottom-2 right-2 z-50 hidden md:flex  bg-white 
                   size-24 
                   rounded-xl items-center justify-center
                   transition-all duration-300 ease-out shadow-xl
                   hover:scale-200 hover:shadow-md hover:-translate-10"
          aria-label="Download QR code"
        >
          <div className="relative size-[95%] rounded-xl overflow-hidden">
            <Image
              src="/Qr.png"
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
          <h1
            id="hero-title"
            className="font-bold  mt-[32px] text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] text-secondary pb-0 md:pb-10 text-center"
          >
            A home for your{" "}
            <span className="text-primary-blue">
              <br className="md:hidden" /> family finances
            </span>
          </h1>
          <DownloadBtn />
        </header>

        <figure className="w-full">
          <video
            ref={desktopRef}
            src="/heroAnime.mp4"
            poster="/heroAnimePlaceholder.png"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hidden md:block w-full h-full object-cover"
          />

          <video
            ref={mobileRef}
            src="/heroAnimeMob.mp4"
            poster="/heroAnimeMobPlaceholder.png"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="md:hidden w-full h-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
