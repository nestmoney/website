import Image from "next/image";

const Partners = () => {
  return (
    <section
      className="flex flex-col justify-center items-center pt-[64px] md:pt-[32px] xl:pt-[40px] mb-[64px] md:mb-[128px] xl:mb-[160px] w-[320px] md:w-full mx-auto"
      aria-labelledby="partners-title"
    >
      <figure>
        <Image
          src="/india_image.png"
          alt="India's family finance app"
          width={600}
          height={90}
          className="pb-[18px] md:pb-[34px]"
        />
      </figure>

      <figure>
        <Image
          src="/partners.svg"
          alt="Partner logos"
          width={600}
          height={90}
        />
      </figure>
    </section>
  );
};
export default Partners;
