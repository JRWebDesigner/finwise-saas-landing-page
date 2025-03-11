'use client'
import React from 'react';
import HeroCarrusel from './HeroCarrusel'
const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center px-5 h-[66vh] md:h-[100vh] bg-[url('/images/banner.jpeg')] bg-cover bg-center bg-no-repeat bg-opacity-10"
        >
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[#ff8181ad] to-[rgb(255,255,255)]">
            </div>
            <HeroCarrusel />
        </section>
    );
};

export default Hero;
