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
                image={'./images/miicroscopio.png'}
                name={'Prueba producto'}
                price={30}
                mark={'marca uno'}
                desc={'lorem'}
            />
            <CardProducto 
                image={'./images/miicroscopio.png'}
                name={'Prueba producto'}
                price={230}
                mark={'marca dos'}
                desc={'lorem'}
            />
            <CardProducto 
                image={'./images/miicroscopio.png'}
                name={'Prueba producto'}
                price={330}
                mark={'marca tres'}
                desc={'lorem'}
            />
        </div>
        </>
    )
}