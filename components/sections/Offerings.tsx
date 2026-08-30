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
            src="/img_ut2.png"
            width={1240}
            height={1480}
            alt="home"
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
              Manage all your <span className="text-primary-blue font-semibold italic font-playfair mr-1">household bills</span> like electricity, mobile recharges, insurance premiums, LPG gas, and more in one place
            </p>
          </div>
        </div>

        {/* Item 2: Credit Cards */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-4">
          <Image
            className="w-[220px] md:w-[300px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
            src="/img_cc2.png"
            width={1240}
            height={1480}
            alt="credit card"
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
              Manage all your family’s <span className="text-primary-blue font-semibold italic font-playfair mr-1">credit card bills</span> in one place, get timely reminders, so that no one ever misses a due date
            </p>
          </div>
        </div>

        {/* Item 3: Fixed deposit */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <Image
            className="w-[220px] md:w-[300px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
            src="/img_fd2.png"
            width={1240}
            height={1480}
            alt="fd icon"
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
              Invest in <span className="text-primary-blue font-semibold italic font-playfair mr-1"> high interest rate</span> FDs offered by RBI regulated Banks & NBFCs. Secure. Instant. No new bank account needed
            </p>
          </div>
        </div>

        {/* Item 4: Nest Safe */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-4">
          <Image
            className="w-[220px] md:w-[300px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
            src="/img_ns2.png"
            width={1240}
            height={1480}
            alt="vault icon"
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
              Securely share <span className="text-primary-blue font-semibold italic font-playfair mr-1">important documents</span> like insurance and health cards so your family can access them when it matters most
            </p>
          </div>
        </div>

        {/* Item 5: Credit Reports */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <Image
            className="w-[220px] md:w-[300px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
            src="/img_cr2.png"
            width={1240}
            height={1480}
            alt="credit card"
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
              Track all ongoing loans and monitor each other’s credit reports to maintain your family’s overall <span className="text-primary-blue font-semibold italic font-playfair">financial wellbeing</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offerings;