import React from "react";
import Button from "../Button/Button";
import { motion, AnimatePresence } from "framer-motion";
import TextAppear from "../Motion/TextAppear";
import PushPinRounded from "@mui/icons-material/PushPinRounded";
import { PushPinOutlined } from "@mui/icons-material";

const Navbar = ({ hide }) => {
  return (
    <>
      <AnimatePresence>
        {!hide && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="h-fit px-4 w-full flex items-center font-bold text-2xl fixed  top-0 z-20 border-b border-black backdrop-blur-md bg-white/85"
          >
            <div
              style={{ fontVariationSettings: '"wdth" 25' }}
              className="my-4"
            >
              <TextAppear delay={0.4} duration={0.8} >KALA</TextAppear>
            </div>
            <div className="ml-auto flex gap-2 text-sm font-medium h-full py-3">
              <div className="">
                <Button >STUDIO</Button>
              </div>
              <div className="">
                <Button>PROJECTS</Button>
              </div>
              <div className="">
                <Button>SERVICES</Button>
              </div>
              <div className="">
                <Button>ABOUT US</Button>
              </div>
              <div className="">
                <Button className={"border border-transparent hover:border-black/20"} onHover={<div>{"->"}</div>}>
                  CONTACT
                  
                </Button>
              </div>
              <div>
                <Button><PushPinOutlined></PushPinOutlined></Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
