'use client'
import React from 'react';
import Title from '../Title'

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="uppercase relative flex items-center justify-center px-5 h-[80vh] md:h-[100vh] bg-[url('/images/banner.webp')] bg-cover bg-center bg-no-repeat bg-opacity-10"
        >
            <div className="absoulte w-full h-full bg-black opacity-50" />
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[#8981ffad] to-[rgb(255,255,255)]">
            </div>
            <Title />
        </section>
    );
};

export default Hero;
