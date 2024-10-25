import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";

const About = () => {
  const bodyRef = useRef();
  const scroll = useScroll({ target: bodyRef, offset: ["0.2 1", "0.3 1"] });
  const scroll2 = useScroll({ target: bodyRef, offset: ["0.1 1", "1 1"] });

  useMotionValueEvent(scroll2.scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const padding = useSpring(
    useTransform(scroll.scrollYProgress, [0, 1], [18, 0]),
    { stiffness: 400, damping: 30 }
  );
  const borderRadius = useTransform(scroll.scrollYProgress, [0, 1], [12, 0]);
  const smoothedTranslate = useSpring(scroll2.scrollYProgress, {
    stiffness: 400,
    damping: 30,
  });
  const translateX = useTransform(smoothedTranslate, [0, 1], ["100%", "-100%"]);

  return (
    <div ref={bodyRef} className="size-full h-[400vh] flex flex-col">
      <motion.div
        style={{ padding: padding }}
        className="sticky top-0 w-[100vw] h-[100vh]  "
      >
        <motion.div
          style={{ borderRadius: borderRadius }}
          className="relative overflow-hidden size-full flex items-center justify-center"
        >
          <motion.div
            style={{ translateX: translateX }}
            className="text-[20vh]  font-black text-white absolute z-40 flex-nowrap flex justify-start items-start"
          >
            {"WE HELP BRANDS BUILD BEAUTIFUL WEBSITES"
              .split("")
              .map((letter, index) => (
                <motion.div
                  initial={{ opacity: 0, y: "0%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  key={index}
                >
                  {letter == " " ? "\u00A0" : letter}
                </motion.div>
              ))}
          </motion.div>
          <video
            src="./test.mp4"
            loop
            autoPlay
            muted
            className="scale-105 w-full object-cover brightness-50"
          ></video>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
