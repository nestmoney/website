import { TermData } from "@/components/updatable";
const page = () => {
  return (
    <div className="min-h-screen py-[75px] site-container mx-auto ">
      <div className="h-[70px] md:h-[152px] text-[20px] md:text-[40px] font-semibold items-center bg-primary-blue text-white bg-[url('/linksPattren.svg')] bg-cover bg-center bg-no-repeat flex scroll-mt-[80px] pl-6 md:pl-10 md:rounded-tl-[40px] md:rounded-br-[40px] mb-10 rounded-tl-[24px] rounded-br-[24px]">
        Terms of Use
      </div>

      <div className="space-y-10">
        {TermData.map((term, i) => (
          <div key={i}>
            <h2 className="md:text-[20px] text-[14px] font-semibold mb-6">
              {term.title}
            </h2>

            <ol className="list-decimal list-outside pl-6 space-y-4 text-secondary leading-relaxed text-[12px] md:text-[14px]">
              {term.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
