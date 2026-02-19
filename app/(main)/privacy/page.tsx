import PrivacyPage from "@/components/Pages/PrivacyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nest Money",
  description:
    "Learn about how we collect, use, and protect your personal data",
};

const page = () => {
  return <PrivacyPage />;
};

export default page;
