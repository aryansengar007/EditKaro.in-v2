import SEO from '../components/Layout/SEO'
import Hero from '../components/Home/Hero'
import Stats from '../components/Home/Stats'
import Services from '../components/Home/Services'
import FeaturedWork from '../components/Home/FeaturedWork'
import Testimonials from '../components/Home/Testimonials'
import CTASection from '../components/Home/CTASection'

export default function Home() {
  return (
    <>
      <SEO
        title="Premium Video Editing & Social Media Marketing"
        description="Editkaro.in transforms content into viral stories with premium video editing and social media marketing for brands, creators and businesses."
        path="/"
      />
      <Hero />
      <Stats />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <CTASection />
    </>
  )
}
