"use client";
import Image from "next/image";
import DownloadBtn from "../DownloadButton";

const Hero = () => {
  return (
    <div className="relative h-screen scroll-mt-[80px] flex items-center justify-center  lg:mt-10">
      <div
        className="fixed bottom-10 right-9 z-50 
             size-25 transparent backdrop-blur-md
             bg-primary-blue/10
             rounded-xl
             flex items-center justify-center
             transition-all duration-300 ease-out
             hover:scale-150 hover:shadow-[0_5px_10px_rgba(0,0,0,0.3)]
             group perspective-[1000px] hidden md:flex"
      >
        <div className="size-[80%] bg-red-300">
          <Image
            src={"/dummyQr.png"}
            width={30}
            height={30}
            alt="qr"
            className="w-full"
          ></Image>
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center  pointer-events-none overflow-hidden">
        <Image
          src="/facebook.svg"
          alt="Floating icon 3"
          width={70}
          height={70}
          className="absolute bottom-[15%] left-[10%] animate-[floatXY_2s_ease-in-out_infinite]"
        />
        <Image
          src="/instagram.svg"
          alt="Floating icon 3"
          width={70}
          height={70}
          className="absolute bottom-[5%] left-[80%] animate-[floatXY_2s_ease-in-out_infinite]"
        />
        <Image
          src="/heart.svg"
          alt="Floating icon 3"
          width={70}
          height={70}
          className="absolute bottom-[75%] left-[90%] animate-[floatXY_2s_ease-in-out_infinite]  "
        />
        <Image
          src="/vault.svg"
          alt="Floating icon 3"
          width={70}
          height={70}
          className="absolute bottom-[45%] left-[83%] animate-[floatXY_2s_ease-in-out_infinite]  "
        />
        <Image
          src="/cibil.svg"
          alt="Floating icon 3"
          width={100}
          height={100}
          className="absolute bottom-[60%] left-[20%] animate-[floatXY_2s_ease-in-out_infinite]  "
        />
      </div>
      <div className="h-[419px] md:h-[436px] lg:h-[544px] xl:[638px] flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <p className="font-bold text-[24px] md:text-[40px] lg:text-[48px] xl:text-[56px] text-secondary pb-[32px] text-center">
            A home for your{" "}
            <span className="text-primary-blue">
              <br className="md:hidden" /> family finances
            </span>
          </p>
          <DownloadBtn />
        </div>

        <video src={"/heroAnime.mp4"} autoPlay loop className="w-32" />
      </div>
    </div>
  );
};
export default Hero;
