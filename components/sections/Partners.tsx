"use client";

import Image from "next/image";

const PartnersSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center pt-[64px] md:pt-[32px] xl:pt-0 mb-[64px] md:mb-[128px] w-[320px] md:w-full mx-auto"
      aria-labelledby="partners-title"
    >
        <Image
          src="/iso-footer.png"
          alt="Partner logos"
          width={600}
          height={90}
        />
    </section>
  );
};

export default PartnersSection;