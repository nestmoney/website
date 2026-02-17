import { ReactNode } from "react";

const Indent = ({ children }: { children: ReactNode }) => {
  return <section className="pl-[15px] py-3">{children}</section>;
};
export default Indent;
