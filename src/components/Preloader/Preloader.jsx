import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const mainVariant = {
  opened: {
    height: "100%",
  },
  closed: {
    height: "0%",
  },
};

const Preloader = ({ thisHasLoaded }) => {
  const [loaded, setLoaded] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    function updateLoader() {
      const delay = Math.random() * 200 + 100;
      if (loaded < 100) {
        setLoaded((prev) => {
          const rand = Math.round(Math.random() * 10);
          if (prev + rand < 100) {
            return prev + rand;
          } else {
            setHasLoaded(true);
            setTimeout(() => {
              thisHasLoaded();
            }, 1200);
            return 100;
          }
        });
        setTimeout(updateLoader, delay);
      }
    }

    updateLoader();
  }, []);

  return (
    <motion.div
      variants={mainVariant}
      initial={{ y: "0%", height: "100%" }}
      animate={hasLoaded ? "closed" : "opened"}
      transition={{
        duration: 0.7,
        delay: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="bg-black overflow-hidden fixed w-full z-50 flex items-center justify-center text-white font-hauora"
    >
      <div className="absolute size-full  flex items-center justify-center ">
        <svg height="100%" width="100%">
          <motion.circle
            initial={{ pathLength: "0", strokeWidth: 1 }}
            animate={{ pathLength: loaded/100, strokeWidth: loaded/50 }}
            cx="50%"
            cy="110%"
            r="50%"
            rotate={-90}
            
            stroke="rgba(255,255,255,0.5)"
            
            fill="none"
          ></motion.circle>
        </svg>
      </div>
      <motion.div
        style={{ fontVariationSettings: '"wdth" 25' }}
        initial={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)" }}
        animate={{
          clipPath: hasLoaded
            ? "polygon(100% 0% , 100% 100%, 100% 100%, 100% 0%)"
            : "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute text-2xl font-bold"
      >
        {loaded}%
      </motion.div>
      <motion.div
        style={{ fontVariationSettings: '"wdth" 25' }}
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        animate={{
          clipPath: hasLoaded
            ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            : "polygon(0 0, 0 0, 0 100%, 0 100%)",
          scale: hasLoaded ? 1.2 : 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
          scale: {
            delay: 0.7,
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
        className="text-5xl font-bold"
      >
        Kala
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
