import Image from "next/image";

const Nest = () => {
  return (
    <section
      className="scroll-mt-[80px] mb-[64px] md:mb-[128px] xl:mb-[160px]"
      id="nest"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="w-[320px] md:w-[700px] lg:w-[960px] xl:w-[1200] flex flex-col gap-6">
          <header className="mb-[16px] md:mb-[32px]">
            <Image
              src="/leftQuote.svg"
              width={16}
              height={16}
              alt=""
              className="w-[16px] md:w-[24px] mb-2 md:mb-4"
              aria-hidden="true"
            />

            <h2 className="text-[22px] md:text-[40px] lg:text-[40px] xl:text-[48px] font-bold leading-[110%]">
              Financial awareness and <br className="hidden md:block" />
              shared responsibility build<br className="hidden md:block" />
              {" "}
              <span className="inline-flex items-end gap-1">
              secure families
                <Image
                  src="/rightQuote.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="-translate-y-2 md:-translate-y-4 lg:-translate-y-4 xl:-translate-y-5 ml-1 md:ml-4 w-[16px] md:w-[24px]"
                  aria-hidden="true"
                />
              </span>
            </h2>
          </header>

          <div className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[22px] space-y-[30px] w-[320px] md:w-[540px] lg:w-[560px] xl:w-[680px] font-normal">
            <p>
              <span className="text-primary-blue font-bold">Nest</span> is a
              shared space for your family, where everyone can see finances, pay
              each other&apos;s bills, keep track of financial wellbeing, and
              more
            </p>
            <p className="font-semibold italic">
              Like a WhatsApp group for family finances
            </p>
            <p>
              Boundaries? We&apos;ve got you covered.
              <br /> You can create multiple nests to manage finances separately
              with your spouse, parents or other family members
            </p>
          </div>
        </div>

        <video
        autoPlay
        muted
        loop
        playsInline
        className="w-[200px] md:w-[260px] xl:w-[300px] rounded-4xl object-cover">
          <source src="/mobile_app.mp4" type="video/mp4" />
          </video>
      </div>
    </section>
  );
};
export default Nest;
