import React, { useState } from "react";
import { motion } from "framer-motion";
import { easings } from "../../util/easings";

const Services = () => {
  const [hover, setHover] = useState({
    column: [1, 1],
    row: [1, 1],
  });
  return (
    <div className="w-full h-[200vh] flex relative">
      <div className="size-full sticky top-0 h-[100vh] max-h-[100vh] shrink-0 p-4 flex flex-col overflow-hidden">
        <div className="text-7xl font-medium shrink-0">Services we provide</div>
        <div className="size-full mt-4 flex gap-4 max-h-full overflow-hidden">
          <motion.div
            initial={{
              gridTemplateColumns: `${hover.column[0]}fr ${hover.column[1]}fr`,
              gridTemplateRows: `${hover.row[0]}fr ${hover.row[1]}fr`,
            }}
            animate={{
              gridTemplateColumns: `${hover.column[0]}fr ${hover.column[1]}fr`,
              gridTemplateRows: `${hover.row[0]}fr ${hover.row[1]}fr`,
            }}
            transition={{ duration: 0.8, ease: easings.primary }}
            className="size-full grid gap-4 "
          >
            <Service
              title={"UI/UX DESIGN"}
              image={
                "https://i.pinimg.com/736x/0d/eb/60/0deb6068727157d830165ed0eb0a00b5.jpg"
              }
              setHover={setHover}
              set={{ row: [1.5, 1], column: [1.5, 1] }}
            />
            <Service
              title={"WEBSITES"}
              image={
                "https://i.pinimg.com/564x/95/30/5a/95305a85b1be06802f99a98df68c6b08.jpg"
              }
              setHover={setHover}
              set={{ row: [1.5, 1], column: [1, 1.5] }}
            />
            <Service
              title={"PROTOTYPING"}
              image={
                "https://i.pinimg.com/736x/03/45/c4/0345c444fffcc3c2b91b031037ead130.jpg"
              }
              setHover={setHover}
              set={{ row: [1, 1.5], column: [1.5, 1] }}
            />
            <Service
              title={"GRAPHIC DESIGN"}
              image={
                "https://i.pinimg.com/564x/df/e7/67/dfe767e0daf9b3c2bd0c980bd9d642e2.jpg"
              }
              setHover={setHover}
              set={{ row: [1, 1.5], column: [1, 1.5] }}
            />
          </motion.div>
          <div className="w-1/3 h-full shrink-0 rounded-lg border-2 border-black flex items-center justify-center overflow-hidden">
            <div className="h-full  w-full max-h-full max-w-full">
              <video
                src="./test.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Service = ({ setHover, set, title, image }) => {
  const [hovered, setHovered] = useState(false);
  function handleHover(){
    setHover(set)
    setHovered(true)
  }
  function handleLeave(){
    setHover({row:[1,1],column:[1,1]})
    setHovered(false)
  }
  return (
    <motion.div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className=" bg-background relative overflow-hidden  group rounded-lg border-2 border-black  flex flex-col"
    >
      <div className="text-4xl z-20 text-black group-hover:text-white font-medium group-hover:font-black transition-all duration-200 m-4">
        {title}
      </div>
      <div className="size-full flex items-end absolute overflow-hidden opacity-0 group-hover:opacity-100 brightness-[20%] transition-all">
        <img src={image} alt="" className="size-full object-cover" />
      </div>
      
      <div className="text-2xl absolute bottom-0 right-0 text-background font-bold m-4">
        Kala®
      </div>
    </motion.div>
  );
};

export default Services;
