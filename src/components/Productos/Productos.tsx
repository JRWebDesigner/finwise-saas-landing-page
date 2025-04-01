'use client';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { allProductsQuery } from '@/sanity/lib/queries';
import { PortableTextBlock } from 'next-sanity';
import { motion } from 'framer-motion';
import CardProducto from './CardProducto';

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
};

interface ProductType {
    _id: string;
    nombre: string;
    mainImage: string;
    marca: string;
    descripcion: PortableTextBlock[];
}

export default function Productos() {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const limitedQuery = `${allProductsQuery}[0...4]`; // Limitar a 4 productos
            const fetchedProducts = await client.fetch(limitedQuery);
            setProducts(fetchedProducts);
        };
        fetchProducts();
    }, []);

    return (
        <>
            <motion.div
                className="text-center text-3xl font-bold"
                variants={subtitleAn}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <h2>Nuestros productos destacados</h2>
            </motion.div>
            <div className="flex justify-start md:justify-center items-center gap-10 my-10 w-[100%] mx-auto overflow-x-auto overflow-y-hidden">
                {products.map((product) => (
                    <CardProducto
                        key={product._id}
                        nombre={product.nombre}
                        mainImage={product.mainImage}
                        marca={product.marca}
                        descripcion={product.descripcion}
                    />
                ))}
            </div>
        </>
    );
}
