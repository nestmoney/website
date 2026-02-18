import { ReactNode } from "react";

const NamedSubSection = ({
  sl,
  children,
  className = "",
}: {
  sl: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex text-legal ${className} my-4 `}>
      <span className="mr-3">({sl}) </span>
      <section>{children}</section>
    </div>
  );
};

export default NamedSubSection;
