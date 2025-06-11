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
      <div className="relative max-w-screen-2xl mx-auto mt-20">
        <div className="flex flex-col lg:flex-row gap-6 px-5">
          {/* Sidebar con categorías */}
          <aside className="w-full lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-lg shadow-sm border p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 text-cetner">Categorías</h3>
              <div className="space-y-2">
                <GetCategorys />
              </div>
            </div>
          </aside>

          {/* Contenido principal */}
          <main className="flex-1 min-w-0">
            <div className="mt-16 md:mt-0">
              <h2 className="text-2xl font-bold text-center mb-8">Nuestros productos</h2>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
