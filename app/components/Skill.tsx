import React from "react";
import PercentageCircle from "./PercentageCircle";
import ProgressBar from "./ProgressBar";

interface PropTypes {
  skill: {
    id: number;
    name: string;
    percentage: number;
  };
  circle?: boolean;
}

const Skill = ({ skill, circle }: PropTypes) => {
  return (
    <div
      className={` flex flex-col justify-center items-center gap-2 ${
        circle ? "50%" : "100%"
      } `}
    >
      {circle ? (
        <PercentageCircle percentage={skill.percentage} />
      ) : (
        <ProgressBar percentage={skill.percentage} />
      )}

      <h5 className="text-center text-white">{skill.name}</h5>
    </div>
  );
};

export default Skill;
