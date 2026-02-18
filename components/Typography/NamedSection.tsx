import { ReactNode } from "react";

const toTitleCase = (text: string) =>
  text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

const NamedSection = ({
  children,
  className = "",
  heading,
}: {
  children: ReactNode;
  heading?: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col heading-text font-semibold ${className} gap-4 `}
    >
      <div className="flex ">
        {/* <span className=" w-[30px] shrink-0 "></span> */}
        <p>{heading ? toTitleCase(heading) : ""}</p>
      </div>
      <section>{children}</section>
    </div>
  );
};

export default NamedSection;
