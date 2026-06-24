import { motion } from 'framer-motion'
import { services } from '../../data/services'
import SectionHeading from '../UI/SectionHeading'
import TiltCard from '../UI/TiltCard'

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="What We Do"
            title="One studio. Every format that moves."
            description="From three-second hooks to fifteen-minute documentaries — our team edits across the full spectrum of modern content."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard
                  tiltStrength={6}
                  className="group glass rounded-3xl p-7 h-full flex flex-col justify-between min-h-[220px] hover:shadow-glass-lg transition-shadow duration-500 cursor-default"
                  data-cursor="explore"
                  data-cursor-label={s.title}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo to-cyan flex items-center justify-center shadow-glass">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="font-mono text-xs text-ink-soft/50">{s.tag}</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-display text-xl font-semibold text-ink group-hover:text-indigo transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-ink-soft text-sm mt-2 leading-relaxed">{s.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
