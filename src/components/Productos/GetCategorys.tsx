import Link from 'next/link';
import {client} from '@/sanity/lib/client';
import {allCategoriesQuery} from '@/sanity/lib/queries';

export default async function GetCategorys() {
    const categorys = await client.fetch(allCategoriesQuery);
    return (
        <ul>
            <li>
                <Link href='/productos'>
                    Todos
                </Link>
            </li>
            {categorys.map((category: { _id: string; title: string; slug: { current: string } }) => (
                <li key={category._id}>
                    <Link href={`/productos/${category.slug.current}`}>
                        {category.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}