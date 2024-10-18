"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageSwiper = () => {
  const images = [
    "/images/back2.jpg",
    "/images/back22.jpg",
    "/images/sunset1.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          className={`absolute w-full h-full object-cover transition-all duration-[2000ms] ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-125"
          }`}
          src={src}
          alt={""}
          fill
          sizes="100vw"
        />
      ))}
    </div>
  );
};

export default ImageSwiper;
