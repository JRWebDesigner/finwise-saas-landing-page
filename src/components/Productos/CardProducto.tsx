'use client'
import {motion} from 'framer-motion'

export const entryProd = {
    offscreen: {
        opacity: 0,
        y: 50,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1.5,
        }
    },
}
interface CardProductoProps {
  image: string;
  name: string;
  price: number;
  desc: string;
  mark: string;
}
export default function CardProducto({image,name, price, desc, mark}:CardProductoProps){
    return(
        <motion.div className="flex flex-col bg-gray-100 w-[250px] h-[380px] p-6 rounded-2xl shadow-md hover:bg-primary hover:text-white hover:scale-110 duration-300" variants={entryProd} initial="offscreen"
        whileInView="onscreen"
      	viewport={{ once: true }}
        >
            <img className='max-h-[230px]' src={image} alt={name} />
            <div className="flex justify-between font-bold text-xl ">
                <h3>{name}</h3>
                <span>{price}Bs.</span>
            </div>
            <span className="flex justify-center items-center text-sm">{mark}</span>
            <p className="text-justify text-sm">{desc}</p>
        </motion.div>
    )
}
