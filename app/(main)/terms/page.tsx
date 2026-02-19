import TermsPage from "@/components/Pages/TermsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Nest Money",
  description:
    "Learn about our terms of use and your responsibilities",
};

const page = () => {
  return <TermsPage />;
};
export default page;
