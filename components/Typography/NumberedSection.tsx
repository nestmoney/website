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
        <span className="mr-[15px]">{sl}.</span>
        <p>{heading ? toTitleCase(heading) : ""}</p>
      </div>
      <section>{children}</section>
    </div>
  );
};

export default NumberedSection;
