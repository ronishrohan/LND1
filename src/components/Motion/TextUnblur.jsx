import React from "react";
import { motion } from "framer-motion";

const TextUnblur = ({ children }) => {
  return (
    <div className="flex flex-wrap">
      {children
        .toString()
        .split("")
        .map((letter, index) => {
          return (
            <motion.div
                viewport={{ once: true }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              initial={{ filter: "blur(10px)", opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.01}}
              key={index + letter}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.div>
          );
        })}
    </div>
  );
};

export default TextUnblur;
