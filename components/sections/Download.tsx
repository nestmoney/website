"use client";
import Image from "next/image";
import DownloadBtn from "../DownloadButton";

const Download = () => {
  return (
    <section
      className="flex flex-col justify-center items-center bg-primary-blue text-white h-[300px] md:h-[400px] bg-[url('/linksPattren.svg')] bg-cover bg-top bg-no-repeat"
      aria-labelledby="download-title"
    >
      <h2 id="download-title" className="sr-only">
        Download Nest Money
      </h2>
      <div className="flex flex-col items-center justify-center space-y-[36px] h-[90%]">
        <figure>
          <Image
            src="/linksLogo.svg"
            width={600}
            height={82}
            alt="Nest Money"
            className="w-[260px] md:w-[360px]"
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
