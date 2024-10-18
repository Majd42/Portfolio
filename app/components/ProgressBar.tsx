// ProgressBar.js
import React from "react";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className="relative w-full bg-disabled  h-1">
      <div
        className="absolute bg-primary h-full rounded-full transition-width"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
