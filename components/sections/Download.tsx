"use client";
import Image from "next/image";
import DownloadBtn from "../DownloadButton";

const Download = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-blue-600 text-white h-[398px] md:h-[480px] bg-[url('/linksPattren.svg')] bg-cover bg-center bg-no-repeat flex scroll-mt-[80px]"
      id="links"
    >
      <div className="flex flex-col items-center justify-center space-y-[40px] h-[90%]">
        <Image
          src={"/linksLogo.svg"}
          width={600}
          height={82}
          alt="logo of nest money"
          className="w-[260px] md:w-[400px] lg:w-[600px] "
        ></Image>
        <DownloadBtn />
      </div>
      <p className="flex text-[12px] md:text-[19px]">
        Crafted with
        <Image
          src={"/heart.svg"}
          width={20}
          height={20}
          alt="logo of heart"
          className="mx-1"
        />
        for Indian families
      </p>
    </div>
  );
};
export default Download;
