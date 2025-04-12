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
        className="relative z-20 text-4xl md:text-5xl text-center w-[80%] text-white md:w-1/2 mx-auto font-bold" 
        variants={titleVariants} 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <h1>
          <strong>n-innovations biosupply bol. ltda.</strong> importadora de insumos de laboratorio en general
        </h1>
      </motion.div>
    )
}