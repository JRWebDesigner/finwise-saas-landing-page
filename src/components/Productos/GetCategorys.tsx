import Link from 'next/link';
import { getCategories } from '@/sanity/lib/queries';
import { CategoriesType } from '../../../types';

export default async function GetCategorys() {
  const categories: CategoriesType[] = await getCategories()

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