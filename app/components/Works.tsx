import React from "react";
import Title from "./Title";
import Project from "./Project";

const works = [
  {
    id: 1,
    image: "/images/Soukare.jpg",
    title: "Soukare",
    tech: "React Native",
    link: "https://apps.apple.com/us/app/soukare-pharmacy/id1598887088",
  },
  {
    id: 2,
    image: "/images/Lifesmileweb.jpg",
    title: "Life smile",
    tech: "Next.js",
    link: "https://lifesmile.ae",
  },
  {
    id: 6,
    image: "/images/Marketmedia.jpg",
    title: "Market Media",
    tech: "React.js",
    link: "https://marketedia.net/",
  },
  {
    id: 4,
    image: "/images/Sarayu.jpg",
    title: "Sarayu",
    tech: "React.js",
    link: "https://sarayuconsulting.com/",
  },
  {
    id: 5,
    image: "/images/Dashboard1.jpg",
    title: "Dashboard CMS",
    tech: "Next.js",
    link: "https://login.lifesmile.ae",
  },
  {
    id: 3,
    image: "/images/Lifesmileapp.jpg",
    title: "Life smile App",
    tech: "React Native",
    link: "https://play.google.com/store/apps/details?id=com.lifesmile.lifesmileapp",
  },
];

// Split works into two arrays

const Works = () => {
  const worksArray1 = works.slice(0, works.length / 2);
  const worksArray2 = works.slice(works.length / 2);
  return (
    <section id="works" className="bg-background">
      <Title text="works" />
      <div className=" flex flex-col md:flex-row gap-2 p-4 relative">
        <div className="absolute left-[50%] h-full w-[0.5px] opacity-40 top-0 bg-gradient-to-b from-disabled to-transparent" />
        <div className="flex flex-col gap-4 w-[100%] md:w-[50%] ">
          {worksArray1.map((work) => (
            <Project key={work.id} project={work} />
          ))}
        </div>
        <div className="flex flex-col gap-4 w-[100%] md:w-[50%]">
          {worksArray2.map((work) => (
            <Project key={work.id} project={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
