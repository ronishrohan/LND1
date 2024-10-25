import React, { useRef, useState } from 'react'
import { motion, MotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'

const Footer = () => {
    const footer = useRef()
    const scroll = useScroll({ target: footer, offset: ["0 1", "0.9 1"] })
    const smoothedScroll = useSpring(scroll.scrollYProgress, { stiffness: 400, damping: 30 })
    const scrollY = useTransform(smoothedScroll, [0, 1], ["-100", "0"])
    const [y, setY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setY(latest);
    })
  return (
    <div ref={footer} className=' h-[100vh] shrink-0 overflow-hidden bg-black  flex flex-col'>
        <div className=' text-9xl font-black text-primary flex' >
            {"KALA STUDIOS®".toString().split("").map((letter, index, str) => {
                return (
                    <motion.div
                        style={{y: `${y*8/(str.length - index + 5)}%` }}
                        transition={{ duration: 0.7, delay: 0, ease: "circOut" }}
                    >
                        {letter == " " ? "\u00A0" : letter}
                    </motion.div>
                )
            })}
        </div>
    </div>
  )
}

export default Footer