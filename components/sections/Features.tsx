import Image from "next/image";

const Features = () => {
  return (
    <section className="space-y-10 mb-[64px] md:mb-[128px] xl:mb-[160px] w-[320px] md:w-full mx-auto">
      <section
        id="features"
        className="scroll-mt-[80px] space-y-10 lg:space-y-0"
      >
        <h2
          className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] 
      font-semibold text-primary-blue text-center mb-10 md:mb-10 xl:mb-10"
        >
          Monthly essentials
        </h2>

        <div className="space-y-10 lg:space-y-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-11 lg:gap-0 ">
            <Image
              className="w-[160px] md:w-[240px] lg:w-[320px] h-auto object-contain shrink-0"
              src="/home.png"
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
                recharges, insurance premiums and more in one place
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-0 md:gap-11 lg:gap-0">
            <Image
              className="w-[160px] md:w-[240px] lg:w-[320px] h-auto object-contain shrink-0"
              src="/cards.png"
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
                so that no one ever misses a due date
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-0 lg:pt-0 space-y-10 lg:space-y-0">
        <h2
          className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] 
      font-semibold text-primary-blue text-center mb-10 "
        >
          Thoughtful offerings
        </h2>

        <div className="space-y-10 lg:space-y-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-11 lg:gap-0 ">
            <Image
              className="w-[160px] md:w-[240px] lg:w-[320px] h-auto object-contain shrink-0"
              src="/safe.png"
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
                can access them when it matters the most
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-0 md:gap-11 lg:gap-01">
            <Image
              className="w-[160px] md:w-[240px] lg:w-[320px] h-auto object-contain shrink-0"
              src="/credit.png"
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
                wellbeing
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
