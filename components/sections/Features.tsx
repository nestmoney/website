import Image from "next/image";

const Features = () => {
  return (
    <section className=" ">
      <section id="features" className="scroll-mt-[80px]">
        <h2
          className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] 
      font-semibold text-primary-blue text-center "
        >
          Monthly essentials
        </h2>

        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 ">
            <Image
              className="size-[160px] md:size-[240px] lg:size-[320px]"
              src="/home.svg"
              width={400}
              height={400}
              alt="home"
            />

            <div className="max-w-[600px] text-center md:text-left">
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Utility bills and recharges
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Manage and pay household bills like electricity, gas, mobile
                recharges, insurance premiums and more in one place.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-5 ">
            <Image
              className="size-[160px] md:size-[240px] lg:size-[320px]"
              src="/credit.svg"
              width={400}
              height={400}
              alt="credit card"
            />

            <div className="max-w-[600px] text-center md:text-left">
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Credit card bills
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Manage and pay all your family’s credit card bills in one place,
                so that no one ever misses a due date.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <h2
          className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] 
      font-semibold text-primary-blue text-center mb-10 "
        >
          Thoughtful offerings
        </h2>

        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 ">
            <Image
              className="size-[160px] md:size-[240px] lg:size-[320px]"
              src="/vault.svg"
              width={400}
              height={400}
              alt="vault icon"
            />

            <div className="max-w-[600px] text-center md:text-left">
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Nest safe
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Share important documents like insurance policies, health cards,
                investment or loan documents in one secure place so your family
                can access them when it matters the most.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-5">
            <Image
              className="size-[160px] md:size-[240px] lg:size-[320px]"
              src="/credit.svg"
              width={400}
              height={400}
              alt="credit card"
            />

            <div className="max-w-[600px] text-center md:text-left">
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Credit reports
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Track all ongoing loans in one place and monitor each other’s
                credit reports to maintain your family’s overall financial
                wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
