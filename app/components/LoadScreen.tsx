"use client";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../public/animation.json";

const LoadScreen = () => {
  const [showLoadScreen, setShowLoadScreen] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoadScreen(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`transition-all duration-500 absolute top-0 left-0 right-0 bottom-0 bg-[#161616] flex justify-center items-center z-50  ${
        !showLoadScreen && "opacity-0 pointer-events-none"
      }`}
    >
      <Lottie options={defaultOptions} height={120} width={120} />
    </div>
  );
};

export default LoadScreen;
