import Image from "next/image";

const About = () => {
  return (
    <div className=" min-h-screen pt-[75px] " id="about">
      <div className="flex flex-col lg:flex-row justify-between items-center px-6  gap-10  ">
        <div className="w-[320px] md:w-[700px] lg:w-[960px] xl:w-[1200] flex flex-col gap-6 ">
          <div className="mb-[35px]">
            <Image
              src="/leftQuote.svg"
              width={35}
              height={35}
              alt="left quote symbol"
              className="w-[23px] md:w-[34px] mb-2"
            />

            <p className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-bold leading-[110%]">
              Financial awareness is the <br className="hidden md:block" />
              foundation of a secure{" "}
              <span className="inline-flex items-end gap-1 ">
                family
                <Image
                  src="/rightQuote.svg"
                  width={23}
                  height={23}
                  alt="right quote symbol"
                  className="-translate-y-[7px]  ml-2 md:-translate-y-4 md:ml-2 w-[23px] md:w-[34px]"
                />
              </span>
            </p>
          </div>

          <div className=" text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] space-y-[30px] w-[320px] md:w-[581px] lg:w-[574px] xl:w-[684px]  font-normal ">
            <p>
              <span className="text-primary-blue font-bold">Nest</span> is a
              shared space for your family, where everyone can see finances, pay
              each others’ bills, keep track of financial wellbeing, and more.
            </p>
            <p className="font-semibold italic">
              It is like a WhatsApp group for family finances.
            </p>
            <p>
              Boundaries? We’ve got you covered.
              <br /> You can create multiple nests to manage finances separately
              with your spouse, parents or other family members.
            </p>
          </div>
        </div>

        <div className="flex items-end">
          <Image
            src="/dummy1.svg"
            alt="demo video"
            width={598}
            height={598}
            className="w-[211px] h-[468px] md:w-[211px] md:h-[468px] lg:w-[207px] lg:h-[458px] xl:w-[267px] xl:h-[598px]"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
