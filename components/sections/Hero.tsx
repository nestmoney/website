"use client";

import Image from "next/image";
import DownloadBtn from "../DownloadButton";
import { floatIcons } from "../updatable";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center"
      aria-labelledby="hero-title"
    >
      {/* Floating QR Box */}
      <aside
        className="fixed bottom-10 right-9 z-50 hidden md:flex
                   size-24 bg-primary-blue/10 backdrop-blur-md
                   rounded-xl items-center justify-center
                   transition-all duration-300 ease-out
                   hover:scale-125 hover:shadow-xl"
        aria-label="Download QR code"
      >
        <div className="relative w-[80%] h-[80%]">
          <Image
            src="/dummyQr.png"
            alt="Download QR code"
            fill
            className="object-contain"
          />
        </div>
      </aside>

      <div
        className="absolute inset-0 pointer-events-none overflow-hidden  top-[57vh] h-[10vh] md:top-[38vh] md:h-[20vh] lg:h-[20vh] lg:top-[35vh] xl:h-[30vh] xl:top-[25vh]"
        aria-hidden="true"
      >
        <div className="absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2     h-[30%] w-[60%] flex justify-between items-center">
          {floatIcons.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt=""
              width={40}
              height={40}
              className="wave-bar lg:size-10 md:size-6 size-4"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        className="h-[419px] md:h-[436px] lg:h-[544px] xl:h-[638px]
                      flex flex-col items-center justify-between"
      >
        <header className="flex flex-col items-center">
          <h1
            id="hero-title"
            className="font-bold text-[24px] md:text-[40px] lg:text-[48px] xl:text-[56px]
                        text-secondary pb-[32px] text-center"
          >
            A home for your{" "}
            <span className="text-primary-blue">
              <br className="md:hidden" /> family finances
            </span>
          </h1>

          <DownloadBtn />
        </header>

        <figure>
          <video
            src="/heroAnime.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Nest Money app preview"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
