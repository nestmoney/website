"use client";

import Image from "next/image";

const Offerings = () => {
  return (
    <section
      id="Offerings"
      className="scroll-mt-[70px] md:scroll-mt-[74px] w-[320px] md:w-full mx-auto"
    >
      {/* Header */}
      <div className="w-full flex items-center mb-20 lg:mb-32">
        <div className="flex-1 border-t-1 border-dashed border-border"></div>
        <h2 className="px-4 heading2 text-primary-blue font-playfair italic">
          For you & your family
        </h2>
        <div className="flex-1 border-t-1 border-dashed border-border"></div>
      </div>

      {/* 5 Items Container */}
      <div className="flex flex-col gap-12">

        {/* Item 1: Utilities */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <Image
            className="w-[220px] md:w-[300px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
            src="/i_ut.png"
            width={1020}
            height={1240}
            alt="ut"
          />

          <div className="xl:max-w-[620px] lg:max-w-[540px] text-center lg:text-left items-center lg:items-start flex flex-col gap-2">
            <Image
              className="w-[40px] md:w-[50px] lg:w-[70px] xl:w-[80px] h-auto object-contain shrink-0"
              src="/ic_ut_2.png"
              width={100}
              height={100}
              alt="home"
            />
            <h3 className="heading2">
              Utility bills & recharges
            </h3>
            <p className="small-body1">
              Manage all your household bills like<br />electricity, mobile recharges, insurance<br />premiums, LPG, and more <span className="text-primary-blue font-semibold italic font-playfair">in one place</span>
            </p>
          </div>
        </div>

        {/* Item 2: Credit Cards */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-4">
          <Image
            className="w-[220px] md:w-[300px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
            src="/i_cc.png"
            width={1020}
            height={1240}
            alt="cc"
          />

          <div className="xl:max-w-[620px] lg:max-w-[540px] text-center lg:text-left items-center lg:items-start flex flex-col gap-2">
            <Image
              className="w-[40px] md:w-[50px] lg:w-[70px] xl:w-[80px] h-auto object-contain shrink-0"
              src="/ic_cc_2.png"
              width={100}
              height={100}
              alt="home"
            />
            <h3 className="heading2">
              Credit card bills
            </h3>
            <p className="small-body1">
              Manage all your family’s credit card bills<br /><span className="text-primary-blue font-semibold italic font-playfair">in one place</span>, get timely reminders, so no one<br />ever misses a due date
            </p>
          </div>
        </div>

        {/* Item 3: Fixed deposit */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <Image
            className="w-[220px] md:w-[300px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
            src="/i_fd.png"
            width={1020}
            height={1240}
            alt="fd"
          />

          <div className="xl:max-w-[620px] lg:max-w-[540px] text-center lg:text-left items-center lg:items-start flex flex-col gap-2">
            <Image
              className="w-[40px] md:w-[50px] lg:w-[70px] xl:w-[80px] h-auto object-contain shrink-0"
              src="/ic_fd_2.png"
              width={100}
              height={100}
              alt="home"
            />
            <h3 className="heading2">
              Fixed deposit
            </h3>
            <p className="small-body1">
              Invest in <span className="text-primary-blue font-semibold italic font-playfair"> high interest rate </span> FDs offered by RBI<br />regulated Banks & NBFCs. Secure. Instant.<br />No new bank account needed
            </p>
          </div>
        </div>

        {/* Item 4: Nest Safe */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-4">
          <Image
            className="w-[220px] md:w-[300px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
            src="/i_ns.png"
            width={1020}
            height={1240}
            alt="ns"
          />

          <div className="xl:max-w-[620px] lg:max-w-[540px] text-center lg:text-left items-center lg:items-start flex flex-col gap-2">
            <Image
              className="w-[40px] md:w-[50px] lg:w-[70px] xl:w-[80px] h-auto object-contain shrink-0"
              src="/ic_ns_2.png"
              width={100}
              height={100}
              alt="home"
            />
            <h3 className="heading2">
              Nest safe
            </h3>
            <p className="small-body1">
              Securely share important documents like<br />insurance and health cards so your family<br />can access them <span className="text-primary-blue font-semibold italic font-playfair">when it matters most</span>
            </p>
          </div>
        </div>

        {/* Item 5: Credit Reports */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <Image
            className="w-[220px] md:w-[300px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
            src="/i_cr.png"
            width={1020}
            height={1240}
            alt="cr"
          />

          <div className="xl:max-w-[620px] lg:max-w-[540px] text-center lg:text-left items-center lg:items-start flex flex-col gap-2">
            <Image
              className="w-[40px] md:w-[50px] lg:w-[70px] xl:w-[80px] h-auto object-contain shrink-0"
              src="/ic_cr_2.png"
              width={100}
              height={100}
              alt="home"
            />
            <h3 className="heading2">
              Credit reports
            </h3>
            <p className="small-body1">
              Track all ongoing loans and monitor each<br />other’s credit reports to maintain your<br />family’s overall <span className="text-primary-blue font-semibold italic font-playfair">financial wellbeing</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offerings;