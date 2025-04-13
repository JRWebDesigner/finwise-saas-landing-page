import type { Metadata } from "next";
import GetCategorys from "@/components/Productos/GetCategorys";
import Hero from "@/components/ProductsPage/Hero";
export const metadata: Metadata = {
  title: "n-innovations biosupply bol. ltda. - Productos",
  description: "Conoce la variedad de productos que tenemos para tu laboratorio - solo en n-innovations biosupply bol. ltda.",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Hero />
      <div className="max-w-screen-2xl mx-auto mt-20">
        {/* Contenedor principal modificado */}
        <div className="flex flex-col md:grid md:grid-cols-[0.2fr_2fr] gap-6">
          {/* Sidebar de categorías - Fijo en móvil, normal en desktop */}
          <div className="md:sticky md:top-20 md:h-[calc(100vh-5rem)] md:overflow-y-auto md:border-r-2 md:border-primary w-full bg-white z-10 fixed top-0 left-0 right-0 shadow-md md:shadow-none md:relative md:bg-transparent px-4 py-2 md:py-0">
            <h2 className='text-center font-bold text-xl sticky top-0 bg-white py-2 md:bg-transparent md:static'>Categorias</h2>
            <nav className='pl-4 duration-300 text-blue-500 underline flex flex-wrap justify-center gap-2 md:flex-col md:items-start md:justify-start'>
              <GetCategorys />
            </nav>
          </div>
          
          {/* Contenido principal */}
          <div className='px-5 mt-16 md:mt-0'> {/* mt-16 para compensar el header fijo en móvil */}
            <h2 className="text-2xl font-bold text-center">
              Nuestros productos
            </h2>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}