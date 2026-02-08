import type { Metadata } from "next";
import { TermData } from "@/components/updatable";

export const metadata: Metadata = {
  title: "Terms of Use | Nest Money",
  description: "Read the Nest Money terms of use and service conditions.",
};

const page = () => {
  return (
    <main className="min-h-screen py-[75px] site-container mx-auto">
      <div className="space-y-10">
        {TermData.map((term, i) => (
          <section key={i} aria-labelledby={`terms-section-${i}`}>
            <h2
              id={`terms-section-${i}`}
              className="md:text-[20px] text-[14px] font-semibold mb-6"
            >
              {term.title}
            </h2>

            <ol className="list-decimal list-outside pl-6 space-y-4 text-secondary leading-relaxed text-[12px] md:text-[14px]">
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
