import React, { useEffect, useRef, useState } from "react";

import TextUnblur from "../../components/Motion/TextUnblur";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { easings } from "../../util/easings";

const projects = [
  {
    title: "INTEL",
    image:
      "https://i.pinimg.com/control/564x/15/ef/e3/15efe34cf345ba43edfb0a4ce550a8ef.jpg",
  },
  {
    title: "PETER CAT RECORDING",
    image:
      "https://i.pinimg.com/control/564x/8d/33/ef/8d33ef69480622a04312cf0286bdead1.jpg",
  },
  {
    title: "CHAARDIWAARI",
    image:
      "https://i.pinimg.com/736x/06/fc/48/06fc482b5ae9c0576b7a28f9645614f1.jpg",
  },
  {
    title: "DHANJI",
    image:
      "https://i.pinimg.com/736x/75/97/59/759759ad7dbb1692f67115300e043705.jpg",
  },
  {
    title: "FAROOKH",
    image:
      "https://i.pinimg.com/736x/69/8e/1b/698e1b902432df8ec3b346486b7af1ef.jpg",
  },
];

const Work = () => {
  const pageRef = useRef();
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["0 0", "1 1"],
  });

  const [current, setCurrent] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div ref={pageRef} className="w-full h-[200vh] relative ">
      <MiniCarousel currentIndex={current} hovered={isHovered}></MiniCarousel>
      <div className="flex flex-col h-[100vh] w-full p-4 sticky top-0">
        {" "}
        <div className=" whitespace-nowrap text-9xl font-roboto font-medium">
          <TextUnblur>SOME OF OUR WORKS</TextUnblur>
        </div>
        <ProjectList setHovered={setIsHovered}>
          {projects.map((project, index) => {
            return (
              <Project
                project={project}
                setProject={() => setCurrent(index)}
                key={index + project.title}
              ></Project>
            );
          })}
        </ProjectList>
      </div>
    </div>
  );
};

const MiniCarousel = ({ hovered, currentIndex }) => {
  const [mouse, setMouse] = useState([0, 0]);
  const [rot, setRot] = useState(0)

  useEffect(() => {
    let lastPos = [0, 0];
    function onMouseMove(e) {
      console.log(mouse, [e.clientX, e.clientY]);

      

      setMouse(prev => {
        const y = e.clientY - window.innerHeight*1.5;
      const x = e.clientX - window.innerWidth/2;

      let angleRad = Math.atan2(y,x);
        
      console.log(angleRad);
      setRot(angleRad * 180 / Math.PI)
      return [e.clientX, e.clientY];
      });
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  });
  return (
    <motion.div
      initial={{ y: 0, x: 0 }}
      animate={{ x: mouse[0] - 160, y: mouse[1] - 90, scale: hovered ? 1 : 0, rotate: (rot + 90)/5 }}
      transition={{ duration: 0.3, ease: "circOut", rotate: {
        duration: 2,
        ease: "circOut"
      }, scale: {
        duration: 0.2,
        ease: "circOut"
      } }}
      className="fixed top-0 left-0 border-4 border-black w-[320px] h-[180px] overflow-hidden pointer-events-none z-50  rounded-lg flex flex-col items-center justify-start"
    >
      <motion.div initial={{y: 0}} animate={{y: `${-180 * currentIndex}px`}} transition={{duration: 0.3, ease:easings.primary}} className="flex flex-col ">
        {projects.map((project, index) => {
          return (
            <div className="w-[320px] h-[180px] overflow-hidden shrink-0">
              <img src={project.image} alt="" />
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const ProjectList = ({ setHovered, children }) => {
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="size-full flex flex-col "
    >
      {children}
    </div>
  );
};

const Project = ({ project, setProject }) => {
  const [hovered, setHovered] = useState(false);

  function handleHovered() {
    setHovered(true);
    setProject();
  }
  return (
    <button
      onMouseEnter={handleHovered}
      onMouseLeave={() => setHovered(false)}
      className="w-full h-full border-b-2 border-black flex  font-roboto font-semibold text-8xl relative"
    >
      <motion.div  className="p-2">{project.title}</motion.div>
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
            className="size-full bg-black z-20 text-white overflow-hidden flex absolute"
          >
            <div className="m-2">{project.title}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Work;
