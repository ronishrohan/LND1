import React from "react";
import { motion } from "framer-motion";

const TextAppear = ({ delay,duration, leading, children }) => {
  return (
    <div
      style={{ gap: leading / 4 }}
      className="inline-flex flex-wrap text-wrap"
    >
      {children
        .toString()
        .split(" ")
        .map((word, index) => {
          return (
            <div
              key={word + index}
              style={{ height: `${leading - 4}px` }}
              className="inline overflow-hidden relative"
            >
              <motion.div
                style={{
                  fontSize: `${leading}px`,
                  lineHeight: `${leading - 4}px`,
                }}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: delay + (index * 0.05),
                  duration: duration,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {word}
              </motion.div>
            </div>
          );
        })}
    </div>
  );
};

export default TextAppear;
