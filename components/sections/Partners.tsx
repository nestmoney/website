"use client";

import Image from "next/image";

const PartnersSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center pt-[64px] md:pt-[32px] xl:pt-0 mb-[64px] md:mb-[128px] w-[320px] md:w-full mx-auto"
      aria-labelledby="partners-title"
    >
      <Image
        src="/powered_by.png"
        alt="India's family finance app"
        width={600}
        height={90}
      />

      <span className="sr-only">
        India's family finance app
      </span>
    </section>
  );
};

export default PartnersSection;