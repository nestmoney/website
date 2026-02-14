import Image from "next/image";

const Features = () => {
  return (
    <section aria-label="Features">
      <section
        id="features"
        className="scroll-mt-[80px]"
        aria-labelledby="features-title"
      >
        <h2
          id="features-title"
          className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] 
      font-semibold text-primary-blue text-center mb-10"
        >
          Monthly essentials
        </h2>

        <div>
          <article className="flex flex-col md:flex-row items-center justify-between gap-5">
            <figure>
              <Image
                className="size-[160px] md:size-[240px] lg:size-[320px]"
                src="/home.svg"
                width={400}
                height={400}
                alt="Home"
              />
            </figure>

            <div className="max-w-[600px] text-center md:text-left">
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Utility bills and recharges
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Manage and pay household bills like electricity, gas, mobile
                recharges, insurance premiums and more in one place.
              </p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row-reverse items-center justify-between gap-5">
            <figure>
              <Image
                className="size-[160px] md:size-[240px] lg:size-[320px]"
                src="/credit.svg"
                width={400}
                height={400}
                alt="Credit card"
              />
            </figure>

            <div className="max-w-[600px] text-center md:text-left">
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Credit card bills
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Manage and pay all your familys credit card bills in one place,
                so that no one ever misses a due date.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section aria-labelledby="offerings-title">
        <h2
          id="offerings-title"
          className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] 
      font-semibold text-primary-blue text-center mb-10 "
        >
          Thoughtful offerings
        </h2>

        <div>
          <article className="flex flex-col md:flex-row items-center justify-between gap-5">
            <figure>
              <Image
                className="size-[160px] md:size-[240px] lg:size-[320px]"
                src="/vault.svg"
                width={400}
                height={400}
                alt="Vault"
              />
            </figure>

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
          </article>

          <article className="flex flex-col md:flex-row-reverse items-center justify-between gap-5">
            <figure>
              <Image
                className="size-[160px] md:size-[240px] lg:size-[320px]"
                src="/cibil.svg"
                width={400}
                height={400}
                alt="Credit report"
              />
            </figure>

            <div className="max-w-[600px] text-center md:text-left">
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Credit reports
              </h3>

              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Track all ongoing loans in one place and monitor each
                other&apos;s credit reports to maintain your family&apos;s
                overall financial wellbeing.
              </p>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Features;
