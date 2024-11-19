"use client";
import Image from "next/image";
import React from "react";
import AppTypedText from "./AppTypedText";
import { BiDownload, BiMessage } from "react-icons/bi";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import ImageSwiper from "./ImageSwiper";
import { useAppDispatch, useWindowWidth } from "@/lib/hooks";
import { finishNavigation, navigate } from "@/lib/features/navigationSlice";
import { useRouter } from "next/navigation";

const Hero = () => {
  const width = useWindowWidth();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleContactMe = () => {
    dispatch(navigate("Contact"));
    dispatch(finishNavigation());
    if (width < 1020) {
      router.push("/#contact");
    }
  };
  return (
    <div className=" md:mt-0 relative bg-background rounded-md h-[780px] lg:h-[90vh] lg:max-h-[650px] w-full lg:scale-[102%] lg:w-[75%]">
      <div className="w-full h-full absolute bg-primary -top-3 right-3 -z-10 opacity-20 rounded-md" />
      <div className="flex h-full flex-col relative bg-background">
        <div className="relative h-[55%] ">
          <div
            className="bg-background absolute w-full h-[200px] bottom-[-100px] z-10 "
            style={{ clipPath: "ellipse(50% 19% at 50% 50%)" }}
          />
          <ImageSwiper />
        </div>

        <div className="z-10 flex flex-col items-center h-[45%] relative">
          <div className="w-[130px] h-[130px]  rounded-full absolute">
            <div className="absolute top-[-79px] -left-2 w-[130px] h-[130px] bg-gradient-to-bl from-primary to-transparent rounded-full -z-10" />
            <Image
              className="bg-primary mt-[-90px] w-[130px] h-[130px] rounded-full border-[3px] border-background z-10"
              src="/images/profi.png"
              width={1000}
              height={1000}
              alt="Nature"
            />
          </div>

          <h4 className="mt-16 mb-1 font-bold text-4xl  ">Majd Shaheen</h4>
          <div className="">
            <AppTypedText fontSize="15px" color="#F6B846" />
          </div>

          <div className="flex flex-1 justify-center mt-10  gap-3">
            <Link
              href={"https://www.linkedin.com/in/majd-shaheen/"}
              target="__blank"
            >
              <BsLinkedin color="#ffffffe6" size={15} />
            </Link>
            <Link
              href={"https://github.com/Majd42?tab=repositories"}
              target="__blank"
            >
              <BsGithub color="#ffffffe6" size={15} />
            </Link>
            <Link href={"https://wa.me/971552050271"} target="__blank">
              <BsWhatsapp color="#ffffffe6" size={15} />
            </Link>
          </div>

          <div className="flex w-full relative border-t-[0.1px] border-disabled border-opacity-40">
            <Link
              href={"/Majd-Shaheen-CV.pdf"}
              download
              className="text-center w-[50%] p-3 border-r-[0.5px] border-disabled border-opacity-40 font-bold flex justify-center items-center gap-3 "
            >
              DOWNLOAD CV <BiDownload />
            </Link>
            <button
              onClick={handleContactMe}
              className="text-center w-[50%] p-3 flex justify-center items-center gap-3 font-bold"
            >
              CONTACT ME <BiMessage />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
