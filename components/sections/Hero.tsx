import Image from "next/image";
import DownloadBtn from "../DownloadButton";

const Hero = () => {
  return (
    <div className="h-screen py-[73px]">
      <div className="h-[90%] flex flex-col items-center">
        <p className="font-bold text-[48px] text-secondary pb-[32px]">
          A home for your{" "}
          <span className="text-primary-blue">family finances</span>
        </p>
        <DownloadBtn />
        <Image
          src={"/dummy.svg"}
          width={960}
          height={330}
          alt="hero image "
          className="pt-[80px]"
        ></Image>
      </div>
    </div>
  );
};
export default Hero;
