"use client";

import Image from "next/image";

const Features = () => {
  return (
    <section id="features" className="space-y-10 lg:space-y-15 mb-[64px] md:mb-[128px] xl:mb-[160px] w-[320px] md:w-full mx-auto">
      <section className="scroll-mt-[80px] space-y-10 lg:space-y-15">

        <div className="w-full flex items-center">
          <div className="flex-1 border-t-1 border-dashed border-border"></div>
          <h2
            className="px-4 text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]
            text-primary-blue font-semibold text-center whitespace-nowrap">
            Monthly essentials
          </h2>
          <div className="flex-1 border-t-1 border-dashed border-border"></div>
        </div>

        <div className="space-y-[32px] lg:space-y-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-11 lg:gap-0">
            <Image
              className="w-[200px] md:w-[240px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
              src="/utility-bills.png"
              width={400}
              height={400}
              alt="home"
            />

            <div className="mt-6 md:mt-0 xl:max-w-[600px] lg:max-w-[540px] text-center md:text-left items-center md:items-start flex flex-col gap-4">
              <Image
                className="w-[40px] md:w-[50px] lg:w-[70px] xl:w-[80px] h-auto object-contain shrink-0"
                src="/ic_utility.svg"
                width={100}
                height={100}
                alt="home"
              />

              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold">
                Utility bills & recharges
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px]">
                Manage and pay household bills like electricity, gas, mobile
                recharges, insurance premiums and more in one place
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-0 md:gap-11 lg:gap-0">
            <Image
              className="w-[200px] md:w-[240px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
              src="/cc-bills.png"
              width={400}
              height={400}
              alt="credit card"
            />

            <div className="mt-6 md:mt-0 xl:max-w-[600px] lg:max-w-[540px] text-center md:text-left items-center md:items-start flex flex-col gap-4">
              <Image
                className="w-[40px] md:w-[50px] lg:w-[70px] xl:w-[80px] h-auto object-contain shrink-0"
                src="/ic_cc.svg"
                width={100}
                height={100}
                alt="home"
              />

              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold">
                Credit card bills
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px]">
                Manage and pay all your family’s credit card bills in one place,
                so that no one ever misses a due date
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-[80px] space-y-10 lg:space-y-15">
        <div className="w-full flex items-center">
          <div className="flex-1 border-t-1 border-dashed border-border"></div>
          <h2
            className="px-4 text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]
            text-primary-blue font-semibold text-center whitespace-nowrap">
            Thoughtful offerings
          </h2>
          <div className="flex-1 border-t-1 border-dashed border-border"></div>
        </div>

        <div className="space-y-[32px] lg:space-y-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-11 lg:gap-0">
            <Image
              className="w-[200px] md:w-[240px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
              src="/nest-safe.png"
              width={400}
              height={400}
              alt="vault icon"
            />

            <div className="mt-6 md:mt-0 xl:max-w-[600px] lg:max-w-[540px] text-center md:text-left items-center md:items-start flex flex-col gap-4">
              <Image
                className="w-[40px] md:w-[50px] lg:w-[70px] xl:w-[80px] h-auto object-contain shrink-0"
                src="/ic_safe.svg"
                width={100}
                height={100}
                alt="home"
              />

              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold">
                Nest safe
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px]">
                Share important documents like insurance policies, health cards,
                investment or loan documents in one secure place so your family
                can access them when it matters the most
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-0 md:gap-11 lg:gap-0">
            <Image
              className="w-[200px] md:w-[240px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
              src="/credit-report.png"
              width={400}
              height={400}
              alt="credit card"
            />

            <div className="mt-6 md:mt-0 xl:max-w-[600px] lg:max-w-[540px] text-center md:text-left items-center md:items-start flex flex-col gap-4">
              <Image
                className="w-[40px] md:w-[50px] lg:w-[70px] xl:w-[80px] h-auto object-contain shrink-0"
                src="/ic_report.svg"
                width={100}
                height={100}
                alt="home"
              />

              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold">
                Credit reports
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px]">
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