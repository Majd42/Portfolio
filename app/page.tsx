import Image from "next/image";
import Background from "./components/background/Background";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";





export default function Home() {
  return (
    <>
      <TopBar />
 
      <div className="w-full  max-h-[100vh] overflow-hidden flex justify-center ">
        
          {/* <Navbar /> */}
          <MainSection />
        </div>

      
    </>
  );
}
