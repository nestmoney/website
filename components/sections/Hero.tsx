"use client";

import Image from "next/image";
import DownloadBtn from "../DownloadButton";
import { floatIcons } from "../updatable";

const Hero = () => {
  return (
    <section className="" aria-labelledby="hero-title">
      {/* Floating QR Box */}
      <aside
        className="fixed bottom-10 right-9 z-50 hidden md:flex  bg-white 
                   size-24 
                   rounded-xl items-center justify-center
                   transition-all duration-300 ease-out shadow-xl
                   hover:scale-200 hover:shadow-md hover:-translate-10"
        aria-label="Download QR code"
      >
        <div className="relative size-[95%]">
          <Image
            src="/dummyQr.png"
            alt="Download QR code"
            fill
            className="object-contain"
          />
        </div>
      </aside>

      {/* Main Content */}
      <div className=" flex flex-col items-center justify-between pt-5">
        <header className="flex flex-col items-center space-y-5 md:space-y-0">
          <h1
            id="hero-title"
            className="font-bold text-[24px] mt-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] text-secondary pb-[20px] text-center"
          >
            A home for your{" "}
            <span className="text-primary-blue">
              <br className="md:hidden" /> family finances
            </span>
          </h1>

          <DownloadBtn />
          <div className=" bottom-2 md:bottom-10 left-1/2 h-[6vh] lg:h-[8vh] w-[320px] md:w-[80%] flex justify-between my-12 md:mb-0">
            {floatIcons.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt=""
                width={40}
                height={40}
                className={`lg:size-10 md:size-6 size-4  ${
                  i % 2 === 0 ? "self-start float-up" : "self-end float-up"
                }`}
              />
            ))}
          </div>
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
