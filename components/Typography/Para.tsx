import { ReactNode } from "react";

interface ParaProps {
  children: ReactNode;
  Nobreak?: boolean;
  className?: string; // ✅ add this
}

const Para = ({
  children,
  Nobreak: addBreak = false,
  className = "", // ✅ default
}: ParaProps) => {
  return (
    <section className={`text-legal ${className}`}>
      {children}
      {/* {!addBreak && <div className="mb-2" />} */}
    </section>
  );
};

export default Para;

