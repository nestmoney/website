import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Nest Money",
  description: "Read the Nest Money terms of use and service conditions.",
};

const page = () => {
  return (
    <main className="min-h-screen py-[75px] site-container mx-auto">
      <header className="h-[70px] md:h-[152px] text-[20px] md:text-[40px] font-semibold items-center bg-primary-blue text-white bg-[url('/linksPattren.svg')] bg-cover bg-center bg-no-repeat flex scroll-mt-[80px] pl-6 md:pl-10 md:rounded-tl-[40px] md:rounded-br-[40px] mb-10 rounded-tl-[24px] rounded-br-[24px]">
        <h1>Terms of Use</h1>
      </header>

      <section></section>
    </main>
  );
};

export default page;
