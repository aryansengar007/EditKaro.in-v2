import { motion } from 'framer-motion'
import AnimatedText from '../UI/AnimatedText'
import MagneticButton from '../UI/MagneticButton'

export default function CTASection() {
  return (
    <section className="relative py-28 md:py-36 bg-paper overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-indigo/10 via-violet/10 to-cyan/10 blur-3xl" />
        </motion.div>

        <span className="eyebrow inline-flex items-center gap-2 justify-center mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo to-cyan" />
          Ready When You Are
        </span>

        <AnimatedText
          text="Your next viral moment starts with one brief."
          as="h2"
          className="text-display-md font-display font-semibold text-ink"
        />

        <p className="text-ink-soft mt-6 max-w-md mx-auto">
          Tell us about your brand, your audience, and your goals — we'll handle the rest.
        </p>

        <div className="mt-10 flex justify-center">
          <MagneticButton to="/contact" variant="gradient" cursorLabel="Contact">
            Let's Talk
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
