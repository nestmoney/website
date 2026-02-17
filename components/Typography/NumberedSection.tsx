import { ReactNode } from "react";

const NumberedSection = ({
  sl,
  children,
  className = "",
}: {
  sl: number;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex heading-legal ${className} my-4 `}>
      <span className="mr-[15px]">{sl}.</span>
      <section>{children}</section>
    </div>
  );
};

export default NumberedSection;
