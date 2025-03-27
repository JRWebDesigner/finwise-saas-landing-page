import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { allCategoriesQuery } from '@/sanity/lib/queries';

export default async function GetCategorys() {
  // Recupera las categorías desde Sanity
  const queries = await client.fetch(allCategoriesQuery);

  console.log('Categorías recuperadas:', queries); // Depuración

  return (
    <ul>
      <li>
        <Link href="/productos">
          Todos
        </Link>
      </li>
      {queries.map((queri) => (
        <li key={queri._id}>
          <Link href={`/productos/${queri.enlace}`}>
            {queri.nombre}
          </Link>
        </li>
      ))}
    </ul>
  );
}