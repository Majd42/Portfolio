import React from "react";
import IconTitle from "./IconTitle";

interface PropTypes {
  Icon: React.ElementType;
  title: string;
  body: string;
}

const Service = ({ Icon, title, body }: PropTypes) => {
  return (
    <div className="relative py-5 px-8 flex flex-col w-full gap-2 md:w-[50%] md:before:absolute md:before:top-0 md:before:left-0 md:before:w-[0.5px] md:before:h-full md:before:bg-gradient-to-b md:before:from-disabled md:before:to-transparent md:before:opacity-40">
      <IconTitle Icon={Icon} title={title} col />
      <p className="body text-disabled">{body}</p>
    </div>
  );
};

export default Service;
