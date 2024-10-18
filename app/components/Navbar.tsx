"use client";
import { finishNavigation, navigate } from "@/lib/features/navigationSlice";
import { useAppDispatch, useAppSelector, useWindowWidth } from "@/lib/hooks";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiMessage } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { FaNewspaper } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { NavItemType, Pages } from "../types";

const navItems: NavItemType[] = [
  { name: "About", icon: <IoPersonOutline size={24} />, href: "/#about" },
  { name: "Resume", icon: <FaNewspaper size={24} />, href: "/#resume" },
  { name: "Works", icon: <CgWorkAlt size={24} />, href: "/#works" },
  { name: "Contact", icon: <BiMessage size={24} />, href: "/#contact" },
];

interface NavItemProps {
  name: string;
  icon: JSX.Element;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  href: string;
  loading: boolean;
  onNavigate: (name: string, href: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  name,
  icon,
  href,
  loading,
  onNavigate,
}) => {
  const useSelector = useAppSelector;

  const currentPage = useSelector((state) => state.navigation.currentPage);
  return (
    <button
      className={`flex justify-center items-center w-[25%] border-r-[0.5px] border-disabled font-bold md:w-full md:border-r-0 md:border-b-[0.5px] border-opacity-40 md:h-[25%] hover:text-primary last:border-0 ${
        currentPage === name ? "text-primary" : ""
      }`}
      onClick={() => !loading && onNavigate(name, href)}
      disabled={loading} // Disable button if loading
    >
      <div className="w-full flex flex-col justify-center items-center">
        {icon}
        <h4 className="text-xs">{name.toUpperCase()}</h4>
      </div>
    </button>
  );
};

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("About");
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const width = useWindowWidth();

  //   const router = useRouter();
  //   const width = useWindowWidth();

  const handleNavigate = (name: string, href: string) => {
    setLoading(true);
    dispatch(navigate(name as Pages));
    dispatch(finishNavigation());

    if (width < 1020) {
      router.push(href);
      setTimeout(() => {
        // const element = document.querySelector(href.slice(2));
        // if (element) {
        //   window.scrollTo({
        //     top: element.getBoundingClientRect().top + window.scrollY - 226,
        //     behavior: "smooth",
        //   });
        // }
        setLoading(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <nav className="flex md:min-w-[140px] relative">
      <div className="rounded-sm z-20 bg-background fixed top-[56px] left-[-50%] translate-x-[50%] w-full flex py-4 before:bg-disabled before:w-[100%] before:h-[0.5px] before:absolute before:top-0 before:left-0 before:opacity-20 md:sticky md:top-10 md:left-[-80px] md:flex-col md:w-[80px] md:h-[380px] md:px-2 ">
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            href={item.href}
            loading={loading}
            onNavigate={handleNavigate}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
