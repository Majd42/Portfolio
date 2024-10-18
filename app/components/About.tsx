"use client";

import React from "react";
import Title from "./Title";
import Service from "./Service";
import { SiNextdotjs, SiNestjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { useAppSelector } from "@/lib/hooks";

const About = () => {
  const personalInfo = [
    { label: "Age", value: "26" },
    { label: "Residence", value: "Dubai, UAE" },
    { label: "Email", value: "majd4.sh@gmail.com" },
    { label: "Phone", value: "+971 55 205 0271" },
  ];

  const services = [
    {
      title: "Front-End ",
      body: "Crafting modern, mobile-responsive websites that enhance your online presence.",
      Icon: SiNextdotjs,
    },
    {
      title: "Back-End ",
      body: "Building robust server-side applications focused on performance, security, and data management.",
      Icon: SiNestjs,
    },
    {
      title: "Mobile Applications ",
      body: "Creating user-friendly mobile applications that provide seamless experiences across devices.",
      Icon: FaReact,
    },
    {
      title: "Database Management",
      body: "Implementing efficient database solutions to ensure data integrity and accessibility.",
      Icon: BsDatabase,
    },
  ];

  return (
    <section id="about" className={`bg-background `}>
      <Title text="About Me" />
      <div className="py-5 px-10">
        <p className="font-bold text-disabled text-md">
          Hello! I&apos;m Majd Shaheen.
        </p>
        <p className="text-disabled text-md">
          I&apos;m a full-stack mobile and web developer from Syria. I
          specialize in creating scalable and maintainable software solutions
          for businesses of all sizes. Let&apos;s connect to discuss how I can
          help bring your next big idea to life!
        </p>

        <div className="my-4">
          {personalInfo.map(({ label, value }, index) => (
            <div key={index} className="flex gap-3">
              <p className="text-white text-md">{label} . . . . </p>
              <p className="text-disabled text-md">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <Title text="My Services" />
      <div className="flex flex-wrap">
        {services.map(({ title, body, Icon }, index) => (
          <Service key={index} title={title} body={body} Icon={Icon} />
        ))}
      </div>
    </section>
  );
};

export default About;
