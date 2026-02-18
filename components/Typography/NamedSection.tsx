import { ReactNode } from "react";

const toTitleCase = (text: string) =>
  text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

const NamedSection = ({
  sl,
  children,
  className = "",
  heading,
}: {
  sl: string;
  children: ReactNode;
  heading?: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col heading-text font-semibold ${className} space-y-4`}
    >
      <div className="flex">
        <span className="mr-[15px]">{sl}.</span>
        <p>{heading ? toTitleCase(heading) : ""}</p>
      </div>
      <section>{children}</section>
    </div>
  );
};

export default NamedSection;
