import type { Metadata } from "next";
import GetCategorys from "@/components/Productos/GetCategorys";
import Hero from "@/components/ProductsPage/Hero";
export const metadata:Metadata = {
	title: "n-innovations biosupply - Productos",
	description: "",
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
        <div className="grid grid-cols-[0.4fr_1fr]">
          <div className='border-r-2 border-primary'>
            <h2 className='text-center font-bold text-xl'>Categorias:</h2>
            <nav className='pl-4 hover:text-primary duration-300 text-blue-500 underline'>
              <GetCategorys />
            </nav>
          </div>
          <div className='px-5'>
            {children}
          </div>
        </div>
      </div>
		</>
	)
}