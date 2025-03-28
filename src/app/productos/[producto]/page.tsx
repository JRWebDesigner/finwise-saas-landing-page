import CardProducto from "@/components/Productos/CardProducto";
import { getProductCategory } from "@/sanity/lib/queries";
import { PortableTextBlock } from "next-sanity";

type Props={
  params: {
    producto: string;
  };
}

interface ProductType {
	_id: string;
	nombre: string;
	mainImage: string;
	marca: string;
	descripcion: PortableTextBlock[];
}
export default async function ProductSlug({params}:Props){
	const slug = params.producto
	const productos : ProductType[] = await getProductCategory(slug)
	return <ul className="flex-around flex-wrap gap-6">
					{productos.map((product) => (
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
}