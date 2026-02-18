import { ReactNode } from "react";

const Indent = ({ children }: { children: ReactNode }) => {
  return <section className="pl-[20px]">{children}</section>;
};
export default Indent;
