import { ReactNode } from "react";

interface ParaProps {
  children: ReactNode;
  Nobreak?: boolean;
}

const Para = ({ children, Nobreak: addBreak = false }: ParaProps) => {
  return (
    <section className="text-legal">
      {children}
      {/* {!addBreak && <div className="mb-2" />} */}
    </section>
  );
};

export default Para;
