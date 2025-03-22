'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import LogoMark from './LogoMark';

const logos = [
    { image: '/logos/logo1.jpeg', link: 'https://www.buerkle.de' },
    { image: '/logos/logo2.jpeg', link: 'https://www.palmsens.com/' },
    { image: '/logos/logo3.jpeg', link: 'https://www.rndsystems.com/' },
    { image: '/logos/logo4.jpeg', link: 'https://accuris-usa.com/' },
    { image: '/logos/logo5.jpeg', link: 'https://www.polysciences.com/' },
    { image: '/logos/logo6.jpeg', link: 'https://www.scienion.com/' },
    { image: '/logos/logo7.jpeg', link: 'https://biospherix.com/' },
];

export default function Marcas() {
    return (
        <div className="py-10 flex justify-center items-center">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2} // Mínimo 2 logos visibles
                breakpoints={{
                    640: { slidesPerView: 3 }, // 3 logos en pantallas >= 640px
                    768: { slidesPerView: 4 }, // 4 logos en pantallas >= 768px
                    1024: { slidesPerView: 5 }, // 5 logos en pantallas >= 1024px
                }}
                autoplay={{
                    delay: 0, // Sin pausa
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={1200} // Velocidad del desplazamiento continuo
                loop={true} // Carrusel infinito
                className="w-[90%] mx-auto"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <LogoMark image={logo.image} link={logo.link} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}