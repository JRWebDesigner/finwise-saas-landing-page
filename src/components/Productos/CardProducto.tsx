'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
        },
    },
};

interface CardProductoProps {
    image: string;
    name: string;
    price: number;
    desc: string;
    mark: string;
}

export default function CardProducto({ image, name, price, desc, mark }: CardProductoProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {/* Card */}
            <motion.div
                className="flex flex-col bg-gray-100 w-[250px] h-[380px] p-6 rounded-2xl shadow-md hover:bg-primary hover:text-white hover:scale-110 duration-300"
                variants={entryProd}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                onClick={toggleModal} // Abre el modal al hacer clic en la tarjeta
            >
                <img className="max-h-[230px]" src={image} alt={name} />
                <div className="flex justify-center font-bold text-xl">
                    <h3>{name}</h3>
                </div>
                <span className="flex justify-center items-center text-sm">{mark}</span>
                <p className="text-justify text-sm">{desc}</p>
            </motion.div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-[95%] h-[90vh] p-6 rounded-lg shadow-lg relative flex flex-wrap justify-around items-center">
                        {/* Botón para cerrar el modal */}
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            onClick={toggleModal}
                        >
                            ✕
                        </button>

                        {/* Contenido del modal */}
                        <img className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover rounded-md mb-4" src={image} alt={name} />
                        <div className='flex-center flex-col md:pl-4'>
                            <div className='flex-around w-full md:w-[600px]'>
                                <h2 className="text-2xl md:text-4xl font-bold mb-2">{name}</h2>
                            </div>
                            <div className="flex-center w-full">
                                <span className="text-sm text-gray-500">{mark}</span>
                            </div>
                            <div className='overflow-y-auto w-full max-h-[400px] p-4'>
                            <p className="text-gray-700 ">{desc}</p>
                            </div>
                            <a className='bg-[#035AC7] p-2 rounded-3xl text-white text-bold text-lg font-bold w-[170px] flex-center hover:scale-105 duration-200' href={`https://wa.me/59168071168?text=Deseo%20el%20producto%20${name}`} target="_blank" rel="noopener noreferrer">Hacer Pedido</a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
