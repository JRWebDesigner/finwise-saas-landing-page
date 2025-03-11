'use client'
import ContainAboutPage from '@/components/AboutPage/ContainAboutPage'
import Hero from '@/components/AboutPage/Hero'
import Container from '@/components/Container'

const AboutPage: React.FC = () => {
    return(
      <>
				<Hero />
				<Container>
					<ContainAboutPage />
      	</Container>
			</>
    )
}
export default AboutPage