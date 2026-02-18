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
    <div className={`flex text-legal ${className}  `}>
      <span className=" w-[30px] shrink-0 ">({sl}) </span>
      <section>{children}</section>
    </div>
  );
};

export default NamedSubSection;
