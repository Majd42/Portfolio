import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaAnkhSolid, LiaLinkSolid } from "react-icons/lia";

interface Proptypes {
  project: {
    id: number;
    image: string;
    title: string;
    tech: string;
    link: string;
  };
}

const Project = ({ project }: Proptypes) => {
  return (
    <Link href={project.link} target="__blank">
      <div key={project.id} className="relative overflow-hidden p-3 md:p-3">
        <div className="w-full flex flex-col gap-3 relative">
          <div className="overflow-hidden relative group ">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-primary to-transparent transition-transform duration-700 transform  -translate-y-full z-10 group-hover:translate-y-0" />
            <div className="absolute top-0 left-0 right-0 bottom-0  opacity-0 transition-all duration-700 text-white flex justify-center items-center group-hover:opacity-100 z-10">
              <LiaLinkSolid size={30} color="white" />
            </div>
            <Image
              width={500}
              height={500}
              src={project.image}
              alt=""
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-center text-md text-white font-bold uppercase">
              {project.title}
            </h3>
            <h5 className="text-center text-sm text-disabled">
              {project.tech}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
