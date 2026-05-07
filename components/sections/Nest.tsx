"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function NestSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Play only when in viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);

    return () => observer.unobserve(video);
  }, []);

  return (
    <section className="scroll-mt-[70px] md:scroll-mt-[74px] mb-[64px] md:mb-[128px] xl:mb-[160px]"
      id="nest">

      <div className="flex flex-col gap-12 lg:flex-row justify-between items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left w-[320px] md:w-[700px] lg:w-[960px] xl:w-[1200px] flex flex-col gap-6">
          {/* <header className="mb-[16px] md:mb-[32px]">
            <Image
              src="/leftQuote.svg"
              width={16}
              height={16}
              alt=""
              className="w-[16px] md:w-[24px] mb-2 md:mb-4"
              aria-hidden="true"
            />

            <h2 className="text-[22px] md:text-[40px] lg:text-[40px] xl:text-[48px] font-bold leading-[110%]">
              Financial awareness and <br className="hidden md:block" />
              shared responsibility build
              <br className="hidden md:block" />{" "}
              <span className="inline-flex items-end gap-1">
                secure families
                <Image
                  src="/rightQuote.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="-translate-y-2 md:-translate-y-4 lg:-translate-y-4 xl:-translate-y-5 ml-1 md:ml-4 w-[16px] md:w-[24px]"
                  aria-hidden="true"
                />
              </span>
            </h2>
          </header> */}

          <div className="text-center lg:text-left text-[14px] md:text-[16px] lg:text-[20px] xl:text-[22px]
          space-y-[30px] lg:space-y-[40px] w-[320px] md:w-[540px] lg:w-[560px] xl:w-[680px] font-normal
          mx-auto lg:mx-0">
            <p className="font-bold text-[32px] md:text-[32px] lg:text-[40px] xl:text-[48px]">
              What is a <span className="text-primary-blue font-bold">Nest</span> ?
            </p>

            <p className="text-[24px] md:text-[26px] lg:text-[30px] xl:text-[32px] font-medium">
              <span className="text-primary-blue font-semibold">Nest</span> is a
              shared space for you and your family, where everyone can see finances, pay
              each other&apos;s bills, invest together, keep track of financial wellbeing, and more...
            </p>

            {/* <p className="font-semibold italic">
              Like a WhatsApp group for family finances
            </p> */}

            <p>
              <span className="font-medium">Boundaries? We&apos;ve got you covered!</span>
              <br />
              You can manage finances in different nests, whether it's just you or shared with your spouse, parents, or other family members.
            </p>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <video
          ref={videoRef}
          muted
          loop
          poster="/mob_demo_placeholder.png"
          playsInline
          className="w-[210px] md:w-[250px] lg:w-[320px] xl:w-[340px] object-cover"
        >
          <source src="/mob_demo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}