import React, { createRef, useEffect, useRef, useState } from "react";
import Home from "./home/Home";
import Navbar from "../components/Navbar/Navbar";
import Preloader from "../components/Preloader/Preloader";

import Lenis from "lenis";
import About from "./about/About";
import Work from "./work/Work";


const Root = () => {
  const [loaded, setLoaded] = useState(false);
  const scrollDiv = useRef();
  const [scrollDirection, setScrollDirection] = useState(0);
  useEffect(() => {
    if (loaded === true) {
      
      const lenis = new Lenis({
        duration: 3,
        lerp: 0.01,
        infinite: false,
      });
      function raf(time) {
        lenis.raf(time);
        if (scrollDirection != lenis.direction) {
          setScrollDirection(lenis.direction);
        }

        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }, [loaded]);



  return (
    <>
      <Preloader thisHasLoaded={() => setLoaded(true)}></Preloader>
      {loaded && (
        <div
          ref={scrollDiv}
          className="font-roboto h-vh pt-[70px] flex flex-col [font-variation-settings:'wdth'_30,'grad'_200]"
        >
          <Navbar hide={scrollDirection == 1}></Navbar>
          {/* <div className="h-[500vh]" >
            <div className="h-full "></div>
          </div> */}
          <Home></Home>
          <About></About>
          <Work></Work>
        </div>
      )}
      
    </>
  );
};

export default Root;
