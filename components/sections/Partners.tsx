"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PartnersSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center pt-[64px] md:pt-[32px] xl:pt-0 mb-[64px] md:mb-[128px] w-[320px] md:w-full mx-auto"
      aria-labelledby="partners-title"
    >
      <motion.figure
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        <Image
          src="/india_image.png"
          alt="India's family finance app"
          width={600}
          height={90}
          className="pb-[18px] md:pb-[34px]"
        />
      </motion.figure>

      <motion.figure
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        <Image
          src="/partners.svg"
          alt="Partner logos"
          width={600}
          height={90}
        />
      </motion.figure>
    </section>
  );
};

export default PartnersSection;
