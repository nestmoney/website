import { ReactNode } from "react";

interface BoldProps {
  children: ReactNode;
}

const Bold = ({ children }: BoldProps) => {
  return <span className="font-semibold">{children}</span>;
};

export default Bold;
