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
      <motion.div className='container_service relative flex justify-center items-end w-[90px] h-[580px] bg-cover bg-center duration-300'
	  style={{backgroundImage:`url(${imagen})`}}
	  variants={entryCard}
	  initial="offscreen"
        whileInView="onscreen"
      	viewport={{ once: true }}
      >
				<div className='absolute w-full h-full bg-black  opacity-40 z-0 duration-300'/>
                <div className="flex-center relative p-4 duration-300 h-full w-full z-10 name_service hover:bg-[#035bc748] bg-opacity-40">
				<h3 className='text-center text-xl md:text-2xl font-bold text-white'>
					{name}
				</h3>
                </div>
			</motion.div>
    )
}