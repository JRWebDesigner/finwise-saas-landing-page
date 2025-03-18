'use client'
import {motion,Variants} from 'framer-motion'
import VerCatalogo from './VerCatalogo';

const containerVartiants: Variants ={
	offscreen: {
		opacity: 0,
		y: 100
},
onscreen: {
		opacity: 1,
		y: 0,
		transition: {
				type: "spring",
				bounce: 0.2,
				duration: 1.5,
				delayChildren: 1,
				staggerChildren: 0.3,
		}
}
}
export const modRigth = {
    offscreen: {
        opacity: 0,
        x: -80,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.7,
            duration: 1.5,
        }
    },
};
export const modLeft = {
	offscreen: {
			opacity: 0,
			x: 80,
	},
	onscreen: {
			opacity: 1,
			x: 0,
			transition: {
					type: "spring",
					bounce: 0.7,
					duration: 1.5,
			}
	},
};
export default function Suministracion(){
    return(
		<div className="grid place-items-center my-32 md:my-20">
			<div className=' flex flex-wrap justify-around items-center gap-10'>
				<h2 className='font-semibold text-xl md:text-2xl text-center'> En N-INNOVATIONS BIOSUPPLY BOL <br className="hidden md:inline-block" /> suministramos material para: 
				</h2>
				<div className="hidden md:inline h-[30vh] border-2 border-primary" />
				<motion.div
							className='flex flex-col items-center gap-24 justify-around flex-wrap text-lg md:text-xl font-semibold  text-red-950 mb-10'
							variants={containerVartiants}
							initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
						>
					<motion.div 
								className="flex flex-col justify-center items-center"
								variants={modRigth}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true }}
							>
								<svg  xmlns="http://www.w3.org/2000/svg"  width="70"  height="70"  viewBox="0 0 24 24"  fill="rgb(69 10 10)"  className="icon icon-tabler icons-tabler-filled icon-tabler-flask"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 2a1 1 0 0 1 0 2v4.826l3.932 10.814l.034 .077a1.7 1.7 0 0 1 -.002 1.193l-.07 .162a1.7 1.7 0 0 1 -1.213 .911l-.181 .017h-11l-.181 -.017a1.7 1.7 0 0 1 -1.285 -2.266l.039 -.09l3.927 -10.804v-4.823a1 1 0 1 1 0 -2h6zm-2 2h-2v4h2v-4z" /></svg>
								Análisis Físico-Químico
							</motion.div>
									<motion.div className="flex flex-col justify-center items-center">
									<svg  xmlns="http://www.w3.org/2000/svg"  width="70"  height="70"  viewBox="0 0 24 24"  fill="none"  stroke="rgb(69 10 10)"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-microscope"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21h14" /><path d="M6 18h2" /><path d="M7 18v3" /><path d="M9 11l3 3l6 -6l-3 -3z" /><path d="M10.5 12.5l-1.5 1.5" /><path d="M17 3l3 3" /><path d="M12 21a6 6 0 0 0 3.715 -10.712" /></svg>
									Biología Molecular
							</motion.div>
							<motion.div 
								className="flex flex-col justify-center items-center"
								variants={modLeft} 
								initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true }}>
									<svg  xmlns="http://www.w3.org/2000/svg"  width="70"  height="70"  viewBox="0 0 24 24"  fill="none"  stroke="rgb(69 10 10)"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-test-pipe"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124" /><path d="M7 13h8" /><path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z" /><path d="M15 3l6 6" /></svg>
									Microbiología
					</motion.div>
				</motion.div>
			</div>
			<VerCatalogo/>
		</div>
    )
}