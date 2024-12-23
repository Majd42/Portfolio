import Image from "next/image";
import React from "react";

import AppTypedText from "./AppTypedText";

const TopBar = () => {
  return (
    <div className="flex fixed w-full  py-2 px-4 justify-between bg-background z-20 md:hidden ">
      <div className="flex flex-row gap-3 ">
        <div className=" relative rounded-full w-[40px] h-[40px] overflow-hidden bg-primary ">
          <Image
            className="h-full"
            objectFit="cover"
            src={"/images/profi.png"}
            width={100}
            height={100}
            alt="Profile Image"
          />
        </div>
        <div className="-mt-1">
          <h3 className="text-white -mb-2 text-md">Majd Shaheen</h3>
          <AppTypedText fontSize="12px" color="#F6B846" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
