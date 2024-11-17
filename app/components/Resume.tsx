"use client";

import React from "react";

import Timeline from "./Timeline";
import Title from "./Title";
import { MdWork } from "react-icons/md";

import { FaGraduationCap } from "react-icons/fa6";
import Skills from "./Skills";

const WorkExp = [
  {
    id: 1,
    title: "Full-stack developer",
    body: "Building frontends & backends & connecting them together to build full online experience",
    place: "Lifesmile",
    period: "Nov 2023 - present",
  },
  {
    id: 2,
    title: "Full-stack developer",
    body: "Responsible for full development aspect for multiple mobile and web applications ",
    place: "Aratech",
    period: "Oct 2021 - Dec 2023",
  },
  {
    id: 3,
    title: "Font-end Intern",
    body: "Hands on real world projects & started working on small tasks",
    place: "Codlex",
    period: "Jul 2020 - Oct 2020",
  },
];
const education = [
  {
    id: 1,
    title: "Tishreen University",
    body: "Gained a bachelor's degree in Informatices Engineering/Computer Science",
    place: "Latakia",
    period: "2018 - 2023",
  },
  {
    id: 2,
    title: "Web Development Course",
    body: "Learned all web development basics & essensials",
    place: "FreeCodeCamp",
    period: "Jul 2020 - Oct 2020",
  },
  {
    id: 3,
    title: "Latakia School",
    body: "Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript",
    place: "Latakia",
    period: "Jul 2005 - Oct 2018",
  },
];

const Resume = () => {
  return (
    <section id="resume" className="bg-background p-3">
      <Title text="My Resume" />
      <div className="flex flex-col md:flex-row">
        <Timeline Icon={MdWork} title={"Experence"} events={WorkExp} />
        <Timeline
          Icon={FaGraduationCap}
          title={"Education"}
          events={education}
        />
      </div>
      <div className="mt-10">
        <Skills />
      </div>
    </section>
  );
};

export default Resume;
