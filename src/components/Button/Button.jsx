import React, { useState } from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  default: {
    height: 0,
    width: 0,
    opacity: 1,
    y: "20px",
    borderRadius: "8px"
  },
  hovered: {
    height: "100%",
    width: "100%",
    opacity: 1,
    y: "0px",
    borderRadius: "6px"
  },
};

const Button = ({onHover,className,children}) => {
  const [hovered, setHovered] = useState();
  return (
    <motion.button

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`size-full relative group: flex items-center  transition-colors  justify-center overflow-hidden p-2 rounded-lg text-black ${className}`}
    >
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: hovered ? "-60%" : "0%" }}
        transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
        className="stroke-black"
      >
        {children}
        
      </motion.div>
      <motion.div
        variants={buttonVariants}
        initial={"default"}
        animate={hovered ? "hovered" : "default"}
        transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute size-full scale-105 bg-black !fill-white !stroke-white text-white flex items-center justify-center rounded-lg z-20 overflow-hidden text-nowrap"
      >
        {children}
        
      </motion.div>
    </motion.button>
  );
};

export default Button;
