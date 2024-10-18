"use client";

import React, { useState, useEffect } from "react";
import "./styles.css";

const Background = () => {
  const [animationDurations, setAnimationDurations] = useState(
    Array.from({ length: 17 }, () => Math.random() * 20)
  );
  const [completedCount, setCompletedCount] = useState(0);

  const handleAnimationEnd = (index: number) => {
    setCompletedCount((prev) => prev + 1);

    const newDurations = [...animationDurations];
    newDurations[index] = Math.floor(Math.random() * 20) + 1;
    setAnimationDurations(newDurations);
  };

  useEffect(() => {
    if (completedCount === 17) {
      setCompletedCount(0);
    }
  }, [completedCount]);

  return (
    <div className="screen-container">
      <div className="bubbles-container">
        {animationDurations.map((duration, index) => (
          <div
            key={`${index}-${duration}`}
            onAnimationIteration={() => handleAnimationEnd(index)}
            className={`bubble-container bubble-container${index + 1}`}
          >
            <div
              style={{ animationDuration: `${duration}s` }}
              className={` bubble${index + 1} ${
                index % 2 == 0 ? "bubble" : "bubble-reverse"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;
