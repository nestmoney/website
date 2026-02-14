import type { Metadata } from "next";
import { TermData } from "@/components/updatable";

export const metadata: Metadata = {
  title: "Terms of Use | Nest Money",
  description: "Read the Nest Money terms of use and service conditions.",
};

const page = () => {
  return (
    <main className="p-[20px] ">
      <div className="space-y-10">
        {TermData.map((term, i) => (
          <section key={i} aria-labelledby={`terms-section-${i}`}>
            <h2 id={`terms-section-${i}`} className=" font-semibold mb-6 ">
              {term.title}
            </h2>

            <ol className="list-decimal  pl-3  text-secondary leading-relaxed text-[12px] md:text-[14px]">
              {term.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </main>
  );
};

export default page;
