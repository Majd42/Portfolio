"use client";

import React, { useEffect, useRef, useState } from "react";

const Mouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    console.log(mousePosition);
    setMousePosition({ x: event.clientX, y: event.clientY });
    if (ref && ref.current) {
      ref.current.style.transform = `translate(${event.clientX - 15}px, ${
        event.clientY - 15
      }px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      ref={ref}
      className="bg-primary opacity-30 z-50"
      style={{
        position: "absolute",
        // left: `${mousePosition.x - 15}px`,
        // top: `${mousePosition.y - 15}px`,
        top: 0,
        left: 0,

        pointerEvents: "none",
        transition: "transform 0.5s ease-out",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
      }}
    />
  );
};

export default Mouse;
