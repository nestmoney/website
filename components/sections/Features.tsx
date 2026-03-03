"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { SlidersVertical } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Features = () => {
  return (
    <section className="space-y-10 mb-[64px] md:mb-[128px] xl:mb-[160px] w-[320px] md:w-full mx-auto">
      {/* Monthly essentials */}
      <section
        id="features"
        className="scroll-mt-[80px] space-y-10 lg:space-y-0"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-[24px] md:text-[40px] lg:text-[40px] xl:text-[48px]
          font-semibold text-primary-blue text-center mb-[32px] md:mb-10"
        >
          Monthly essentials
        </motion.h2>

        <div className="space-y-[32px] lg:space-y-0">
          {/* Utility bills */}
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-11">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                className="w-[160px] md:w-[240px] lg:w-[320px] h-auto object-contain"
                src="/home.png"
                width={400}
                height={400}
                alt="home"
              />
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="max-w-[600px] text-center md:text-left"
            >
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Utility bills and recharges
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Manage and pay household bills like electricity, gas, mobile
                recharges, insurance premiums and more in one place
              </p>
            </motion.div>
          </div>

          {/* Credit cards */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between md:gap-11">
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                className="w-[160px] md:w-[240px] lg:w-[320px] h-auto object-contain"
                src="/cards.png"
                width={400}
                height={400}
                alt="credit card"
              />
            </motion.div>

            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="max-w-[600px] text-center md:text-left"
            >
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Credit card bills
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Manage and pay all your family’s credit card bills in one place,
                so that no one ever misses a due date
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thoughtful offerings */}
      <section className="pt-[32px]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]
          font-semibold text-primary-blue text-center mb-[32px] md:mb-10"
        >
          Thoughtful offerings
        </motion.h2>

        <div className="space-y-[32px] lg:space-y-0">
          {/* Nest safe */}
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-11">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                className="w-[160px] md:w-[240px] lg:w-[320px] h-auto object-contain"
                src="/safe.png"
                width={400}
                height={400}
                alt="vault icon"
              />
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="max-w-[600px] text-center md:text-left"
            >
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Nest safe
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Share important documents like insurance policies, health cards,
                investment or loan documents in one secure place so your family
                can access them when it matters the most
              </p>
            </motion.div>
          </div>

          {/* Credit reports */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between md:gap-11">
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                className="w-[160px] md:w-[240px] lg:w-[320px] h-auto object-contain"
                src="/credit.png"
                width={400}
                height={400}
                alt="credit card"
              />
            </motion.div>

            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="max-w-[600px] text-center md:text-left"
            >
              <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[42px] font-semibold">
                Credit reports
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] mt-4">
                Track all ongoing loans in one place and monitor each other’s
                credit reports to maintain your family’s overall financial
                wellbeing
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
