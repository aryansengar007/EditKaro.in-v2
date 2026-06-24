import { motion } from 'framer-motion'
import SectionHeading from '../UI/SectionHeading'

const STEPS = [
  { n: '01', title: 'Brief & Discovery', text: 'We learn your audience, voice, and goals before touching a single clip.' },
  { n: '02', title: 'Story & Structure', text: 'We map pacing, hooks and structure so the edit has a clear narrative spine.' },
  { n: '03', title: 'Edit & Grade', text: 'Our editors and colorists craft the cut, sound design and signature look.' },
  { n: '04', title: 'Review & Refine', text: 'Two structured revision rounds, fast turnaround, no scope creep.' },
  { n: '05', title: 'Deliver & Grow', text: 'Final exports plus a posting and growth plan if marketing is in scope.' },
]

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="How We Work"
          title="A process built for momentum."
          description="Every project — big or small — moves through the same five disciplined steps."
        />

        <div className="mt-16 grid md:grid-cols-5 gap-px bg-ink/8 rounded-3xl overflow-hidden">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-cream p-6 md:p-7 flex flex-col"
            >
              <span className="font-display text-3xl font-semibold text-gradient">{s.n}</span>
              <h3 className="font-display text-base font-semibold text-ink mt-4">{s.title}</h3>
              <p className="text-ink-soft text-xs mt-2 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
