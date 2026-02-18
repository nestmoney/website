import TermsPage from "@/components/Pages/TermsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Of Use | Nest Money",
  description:
    "Read the Nest Money terms of use and how we manage your information.",
};

const page = () => {
  return <TermsPage />;
};
export default page;
