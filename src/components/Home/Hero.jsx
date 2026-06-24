import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, ArrowDown } from 'lucide-react'
import AnimatedText from '../UI/AnimatedText'
import MagneticButton from '../UI/MagneticButton'
import FloatingBlobs from '../UI/FloatingBlobs'

const CARDS = [
  { label: 'Short Form', gradient: ['#6366F1', '#06B6D4'], rotate: -6, pos: 'top-[8%] left-[2%] md:left-[6%]', delay: 0.9 },
  { label: 'Gaming Edits', gradient: ['#8B5CF6', '#6366F1'], rotate: 5, pos: 'top-[4%] right-[2%] md:right-[8%]', delay: 1.05 },
  { label: 'Ad Creatives', gradient: ['#06B6D4', '#8B5CF6'], rotate: -3, pos: 'bottom-[6%] left-[4%] md:left-[12%]', delay: 1.2 },
  { label: 'Documentary', gradient: ['#1E1B4B', '#6366F1'], rotate: 7, pos: 'bottom-[10%] right-[4%] md:right-[10%]', delay: 1.35 },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-mesh-1" />
      <FloatingBlobs />

      {/* floating video cards — desktop only, decorative */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.label}
            className={`absolute ${c.pos} w-44 h-28 rounded-2xl shadow-glass-lg overflow-hidden pointer-events-auto animate-float`}
            style={{ animationDelay: `${i * 0.6}s` }}
            initial={{ opacity: 0, scale: 0.7, rotate: c.rotate * 2 }}
            animate={{ opacity: 1, scale: 1, rotate: c.rotate }}
            transition={{ duration: 1, delay: c.delay, ease: [0.16, 1, 0.3, 1] }}
            data-cursor="play"
            data-cursor-label="Watch"
          >
            <div
              className="w-full h-full flex items-end p-3 relative"
              style={{ background: `linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})` }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/25 backdrop-blur flex items-center justify-center">
                <Play size={12} className="text-white fill-white" />
              </div>
              <span className="relative font-mono text-[11px] text-white tracking-wide">{c.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="eyebrow inline-flex items-center gap-2 mb-6 justify-center"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo to-cyan" />
          Video Editing &amp; Social Media Marketing Studio
        </motion.div>

        <AnimatedText
          text="Transforming Content Into Viral Stories"
          as="h1"
          delay={0.25}
          className="text-display-xl font-display font-semibold text-ink"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-7 text-base md:text-lg text-ink-soft max-w-xl mx-auto leading-relaxed"
        >
          Premium video editing and social media marketing solutions for brands, creators,
          and businesses who refuse to blend in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton to="/contact" variant="gradient" cursorLabel="Contact">
            Start a Project
          </MagneticButton>
          <MagneticButton to="/portfolio" variant="outline" icon={false} cursorLabel="View Work">
            <Play size={14} className="fill-ink" /> Watch Our Work
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-ink-soft"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
