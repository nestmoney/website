"use client";
import Image from "next/image";
import DownloadBtn from "../DownloadButton";

const Download = () => {
  return (
    <section
      className="flex flex-col justify-center items-center bg-blue-600 text-white h-[398px] md:h-[480px] bg-[url('/linksPattren.svg')] bg-cover bg-center bg-no-repeat scroll-mt-[80px]"
      aria-labelledby="download-title"
    >
      <h2 id="download-title" className="sr-only">
        Download Nest Money
      </h2>
      <div className="flex flex-col items-center justify-center space-y-[40px] h-[90%]">
        <figure>
          <Image
            src="/linksLogo.svg"
            width={600}
            height={82}
            alt="Nest Money"
            className="w-[260px] md:w-[400px] lg:w-[600px]"
          />
        </figure>
        <DownloadBtn isFooter />
      </div>
      <p className="flex text-[12px] md:text-[19px]">
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
