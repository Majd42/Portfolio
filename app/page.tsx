import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import TabsContainer from "./components/TabsContainer";
import LoadScreen from "./components/LoadScreen";

export default function Home() {
  return (
    <>
      <LoadScreen />
      <TopBar />

      <div className="w-full  flex justify-center  ">
        {/* <Navbar /> */}
        <div className="relative w-full flex flex-col justify-center items-center md:flex-row lg:overflow-hidden">
          <main className="  flex relative   md:w-[100%] max-w-[500px] md:max-w-[820px]  lg:max-w-[1300px] md:mt-5  lg:mt-0 lg:items-center ">
            <Navbar />

            <div className=" items-center   flex-col  w-full gap-5 flex  lg:flex-row lg:items-center min-h-[100vh] lg:gap-0  lg:h-[100vh]">
              <Hero />

              <TabsContainer />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
