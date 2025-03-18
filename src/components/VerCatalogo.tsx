import Link from "next/link";
export default function VerCatalogo(){
    return(
        <Link href='/productos' className="w-[200px] flex-center px-4 py-2 bg-secondary text-white rounded-3xl hover:bg-white hover:text-primary hover:border-2 border-primary duration-300 font-bold">
            Ver Catalogo
        </Link>
    )
}