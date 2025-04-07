import Hero from '@/components/ContactPage/Hero'
import Container from '@/components/Container'
const ContactPage: React.FC = () => {
  return(
    <>
        <Hero />
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Información de Contacto</h2>
                 <ul className="flex justify-center items-center flex-col">
                    <li className="w-[90%]">
                       <a href="https://maps.app.goo.gl/AxrVpc1vW1mtBNYE7"><strong>LA PAZ: </strong> AV. LA PAZ Y CALLE L. DE LA VEGA NO 3420 Z/BALLIVIAN</a>
                    </li>
                    <li className="w-[90%]">
                       <a href="https://maps.app.goo.gl/AxrVpc1vW1mtBNYE7"><strong>SANTA CRUZ: </strong> CALLE QUIJARRO Y CALLE 6 DE AGOSTO NO. 557 GALERIA PLATINUM - 1ER. ANILLO</a>
                    </li>
                    
                    <li className="w-[90%]">
                        <a href="">
                            <strong>Celular:</strong> +591 77793456
                        </a>
                    </li>
 <li className="w-[90%]">
                        <a href="">
                            <strong>Celular:</strong> +591 68149201
                        </a>
                    </li>
                    <li className="w-[90%]">
                        <a href="">
                            <strong>Email:</strong> nombre@domino.com
                        </a>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Envíanos un mensaje</h2>
                <form action="#" method="POST" className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" id="name" name="name" placeholder="Tu nombre completo" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input type="email" id="email" name="email" placeholder="Tu correo electrónico" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                        <textarea id="message" name="message" rows={5} placeholder="Escribe tu mensaje aquí" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-primary text-white py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
        </Container>
    </>
  )
}
export default ContactPage
