import Link from 'next/link';
import {allCategoriesQuery} from '@/sanity/lib/queries';
import { SanityDocument } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/fetch';

export default async function GetCategorys() {
  const categorys = await sanityFetch<SanityDocument[]>({ query: allCategoriesQuery });
    console.log(categorys)
    return (
        <ul>
            <li>
                <Link href='/productos'>
                    Todos
                </Link>
            </li>
            {categorys.map((category: { _id: string; Nombre: string; Enlace: string }) => (
                <li key={category._id}>
                    <Link href={`/productos/${category.Enlace}`}>
                        {category.Nombre}
                    </Link>
                </li>
            ))}
        </ul>
    )
}