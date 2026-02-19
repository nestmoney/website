import { ReactNode } from "react";

const toTitleCase = (text: string) =>
  text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

const NumberedSection = ({
  sl,
  children,
  className = "",
  heading,
  id,
}: {
  sl: number;
  children: ReactNode;
  heading?: string;
  className?: string;
  id?: string;
}) => {
  return (
    <div id={id} className={`flex flex-col heading-legal ${className} `}>
      <div className="flex">
        <span className="w-[22px] md:w-[36px] shrink-0 ">{sl}.</span>
        <p className="mb-4 ">{heading ? toTitleCase(heading) : ""}</p>
      </div>
      <section className="ml-[22px] md:ml-[36px]">{children}</section>
    </div>
  );
};

export default NumberedSection;
