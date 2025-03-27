import { client } from '@/sanity/lib/client';
import { allCategoriesQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
interface Category {
  _id: string;
  nombre: string;
  enlace: string | null; // Puede ser null si el slug no está definido
}
export default async function GetCategorys() {
  
  const categories: Category[] = await client.fetch(allCategoriesQuery);
  console.log(categories)
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