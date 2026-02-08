"use client";

import Image from "next/image";
import DownloadBtn from "../DownloadButton";

const Hero = () => {
  const floatingImages = [
    {
      src: "/favicon.png",
      position: "top-[60%] left-[10%]",
      anim: "animate-[floatY_6s_ease-in-out_infinite]",
    },
    {
      src: "/favicon.png",
      position: "top-[40%] left-[20%]",
      anim: "animate-[floatY_8s_ease-in-out_infinite]",
    },
    {
      src: "/favicon.png",
      position: "top-[55%] left-[25%]",
      anim: "animate-[floatY_7s_ease-in-out_infinite]",
    },
    {
      src: "/favicon.png",
      position: "top-[55%] left-[40%]",
      anim: "animate-[floatY_9s_ease-in-out_infinite]",
    },
    {
      src: "/favicon.png",
      position: "top-[45%] left-[50%]",
      anim: "animate-[floatY_5s_ease-in-out_infinite]",
    },
    {
      src: "/favicon.png",
      position: "top-[60%] left-[85%]",
      anim: "animate-[floatY_10s_ease-in-out_infinite]",
    },
    {
      src: "/heart.svg",
      position: "top-[50%] left-[60%]",
      anim: "animate-[floatY_6.5s_ease-in-out_infinite]",
    },
    {
      src: "/favicon.png",
      position: "top-[40%] left-[70%]",
      anim: "animate-[floatY_7.5s_ease-in-out_infinite]",
    },
  ];

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Floating QR Box */}
      <div
        className="fixed bottom-10 right-9 z-50 hidden md:flex
                   size-24 bg-primary-blue/10 backdrop-blur-md
                   rounded-xl items-center justify-center
                   transition-all duration-300 ease-out
                   hover:scale-125 hover:shadow-xl"
      >
        <div className="relative w-[80%] h-[80%]">
          <Image
            src="/dummyQr.png"
            alt="QR Code"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Floating Icons Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingImages.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} ${item.anim}
                        w-[14px] h-[14px]
                        md:w-[18px] md:h-[18px]
                        lg:w-[32px] lg:h-[32px]
                        xl:w-[40px] xl:h-[40px]`}
          >
            <Image
              src={item.src}
              alt="Floating icon"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div
        className="h-[419px] md:h-[436px] lg:h-[544px] xl:h-[638px]
                      flex flex-col items-center justify-between"
      >
        <div className="flex flex-col items-center">
          <p
            className="font-bold text-[24px] md:text-[40px] lg:text-[48px] xl:text-[56px]
                        text-secondary pb-[32px] text-center"
          >
            A home for your{" "}
            <span className="text-primary-blue">
              <br className="md:hidden" /> family finances
            </span>
          </p>

          <DownloadBtn />
        </div>

        <video src="/heroAnime.mp4" autoPlay loop />
      </div>
    </div>
  );
};

export default Hero;
