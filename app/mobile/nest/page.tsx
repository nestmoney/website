"use client";

import Image from "next/image";

export default function MobileNestSection() {
  return (
    <section className="scroll-mt-[70px] md:scroll-mt-[74px] mb-[64px] md:mb-[128px] xl:mb-[160px] my-10"
      id="nest">

      <div className="flex lg:flex-row flex-col gap-12 justify-between items-center">
        <div className="flex flex-col gap-12 text-center lg:text-left 
        w-full max-w-[320px] md:max-w-[680px] lg:max-w-[580px] xl:max-w-[700px] 
        mx-auto lg:mx-0">
          <h2 className="heading2">
            <span className="text-primary-blue">Nest</span> is a shared space<br />for you and your family,<br />where everyone can<br />manage finances
            <span className="text-primary-blue font-playfair italic"> together</span>
          </h2>

          <p className="small-body1">
            <span className="small-heading1 block">
              <span className="text-primary-blue">Boundaries?</span> We&apos;ve got you covered!
            </span>
            <span className="block mt-2 lg:mt-4">
              Easily manage finances in separate Nests,<br />
              <span className="text-primary-blue font-semibold italic font-playfair">solo or shared </span> with your spouse or parents
            </span>
          </p>
        </div>

        <img
          src="/nestswitchvid.gif"
          alt="Nest switching animation"
          className="w-[240px] md:w-[320px] lg:w-[320px] xl:w-[360px] object-cover shrink-0"
        />
      </div>
    </section>
  );
}