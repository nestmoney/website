import type { Metadata } from "next";
import { privacyPolicyData } from "@/components/updatable";

export const metadata: Metadata = {
  title: "Privacy Policy | Nest Money",
  description: "Read the Nest Money privacy policy and how we protect your information.",
};

const page = () => {
  return (
    <main className="min-h-screen py-[75px] site-container mx-auto">
      <header className="h-[70px] md:h-[152px] text-[20px] md:text-[40px] font-semibold items-center bg-primary-blue text-white bg-[url('/linksPattren.svg')] bg-cover bg-center bg-no-repeat flex scroll-mt-[80px] pl-6 md:pl-10 md:rounded-tl-[40px] md:rounded-br-[40px] mb-10 rounded-tl-[24px] rounded-br-[24px]">
        <h1>Privacy Policy</h1>
      </header>

      <div className="space-y-10">
        {privacyPolicyData.map((policy, i) => (
          <section key={i} aria-labelledby={`privacy-section-${i}`}>
            <h2
              id={`privacy-section-${i}`}
              className="md:text-[20px] text-[14px] font-semibold mb-6"
            >
              {policy.title}
            </h2>

            <ol className="list-decimal list-outside pl-6 space-y-4 text-secondary leading-relaxed text-[12px] md:text-[14px]">
              {policy.items.map((item, index) => (
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
