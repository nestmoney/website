"use client";

import Image from "next/image";

export default function NestSection() {
  return (
    <section className="scroll-mt-[70px] md:scroll-mt-[74px] mb-[64px] md:mb-[128px] xl:mb-[160px]"
      id="nest">

      <div className="flex flex-col gap-12 lg:flex-row justify-between items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left flex flex-col gap-6">
          <div className="text-center lg:text-left text-[14px] md:text-[16px] lg:text-[20px] xl:text-[22px]
          space-y-[30px] lg:space-y-[40px] w-[320px] md:w-[540px] lg:w-[500px] xl:w-[680px] font-normal
          mx-auto lg:mx-0">
            <p className="font-bold text-[32px] md:text-[32px] lg:text-[40px] xl:text-[48px]">
              What is a <span className="text-primary-blue font-bold">Nest</span> ?
            </p>

            <p className="text-[24px] md:text-[26px] lg:text-[26px] xl:text-[32px] font-medium">
              <span className="text-primary-blue font-semibold">Nest</span> is a
              shared space for you and your family, where everyone can see finances, pay
              each other&apos;s bills, invest together, and more...
            </p>

            <p>
              <span className="font-medium">Boundaries? We&apos;ve got you covered!</span>
              <br />
              You can manage finances in different nests, whether it's just you or shared with your spouse, parents, or other family members.
            </p>
          </div>
        </div>

        <Image
          src="/nestswitch.png"
          alt="nestswitch"
          width={2748}
          height={4196}
          priority
          className="w-[260px] md:w-[320px] lg:w-[380px] xl:w-[420px] object-cover"
        />

        {/* RIGHT VIDEO */}
        {/*<video
          autoPlay
          muted
          loop
          poster="/mob_demo_placeholder.png"
          playsInline
          className="w-[210px] md:w-[250px] lg:w-[320px] xl:w-[340px] object-cover"
        >
          <source src="/mob_demo.mp4" type="video/mp4" />
        </video>*/}
      </div>
    </section>
  );
}