import React from "react";

interface PropTypes {
  text: string;
}

const Title = ({ text }: PropTypes) => {
  return (
    <div className="p-5 relative">
      <div className="absolute left-0 right-0 bottom-0 h-[0.5px] bg-gradient-to-r from-disabled to-transparent opacity-40" />
      <h3 className="text-white text-xl font-bold relative">
        <div className="absolute top-1 -left-2 opacity-40 w-8 h-8 rounded-full bg-gradient-to-bl from-primary to-transparent" />
        <span className="text-primary">{text.charAt(0)}</span>
        {text.slice(1)}
      </h3>
    </div>
  );
};

export default Title;
