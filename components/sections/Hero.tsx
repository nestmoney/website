import Image from "next/image";
import DownloadBtn from "../DownloadButton";

const Hero = () => {
  return (
    <div className="h-screen py-[80px] flex items-center justify-center">
      <div className="h-[419px] md:h-[436px] lg:h-[544px] xl:[638px] flex flex-col items-center justify-center ">
        <p className="font-bold text-[24px] md:text-[40px] lg:text-[48px] xl:text-[56px] text-secondary pb-[32px] text-center">
          A home for your{" "}
          <span className="text-primary-blue">
            <br className="md:hidden" /> family finances
          </span>
        </p>
        <DownloadBtn />
        <Image
          src={"/dummy.svg"}
          width={960}
          height={330}
          alt="hero image "
        ></Image>
      </div>
    </div>
  );
};
export default Hero;
