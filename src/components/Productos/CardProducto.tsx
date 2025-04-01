'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PortableTextBlock } from 'next-sanity';
import { PortableText } from 'next-sanity';

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
            duration: 0.7,
        },
    },
};

interface CardProductoProps {
    nombre: string;
    mainImage: string;
    marca: string; 
    descripcion: PortableTextBlock[];
}

export default function CardProducto({ nombre, mainImage, marca, descripcion }: CardProductoProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return(
        <>
            {/* Card */}
            <motion.div
                className="flex-center flex-col gap-1 bg-gray-100 w-[300px] md:w-[300px] max-h-[420px] md:h-[500px] p-1 rounded-2xl shadow-md hover:bg-primary hover:text-white hover:scale-110 duration-300 break-words whitespace-normal"
                variants={entryProd}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                onClick={toggleModal} // Abre el modal al hacer clic en la tarjeta
            >
                <img className="max-h-[230px] object-contain" src={mainImage} alt={nombre} />
                <div className="flex max-h-[100px] justify-center font-semibold text-sm md:text-[1rem] break-words whitespace-normal">
                    <h3>{nombre}</h3>
                </div>
                <span className="flex justify-center items-center text-sm">{marca}</span>
								<button className='text-sm md:text-lg px-5 py-2 rounded-3xl border-2 border-white mt-2 hover:bg-secondary duration-300 truncate'>Más detalles</button>
							</motion.div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex-center bg-black bg-opacity-50 z-50" role="dialog" aria-hidden={!isModalOpen}>
                    <div className="bg-white w-[95%] h-[90vh] p-6 rounded-lg shadow-lg relative flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-around items-center">
                        {/* Botón para cerrar el modal */}
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            onClick={toggleModal}
                        >
                            ✕
                        </button>

                        {/* Contenido del modal */}
                        <img className="w-[200px] h-[200px] md:w-[50%] md:max-w-[400px] md:h-auto max-h-[80%] object-cover rounded-xl md:mb-4" src={mainImage} alt={nombre} />
                        <div className="flex-center flex-col md:pl-4">
                            <div className="flex-around w-full md:w-[600px]">
                                <h2 className="text-lg md:text-2xl font-bold mb-2">{nombre}</h2>
                            </div>
                            <div className="flex-center w-full my-2">
                                <span className="text-sm text-gray-500 text-primary">{marca}</span>
                            </div>
                            <div className="overflow-y-auto w-full max-h-[200px] md:max-h-[300px] prose prose-xl">
                                <h3>Descripción:</h3>
                                <PortableText value={descripcion} />
                            </div>
                            <a
                                className="bg-[#035AC7] p-2 rounded-3xl text-white text-bold text-lg font-bold w-[170px] flex-center hover:scale-105 duration-200"
                                href={`https://wa.me/59177793456?text=Deseo%20el%20producto%20${nombre}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Hacer Pedido
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
