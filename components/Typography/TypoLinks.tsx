import { ReactNode } from "react";

interface TypoLinksProps {
  children: ReactNode;
  email?: string;
}

const TypoLinks = ({ children, email }: TypoLinksProps) => {
  return (
    <a href={`mailto:${email}`} className="text-primary-blue mx-1">
      {children}
    </a>
  );
};

export default TypoLinks;
