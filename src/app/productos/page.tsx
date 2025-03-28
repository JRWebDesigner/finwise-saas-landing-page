import { client } from "@/sanity/lib/client";
import { allProductsQuery } from "@/sanity/lib/queries";
import { PortableTextBlock } from "next-sanity";
import CardProducto from "@/components/Productos/CardProducto";

interface ProductTyoe {
  _id: string;
  nombre: string;
  mainImage: string;
  marca: string;
  descripcion: PortableTextBlock[];
}
export default async function ProductsPage(){
  const products : ProductTyoe[] = await client.fetch(allProductsQuery);
  return(
    <>

      <ul className="flex-around flex-wrap gap-6">
        {products.map((product) => (
          <li key={product._id}>
            <CardProducto
              nombre={product.nombre}
              mainImage={product.mainImage}
              marca={product.marca}
              descripcion={product.descripcion}
            />
          </li>
        ))}
      </ul>
    </>
  )
}