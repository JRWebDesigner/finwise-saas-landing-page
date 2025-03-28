'use client'
import {motion} from 'framer-motion'
import ServicesCard from './ServicesCard'
import './service.css'
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
        <section className="flex flex-wrap md:flex-nowrap flex-row-reverse justify-between items-center my-20 w-full">
            <motion.div
                        className="text-2xl md:text-3xl font-bold text-red-800 w-[570px] text-center md:text-right"
                        variants={subtitleAn}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
            >
                <h2>
                    En BIOSUPPLYBOL estamos especialisados <br /> en las siguientes secciones
                </h2>
            </motion.div>
            <div className='grid grid-cols-2 justify-center items-center w-[710px]'>
                <div className='flex-center'>

                <ServicesCard 
                    imagen='https://interprise.com.br/wp-content/uploads/2023/10/Farmaceutico-01.webp'
                    name='Farmacéutico'
                />
                <ServicesCard 
                    imagen='https://interprise.com.br/wp-content/uploads/2023/10/Expertise-compromisso-01.webp'
                    name='Universidades y Centros de Investigación'
                />
                <ServicesCard 
                    imagen='https://interprise.com.br/wp-content/uploads/2023/10/segmento-ambiental.webp'
                    name='Análisis Ambientales'
                />
                <ServicesCard 
                    imagen='https://interprise.com.br/wp-content/uploads/2023/10/segmento-industria-quimica.webp'
                    name='Industria Química'
                />
                 
                 </div>
                 <div className='flex-center'>
                 <ServicesCard 
                    imagen='https://interprise.com.br/wp-content/uploads/2023/10/segmento-agraonegocio-II.webp'
                    name='Agronegocios'
                />
                 <ServicesCard 
                    imagen='https://interprise.com.br/wp-content/uploads/2023/10/Expertise-compromisso-02.webp'
                    name='Medicina y Diagnóstico'
                />
                 <ServicesCard 
                    imagen='https://interprise.com.br/wp-content/uploads/2023/10/segmento-comesticos.webp'
                    name='Cosmético'
                />
                 <ServicesCard 
                    imagen='https://interprise.com.br/wp-content/uploads/2023/10/segmento-alimentos-bebidas.webp'
                    name='Alimentos y Bebidas'
                />
                 </div>
            </div>
        </section>
    )
}