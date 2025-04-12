'use client'
import React from 'react';
import {motion} from 'framer-motion'

export const subtitleAn = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1.2,
        }
    },
}

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center px-5 h-[66vh] md:h-[70vh] bg-[url('/images/banner.webp')] bg-cover bg-center bg-no-repeat bg-opacity-10 text-5xl font-bold text-white"
        >
            <div className="absolute w-full h-full bg-black opacity-70" />
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[#8981ffad] to-[rgb(255,255,255)]">
            </div>
            <motion.div
            className='relative z-20'
                variants={subtitleAn}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <h1>Todos los Productos</h1>
            </motion.div>
        </section>
    );
};

export default Hero;
