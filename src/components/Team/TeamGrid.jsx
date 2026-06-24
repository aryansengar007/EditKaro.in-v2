import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import TiltCard from '../UI/TiltCard'

export default function TeamGrid({ members }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <TiltCard tiltStrength={5} className="group glass rounded-3xl p-6 h-full">
            <div
              className="relative w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center mb-5"
              style={{ background: `linear-gradient(150deg, ${m.gradient[0]}, ${m.gradient[1]})` }}
              data-cursor="explore"
              data-cursor-label={m.name.split(' ')[0]}
            >
              <span className="font-display text-5xl font-semibold text-white/90">{m.initials}</span>

              <div className="absolute inset-0 bg-deep-ink/0 group-hover:bg-deep-ink/40 transition-colors duration-400 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    style={{ transitionDelay: `${idx * 60}ms` }}
                    aria-label={`${m.name} social link`}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            <h3 className="font-display text-lg font-semibold text-ink">{m.name}</h3>
            <p className="text-indigo text-xs font-mono mt-0.5">{m.role}</p>
            <p className="text-ink-soft text-sm mt-3 leading-relaxed">{m.bio}</p>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  )
}
