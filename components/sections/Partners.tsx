import Image from "next/image";

const Partners = () => {
  return (
    <section
      className="min-h-[30vh] pt-[73px] flex justify-center items-center pb-[100px]"
      aria-labelledby="partners-title"
    >
      <h2 id="partners-title" className="sr-only">
        Partners
      </h2>
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
