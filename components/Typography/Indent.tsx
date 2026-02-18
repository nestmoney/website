import { ReactNode } from "react";

const Indent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <section className={` ${className}`}>{children}</section>;
};
export default Indent;
