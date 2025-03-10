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
                Nuestro Productos
            </h2>
        </motion.div>
        <div className='flex justify-center items-center gap-10'>
            <CardProducto 
                image={'./images/miicroscopio.png'}
                name={'Prueba producto'}
                price={30}
                mark={'marca fic'}
                desc={'lorem'}
            />
        </div>
        </>
    )
}