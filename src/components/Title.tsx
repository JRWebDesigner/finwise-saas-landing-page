'use client'
import { motion, Variants } from "framer-motion"

const titleVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
  };
export default function Title(){
    return(
        <motion.div 
        className="text-2xl md:text-3xl text-center mt-10 w-[80%] md:w-1/2 mx-auto font-bold" 
        variants={titleVariants} 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <h1>
          <strong>N-INNOVATIONS BIOSUPLLY BOL</strong> es una empresa de equipamiento e instalación de equipos y suministros de laboratorio
        </h1>
      </motion.div>
    )
}