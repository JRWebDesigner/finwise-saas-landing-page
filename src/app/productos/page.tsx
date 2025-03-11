import Hero from '@/components/ProductsPage/Hero'
import Container from '@/components/Container'
const ProductsPage: React.FC = () => {
  return(
    <>
      <Hero />
      <Container>
        <div className="grid grid-cols-[0.4fr_1fr]">
          <div className='border-r-2 border-primary'>
            <h2 className='text-center font-bold text-xl'>Categorias:</h2>
            <span>Todavia no tenemos categorias</span>
          </div>
          <div className='px-5'>
            <h2 className='text-center font-bold text-xl'>Productos:</h2>
            <span>Todavia no hay productos</span>
          </div>
        </div>
      </Container>
    </>
  )
}
export default ProductsPage