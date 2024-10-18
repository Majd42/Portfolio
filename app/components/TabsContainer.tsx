"use client";

import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import About from "./About";
import Resume from "./Resume";
import Works from "./Works";
import Contact from "./Contact";
import { useAppSelector, useWindowWidth } from "@/lib/hooks";

const TabsContainer = () => {
  const useSelector = useAppSelector;
  const currentPage = useSelector((state) => state.navigation.currentPage);

  const width = useWindowWidth();

  if (width > 1020) {
    return (
      <div className="w-full">
        <TransitionGroup>
          <CSSTransition
            key={currentPage}
            timeout={1500}
            classNames="fade-slide"
          >
            <div className="w-full lg:overflow-scroll lg:h-[650px] lg:ml-2 pb-5 flex flex-col gap-5">
              {currentPage === "About" && <About />}
              {currentPage === "Resume" && <Resume />}
              {currentPage === "Works" && <Works />}
              {currentPage === "Contact" && <Contact />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }

  return (
    <div className="w-full lg:overflow-scroll lg:h-[650px] lg:ml-2 pb-5 flex flex-col gap-5">
      <About />
      <Resume />
      <Works />
      <Contact />
    </div>
  );
};

export default TabsContainer;
