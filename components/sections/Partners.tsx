import Image from "next/image";

const Partners = () => {
  return (
    <section className=" min-h-[30vh] pt-[73px] flex justify-center  items-center pb-[100px]">
      <Image
        src={"/partners.svg"}
        alt="logo of partners"
        width={600}
        height={90}
      />
    </section>
  );
};
export default Partners;
