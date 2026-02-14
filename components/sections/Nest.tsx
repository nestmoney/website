import Image from "next/image";

const Nest = () => {
  return (
    <section className="scroll-mt-[80px] mb-[30]" id="nest">
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 gap-10">
        <div className="w-[320px] md:w-[700px] lg:w-[960px] xl:w-[1200] flex flex-col gap-6">
          <header className="mb-[35px]">
            <Image
              src="/leftQuote.svg"
              width={35}
              height={35}
              alt=""
              className="w-[23px] md:w-[34px] mb-2"
              aria-hidden="true"
            />

            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-bold leading-[110%]">
              Financial awareness is the <br className="hidden md:block" />
              foundation of a secure{" "}
              <span className="inline-flex items-end gap-1">
                family
                <Image
                  src="/rightQuote.svg"
                  width={23}
                  height={23}
                  alt=""
                  className="-translate-y-[7px] ml-2 md:-translate-y-4 md:ml-2 w-[23px] md:w-[34px]"
                  aria-hidden="true"
                />
              </span>
            </h2>
          </header>

          <div className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] space-y-[30px] w-[320px] md:w-[581px] lg:w-[574px] xl:w-[684px] font-normal">
            <p>
              <span className="text-primary-blue font-bold">Nest</span> is a
              shared space for your family, where everyone can see finances, pay
              each other&apos;s bills, keep track of financial wellbeing, and
              more.
            </p>
            <p className="font-semibold italic">
              It is like a WhatsApp group for family finances.
            </p>
            <p>
              Boundaries? We&apos;ve got you covered.
              <br /> You can create multiple nests to manage finances separately
              with your spouse, parents or other family members.
            </p>
          </div>
        </div>

        <figure className="flex items-end rounded-4xl">
          <div className="relative border-8 rounded-4xl overflow-hidden shadow-[0_-10px_120px_rgba(0,0,0,0.12)] w-[211px] h-[468px] md:w-[211px] md:h-[468px] lg:w-[207px] lg:h-[458px] xl:w-[267px] xl:h-[598px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/nest-video-dummy.mp4" type="video/mp4" />
            </video>
          </div>
        </figure>
      </div>
    </section>
  );
};
export default Nest;
