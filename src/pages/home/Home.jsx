import React from "react";
import { motion } from "framer-motion";
import TextAppear from "../../components/Motion/TextAppear";
import { easings } from "../../util/easings";

import Button from "../../components/Button/Button";

const arrow = (
  <>
    <>
      {/*?xml version="1.0" encoding="UTF-8"?*/}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 6L6 19M6 19L6 6.52M6 19H18.48"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  </>
);

const Home = () => {
  return (
    <motion.div
      initial={{ y: "20%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.7, delay: 0, ease: [0.76, 0, 0.24, 1] }}
      className="relative p-4 font-bold flex flex-col  size-full h-fit shrink-0 "
    >
      <div className="absolute top-0 right-0 m-4 text-xl font-bold" >23:38:02 IST, BENGALURU</div>
      <div className="h-[calc(100vh-100px)] flex gap-4">
        <div className="w-2/3 flex flex-col grow-0 shrink-0 overflow-hidden">
          <TextAppear delay={0} duration={1} leading={100}>
            WELCOME TO KALA®
          </TextAppear>
          <TextAppear delay={0} duration={1} leading={100}>
            WE ARE A INDEPENDENT STUDIO
          </TextAppear>

          <motion.div
            initial={{ y: "20%", scaleX: 0.86, scaleY: 0.5 }}
            animate={{ y: "0%", scaleX: 1, scaleY: 1 }}
            transition={{ ease: easings.primary, duration: 1 }}
            className="size-full h-96 mt-auto border-2 border-black bg-black rounded-lg overflow-hidden flex items-start justify-center"
          >
            <video
              src="./test.mp4"
              className="scale-105 rounded-lg"
              loop
              autoPlay
              muted
            ></video>
          </motion.div>
        </div>
        <div className="flex-col flex justify-end size-full">
          <div className="flex justify-end flex-col h-96 mb-[15%]">
            {/* <motion.div
              initial={{ x: "20%", scaleX: 0.86, scaleY: 0.5 }}
              animate={{ x: "0%", scaleX: 1, scaleY: 1 }}
              transition={{ ease: easings.primary, duration: 0.7 }}
              className="rounded-lg border-2 justify-end border-black overflow-hidden"
            >
              <video
                src="./test.mp4"
                className="scale-105 rounded-lg"
                loop
                autoPlay
                muted
              ></video>
            </motion.div> */}
            <div className="flex flex-col mt-4 items-end shrink-0">
              <TextAppear delay={0.8} duration={1.2} leading={40}>
                WE KNOW
              </TextAppear>
              <TextAppear delay={0.8} duration={1.2} leading={40}>
                WHAT WORKS
              </TextAppear>
            </div>
            <div className="rounded-lg mt-4">
              <Button className="border-2  bg-primary text-4xl border-black">
                <div className="flex justify-between items-center">
                  <span>KNOW MORE</span>
                  <span className="size-8">{arrow}</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="shrink-0 my-2 text-7xl font-bold">TYLER, THE CREATOR</div> */}
    </motion.div>
  );
};

export default Home;
