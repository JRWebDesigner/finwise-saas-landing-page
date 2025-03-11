import Hero from '@/components/AboutPage/Hero'
import Container from '@/components/Container'
const AboutPage: React.FC = () => {
    return(
      <>
				<Hero />
				<Container>
					<section className='mx-7 my-10'>
						<h2 className='font-bold text-2xl md:text-3xl'>Nuestra Historia</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor laboriosam reprehenderit magnam quis expedita accusamus ea provident architecto, perferendis suscipit molestias excepturi esse totam labore. Aliquid voluptate corporis officiis voluptatem consequuntur necessitatibus porro dolorem velit recusandae alias. Facilis voluptatem ex soluta blanditiis inventore ad culpa nesciunt, exercitationem molestiae, voluptatum hic tempora libero sit explicabo quibusdam. Consequatur, quae? Similique in accusamus totam, non necessitatibus sit eveniet corrupti officiis est. Pariatur et unde excepturi quod magnam velit quaerat numquam, eum assumenda ipsa error repellendus? Voluptatibus, enim odio. Consequatur blanditiis tenetur dolorum error corrupti! Nostrum soluta reprehenderit dolore cumque facilis magni tempora quam magnam nesciunt consectetur, labore laborum eveniet adipisci totam exercitationem! Temporibus officiis fugit illo, dolor inventore quia enim! Veritatis ullam sunt repudiandae voluptatum eius quasi hic, nobis velit quaerat tenetur obcaecati eos ipsa maxime nam commodi. Quo quia unde, sed nobis iure aspernatur, repellendus aut illum repellat itaque numquam perspiciatis doloremque obcaecati ullam omnis reiciendis ipsum laudantium vero aliquid, tenetur ea.
						</p>
					</section>
					<section className="grid grid-cols-1 md:grid-cols-2 mb-10 justify-around items-center gap-5 flex-wrap">
						<div>
							<h2 className='font-bold text-xl md:text-2xl'>Mision</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloribus sint quos quas labore corrupti reiciendis delectus ipsum sapiente suscipit architecto, tempora excepturi dolore ea voluptates vero voluptas iusto? Tempore, modi at! Dolore odit, odio rerum debitis nam, ut tenetur aliquid iure blanditiis illum, vitae quis! Vero est consectetur id velit ut. Provident sapiente impedit a dolore ipsum tempora alias?
							</p>
						</div>
						<div>
							<h2 className='font-bold text-xl md:text-2xl'>Vision</h2>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut et doloremque nesciunt, quidem pariatur odio temporibus obcaecati tempore veritatis culpa velit est quaerat sint excepturi voluptas quis ad quae aspernatur a debitis? Odit tempore recusandae similique obcaecati reprehenderit illum fugiat ipsam enim, odio rerum blanditiis. Porro, ab voluptate pariatur dolorum architecto id ullam iure ad officia reprehenderit quo voluptatibus accusantium!
							</p>
						</div>
					</section>
      	</Container>
			</>
    )
}
export default AboutPage