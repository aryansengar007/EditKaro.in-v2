import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'
import AnimatedText from '../UI/AnimatedText'

const PILLARS = [
  {
    icon: Target,
    title: 'Mission',
    text: 'To give every brand and creator the editorial craft of a full in-house studio — without the overhead.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'A world where great storytelling is the default for every piece of content published online, not the exception.',
  },
  {
    icon: Heart,
    title: 'Values',
    text: 'Obsessive craft, honest timelines, and a refusal to ship anything we wouldn\'t post on our own page.',
  },
]

export default function MissionVision() {
  return (
    <section className="relative py-24 md:py-32 bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedText
          text="We exist to make content impossible to scroll past."
          as="h2"
          className="text-display-md font-display font-semibold text-ink max-w-3xl"
        />

        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-3xl p-7"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo to-cyan flex items-center justify-center mb-5">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="text-ink-soft text-sm mt-2 leading-relaxed">{p.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
