import React, { useEffect, useRef, useState } from "react";

import TextUnblur from "../../components/Motion/TextUnblur";
import {
  AnimatePresence,
  motion,
  useScroll,
  
} from "framer-motion";


const Work = () => {
  const pageRef = useRef();
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["0 0", "1 1"],
  });

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      ref={pageRef}
      className="w-full h-[200vh] relative "
    >
      <MiniCarousel hovered={isHovered}></MiniCarousel>
      <div className="flex flex-col h-[100vh] w-full p-4 sticky top-0">
        {" "}
        <div className=" whitespace-nowrap text-9xl font-roboto font-medium">
          <TextUnblur>SOME OF OUR WORKS</TextUnblur>
        </div>
        <ProjectList setHovered={setIsHovered}>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </ProjectList>
      </div>
    </div>
  );
};

const MiniCarousel = ({hovered}) => {
  const [mouse, setMouse] = useState([0, 0]);

  useEffect(() => {
    function onMouseMove(e) {
      setMouse([e.clientX, e.clientY]);
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  });
  return (
    <motion.div
      initial={{ y: 0, x: 0 }}
      animate={{x: mouse[0]-160, y: mouse[1]-90, scale: hovered ? 1 : 0}}
      transition={{duration: 0.3, ease: "circOut"}}
      className="fixed top-0 left-0 w-[320px] h-[180px] pointer-events-none z-50 bg-black rounded-lg"
    ></motion.div>
  );
};

const ProjectList = ({ setHovered,children }) => {
  return <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="size-full flex flex-col ">{children}</div>;
};

const Project = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full h-full border-b-2 border-black flex  font-roboto font-semibold text-8xl relative"
    >
      <div className="p-2">INTEL</div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{
              height: "0%",
              borderBottomLeftRadius: "100%",
              borderBottomRightRadius: "100%",
            }}
            animate={{
              height: "100%",
              borderBottomLeftRadius: "0%",
              borderBottomRightRadius: "0%",
            }}
            exit={{
              height: "0%",
              borderBottomLeftRadius: "100%",
              borderBottomRightRadius: "100%",
            }}
            transition={{ duration: 0.2, ease: "circOut" }}
            className="size-full bg-black z-20 text-white overflow-hidden flex items-center absolute"
          >
            <div className="m-2">INTEL</div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Work;
