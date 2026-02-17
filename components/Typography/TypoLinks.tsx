import { ReactNode } from "react";

interface TypoLinksProps {
  children: ReactNode;
  email?: string;
}

const TypoLinks = ({ children, email }: TypoLinksProps) => {
  return (
    <a href={`mailto:${email}`} className="text-primary-blue">
      {children}
    </a>
  );
};

export default TypoLinks;
