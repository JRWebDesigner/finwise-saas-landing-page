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
                <p className="text-gray-600 mb-4">Estamos ubicados en la ciudad de La Paz, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, fugit. Sunt blanditiis provident error sequi..</p>
                <ul className="flex justify-center items-center flex-col">
                    <li className="w-[90%]">
                       <a href="https://maps.app.goo.gl/AxrVpc1vW1mtBNYE7"><strong>Dirección: </strong> Calle xxxxxx, <br /> xxxxx</a>
                    </li>
                    <li className="w-[90%]">
                        <a href="">
                            <strong>Celular:</strong> +591 77793456
                        </a>
                    </li>
                    <li className="w-[90%]">
                        <a href="">
                            <strong>Email:</strong> nombre@domino.com
                        </a>
                    </li>
                </ul>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3362451564312!2d-68.1622087!3d-16.509113899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edfa142489865%3A0x8103908d274ec4c0!2sDesechable%20CH&#39;PLAST!5e0!3m2!1ses-419!2sbo!4v1733948839199!5m2!1ses-419!2sbo" className="md:w-[600px] md:h-[450px] w-[90%] mt-6 mx-auto rounded-2xl" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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