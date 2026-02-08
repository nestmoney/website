import type { Metadata } from "next";
import { privacyPolicyData } from "@/components/updatable";

export const metadata: Metadata = {
  title: "Privacy Policy | Nest Money",
  description:
    "Read the Nest Money privacy policy and how we protect your information.",
};

const page = () => {
  return (
    <main className="min-h-screen py-[75px] site-container mx-auto">
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
