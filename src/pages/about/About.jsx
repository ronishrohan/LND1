import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import TextUnblur from "../../components/Motion/TextUnblur";
import { easings } from "../../util/easings";

const About = () => {
  const pageRef = useRef(null);
  const { scrollYProgress, scrollXProgress } = useScroll({
    layoutEffect: false,
    target: pageRef,
    offset: ["0 1", "1 1"],
  });

  const smoothedScroll = useSpring(scrollYProgress, { damping: 20 });

  useEffect(() => {
    console.log(scrollYProgress.current);
    console.log(scrollXProgress.current);
  }, [scrollYProgress.current, scrollXProgress.current]);

  const heroY = useTransform(smoothedScroll, [0, 1], ["-20%", "-50%"]);
  const heroX = useTransform(smoothedScroll, [0, 1], ["0%", "50%"]);
  const heroWidth = useTransform(smoothedScroll, [0, 1], ["30vw", "80vw"]);
  const heroRight = useTransform(smoothedScroll, [0, 1], ["0%", "50%"]);
  const heroTop = useTransform(smoothedScroll, [0, 1], ["0%", "40%"]);
  return (
    <motion.div
      
      ref={pageRef}
      className="h-[100vh]  flex flex-col p-4 relative"
    >
      <motion.div
        style={{
          y: heroY,
          width: heroWidth,
          right: heroRight,
          x: heroX,
          top: heroTop,
        }}
        initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: easings.primary, delay: 1 }}
        className="border-2 border-black absolute h-[25vw] overflow-hidden  rounded-full top-0 right-0 m-4"
      >
        <video
          loop
          autoPlay
          muted
          src="./test.mp4"
          className="w-full object-cover"
        ></video>
      </motion.div>
      <div className='absolute bottom-0 font-roboto [font-variation-settings:"wdth"_25] text-6xl mb-16 mx-10 font-bold'>
        <TextUnblur>We are a design studio based in India.</TextUnblur>
        <TextUnblur>We help you bring your vision to life.</TextUnblur>
      </div>
    </motion.div>
  );
};

export default About;
