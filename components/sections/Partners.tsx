"use client";

import Image from "next/image";

const PartnersSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center mb-20 w-full px-2"
      aria-labelledby="partners-title"
    >
      <Image
        src="/fam_footer.png"
        alt="India's family finance app"
        width={2374}
        height={367}
        className="w-full h-auto object-cover"
        sizes="100vw"
      />

      <span className="sr-only">
        India's family finance app
      </span>
    </section>
  );
};

export default PartnersSection;