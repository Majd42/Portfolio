import React from "react";

interface PropTypes {
  Icon: React.ElementType;
  title: string;
  col?: boolean;
  underline?: boolean;
}

const IconTitle = ({ Icon, title, col, underline }: PropTypes) => {
  return (
    <div
      className={`flex gap-2 relative  ${
        col ? "flex-col justify-center" : "items-center flex-row"
      }`}
    >
      {underline && (
        <div className="h-[0.5px] w-full bg-gradient-to-r from-disabled to-transparent  absolute -bottom-2 left-0 opacity-40" />
      )}
      <div className="w-14 h-14 bg-background border border-primary rounded-full flex justify-center items-center ">
        <Icon className={"text-primary"} size={30} />
      </div>
      <h2 className="font-bold text-md uppercase">{title}</h2>
    </div>
  );
};

export default IconTitle;
