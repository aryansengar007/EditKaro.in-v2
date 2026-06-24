import SEO from '../components/Layout/SEO'
import SectionHeading from '../components/UI/SectionHeading'
import AnimatedText from '../components/UI/AnimatedText'
import FloatingBlobs from '../components/UI/FloatingBlobs'
import TeamGrid from '../components/Team/TeamGrid'
import MagneticButton from '../components/UI/MagneticButton'
import { team } from '../data/team'

export default function Team() {
  return (
    <>
      <SEO
        title="Team"
        description="Meet the editors, colorists, motion designers and strategists behind Editkaro.in's premium video editing and social media marketing work."
        path="/team"
      />

      <section className="relative pt-36 md:pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-1" />
        <FloatingBlobs />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="eyebrow inline-flex items-center gap-2 justify-center mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo to-cyan" />
            The People
          </span>
          <AnimatedText
            text="A small team. A big craft."
            as="h1"
            className="text-display-lg font-display font-semibold text-ink"
          />
          <p className="text-ink-soft text-base md:text-lg mt-6 max-w-lg mx-auto leading-relaxed">
            Every brief passes through a tight, senior team — no junior hand-offs,
            no outsourced cuts.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <TeamGrid members={team} />
        </div>
      </section>

      <section className="py-24 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeading eyebrow="Join Us" title="We're always looking for sharp editors." align="center" />
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" variant="solid" cursorLabel="Apply">
              Get In Touch
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  )
}
