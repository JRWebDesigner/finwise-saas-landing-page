import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { allCategoriesQuery } from '@/sanity/lib/queries';

// Define una interfaz específica para las categorías
interface Category {
  _id: string;
  nombre: string;
  enlace: string;
}

export default async function GetCategorys() {
  // Usa la consulta definida en queries.ts
  const categories: Category[] = await client.fetch(allCategoriesQuery);

  return (
    <ul>
      <li>
        <Link href="/productos">
          Todos
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category._id}>
          <Link href={`/productos/${category.enlace}`}>
            {category.nombre}
          </Link>
        </li>
      ))}
    </ul>
  );
}