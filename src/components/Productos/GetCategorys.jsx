import Link from 'next/link';
import { SanityDocument } from 'next-sanity';
import { allCategoriesQuery} from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';

export default async function GetCategorys() {
  const categories =await sanityFetch<SanityDocument[]>({query: allCategoriesQuery})
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