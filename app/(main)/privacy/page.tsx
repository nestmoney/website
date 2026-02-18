import PrivacyPage from "@/components/Pages/PrivacyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nest Money",
  description:
    "Read the Nest Money privacy policy and how we protect your information.",
};

const page = () => {
  return <PrivacyPage />;
};

export default page;
