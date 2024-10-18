import React from "react";
import Title from "./Title";
import Skill from "./Skill";
import IconTitle from "./IconTitle";
import { BiCode } from "react-icons/bi";
import { DiHtml5 } from "react-icons/di";
import { FaLanguage } from "react-icons/fa6";

const skillsFrontend = [
  { id: 1, name: "React/Next", percentage: 95 },
  { id: 2, name: "React Native", percentage: 95 },
  { id: 3, name: "Redux", percentage: 90 },
  { id: 4, name: "Tailwind/MUI", percentage: 95 },
];

// { id: 10, name: "Git/GitHub", percentage: 85 },
const skillsBackend = [
  { id: 1, name: "TypeScript/JavaScript", percentage: 90 },
  { id: 2, name: "Express/Nest", percentage: 90 },
  { id: 3, name: "Prisma/Mongoose", percentage: 90 },
  { id: 4, name: "MySQL/MongoDB", percentage: 85 },
];

const Skills = () => {
  return (
    <section className="bg-background ">
      <Title text="Skills" />
      <div className=" py-2">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row  w-full ">
          <div className=" flex flex-col gap-4 md:w-[50%] relative ">
            <div className="absolute w-full h-[0.5px] bg-gradient-to-r from-disabled to-transparent top-[100%] left-0  md:w-[0.5px]  md:h-full md:bg-gradient-to-t md:from-disabled md:to-transparent md:top-0 md:left-[100%] opacity-40" />
            <div className="md:ml-2 ">
              <IconTitle underline Icon={DiHtml5} title="Fron-End" />
            </div>
            <div className=" grid grid-cols-2 gap-y-7 p-0 justify-center items-center w-[100%] md:grid-cols-2 ">
              {skillsFrontend.map((skill) => (
                <React.Fragment key={skill.id}>
                  <Skill circle skill={skill} />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className=" flex flex-col gap-4 md:w-[50%]">
            <IconTitle underline Icon={BiCode} title="Back-end" />
            <div className=" grid grid-cols-1 gap-y-5 p-3 justify-center items-center w-[100%] mt-8">
              {skillsBackend.map((skill) => (
                <React.Fragment key={skill.id}>
                  <Skill skill={skill} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
