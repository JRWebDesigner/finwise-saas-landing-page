'use client'
import {motion} from 'framer-motion'

const entryCard = {
	offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.8,
        }
    },
}

interface PropsService{
	imagen:string;
	name:string;

}
export default function ServiceCard({imagen, name}:PropsService){
    return(
      <motion.div className='container relative flex justify-center items-end w-[300px] h-[240px] bg-cover bg-center'
	  style={{backgroundImage:`url(${imagen})`}}
	  variants={entryCard}
	  initial="offscreen"
        whileInView="onscreen"
      	viewport={{ once: true }}
      >
				<div className='absolute w-full h-full bg-black hover:bg-red-600 opacity-40 z-0 duration-300'/>
				<h3 className='name_service text-center text-xl md:text-2xl font-bold text-red-100 relative z-10 duration-300 p-4'>
					{name}
				</h3>
			</motion.div>
    )
}