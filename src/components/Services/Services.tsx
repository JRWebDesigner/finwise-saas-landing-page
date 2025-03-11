'use client'
import {motion} from 'framer-motion'
import ServicesCard from './ServicesCard'

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
export default function Services(){
    return(
        <section className="flex flex-col justify-center items-center my-20 w-full">
            <motion.div
                        className="text-center text-3xl font-bold "
                        variants={subtitleAn}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
            >
                <h2>
                    Servicios que ofrecemos en BIOSUPPLYBOL:
                </h2>
            </motion.div>
            <div className='flex justify-center items-center flex-wrap'>
                <ServicesCard 
                    imagen='/images/laboratorio.webp'
                    name='Venta de Equipos de Laboratorio'
                />
                <ServicesCard 
                    imagen='/images/tecnicos.webp'
                    name='Instalacion y Puestas en Marcha'
                />
                <ServicesCard 
                    imagen='/images/mantenimiento.webp'
                    name='Mantenimiento y Reparacion'
                />
                <ServicesCard 
                    imagen='/images/suministro.webp'
                    name='Suministros Cientificos'
                />
            </div>
        </section>
    )
}