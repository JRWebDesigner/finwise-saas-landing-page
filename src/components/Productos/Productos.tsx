'use client' 
import {motion} from 'framer-motion'
import CardProducto from './CardProducto'

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
export default function Productos(){
    return(
        <>
        <motion.div
            className="text-center text-3xl font-bold "
            variants={subtitleAn}
            initial="offscreen"
            whileInView="onscreen"
      	    viewport={{ once: true }}
        >
            <h2>
                Nuestros productos destacados
            </h2>
        </motion.div>
        <div className='flex justify-start md:justify-center items-center gap-10 my-10 w-[90%] mx-auto overflow-x-auto overflow-y-hidden'>
            <CardProducto 
                mainImage={'./images/miicroscopio.png'}
                nombre={'Prueba producto'}
                
                marca={'marca uno'}
                descripcion={[]}
            />
            <CardProducto 
                mainImage={'./images/miicroscopio.png'}
                nombre={'Prueba producto'}
                
                marca={'marca dos'}
                descripcion={[]}
            />
            <CardProducto 
                mainImage={'./images/miicroscopio.png'}
                nombre={'Prueba producto'}
                
                marca={'marca tres'}
                descripcion={[]}
            />
        </div>
        </>
    )
}
