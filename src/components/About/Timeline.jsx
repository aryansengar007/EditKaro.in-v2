import { motion } from 'framer-motion'
import SectionHeading from '../UI/SectionHeading'

const MILESTONES = [
  { year: '2021', title: 'The First Edit', text: 'Started as a one-person operation editing reels for local creators in Gurugram.' },
  { year: '2022', title: 'Studio Mode', text: 'Built a small core team and took on our first agency retainer clients.' },
  { year: '2023', title: 'Scaling Formats', text: 'Expanded into long-form, gaming, and sports edits as creator demand diversified.' },
  { year: '2024', title: 'Full-Service Marketing', text: 'Added social strategy and paid creative to close the loop from edit to growth.' },
  { year: '2026', title: 'Editkaro.in Today', text: 'A full-stack creative studio trusted by 180+ brands and creators across formats.' },
]

export default function Timeline() {
  return (
    <section className="relative py-24 md:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Our Journey" title="From one editor to a full studio." />

        <div className="relative mt-16 pl-8 md:pl-0">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo via-violet to-cyan -translate-x-1/2 md:-translate-x-px" />

          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}
            >
              <div
                className={`absolute top-1 w-3 h-3 rounded-full bg-gradient-to-br from-indigo to-cyan -left-8 md:left-auto ${
                  i % 2 === 0 ? 'md:right-[-6px]' : 'md:left-[-6px]'
                }`}
              />
              <span className="font-mono text-xs text-indigo">{m.year}</span>
              <h3 className="font-display text-xl font-semibold text-ink mt-1">{m.title}</h3>
              <p className="text-ink-soft text-sm mt-2 leading-relaxed">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
