'use client'
import {motion} from 'framer-motion'

export const entryDiv = {
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
export default function ContainAboutPage(){
    return(
        <>
        <section className='mx-7 my-10'>
						<motion.div 
							variants={entryDiv}
							initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
						>
						<h2 className='font-bold text-2xl md:text-3xl'>Éxito Competitivo</h2>
						<p>
							El éxito competitivo de N-INNOVATIONS BIOSUPPLY BOL. LTDA. no sólo se debe a la integración de la organización como un todo, sino a la especialización que tiene cada área para la realización adecuada de sus actividades y la percepción ante las necesidades futuras de nuestros clientes. Nuestro capital humano a su vez, cuenta con el conocimiento técnico necesario para ofrecer la solución que los clientes requieren de forma eficiente y adecuada para la toma de decisiones.
						</p>
						</motion.div>
					</section>

					<motion.div 
					className="grid grid-cols-1 md:grid-cols-2 mb-10 justify-around items-center gap-5 flex-wrap" 
							variants={entryDiv}
							initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
						>
						<div>
							<h2 className='font-bold text-xl md:text-2xl'>Mision</h2>
							<p>
								Somos una empresa privada importadora y distribuidora de equipos, consumibles y reactivos químicos de laboratorio con cobertura a lo largo de todo el país, para satisfacer las necesidades en el sector industrial, analítico y de investigación, dando una atención personalizada a nuestros clientes en las áreas de venta, postventa y asesoría técnica, gracias a que contamos un equipo de trabajo especializado y altamente comprometido.
							</p>	
						</div>
						<div>
							<h2 className='font-bold text-xl md:text-2xl'>Vision</h2>
							<p>
								Ser una empresa líder en Bolivia de distribución de productos químicos, que aporten al quehacer diario del país y al desarrollo científico-tecnológico otorgando un servicio de excelencia a nuestros clientes.

							</p>
								 
						</div>
					</motion.div>
        </>
    )
}
