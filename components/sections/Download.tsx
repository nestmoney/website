"use client";
import Image from "next/image";

const Download = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center bg-primary-blue text-white h-[300px] md:h-[400px] bg-[url('/linksPattren.svg')] bg-cover bg-top bg-no-repeat"
      aria-labelledby="download-title"
    >
      <h2 id="download-title" className="sr-only">
        Download Nest Money
      </h2>

      {/* Logo Container - Now perfectly centered because parent uses justify-center */}
      <figure>
        <Image
          src="/linksLogo.svg"
          width={600}
          height={82}
          alt="Nest Money"
          className="w-[260px] md:w-[360px]"
        />
      </figure>

      {/* Text Container - Absolute positioned at the bottom so it doesn't push the logo up */}
      <p className="absolute bottom-4 flex items-center text-[12px] md:text-[19px]">
        Crafted with
        <Image
          src="/heart.svg"
          width={20}
          height={20}
          alt=""
          className="mx-2 animate-heartbeat"
          aria-hidden="true"
        />
        for Indian families
      </p>
    </section>
  );
};

export default Download;
