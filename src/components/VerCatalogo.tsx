import Link from "next/link";
export default function VerCatalogo(){
    return(
        <Link href='/productos' className="px-4 py-2 bg-primary text-white rounded-3xl hover:bg-white hover:text-primary hover:border-2 border-primary duration-300">
            Ver Catalogo
        </Link>
    )
}