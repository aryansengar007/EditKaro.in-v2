import SEO from '../components/Layout/SEO'
import SectionHeading from '../components/UI/SectionHeading'
import FloatingBlobs from '../components/UI/FloatingBlobs'
import AnimatedText from '../components/UI/AnimatedText'
import MissionVision from '../components/About/MissionVision'
import Timeline from '../components/About/Timeline'
import Process from '../components/About/Process'
import MagneticButton from '../components/UI/MagneticButton'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Editkaro.in is a premium video editing and social media marketing studio built on craft, story and momentum. Learn our mission, vision and journey."
        path="/about"
      />

      <section className="relative pt-36 md:pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-1" />
        <FloatingBlobs />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
          <span className="eyebrow inline-flex items-center gap-2 justify-center mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo to-cyan" />
            About Editkaro.in
          </span>
          <AnimatedText
            text="Craft first. Always."
            as="h1"
            className="text-display-lg font-display font-semibold text-ink"
          />
          <p className="text-ink-soft text-base md:text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            We're a small studio with a simple belief — every brand, creator and business
            deserves editing that feels intentional, not automated.
          </p>
        </div>
      </section>

      <MissionVision />
      <Timeline />
      <Process />

      <section className="py-24 md:py-32 bg-deep-ink text-center">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeading
            eyebrow="Work With Us"
            title="Meet the people behind the cuts."
            align="center"
            dark
          />
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/team" variant="gradient" cursorLabel="Team">
              Meet the Team
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  )
}
