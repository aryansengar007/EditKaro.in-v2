import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../UI/SectionHeading'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [paused])

  const current = testimonials[index]

  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-violet/10 blur-[100px]" />
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Client Words"
          title="Trusted by brands and creators"
          align="center"
        />

        <div
          className="relative mt-14 max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute -top-8 left-1/2 -translate-x-1/2 text-indigo/15" size={64} />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-8 md:p-12 text-center shadow-glass"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-cyan text-cyan" />
                ))}
              </div>
              <p className="font-display text-xl md:text-2xl text-ink leading-snug">
                "{current.quote}"
              </p>
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo to-cyan flex items-center justify-center text-white font-mono text-sm font-medium">
                  {current.initials}
                </div>
                <div className="text-left">
                  <p className="font-medium text-ink text-sm">{current.name}</p>
                  <p className="text-ink-soft text-xs">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-glass transition-shadow"
              data-cursor="explore"
              data-cursor-label="Prev"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-indigo' : 'w-1.5 bg-ink/15'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-glass transition-shadow"
              data-cursor="explore"
              data-cursor-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
