import type { Metadata } from "next";
import GetCategorys from "@/components/Productos/GetCategorys";
import Hero from "@/components/ProductsPage/Hero";
export const metadata:Metadata = {
	title: "n-innovations biosupply - Productos",
	description: "Conoce la variedad de productos que tenemos para tu laboratorio - solo en n-innovations biosupply",
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
        <div className="flex-around flex-col gap-6 md:grid md:grid-cols-[0.2fr_2fr]">
          <div className='border-r-2 border-primary'>
            <h2 className='text-center font-bold text-xl'>Categorias</h2>
            <nav className='pl-4 duration-300 text-blue-500 underline flex justify-center items-start flex-col'>
              <GetCategorys />
            </nav>
          </div>
          <div className='px-5'>
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
