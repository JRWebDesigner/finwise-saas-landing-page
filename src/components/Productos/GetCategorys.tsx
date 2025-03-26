import Link from 'next/link';
import { allCategoriesQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';

// Define una interfaz específica para las categorías
interface Category {
  _id: string;
  Nombre: string;
  Enlace: string;
}

export default async function GetCategorys() {
  // Especifica que sanityFetch devuelve un array de Category
  const categories = await sanityFetch<Category[]>({ query: allCategoriesQuery });

  console.log(categories);

  return (
    <ul>
      <li>
        <Link href="/productos">
          Todos
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category._id}>
          <Link href={`/productos/${category.Enlace}`}>
            {category.Nombre}
          </Link>
        </li>
      ))}
    </ul>
  );
}
