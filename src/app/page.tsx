'use client'
import Hero from "@/components/Hero/Hero";
import HeroCarrusel from '@/components/Hero/HeroCarrusel'
import Container from "@/components/Container";
import Suministracion from "@/components/Suministracion";
import Productos from "@/components/Productos/Productos";
import CardContac from '@/components/CardContac'
import Services from "@/components/Services/Services";
import Marcas from "@/components/Marcas/Marcas";
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HeroCarrusel />
      <hr className="border-2 border-[#fd5756] w-[80%] mx-auto my-8"/>
      <div className='text-center text-[18px] w-[80%] mx-auto'>
        <p>
        Estamos dedicados íntegramente a la comercialización de instrumental científico y analítico.
        <br />
      Contamos con el soporte de Fabricantes de prestigio Mundial. <br />
  Podemos enviarles los equipos directamente desde las fábricas, ofrecerles la capacitación y entrenamiento según las especialidades ofrecidas.
        </p>
      </div>
      <Container>
        <Services />
      </Container>
      <Container>
        <hr className="border-2 border-[#fd5756] w-[80%] mx-auto my-8"/>
        <Productos />
      </Container> 
      <CardContac />
      <Suministracion />
      <Container>
        <Marcas />
      </Container>
    </>
  );
};

export default HomePage;
